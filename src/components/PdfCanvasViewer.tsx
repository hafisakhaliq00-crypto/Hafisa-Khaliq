import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Loader2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

interface PdfCanvasViewerProps {
  fileUrl: string;
  maxPages?: number;
  compact?: boolean;
  onFallbackRequested?: () => void;
}

export const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = ({
  fileUrl,
  maxPages,
  compact = false,
  onFallbackRequested,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [renderedUrls, setRenderedUrls] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function renderPdfPages() {
      setLoading(true);
      setError(null);
      try {
        const loadingTask = pdfjsLib.getDocument({ url: fileUrl });
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        setNumPages(pdf.numPages);
        const totalToRender = maxPages
          ? Math.min(maxPages, pdf.numPages)
          : pdf.numPages;

        const pageImages: string[] = [];
        const renderScale = compact ? 1.5 : 2.0;

        for (let pageNum = 1; pageNum <= totalToRender; pageNum++) {
          const page = await pdf.getPage(pageNum);
          if (cancelled) return;

          const viewport = page.getViewport({ scale: renderScale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) continue;

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);

          await page.render({
            canvasContext: context,
            viewport,
            canvas,
          }).promise;

          pageImages.push(canvas.toDataURL('image/png'));
        }

        if (!cancelled) {
          setRenderedUrls(pageImages);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to render PDF:', err);
          setError('Unable to preview the PDF document in this browser.');
          setLoading(false);
        }
      }
    }

    renderPdfPages();

    return () => {
      cancelled = true;
    };
  }, [fileUrl, maxPages, compact]);

  if (loading) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#23677C] bg-[#062B3A] p-8 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#35C5E5]" aria-hidden="true" />
        <p className="text-sm font-medium text-[#A9BAC5]">
          Loading CV document…
        </p>
      </div>
    );
  }

  if (error || renderedUrls.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-[#23677C] bg-[#073344] p-8 text-center">
        <p className="max-w-md text-sm text-[#A9BAC5]">
          {error || 'CV preview could not be loaded.'}
        </p>
        {onFallbackRequested && (
          <button
            type="button"
            onClick={onFallbackRequested}
            className="rounded-full bg-[#35C5E5] px-5 py-2.5 text-sm font-semibold text-[#031D2B] cursor-pointer hover:bg-[#54D8F0]"
          >
            Switch to Web CV View
          </button>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-4">
      {!compact && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#23677C] bg-[#062B3A] px-4 py-2.5">
          <p className="text-xs font-medium text-[#A9BAC5] tabular-nums">
            Showing {renderedUrls.length} of {numPages} {numPages === 1 ? 'page' : 'pages'}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.15).toFixed(2)))}
              aria-label="Zoom out"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#23677C] bg-[#073344] text-white hover:border-[#35C5E5] cursor-pointer"
            >
              <ZoomOut className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span className="min-w-[48px] text-center text-xs font-semibold text-white tabular-nums">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(1.6, +(z + 0.15).toFixed(2)))}
              aria-label="Zoom in"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#23677C] bg-[#073344] text-white hover:border-[#35C5E5] cursor-pointer"
            >
              <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {zoom !== 1 && (
              <button
                type="button"
                onClick={() => setZoom(1)}
                aria-label="Reset zoom"
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-[#23677C] bg-[#073344] px-2.5 text-xs text-[#A9BAC5] hover:border-[#35C5E5] hover:text-white cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-6 overflow-x-auto rounded-2xl border border-[#23677C]/70 bg-[#062B3A]/70 p-4 sm:p-6">
        {renderedUrls.map((src, idx) => (
          <div
            key={idx}
            style={{ width: `${Math.round(zoom * 100)}%`, maxWidth: compact ? '100%' : '860px' }}
            className="overflow-hidden rounded-xl border border-slate-300/30 bg-white shadow-2xl transition-all duration-150"
          >
            <img
              src={src}
              alt={`Hafsa Khaliq CV Page ${idx + 1}`}
              className="block h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

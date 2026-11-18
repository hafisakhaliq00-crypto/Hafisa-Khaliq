import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Printer,
  Share2,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  CV_EXTRA,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
} from '../data/portfolioData';
import { PdfCanvasViewer } from './PdfCanvasViewer';

interface CvViewerProps {
  onBack: () => void;
  onNotify: (message: string) => void;
}

export const CvViewer: React.FC<CvViewerProps> = ({ onBack, onNotify }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'interactive'>('pdf');
  const [copiedPdf, setCopiedPdf] = useState(false);

  const rawOrigin =
    typeof window !== 'undefined' ? window.location.origin : '';
  const origin = rawOrigin.replace('https://ais-dev-', 'https://ais-pre-');
  const shareablePdfUrl = `${origin}${PROFILE.cvPublicPath}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  const copyPdfLink = async () => {
    try {
      await navigator.clipboard.writeText(shareablePdfUrl);
      setCopiedPdf(true);
      onNotify('Direct CV PDF link copied to clipboard.');
      setTimeout(() => setCopiedPdf(false), 2400);
    } catch {
      onNotify('Copy failed — you can select the link manually.');
    }
  };

  return (
    <div className="min-h-screen bg-[#031D2B] text-white">
      {/* Sticky CV Viewer Toolbar */}
      <div className="sticky top-0 z-40 border-b border-[#23677C]/80 bg-[#031D2B]/95 backdrop-blur-md no-print">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full border border-[#23677C] bg-[#073344] px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:border-[#35C5E5] hover:text-[#54D8F0] cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </button>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white leading-tight">
                {PROFILE.name} — Curriculum Vitae
              </p>
              <p className="text-xs text-[#A9BAC5]">{PROFILE.title}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Segmented Mode Switcher */}
            <div
              role="tablist"
              aria-label="CV Display Mode"
              className="flex items-center rounded-lg border border-[#23677C] bg-[#062B3A] p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'pdf'}
                onClick={() => setViewMode('pdf')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#35C5E5] text-[#031D2B] font-semibold'
                    : 'text-[#A9BAC5] hover:text-white'
                }`}
              >
                PDF Document
              </button>
                <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'interactive'}
                onClick={() => setViewMode('interactive')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  viewMode === 'interactive'
                    ? 'bg-[#35C5E5] text-[#031D2B] font-semibold'
                    : 'text-[#A9BAC5] hover:text-white'
                }`}
              >
                Printable View
              </button>
            </div>

            <button
              type="button"
              onClick={copyPdfLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#35C5E5]/70 bg-[#073344] px-4 py-2 text-xs font-semibold text-[#54D8F0] whitespace-nowrap shrink-0 transition-colors hover:bg-[#35C5E5]/15 cursor-pointer"
            >
              {copiedPdf ? (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{copiedPdf ? 'PDF Link Copied' : 'Copy CV PDF Link'}</span>
            </button>

            <a
              href={PROFILE.cvFilePath}
              download={PROFILE.cvDownloadName}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#35C5E5] px-4 py-2 text-xs font-semibold text-[#031D2B] whitespace-nowrap shrink-0 transition-colors hover:bg-[#54D8F0]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            {viewMode === 'interactive' && (
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#23677C] px-4 py-2 text-xs font-medium text-[#A9BAC5] whitespace-nowrap shrink-0 transition-colors hover:border-[#35C5E5] hover:text-white cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Print</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Shareable Direct PDF Link Strip */}
      <div className="border-b border-[#23677C]/50 bg-[#062B3A] no-print">
        <div className="mx-auto max-w-[1160px] px-6 py-4">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-[#23677C] bg-[#073344]/80 px-4 py-2.5">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#54D8F0]">
                Shareable CV PDF Link (For LinkedIn, Behance &amp; Applications)
              </p>
              <p className="truncate text-xs text-[#A9BAC5]">{shareablePdfUrl}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={copyPdfLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#23677C] bg-[#031D2B] px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap hover:border-[#35C5E5] cursor-pointer"
              >
                {copiedPdf ? (
                  <Check className="h-3.5 w-3.5 text-[#35C5E5]" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-[#35C5E5]" />
                )}
                <span>{copiedPdf ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={PROFILE.cvPublicPath}
                target="_blank"
                rel="noopener noreferrer"
                title="Open PDF in new tab"
                className="inline-flex items-center justify-center rounded-lg border border-[#23677C] bg-[#031D2B] p-1.5 text-[#A9BAC5] hover:border-[#35C5E5] hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Viewer Body */}
      <main className="mx-auto max-w-[1160px] px-6 py-8">
        {viewMode === 'pdf' ? (
          <div className="space-y-4">
            <PdfCanvasViewer
              fileUrl={PROFILE.cvFilePath}
              onFallbackRequested={() => setViewMode('interactive')}
            />
            <p className="text-center text-xs text-[#A9BAC5]">
              Viewing original CV document ({PROFILE.cvDownloadName}). Switch to{' '}
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className="text-[#54D8F0] underline underline-offset-4 cursor-pointer"
              >
                Printable View
              </button>{' '}
              to print or copy structured text.
            </p>
          </div>
        ) : (
          /* Crisp, Full 3-Page CV Structured Layout */
          <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-2xl sm:p-12 print:border-0 print:p-0 print:shadow-none">
            <header className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {PROFILE.name}
                </h1>
                <p className="mt-1 text-base font-medium text-slate-600">
                  {PROFILE.title}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-slate-600 sm:items-end">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 hover:text-slate-950"
                >
                  <Mail className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 tabular-nums hover:text-slate-950"
                >
                  <Phone className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  <span>{PROFILE.phone}</span>
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </span>
              </div>
            </header>

            <section className="mt-8">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                Profile
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {PROFILE.aboutBio1} Passionate about visual identities, intuitive interfaces, and
                creating effective design solutions that support brand goals. Known for strong work
                ethic, quality output, and smooth team collaboration.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                Work Experience
              </h2>
              <div className="mt-4 space-y-6">
                {EXPERIENCE.map((job) => (
                  <div key={`${job.company}-${job.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{job.role}</h3>
                        <p className="text-sm font-medium text-slate-600">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 tabular-nums">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-2.5 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {job.specialties.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                Education
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="rounded-lg border border-slate-200 p-4">
                    <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                    <p className="mt-0.5 text-sm text-slate-600">{edu.institution}</p>
                    <p className="mt-1.5 text-xs text-slate-500 tabular-nums">
                      {edu.period}
                      {edu.status ? ` · ${edu.status}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                Academic &amp; Packaging Project
              </h2>
              <div className="mt-3">
                <h3 className="text-sm font-bold text-slate-900">
                  {CV_EXTRA.featuredProject.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {CV_EXTRA.featuredProject.description}
                </p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                Achievements &amp; Certifications
              </h2>
              <div className="mt-4 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-bold text-slate-900">{cert.title}</h3>
                      <span className="text-xs text-slate-500 tabular-nums">{cert.date}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600">{cert.issuer}</p>
                    <p className="mt-1 text-sm text-slate-700">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                  Skills &amp; Software
                </h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-700">
                  {CV_EXTRA.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="border-b border-slate-200 pb-2 text-sm font-bold tracking-wide text-slate-900 uppercase">
                    Hobbies &amp; Interests
                  </h2>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {CV_EXTRA.hobbies.map((hobby) => (
                      <li key={hobby}>{hobby}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 text-sm">
                  <div>
                    <p className="font-bold text-slate-900">Languages</p>
                    <p className="mt-1 text-slate-600">{CV_EXTRA.languages.join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">References</p>
                    <p className="mt-1 text-slate-600">{CV_EXTRA.references}</p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        )}
      </main>
    </div>
  );
};

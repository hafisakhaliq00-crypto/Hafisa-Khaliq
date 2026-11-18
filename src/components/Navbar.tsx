import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#23677C]/70 bg-[#031D2B]/90 backdrop-blur-md no-print">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-8 px-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54D8F0]"
        >
          Hafsa <span className="text-[#35C5E5]">Khaliq</span>
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A9BAC5]">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#54D8F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#54D8F0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#35C5E5] px-5 py-2 text-sm font-semibold text-[#031D2B] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#54D8F0] hover:shadow-[0_0_24px_rgba(84,216,240,0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#54D8F0]"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span>See My CV</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#23677C] text-white md:hidden cursor-pointer hover:border-[#35C5E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#54D8F0]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-[#23677C]/70 bg-[#031D2B] px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-2 text-base font-medium text-[#A9BAC5] transition-colors hover:text-[#54D8F0]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenCv();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#35C5E5] px-5 py-2.5 text-sm font-semibold text-[#031D2B] cursor-pointer"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>See My CV</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

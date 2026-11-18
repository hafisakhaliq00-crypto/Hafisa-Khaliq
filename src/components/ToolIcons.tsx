import React from 'react';

export interface ToolBadge {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const ADOBE_TOOLS: ToolBadge[] = [
  {
    id: 'ps',
    name: 'Photoshop',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#001E36" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#31A8FF" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#31A8FF">
          Ps
        </text>
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'Illustrator',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#330000" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#FF9A00" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#FF9A00">
          Ai
        </text>
      </svg>
    ),
  },
  {
    id: 'id',
    name: 'InDesign',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#49021F" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#FF3366" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#FF3366">
          Id
        </text>
      </svg>
    ),
  },
  {
    id: 'pr',
    name: 'Premiere Pro',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#00005B" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#9999FF" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#9999FF">
          Pr
        </text>
      </svg>
    ),
  },
  {
    id: 'ex',
    name: 'Adobe Express',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#1B0F3B" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#FF61F6" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#FF61F6">
          Ex
        </text>
      </svg>
    ),
  },
  {
    id: 'cc',
    name: 'Creative Cloud',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#FA0F00" />
        <polygon points="17.5,11 22.5,11 30,29 25,29 20,18 15,29 10,29" fill="#fff" />
      </svg>
    ),
  },
];

export const UI_TOOLS: ToolBadge[] = [
  {
    id: 'figma',
    name: 'Figma',
    icon: (
      <svg width="36" height="36" viewBox="-9.5 0 57 57" aria-hidden="true">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="cvg" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill="url(#cvg)" />
        <g fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 15.2C10.5 12.5 6 17 7.4 22.2C8.5 26.2 13 26.6 15 23.6M18.4 21.2C16.6 20.6 15.4 23.2 16.6 24.8C17.8 26 19.4 24.2 19.8 21.4L19.4 25.4M22.2 21.6L21.6 25.4M21.9 23C23 21 25.6 21.2 25.2 25.2M27 21.4C27.4 23 28 24.4 28.6 25C29.2 23.6 30.2 22.4 30.8 21.2M33.4 21.2C31.8 20.8 30.8 23.4 31.9 24.8C33 26 34.5 24.4 34.6 22L34.3 25.4" />
        </g>
      </svg>
    ),
  },
  {
    id: 'corel',
    name: 'CorelDRAW',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#00A651" />
        <circle cx="20" cy="20" r="9" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="20" cy="20" r="3" fill="#fff" />
      </svg>
    ),
  },
];

export const AI_TOOLS: ToolBadge[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#10A37F" />
        <g fill="none" stroke="#fff" strokeWidth="2">
          <rect x="12" y="6" width="16" height="13" rx="6.5" />
          <rect x="12" y="6" width="16" height="13" rx="6.5" transform="rotate(60 20 20)" />
          <rect x="12" y="6" width="16" height="13" rx="6.5" transform="rotate(120 20 20)" />
          <rect x="12" y="6" width="16" height="13" rx="6.5" transform="rotate(180 20 20)" />
          <rect x="12" y="6" width="16" height="13" rx="6.5" transform="rotate(240 20 20)" />
          <rect x="12" y="6" width="16" height="13" rx="6.5" transform="rotate(300 20 20)" />
        </g>
      </svg>
    ),
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="gm" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset=".55" stopColor="#9B72CB" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path d="M20 2C20 12 28 20 38 20C28 20 20 28 20 38C20 28 12 20 2 20C12 20 20 12 20 2z" fill="url(#gm)" />
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#073344" />
        <rect x=".75" y=".75" width="38.5" height="38.5" rx="8.5" fill="none" stroke="#23677C" strokeWidth="1.5" />
        <g transform="translate(20 20) scale(.74) translate(-20 -20)" stroke="#D97757" strokeWidth="3.6" strokeLinecap="round">
          <path d="M20 17V3M21.5 17.4L26.3 9.2M22.6 18.5L33.9 12M23 20H33M22.6 21.5L34.7 28.5M21.5 22.6L26 30.4M20 23V36.5M18.5 22.6L13.5 31.3M17.4 21.5L6.1 28M17 20H7.5M17.4 18.5L5.3 11.5M18.5 17.4L13.5 8.7" />
        </g>
      </svg>
    ),
  },
  {
    id: 'firefly',
    name: 'Adobe Firefly',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="ffg" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FA0F00" />
            <stop offset=".55" stopColor="#FF5E3A" />
            <stop offset="1" stopColor="#FFB900" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="9" fill="#2A0A08" />
        <path d="M18 7C18 15 23 20 31 20C23 20 18 25 18 33C18 25 13 20 5 20C13 20 18 15 18 7z" fill="url(#ffg)" />
        <path d="M31 6c0 3 1.5 4.5 4.5 4.5C32.5 10.5 31 12 31 15c0-3-1.5-4.5-4.5-4.5C29.5 10.5 31 9 31 6z" fill="#FFB900" />
      </svg>
    ),
  },
  {
    id: 'flow',
    name: 'Google Flow',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="flg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset=".4" stopColor="#34A853" />
            <stop offset=".7" stopColor="#FBBC04" />
            <stop offset="1" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="9" fill="#202124" />
        <path d="M7 25c5-10 9-10 13-4s8 6 13-4" fill="none" stroke="url(#flg)" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'arena',
    name: 'Arena',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#2B1B14" />
        <rect x="10" y="8" width="20" height="3.5" rx="1" fill="#F2B632" />
        <rect x="12.5" y="13.5" width="3.5" height="13" fill="#E5533D" />
        <rect x="18.25" y="13.5" width="3.5" height="13" fill="#3E7BE0" />
        <rect x="24" y="13.5" width="3.5" height="13" fill="#3FA672" />
        <rect x="10" y="28.5" width="20" height="3.5" rx="1" fill="#2FA3A0" />
      </svg>
    ),
  },
];

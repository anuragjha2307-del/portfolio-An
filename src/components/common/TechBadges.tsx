'use client';

import React from 'react';

export const PythonIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M11.9 2c-3.1 0-5.2.8-5.2 2.6v2.1h5.3v.8H4.6C2.6 7.5 1 9.4 1 12.3c0 3 1.7 4.6 4.6 4.6h1.7v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.2c1.5 0 2.7-1.2 2.7-2.7V4.6c0-1.8-2.2-2.6-6.6-2.6zm-1.8 1.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
      fill="#38bdf8"
    />
    <path
      d="M12.1 22c3.1 0 5.2-.8 5.2-2.6v-2.1H12v-.8h7.4c2 0 3.6-1.9 3.6-4.8 0-3-1.7-4.6-4.6-4.6h-1.7v2.3c0 1.8-1.5 3.3-3.3 3.3H8.2c-1.5 0-2.7 1.2-2.7 2.7v4c0 1.8 2.2 2.7 6.6 2.7zm1.8-1.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"
      fill="#facc15"
    />
  </svg>
);

export const PyTorchIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2L9.5 4.5l3.2 3.2c-2.8.3-5 2.7-5 5.6 0 3.1 2.5 5.7 5.7 5.7 2.9 0 5.3-2.2 5.6-5H16c-.3 1.4-1.5 2.5-3 2.5-1.7 0-3.1-1.4-3.1-3.1 0-1.5 1.1-2.7 2.5-3v2.8L15 10.7 12 2z"
      fill="#f97316"
    />
    <circle cx="16" cy="5" r="1.5" fill="#f97316" />
  </svg>
);

export const StreamlitIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M8.7 7.7l-4.5 7.8c-.4.7.1 1.5.9 1.5h13.8c.8 0 1.3-.8.9-1.5l-4.5-7.8a1 1 0 0 0-1.7 0l-1.9 3.3-1.1-1.9a1 1 0 0 0-1.9-.4z"
      fill="#ef4444"
    />
  </svg>
);

export const OpenCVIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="7" r="4" stroke="#ef4444" strokeWidth="2" />
    <circle cx="7" cy="16" r="4" stroke="#10b981" strokeWidth="2" />
    <circle cx="17" cy="16" r="4" stroke="#3b82f6" strokeWidth="2" />
  </svg>
);

export const HaversineIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a14.5 14.5 0 0 0 0 18M12 3a14.5 14.5 0 0 1 0 18M3 12h18" />
  </svg>
);

export const TOTPIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const ReactNativeIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38bdf8" strokeWidth="1.8">
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="#38bdf8" />
  </svg>
);

export const ExpoIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 18L12 4l8 14H4z" />
    <path d="M8.5 14l3.5-6 3.5 6H8.5z" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

export const ReanimatedIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12c2.5-4 4.5-4 7 0s4.5 4 7 0 4.5-4 6 0" />
  </svg>
);

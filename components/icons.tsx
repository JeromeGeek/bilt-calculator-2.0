
import React from 'react';

export const BiltLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#E2E8F0"/>
        <path d="M24.0002 9.6001L14.4002 15.6001V27.6001L24.0002 33.6001L33.6002 27.6001V15.6001L24.0002 9.6001ZM24.0002 29.7001L18.0002 26.1001V18.9001L24.0002 22.5001V29.7001ZM25.2002 20.7001L19.2002 17.1001L24.0002 13.5001L28.8002 16.5001L30.0002 15.9001L24.0002 11.7001L15.6002 16.5001V26.7001L24.0002 31.5001L32.4002 26.7001V16.5001L31.2002 17.1001L25.2002 20.7001Z" fill="#0F172A"/>
    </svg>
);

export const CardIcon: React.FC<{ gradientFrom: string; gradientTo: string; className?: string }> = ({ gradientFrom, gradientTo, className }) => (
  <svg className={className} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`grad-${gradientFrom}-${gradientTo}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={gradientFrom} />
        <stop offset="100%" stopColor={gradientTo} />
      </linearGradient>
    </defs>
    <rect width="80" height="50" rx="5" fill={`url(#grad-${gradientFrom}-${gradientTo})`} />
    <rect x="12" y="10" width="10" height="8" rx="1.5" fill="white" fillOpacity="0.8"/>
    <path d="M60 32C62.2091 32 64 33.7909 64 36C64 38.2091 62.2091 40 60 40C57.7909 40 56 38.2091 56 36C56 33.7909 57.7909 32 60 32Z" fill="white" fillOpacity="0.5"/>
    <path d="M70 32C72.2091 32 74 33.7909 74 36C74 38.2091 72.2091 40 70 40C67.7909 40 66 38.2091 66 36C66 33.7909 67.7909 32 70 32Z" fill="white" fillOpacity="0.5"/>
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

export const LargeCheckIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const InfoIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

'use client';
import React from 'react';

const sanitizeNumber = (n?: string) => (n || '').replace(/[^0-9]/g, '');

export default function WhatsAppFloating() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const number = sanitizeNumber(rawNumber);
  const rawMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || '';
  const messageQuery = rawMessage
    ? `?text=${encodeURIComponent(rawMessage)}`
    : '';

  if (!number) return null; // don't render if no number configured

  const href = `https://wa.me/${number}`;

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
      className='fixed right-6 bottom-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-lg flex items-center justify-center transition-shadow duration-150 ring-2 ring-offset-2 ring-green-300'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-7 h-7'
        aria-hidden
      >
        <path d='M20.52 3.48A11.9 11.9 0 0 0 12 .5 11.9 11.9 0 0 0 3.48 3.48 11.9 11.9 0 0 0 .5 12c0 2.09.55 4.11 1.6 5.9L.1 23.5l5.11-1.33A11.9 11.9 0 0 0 12 23.5c2.09 0 4.11-.55 5.9-1.6A11.9 11.9 0 0 0 23.5 12a11.9 11.9 0 0 0-1.33-5.9zM12 21.5c-1.79 0-3.53-.47-5.05-1.35l-.36-.21-3.04.79.81-2.96-.22-.38A9.42 9.42 0 0 1 2.5 12 9.5 9.5 0 1 1 12 21.5z' />
        <path d='M17.46 14.21c-.3-.15-1.78-.88-2.05-.98-.27-.11-.48-.15-.69.15s-.79.98-.97 1.18c-.18.2-.36.22-.66.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.15.2-.26.3-.43.1-.17.05-.32-.02-.47-.08-.15-.69-1.67-.95-2.29-.25-.6-.51-.52-.69-.53-.18-.01-.39-.01-.6-.01-.2 0-.52.07-.79.33-.27.26-1.03 1.01-1.03 2.46 0 1.44 1.05 2.83 1.2 3.03.15.2 2.08 3.25 5.04 4.55 2.99 1.31 2.99.87 3.54.82.54-.05 1.78-.72 2.03-1.41.25-.69.25-1.28.17-1.41-.08-.13-.3-.2-.6-.35z' />
      </svg>

      <span className='sr-only'>Chat on WhatsApp</span>
    </a>
  );
}

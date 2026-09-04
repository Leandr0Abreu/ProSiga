import type { FC } from 'react';

export type IconName = 'board' | 'calendar' | 'bell' | 'report' | 'chat' | 'chart';

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, string> = {
  board:
    'M5 5h22a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z M9 13h14 M9 18h14 M9 23h9',
  calendar:
    'M5 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z M5 13h22 M11 3v6 M21 3v6',
  bell:
    'M16 5c-5 0-8 4-8 9v4l-3 4h22l-3-4v-4c0-5-3-9-8-9Z M13 25a3 3 0 0 0 6 0',
  report:
    'M8 4h13l6 6v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z M21 4v6h6 M11 17h10 M11 22h10 M11 12h5',
  chat:
    'M5 6h22a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H14l-6 6v-6H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z M9 13h14 M9 17h9',
  chart:
    'M5 27V6 M5 27h22 M10 27V17 M17 27V11 M24 27V15',
};

const Icon: FC<IconProps> = ({ name, className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d={paths[name]} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Icon;

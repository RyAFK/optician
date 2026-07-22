import type { SVGProps } from 'react';
import type { FrameShape } from '@/lib/eyewearCollections';

type IconProps = SVGProps<SVGSVGElement>;

function RoundFrame(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="20" cy="32" r="13" />
      <circle cx="44" cy="32" r="13" />
      <path d="M33 32h-2" />
      <path d="M7 32c0-4 2-7 5-8" />
      <path d="M57 32c0-4-2-7-5-8" />
    </svg>
  );
}

function RectangleFrame(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="21" width="22" height="18" rx="3" />
      <rect x="35" y="21" width="22" height="18" rx="3" />
      <path d="M29 30h6" />
      <path d="M7 26c-3 1-4 3-4 6" />
      <path d="M57 26c3 1 4 3 4 6" />
    </svg>
  );
}

function CatEyeFrame(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 34c0-9 6-14 14-13 7 1 10 6 10 12s-4 10-11 10-13-4-13-9z" />
      <path d="M57 34c0-9-6-14-14-13-7 1-10 6-10 12s4 10 11 10 13-4 13-9z" />
      <path d="M31 30h2" />
      <path d="M7 32c-3 0-4 2-4 5" />
      <path d="M57 32c3 0 4 2 4 5" />
    </svg>
  );
}

function BrowlineFrame(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 24h20" />
      <path d="M36 24h20" />
      <circle cx="18" cy="33" r="11" />
      <circle cx="46" cy="33" r="11" />
      <path d="M29 33h6" />
      <path d="M7 30c-3 1-4 3-4 5" />
      <path d="M57 30c3 1 4 3 4 5" />
    </svg>
  );
}

const FRAME_SHAPE_ICONS: Record<FrameShape, (props: IconProps) => React.JSX.Element> = {
  round: RoundFrame,
  rectangle: RectangleFrame,
  'cat-eye': CatEyeFrame,
  browline: BrowlineFrame,
};

export default function FrameShapeIcon({ shape, ...props }: { shape: FrameShape } & IconProps) {
  const Icon = FRAME_SHAPE_ICONS[shape];
  return <Icon {...props} />;
}

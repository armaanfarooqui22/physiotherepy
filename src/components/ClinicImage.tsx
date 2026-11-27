import { useState } from 'react';
import { Activity } from 'lucide-react';

interface ClinicImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  eager?: boolean;
}

export function ClinicImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'More Than Physio · GK-1',
  eager = false,
}: ClinicImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFF5F2] via-[#F6F6F1] to-[#EFECE6] text-[#1F6F5C] p-6 text-center ${className}`}
      >
        <Activity className="w-8 h-8 mb-3 opacity-70" aria-hidden="true" />
        <p className="font-serif text-lg text-[#1C2422]">{fallbackTitle}</p>
        <p className="text-xs text-[#4C5854] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

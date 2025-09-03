'use client';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'group';
  fallback?: string;
}

export function Avatar({ src, alt, size = 'md', variant = 'default', fallback }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center overflow-hidden`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className={`${textSizes[size]} font-medium text-white`}>
          {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
        </span>
      )}
    </div>
  );
}

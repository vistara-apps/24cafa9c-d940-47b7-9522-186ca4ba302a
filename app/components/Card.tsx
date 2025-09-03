'use client';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  return (
    <div className={`card-gradient rounded-lg shadow-card p-6 ${className}`}>
      {children}
    </div>
  );
}

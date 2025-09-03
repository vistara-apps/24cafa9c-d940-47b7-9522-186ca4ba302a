'use client';

import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) {
  return (
    <Card className="text-center">
      <div className="flex flex-col items-center space-y-3">
        <div className="p-3 bg-accent/20 rounded-full">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
          <p className="text-sm text-text-secondary">{title}</p>
          {subtitle && (
            <p className="text-xs text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>
        
        {trend && (
          <div className={`text-xs ${trend.isPositive ? 'text-accent' : 'text-red-400'}`}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}
          </div>
        )}
      </div>
    </Card>
  );
}

'use client';

import { Card } from './Card';
import { Avatar } from './Avatar';
import { Users, TrendingUp } from 'lucide-react';

interface CommunityCardProps {
  name: string;
  description: string;
  memberCount: number;
  growthRate?: string;
  category: string;
  avatarUrl?: string;
  variant?: 'default';
}

export function CommunityCard({ 
  name, 
  description, 
  memberCount, 
  growthRate,
  category, 
  avatarUrl,
  variant = 'default' 
}: CommunityCardProps) {
  return (
    <Card className="hover:scale-105 transition-transform duration-200 cursor-pointer">
      <div className="flex items-start space-x-4">
        <Avatar src={avatarUrl} alt={name} size="lg" fallback={name.charAt(0)} />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white truncate">{name}</h3>
            <span className="text-xs text-accent bg-accent/20 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-text-secondary">
              <Users className="w-4 h-4" />
              <span>{memberCount.toLocaleString()} members</span>
            </div>
            
            {growthRate && (
              <div className="flex items-center space-x-1 text-accent">
                <TrendingUp className="w-4 h-4" />
                <span>{growthRate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

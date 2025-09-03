'use client';

import { Card } from './Card';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Users, Calendar, Star } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  memberCount: number;
  dueDate?: string;
  status: 'active' | 'completed' | 'planning';
  members: Array<{ id: string; name: string; avatar?: string }>;
  variant?: 'default';
}

export function ProjectCard({ 
  name, 
  description, 
  memberCount, 
  dueDate,
  status,
  members,
  variant = 'default' 
}: ProjectCardProps) {
  const statusColors = {
    active: 'bg-accent/20 text-accent',
    completed: 'bg-green-500/20 text-green-400',
    planning: 'bg-yellow-500/20 text-yellow-400'
  };

  return (
    <Card className="hover:scale-105 transition-transform duration-200">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <button className="text-text-secondary hover:text-white">
            <Star className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm text-text-secondary line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-text-secondary">
            <Users className="w-4 h-4" />
            <span>{memberCount} members</span>
          </div>
          
          {dueDate && (
            <div className="flex items-center space-x-1 text-text-secondary">
              <Calendar className="w-4 h-4" />
              <span>{dueDate}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {members.slice(0, 3).map((member) => (
              <Avatar
                key={member.id}
                src={member.avatar}
                alt={member.name}
                size="sm"
                fallback={member.name.charAt(0)}
              />
            ))}
            {members.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs text-white">
                +{members.length - 3}
              </div>
            )}
          </div>
          
          <Button variant="ghost" size="sm">
            View Project
          </Button>
        </div>
      </div>
    </Card>
  );
}

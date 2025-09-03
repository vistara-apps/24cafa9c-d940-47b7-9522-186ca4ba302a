'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Lightbulb, Target, Cpu } from 'lucide-react';

interface AIValidationFormProps {
  variant?: 'default';
  onSubmit?: (idea: any) => void;
}

export function AIValidationForm({ variant = 'default', onSubmit }: AIValidationFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetMarket: '',
    aiComponent: '',
    uniqueValue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-accent/20 rounded-full">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Submit Your AI Startup Idea</h2>
          <p className="text-text-secondary">Get feedback and validation from the community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Idea Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="What's your startup idea called?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Describe your idea in detail..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Target className="w-4 h-4 inline mr-1" />
                Target Market *
              </label>
              <input
                type="text"
                value={formData.targetMarket}
                onChange={(e) => handleChange('targetMarket', e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Who is your target audience?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Cpu className="w-4 h-4 inline mr-1" />
                AI Component *
              </label>
              <input
                type="text"
                value={formData.aiComponent}
                onChange={(e) => handleChange('aiComponent', e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="What AI technology will you use?"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Unique Value Proposition
            </label>
            <textarea
              value={formData.uniqueValue}
              onChange={(e) => handleChange('uniqueValue', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="What makes your idea unique?"
            />
          </div>

          <div className="flex space-x-3">
            <Button type="submit" variant="primary" className="flex-1">
              Submit for Validation
            </Button>
            <Button type="button" variant="secondary">
              Save Draft
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}

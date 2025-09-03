'use client';

import { AppShell } from './components/AppShell';
import { Card } from './components/Card';
import { StatsCard } from './components/StatsCard';
import { CommunityCard } from './components/CommunityCard';
import { ProjectCard } from './components/ProjectCard';
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Brain,
  Rocket,
  Target
} from 'lucide-react';

export default function HomePage() {
  // Mock data
  const stats = [
    {
      title: 'Resource Library',
      value: '10',
      subtitle: 'Startup Articles',
      icon: BookOpen,
      trend: { value: '+2 this week', isPositive: true }
    },
    {
      title: 'Community Library',
      value: '260',
      subtitle: 'Total Members',
      icon: Users,
      trend: { value: '+15%', isPositive: true }
    }
  ];

  const communities = [
    {
      name: 'AI Machine Learning',
      description: 'Deep dive into ML algorithms, neural networks, and cutting-edge AI research',
      memberCount: 1250,
      growthRate: '+12%',
      category: 'AI/ML',
      avatarUrl: ''
    },
    {
      name: 'Blockchain Developers',
      description: 'Building the future with decentralized technologies and smart contracts',
      memberCount: 890,
      growthRate: '+8%',
      category: 'Blockchain',
      avatarUrl: ''
    },
    {
      name: 'Fintech Innovators',
      description: 'Revolutionizing financial services through technology and innovation',
      memberCount: 670,
      growthRate: '+15%',
      category: 'FinTech',
      avatarUrl: ''
    }
  ];

  const projects = [
    {
      name: 'AI Trading Bot',
      description: 'Building an intelligent cryptocurrency trading algorithm using machine learning',
      memberCount: 5,
      dueDate: 'Dec 15',
      status: 'active' as const,
      members: [
        { id: '1', name: 'Alex Chen', avatar: '' },
        { id: '2', name: 'Sarah Kim', avatar: '' },
        { id: '3', name: 'Mike Johnson', avatar: '' },
        { id: '4', name: 'Emily Davis', avatar: '' },
        { id: '5', name: 'David Wilson', avatar: '' }
      ]
    },
    {
      name: 'Sustainable Supply Chain',
      description: 'Blockchain-based solution for tracking sustainable products from source to consumer',
      memberCount: 3,
      dueDate: 'Jan 20',
      status: 'planning' as const,
      members: [
        { id: '6', name: 'Lisa Wang', avatar: '' },
        { id: '7', name: 'Tom Brown', avatar: '' },
        { id: '8', name: 'Kate Miller', avatar: '' }
      ]
    }
  ];

  const aiIdeas = [
    {
      title: 'Smart Campus Navigator',
      author: 'Jessica Park',
      likes: 156,
      comments: 23,
      category: 'EdTech'
    },
    {
      title: 'AI Mental Health Assistant',
      author: 'Carlos Rodriguez',
      likes: 198,
      comments: 31,
      category: 'HealthTech'
    }
  ];

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            AI NicheNet
          </h1>
          <p className="text-xl text-text-secondary">
            Nurture AI Ideas for Startup Ideas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
          
          {/* Additional Stats */}
          <StatsCard
            title="Active Projects"
            value="24"
            subtitle="In Progress"
            icon={Rocket}
            trend={{ value: '+3 this month', isPositive: true }}
          />
          
          <StatsCard
            title="AI Ideas Validated"
            value="47"
            subtitle="This Quarter"
            icon={Brain}
            trend={{ value: '+25%', isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Community Library */}
          <div className="xl:col-span-1 space-y-6">
            <Card>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Community Library</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-md">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-red-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Clean Luck</p>
                      <p className="text-xs text-text-secondary">AI & ML</p>
                    </div>
                    <span className="text-xs text-red-400 bg-red-500/20 px-2 py-1 rounded">13%</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-md">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">C2 Hackathon</p>
                      <p className="text-xs text-text-secondary">Blockchain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-md">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Mentorship</p>
                      <p className="text-xs text-text-secondary">Early Stage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-md">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Idea Inc</p>
                      <p className="text-xs text-text-secondary">Growth Hacking</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* AI Startup Ideas Chart */}
          <div className="xl:col-span-1 space-y-6">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">AI Startup Ideas</h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-accent">7,6.5 growth</span>
                    <span className="text-text-secondary">|</span>
                    <span className="text-text-secondary">A.I. Features</span>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="space-y-3">
                  <div className="flex items-end space-x-2 h-32">
                    <div className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-8 h-16"></div>
                    <div className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t w-8 h-20"></div>
                    <div className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-t w-8 h-24"></div>
                    <div className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-8 h-28"></div>
                    <div className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t w-8 h-20"></div>
                    <div className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-t w-8 h-16"></div>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">7.6.5</p>
                  <p className="text-xs text-text-secondary">growth</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Mentorship & User Cards */}
          <div className="xl:col-span-1 space-y-6">
            {/* User Profile Card */}
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">NicheNet</h3>
                    <p className="text-sm text-text-secondary">Design, Advertising</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">San Francisco, USA</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">30 Srs</span>
                      <span className="text-xs text-accent">+</span>
                    </div>
                    <div className="text-xs text-text-secondary">Gain in Past Day</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Team Members */}
            <Card>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">5.80%</span>
                  <span className="text-xs text-text-secondary">Today</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-white">Christopher</p>
                    <p className="text-xs text-text-secondary">Geektime</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mentorship Section */}
            <Card>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Mentorship</h3>
                <p className="text-sm text-text-secondary">Connect with Industry professionals</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Michael</p>
                      <p className="text-xs text-text-secondary">Senior Developer</p>
                    </div>
                    <span className="text-xs text-accent">3.5 hrs ago</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Arnie</p>
                      <p className="text-xs text-text-secondary">Startup Vet</p>
                    </div>
                    <span className="text-xs text-accent">1 hr ago</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mentorships Section */}
            <Card>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Mentorships</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Paul Rand Branding</p>
                        <p className="text-xs text-text-secondary">Brand Expert</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent">9.5 hrs ago</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">J</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Janes & Sarang</p>
                        <p className="text-xs text-text-secondary">Growth Hacking</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent">1.5 hrs ago</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Featured Communities */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Featured Communities</h2>
            <a href="/communities" className="text-accent hover:text-accent/80 text-sm">
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <CommunityCard
                key={index}
                name={community.name}
                description={community.description}
                memberCount={community.memberCount}
                growthRate={community.growthRate}
                category={community.category}
                avatarUrl={community.avatarUrl}
              />
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Active Projects</h2>
            <a href="/projects" className="text-accent hover:text-accent/80 text-sm">
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                memberCount={project.memberCount}
                dueDate={project.dueDate}
                status={project.status}
                members={project.members}
              />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

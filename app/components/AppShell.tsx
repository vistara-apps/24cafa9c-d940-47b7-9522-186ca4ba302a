'use client';

import { useState } from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  Lightbulb, 
  MessageSquare, 
  Settings, 
  Menu, 
  X,
  Search,
  Bell
} from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'defaultClosed' | 'open';
}

export function AppShell({ children, variant = 'defaultClosed' }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(variant === 'open');

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/', active: true },
    { icon: Users, label: 'Communities', href: '/communities' },
    { icon: BookOpen, label: 'Projects', href: '/projects' },
    { icon: Lightbulb, label: 'AI Ideas', href: '/ideas' },
    { icon: MessageSquare, label: 'Mentorship', href: '/mentorship' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-transparent">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full glass rounded-r-lg m-4 ml-0">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-xl font-bold text-white">NicheNet</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-accent"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                        item.active
                          ? 'bg-white/20 text-white'
                          : 'text-text-secondary hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="glass m-4 mb-0 rounded-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-white hover:text-accent mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-accent">
                <Bell className="w-5 h-5" />
              </button>
              <ConnectWallet />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

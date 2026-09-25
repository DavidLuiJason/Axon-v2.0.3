/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AxonLogo from '../components/AxonLogo.jsx';
import { 
  Sparkles, 
  Settings, 
  Search, 
  ChevronRight, 
  FolderGit2, 
  Wrench, 
  MessageSquare, 
  User, 
  AlertTriangle, 
  RotateCcw,
  Check,
  ChevronDown,
  MoreVertical,
  Plus,
  Send,
  Library,
  Sliders,
  Code2
} from 'lucide-react';

export interface AppInterfaceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  render: () => React.ReactNode;
}

export const AXON_INTERFACES: AppInterfaceItem[] = [
  {
    id: 'splash-screen',
    name: 'Splash Screen',
    description: 'App launch screen with logo and tagline.',
    category: 'System',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col items-center justify-center p-8 select-none relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-radial from-[#E85A3C]/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="flex flex-col items-center gap-5 z-10">
          <AxonLogo className="w-[90px] h-[90px]" />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-serif text-[38px] font-semibold tracking-wider text-white">AXON</h1>
            <p className="text-[11px] text-[#9A9B9F] tracking-[0.25em] font-sans uppercase mt-1">
              Intelligence in Motion
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 text-[10px] text-[#6E7075] tracking-widest uppercase font-mono">
          System Initialized · Safe Engine
        </div>
      </div>
    ),
  },
  {
    id: 'login-screen',
    name: 'Login Screen',
    description: 'User authentication interface.',
    category: 'Auth',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col justify-between p-6 select-none relative overflow-hidden font-sans">
        <div className="pt-12 flex flex-col items-center text-center">
          <AxonLogo className="w-[54px] h-[54px] mb-4" />
          <h2 className="font-serif text-[28px] font-semibold tracking-wide text-white">Welcome back</h2>
          <p className="text-xs text-[#9A9B9F] mt-1">Sign in to your private AXON environment</p>
        </div>
        <div className="w-full space-y-4 px-2">
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#7A7C82]">Identity Email</label>
            <div className="h-12 rounded-2xl bg-[#1C1D21] border border-white/10 px-4 flex items-center text-sm text-[#ECECEC]">
              davidluijason84@gmail.com
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#7A7C82]">Access Key</label>
            <div className="h-12 rounded-2xl bg-[#1C1D21] border border-white/10 px-4 flex items-center text-sm text-[#7A7C82]">
              ••••••••••••••••
            </div>
          </div>
          <div className="h-12 rounded-2xl bg-white text-black font-medium flex items-center justify-center text-sm shadow-lg mt-6">
            Continue to Space
          </div>
        </div>
        <div className="pb-8 text-center text-[11px] text-[#6E7075]">
          Encrypted local session · Zero telemetry
        </div>
      </div>
    ),
  },
  {
    id: 'home-screen',
    name: 'Home Screen',
    description: 'Main dashboard with quick access.',
    category: 'Core',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col justify-between select-none relative overflow-hidden font-sans">
        {/* TopBar */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-white/5 bg-[#121315]/90">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#232428] flex items-center justify-center text-[#D0D2D7]">
              <div className="space-y-1">
                <div className="w-3.5 h-0.5 bg-current" />
                <div className="w-3.5 h-0.5 bg-current" />
                <div className="w-3.5 h-0.5 bg-current" />
              </div>
            </div>
            <div className="h-8 px-3 rounded-full bg-[#232428] flex items-center gap-1.5 border border-white/5">
              <span className="font-serif font-bold text-xs">AXON</span>
              <ChevronDown size={12} className="text-[#9A9B9F]" />
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#232428] flex items-center justify-center text-[#D0D2D7]">
            <MoreVertical size={16} />
          </div>
        </div>

        {/* Welcome Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 -translate-y-4">
          <AxonLogo className="w-[50px] h-[50px] mb-2" />
          <h1 className="font-serif text-[32px] font-normal tracking-tight text-white text-center">
            Welcome, Luidel
          </h1>
        </div>

        {/* Composer */}
        <div className="p-4 bg-[#121315]">
          <div className="rounded-3xl bg-[#1C1D21] border border-white/10 p-3 shadow-xl">
            <div className="text-sm text-[#707277] mb-3">Message AXON...</div>
            <div className="flex items-center justify-between">
              <div className="h-7 px-2.5 rounded-full bg-[#25262A] text-[11px] text-[#D0D2D7] flex items-center gap-1">
                <span>Sonnet 5 Thinking</span>
                <ChevronDown size={11} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <Send size={13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'chat-interface',
    name: 'Chat Interface',
    description: 'Chat room and conversation view.',
    category: 'Core',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col justify-between select-none relative overflow-hidden font-sans">
        {/* Header */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-white/5 bg-[#121315]/90">
          <div className="flex items-center gap-2">
            <div className="h-8 px-3 rounded-full bg-[#232428] flex items-center gap-1.5 border border-white/5">
              <span className="font-serif font-bold text-xs">AXON</span>
            </div>
          </div>
          <span className="text-xs text-[#9A9B9F] font-mono">1.2k tokens</span>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden text-xs">
          <div className="p-3 rounded-2xl bg-[#232428] text-white max-w-[85%] self-end ml-auto">
            Can you help me build a simple Android app using Kotlin?
          </div>
          <div className="p-3.5 rounded-2xl bg-[#18191C] border border-white/5 text-[#ECECEC] max-w-[90%] space-y-2">
            <p className="font-medium text-white">Certainly. Here is the structured roadmap:</p>
            <div className="space-y-1 text-[#B0B3B8] pl-2 border-l border-[#E85A3C]">
              <div>1. Set up Kotlin project</div>
              <div>2. Implement ViewBinding</div>
              <div>3. Create clean login &amp; home screens</div>
            </div>
            <div className="pt-1 flex gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-[#E85A3C]">Kotlin</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-[#9A9B9F]">Android</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-3 bg-[#121315]">
          <div className="h-10 rounded-2xl bg-[#1C1D21] border border-white/10 px-3 flex items-center justify-between text-xs text-[#707277]">
            <span>Reply to AXON...</span>
            <Send size={13} className="text-[#9A9B9F]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'settings-screen',
    name: 'Settings Screen',
    description: 'App settings and preferences.',
    category: 'System',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-6 select-none relative overflow-hidden font-sans">
        <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-5">
          <AxonLogo className="w-[28px] h-[28px]" />
          <div>
            <h2 className="font-serif text-lg font-semibold text-white">AXON Settings</h2>
            <p className="text-[10px] text-[#9A9B9F] uppercase tracking-wider">Local Environment</p>
          </div>
        </div>

        <div className="space-y-5 text-xs">
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-wider text-[#7A7C82]">User Profile Name</label>
            <div className="h-11 rounded-xl bg-[#1C1D21] border border-white/10 px-3.5 flex items-center justify-between text-white">
              <span>Luidel</span>
              <Check size={14} className="text-emerald-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-wider text-[#7A7C82]">Intelligence Model</label>
            <div className="h-11 rounded-xl bg-[#1C1D21] border border-white/10 px-3.5 flex items-center justify-between text-white">
              <span>Sonnet 5 Thinking</span>
              <ChevronDown size={14} className="text-[#8E9094]" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-wider text-[#7A7C82]">Safe Mode Captures</label>
            <div className="h-11 rounded-xl bg-[#1C1D21] border border-white/10 px-3.5 flex items-center justify-between text-white">
              <span>One-at-a-time pipeline</span>
              <span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'projects-screen',
    name: 'Projects Screen',
    description: 'Manage your projects and folders.',
    category: 'Workspace',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-6 select-none relative overflow-hidden font-sans">
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
          <div className="flex items-center gap-2.5">
            <FolderGit2 size={20} className="text-[#E85A3C]" />
            <h2 className="font-serif text-lg font-semibold text-white">Projects</h2>
          </div>
          <div className="h-7 px-2.5 rounded-full bg-[#232428] text-[11px] flex items-center gap-1 text-white">
            <Plus size={12} />
            <span>New</span>
          </div>
        </div>
        <div className="space-y-2.5 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#1A1B1F] border border-white/5 space-y-1">
            <div className="font-medium text-white flex justify-between">
              <span>axon-foundation-ui</span>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
            </div>
            <div className="text-[11px] text-[#7A7C82]">Clean design tokens &amp; responsive viewport</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#1A1B1F] border border-white/5 space-y-1">
            <div className="font-medium text-white flex justify-between">
              <span>android-kotlin-starter</span>
              <span className="text-[10px] text-[#7A7C82] font-mono">STABLE</span>
            </div>
            <div className="text-[11px] text-[#7A7C82]">Beginner friendly architecture template</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'tools-menu',
    name: 'Tools Menu',
    description: 'Access to all available tools.',
    category: 'Workspace',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-6 select-none relative overflow-hidden font-sans">
        <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 mb-4">
          <Wrench size={20} className="text-[#E85A3C]" />
          <h2 className="font-serif text-lg font-semibold text-white">AXON Tools</h2>
        </div>
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#1A1B1F] border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#E85A3C]/15 text-[#E85A3C] flex items-center justify-center font-bold">
              IC
            </div>
            <div className="font-medium text-white">Interface Capture</div>
            <div className="text-[10px] text-[#7A7C82]">Batch screen rendering &amp; validation</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#1A1B1F] border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-white/5 text-[#ECECEC] flex items-center justify-center font-bold">
              AS
            </div>
            <div className="font-medium text-white">Axon Source</div>
            <div className="text-[10px] text-[#7A7C82]">Live filesystem inspection</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'profile-screen',
    name: 'Profile Screen',
    description: 'User profile and account settings.',
    category: 'Auth',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-6 select-none relative overflow-hidden font-sans">
        <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#E85A3C]/20 border border-[#E85A3C]/40 flex items-center justify-center text-lg font-serif font-bold text-white">
            L
          </div>
          <div>
            <h2 className="font-serif text-lg font-semibold text-white">Luidel</h2>
            <p className="text-[11px] text-[#9A9B9F]">Master Architect · AXON Foundation</p>
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-[#1C1D21] border border-white/5 flex justify-between">
            <span className="text-[#8E9094]">Active Spaces</span>
            <span className="text-white font-mono">14</span>
          </div>
          <div className="p-3 rounded-xl bg-[#1C1D21] border border-white/5 flex justify-between">
            <span className="text-[#8E9094]">Offline Cache</span>
            <span className="text-emerald-400 font-mono">Synced</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'error-popup',
    name: 'Error Popup',
    description: 'Error message and action options.',
    category: 'System',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315]/90 text-white flex items-center justify-center p-6 select-none relative font-sans">
        <div className="w-full rounded-3xl bg-[#18191C] border border-white/10 p-5 shadow-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 mx-auto flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Connection Interrupted</h3>
            <p className="text-xs text-[#9A9B9F] mt-1">
              Local sandbox safely caught boundary state. No memory leak detected.
            </p>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="flex-1 h-10 rounded-xl bg-white/5 text-xs flex items-center justify-center text-[#D0D2D7]">
              Dismiss
            </div>
            <div className="flex-1 h-10 rounded-xl bg-[#E85A3C] text-xs font-medium flex items-center justify-center text-white">
              Resume Safe Mode
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'search-interface',
    name: 'Search Interface',
    description: 'Global search overlay and filter.',
    category: 'Core',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-5 select-none relative font-sans">
        <div className="h-11 rounded-2xl bg-[#1C1D21] border border-white/15 px-3.5 flex items-center gap-2 text-xs text-white mb-4">
          <Search size={15} className="text-[#E85A3C]" />
          <span>Describe Axon UI Layout</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-[#18191C] border border-white/5">
            <div className="font-medium text-white">Describe Axon UI Layout</div>
            <div className="text-[10px] text-[#7A7C82]">Active conversation · 2 messages</div>
          </div>
          <div className="p-3 rounded-xl bg-[#18191C] border border-white/5">
            <div className="font-medium text-white">Resize chat input</div>
            <div className="text-[10px] text-[#7A7C82]">Recent conversation · 2 hours ago</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'axon-source',
    name: 'Axon Source',
    description: 'Live project source tree and inspector.',
    category: 'Workspace',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-4 select-none relative font-sans">
        <div className="flex items-center gap-2.5 pb-3 border-b border-white/5 mb-3">
          <AxonLogo className="w-[26px] h-[26px]" />
          <h2 className="font-serif text-base font-semibold text-white">Axon Source</h2>
        </div>
        <div className="space-y-1 font-mono text-[11px] text-[#B0B3B8]">
          <div className="text-[#E85A3C] font-semibold">📁 src/components</div>
          <div className="pl-4">📄 WelcomeState.tsx (1.2 KB)</div>
          <div className="pl-4">📄 TopBar.tsx (6.3 KB)</div>
          <div className="pl-4">📄 AxonSourceScreen.tsx (28.4 KB)</div>
          <div className="text-[#E85A3C] font-semibold pt-1">📁 src/services</div>
          <div className="pl-4">📄 sourceService.ts (6.5 KB)</div>
          <div className="pl-4">📄 captureStorage.ts (3.2 KB)</div>
        </div>
      </div>
    ),
  },
  {
    id: 'design-tokens',
    name: 'Design System Tokens',
    description: 'Architecture and design system tokens.',
    category: 'System',
    render: () => (
      <div className="w-[390px] h-[844px] bg-[#121315] text-white flex flex-col p-5 select-none relative font-sans">
        <div className="flex items-center gap-2.5 pb-3 border-b border-white/5 mb-3">
          <AxonLogo className="w-[26px] h-[26px]" />
          <h2 className="font-serif text-base font-semibold text-white">Design Tokens</h2>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-[#1C1D21] flex justify-between items-center">
            <span>Primary Surface</span>
            <span className="font-mono text-[11px] text-[#9A9B9F]">#121315</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#1C1D21] flex justify-between items-center">
            <span>Brand Orange Accent</span>
            <span className="font-mono text-[11px] text-[#E85A3C]">#E85A3C</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#1C1D21] flex justify-between items-center">
            <span>Primary Typography</span>
            <span className="font-mono text-[11px] text-[#9A9B9F]">Cormorant Garamond</span>
          </div>
        </div>
      </div>
    ),
  },
];

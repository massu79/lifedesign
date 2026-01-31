import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Target, MessageSquare, Award, Settings, User, Sparkles, Compass, Bot, Heart, Coffee } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SidebarItem = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) => twMerge(clsx(
            'flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group',
            isActive
                ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold shadow-sm'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-base)] hover:text-[var(--color-text-main)]'
        ))}
    >
        <Icon size={20} className="relative z-10" />
        <span className="relative z-10">{label}</span>
    </NavLink>
);

const LifeScoreWidget = () => (
    <div className="px-4 py-4 mx-4 mb-6 rounded-2xl bg-white border border-[var(--color-border)] shadow-sm">
        <div className="flex items-center justify-between mb-2">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-bold">Life Volume</p>
            <Heart size={16} className="text-[var(--color-primary)]" fill="currentColor" />
        </div>
        <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-[var(--color-text-main)]">2,450</span>
            <span className="text-xs text-[var(--color-text-muted)] mb-1">XP</span>
        </div>
        <div className="w-full bg-[var(--color-bg-base)] h-2 mt-3 rounded-full overflow-hidden">
            <div className="bg-[var(--color-primary)] h-full w-[65%] rounded-full"></div>
        </div>
    </div>
);

const Layout = () => {
    return (
        <div className="min-h-screen flex bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
            {/* Sidebar */}
            <aside className="w-64 fixed h-screen border-r border-[var(--color-border)] bg-[var(--color-bg-card)] flex flex-col pt-8 z-20 hidden md:flex">
                <div className="px-6 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                        <Coffee size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-[var(--color-text-main)]">Life Design</h1>
                        <span className="text-xs text-[var(--color-text-light)]">Morning Edition</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-1 px-3">
                    <SidebarItem to="/" icon={LayoutDashboard} label="Home" />
                    <SidebarItem to="/design" icon={Compass} label="Life Wizard" />
                    <SidebarItem to="/goals" icon={Target} label="Goals" />
                    <SidebarItem to="/achievements" icon={Award} label="Memories" />
                    <SidebarItem to="/agent" icon={MessageSquare} label="My Assistant" />
                </nav>

                <LifeScoreWidget />

                <div className="px-3 pb-6 space-y-1">
                    <SidebarItem to="/settings" icon={Settings} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen relative overflow-x-hidden">
                <header className="mb-8 flex justify-between items-center md:hidden">
                    <h1 className="text-lg font-bold text-[var(--color-text-main)]">Life Design</h1>
                </header>

                <div className="max-w-5xl mx-auto animate-fade-in relative z-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Target, MessageSquare, Award, Settings, User, Wallet, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SidebarItem = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) => twMerge(clsx(
            'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden',
            isActive
                ? 'text-[var(--color-primary)] bg-[rgba(6,182,212,0.1)] border-r-2 border-[var(--color-primary)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-[rgba(255,255,255,0.03)]'
        ))}
    >
        <Icon size={20} className="relative z-10" />
        <span className="font-medium relative z-10">{label}</span>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </NavLink>
);

const WalletWidget = () => (
    <div className="px-4 py-3 mx-4 mb-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[var(--color-border)]">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Total Balance</p>
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold font-mono text-white text-gradient">2,450 LDO</span>
            <Wallet size={16} className="text-[var(--color-primary)]" />
        </div>
        <div className="w-full bg-[#333] h-1 mt-3 rounded-full overflow-hidden">
            <div className="bg-[var(--color-primary)] h-full w-[65%] shadow-[0_0_10px_var(--color-primary)]"></div>
        </div>
    </div>
);

const Layout = () => {
    return (
        <div className="min-h-screen flex bg-[var(--color-bg-dark)] text-[var(--color-text-main)] selection:bg-[var(--color-primary)] selection:text-black">
            {/* Sidebar */}
            <aside className="w-64 fixed h-screen border-r border-[var(--color-border)] bg-[var(--color-bg-dark)] flex flex-col pt-8 z-20 hidden md:flex backdrop-blur-md">
                <div className="px-6 mb-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_var(--color-primary-glow)]">
                        <Sparkles size={20} fill="white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight leading-none">LifeDesign</h1>
                        <span className="text-xs text-[var(--color-primary)] font-mono tracking-widest">OS v3.0</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-1 px-2">
                    <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
                    <SidebarItem to="/goals" icon={Target} label="Goals (OKR)" />
                    <SidebarItem to="/design" icon={Sparkles} label="Life Wizard" />
                    <SidebarItem to="/agent" icon={MessageSquare} label="Agent Protocol" />
                    <SidebarItem to="/credentials" icon={Award} label="Credentials" />
                </nav>

                <WalletWidget />

                <div className="px-2 pb-6 space-y-1">
                    <SidebarItem to="/profile" icon={User} label="Profile" />
                    <SidebarItem to="/settings" icon={Settings} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen relative overflow-hidden">
                {/* Background Mesh Gradients */}
                <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-primary)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-secondary)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

                <header className="mb-8 flex justify-between items-center md:hidden">
                    <h1 className="text-lg font-bold">LifeDesign<span className="text-[var(--color-primary)]">OS</span></h1>
                </header>

                <div className="max-w-7xl mx-auto animate-fade-in relative z-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;

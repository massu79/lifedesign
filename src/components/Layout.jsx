import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Target, MessageSquare, Award, Settings, User } from 'lucide-react';
import clsx from 'clsx';

const SidebarItem = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) => clsx(
            'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
            isActive
                ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-orange-900/20'
                : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-main)]'
        )}
    >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </NavLink>
);

const Layout = () => {
    return (
        <div className="min-h-screen flex bg-[var(--color-bg-dark)] text-[var(--color-text-main)]">
            {/* Sidebar */}
            <aside className="w-64 fixed h-screen border-r border-[var(--color-border)] bg-[var(--color-bg-dark)] flex flex-col p-6 z-10 hidden md:flex">
                <div className="mb-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-900/40">
                        L
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">LifeDesign<span className="text-[var(--color-primary)]">OS</span></h1>
                </div>

                <nav className="flex-1 space-y-2">
                    <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
                    <SidebarItem to="/goals" icon={Target} label="Goals (OKR)" />
                    <SidebarItem to="/agent" icon={MessageSquare} label="Agent" />
                    <SidebarItem to="/credentials" icon={Award} label="Credentials" />
                </nav>

                <div className="pt-6 border-t border-[var(--color-border)] space-y-2">
                    <SidebarItem to="/profile" icon={User} label="Profile" />
                    <SidebarItem to="/settings" icon={Settings} label="Settings" />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen">
                <header className="mb-8 flex justify-between items-center md:hidden">
                    <h1 className="text-lg font-bold">LifeDesign<span className="text-[var(--color-primary)]">OS</span></h1>
                    {/* Mobile menu button would go here */}
                </header>
                <div className="max-w-7xl mx-auto animate-fade-in">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;

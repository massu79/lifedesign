import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircle2, Filter, Search, Award } from 'lucide-react';

const mockAchievements = [
    { id: 101, title: 'Launched Life Design OS v1.0', type: 'Career', date: '2025-01-31', xp: 500, minted: true, hash: '4x...8z' },
    { id: 102, title: 'Ran 10km under 50min', type: 'Health', date: '2025-01-28', xp: 200, minted: true, hash: '9a...2b' },
    { id: 103, title: 'Read "The Sovereign Individual"', type: 'Learning', date: '2025-01-25', xp: 150, minted: false, hash: null },
    { id: 104, title: 'Setup High-Yield Savings', type: 'Assets', date: '2025-01-20', xp: 100, minted: false, hash: null },
    { id: 105, title: 'Attended Web3 Conference', type: 'Career', date: '2025-01-15', xp: 300, minted: true, hash: '7c...3e' },
    { id: 106, title: 'Completed React Course', type: 'Learning', date: '2025-01-10', xp: 400, minted: true, hash: '2d...9f' },
];

const Achievements = () => {
    const [filter, setFilter] = useState('All');

    const filteredList = filter === 'All'
        ? mockAchievements
        : mockAchievements.filter(item => item.type === filter);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Award className="text-[var(--color-primary)]" /> Achievements
                    </h1>
                    <p className="text-[var(--color-text-muted)] mt-1">Your permanent record of life accomplishments.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" className="gap-2"> <Filter size={16} /> Filter</Button>
                    <Button variant="primary" className="gap-2"> <Search size={16} /> Search</Button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {['All', 'Career', 'Health', 'Learning', 'Assets', 'Social'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                ? 'bg-[var(--color-primary)] text-black'
                                : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredList.map((item) => (
                    <Card key={item.id} className="flex flex-col md:flex-row items-center gap-6 p-6" hoverEffect={true}>
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${item.minted
                                ? 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] shadow-[0_0_15px_var(--color-secondary-glow)]'
                                : 'bg-white/5 text-white/50'
                            }`}>
                            <CheckCircle2 size={28} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm text-[var(--color-text-muted)] font-mono">
                                <span className="flex items-center gap-1">📅 {item.date}</span>
                                <span className="flex items-center gap-1">🏷️ {item.type}</span>
                                <span className="text-[var(--color-primary)] font-bold">+{item.xp} XP</span>
                            </div>
                        </div>

                        {item.minted ? (
                            <div className="flex flex-col items-center md:items-end gap-1">
                                <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-xs font-bold border border-[var(--color-secondary)]/30">
                                    MINTED ON-CHAIN
                                </span>
                                <span className="text-xs font-mono text-[var(--color-text-muted)] hover:text-white cursor-pointer">
                                    Hash: {item.hash} <ExternalLinkWithIcon />
                                </span>
                            </div>
                        ) : (
                            <Button variant="neon" size="sm">Mint NFT</Button>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

const ExternalLinkWithIcon = () => (
    <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
)

export default Achievements;

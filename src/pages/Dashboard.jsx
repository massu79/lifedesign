import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import LifeRadarChart from '../components/LifeRadarChart';
import ActivityBarChart from '../components/ActivityBarChart';
import LifeTreemap from '../components/LifeTreemap';
import Modal from '../components/Modal';
import { Briefcase, BookOpen, Wallet, Activity, TrendingUp, Sparkles, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <Card className="flex flex-col gap-4" hoverEffect={true} glow={true}>
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl ${colorClass} bg-opacity-20 text-white`}>
                <Icon size={24} />
            </div>
            <span className="text-[var(--color-text-muted)] text-xs font-medium bg-[var(--color-bg-card-hover)] px-2 py-1 rounded-full font-mono">+2.5%</span>
        </div>
        <div>
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium mb-1 font-mono uppercase tracking-wider">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
        {subtext && <p className="text-xs text-[var(--color-text-muted)] mt-1">{subtext}</p>}
    </Card>
);

const Dashboard = () => {
    const [isMintModalOpen, setIsMintModalOpen] = useState(false);
    const [mintStep, setMintStep] = useState('confirm'); // confirm, processing, success
    const [mintingItem, setMintingItem] = useState(null);

    const handleMintClick = (item) => {
        setMintingItem(item);
        setMintStep('confirm');
        setIsMintModalOpen(true);
    };

    const confirmMint = () => {
        setMintStep('processing');
        // Simulate blockchain delay
        setTimeout(() => {
            setMintStep('success');
        }, 3000);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
                <p className="text-[var(--color-text-muted)]">Live metrics from your on-chain life OS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Career Growth"
                    value="Lvl 4"
                    subtext="Senior Eng"
                    icon={Briefcase}
                    colorClass="bg-blue-500"
                />
                <StatCard
                    title="Learning XP"
                    value="12,450"
                    subtext="+500 this week"
                    icon={BookOpen}
                    colorClass="bg-purple-500"
                />
                <StatCard
                    title="Net Assets"
                    value="$124k"
                    subtext="+12% YTD"
                    icon={Wallet}
                    colorClass="bg-green-500"
                />
                <StatCard
                    title="Health Score"
                    value="84"
                    subtext="Optimal Zone"
                    icon={Activity}
                    colorClass="bg-red-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Activity Log / Mintable Items */}
                    <Card className="min-h-[300px]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Recent Achievements</h2>
                            <button className="text-[var(--color-primary)] text-sm font-medium hover:underline">View All</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { id: 1, title: 'Completed "React Advanced Patterns"', type: 'Learning', xp: 15, mintable: true },
                                { id: 2, title: 'Marathon Finisher 2025', type: 'Health', xp: 50, mintable: true },
                                { id: 3, title: 'Saved $10k Emergency Fund', type: 'Assets', xp: 100, mintable: false } // Already minted or not eligible
                            ].map((item) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-primary)]">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm">{item.title}</h4>
                                        <p className="text-xs text-[var(--color-text-muted)] font-mono">{item.type} • +{item.xp} XP</p>
                                    </div>
                                    {item.mintable && (
                                        <Button
                                            variant="neon"
                                            size="sm"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => handleMintClick(item)}
                                        >
                                            Mint NFT
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    {/* Radar Chart */}
                    <LifeRadarChart />

                    {/* Heatmap (Treemap) */}
                    <LifeTreemap />

                    <Card className="flex flex-col">
                        <h2 className="text-xl font-bold mb-4">Agent Suggestion</h2>
                        <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 py-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-[0_0_20px_var(--color-primary-glow)] animate-pulse">
                                <Sparkles size={24} className="text-white" />
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                "Your Health score is lagging behind Career. I recommend booking a check-up minting the result."
                            </p>
                            <Button variant="secondary" className="w-full">Accept Challenge</Button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Extended Analytics Section */}
            <div className="grid grid-cols-1 gap-6">
                <ActivityBarChart />
            </div>

            {/* Blockchain Minting Modal */}
            <Modal
                isOpen={isMintModalOpen}
                onClose={() => setIsMintModalOpen(false)}
                title={mintStep === 'success' ? 'Achievement Minted!' : 'Record on Blockchain'}
            >
                {mintStep === 'confirm' && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-[var(--color-bg-card-hover)] rounded-xl border border-[var(--color-border)]">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                <Sparkles size={24} className="text-[var(--color-secondary)]" />
                            </div>
                            <div>
                                <h4 className="font-bold">{mintingItem?.title}</h4>
                                <p className="text-xs text-[var(--color-text-muted)] font-mono">Type: {mintingItem?.type} Proof</p>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm text-[var(--color-text-muted)] bg-black p-4 rounded-lg font-mono">
                            <div className="flex justify-between">
                                <span>Network Cost:</span>
                                <span>0.00005 SOL</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Platform Fee:</span>
                                <span>0 SOL (Free)</span>
                            </div>
                        </div>

                        <Button onClick={confirmMint} variant="primary" className="w-full">
                            Confirm Transaction
                        </Button>
                    </div>
                )}

                {mintStep === 'processing' && (
                    <div className="flex flex-col items-center justify-center py-8 space-y-4">
                        <Loader2 size={48} className="text-[var(--color-primary)] animate-spin" />
                        <p className="text-center font-bold">Confirming on Solana...</p>
                        <p className="text-xs text-[var(--color-text-muted)]">Please wait while validators verify your proof.</p>
                    </div>
                )}

                {mintStep === 'success' && (
                    <div className="flex flex-col items-center justify-center py-4 space-y-6">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                            <CheckCircle2 size={40} className="text-green-500" />
                        </div>

                        <div className="text-center">
                            <h4 className="text-xl font-bold mb-2">Proof Verified!</h4>
                            <p className="text-sm text-[var(--color-text-muted)] mb-4">Your achievement is now permanently recorded on-chain.</p>

                            <a href="#" className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline font-mono text-xs">
                                View transaction <ExternalLink size={12} />
                            </a>
                        </div>

                        <Button onClick={() => setIsMintModalOpen(false)} variant="secondary" className="w-full">
                            Close
                        </Button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Dashboard;

import React from 'react';
import Card from '../components/Card';
import { Briefcase, BookOpen, Wallet, Activity, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <Card className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl ${colorClass} bg-opacity-20 text-white`}>
                <Icon size={24} />
            </div>
            <span className="text-[var(--color-text-muted)] text-xs font-medium bg-[var(--color-bg-card-hover)] px-2 py-1 rounded-full">+2.5%</span>
        </div>
        <div>
            <h3 className="text-[var(--color-text-muted)] text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
        {subtext && <p className="text-xs text-[var(--color-text-muted)] mt-1">{subtext}</p>}
    </Card>
);

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, User</h1>
                <p className="text-[var(--color-text-muted)]">Here is your daily Life KPI overview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Career Growth"
                    value="Senior Eng"
                    subtext="Next level in 6 mos"
                    icon={Briefcase}
                    colorClass="bg-blue-500"
                />
                <StatCard
                    title="Learning Hours"
                    value="12.5 hrs"
                    subtext="This week"
                    icon={BookOpen}
                    colorClass="bg-purple-500"
                />
                <StatCard
                    title="Total Assets"
                    value="$124,500"
                    subtext="+12% YTD"
                    icon={Wallet}
                    colorClass="bg-green-500"
                />
                <StatCard
                    title="Health Score"
                    value="84/100"
                    subtext="Sleep quality improved"
                    icon={Activity}
                    colorClass="bg-red-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Activity Log</h2>
                        <button className="text-[var(--color-primary)] text-sm font-medium hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-[var(--color-bg-card-hover)] rounded-lg transition-colors cursor-pointer border border-transparent hover:border-[var(--color-border)]">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-card-hover)] flex items-center justify-center text-[var(--color-primary)]">
                                    <TrendingUp size={18} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-sm">Completed "React Advanced Patterns"</h4>
                                    <p className="text-xs text-[var(--color-text-muted)]">Learning • 2 hours ago</p>
                                </div>
                                <span className="text-xs font-bold text-green-400">+15 XP</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="min-h-[300px] flex flex-col">
                    <h2 className="text-xl font-bold mb-4">Agent Suggestion</h2>
                    <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
                            <span className="text-2xl">💡</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-muted)]">
                            "You haven't logged any physical activity in 3 days. A 20-minute run would boost your Health Score by 2 points."
                        </p>
                        <button className="w-full bg-[var(--color-bg-card-hover)] py-2 rounded-lg text-sm font-medium hover:bg-[#333] transition-colors">Accept Challenge</button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;

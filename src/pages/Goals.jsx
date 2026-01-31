import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Target, CheckCircle2, Circle } from 'lucide-react';

const Goals = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Goals & OKRs</h1>
                <Button>+ New Objective</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Career Objective */}
                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                                <Target size={20} />
                            </div>
                            <h3 className="font-bold text-lg">Career: Staff Engineer</h3>
                        </div>
                        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full border border-blue-500/20">On Track</span>
                    </div>

                    <div className="space-y-4 mb-6">
                        {[
                            { label: "Lead 2 major projects", done: true },
                            { label: "Mentor 3 junior devs", done: false },
                            { label: "Publish 2 tech articles", done: false }
                        ].map((kr, i) => (
                            <div key={i} className="flex items-center gap-3">
                                {kr.done ? <CheckCircle2 size={18} className="text-green-500" /> : <Circle size={18} className="text-[var(--color-border)]" />}
                                <span className={kr.done ? "text-[var(--color-text-muted)] line-through" : ""}>{kr.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full bg-[var(--color-bg-dark)] h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-2">
                        <span>33% Completed</span>
                        <span>Due: Q4 2026</span>
                    </div>
                </Card>

                {/* Financial Objective */}
                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                                <Target size={20} />
                            </div>
                            <h3 className="font-bold text-lg">Finance: Portfolio $200k</h3>
                        </div>
                        <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">Ahead</span>
                    </div>

                    <div className="space-y-4 mb-6">
                        {[
                            { label: "Save $5000/month", done: true },
                            { label: "Rebalance portfolio", done: true },
                        ].map((kr, i) => (
                            <div key={i} className="flex items-center gap-3">
                                {kr.done ? <CheckCircle2 size={18} className="text-green-500" /> : <Circle size={18} className="text-[var(--color-border)]" />}
                                <span className={kr.done ? "text-[var(--color-text-muted)] line-through" : ""}>{kr.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full bg-[var(--color-bg-dark)] h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-2">
                        <span>75% Completed</span>
                        <span>Due: Q2 2026</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Goals;

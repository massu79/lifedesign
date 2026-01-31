import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Send, Bot, Database, HardDrive, Cpu, Sliders } from 'lucide-react';

const Agent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">

            {/* Main Chat Area */}
            <div className="lg:col-span-2 flex flex-col h-full gap-4">
                <Card className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4 mb-4">
                        <Bot className="text-[var(--color-primary)]" />
                        <div>
                            <h2 className="font-bold">Life Design Agent</h2>
                            <p className="text-xs text-[var(--color-text-muted)]">Unified Protocol Active • v2.4.0</p>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-card-hover)] flex items-center justify-center shrink-0">
                                <Bot size={16} />
                            </div>
                            <div className="bg-[var(--color-bg-card-hover)] p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                                <p>I've noticed you completed "React Advanced Patterns". This aligns with your Career Objective.</p>
                                <p className="mt-2 text-[var(--color-text-muted)]">Suggestion: Would you like to add a "Practical Application" key result to build a demo project using these new skills?</p>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 text-white font-bold text-xs">U</div>
                            <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                                <p>Yes, that sounds like a good idea. Add it to my OKRs.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-card-hover)] flex items-center justify-center shrink-0">
                                <Bot size={16} />
                            </div>
                            <div className="bg-[var(--color-bg-card-hover)] p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                                <p>Done. I've updated your Career Objective. I'll check in on your progress in a week.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <input
                            type="text"
                            placeholder="Type a message to your agent..."
                            className="flex-1 bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        />
                        <Button size="sm"><Send size={16} /></Button>
                    </div>
                </Card>
            </div>

            {/* SpoonOS Architecture Visualization */}
            <div className="flex flex-col gap-4">
                <Card className="flex-1">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Cpu size={18} className="text-orange-400" />
                        SpoonOS Status
                    </h3>

                    <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border)]">
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                                <Database size={12} /> Storage
                            </div>
                            <div className="h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-[45%]"></div>
                            </div>
                            <div className="flex justify-between text-xs mt-1 text-[var(--color-text-muted)]">
                                <span>Logs & Metrics</span>
                                <span>4.5GB / 10GB</span>
                            </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border)]">
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                                <HardDrive size={12} /> Memory
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Priority: Health</span>
                                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Focus: React</span>
                            </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border)]">
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                                <Sliders size={12} /> Control
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                System Optimal
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Agent;

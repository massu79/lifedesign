import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Sparkles, ArrowRight, ChevronRight, Milestone, CheckCircle2 } from 'lucide-react';

// Mock Logic for Reverse Engineering
const generateRoadmap = (vision) => {
    // In a real app, this would call an LLM. Here we mock a response based on the "Career" input.
    const careerGoal = vision.career || "Tech Leader";
    return [
        { year: 1, title: "Foundation", tasks: [`Master core skills for ${careerGoal}`, "Build network", "Save 10% of income"] },
        { year: 3, title: "Acceleration", tasks: [`Become Senior ${careerGoal}`, "Launch side project", "Invest in index funds"] },
        { year: 5, title: "Expansion", tasks: [`Transition to Lead ${careerGoal}`, "Buy property", "Mentor juniors"] },
        { year: 7, title: "Mastery", tasks: [`Recognized expert in ${careerGoal}`, "Financial independence plan", "Give back to community"] },
        { year: 10, title: "Vision Realized", tasks: [careerGoal, "Ultimate Lifestyle", "Legacy building"] },
    ];
};

const LifeDesignWizard = () => {
    const [step, setStep] = useState(1);
    const [vision, setVision] = useState({ career: '', lifestyle: '', assets: '' });
    const [roadmap, setRoadmap] = useState(null);

    const handleNext = () => {
        if (step === 3) {
            setRoadmap(generateRoadmap(vision));
        }
        setStep(step + 1);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {step <= 3 && (
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-2 text-gradient">Design Your Future</h1>
                    <p className="text-[var(--color-text-muted)]">Reverse engineer your life from your 10-year vision.</p>
                    <div className="flex justify-center mt-6 gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`h-1 w-12 rounded-full transition-colors ${i <= step ? 'bg-[var(--color-primary)]' : 'bg-[#333]'}`}></div>
                        ))}
                    </div>
                </div>
            )}

            {step === 1 && (
                <Card className="animate-fade-in border-t-4 border-t-[var(--color-primary)]">
                    <h2 className="text-2xl font-bold mb-6">10 Years from now...</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[var(--color-primary)]">How do you spend your day?</label>
                            <textarea
                                className="w-full bg-[#111] border border-[var(--color-border)] rounded-lg p-4 text-white focus:border-[var(--color-primary)] focus:outline-none min-h-[120px]"
                                placeholder="I wake up at 8am in my beach house..."
                                value={vision.lifestyle}
                                onChange={(e) => setVision({ ...vision, lifestyle: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={handleNext} disabled={!vision.lifestyle} variant="primary">Next Step <ChevronRight size={16} className="ml-2" user /></Button>
                        </div>
                    </div>
                </Card>
            )}

            {step === 2 && (
                <Card className="animate-fade-in border-t-4 border-t-[var(--color-secondary)]">
                    <h2 className="text-2xl font-bold mb-6">Career & Impact</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[var(--color-secondary)]">What is your professional title?</label>
                            <input
                                type="text"
                                className="w-full bg-[#111] border border-[var(--color-border)] rounded-lg p-4 text-white focus:border-[var(--color-secondary)] focus:outline-none"
                                placeholder="e.g. CTO, Founder, renowned Artist"
                                value={vision.career}
                                onChange={(e) => setVision({ ...vision, career: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={handleNext} disabled={!vision.career} variant="neon">Next Step <ChevronRight size={16} className="ml-2" /></Button>
                        </div>
                    </div>
                </Card>
            )}

            {step === 3 && (
                <Card className="animate-fade-in border-t-4 border-t-green-500">
                    <h2 className="text-2xl font-bold mb-6">Assets & Freedom</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-green-500">What assets do you own?</label>
                            <textarea
                                className="w-full bg-[#111] border border-[var(--color-border)] rounded-lg p-4 text-white focus:border-green-500 focus:outline-none min-h-[120px]"
                                placeholder="Portfolio worth $2M, 2 properties..."
                                value={vision.assets}
                                onChange={(e) => setVision({ ...vision, assets: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={handleNext} disabled={!vision.assets} variant="primary" className="bg-green-600 hover:bg-green-500 hover:shadow-green-900/50">Generate Roadmap <Sparkles size={16} className="ml-2" /></Button>
                        </div>
                    </div>
                </Card>
            )}

            {step === 4 && roadmap && (
                <div className="animate-fade-in space-y-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-xs font-mono mb-4">AI GENERATED STRATEGY</span>
                        <h1 className="text-4xl font-bold mb-2">Your Reverse-Engineered Path</h1>
                        <p className="text-[var(--color-text-muted)]">Milestones to achieve your 10-year vision.</p>
                    </div>

                    <div className="relative border-l-2 border-[var(--color-border)] ml-6 md:ml-10 space-y-12">
                        {roadmap.map((item, index) => (
                            <div key={item.year} className="relative pl-8 md:pl-12 group">
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${index === roadmap.length - 1 ? 'bg-[var(--color-primary)] border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]' : 'bg-[var(--color-bg-dark)] border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors'}`}></div>

                                <Card className="relative hover:border-[var(--color-primary)] transition-colors">
                                    <div className="absolute -top-4 right-4 text-5xl font-bold text-[var(--color-border)] opacity-20 font-mono">
                                        Y{item.year}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1 text-[var(--color-primary)]">{item.title}</h3>
                                    <p className="text-xs font-mono text-[var(--color-text-muted)] mb-4">TIMELINE: {new Date().getFullYear() + item.year}</p>

                                    <div className="space-y-3">
                                        {item.tasks.map((task, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-[var(--color-bg-dark)] p-3 rounded-lg border border-[var(--color-border)]">
                                                <div className="w-5 h-5 rounded-full border border-[var(--color-secondary)] flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] opacity-0 hover:opacity-100 cursor-pointer transition-opacity"></div>
                                                </div>
                                                <span className="text-sm">{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <Button size="sm" variant="secondary">Add to Goals</Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-10">
                        <Button variant="primary" size="lg" onClick={() => window.location.href = '/goals'}>Start Execution <ArrowRight size={16} className="ml-2" /></Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LifeDesignWizard;

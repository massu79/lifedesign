import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Onboarding = () => {
    const [target, setTarget] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (!target.trim()) return;
        localStorage.setItem('lifeTarget', target);
        // Redirect to the Life Design Wizard to break it down
        navigate('/design');
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-dark)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-2xl w-full text-center relative z-10 animate-fade-in">
                <div className="mb-8 flex justify-center">
                    <div className="p-4 rounded-2xl bg-[rgba(153,69,255,0.1)] border border-[var(--color-primary)]/20 shadow-[0_0_30px_var(--color-primary-glow)]">
                        <Sparkles size={48} className="text-[var(--color-primary)]" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Design Your Life  <br />
                    <span className="text-gradient">On Chain.</span>
                </h1>

                <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-lg mx-auto leading-relaxed">
                    A decentralized operating system to reverse-engineer your dreams into verifiable on-chain actions.
                </p>

                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-2xl max-w-xl mx-auto group focus-within:border-[var(--color-primary)] transition-colors">
                    <input
                        type="text"
                        placeholder="What is your ultimate life goal?"
                        className="flex-1 bg-transparent border-none text-lg px-4 py-3 text-white focus:outline-none placeholder:text-[#444] w-full text-center md:text-left"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                        autoFocus
                    />
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full md:w-auto rounded-xl px-8"
                        onClick={handleStart}
                    >
                        Initialize <ArrowRight size={18} className="ml-2" />
                    </Button>
                </div>

                <p className="mt-8 text-xs text-[var(--color-text-muted)] uppercase tracking-widest opacity-60">
                    Powered by SpoonOS Protocol
                </p>
            </div>
        </div>
    );
};

export default Onboarding;

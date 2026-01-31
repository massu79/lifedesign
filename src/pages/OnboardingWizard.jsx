import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowRight, Check, Sparkles, Coffee, Briefcase, Plane, Home, TreePalm } from 'lucide-react';

const steps = [
    {
        id: 'start',
        question: 'Let’s imagine your future.',
        description: 'Design your life like you design a home. Room by room, memory by memory.',
        buttonLabel: 'Start the Journey',
        icon: Sparkles
    },
    {
        id: 'lifestyle',
        question: 'How do you want to spend your mornings?',
        options: [
            { id: 'city', label: 'Busy City Life', icon: Coffee },
            { id: 'nature', label: 'Quiet Nature', icon: TreePalm },
            { id: 'travel', label: 'Traveling Everywhere', icon: Plane },
            { id: 'home', label: 'Cozy at Home', icon: Home },
        ]
    },
    {
        id: 'work',
        question: 'What is your ideal work style?',
        options: [
            { id: 'leader', label: 'Leading a Team', icon: Briefcase },
            { id: 'creator', label: 'Solo Creator', icon: Sparkles },
            { id: 'retired', label: 'Early Retired', icon: Coffee },
        ]
    },
    {
        id: 'finish',
        question: 'Your design is ready.',
        description: 'Based on your answers, we have crafted a starting roadmap for you.',
        buttonLabel: 'View My Dashboard',
        icon: Check
    }
];

const OptionCard = ({ option, selected, onClick }) => (
    <div
        onClick={onClick}
        className={`
            cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center
            ${selected
                ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                : 'border-[var(--color-border)] bg-white hover:border-[var(--color-secondary)] hover:-translate-y-1 shadow-sm'
            }
        `}
    >
        <div className={`p-3 rounded-full ${selected ? 'bg-white' : 'bg-[var(--color-bg-base)]'}`}>
            <option.icon size={24} />
        </div>
        <span className="font-bold">{option.label}</span>
    </div>
);

const OnboardingWizard = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const currentStep = steps[currentStepIndex];
    const isLastStep = currentStepIndex === steps.length - 1;

    const handleNext = () => {
        if (isLastStep) {
            // Save to local storage
            localStorage.setItem('lifeTarget', JSON.stringify(answers));
            navigate('/');
        } else {
            setCurrentStepIndex(prev => prev + 1);
        }
    };

    const handleSelectString = (key, value) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        // Auto advance for smoother feel
        setTimeout(() => handleNext(), 300);
    };

    return (
        <div className="min-h-screen bg-[var(--color-bg-base)] flex items-center justify-center p-4">
            {/* Simple Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary-light)] rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary-light)] rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

            <div className="w-full max-w-2xl text-center relative z-10 animate-fade-in">

                {currentStep.icon && currentStep.id === 'start' && (
                    <div className="mb-6 flex justify-center">
                        <div className="p-6 rounded-3xl bg-white shadow-lg text-[var(--color-primary)]">
                            <currentStep.icon size={48} />
                        </div>
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                    {currentStep.question}
                </h1>

                {currentStep.description && (
                    <p className="text-xl text-[var(--color-text-muted)] mb-12 max-w-lg mx-auto leading-relaxed">
                        {currentStep.description}
                    </p>
                )}

                {/* Options Grid */}
                {currentStep.options && (
                    <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
                        {currentStep.options.map(opt => (
                            <OptionCard
                                key={opt.id}
                                option={opt}
                                selected={answers[currentStep.id] === opt.id}
                                onClick={() => handleSelectString(currentStep.id, opt.id)}
                            />
                        ))}
                    </div>
                )}

                {/* Primary Action Button (for Start/Finish steps) */}
                {!currentStep.options && (
                    <Button
                        variant="primary"
                        size="lg"
                        className="rounded-full px-12 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                        onClick={handleNext}
                    >
                        {currentStep.buttonLabel} <ArrowRight size={20} className="ml-2" />
                    </Button>
                )}

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {steps.map((s, idx) => (
                        <div
                            key={s.id}
                            className={`h-2 rounded-full transition-all duration-500 ${idx === currentStepIndex ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-[var(--color-border)]'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OnboardingWizard;

import React from 'react';
import Card from '../components/Card';
import { Award, ShieldCheck, Share2 } from 'lucide-react';

const CredentialCard = ({ title, issuer, date, verified }) => (
    <Card className="relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-50 rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Award size={80} className="text-[var(--color-bg-card-hover)]" />
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <Award className="text-white" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg leading-tight">{title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{issuer}</p>
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
                    <span className="text-[var(--color-text-muted)]">Issued</span>
                    <span>{date}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
                    <span className="text-[var(--color-text-muted)]">Token ID</span>
                    <span className="font-mono text-xs">0x71C...9A2</span>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-bg-dark)] border border-[var(--color-border)] py-2 rounded-lg text-sm hover:bg-[var(--color-border)] transition-colors">
                    <ShieldCheck size={16} className={verified ? "text-green-500" : "text-gray-500"} />
                    {verified ? "Verified" : "Pending"}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-2 rounded-lg text-sm hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg shadow-orange-900/20">
                    <Share2 size={16} /> Share
                </button>
            </div>
        </div>
    </Card>
);

const Credentials = () => {
    return (
        <div className="space-y-6">
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold mb-2">My Credentials</h1>
                <p className="text-[var(--color-text-muted)]">Verified achievements on the blockchain.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CredentialCard
                    title="Senior React Engineer"
                    issuer="Tech Giants Inc."
                    date="Jan 15, 2026"
                    verified={true}
                />
                <CredentialCard
                    title="Marathon Finisher"
                    issuer="City Run"
                    date="Oct 10, 2025"
                    verified={true}
                />
                <CredentialCard
                    title="Financial Literacy Lvl 2"
                    issuer="Life Design Academy"
                    date="Dec 20, 2025"
                    verified={true}
                />
            </div>
        </div>
    );
};

export default Credentials;

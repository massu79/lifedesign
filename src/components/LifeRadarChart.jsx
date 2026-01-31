import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Card from './Card';

const data = [
    { subject: 'Career', A: 120, fullMark: 150 },
    { subject: 'Assets', A: 98, fullMark: 150 },
    { subject: 'Health', A: 86, fullMark: 150 },
    { subject: 'Learning', A: 99, fullMark: 150 },
    { subject: 'Social', A: 85, fullMark: 150 },
    { subject: 'Spirit', A: 65, fullMark: 150 },
];

const LifeRadarChart = () => {
    return (
        <Card className="h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent pointer-events-none"></div>

            <h3 className="text-xl font-bold mb-4 text-center z-10">Life Balance <span className="text-[var(--color-primary)]">Score</span></h3>

            <div className="w-full h-full z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#ddd', fontSize: 12, fontWeight: 'bold' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                        <Radar
                            name="My Life"
                            dataKey="A"
                            stroke="var(--color-primary)"
                            strokeWidth={3}
                            fill="var(--color-primary)"
                            fillOpacity={0.3}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default LifeRadarChart;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from './Card';

const data = [
    { day: 'Jan 25', value: 780 },
    { day: 'Jan 26', value: 490 },
    { day: 'Jan 27', value: 350 },
    { day: 'Jan 28', value: 340 },
    { day: 'Jan 29', value: 400 },
    { day: 'Jan 30', value: 120 },
    { day: 'Jan 31', value: 40 },
];

const ActivityBarChart = () => {
    return (
        <Card className="h-[400px] flex flex-col p-6 relative group overflow-hidden" hoverEffect={true} glow={true}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Activity Volume</h3>
                <div className="flex gap-2 text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-[var(--color-bg-card-hover)] text-[var(--color-text-main)] cursor-pointer">7D</span>
                    <span className="px-2 py-1 rounded hover:bg-[var(--color-bg-card-hover)] text-[var(--color-text-muted)] cursor-pointer">4W</span>
                    <span className="px-2 py-1 rounded hover:bg-[var(--color-bg-card-hover)] text-[var(--color-text-muted)] cursor-pointer">1Y</span>
                </div>
            </div>

            <div className="w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#777', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#777', fontSize: 12 }}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{
                                backgroundColor: '#000',
                                border: '1px solid #333',
                                borderRadius: '8px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                            }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Bar
                            dataKey="value"
                            fill="var(--color-primary)"
                            radius={[4, 4, 0, 0]}
                            barSize={40}
                            className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default ActivityBarChart;

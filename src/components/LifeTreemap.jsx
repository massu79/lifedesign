import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import Card from './Card';

const data = [
    {
        name: 'Career & Work',
        children: [
            { name: 'Coding', size: 1200, growth: 0.12 },
            { name: 'Meetings', size: 400, growth: -0.05 },
            { name: 'Management', size: 300, growth: 0.02 },
        ],
    },
    {
        name: 'Learning',
        children: [
            { name: 'Web3', size: 600, growth: 0.25 },
            { name: 'AI', size: 450, growth: 0.18 },
            { name: 'Design', size: 200, growth: 0.05 },
        ],
    },
    {
        name: 'Health',
        children: [
            { name: 'Running', size: 300, growth: 0.08 },
            { name: 'Gym', size: 250, growth: -0.02 },
            { name: 'Meditation', size: 100, growth: 0.01 },
        ],
    },
    {
        name: 'Assets',
        children: [
            { name: 'Investing', size: 150, growth: 0.45 },
            { name: 'Research', size: 100, growth: 0.10 },
        ],
    },
];

// Custom Content for Treemap Node
const CustomizedContent = (props) => {
    const { root, depth, x, y, width, height, index, name, growth } = props;

    // Determine color based on growth (Green = Positive, Red/Grey = Negative/Neutral)
    const isPositive = growth >= 0;
    const color = isPositive
        ? `rgba(20, 241, 149, ${0.4 + (growth * 2)})` // Green intensity based on growth
        : `rgba(239, 68, 68, ${0.4 + (Math.abs(growth) * 2)})`; // Red intensity

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: color,
                    stroke: '#000',
                    strokeWidth: 2,
                    transition: 'all 0.3s ease',
                }}
                className="hover:brightness-125 cursor-pointer"
            />
            {width > 50 && height > 30 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={Math.min(width / 6, 14)}
                    fontWeight="bold"
                >
                    {name}
                </text>
            )}
            {width > 50 && height > 50 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 16}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.7)"
                    fontSize={10}
                >
                    {isPositive ? '+' : ''}{(growth * 100).toFixed(1)}%
                </text>
            )}
        </g>
    );
};

const LifeTreemap = () => {
    return (
        <Card className="h-[400px] flex flex-col p-0 relative overflow-hidden" hoverEffect={true} glow={true}>
            <div className="absolute top-4 left-6 z-10 pointer-events-none">
                <h3 className="text-lg font-bold drop-shadow-md">Life Volume Map</h3>
                <p className="text-xs text-white/60">Area = Time Spent • Color = Growth Rate</p>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={data}
                    dataKey="size"
                    stroke="#000"
                    content={<CustomizedContent />}
                >
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-black/90 border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
                                        <p className="font-bold text-white mb-1">{data.name}</p>
                                        <p className="text-xs text-gray-400">Time: <span className="text-white">{data.size}h</span></p>
                                        <p className="text-xs text-gray-400">Growth:
                                            <span className={data.growth >= 0 ? "text-[var(--color-secondary)] ml-1" : "text-red-500 ml-1"}>
                                                {data.growth >= 0 ? '+' : ''}{(data.growth * 100).toFixed(1)}%
                                            </span>
                                        </p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </Treemap>
            </ResponsiveContainer>
        </Card>
    );
};

export default LifeTreemap;

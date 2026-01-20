
import React from 'react';
import { Slider } from './Slider';
import { CardTier, CalculationResults } from '../types';
import { CARD_TIERS, RENT_MULTIPLIERS } from '../constants';

interface InputPanelProps {
    monthlyPayment: number;
    setMonthlyPayment: (value: number) => void;
    everydaySpend: number;
    setEverydaySpend: (value: number) => void;
    cardTier: CardTier;
    results: CalculationResults;
}

const EarningPointsDisplay: React.FC<{ ratio: number }> = ({ ratio }) => {
    const visualPercentage = Math.min(ratio * 100, 100);

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-400">Rent Multiplier Progress</label>
                <span className="text-lg font-bold text-amber-400">{(ratio * 100).toFixed(0)}%</span>
            </div>
            <div className="relative h-10">
                {/* Track */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-slate-700 rounded-full">
                    <div 
                        className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                        style={{ width: `${visualPercentage}%` }}
                    ></div>
                </div>

                {/* Tiers Markers */}
                {RENT_MULTIPLIERS.map(tier => (
                    <div key={tier.ratio} className="absolute top-0 h-full flex flex-col items-center" style={{ left: `${tier.ratio * 100}%`, transform: 'translateX(-50%)' }}>
                        <div className="w-px h-1/2 bg-slate-500"></div>
                        <span className="text-xs text-slate-500 mt-1">{tier.multiplier}x</span>
                    </div>
                ))}
                
                {/* Thumb */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-4 border-amber-400 shadow-lg"
                    style={{ left: `${visualPercentage}%`, transform: 'translate(-50%, -50%)' }}
                ></div>
            </div>
        </div>
    )
}

export const InputPanel: React.FC<InputPanelProps> = ({ 
    monthlyPayment, setMonthlyPayment, everydaySpend, setEverydaySpend, cardTier, results
}) => {
    const sliderColor = CARD_TIERS[cardTier].gradient.from;

    return (
        <div className="bg-slate-800/90 rounded-2xl p-6 space-y-8 h-full backdrop-blur-sm border border-slate-700">
            <Slider 
                label="Monthly Payment"
                value={monthlyPayment}
                setValue={setMonthlyPayment}
                max={5000}
                color={sliderColor}
            />
            <Slider 
                label="Monthly Everyday Spend"
                value={everydaySpend}
                setValue={setEverydaySpend}
                max={5000}
                color={sliderColor}
            />
            <EarningPointsDisplay ratio={results.tiered.spendToRentRatio} />
        </div>
    );
};

import React from 'react';
import type { CalculationResults } from '../types';
import { CASH_CONVERSION_RATE_CENTS, RENT_MULTIPLIERS, MINIMUM_SPEND_BASE_POINTS, MINIMUM_SPEND_RATIO_THRESHOLD } from '../constants';

interface TieredSummaryProps {
    results: CalculationResults;
    monthlyPayment: number;
    everydaySpend: number;
}

export const TieredSummary: React.FC<TieredSummaryProps> = ({ results, monthlyPayment, everydaySpend }) => {

    const formatCurrency = (amount: number, digits = 0) => {
        return `$${amount.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
    };

    const formatPoints = (points: number) => {
        return points.toLocaleString('en-US');
    }

    const { tiered, welcomeBonus } = results;
    
    // Determine the next tier and the progress towards it.
    const nextTierToDisplay = tiered.nextMultiplierTier ?? RENT_MULTIPLIERS[0];
    const neededForNext = Math.max(0, (nextTierToDisplay.ratio * monthlyPayment) - everydaySpend);
    
    // Calculate progress percentage relative to the span of the current tier.
    const currentTierRatio = RENT_MULTIPLIERS.slice().reverse().find(t => tiered.spendToRentRatio >= t.ratio)?.ratio ?? 0;
    const nextTierRatio = nextTierToDisplay.ratio;
    const progressPercent = nextTierRatio > currentTierRatio 
        ? Math.min(((tiered.spendToRentRatio - currentTierRatio) / (nextTierRatio - currentTierRatio)) * 100, 100)
        : 100;

    const annualPoints = tiered.annualPoints;
    const cashValue = annualPoints * (CASH_CONVERSION_RATE_CENTS / 100);

    return (
        <div className="bg-slate-800/90 rounded-2xl p-6 space-y-6 backdrop-blur-sm border border-slate-700">
            {/* Top Section: Tiered */}
            <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="text-slate-400 font-bold text-sm text-center mb-2">YOUR RENT REWARDS</h3>
                {tiered.rentMultiplier > 0 ? (
                    <p className="text-4xl text-center font-bold"><span className="text-amber-400">{tiered.rentMultiplier}x</span> points on rent</p>
                ) : (
                    <p className="text-3xl text-center font-bold"><span className="text-amber-400">{MINIMUM_SPEND_BASE_POINTS}</span> flat points on rent</p>
                )}

                <div className="w-full bg-slate-700 rounded-full h-2 my-3">
                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <div className="text-center">
                    <p className="text-sm">Spend <span className="font-bold text-amber-400">{formatCurrency(neededForNext)}</span> more to reach <span className="font-bold text-white">{nextTierToDisplay.multiplier}x</span></p>
                </div>
            </div>
            
            {/* Middle Section: Annual Points */}
            <div className="text-center">
                <p className="text-sm text-slate-400 font-bold">ANNUAL REWARDS</p>
                <div className="flex justify-center items-baseline gap-4">
                   <p className="text-4xl sm:text-5xl font-black text-amber-400">{formatPoints(annualPoints)}</p>
                   <p className="text-2xl sm:text-3xl font-bold text-cyan-400">{formatCurrency(cashValue, 2)}</p>
                </div>
                <p className="text-xs text-slate-500">(@ {CASH_CONVERSION_RATE_CENTS}¢/pt value)</p>
                 {welcomeBonus.isIncluded && (
                    <p className="text-sm text-green-400 mt-2 font-semibold">
                        + {formatPoints(welcomeBonus.points)} pts & {formatCurrency(welcomeBonus.cash)} cash from bonus
                    </p>
                )}
            </div>
        </div>
    );
};
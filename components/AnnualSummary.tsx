
import React from 'react';
import type { CalculationResults } from '../types';
import { CASH_CONVERSION_RATE_CENTS } from '../constants';

interface AnnualSummaryProps {
    results: CalculationResults;
    includeWelcomeBonus: boolean;
    setIncludeWelcomeBonus: (value: boolean) => void;
}

const InfoRow: React.FC<{ label: string; value: string; color?: string; isBold?: boolean }> = ({ label, value, color = 'text-red-400', isBold = false }) => (
    <div className="flex justify-between items-center text-sm py-2">
        <span className="text-slate-400">{label}</span>
        <span className={`font-bold ${value.startsWith('+') ? 'text-green-400' : color} ${isBold ? 'font-black text-base' : ''}`}>{value}</span>
    </div>
);

export const AnnualSummary: React.FC<AnnualSummaryProps> = ({ results, includeWelcomeBonus, setIncludeWelcomeBonus }) => {

    const formatCurrency = (amount: number, digits = 0) => {
        return `$${amount.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
    };

    const formatPoints = (points: number) => {
        return points.toLocaleString('en-US');
    }

    const { biltCash, annualSpend, welcomeBonus } = results;
    const annualPoints = biltCash.annualPoints;
    const cashValue = annualPoints * (CASH_CONVERSION_RATE_CENTS / 100);

    return (
        <div className="bg-slate-800/90 rounded-2xl p-6 space-y-4 backdrop-blur-sm border border-slate-700">
            {/* Top Section: Annual Points */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <div className="text-center sm:text-left">
                    <p className="text-xs text-slate-400 font-medium">ANNUAL POINTS</p>
                    <p className="text-4xl font-black text-blue-400">{formatPoints(annualPoints)}</p>
                </div>
                 <div className="text-center sm:text-right">
                    <p className="text-xs text-slate-400 font-medium">@ {CASH_CONVERSION_RATE_CENTS}¢/pt</p>
                    <p className="text-2xl font-bold text-cyan-400">{formatCurrency(cashValue, 0)}</p>
                 </div>
            </div>
            
            <div className="border-t border-slate-700/50"></div>

            {/* Middle Section: Welcome Bonus */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIncludeWelcomeBonus(!includeWelcomeBonus)}>
               <span className="font-medium text-slate-200 text-sm">Include Welcome Bonus</span>
               <div className="relative">
                   <div className={`block w-10 h-6 rounded-full transition ${includeWelcomeBonus ? 'bg-blue-600' : 'bg-slate-700'}`}></div>
                   <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${includeWelcomeBonus ? 'transform translate-x-full' : ''}`}></div>
               </div>
            </div>
            
            <div className="border-t border-slate-700/50"></div>

            {/* Bottom Section: Breakdown */}
            <div className="space-y-1 divide-y divide-slate-700/50">
                <InfoRow label="Annual Spend" value={formatCurrency(annualSpend)} color="text-white"/>
                 {welcomeBonus.isIncluded && welcomeBonus.points > 0 && (
                    <InfoRow label="Welcome Bonus (Points)" value={`+${formatPoints(welcomeBonus.points)}`} color="text-amber-400" />
                )}
                {welcomeBonus.isIncluded && welcomeBonus.cash > 0 && (
                    <InfoRow label="Welcome Bonus (Bilt Cash)" value={`+${formatCurrency(welcomeBonus.cash)}`} color="text-green-400" />
                )}
                <InfoRow label="Annual Transaction Fee" value={formatCurrency(biltCash.annualTransactionFee)} />
                <InfoRow label="Annual Bilt Cash" value={formatCurrency(biltCash.annualBiltCash, 2)} color="text-green-400" />
                <div className="pt-2">
                    <InfoRow 
                        label={'Surplus Bilt Cash'} 
                        value={`+${formatCurrency(biltCash.surplusBiltCash, 0)}`} 
                        color="text-green-400" 
                        isBold 
                    />
                </div>
            </div>
        </div>
    );
};

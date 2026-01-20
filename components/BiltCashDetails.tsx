
import React from 'react';
import { CalculationResults } from '../types';
import { LargeCheckIcon } from './icons';

interface BiltCashDetailsProps {
    results: CalculationResults;
    monthlyPayment: number;
    everydaySpend: number;
}

const StatCard: React.FC<{ label: string, value: string, color: string }> = ({ label, value, color }) => (
    <div className="bg-slate-800/50 p-4 rounded-xl text-center">
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
);

export const BiltCashDetails: React.FC<BiltCashDetailsProps> = ({ results, monthlyPayment, everydaySpend }) => {
    const { transactionFee, biltCash, feeCoverage, monthlyPoints } = results.biltCash;

    const formatCurrency = (amount: number) => {
        return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    };
    
    const formatCurrencyWithSign = (amount: number) => {
        return `${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }

    return (
        <div className="bg-slate-800/90 rounded-2xl p-6 space-y-6 h-full backdrop-blur-sm border border-slate-700">
            <div className="grid grid-cols-2 gap-4">
                <StatCard label="3% FEE" value={formatCurrency(transactionFee)} color="text-red-400" />
                <StatCard label="BILT CASH (4%)" value={formatCurrency(biltCash)} color="text-green-400" />
            </div>
            <div className={`p-4 rounded-xl flex items-center justify-between ${feeCoverage >= 0 ? 'bg-teal-500/10 border border-teal-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                <div>
                    <p className={`text-xs font-bold ${feeCoverage >= 0 ? 'text-teal-400' : 'text-red-400'}`}>{feeCoverage >= 0 ? 'FEE COVERED!' : 'FEE NOT COVERED'}</p>
                    <p className={`text-2xl font-bold ${feeCoverage >= 0 ? 'text-white' : 'text-red-400'}`}>{formatCurrencyWithSign(feeCoverage)}</p>
                </div>
                {feeCoverage >= 0 && <LargeCheckIcon className="w-8 h-8 text-white" />}
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl">
                <p className="text-sm text-slate-400 font-medium text-center mb-4">MONTHLY POINTS</p>
                <div className="grid grid-cols-3 divide-x divide-slate-700 text-center">
                    <div>
                        <p className="text-xs text-slate-500">Payment 1x</p>
                        <p className="font-bold text-white text-lg">{(monthlyPayment).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">Spend 1x</p>
                        <p className="font-bold text-white text-lg">{(everydaySpend).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">Total</p>
                        <p className="font-bold text-amber-400 text-lg">{monthlyPoints.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


import React from 'react';
import { CardTier } from '../types';
import { CARD_TIERS, TIER_BENEFITS } from '../constants';
import { CheckIcon } from './icons';

interface TierBenefitsDisplayProps {
    cardTier: CardTier;
}

export const TierBenefitsDisplay: React.FC<TierBenefitsDisplayProps> = ({ cardTier }) => {
    const TIER_KEYS = Object.keys(CARD_TIERS) as CardTier[];

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-200">
                Card Tier <span className="text-amber-400">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TIER_KEYS.map((tier) => {
                    const tierInfo = CARD_TIERS[tier];
                    const benefits = TIER_BENEFITS[tier];
                    const isSelected = tier === cardTier;

                    return (
                        <div 
                            key={tier} 
                            className={`
                                bg-slate-800/90 rounded-2xl p-6 h-full backdrop-blur-sm border
                                ${isSelected ? tierInfo.color : 'border-slate-700'}
                                transition-all duration-300
                                ${isSelected ? 'shadow-lg' : ''}
                            `}
                            style={isSelected ? { boxShadow: `0 0 20px ${tierInfo.gradient.from}60` } : {}}
                        >
                            <h3 
                                className="text-xl font-bold mb-4 text-center"
                                style={{
                                    background: `linear-gradient(to right, ${tierInfo.gradient.from}, ${tierInfo.gradient.to})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {tierInfo.name}
                            </h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm">
                                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
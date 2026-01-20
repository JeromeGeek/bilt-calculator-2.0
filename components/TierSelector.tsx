
import React from 'react';
import type { CardTier } from '../types';
import { CARD_TIERS } from '../constants';

interface TierSelectorProps {
    cardTier: CardTier;
    setCardTier: (tier: CardTier) => void;
}

export const TierSelector: React.FC<TierSelectorProps> = ({ cardTier, setCardTier }) => {
    const TIER_KEYS = Object.keys(CARD_TIERS) as CardTier[];

    return (
        <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            {TIER_KEYS.map((tier) => {
                const isActive = cardTier === tier;
                const tierInfo = CARD_TIERS[tier];
                return (
                    <button 
                        key={tier}
                        onClick={() => setCardTier(tier)}
                        className={`px-3 sm:px-4 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
                    >
                        {tierInfo.name.split(' ')[1]}
                    </button>
                )
            })}
        </div>
    );
};

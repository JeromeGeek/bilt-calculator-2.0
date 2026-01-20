
import React from 'react';
import { CardTier } from '../types';
import { CARD_TIERS } from '../constants';
import { CardIcon } from './icons';

interface HeaderProps {
    cardTier: CardTier;
}

export const Header: React.FC<HeaderProps> = ({ cardTier }) => {
    const tierInfo = CARD_TIERS[cardTier];
    return (
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            <div className="flex items-center gap-3">
                <CardIcon
                    gradientFrom={tierInfo.gradient.from}
                    gradientTo={tierInfo.gradient.to}
                    className="w-12 flex-shrink-0"
                />
                <span
                    className="inline-block text-base sm:text-lg font-bold"
                    style={{
                        background: `linear-gradient(to right, ${tierInfo.gradient.from}, ${tierInfo.gradient.to})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {tierInfo.name}
                </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-200 text-center sm:text-left">
                Rent & Mortgage <span className="text-amber-400">Calculator</span>
            </h1>
        </div>
    );
};

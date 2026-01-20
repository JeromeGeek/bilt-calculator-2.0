
import { CardTier } from './types';

export const CARD_TIERS: Record<CardTier, { name: string; spendMultiplier: number; color: string, gradient: { from: string, to: string } }> = {
  blue: { 
    name: 'Bilt Blue', 
    spendMultiplier: 1, 
    color: 'border-sky-400', 
    gradient: { from: '#38bdf8', to: '#a78bfa' } 
  },
  obsidian: { 
    name: 'Bilt Obsidian', 
    spendMultiplier: 1.8, 
    color: 'border-slate-400',
    gradient: { from: '#475569', to: '#1e293b' }
   },
  palladium: { 
    name: 'Bilt Palladium', 
    spendMultiplier: 2, 
    color: 'border-amber-400',
    gradient: { from: '#facc15', to: '#fb923c' }
  },
};

export const WELCOME_BONUS_CASH: Record<CardTier, number> = {
  blue: 100,
  obsidian: 200,
  palladium: 300,
};

export const WELCOME_BONUS_PALLADIUM_POINTS = 50000;

export const TIER_BENEFITS: Record<CardTier, string[]> = {
    blue: [
        '$100 Bilt Cash Welcome Bonus',
        '1x points on everyday spend',
        'Up to 1.25x points on rent payments',
        'Rent Day: Double points bonus on spend',
        'No Foreign Transaction Fees',
    ],
    obsidian: [
        '$200 Bilt Cash Welcome Bonus',
        'All Blue benefits, plus:',
        'Enhanced 1.8x points on all everyday spend',
        'Trip Cancellation & Interruption Insurance',
        'Primary Rental Car Insurance',
    ],
    palladium: [
        `50k Points & $300 Bilt Cash Welcome Bonus`,
        'All Obsidian benefits, plus:',
        'Premium 2.0x points on all everyday spend',
        'Global Airport Lounge Access (Priority Pass)',
    ]
}

export const MINIMUM_SPEND_RATIO_THRESHOLD = 0.25;
export const MINIMUM_SPEND_BASE_POINTS = 250;

export const RENT_MULTIPLIERS: { ratio: number; multiplier: number }[] = [
  { ratio: 0.25, multiplier: 0.5 },
  { ratio: 0.5, multiplier: 0.75 },
  { ratio: 0.75, multiplier: 1.0 },
  { ratio: 1.0, multiplier: 1.25 },
];

export const BILT_CASH_FEE_RATE = 0.03;
export const BILT_CASH_REBATE_RATE = 0.04;
export const BILT_CASH_SPEND_MULTIPLIER = 2; // This is a legacy value, new logic is more granular.
export const CASH_CONVERSION_RATE_CENTS = 1.8;
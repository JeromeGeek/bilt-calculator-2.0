
export type CardTier = 'blue' | 'obsidian' | 'palladium';
export type CalculatorOption = 'tiered' | 'biltCash';

export interface TieredResult {
  rentMultiplier: number;
  spendMultiplier: number;
  monthlyPoints: number;
  annualPoints: number;
  spendToRentRatio: number;
  nextMultiplierTier: { ratio: number; multiplier: number } | undefined;
}

export interface BiltCashResult {
  transactionFee: number;
  biltCash: number;
  feeCoverage: number;
  monthlyPoints: number;
  annualPoints: number;
  annualTransactionFee: number;
  annualBiltCash: number;
  surplusBiltCash: number;
}

export interface CalculationResults {
  annualSpend: number;
  welcomeBonus: {
    isIncluded: boolean;
    points: number;
    cash: number;
  };
  tiered: TieredResult;
  biltCash: BiltCashResult;
}

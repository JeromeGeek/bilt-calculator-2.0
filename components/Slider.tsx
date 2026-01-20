
import React from 'react';

interface SliderProps {
    label: string;
    value: number;
    setValue: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    color?: string;
}

export const Slider: React.FC<SliderProps> = ({ label, value, setValue, min = 0, max = 5000, step = 10, color = '#FBBF24' }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value, 10));
    };
    
    const progress = (value / max) * 100;

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-400">{label}</label>
                <span className="text-lg font-bold text-white">${value.toLocaleString()}</span>
            </div>
            <input 
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleInputChange}
                style={{ '--progress': `${progress}%`, '--slider-color': color } as React.CSSProperties}
            />
        </div>
    );
};

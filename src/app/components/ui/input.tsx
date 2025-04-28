import React, { useState } from 'react';

// Text Input Component
export const TextInput = ({ label, placeholder, helperText, state = 'default' }: any) => {
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);

    const getInputClass = () => {

        if (state === 'error') return 'border border-red-300 rounded-md p-2 w-full';
        if (state === 'disabled') return 'border border-gray-200 bg-gray-100 rounded-md p-2 w-full text-gray-400';
        if (focused || value) return 'border border-blue-300 rounded-md p-2 w-full';
        return 'border border-gray-300 rounded-md p-2 w-full';
    };

    const getHelperTextClass = () => {
        return state === 'error' ? 'text-red-500 text-xs mt-1' : 'text-gray-500 text-xs mt-1';
    };

    return (
        <div className="mb-4">
            <label className="block font-light text-body1 text-neutral-black-600 mb-md">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    disabled={state === 'disabled'}
                    className={`${getInputClass()} rounded-xl p-lg text-body1 bg-primary-neutral-300`}
                />
                {value && (
                    <button
                        className="absolute right-2 top-2 text-gray-400"
                        onClick={() => setValue('')}
                        type="button"
                    >
                        ×
                    </button>
                )}
            </div>
            {helperText && <p className={getHelperTextClass()}>{helperText}</p>}
        </div>
    );
};

// Select Input Component
export const SelectInput = ({ label, helperText, state = 'default' }) => {
    const [value, setValue] = useState('BTC');
    const [focused, setFocused] = useState(false);

    const getSelectClass = () => {
        if (state === 'error') return 'border border-red-300 rounded-md p-2 w-full flex justify-between items-center';
        if (state === 'disabled') return 'border border-gray-200 bg-gray-100 rounded-md p-2 w-full flex justify-between items-center text-gray-400';
        if (focused) return 'border border-blue-300 rounded-md p-2 w-full flex justify-between items-center';
        return 'border border-gray-300 rounded-md p-2 w-full flex justify-between items-center';
    };

    const getHelperTextClass = () => {
        return state === 'error' ? 'text-red-500 text-xs mt-1' : 'text-gray-500 text-xs mt-1';
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <div
                    className={getSelectClass()}
                    onClick={() => !state === 'disabled' && setFocused(!focused)}
                >
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>{value}</span>
                    </div>
                    <div>▼</div>
                </div>
            </div>
            {helperText && <p className={getHelperTextClass()}>{helperText}</p>}
        </div>
    );
};

// Number Input Component
const NumberInput = ({ label, helperText, state = 'default', showValue = true }) => {
    const [value, setValue] = useState(showValue ? '1' : '0');
    const [focused, setFocused] = useState(false);

    const getInputClass = () => {
        if (state === 'error') return 'border border-red-300 rounded-md p-2 w-full text-right';
        if (state === 'disabled') return 'border border-gray-200 bg-gray-100 rounded-md p-2 w-full text-right text-gray-400';
        if (focused) return 'border border-blue-300 rounded-md p-2 w-full text-right';
        return 'border border-gray-300 rounded-md p-2 w-full text-right';
    };

    const getHelperTextClass = () => {
        return state === 'error' ? 'text-red-500 text-xs mt-1' : 'text-gray-500 text-xs mt-1';
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    disabled={state === 'disabled'}
                    className={getInputClass()}
                />
                {showValue && (
                    <button
                        className="absolute right-2 top-2 text-gray-400"
                        onClick={() => setValue('')}
                        type="button"
                    >
                        ×
                    </button>
                )}
            </div>
            {helperText && <p className={getHelperTextClass()}>{helperText}</p>}
        </div>
    );
};

// Swap Input Component
const SwapInput = ({ label, helperText, state = 'default', showValue = true }) => {
    const [value, setValue] = useState(showValue ? '1' : '0');
    const [focused, setFocused] = useState(false);
    const [btcValue] = useState('0 BTC');
    const [rateValue] = useState('0.0258');

    const getInputClass = () => {
        if (state === 'error') return 'border border-red-300 rounded-md p-2 w-full text-right';
        if (state === 'disabled') return 'border border-gray-200 bg-gray-100 rounded-md p-2 w-full text-right text-gray-400';
        if (focused) return 'border border-blue-300 rounded-md p-2 w-full text-right';
        return 'border border-gray-300 rounded-md p-2 w-full text-right';
    };

    const getHelperTextClass = () => {
        return state === 'error' ? 'text-red-500 text-xs mt-1' : 'text-gray-500 text-xs mt-1';
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <div className={getInputClass()}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>BTC</span>
                            <span className="ml-2">▼</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                disabled={state === 'disabled'}
                                className="text-right border-none w-20 focus:outline-none"
                            />
                            {showValue && (
                                <button
                                    className="absolute right-2 top-2 text-gray-400"
                                    onClick={() => setValue('')}
                                    type="button"
                                >
                                    ×
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Balance: {btcValue}</span>
                        <span>{rateValue}</span>
                    </div>
                </div>
            </div>
            {helperText && <p className={getHelperTextClass()}>{helperText}</p>}
        </div>
    );
};

// Demo component to showcase all input states
export const InputsShowcase = () => {
    return (
        <div className="p-8 bg-gray-50">
            <h1 className="text-2xl font-bold mb-6">Inputs</h1>

            <div className="grid grid-cols-3 gap-6">
                <div>
                    <h2 className="text-lg font-medium mb-4">Text</h2>

                    <h3 className="text-sm font-medium mb-2">Default</h3>
                    <TextInput
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Hover</h3>
                    <TextInput
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Typing</h3>
                    <TextInput
                        label="Label"
                        placeholder="Text"
                        helperText="Helper text"
                        state="typing"
                    />

                    <h3 className="text-sm font-medium mb-2">Filled</h3>
                    <TextInput
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        state="filled"
                    />

                    <h3 className="text-sm font-medium mb-2">Error</h3>
                    <TextInput
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        state="error"
                    />

                    <h3 className="text-sm font-medium mb-2">Disabled</h3>
                    <TextInput
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        state="disabled"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-medium mb-4">Select</h2>

                    <h3 className="text-sm font-medium mb-2">Default</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Hover</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Typing</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Filled</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                    />

                    <h3 className="text-sm font-medium mb-2">Error</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                        state="error"
                    />

                    <h3 className="text-sm font-medium mb-2">Disabled</h3>
                    <SelectInput
                        label="Label"
                        helperText="Helper text"
                        state="disabled"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-medium mb-4">Swap</h2>

                    <h3 className="text-sm font-medium mb-2">Default</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        showValue={false}
                    />

                    <h3 className="text-sm font-medium mb-2">Hover</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        showValue={false}
                    />

                    <h3 className="text-sm font-medium mb-2">Typing</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        showValue={true}
                    />

                    <h3 className="text-sm font-medium mb-2">Filled</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        showValue={true}
                    />

                    <h3 className="text-sm font-medium mb-2">Error</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        state="error"
                        showValue={true}
                    />

                    <h3 className="text-sm font-medium mb-2">Disabled</h3>
                    <SwapInput
                        label="Label"
                        helperText="Helper text"
                        state="disabled"
                        showValue={false}
                    />
                </div>
            </div>
        </div>
    );
};


import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-[1px] border-[#DDDDDD] w-full bg-white rounded-[1.5rem] mb-sm overflow-hidden">
            <button
                className="w-full py-4 px-5 flex justify-between items-center text-left bg-white"
                onClick={onClick}
            >
                <h3 className="text-body1 font-medium">{title}</h3>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isOpen && (
                <div className="p-lg leading-[130%] text-neutral-black-300 text-[13px]">
                    {content}
                </div>
            )}
        </div>
    );
};

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    const items = [
        {
            title: "What is Xstake?",
            content: "Xstake is a brand that allows Bitcoin holders to stake their Bitcoin and receive an ERC20 token, typically called xBTC, in return. The idea is to give Bitcoin users a way to earn yield on their holdings while accessing the Ethereum DeFi (Decentralized Finance) ecosystem. Here's a bit more detail."
        },
        {
            title: "What is xBTC, and how is it different from regular Bitcoin?",
            content: "xBTC is an ERC20 token that represents staked Bitcoin. Unlike Bitcoin which exists on the Bitcoin blockchain, xBTC exists on Ethereum, allowing it to interact with Ethereum's DeFi ecosystem. Each xBTC is backed by and redeemable for an equivalent amount of BTC."
        },
        {
            title: "What yield can I expect to earn from staking Bitcoin?",
            content: "Yield rates vary based on market conditions, demand for Bitcoin in DeFi applications, and the specific strategies employed by Xstake. Typically, yields range from 2-8% annually, but this can fluctuate."
        },
        {
            title: "Are there any lock-up periods or withdrawal limitations for staked Bitcoin?",
            content: "Yes, Xstake typically implements lock-up periods ranging from 7-30 days for newly staked Bitcoin. After this period, withdrawals can usually be processed within 24-48 hours, subject to network conditions."
        },
        {
            title: "Is my Bitcoin safe on Xstake? What security measures are in place?",
            content: "Xstake employs multiple security measures including multi-signature wallets, cold storage for the majority of funds, regular security audits, and insurance coverage for deposited assets. However, like any financial service, there are inherent risks."
        },
        {
            title: "Who holds custody of the Bitcoin I deposit?",
            content: "The Bitcoin you deposit is held in custodial wallets managed by Xstake and its custody partners. They use a combination of hot wallets (for liquidity) and cold storage solutions for security."
        },
        {
            title: "Are there any fees for staking Bitcoin or using xBTC?",
            content: "Yes, Xstake typically charges a small fee on staking rewards (often 5-10% of yield earned), plus network fees for deposits and withdrawals. There may also be a small fee when converting between BTC and xBTC."
        },
        {
            title: "What blockchain networks does Xstake support?",
            content: "Xstake primarily bridges between Bitcoin and Ethereum networks. Some versions may also support layer 2 Ethereum solutions like Arbitrum and Optimism, as well as other EVM-compatible chains."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="max-w-[620px] mt-4xl flex flex-col">
            <div>
                <h1 className="text-2xl font-[500px] mb-md">FAQs</h1>
            </div>
            <div className="flex flex-col items-center">
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}
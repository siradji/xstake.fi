import React from "react";

// Icons (replace with your real paths)
const bitcoinIcon = "/icons/bitcoin.svg";
const xbtcIcon = "/icons/xbtc.svg";
const defiLogos = [
  "/icons/uniswap.svg",
  "/icons/lido.svg",
  "/icons/butterfly.svg",
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:px-28 md:px-16 px-md">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
      </div>

      {/* Steps with connector line */}
      <div className="relative max-w-7xl mx-auto">
        {/* Horizontal line on desktop */}
        <div className="hidden lg:block absolute inset-x-0 top-16 h-px bg-gray-200"></div>

        {/* Desktop: flex three cards */}
        <div className="hidden lg:flex justify-between items-start gap-8">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-3xl shadow-lg pt-12 pb-8 px-6 text-center w-1/3">
            <span className="absolute top-4 right-6 text-xs font-semibold text-[#FFB547] border border-[#FFB547] rounded-full px-3 py-1 bg-white">
              Step 1
            </span>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
              <img src={bitcoinIcon} alt="bitcoin" className="w-6 h-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Stake Your Bitcoin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Deposit Bitcoin to mint a liquid ERC20 token that mirrors your Bitcoin balance
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-3xl shadow-lg pt-12 pb-8 px-6 text-center w-1/3">
            <span className="absolute top-4 right-6 text-xs font-semibold text-[#FFB547] border border-[#FFB547] rounded-full px-3 py-1 bg-white">
              Step 2
            </span>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
              <img src={xbtcIcon} alt="xBTC" className="w-6 h-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Earn Native Yield</h3>
            <p className="mt-2 text-sm text-gray-600">
              Earn staking rewards automatically, without locking up your BTC
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-3xl shadow-lg pt-12 pb-8 px-6 text-center w-1/3">
            <span className="absolute top-4 right-6 text-xs font-semibold text-[#FFB547] border border-[#FFB547] rounded-full px-3 py-1 bg-white">
              Step 3
            </span>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex -space-x-3">
              {defiLogos.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-full p-2 shadow-md z-10"
                  style={{ marginLeft: idx === 0 ? 0 : -12 }}
                >
                  <img src={src} alt="" className="w-6 h-6" />
                </div>
              ))}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Leverage in DeFi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Use your LTS xBTC across multiple DeFi for additional earnings
            </p>
            <button className="mt-4 inline-block bg-transparent border border-gray-800 text-gray-800 text-sm font-medium px-6 py-2 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* Mobile & Tablet: stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8">
          {/* reuse same markup structure for each step */}
          {[
            {
              step: "Step 1",
              icon: bitcoinIcon,
              title: "Stake Your Bitcoin",
              desc: "Deposit Bitcoin to mint a liquid ERC20 token that mirrors your Bitcoin balance",
            },
            {
              step: "Step 2",
              icon: xbtcIcon,
              title: "Earn Native Yield",
              desc: "Earn staking rewards automatically, without locking up your BTC",
            },
            {
              step: "Step 3",
              icon: null,
              title: "Leverage in DeFi",
              desc: "Use your LTS xBTC across multiple DeFi for additional earnings",
              customIcons: defiLogos,
            },
          ].map((item, idx) => (
            <div key={idx} className="relative bg-gradient-to-br from-[#f3f2ff] to-white rounded-3xl shadow-lg pt-12 pb-8 px-6 text-center">
              <span className="absolute top-4 right-6 text-xs font-semibold text-[#FFB547] border border-[#FFB547] rounded-full px-3 py-1 bg-white">
                {item.step}
              </span>
              {item.icon && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-md">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                </div>
              )}
              {item.customIcons && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex -space-x-3">
                  {item.customIcons.map((src, i) => (
                    <div key={i} className="bg-white rounded-full p-2 shadow-md z-10" style={{ marginLeft: i === 0 ? 0 : -12 }}>
                      <img src={src} alt="" className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              )}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              {idx === 2 && (
                <button className="mt-4 inline-block bg-transparent border border-gray-800 text-gray-800 text-sm font-medium px-6 py-2 rounded-full">
                  Explore
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full">
          Get Started Now
        </button>
      </div>
    </section>
  );
}

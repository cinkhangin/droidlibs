import React, {useState} from 'react';

interface PaywallProps {
    onClose: () => void;
}

const SponsorshipModal: React.FC<PaywallProps> = ({onClose}) => {
    const [selectedPlan, setSelectedPlan] = useState<'TEXT' | 'SILVER' | 'GOLD'>('TEXT');

    const tiers = [
        {
            id: 'PATRON',
            name: 'Bronze Sponsor',
            price: '$100+',
            period: '',
            tag: 'Bronze',
            desc: 'Permanent name placement on our sidebar.'
        },
        {
            id: 'SILVER',
            name: 'Silver Sponsor',
            price: '$1000+',
            period: '',
            tag: 'Silver',
            desc: 'Permanent B&W logo placement on out sidebar.'
        },
        {
            id: 'GOLD',
            name: 'Gold Sponsor',
            price: '$2000+',
            period: '',
            tag: 'Gold',
            desc: 'Permanent High-res logo placement in the featured header.'
        }
    ];

    const currentTier = tiers.find(t => t.id === selectedPlan);

    const handleAction = () => {
        window.location.href = `mailto:cinkhangin@gmail.com?subject=Sponsorship Inquiry: ${currentTier?.name}&body=Hello, I am interested in the ${currentTier?.name} tier for my organization.`;
    };

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#fafafa] backdrop-blur-md"
             onClick={onClose}>
            <div
                className="w-full max-w-2xl bg-white border border-zinc-100 rounded-sm overflow-hidden flex flex-col shadow-[0_0_100px_-20px_rgba(74,222,128,0.2)]"
                onClick={(e) => e.stopPropagation()}>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-10">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-zinc-600 tracking-tight uppercase flex items-center gap-2">
                                Become a sponsor
                                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                            </h2>
                            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em]">
                                sponsorship does not expire.
                            </p>
                        </div>
                        <button onClick={onClose}
                                className="text-zinc-600 hover:text-emerald-500 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {tiers.map((tier) => (
                            <button
                                key={tier.id}
                                onClick={() => setSelectedPlan(tier.id as any)}
                                className={`flex flex-col text-left p-5 border transition-all relative ${
                                    selectedPlan === tier.id
                                        ? 'border-emerald-500 bg-white ring-1 ring-white'
                                        : 'border-zinc-100 bg-[#fafafa] hover:border-zinc-700'
                                }`}
                            >
                                {tier.tag && (
                                    <span
                                        className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter shadow-[0_4px_10px_rgba(74,222,128,0.3)]">
                    {tier.tag}
                  </span>
                                )}
                                <div className="flex justify-between items-center mb-2">
                  <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${selectedPlan === tier.id ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    {tier.name}
                  </span>
                                    <div className="text-right">
                                        <span className="text-sm font-bold text-zinc-600">{tier.price}</span>
                                        <span
                                            className="text-[9px] text-zinc-600 font-mono ml-1 uppercase">{tier.period}</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 leading-relaxed font-mono mt-2 line-clamp-2">
                                    {tier.desc}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleAction}
                            className={`w-full h-14 text-white text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center disabled:opacity-50 bg-emerald-500 hover:bg-emerald-400`}
                        >
                            Contact Droidlibs Team
                        </button>
                        <p className="text-center text-[9px] text-zinc-600 font-mono uppercase tracking-widest">
                            Sponsorship placement will be sorted by the amount.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorshipModal;

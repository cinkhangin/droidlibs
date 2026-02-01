import React from "react";
import {SPONSORS} from "@/constants.tsx";
import {SponsorTier} from "@/types.ts";

const Sponsors = () => {
    const goldSponsors = SPONSORS.filter(s => s.tier === SponsorTier.GOLD);

    return (
        <div className="mb-6 border border-white bg-[#fafafa] p-4">
            <div className="flex items-center gap-4">
                <span
                    className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Sponsors</span>
                <div className="flex items-center gap-8">
                    {goldSponsors.map(s => (
                        <a key={s.id} href={s.url} target="_blank"
                           className="flex items-center gap-2 group">
                            <div
                                className="w-5 h-5 bg-white flex items-center justify-center rounded-sm transition-all group-hover:bg-emerald-500 group-hover:scale-110">
                                <span className="text-[10px] text-black font-bold">{s.name[0]}</span>
                            </div>
                            <span
                                className="text-[10px] font-bold text-zinc-400 group-hover:text-emerald-400 transition-colors">{s.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sponsors;
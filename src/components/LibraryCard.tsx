import React from "react";
import {Library} from '@/types.ts';

interface LibraryCardProps {
    library: Library;
    onClick: () => void;
}

const LibraryCard: React.FC<LibraryCardProps> = ({library, onClick}) => {
    return (
        <div
            onClick={onClick}
            className="group bg-[#fafafa] border-2 border-white p-5 hover:border-emerald-500/50 hover:bg-emerald-500/2 transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex flex-row gap-2 items-center">
                    <h3 className="text-sm font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">{library.name}</h3>
                    <span
                        className="text-[10px] text-zinc-600 font-mono tracking-tighter">v{library.latestVersion}</span>
                </div>

                <div className="flex gap-1 items-center">
                    <img src="/ic_star.svg" alt="star" className="w-3 h-3 text-emerald-500"/>
                    <span
                        className="text-xs text-zinc-500 font-mono uppercase tracking-widest ">
                      {library.stars}k+
                    </span>
                </div>
            </div>
            <p className="text-zinc-500 text-xs mb-6 line-clamp-2 leading-relaxed truncate">{library.description}</p>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                   <span
                       className="text-[9px]  text-zinc-700 font-bold px-1.5 py-0.5 font-mono lowercase ">
                    # {library.category}
                  </span>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard;

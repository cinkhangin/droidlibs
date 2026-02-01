
import React from "react";
import { Library } from '../types';

interface LibraryCardProps {
  library: Library;
  onClick: () => void;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ library, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-[#fafafa] border border-white p-5 hover:border-emerald-500/50 hover:bg-emerald-500/2 transition-all cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-500 transition-all duration-300"></div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">{library.name}</h3>
        <span className="text-[10px] text-zinc-600 font-mono tracking-tighter">v{library.latestVersion}</span>
      </div>
      <p className="text-zinc-500 text-xs mb-6 line-clamp-2 leading-relaxed">{library.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
           <span className="text-[9px] bg-emerald-500/10 text-emerald-400/80 px-1.5 py-0.5 font-mono uppercase border border-emerald-500/20">
            {library.category}
          </span>
        </div>
        <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest group-hover:text-emerald-500/60 transition-colors">
          {library.stars}
        </span>
      </div>
    </div>
  );
};

export default LibraryCard;

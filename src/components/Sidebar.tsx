
import React from 'react';
import { Category, SponsorTier } from '@/types.ts';
import { SPONSORS } from '../constants.ts';

interface SidebarProps {
  selectedCategory: Category | 'All';
  setSelectedCategory: (cat: Category | 'All') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories: ('All' | Category)[] = ['All', ...Object.values(Category)];

  const silverSponsors = SPONSORS.filter(s => s.tier === SponsorTier.SILVER);
  const textSponsors = SPONSORS.filter(s => s.tier === SponsorTier.TEXT);

  return (
    <aside className="w-full md:w-64 bg-[#fafafa] border-r border-white h-full overflow-y-auto flex flex-col">
      <div className="p-4 space-y-1 flex-1">
        <div className="px-3 mb-6">
          <h2 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mono">Library Explorer</h2>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`w-full text-left px-3 py-1.5 text-sm transition-all duration-150 relative group flex items-center gap-2 ${
              selectedCategory === cat
                ? 'text-emerald-400'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {selectedCategory === cat && (
              <div className="absolute left-0 w-0.5 h-4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
            )}
            <span className={`${selectedCategory === cat ? 'font-medium' : 'group-hover:translate-x-0.5 transition-transform'}`}>
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Sponsor Showcase */}
      <div className="p-4 border-t border-white bg-[#fafafa]">
        <div className="px-3 mb-4 flex items-center justify-between">
          <h2 className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mono">Partners</h2>
          <div className="w-1 h-1 rounded-full bg-emerald-500/30"></div>
        </div>
        
        {/* Silver (B&W) */}
        <div className="grid grid-cols-2 gap-2 px-3 mb-4">
          {silverSponsors.map(s => (
            <a key={s.id} href={s.url} target="_blank" className="h-10 border border-zinc-900 rounded-sm flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 hover:border-emerald-500/50 transition-all bg-black group p-2">
               <span className="text-[8px] font-bold text-white uppercase text-center leading-none tracking-tighter">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Text Sponsors */}
        <div className="px-3 space-y-1.5 pb-2">
          {textSponsors.map(s => (
            <a key={s.id} href={s.url} target="_blank" className="block text-[9px] text-zinc-600 hover:text-emerald-400 transition-colors mono uppercase truncate">
              - {s.name}
            </a>
          ))}
          <button className="text-[9px] text-zinc-700 hover:text-emerald-500 transition-colors mono uppercase italic mt-2">
            Bronze Sponsors Here
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

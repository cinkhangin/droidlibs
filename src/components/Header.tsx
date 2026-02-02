import * as React from "react";
import {Version} from "@/src/constants.tsx";

interface HeaderProps {
    searchQuery: string;
    onSearch: (query: string) => void;
    onClickSponsor: () => void;
}

const Header: React.FC<HeaderProps> = ({searchQuery, onSearch, onClickSponsor}) => {
    return (
        <header className="sticky top-0 z-40 bg-[#fafafa] backdrop-blur-md border-b border-white">
            <div className="px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img className="w-6 h-6 " src="/favicon.svg" alt="logo"></img>
                        <div className="flex flex-col">
                            <h1 className="text-s font-bold text-zinc-600 uppercase mono">droidlibs</h1>
                            <span
                                className="text-[10px] text-zinc-400 font-mono tracking-tighter leading-none">{Version.PUBLIC}</span>
                        </div>
                    </div>

                    <div className="hidden md:block h-4 w-px bg-zinc-200"></div>

                    <div className="hidden md:block relative">
                        <input
                            type="text"
                            placeholder="Search index..."
                            value={searchQuery}
                            onChange={(e) => onSearch(e.target.value)}
                            className="bg-white text-[12px] w-64 px-2 py-1 focus:outline-none focus:text-emerald-400 transition-colors mono border border-zinc-200"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => onClickSponsor()}
                        className="text-[10px] font-bold text-white bg-emerald-500 border border-white px-2 py-1.5 hover:bg-emerald-400  uppercase mono"
                    >
                        Become a Sponsor
                    </button>

                    <a href="https://github.com/cinkhangin/droidlibs" target="_blank" rel="noreferrer"
                       className="text-zinc-600 hover:text-emerald-500 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
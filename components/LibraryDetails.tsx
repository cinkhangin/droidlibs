import React, {useState} from 'react';
import {Library} from '../types';
import CodeSnippet from "@/components/CodeSnippet.tsx";

interface LibraryDetailsProps {
    library: Library;
    onClose: () => void;
}

type Tab = 'setup' | 'tradeoffs';

const LibraryDetails: React.FC<LibraryDetailsProps> = ({library, onClose}) => {
    const [activeTab, setActiveTab] = useState<Tab>('setup');

    const tabs: { id: Tab, label: string }[] = [
        {id: 'setup', label: 'Implementation'},
        {id: 'tradeoffs', label: 'Analysis'},
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#fafafa] backdrop-blur-sm"
             onClick={onClose}>
            <div
                className="bg-white border border-white w-full max-w-5xl h-full max-h-[85vh] overflow-hidden flex flex-col shadow-[0_0_80px_-20px_rgba(74,222,128,0.15)]"
                onClick={(e) => e.stopPropagation()}>
                {/* Header Bar */}
                <div className="h-12 border-b border-white flex items-center justify-between px-4 bg-white
                ">
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Library.doc</span>
                        <div className="w-1 h-1 rounded-full bg-emerald-500/40"></div>
                        <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">{library.name}</h2>
                    </div>
                    <button onClick={onClose} className="text-zinc-600  font-bold hover:text-emerald-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                {/* Tab Bar (Editor Style) */}
                <div className="flex border-b border-white bg-zinc-50">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2.5 text-[11px] font-mono transition-all border-r border-white relative ${
                                activeTab === tab.id
                                    ? 'bg-emerald-500 text-white border-b border-b-white -mb-px'
                                    : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            {tab.label}.kt
                            {activeTab === tab.id && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-px bg-emerald-500 shadow-[0_-2px_6px_rgba(74,222,128,0.5)]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-4 bg-white">
                    {activeTab === 'setup' && (
                        <div className="max-w-3xl space-y-8">
                            <section>
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
                                    <span className="w-1 h-1 bg-emerald-500"></span>
                                    Build Configuration
                                </h4>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[11px] text-emerald-500/60 mb-2 font-mono">libs.versions.toml</p>
                                        <CodeSnippet code={library.implementation.versionCatalog} language="toml" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-emerald-500/60 mb-2 font-mono">build.gradle.kts</p>
                                        <CodeSnippet code={library.implementation.kts} language="kotlin" />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
                                    <span className="w-1 h-1 bg-emerald-500"></span>
                                    External Link
                                </h4>
                                <a href={library.website} target="_blank" rel="noopener noreferrer"
                                   className="text-emerald-400 hover:text-emerald-300 text-xs font-mono underline decoration-emerald-900/50 underline-offset-4">
                                    Visit {library.name} Documentation &rarr;
                                </a>
                            </section>
                        </div>
                    )}

                    {activeTab === 'tradeoffs' && (
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Advantages</h4>
                                <div className="space-y-4">
                                    {library.pros.map((pro, idx) => (
                                        <div key={idx} className="flex gap-3 items-start group">
                                            <span
                                                className="text-emerald-500/50 font-mono text-xs group-hover:text-emerald-400 transition-colors">0{idx + 1}</span>
                                            <p className="text-xs text-zinc-500 leading-relaxed">{pro}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Limitations</h4>
                                <div className="space-y-4">
                                    {library.cons.map((con, idx) => (
                                        <div key={idx} className="flex gap-3 items-start group">
                                            <span
                                                className="text-zinc-700 font-mono text-xs group-hover:text-zinc-500 transition-colors">0{idx + 1}</span>
                                            <p className="text-xs text-zinc-500 leading-relaxed italic">{con}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:col-span-2 pt-8 border-t border-zinc-900 mt-4">
                                <h4 className="text-[10px] font-mono text-zinc-600 uppercase mb-4 tracking-[0.2em]">Competitive
                                    Landscape</h4>
                                <div className="flex flex-wrap gap-2">
                                    {library.alternatives.map((alt) => (
                                        <span key={alt}
                                              className="text-[10px] text-emerald-400/60 border border-emerald-500/20 px-2 py-0.5 rounded-sm font-mono hover:bg-emerald-500/10 transition-colors">
                      {alt}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="max-w-3xl space-y-6">
                            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Common
                                Implementation Issues</h4>
                            {library.commonIssues.map((issue, idx) => (
                                <div key={idx}
                                     className="border border-zinc-900 p-6 rounded-sm space-y-4 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                        <h5 className="text-xs font-bold text-zinc-600 uppercase tracking-wider">{issue.problem}</h5>
                                    </div>
                                    <div className="pl-4.5 border-l border-zinc-800">
                                        <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                                            {issue.fix}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LibraryDetails;

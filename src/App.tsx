import React, {useState, useMemo} from 'react';
import {Category, Library} from '../types.ts';
import {LIBRARIES} from './constants.tsx';
import Sidebar from '@/src/components/Sidebar.tsx';
import LibraryCard from '@/src/components/LibraryCard.tsx';
import LibraryDetails from '@/src/components/LibraryDetails.tsx';
import SponsorshipModal from '@/src/components/SponsorshipModal.tsx';
import {fetchLibraryDetails} from '@/src/services/vaultService.ts';
import Header from "@/src/components/Header.tsx";
import Sponsors from "@/src/components/Sponsors.tsx";

const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLibrary, setActiveLibrary] = useState<Library | null>(null);

    const [showPaywall, setShowPaywall] = useState(false);

    const filteredLibraries = useMemo(() => {
        return LIBRARIES.filter((lib) => {
            const matchesCategory = selectedCategory === 'All' || lib.category === selectedCategory;
            const matchesSearch = lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                lib.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        }).sort((a, b) => b.stars - a.stars);
    }, [selectedCategory, searchQuery]);

    const handleLibraryClick = async (id: string) => {
        const details = await fetchLibraryDetails(id);
        if (details) {
            setActiveLibrary(details);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-300">
            <Header
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                onClickSponsor={() => setShowPaywall(true)}
            />

            <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-56px)] overflow-hidden">
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <main className="flex-1 overflow-y-auto bg-[#ffffff] p-8">
                    <Sponsors/>

                    <div className="max-w-7xl mx-auto ">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-xl font-bold text-zinc-400 tracking-tight uppercase flex items-center gap-3">
                                    {selectedCategory === 'All' ? 'Package Index' : `${selectedCategory}`}
                                    <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                                </h2>
                                <p className="text-[10px] text-zinc-600 font-mono mt-1 uppercase tracking-widest">
                                    Libraries
                                </p>
                            </div>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 bg-[#fafafa]">
                            {filteredLibraries.map((lib) => (
                                <div key={lib.id} className="bg-[#fafafa]">
                                    <LibraryCard
                                        library={lib}
                                        onClick={() => handleLibraryClick(lib.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {activeLibrary && (
                <LibraryDetails
                    library={activeLibrary}
                    onClose={() => setActiveLibrary(null)}
                />
            )}

            {showPaywall && (
                <SponsorshipModal
                    onClose={() => {
                        setShowPaywall(false);
                    }}
                />
            )}
        </div>
    );
};

export default App;

"use client";
import React, { useState, useMemo } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

// Define dealer interface
interface Dealer {
    id: number;
    name: string;
    location: string;
    mapUrl: string;
}

// Sample dealers data
const dealersData: Dealer[] = [
    {
        id: 1,
        name: 'Shifa Suppliers',
        location: 'Abukhaireni',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225710.73087697633!2d84.480457!3d27.879558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39951eb47fcd0653%3A0xb1440c00115e0c08!2sAanbu%20Khaireni!5e0!3m2!1sen!2snp!4v1745315732889!5m2!1sen!2snp'
    },
    {
        id: 2,
        name: 'Sirjana Ladies Collection',
        location: 'Khairenitar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225364.59174456747!2d84.123945!3d28.045199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a4c17b684d2b%3A0xfa62aeeb3fbeb67e!2sKhairenitar!5e0!3m2!1sen!2snp!4v1745315992262!5m2!1sen!2snp'
    },
    {
        id: 3,
        name: 'Shayana Suppliers',
        location: 'Waling',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225481.10187222526!2d83.768649!3d27.989545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995c54b85798d13%3A0x4720664fba067678!2sWaling%2033801!5e0!3m2!1sen!2snp!4v1745316071431!5m2!1sen!2snp'
    },
    {
        id: 4,
        name: 'Laxmi Traders',
        location: 'Baglung',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224876.93755349104!2d83.584735!3d28.277047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399609da7ba8828d%3A0x22703ce6a17dcdab!2sBaglung!5e0!3m2!1sen!2snp!4v1745316109827!5m2!1sen!2snp'
    },
    {
        id: 5,
        name: 'Begin Traders',
        location: 'Pokhara',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224976.7772756307!2d83.956618!3d28.229722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1745316146395!5m2!1sen!2snp'
    },
    {
        id: 6,
        name: 'Prasansa Store',
        location: 'Malekhu',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225856.93746766343!2d84.830096!3d27.80932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994d63937f0b085%3A0xdd9e20908ba3940!2sMalekhu%2C%20Benighat%2045100!5e0!3m2!1sen!2snp!4v1745318308325!5m2!1sen!2snp'
    },
    {
        id: 7,
        name: 'Aarav Suppliers',
        location: 'Trishuli',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225211.72943842734!2d84.917274!3d28.118064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995204ceea6a129%3A0xe1f5cc8ca30e0b91!2sTrishuli!5e0!3m2!1sen!2snp!4v1745318352517!5m2!1sen!2snp'
    },
    {
        id: 8,
        name: 'Joti Suppliers And Traders',
        location: 'Khotang',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227200.23030456423!2d86.705691!3d27.156177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e933bb4310e10d%3A0xf901dbd37f9a63b7!2sKhotang!5e0!3m2!1sen!2snp!4v1745318386652!5m2!1sen!2snp'
    },
    {
        id: 9,
        name: 'Sirjana Ladies Collection',
        location: 'Khairenitar',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225364.59174456747!2d84.123945!3d28.045199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a4c17b684d2b%3A0xfa62aeeb3fbeb67e!2sKhairenitar!5e0!3m2!1sen!2snp!4v1745315992262!5m2!1sen!2snp'
    },
    {
        id: 10,
        name: 'Shayana Suppliers',
        location: 'Waling',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225481.10187222526!2d83.768649!3d27.989545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995c54b85798d13%3A0x4720664fba067678!2sWaling%2033801!5e0!3m2!1sen!2snp!4v1745316071431!5m2!1sen!2snp'
    },
    {
        id: 11,
        name: 'Aarav Suppliers',
        location: 'Trishuli',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225211.72943842734!2d84.917274!3d28.118064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995204ceea6a129%3A0xe1f5cc8ca30e0b91!2sTrishuli!5e0!3m2!1sen!2snp!4v1745318352517!5m2!1sen!2snp'
    },
    {
        id: 12,
        name: 'Joti Suppliers And Traders',
        location: 'Khotang',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227200.23030456423!2d86.705691!3d27.156177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e933bb4310e10d%3A0xf901dbd37f9a63b7!2sKhotang!5e0!3m2!1sen!2snp!4v1745318386652!5m2!1sen!2snp'
    },
];

// Sort options type
type SortOption = 'name' | 'location';

// DealersList component
const DealersList: React.FC = () => {
    // State for selected dealer, sorting, and pagination
    const [selectedDealer, setSelectedDealer] = useState<Dealer>(dealersData[0]);
    const [sortBy, setSortBy] = useState<SortOption>('name');
    const [currentPage, setCurrentPage] = useState(1);
    const dealersPerPage = 8;

    // Handle sorting and filtering
    const sortedDealers = useMemo(() => {
        return [...dealersData].sort((a, b) =>
            sortBy === 'name'
                ? a.name.localeCompare(b.name)
                : a.location.localeCompare(b.location)
        );
    }, [sortBy]);

    // Handle reset button click
    const handleReset = () => {
        setSortBy('name');
        setCurrentPage(1);
        setSelectedDealer(sortedDealers[0]);
    };

    // Calculate pagination
    const indexOfLastDealer = currentPage * dealersPerPage;
    const indexOfFirstDealer = indexOfLastDealer - dealersPerPage;
    const currentDealers = sortedDealers.slice(indexOfFirstDealer, indexOfLastDealer);
    const totalPages = Math.ceil(sortedDealers.length / dealersPerPage);

    return (
        <div className="bg-pink-100 rounded-lg p-4 shadow-md">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Sort and Filter Controls */}
                <div className="flex gap-2">
                    <div className="relative w-60">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="w-full p-3 bg-white border border-gray-200 rounded-md shadow-sm appearance-none pr-10 cursor-pointer"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="location">Sort by Location</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                    <button
                        onClick={handleReset}
                        className="px-6 py-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer font-semibold"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Dealers List */}
                <div className="md:col-span-1">
                    <div className="space-y-2">
                        {currentDealers.map((dealer) => (
                            <div
                                key={dealer.id}
                                onClick={() => setSelectedDealer(dealer)}
                                className={`py-1 px-2 rounded-md cursor-pointer transition-all ${selectedDealer.id === dealer.id
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                                    : 'bg-white hover:bg-gray-50'
                                    }`}>
                                <h3 className={`text-lg font-medium ${selectedDealer.id === dealer.id ? 'text-white' : 'text-gray-800'
                                    }`}>
                                    {dealer.name}
                                </h3>
                                <p className={`text-sm ${selectedDealer.id === dealer.id ? 'text-white/90' : 'text-gray-500'
                                    }`}>
                                    {dealer.location}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <div>Page {currentPage} of {totalPages}</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
                                aria-label="Previous page"
                            >
                                <FiChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
                                aria-label="Next page"
                            >
                                <FiChevronRight size={18} />
                            </button>
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
                                aria-label="Last page"
                            >
                                <FiChevronsRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="md:col-span-2 bg-white rounded-lg overflow-hidden h-[500px] relative">
                    {/* Location name display */}
                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md z-10 shadow-md">
                        <h3 className="font-medium">{selectedDealer.location}</h3>
                    </div>

                    {/* Map directions button */}
                    <div className="absolute top-4 right-4 z-10">
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDealer.location}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow-md text-sm"
                        >
                            Directions
                        </a>
                    </div>


                    {/* View larger map link */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${selectedDealer.location}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-gray-100 px-3 py-1 rounded shadow-md text-sm text-blue-500"
                        >
                            View larger map
                        </a>
                    </div>

                    {/* Google Maps iframe */}
                    <iframe
                        src={selectedDealer.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${selectedDealer.location}`}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default DealersList;
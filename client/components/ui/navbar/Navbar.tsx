"use client";

import { IconAirbnbLogo } from '../icons/IconAirbnbLogo';
import { IconMenu } from '../icons/IconMenu';
import { IconGlobe } from '../icons/IconGlobe';
import { DateRangePicker } from '../date-range-picker';
import { PersonIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const [noOfGuests, setNoOfGuests] = useState(0);

    const handleClick = () => {
        fetch("")
    }
    return (
        <>
            <header className="sticky top-0 z-50 px-5 bg-white shadow-md flex items-center justify-between">
                {/* Left */}
                <a href="/">
                    <IconAirbnbLogo />
                </a>
                {/* Middle */}
                <div>
                    <input
                        className="w-96 placeholder:italic placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for a place to stay"
                        type="text"
                        name="search"
                        onChange={e => setSearchInput(e.target.value)}
                    />
                </div>
                {/* Right */}
                <div className="flex items-center space-x-4 justify-end">
                    <a href="/properties/createProperty" className="font-semibold hover:cursor-pointer p-2.5 rounded-full text-zinc-800">
                        Host your home
                    </a>
                    <IconGlobe />
                    <a href="/login" className="flex space-x-2 border-2 p-2 rounded-full hover:cursor-pointer hover:shadow-md">
                        <IconMenu />
                    </a>
                </div>
            </header>

            {searchInput && (<div className="flex flex-row gap-8 items-center justify-center">
                <div className="flex items-center my-3">
                    <div className="mx-auto">
                        <DateRangePicker align="center" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2">
                    <PersonIcon className="h-6" />
                    <h1 className="text-center">Guests</h1>
                    <input
                        type="number"
                        className="w-12 border-2 rounded-md"
                        onChange={e => setNoOfGuests(parseInt(e.target.value))}
                        value={noOfGuests}
                        min={1}
                        max={10}
                    />
                    <button className="text-red-600 pl-8" onClick={handleClick}>Search</button>
                </div>
            </div>)}
        </>
    )
}
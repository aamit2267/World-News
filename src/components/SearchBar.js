import React, { useState } from "react";
import "../assets/styles/SearchBar.css";

const SearchBar = ({ setSearch }) => {
    const [input, setInput] = useState('');

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for news..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => setSearch(input)}
            >
                <i className="fas fa-search"></i>
                </button>
        </div>
    );
};

export default SearchBar;
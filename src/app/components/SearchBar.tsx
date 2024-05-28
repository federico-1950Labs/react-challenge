import React from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="my-4 relative">
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        className="pl-10 pr-4 py-2 border rounded w-full sm:w-full md:w-full lg:w-full xl:w-full bg-gray-100"
        placeholder="Search users..."
        style={{
          background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35"/></svg>') no-repeat scroll 0.5rem center`,
          backgroundSize: '1.5rem',
        }}
      />
    </div>
  );
};

export default SearchBar;

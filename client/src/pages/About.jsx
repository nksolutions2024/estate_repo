// import React from 'react'

// export default function About() {
//   return (
//     <div>About6</div>
//   )
// }


// "use client"

import React, { useState, useCallback, useEffect } from 'react';

const GoogleAddressSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const fetchResults = async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiKey = 'OCT8Oo19bcr3JkkGFuUZLDe4VW4wOXM1blmHWFSa';
      const requestId = '24803f0d-8a94-4eaf-b1e3-0c5a67d0d757'; // Replace with your actual request ID

      const response = await fetch(`https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(query)}&api_key=${apiKey}`, {
        method: 'GET',
        headers: {
          'X-Request-Id': requestId,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.predictions || []);  // Adjust based on the actual response structure
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      setError('Failed to fetch results. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  useEffect(() => {
    debouncedFetchResults(query);
  }, [query]);

  return (
    <div>
      <h1>Place Search1</h1>
      <input
        type="text"
        placeholder="Search for a place5..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.description}  {/* Adjust based on Ola Maps response */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default GoogleAddressSearch;


// import GoogleAddressSearch from '@/app/component/GoogleAddressSearch'

// import React from 'react'
// const AddNewListing = () => {
//   return (
//       <div className='flex items-center justify-center'>
//         <h2 className='font-bold'>Add New Listing</h2>
//         <div className='' >
//         <h2>Enter Address which you2 want</h2>
        
//         <GoogleAddressSearch/>
//         </div>
//     </div>
//   )
// }
// export default AddNewListing

export default function About() {
  return (
    <div>
      <GoogleAddressSearch/>
    </div>
  );
}

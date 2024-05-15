import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import toursData from '../../mockData/items.json'; 
import './SearchResult.css'; 

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');


  const filteredResults = toursData.filter(tour =>
    tour.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>
      <ul className="search-results-list">
        {filteredResults.length > 0 ? (
          filteredResults.map(result => (
            <li key={result.id} className="search-result-item">
              <Link to={`/tour/${result.id}`} className="search-result-link">
                <img src={result.image} alt={result.name} className="search-result-image" />
                <h3>{result.name}</h3>
              </Link>
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;



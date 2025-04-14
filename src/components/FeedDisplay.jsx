import React from 'react';
import './FeedDisplay.css';
import { Link } from 'react-router-dom'; // <-- Make sure this is imported

const FeedDisplay = ({ data, className = '' }) => {
  if (!data) return <p>No data available.</p>;

  const { id, title, body, compensation, organization, researcherName, workType } = data;

  const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  };
  
  const isFavorited = (id) => {
    return getFavorites().includes(id);
  };
  
  const toggleFavorite = (id) => {
    const favorites = getFavorites();
    const updated = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
  
    localStorage.setItem('favorites', JSON.stringify(updated));
    window.location.reload(); // quick fix to re-render
  };
  

  return (
    <div className={`feed-display-card ${className}`}>
      <h3 className="feed-display-title">{title || 'Untitled'}</h3>
      <p>{body || 'No description available.'}</p>
      <p><strong>Compensation:</strong> {compensation || 'Not specified'}</p>
      <p><strong>Organization:</strong> {organization || 'Unknown'}</p>
      <p><strong>Researcher:</strong> {researcherName || 'Unknown'}</p>
      <p><strong>Work Type:</strong> {workType || 'Not specified'}</p>

      <Link to={`/apply/${id}`}>
        <button className="apply-button">Apply</button>
      </Link>

      <button
  className="favorite-button"
  onClick={() => toggleFavorite(id)}
  style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}
>
  {isFavorited(id) ? '❤️' : '🤍'}
</button>

    </div>
  );
};

export default FeedDisplay;

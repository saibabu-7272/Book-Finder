import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  // Check for cover image
  const coverImage = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x225?text=No+Cover';

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={coverImage} alt={`Cover of ${book.title}`} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        {book.author_name && (
          <p className="book-author">
            By {book.author_name.slice(0, 2).join(', ')}
            {book.author_name.length > 2 ? ' & others' : ''}
          </p>
        )}
        <div className="book-details">
          {book.first_publish_year && (
            <span className="book-year">
              Published: {book.first_publish_year}
            </span>
          )}
          {book.edition_count && (
            <span className="book-editions">
              {book.edition_count} {book.edition_count === 1 ? 'edition' : 'editions'}
            </span>
          )}
        </div>
        <div className="book-languages">
          {book.language && book.language.length > 0 && (
            <span>Languages: {book.language.slice(0, 3).join(', ')}</span>
          )}
        </div>
        {book.subject && book.subject?.length > 0 && (
          <div className="book-subjects">
            {book.subject.slice(0, 3).map((subject, index) => (
              <span key={index} className="subject-tag">
                {subject}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;

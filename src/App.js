import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import BookCard from './components/BookCard/BookCard';
import Pagination from './components/Pagination/Pagination';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    query: '',
    type: 'title',
    sort: 'relevance',
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    resultsPerPage: 10,
    totalResults: 0,
  });

  const handleSearch = (query, type, sort) => {
    setSearchParams({ query, type, sort });
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchParams.query) return;

      setLoading(true);
      setError(null);

      try {
        // Build the API URL based on search parameters
        let url = `https://openlibrary.org/search.json?`;
        
        // Add search type and query
        if (searchParams.type === 'title') {
          url += `title=${encodeURIComponent(searchParams.query)}`;
        } else if (searchParams.type === 'author') {
          url += `author=${encodeURIComponent(searchParams.query)}`;
        } else if (searchParams.type === 'subject') {
          url += `subject=${encodeURIComponent(searchParams.query)}`;
        } else {
          url += `q=${encodeURIComponent(searchParams.query)}`;
        }
        
        // Add sorting parameter
        if (searchParams.sort !== 'relevance') {
          url += `&sort=${searchParams.sort}`;
        }
        
        // Add pagination
        const offset = (pagination.currentPage - 1) * pagination.resultsPerPage;
        url += `&page=${pagination.currentPage}&limit=${pagination.resultsPerPage}`;
        
        // Add fields to retrieve
        url += `&fields=key,title,author_name,cover_i,first_publish_year,edition_count,language,subject`;

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        setBooks(data.docs || []);
        setPagination(prev => ({
          ...prev,
          totalResults: data.numFound || 0,
          totalPages: Math.ceil((data.numFound || 0) / pagination.resultsPerPage),
        }));
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to fetch books. Please try again later.');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchParams.query, searchParams.type, searchParams.sort, pagination.currentPage, pagination.resultsPerPage]);

  return (
    <div className="app">
      <div className="background">
        <div className="gradient-bg"></div>
      </div>
      
      <Header />
      
      <main className="main-content">
        <Search onSearch={handleSearch} />
        
        {error && <div className="error-message">{error}</div>}
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {books.length > 0 ? (
              <div className="search-results">
                <div className="results-info">
                  <p>
                    {pagination.totalResults > 0 && (
                      `Showing ${Math.min(
                        (pagination.currentPage - 1) * pagination.resultsPerPage + 1, 
                        pagination.totalResults
                      )}-${Math.min(
                        pagination.currentPage * pagination.resultsPerPage, 
                        pagination.totalResults
                      )} of ${pagination.totalResults} results`
                    )}
                  </p>
                </div>
                
                <div className="books-container">
                  {books.map((book, index) => (
                    <BookCard key={`${book.key}-${index}`} book={book} />
                  ))}
                </div>
                
                {pagination.totalPages > 1 && (
                  <Pagination 
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            ) : (
              searchParams.query && (
                <div className="no-results">
                  <p>No books found for your search.</p>
                  <p>Try different keywords or filters.</p>
                </div>
              )
            )}
          </>
        )}
      </main>
      
      <footer className="footer">
        <p>Book Finder App for Alex &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

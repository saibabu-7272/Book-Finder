# Book Finder

A modern, web application designed to search and discover books using the Open Library API. Provides comprehensive book search functionality.

[Book Finder App Live](https://book-finder-topaz.vercel.app/)

## Features

- **Modern UI**: Sleek design with liquid glass cards and gradient blur backgrounds
- **Advanced Search**: Search books by title, author, or subject
- **Sorting Options**: Sort results by relevance, newest, oldest, or rating
- **Pagination**: Browse through multiple pages of search results
- **Book Details**: View comprehensive book information including covers, authors, publish year, editions, and subjects
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- React 19.1.1
- JavaScript (ES6+)
- CSS3 (with modern features like backdrop-filter for glass effects)
- Open Library API

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/saibabu-7272/Book-Finder.git
cd book-finder
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Start the Development Server

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Use the App

### Searching for Books

1. Enter your search query in the search bar at the top of the page
2. Select the search type (Title, Author, Subject, or All) from the dropdown menu
3. Choose a sorting method (Relevance, Newest, Oldest, Rating) if desired
4. Click the search button or press Enter

### Browsing Results

- Search results will appear as cards below the search bar
- Each card displays:
  - Book cover image (when available)
  - Title
  - Author(s)
  - Publication year
  - Number of editions
  - Languages
  - Subjects (up to 3)

### Pagination

- Navigate between pages using the pagination controls at the bottom of the results
- The current page and total pages are displayed for easy navigation

## API Information

This application uses the Open Library Search API:
- Base endpoint: `https://openlibrary.org/search.json`
- Example query: `https://openlibrary.org/search.json?title={bookTitle}`

For more information about the API, visit the [Open Library Developer Center](https://openlibrary.org/developers/api).

## Building for Production

To build the app for production:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This creates a `build` folder with optimized production files ready for deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Open Library](https://openlibrary.org/) for providing the book data API
- [Create React App](https://create-react-app.dev/) for the project setup

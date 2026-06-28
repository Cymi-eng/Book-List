# Book List Rendering App

## Project Overview

This project is a React application that displays a collection of books, allows users to search new books. The application is built using reusable React components and follows a component-based architecture.

---

## Features

- Display a list of books
- Render items dynamically using `.map()`
- Responsive and clean user interface
- Built with React Hooks (`useState`)


## Technologies Used

- React
- JavaScript
- CSS3
- Vite
- Github


## Project Structure

```
src/
│
├── components/
│   ├── BookItem.jsx
│   └── BookList.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/cymi-eng/book-list.git
```

2. Navigate to the project folder

```bash
cd book-list
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

---

## How It Works

The application stores book information in an array of objects using React state.

Example:


The `.map()` function loops through the array and renders a `BookItem` component for each book.

## Learning Objectives

This project demonstrates:

- React Components
- Props
- State Management with `useState`
- List Rendering using `.map()`
- Event Handling
- Conditional Rendering
- Basic CSS Styling

---

## Future Improvements

- Edit existing books
- Search for books
- Sort books alphabetically
- Store data using Local Storage
- Connect to a backend database

---

## Author

**Ian Cymi**

GitHub: https://github.com/cymi-eng

---

## License

This project is under the MIT LICENSE
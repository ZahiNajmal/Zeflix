# Zeflix

**Search movies. Find trailers. Save your favorites.**

Zeflix is a React + Vite web app that lets you search for movies, check their details, find trailers, and save your favorite movies for later.

Movie information such as titles, posters, release years, and IMDb ratings comes from the **OMDb API**.

For trailers, Zeflix searches YouTube for the movie and uses the first result.

<img width="1900" height="824" alt="image" src="https://github.com/user-attachments/assets/9e9d7088-87f5-4bce-884e-e04465395f6a" />

## Features

* Search for movies by title
* Find and watch movie trailers through YouTube
* Save movies to your favorites
* View your favorites anytime
* Fast performance with Vite
* Responsive design for desktop and mobile

## Built With

* React
* Vite
* OMDb API
* CSS
* YouTube search
  
<img width="1899" height="820" alt="image" src="https://github.com/user-attachments/assets/8656f19c-988f-4497-94ec-c6adba9e0734" />

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ZahiNajmal/Zeflix.git
cd zeflix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your OMDb API key

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal and you're ready to go.

## Environment Variables

Zeflix uses an OMDb API key to get movie information.

Your `.env` file should contain:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

Keep this file private.

## How It Works

1. Search for a movie.
2. Zeflix gets the movie information from OMDb.
3. The movie details are displayed.
4. Zeflix searches YouTube for the trailer.
5. Open the trailer from the search result.
6. Click the heart button to save the movie.
7. Find your saved movies in the Favorites section.

## What's Next?

Zeflix is still a project that can be built on. More features, better trailer searching, and other improvements can be added over time.

## Author

**Zahi Najmal**

Built with React, curiosity, and also one of my first React project :D

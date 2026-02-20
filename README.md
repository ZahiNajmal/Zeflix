# Zeflix

Zeflix is an interactive web app built with React + Vite that lets users search for movies, watch trailers, and save favorites.

Instead of relying only on APIs for trailers, it automatically finds the movie trailer on YouTube and shows the first video result.

The app uses the OMDb API to fetch movie data like title, poster, year, and IMDb rating.

# Features

 1.) Search for any movie by title

 2.) Watch the trailer instantly (first YouTube result)

 3.) Save your favorite movies

 4.) View your favorites anytime

 5.) Fast performance powered by Vite

 6.) Responsive design for desktop and mobile

# Built With

 1.) React

 2.) Vite

 3.) OMDb API

 4.) CSS

 5.) YouTube search links for trailers

 # Installation

  1.) Clone the repository:
  
  2.) Install dependencies:
  
  npm install
  
  3.) Create a .env file and add your OMDb API key:
  
  VITE_OMDB_API_KEY=your_api_key_here
  
  4.) Start the development server:
  
  npm run dev

# Environment Variables

1.) Your .env file should contain:

VITE_OMDB_API_KEY=your_api_key_here

 Keep this file private — do NOT upload it to GitHub.

# How It Works

1.)Search for a movie title.

2.) The app fetches movie details from OMDb API.

3.) It searches YouTube for the movie trailer and shows the first result.

4.) Click the heart button to save it to your Favorites.

5.) Access all saved movies from the Favorites section.

# Author

Made with care by Zahi Najmal

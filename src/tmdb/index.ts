import axios from 'axios';

export const getTrending = async () => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const getDetails = async (movie_id: string) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}&language=en-US`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

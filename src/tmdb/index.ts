import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
export const getTrending = async () => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const getMovie = async (movie_id: string) => {
  try {
    const [details, credits, lists] = await Promise.all([
      axios.get(
        `${BASE_URL}/movie/${movie_id}?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}&language=en-US`
      ),
      axios.get(
        `${BASE_URL}/movie/${movie_id}?credits?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}&language=en-US`
      ),
      axios.get(
        `${BASE_URL}/movie/${movie_id}?lists?api_key=${process.env.CHROMATIC_PROJECT_TOKEN}&language=en-US&page=1`
      ),
    ]);

    console.log(details, credits, lists);
  } catch (error) {
    console.error(error);
  }
};

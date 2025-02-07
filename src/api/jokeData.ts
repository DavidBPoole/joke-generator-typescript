import axios from "axios";

const endpoint = "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart";

// Define the shape of the joke data
export interface Joke {
  setup: string;
  delivery: string;
}

// Function to fetch jokes
const getJoke = async (): Promise<Joke> => {
  const response = await axios.get(endpoint);
  return response.data;
};

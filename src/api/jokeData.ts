import axios from "axios";

const endpoint = "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart";

// Define the shape of the joke data
export interface Joke

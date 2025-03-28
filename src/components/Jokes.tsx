import React from "react";

interface JokesProps {
  joke: { setup: string; punchline: string };
  btnText: string;
}

const Jokes: React.FC<JokesProps> = ({ joke, btnText }) => (
  <div className="text-center mt-4">
    <h1 className="text-primary">{joke.setup}</h1>
    <h1 className="text-secondary">{btnText !== "Get Punchline" ? joke.punchline : ""}</h1>
  </div>
);

export default Jokes;

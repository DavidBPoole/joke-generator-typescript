import React from "react";

interface JokesProps {
  joke: { setup: string; punchline: string };
  btnText: string;
}

const Jokes: React.FC<JokesProps> = ({ joke, btnText }) => (
  <div className="text-center mt-4">
    <h1 className="text-primary">{joke.setup}</h1>
  </div>

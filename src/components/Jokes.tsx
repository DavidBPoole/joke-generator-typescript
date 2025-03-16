import React from "react";

interface JokesProps {
  joke: { setup: string; punchline: string };
  btnText: string;
}

const Jokes: React.FC<JokesProps> = ({ joke, btnText }) => (

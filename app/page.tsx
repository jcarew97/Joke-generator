'use client'
import { use } from "react";
import { useState } from "react";

export default function DadJokeGenerator() {
  const [joke, setJoke] = useState('');


  async function fetchJoke() {
    // setLoading(true);

    const response = await fetch("/api/joke");
    const jokeData = await response.json();

    setJoke(jokeData.joke);
    // setLoading(false);
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4" onClick={fetchJoke}>Random Dad Joke Generator</h1>
      <p className="mt-4 text-xl text-center">{joke}</p>
    </div>
  );
}
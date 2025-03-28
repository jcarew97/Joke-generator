'use client'
import { use } from "react";
import { useState } from "react";

export default function DadJokeGenerator() {
  const [joke, setJoke] = useState('');


  async function fetchJoke() {

    const response = await fetch("/api/joke");
    const jokeData = await response.json();

    setJoke(jokeData.joke);
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Random Joke</h1>
      <button onClick={fetchJoke} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
        Click Here
      </button>
      <p className="mt-4 text-xl text-center">{joke}</p>
    </div>
  );
}
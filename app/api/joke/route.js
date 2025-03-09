export async function GET() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  const data = await response.json();
  return Response.json({ joke: data.joke }); // Single-line jokes
}
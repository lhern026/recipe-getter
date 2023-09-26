async function getData() {
  const mykey = process.env.API_KEY;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/716429/information?apiKey=${mykey}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="object-contain">{JSON.stringify(data)}</h1>
      </div>
    </main>
  );
}

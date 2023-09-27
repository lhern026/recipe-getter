async function getData() {
  // const mykey = process.env.API_KEY;

  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
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
  console.log("hello");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-full border border-white">
        <h1 className="border border-black">{JSON.stringify(data)}</h1>
        <h1></h1>
      </div>
    </main>
  );
}

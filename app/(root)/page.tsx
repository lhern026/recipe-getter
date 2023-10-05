import { UserButton } from "@clerk/nextjs";

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

  return (
    <main>
      <div className="">
        <UserButton afterSignOutUrl="/" />
        <h1 className="border border-black">{JSON.stringify(data)}</h1>
        <UserButton afterSignOutUrl="/" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}

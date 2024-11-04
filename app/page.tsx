import { Suspense } from "react";

async function GetDitto() {
  const dittoJson = await (
    await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  ).json();

  return <div>{JSON.stringify(dittoJson)}</div>;
}

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        {new Date().toISOString()}
        <GetDitto />
      </Suspense>
    </main>
  );
}

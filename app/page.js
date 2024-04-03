import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}></h1>
      <p>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Share</Link>
      </p>
    </main>
  );
}

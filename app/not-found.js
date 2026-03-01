import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Sorry page not found!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

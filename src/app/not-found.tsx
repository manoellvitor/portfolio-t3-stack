import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto mt-10 flex flex-col items-center justify-center gap-6 md:gap-2 lg:flex-row">
      <div className="mx-auto flex flex-col items-center justify-center gap-4 md:items-start">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-9xl font-bold">404</h2>
          <p className="text-4xl">Could not find requested page</p>
          <Link href="/">Return to Home</Link>
        </div>
      </div>
    </section>
  );
}

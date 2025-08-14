import EmailOptIn from "../components/EmailOptIn";

export default function Home() {
  return (
    <section className="px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-zenithRed">Welcome to Z3nith</h1>
      <p className="mt-4 max-w-2xl mx-auto">
        Dive into the soundscape of Z3nith. Get exclusive updates straight to your inbox.
      </p>
      <div className="mt-6 max-w-md mx-auto">
        <EmailOptIn />
      </div>
    </section>
  );
}

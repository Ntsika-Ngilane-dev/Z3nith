import { useState } from "react";
import { saveEmail } from "../firebase";

export default function EmailOptIn() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("Invalid email address");
      return;
    }
    setStatus("Saving...");
    const success = await saveEmail(email);
    setStatus(success ? "Thanks for subscribing!" : "Error saving email");
    if (success) setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="p-2 border rounded text-black"
      />
      <button type="submit" className="bg-red-600 text-white py-2 rounded">
        Subscribe
      </button>
      {status && <p className="text-sm text-gray-300">{status}</p>}
    </form>
  );
}

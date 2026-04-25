import { useState } from "react";

export function CreateBookingForm() {
  const [location, setLocation] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}

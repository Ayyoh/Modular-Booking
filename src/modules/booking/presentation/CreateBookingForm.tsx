import { useState } from "react";

import { createBookingUseCase } from "../application/use-cases";
import { useRouter } from "@tanstack/react-router";

export function CreateBookingForm() {
  const router = useRouter();

  const [location, setLocation] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await createBookingUseCase.execute(location);

    await router.invalidate();

    setLocation("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />

      <button type="submit">Create Booking</button>
    </form>
  );
}

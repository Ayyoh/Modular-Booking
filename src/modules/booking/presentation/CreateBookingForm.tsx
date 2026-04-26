import { useState } from "react";

import { createBookingUseCase } from "../application/use-cases";
import { useRouter } from "@tanstack/react-router";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export function CreateBookingForm() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await createBookingUseCase.execute(location, name);

    await router.invalidate();

    setLocation("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button type="submit">Create Booking</Button>
      </div>
    </form>
  );
}

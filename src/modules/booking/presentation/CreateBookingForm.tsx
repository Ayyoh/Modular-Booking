import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createBookingUseCase } from "../application/use-cases";
import { bookingsQueryKey } from "../services/booking-queries";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useLocationStore } from "../../../shared/stores/location.store";

type CreateBookingVariables = {
  location: string;
  name: string;
};

export function CreateBookingForm() {
  const queryClient = useQueryClient();

  const selectedLocation = useLocationStore((loc) => loc.selectedLocation);

  const [location, setLocation] = useState(selectedLocation);
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: async ({ location, name }: CreateBookingVariables) => {
      return await createBookingUseCase.execute(location, name);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingsQueryKey,
      });
    },
  });

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await mutation.mutateAsync({ location, name });

    setLocation("");
    setName("");
  }

  useEffect(() => {
    setLocation(selectedLocation);
  }, [selectedLocation]);

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

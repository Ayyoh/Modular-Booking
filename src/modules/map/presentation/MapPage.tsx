import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../../components/ui/button";
import { useLocationStore } from "../../../shared/stores/location.store";

const locations = ["Davao", "Manila", "Cebu"];

export function MapPage() {
  const navigate = useNavigate();
  const setSelectedLocation = useLocationStore(
    (loc) => loc.setSelectedLocation,
  );

  function handleLocationClick(location: string) {
    setSelectedLocation(location);

    navigate({
      to: "/booking",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Map</h1>

      <div className="flex flex-row gap-2">
        {locations.map((location) => (
          <Button
            key={location}
            onClick={() => handleLocationClick(location)}
          >
            {location}
          </Button>
        ))}
      </div>
    </div>
  );
}

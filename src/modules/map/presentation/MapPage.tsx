import { useLocationStore } from "../../../shared/stores/location.store";

const locations = ["Davao", "Manila", "Cebu"];

export function MapPage() {
  const setSelectedLocation = useLocationStore((loc) => loc.setSelectedLocation);

  return (
    <div>
      <h1>Map</h1>

      {locations.map((location) => (
        <button key={location} onClick={() => setSelectedLocation(location)}>
          {location}
        </button>
      ))}
    </div>
  );
}

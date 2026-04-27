export class Booking {
  public readonly id: number;
  public readonly location: string;
  public readonly name: string;
  public readonly ownerRole: "driver" | "host";
  public status: "active" | "cancelled";

  constructor(
    id: number,
    location: string,
    name: string,
    ownerRole: "driver" | "host",
    status: "active" | "cancelled",
  ) {
    ((this.id = id),
      (this.location = location),
      (this.status = status),
      (this.name = name),
      (this.ownerRole = ownerRole));
  }

  cancel() {
    if (this.status === "cancelled") {
      throw new Error("Booking is already cancelled");
    }

    this.status = "cancelled";
  }

  ifFieldsAreValid() {
    if (!this.location || !this.name) {
      throw new Error("Location and name are required");
    }
  }
}

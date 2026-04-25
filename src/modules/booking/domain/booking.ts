export class Booking {
  public readonly id: number;
  public readonly location: string;
  public status: "active" | "cancelled";

  constructor(id: number, location: string, status: "active" | "cancelled") {
    ((this.id = id), (this.location = location), (this.status = status));
  }

  cancel() {
    if (this.status === "cancelled") {
      throw new Error("Booking is already cancelled");
    }

    this.status = "cancelled";
  }
}

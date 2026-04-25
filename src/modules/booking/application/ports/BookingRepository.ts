import type { Booking } from "../../domain/booking";

export interface BookingRepository {
  getAll(): Promise<Booking[]>;

  save(booking: Booking): Promise<void>;

  findById(id: number): Promise<Booking | undefined>;
}

import { InMemoryBookingRepository } from "./InMemoryBookingRepository";
import { LocalStorageBookingRepository } from "./LocalStorageBookingRepository";

export const bookingRepository = new LocalStorageBookingRepository();
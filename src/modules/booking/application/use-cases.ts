import { bookingRepository } from "../infrastructure/repository-instance";
import { CancelBooking } from "./CancelBooking";
import { CreateBooking } from "./CreateBooking";

export const createBookingUseCase = new CreateBooking(bookingRepository)

export const cancelBookingUseCase = new CancelBooking(bookingRepository)
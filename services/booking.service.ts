// services/booking.service.ts
import { APIRequestContext } from '@playwright/test';
//Contains reusable methods for Booking CRUD operations 
export class BookingService {
     //Initialize an API request context
  constructor(private request: APIRequestContext) {}
 
  //Returns the ids of all the bookings
  async getAllBookings() {
    return await this.request.get('/booking');
  }

  //Returns a specific booking based upon the booking id 
  async getBookingById(id: number) {
    return await this.request.get(`/booking/${id}`);
  }

  //Creates a new booking
  async createBooking(payload: object) {
    return await this.request.post('/booking', { data: payload  });
  }

 //Updates a current booking
async updateBooking(id: number, payload: object, token: string) {
  return await this.request.put(`/booking/${id}`, {
    headers: {
      Cookie: `token=${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: payload,
  });
}

//Updates a current booking with a partial payload
  async partialUpdateBooking(id: number, payload: object, token: string) {
    return await this.request.patch(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      },
      data: payload
    });
  }

//Deletes a booking from the API. Requires an authorization token to be set in the header or a Basic auth header.
  async deleteBooking(id: number, token: string) {
    return await this.request.delete(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });
  }
}
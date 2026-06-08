import { test, expect } from '../fixtures/api.fixture';

import createBookingPayload from '../test-data/createBookingPayload.json';
import updateBookingPayload from '../test-data/updateBookingPayload.json';
import partialUpdatePayload from '../test-data/partialUpdatePayload.json';

test.describe('Booking API Tests', () => {
  let bookingId: number;
  //services
  test.beforeAll(async ({ bookingService }) => {
    //create resource Booking
    const response = await bookingService.createBooking(createBookingPayload);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;
    console.log(`Created Booking ID: ${bookingId}`);
  });

  test('Get Booking By Id', async ({ bookingService }) => {
    const response = await bookingService.getBookingById(bookingId);
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });

 test('Update Booking', async ({ bookingService, token }) => {
 const response = await bookingService.updateBooking(bookingId, updateBookingPayload, token);
console.log('response type:', typeof response);
console.log('response:', response);         // see what object this is
console.log('has json?', typeof response?.json);
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  // Assert all fields, not just one
  expect(responseBody).toMatchObject(updateBookingPayload);
});

  test('Partial Update Booking', async ({ bookingService, token }) => {
    const response = await bookingService.partialUpdateBooking(
      bookingId, partialUpdatePayload, token);
    expect(response.status()).toBe(200);
    console.log('updated ResponseBody', await response.json());
  });

  test('Delete Booking', async ({ bookingService, token }) => {
    const response = await bookingService.deleteBooking(bookingId, token);
    expect(response.status()).toBe(201);
  });

  test('Get All Bookings', async({ bookingService })=>{
    const response = await bookingService.getAllBookings() ;
    const responseBody=await response.json();
      console.log(responseBody);
  });
});
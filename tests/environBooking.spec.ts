// tests/environBooking.spec.ts
import { test, expect } from '@playwright/test';
import { ENV_CONFIG } from '../src/config/env.config';
import { getBookingTestData } from '../test-data/testData';

test.describe('Booking API - ENV: ' + ENV_CONFIG.env, () => {

  let authToken: string;
  let bookingId: number;
  const bookingData = getBookingTestData();
// Authenticate and obtain the auth token
  test.beforeAll(async ({ request }) => {
    const res = await request.post(`${ENV_CONFIG.apiBaseUrl}/auth`, {
      data: { username: ENV_CONFIG.username, password: ENV_CONFIG.password },
      headers: {  
        'Content-Type': 'application/json',
      },
    })
    const body = await res.json();
    console.log("Auth response body:", body);
    authToken = body.token;
    console.log("Auth token obtained:", authToken);
    console.log(`[${ENV_CONFIG.env.toUpperCase()}] Auth token obtained`);
  });
// Create a booking with the test data
  test('Create booking with env test data', async ({ request }) => {
    const res = await request.post(`${ENV_CONFIG.apiBaseUrl}/booking`, {
      data: bookingData,
      headers: {
       
        'Content-Type': 'application/json',
      },
    });    
    
    expect(res.status()).toBe(200);
    const body = await res.json();
    console.log("Booking created:", body);
    bookingId = body.bookingid;
    expect(body.booking.firstname).toBe(bookingData.firstname);
    expect(body.booking.lastname).toBe(bookingData.lastname);
    console.log(`[${ENV_CONFIG.env.toUpperCase()}] Booking created: ID ${bookingId}`);
  });
});
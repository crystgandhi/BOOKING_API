import { test as base } from '@playwright/test';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';

//Provides shared test dependencies such as services, tokens, and request contexts 
// to test scripts through Playwright fixtures.
type ApiFixtures = {
  authService: AuthService;
  token: string;
  bookingService: BookingService;
};

export const test = base.extend<ApiFixtures>({
  authService: async ({ request }, use) => {
    //instance of Authservice class
    await use(new AuthService(request));
  },

  bookingService: async ({ request }, use) => {
    ////instance of bookingService class
    await use(new BookingService(request));
  },
//Generates or retrieves an authentication token and 
// makes it available to test scripts for authorized API requests
 token: async ({ authService }, use) => {
    const response = await authService.generateToken();
    const responseBody = await response.json();
    await use(responseBody.token);
  }
  
});
export { expect } from '@playwright/test';
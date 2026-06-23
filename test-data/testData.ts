// Test data for booking requests
export interface BookingData {
  firstname:   string;
  lastname:    string;
  email:       string;
  totalprice:  number;
  depositpaid: boolean;
  bookingdates: {
    checkin:  string;
    checkout: string;
  };
  additionalneeds: string;
}
// Function to retrieve booking test data from environment variables
export function getBookingTestData(): BookingData {
  return {
    firstname:    process.env.TEST_FIRSTNAME  || 'Default_John',
    lastname:     process.env.TEST_LASTNAME   || 'Default_Doe',
    email:        process.env.TEST_EMAIL      || 'default@example.com',
    totalprice:   Number(process.env.TEST_TOTALPRICE) || 100,
    depositpaid:  true,
    bookingdates: {
      checkin:  process.env.TEST_CHECKIN  || '2025-01-01',
      checkout: process.env.TEST_CHECKOUT || '2025-01-07',
    },
    additionalneeds: 'Breakfast',
  };
}
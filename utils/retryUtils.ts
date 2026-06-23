import { expect } from '@playwright/test';


//Parse assertion as a parameter
export async function RetryWithAssertions(
  assertionFn: () => Promise<void>
) 
{ await expect(async () => {await assertionFn();}).toPass();}
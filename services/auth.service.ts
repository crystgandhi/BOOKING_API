// services/auth.service.ts
import { APIRequestContext } from '@playwright/test';
import authPayload from '../test-data/authPayload.json';

//For Generating and managing auth tokens
export class AuthService {
  //Initialize an API request context
  constructor(private request: APIRequestContext) {}
  
  async generateToken(){
  return await this.request.post('/auth', { data: authPayload });
}
}
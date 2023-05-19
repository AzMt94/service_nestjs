import { Injectable } from '@nestjs/common';
import { user } from '../moks';

@Injectable()
export class UserService {
  getUsers() {
    return user;
  }
}

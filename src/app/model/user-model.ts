import * as faker from 'faker';

export class UserModel {
  name: string;
  id: number;
  totalrating: number;
  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.id = faker.random.number(10);
    this.totalrating = faker.random.number(1000) + 10;
  }
}

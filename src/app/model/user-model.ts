import * as faker from 'faker';

export class UserModel {
  name: string;
  id: number;
  bio: string;
  totalrating: number;
  avgrating: number;
  password: string;
  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.id = faker.random.number(10);
    this.bio = faker.lorem.paragraph(5 + faker.random.number(5));
    this.totalrating = faker.random.number(1000) + 10;
    this.avgrating = faker.random.number(5);
  }
}

import * as faker from 'faker';

export class UserModel {
  name: string;
  id: number;
  bio: string;
  reviewkarma: number;
  avgrating: number;
  password: string;
  followerCount: number;
  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.id = faker.random.number(10);
    this.bio = faker.lorem.paragraph(5 + faker.random.number(5));
    this.reviewkarma = faker.random.number(1000) + 10;
    this.avgrating = faker.random.number(5);
    this.followerCount = faker.random.number(1000) + 1000;
  }
}

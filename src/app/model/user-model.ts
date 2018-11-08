import * as faker from 'faker';

export class UserModel {
  name: string;
  fname: string;
  lname: string;
  id: number;
  bio: string;
  reviewkarma: number;
  avgrating: number;
  password: string;
  followerCount: number;

  constructor() {
    this.id = faker.random.number(10);
    this.bio = faker.lorem.paragraph(5 + faker.random.number(5));
    this.reviewkarma = faker.random.number(1000) + 10;
    this.avgrating = faker.random.number(5);
    this.followerCount = faker.random.number(1000) + 1000;
    this.fname = faker.name.firstName();
    this.lname = faker.name.lastName();
    this.name = this.fname.slice(faker.random.number(this.fname.length / 2), this.fname.length) + faker.lorem.word();
  }
}

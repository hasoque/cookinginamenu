import { UserModel } from './user-model';

export class ReviewModel {
  id: number;
  name: string;
  reviewtext: string;
  rating: number;
  likes: number;
  date: Date;
  reviewer: UserModel;
  constructor() {

  }
}

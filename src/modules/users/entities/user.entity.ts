export class UserEntity {
  id: number;
  name: string;
  email: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

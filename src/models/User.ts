import { BaseModel } from './baseModel.ts';

type User = BaseModel & {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  active: boolean;
  validated: boolean;
};

export type { User };

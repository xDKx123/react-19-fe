import { BaseModel } from './baseModel.ts';

type Version = BaseModel & {
  version: string;
  previousVersion: string;
  description: string;
};

export type { Version };

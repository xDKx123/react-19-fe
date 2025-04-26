import { BaseModel } from './baseModel.ts';

type Country = BaseModel & {
  name: string;
  phoneCode: string;
  languageCode: string;
  flag: string;
  isoCode: string;
  dateFormat: string;
  currency: string;
  timezone: string;
};

export type { Country };

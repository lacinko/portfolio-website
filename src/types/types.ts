export type Role = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  location: string;
  description: string;
  isCurrent: boolean;
  createdAt: Date;
  updatedAt: Date;
  companyId: string;
  company: Company;
  skills: Skill[];
};

export type Company = {
  id: string;
  name: string;
  location: string;
  website: string;
  logo: string;
  size: string;
  industry: string;
  address: string;
  about: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Skill = {
  id: string;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GenericObject = {
  [key: string]: boolean | string | object | number;
};

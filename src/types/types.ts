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
  type: SkillType;
  createdAt: Date;
  updatedAt: Date;
};

export enum SkillType {
  HARD_SKILL = "HARD_SKILL",
  SOFT_SKILL = "SOFT_SKILL",
}

export type GenericObject = {
  [key: string]: boolean | string | object | number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type Education = {
  id: string;
  title: string;
  type: EducationType;
  startDate: string;
  endDate: string;
  certificate: string | null;
  createdAt: string;
  updatedAt: string;
  establishment: Establishment;
};

export enum EducationType {
  SCHOOL = "SCHOOL",
  COURSE = "COURSE",
}

export type Establishment = {
  id: string;
  name: string;
  location: string;
  website: string;
  createdAt: string;
  updatedAt: string;
};

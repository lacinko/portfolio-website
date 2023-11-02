import axios from "axios";
import {
  Education,
  EducationType,
  Project,
  Role,
  Skill,
  SkillType,
} from "../types/types";

const BASE_URL = import.meta.env.VITE_SERVER_URL as string;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllJobRoles = async (queryString: string = "") => {
  try {
    const response = await apiClient.get<{ roles: Role[] }>(
      `/work/roles?${queryString}`,
    );

    return response.data.roles.map((role) => ({
      ...role,
      startDate: new Date(role.startDate),
      endDate: role.endDate ? new Date(role.endDate) : new Date(),
    }));
  } catch (error) {
    console.log(error);
  }
};

export const getAllHardSkills = async (queryString: string = "") => {
  try {
    const response = await apiClient.get<{ skills: Skill[] }>(
      `/skills?${queryString}`,
    );

    return response.data.skills.filter(
      (skill) => skill.type === SkillType.HARD_SKILL,
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllSoftSkills = async (queryString: string = "") => {
  try {
    const response = await apiClient.get<{ skills: Skill[] }>(
      `/skills?${queryString}`,
    );

    return response.data.skills.filter(
      (skill) => skill.type === SkillType.SOFT_SKILL,
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllProjects = async (queryString: string = "") => {
  try {
    const response = await apiClient.get<{ projects: Project[] }>(
      `/projects?${queryString}`,
    );

    return response.data.projects.sort((a) =>
      a.tags.join("").includes("new") ? 1 : -1,
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllEducation = async (queryString: string = "") => {
  try {
    const response = await apiClient.get<{ educations: Education[] }>(
      `/education?${queryString}`,
    );

    return response.data.educations.sort((a, b) => {
      return a.type === EducationType.SCHOOL
        ? -1
        : 1 || +new Date(a.endDate) - +new Date(b.endDate);
    });
  } catch (error) {
    console.log(error);
  }
};

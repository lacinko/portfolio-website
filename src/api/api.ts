import axios from "axios";
import { Role } from "../types/types";

const BASE_URL = import.meta.env.VITE_SERVER_URL as string;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllJobRoles = async (queryString: string) => {
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

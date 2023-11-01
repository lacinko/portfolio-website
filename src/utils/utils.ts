import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GenericObject } from "../types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertUrlParamsIntoURLString = (queryParams: GenericObject) => {
  return Object.keys(queryParams)
    .map((key) => {
      const value = queryParams[key];
      if (typeof value === "boolean") {
        return `${key}=${value}`;
      } else {
        return `${key}=${encodeURIComponent(JSON.stringify(value))}`;
      }
    })
    .join("&");
};
export const formatDateToMonthYear = (date: Date) => {
  return date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
};

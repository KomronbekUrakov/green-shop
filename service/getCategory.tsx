"use server";
import { PATH_URL } from "./request";

interface CategoryType {
  id: string;
  title: string;
  count: string;
}

export const getCategory = async (): Promise<CategoryType> => {
  
  try {
    const res = await fetch(`http://localhost:3001/categoryies`);
    
    const data = await res.json();
    
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

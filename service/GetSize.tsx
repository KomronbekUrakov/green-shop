"use server";
import { PATH_URL } from "./request";

interface SizeType {
  id: string;
  title: string;
  count: string;
}

export const getSize = async (): Promise<SizeType> => {
  
  try {
    const res = await fetch(`http://localhost:3001/sizes`);
    
    const data = await res.json();
    
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

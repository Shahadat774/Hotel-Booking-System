import type { Request, Response } from "express";

export const GetUser=(req:Request,res:Response)=>{
   res.send('Hello TypeScript');
}
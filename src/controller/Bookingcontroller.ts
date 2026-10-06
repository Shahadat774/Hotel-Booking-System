import type { Request, Response } from "express";
import { PendingBookinglogic } from "../service/booking.logic.js";

export const Creatbookfuntion=async(req:Request,res:Response)=>{
   try{
   const result=await PendingBookinglogic(req.body);
   res.send(result);}
   catch(e){
      res.send(e);
   }
}
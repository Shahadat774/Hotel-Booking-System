import type { Request, Response } from "express";
import { FinalBooking } from "../service/booking.logic.js";
import type{ BookingParams } from "../validation/finalbooking.validate.js";
export const FinalBookingfun=async(req:Request,res:Response)=>{
    const { userid, uuid } = (req as Request & { booking: BookingParams }).booking;
   try{
   const result=await FinalBooking(userid,uuid);
   res.send(result);}
   catch(e){
      res.send(e);
   }
}
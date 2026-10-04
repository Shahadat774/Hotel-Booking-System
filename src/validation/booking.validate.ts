import type { NextFunction, Request, Response } from "express";
import * as z from "zod";

const Booking = z.object({
  userid: z.number(),
  hotelid: z.number(),
  bookingAmount: z.number(),
  status : z.string() 
});
export const Bookingvalidate=async(req:Request,res:Response,next:NextFunction)=>{
  console.log(req.body)
  try{
  req.body=await Booking.parseAsync(req.body)
  next()
  }
  catch(e){
    res.send(e);
  }
}
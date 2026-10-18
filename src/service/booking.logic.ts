import type { Prisma } from "@prisma/client";
import { CreatBooking, Getuuid } from "../repository/create.booking.js";
import Genarateuuid from "../utils/genarate.uuid.js";
import { FinalBook } from "../repository/create.booking.js";
import { prisma } from "../prisma/Client.js";

export async function PendingBookinglogic(inputdata:Prisma.bookingCreateInput){
   const idpkey:string =Genarateuuid()
   const bookresult=await CreatBooking(inputdata)
   return {bookresult,idpkey}
}

export async function FinalBooking(bookingid: number, uuid: string) {
   try {
      return await prisma.$transaction(async (tx) => {
         const idpkey = await Getuuid(bookingid, tx); 
         
         if (idpkey) {
            return "Room Already Booked";
         }

         return await FinalBook(bookingid, uuid, tx);
      });
      
   } catch (error) {
      console.error("Booking transaction failed:", error);
      throw error;
   }
}


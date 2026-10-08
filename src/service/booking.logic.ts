import type { Prisma } from "@prisma/client";
import { CreatBooking } from "../repository/create.booking.js";
import Genarateuuid from "../utils/genarate.uuid.js";
import { FinalBook } from "../repository/create.booking.js";

export function PendingBookinglogic(inputdata:Prisma.bookingCreateInput){
   const idpkey:string =Genarateuuid()
   return (CreatBooking(inputdata),idpkey)
}
export function FinalBooking(bookingid:number,uuid:string){
   
   return FinalBook(bookingid,uuid)
}


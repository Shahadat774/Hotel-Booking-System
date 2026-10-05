import type { Prisma } from "@prisma/client";
import { CreatBooking } from "../repository/create.booking.js";

export function Bookinglogic(inputdata:Prisma.bookingCreateInput){
   
   return CreatBooking(inputdata)
}

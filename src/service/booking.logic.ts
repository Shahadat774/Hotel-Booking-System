import type { Prisma } from "@prisma/client";
import { CreatBooking } from "../repository/create.booking.js";
import type { bookinginput}  from "../utils/genarate.bookinginput.type.js";
export function Bookinglogic(inputdata:Prisma.bookingCreateInput){
   return CreatBooking(inputdata)
}

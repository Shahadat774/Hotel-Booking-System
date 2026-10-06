import type { Prisma } from "@prisma/client";
import { CreatBooking } from "../repository/create.booking.js";
import Genarateuuid from "../utils/genarate.uuid.js";
let idpkey=null
export function PendingBookinglogic(inputdata:Prisma.bookingCreateInput){
   idpkey=Genarateuuid()
   return CreatBooking(inputdata)
}


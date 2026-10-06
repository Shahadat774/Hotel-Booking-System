import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma/Client.js';

export const CreatBooking=async(bookingdata:Prisma.bookingCreateInput)=>{  
const res=await prisma.booking.create({
    data:bookingdata
 })
 return res
}

export const FinalBook=async(bookingid:number,uuid:string )=>{
    const updatebooking = await prisma.booking.update({
  where: {
    id: bookingid, 
  },
  data: {
    status: 'comfirmed',
    uuid : uuid,
  },
});
return updatebooking;
}
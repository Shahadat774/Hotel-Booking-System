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
    status: 'confirmed',
    uuid : uuid,
  },
});
return updatebooking;
}
export const Getuuid=async(bookingid:number)=>{
  const resultuuid= await prisma.booking.findUnique({
  where: {
    id: bookingid,
  },
  select: {
    uuid: true,
  },    
  })
 return resultuuid
}
import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma/Client.js';
import { acquireLock } from '../config/redis.config.js';

export const CreatBooking=async(bookingdata:Prisma.bookingCreateInput)=>{  
  const hotelid = bookingdata.hotelid as number;
  const lockKey = `lock:booking:hotel:${hotelid}`;

  const release = await acquireLock(lockKey, 500000);
  if (!release) {
    throw new Error('This hotel is being booked by someone else, please try again');
  }

  try {
    return await prisma.booking.create({ data: bookingdata });
  } finally {
    await release();
  }
}

export const FinalBook=async(bookingid:number,uuid:string,tx:any )=>{
    const updatebooking = await tx.booking.update({
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
export const Getuuid=async(bookingid:number,tx:any)=>{
  const results = await tx.$queryRaw<any[]>`
    SELECT uuid FROM "Booking" 
    WHERE id = ${bookingid} 
    FOR UPDATE
  `;

  const resultuuid = results[0];
  console.log(resultuuid)
 return resultuuid ? resultuuid.uuid : null;
}
import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma/Client.js';
import { redlock } from '../config/redis.config.js';

export const CreatBooking=async(bookingdata:Prisma.bookingCreateInput)=>{  
  const resource = `lock:booking:${bookingdata.hotelid}`;
  const ttl = 5000; 

  let lock;
  try {
    lock = await redlock.acquire([resource], ttl);
    
    const res = await prisma.booking.create({
      data: bookingdata,
    });
    return res;
  } catch (error) {
    throw error;
  } finally {
    if (lock) {
      await lock.unlock();
    }
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
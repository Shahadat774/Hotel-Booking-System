import type { Prisma } from '@prisma/client';
import { prisma } from '../prisma/Client.js';
export const CreatBooking=async(bookingdata:Prisma.bookingCreateInput)=>{
const res=prisma.booking.create({
    data:bookingdata
 })
 return res
}
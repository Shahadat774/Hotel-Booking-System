import express from 'express';
import { Creatbookfuntion } from '../controller/Bookingcontroller.js';
import { Bookingvalidate } from '../validation/booking.validate.js';
import { FinalBookingValidate } from '../validation/finalbooking.validate.js';
import { FinalBookingfun } from '../controller/Finalbooking.controller.js';
const route=express.Router()
route.post('/',Bookingvalidate, Creatbookfuntion)
route.put('/:userid/:uuid',FinalBookingValidate,FinalBookingfun)
export default route
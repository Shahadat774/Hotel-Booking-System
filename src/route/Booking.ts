import express from 'express';
import { Creatbookfuntion } from '../controller/Bookingcontroller.js';
import { Bookingvalidate } from '../validation/booking.validate.js';
const route=express.Router()
route.post('/',Bookingvalidate, Creatbookfuntion)
export default route
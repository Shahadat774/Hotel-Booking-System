import express from 'express';
import { GetUser } from '../controller/usercontroller.js';
const route=express.Router()
route.get('/',GetUser)
export default route
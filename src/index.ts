import express from 'express';
import { Configserver } from './config/maincon.js';
import route from './route/user.js';
import { prisma } from './prisma/Client.js';
const app = express();
const port: number = Configserver.PORT;
app.use('/',route)
const r=await prisma.booking.findMany();
console.log(r);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
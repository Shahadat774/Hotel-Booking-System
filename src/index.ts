import express from 'express';
import { Configserver } from './config/maincon.js';
import route from './route/user.js';
const app = express();
const port: number = Configserver.PORT;
app.use('/',route)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
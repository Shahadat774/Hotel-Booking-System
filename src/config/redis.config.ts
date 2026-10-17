import  Redis  from 'ioredis';   // ← Changed to named import
import Redlock from 'redlock';
import 'dotenv/config'

const redisClient = new Redis({
  host: '127.0.0.1',
  port: 6379,
});

export const redlock = new Redlock([redisClient], {
  driftFactor: 0.01,
  retryCount: 3,
  retryDelay: 200,
  retryJitter: 100,
});
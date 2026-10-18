import  { Redis } from "ioredis";



const redis = new Redis({
  host: '127.0.0.1',
  port: 6379,
});

export async function acquireLock( key: string, ttlMs: number = 500000,): Promise<(() => Promise<void>) | null> {
  const token = crypto.randomUUID();
  const ok = await redis.set(key, token, 'PX', ttlMs, 'NX');
  
  console.log(`[Lock] SET ${key} token=${token} ttl=${ttlMs} -> result: ${ok}`);
  if (ok !== 'OK') return null;

  // Lua script: only delete if we still own the lock
  const releaseScript = `
    if redis.call("GET", KEYS[1]) == ARGV[1] then
      return redis.call("DEL", KEYS[1])
    else
      return 0
    end
  `;

  return async () => {
    await redis.eval(releaseScript, 1, key, token);
  };
}
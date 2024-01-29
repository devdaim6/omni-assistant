import { Redis } from "ioredis";

export const redisClient = new Redis(process.env.REDIS_DB_URL as string);

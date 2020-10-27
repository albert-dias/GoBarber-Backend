import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';
import { Joi } from 'celebrate';
import ICacheProvider from '../models/ICacheProvider';

export default class RedisCaheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  public async recover(key: string): Promise<string | null> {
    const data = await this.client.get(key);

    return data;
  }

  public async invalidade(key: string): Promise<void> {}
}

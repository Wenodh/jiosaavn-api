import process from 'node:process'
import { createClient } from '@vercel/kv'

let kv: ReturnType<typeof createClient> | null = null

export const useCache = async <T>(key: string, fetcher: () => Promise<T>, ttl: number): Promise<T> => {
  // Disable cache if environment variables are missing
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return await fetcher()
  }

  try {
    if (!kv) {
      kv = createClient({
        url: process.env.KV_REST_API_URL,
        token: process.env.KV_REST_API_TOKEN
      })
    }

    const cachedData = await kv.get<T>(key)

    if (cachedData) {
      console.info(`[CACHE] HIT: ${key}`)
      return cachedData
    }

    console.info(`[CACHE] MISS: ${key}`)
    const freshData = await fetcher()

    if (freshData) {
      await kv.set(key, freshData, { ex: ttl })
    }

    return freshData
  } catch (error) {
    console.error(`[CACHE] ERROR: ${error}`)
    // Fallback to fetcher if cache fails
    return fetcher()
  }
}

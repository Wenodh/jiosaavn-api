export const CacheTTL = {
  songs: 60 * 60 * 24, // 24 hours
  albums: 60 * 60 * 24, // 24 hours
  playlists: 60 * 60, // 1 hour
  search: 60 * 10, // 10 minutes
  trending: 60 * 5 // 5 minutes
} as const

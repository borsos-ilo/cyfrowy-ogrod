import { purgePaths } from '@wpengine/edge-cache';

export default async function handler(req, res) {
  // Sprawdź, czy żądanie jest typu POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Podstawowa autoryzacja (opcjonalnie, ale zalecane)
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.CACHE_PURGE_TOKEN}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Pobierz ścieżki z body żądania
  const { paths } = req.body;

  // Sprawdź, czy paths jest tablicą i czy nie jest pusta
  if (!Array.isArray(paths) || paths.length === 0) {
    return res.status(400).json({ message: 'Invalid or empty paths array' });
  }

  try {
    // Wykonaj czyszczenie cache
    await purgePaths(paths);

    // Zwróć sukces
    res.status(200).json({ 
      message: 'Cache purged successfully', 
      purgedPaths: paths 
    });
  } catch (error) {
    console.error('Cache purge error:', error);
    res.status(500).json({ 
      message: 'Failed to purge cache', 
      error: error.message 
    });
  }
}
import { purgePaths } from '@wpengine/edge-cache';

export default async function handler(req, res) {
  // Verify if POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Auth
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.CACHE_PURGE_TOKEN}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Get paths from request body
  const { paths } = req.body;

  // Check paths content
  if (!Array.isArray(paths) || paths.length === 0) {
    return res.status(400).json({ message: 'Invalid or empty paths array' });
  }

  try {
    // Cache purhe
    await purgePaths(paths);

    // Return success
    res.status(200).json({ 
      message: 'Cache purged successfully', 
      purgedPaths: paths 
    });
    // Return error
  } catch (error) {
    console.error('Cache purge error:', error);
    res.status(500).json({ 
      message: 'Failed to purge cache', 
      error: error.message 
    });
  }
}
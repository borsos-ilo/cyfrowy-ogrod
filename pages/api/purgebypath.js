import { purgePaths } from '@wpengine/edge-cache';

export default async function handler(req, res) { 
    try {
        const paths = ['new-page']
        await purgePaths(paths)
      } catch (error) {
        console.error(error)
      }
  }
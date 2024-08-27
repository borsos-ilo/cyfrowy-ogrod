import { purgePaths } from '@wpengine/edge-cache';

try {
  const paths = ['new-page']
  await purgePaths(paths)
} catch (error) {
  console.error(error)
}
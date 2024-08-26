export default async function handler(req, res) {
    // Sprawdź, czy token jest prawidłowy
    if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    // Pobierz path ze query parametrów
    const path = req.query.path;
  
    // Sprawdź, czy path został podany
    if (!path) {
      return res.status(400).json({ message: 'Path parameter is required' });
    }
  
    try {
      // Rewaliduj podany path
      await res.revalidate(path);
      return res.json({ revalidated: true, path: path });
    } catch (err) {
      // W przypadku błędu, zwróć informację o błędzie
      return res.status(500).json({ message: `Error revalidating ${path}`, error: err.message });
    }
  }
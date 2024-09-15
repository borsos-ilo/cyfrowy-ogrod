export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email } = req.body;
  
      // Wysyłanie żądania do WordPress API
      try {
        const wpResponse = await fetch('https://borsosilona.wpenginepowered.com/wp-json/flycards/v1/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (wpResponse.ok) {
          res.status(200).json({ message: 'Saved properly' });
        } else {
          const error = await wpResponse.json();
          res.status(wpResponse.status).json({ message: error.message || 'Error saving email' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Communication error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
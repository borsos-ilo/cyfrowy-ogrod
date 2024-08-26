export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Wysyłanie żądania do WordPress API
    try {
      const wpResponse = await fetch('https://borsosilona.wpenginepowered.com/wp-json/newsletter/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (wpResponse.ok) {
        res.status(200).json({ message: 'Zapisano pomyślnie' });
      } else {
        const error = await wpResponse.json();
        res.status(wpResponse.status).json({ message: error.message || 'Błąd zapisu do WordPress' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Wystąpił błąd podczas komunikacji z WordPress' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const apiKey = process.env.google_places_api_key || process.env.GOOGLE_PLACES_API_KEY;
    const placeId = 'ChIJZ4pSvKHZcg0R--thLDQs4PA';

    if (!apiKey) {
      return res.status(500).json({ error: 'Missing API Key' });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=es&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK' || !data.result?.reviews) {
      return res.status(502).json({ error: 'Failed to fetch reviews from Google', details: data });
    }

    const reviews = data.result.reviews
      .filter((r: any) => r.rating >= 4)
      .map((r: any) => ({
        author_name: r.author_name,
        text: r.text,
        rating: r.rating,
        profile_photo_url: r.profile_photo_url,
        time: r.time,
      }));

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200');
    return res.status(200).json(reviews);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  try {
    const apiKey = process.env.google_places_api_key || process.env.GOOGLE_PLACES_API_KEY;
    const placeId = 'ChIJZ4pSvKHZcg0R--thLDQs4PA'; // Provided by user

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing API Key' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=es&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK' || !data.result.reviews) {
      return new Response(JSON.stringify({ error: 'Failed to fetch reviews from Google', details: data }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const reviews = data.result.reviews
      .filter((r: any) => r.rating >= 4) // Only keep 4 and 5 stars
      .map((r: any) => ({
        author_name: r.author_name,
        text: r.text,
        rating: r.rating,
        profile_photo_url: r.profile_photo_url,
        time: r.time,
      }));

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=86400, stale-while-revalidate=43200', // Cache for 24 hours
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

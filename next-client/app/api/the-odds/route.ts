export async function GET() {
  const apiKey = `${process.env.NEXT_PUBLIC_THE_ODDS_API_KEY}`;
  const res = await fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores?apiKey=${apiKey}`);
  const data = await res.json();
  return Response.json({ data });
}
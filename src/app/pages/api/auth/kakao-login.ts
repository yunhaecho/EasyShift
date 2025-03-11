import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ message: 'Authorization code is required' });
  }

  try {
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_CLIENT_ID!,
        redirect_uri: process.env.KAKAO_REDIRECT_URI!,
        client_secret: process.env.KAKAO_CLIENT_SECRET!,
        code,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res
        .status(400)
        .json({ message: 'Failed to get access token', error: data });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}

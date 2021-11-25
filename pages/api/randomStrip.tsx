// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { fetcher } from "../../utils/httpClient";
import { Data } from "../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const randomizedNumber = getRandomNumber();
    const strip = await fetcher(
      `https://xkcd.com/${randomizedNumber}/info.0.json`
    );

    res.status(200).json({ strip, current: randomizedNumber } as Data);
  } catch (error) {
    res.status(500);
  }
};

export default handler;

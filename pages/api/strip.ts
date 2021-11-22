// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { fetcher } from "../../utils/httpClient";
import { Strip } from "../../types";

type Data = {
  current: number;
  strip: Strip;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const specificId = parseInt(req.query.specificId as string);
  let data = { current: specificId, strip: {} as Strip };
  if (specificId) {
    data.strip = await fetcher(`https://xkcd.com/${specificId}/info.0.json`);
  } else {
    const randomizedNumber = getRandomNumber();
    data.strip = await fetcher(
      `https://xkcd.com/${randomizedNumber}/info.0.json`
    );
    data.current = randomizedNumber;
  }

  res.status(200).json(data);
};

export default handler;

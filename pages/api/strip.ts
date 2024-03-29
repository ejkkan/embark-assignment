// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "../../utils/httpClient";
import { Data } from "../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const specificId = parseInt(req.query.specificId as string);
    let data = { current: specificId, strip: {} } as Data;
    if (specificId) {
      data.strip = await fetcher(`https://xkcd.com/${specificId}/info.0.json`);
      return res.status(200).json(data);
    } else {
      return res.status(400);
    }
  } catch (err) {
    res.status(500);
  }
};

export default handler;

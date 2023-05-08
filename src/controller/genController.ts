import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const genImage = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await openai.createImage({
    prompt,
    n: 1,
    size: '256x256',
  });

  res.send(response.data.data[0].url);
};

import { Request, Response } from 'express';

// import { Configuration, OpenAIApi } from 'openai';
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

export const genImage = async (req: Request, res: Response) => {
  const { prompt, size } = req.body;
  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
  try {
    // const response = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: imageSize,
    //   response_format: 'b64_json',
    // });
    // const image = res.send(response.data.data[0].url);
    // res.send(response.data.data[0].b64_json);
    // res.status(200).json({ photo: image });
    res.status(200).json({
      success: true,
      data: { prompt, imageSize },
    });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

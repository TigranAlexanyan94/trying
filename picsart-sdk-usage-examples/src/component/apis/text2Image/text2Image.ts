import PicsartForDevelopers, { Text2ImageRequest } from 'picsart-sdk';

export const text2Image = async (item: any): Promise<any> => {
  console.log(item.image);

  const imageApi = PicsartForDevelopers.getGenaiApi(item.XPicsartAPIKey);
  let result = await imageApi.text2Image(
    new Text2ImageRequest().setPrompt('Cat and dog').setNegativePrompt('grass').setCount(1)
  );

  return result.images[0];
};

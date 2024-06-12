import PicsartForDevelopers, { ImageApi, UpscaleEnhanceRequest  } from 'picsart-sdk';

export const ultraEnhance  = async (item: any): Promise<object> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi('');
  const result = await imageApi.upscaleEnhance(
    new UpscaleEnhanceRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).setUpscaleFactor(2)
  );

  return result.image;

}



import PicsartForDevelopers, { ImageApi, UpscaleFactor, UpscaleUltraRequest } from 'picsart-sdk';

export const upscaleUltra = async (item: any): Promise<any> => {
  console.log(item.image);
  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  
  if (item.imageUrl) {
    result = await imageApi.upscaleUltra(
      new UpscaleUltraRequest().setImage(
        ImageApi.newImageUrl(item.imageUrl)
      ).setUpscaleFactor(UpscaleFactor.R1024x1024)
    );
  } else {
    result = await imageApi.upscaleUltra(
      new UpscaleUltraRequest().setImage(
        ImageApi.newImageBinary(item.image)
      ).setUpscaleFactor(UpscaleFactor.R1024x1024)
    );
  }

  return result.image;
};

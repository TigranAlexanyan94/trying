import PicsartForDevelopers, { ImageApi, UpscaleFactor, UpscaleRequest } from 'picsart-sdk';


export const upscale =  async (item: any) : Promise<any> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.upscale(
    new UpscaleRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).setUpscaleFactor(UpscaleFactor.R800x800)
  );

  return result.image;
}
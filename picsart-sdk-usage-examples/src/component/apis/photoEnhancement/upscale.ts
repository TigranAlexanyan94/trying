import PicsartForDevelopers, { ImageApi, UpscaleFactor, UpscaleRequest } from 'picsart-sdk';


export const upscale = async (item: any): Promise<any> => {
  console.log(item.image);

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if (item.imageUrl) {
    result = await imageApi.upscale(
      new UpscaleRequest().setImage(
        ImageApi.newImageUrl(item.imageUrl)
      ).setUpscaleFactor(UpscaleFactor.R800x800)
    );
  } else {
    result = await imageApi.upscale(
      new UpscaleRequest().setImage(
        ImageApi.newImageBinary(item.image)
      ).setUpscaleFactor(UpscaleFactor.R800x800)
    );
  }


  return result.image;
};
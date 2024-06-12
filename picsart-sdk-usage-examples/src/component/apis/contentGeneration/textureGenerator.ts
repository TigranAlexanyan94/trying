import PicsartForDevelopers, { ImageApi, BackgroundTextureRequest } from 'picsart-sdk';

export const textureGenerator =  async (item: any): Promise<object> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.backgroundTexture(
    new BackgroundTextureRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).setHeight(1024)
  );

  return result.image;
}

import PicsartForDevelopers, { ImageApi, BackgroundTextureRequest } from 'picsart-sdk';

export const textureGenerator =  async (item: any): Promise<object> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;

  if(item.imageUrl){
    result = await imageApi.backgroundTexture(
    new BackgroundTextureRequest().setImage(
      ImageApi.newImageUrl(item.imageUrl)
    ).setHeight(1024)
    );
  } else {
    result = await imageApi.backgroundTexture(
      new BackgroundTextureRequest().setImage(
        ImageApi.newImageBinary(item.image)
      ).setHeight(1024)
    );
  }
  
  return result.image;
}

import PicsartForDevelopers, { ImageApi, EnhanceFaceRequest, ImageFormat  } from 'picsart-sdk';

export const faceEnhancement  = async (item: any): Promise<object> => {
  console.log(item.image)
  // return Promise.resolve(item)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.enhanceFace(
    new EnhanceFaceRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).setFormat(ImageFormat.JPEG)
  );

  return result.image;

}

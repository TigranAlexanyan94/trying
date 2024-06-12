import PicsartForDevelopers, { ImageApi, EnhanceFaceRequest, ImageFormat } from 'picsart-sdk';

export const faceEnhancement = async (item: any): Promise<object> => {
  console.log(item.image);

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if (item.imageUrl) {
    result = await imageApi.enhanceFace(
      new EnhanceFaceRequest().setImage(
        ImageApi.newImageUrl(item.imageUrl)
      ).setFormat(ImageFormat.JPEG)
    );
  } else {
    result = await imageApi.enhanceFace(
      new EnhanceFaceRequest().setImage(
        ImageApi.newImageBinary(item.image)
      ).setFormat(ImageFormat.JPEG)
    );
  }

  return result.image;
};

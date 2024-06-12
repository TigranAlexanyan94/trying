import PicsartForDevelopers, { ImageApi, UploadRequest } from 'picsart-sdk';

export const upload = async (item: any): Promise<any> => {
  console.log(item.image);
  // return Promise.resolve(item)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if (item.imageUrl) {
    result = await imageApi.upload(
      new UploadRequest().setImage(
        ImageApi.newImageUrl(item.imageUrl)
      )
    );
  } else {
    result = await imageApi.upload(
      new UploadRequest().setImage(
        ImageApi.newImageUrl(item.image)
      )
    );
  }

  return result.image;
};

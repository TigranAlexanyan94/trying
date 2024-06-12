import PicsartForDevelopers, { ImageApi, UploadRequest } from 'picsart-sdk';

export const upload =  async (item: any): Promise<any> => {
  console.log(item.image)
  // return Promise.resolve(item)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.upload(
    new UploadRequest().setImage(
      ImageApi.newImageBinary(item.image)
    )
  );

  return result.image;
}

import PicsartForDevelopers, { ImageApi, ImageFormat, SurfacemapRequest } from 'picsart-sdk';

export const surfacemap =  async (item: any): Promise<any> => {
  console.log(item.image)
  // return Promise.resolve(item)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.surfacemap(
    new SurfacemapRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).setFormat(ImageFormat.JPEG)
  );

  console.log(result);

}

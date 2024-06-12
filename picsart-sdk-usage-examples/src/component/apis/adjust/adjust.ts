import PicsartForDevelopers, { ImageApi, AdjustRequest } from 'picsart-sdk';

export const adjust = async (item: any): Promise<any> => {
  console.log(item)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if(item.imageUrl){
    result = await imageApi.adjust(
    new AdjustRequest().setImage(
      ImageApi.newImageUrl(item.image)
    ).setBrightness(50)
  );
  } else {
    result = await imageApi.adjust(
      new AdjustRequest().setImage(
        ImageApi.newImageBinary(item.image)
      ).setBrightness(50)
    );
  }
 
  return result.image;
}

// import PicsartForDevelopers, { ImageApi, Ma } from 'picsart-sdk';
// import { XPicsartAPIKey } from '../../../constants/header';

export const masks = async (item: any): Promise<any> => {
  console.log(item.image)
  return Promise.resolve(1)
  // const imageApi = PicsartForDevelopers.getImageApi(XPicsartAPIKey);
  // const result = await imageApi.masks(
  //   new MasksRequest().setImage(
  //     ImageApi.newImageBinary(item.image)
  //   ).effectNames('apr1')
  // );

  // return result.image;

}



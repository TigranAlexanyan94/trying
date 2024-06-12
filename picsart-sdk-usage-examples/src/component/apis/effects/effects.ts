// import PicsartForDevelopers, { ImageApi, EffectRequest } from 'picsart-sdk';
// import { XPicsartAPIKey } from '../../../constants/header';

export const getEffects =  async (item: any): Promise<object> => {
  console.log(item.image)
  return Promise.resolve(item)

  // const imageApi = PicsartForDevelopers.getImageApi(XPicsartAPIKey);
  // const result = await imageApi.effect(
  //   new EffectRequest().setImage(
  //     ImageApi.newImageBinary(item.image)
  //   ).effectName('apr1')
  // );

  // return result.image;
}

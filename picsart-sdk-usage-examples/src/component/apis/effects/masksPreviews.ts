// import PicsartForDevelopers, { ImageApi,  } from 'picsart-sdk';
// import { XPicsartAPIKey } from '../../../constants/header';

export const masksPreviews  = async (item:any): Promise<any> => {
  console.log(item.title)
  return Promise.resolve(1)
  
  // const imageApi = PicsartForDevelopers.getImageApi(XPicsartAPIKey);
  // const result = await imageApi.(
  //   new Mas().setImage(
  //     ImageApi.newImageBinary(item.image)
  //   ).setFormat('PNG')
  // );

  // return result.image;
}

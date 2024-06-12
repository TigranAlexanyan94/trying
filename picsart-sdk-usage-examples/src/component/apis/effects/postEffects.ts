import PicsartForDevelopers, { ImageApi, EffectRequest, EffectName } from 'picsart-sdk';
 
 export const postEffects = async (item: any): Promise<object> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if(item.imageUrl){
     result = await imageApi.effect(
        new EffectRequest().setImage(
        ImageApi.newImageUrl(item.imageUrl)
    ).setEffectName(EffectName.apr1));
  } else {
    result = await imageApi.effect(
      new EffectRequest().setImage(
      ImageApi.newImageBinary(item.image)
  ).setEffectName(EffectName.apr1));

  }
 
  return result.image;

}
  


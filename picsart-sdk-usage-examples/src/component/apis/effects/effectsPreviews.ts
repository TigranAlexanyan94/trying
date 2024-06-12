import PicsartForDevelopers, { ImageApi, EffectPreviewsRequest, EffectName } from 'picsart-sdk';

export const effectPreviews = async (item: any): Promise<any> => {
  console.log(item.image)

  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.effectPreviews(
    new EffectPreviewsRequest().setImage(
      ImageApi.newImageBinary(item.image)
    ).addEffect(EffectName.a1972)
  );

  return result.thumbnails[0];
}

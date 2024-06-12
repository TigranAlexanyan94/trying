import PicsartForDevelopers, {ImageApi, RemoveBackgroundRequest} from 'picsart-sdk';


export const changeBackgroundWithColor = async (item: any): Promise<any> => {
  console.log(item);
  console.log(item.image);
  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.removeBackground(
    new RemoveBackgroundRequest().setImage(
      ImageApi.newImageBinary(item.image)
    )
    .setBgColor('red')
  );

  return result.image;
};

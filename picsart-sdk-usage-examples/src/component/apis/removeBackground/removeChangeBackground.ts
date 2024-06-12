import PicsartForDevelopers, {ImageApi, RemoveBackgroundRequest} from 'picsart-sdk';


export const removeChangeBackground = async (item: any): Promise<any> => {
  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  let result;
  if(item.imageUrl){
    result = await imageApi.removeBackground(
      new RemoveBackgroundRequest().setImage(
       ImageApi.newImageUrl(item.imageUrl)
      )
     .setBgColor('red')
    );
  } else {
    result = await imageApi.removeBackground(
      new RemoveBackgroundRequest().setImage(
       ImageApi.newImageBinary(item.image)
      )
     .setBgColor('red')
    );
  }
 
  return result.image;
};

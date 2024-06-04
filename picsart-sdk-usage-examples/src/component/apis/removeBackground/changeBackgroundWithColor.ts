import PicsartForDevelopers, {ImageApi, RemoveBackgroundRequest} from 'picsart-sdk';


export const changeBackgroundWithColor = async (item: any): Promise<any> => {
  console.log(item.title);
  
  const imageApi = PicsartForDevelopers.getImageApi("gnJwJLW5qOlpbNN84ReuAGU5wD3i2aG3");
  const result = await imageApi.removeBackground(
    new RemoveBackgroundRequest().setImage(
      ImageApi.newImageUrl('https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg')
    )
    .setBgColor('red')
  );

  console.log(result.image.url);
};

// import headers from "../../../constants/header";
// import { headers } from "../../../constants/header";
// import { CallbacklParameter } from "../../interfaces/callbackParams";
// import { baseUrl } from "../../constants/urls";
import PicsartForDevelopers, {ImageApi, RemoveBackgroundRequest} from 'picsart-sdk';


export const removeChangeBackground = async (item: any): Promise<any> => {
  const imageApi = PicsartForDevelopers.getImageApi(item.XPicsartAPIKey);
  const result = await imageApi.removeBackground(
    new RemoveBackgroundRequest().setImage(
      ImageApi.newImageBinary(item.image)
    )
    .setBgColor('red')
  );

  return result.image;
};

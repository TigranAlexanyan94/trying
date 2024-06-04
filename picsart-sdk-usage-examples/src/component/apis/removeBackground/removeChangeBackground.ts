// import headers from "../../../constants/header";
import { headers } from "../../../constants/header";
import { CallbacklParameter } from "../../interfaces/callbackParams";
// import { baseUrl } from "../../constants/urls";

export const removeChangeBackground = async (params: CallbacklParameter): Promise<object> => {
  console.log(params)
  const data: object = await fetch('http://httpbin.org/post',
    // `${baseUrl}/removebg`,
    {
      method: "POST",
      headers: new Headers(headers),
      body: JSON.stringify(params),
    }
  );
  return data;
};

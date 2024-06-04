import { CallbacklParameter } from "../../interfaces/callbackParams";

export const changeBackgroundWithLovelyPrints = async (params: CallbacklParameter): Promise<object> => {
  console.log(params);
  return Promise.resolve(params)
};

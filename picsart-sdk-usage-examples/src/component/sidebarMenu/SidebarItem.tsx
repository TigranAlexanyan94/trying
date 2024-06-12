import { useState } from "react";

import { removeChangeBackground } from "../apis/removeBackground/removeChangeBackground";

import { upscale } from "../apis/photoEnhancement/upscale";
import { upscaleUltra } from "../apis/photoEnhancement/upscaleUtra";
import { getUpscaleUltraByTransactionId } from "../apis/photoEnhancement/getUpscaleUtraByTransactionId";
import { ultraEnhance } from "../apis/photoEnhancement/ultraEnhance";
import { faceEnhancement } from "../apis/photoEnhancement/faceEnhance";

import { getEffects } from "../apis/effects/effects";
import { postEffects } from "../apis/effects/postEffects";
import { effectPreviews } from "../apis/effects/effectsPreviews";

import { adjust } from "../apis/adjust/adjust";
import { textureGenerator } from "../apis/contentGeneration/textureGenerator";
import { getBalance } from "../apis/utilities/balance";
import { upload } from "../apis/utilities/upload";


import { surfacemap } from "../apis/aITools/aiTools";
import { getText2Image } from "../apis/text2Image/getText2Image";
import { text2Image } from "../apis/text2Image/text2Image";
import { CallbacklParameter } from "../interfaces/callbackParams";


interface MenuItem {
  title: string;
  handler: (params: CallbacklParameter) => Promise<object>;
}


const menuItems: MenuItem[] = [
  { title:'Remove & Change Background', handler: removeChangeBackground },

  { title:'Upscale', handler: upscale },
  { title:'Upscale Ultra', handler: upscaleUltra },
  { title:'Get upscale ultra by transaction_id', handler: getUpscaleUltraByTransactionId },
  { title:'Ultra Enhance', handler: ultraEnhance },
  { title:'Face Enhancement', handler: faceEnhancement },

  { title:'Effects', handler: getEffects },
  { title:'/effects', handler: postEffects },
  { title:'Effect Previews', handler: effectPreviews },

  { title:'Adjust', handler: adjust },
  { title:'Texture Generator', handler: textureGenerator },
  { title:'Balance', handler: getBalance },
  { title:'/upload', handler: upload },

  { title:'Surfacemap', handler: surfacemap },
  { title:'Text2Image', handler: getText2Image },
  { title:'Text2Image', handler: text2Image },
]

export interface Item {
  title: string;
  childrens: object[];
}

export interface SidebarItemProps {
  item: Item;
  handlerResponseData: (data: any) => void;
  handleSetLoading: (load: boolean) => void;
  image: string;
  XPicsartAPIKey: string;
  imageUrl: string;
}


const SidebarItem = (props: SidebarItemProps): any => {
  const [open, setOpen] = useState(false);

  const handleOptionalAction = async (item: any): Promise<any> => {
    menuItems.map(async (elem: any) => {
      if(elem.title === item.title){
         props.handleSetLoading(true);
        try {
          const data = await elem.handler(props)
          props.handleSetLoading(false);
          props.handlerResponseData(data);
        } catch (err: any) {
          console.log(err)
        }
      }
    })
  };


  if (props.item.title) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {props.item.title}
          </span>
          <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
        </div>

        <div className="sidebar-content">
          {props.item.childrens.map((item: any, index: number) =>
            <span className="sidebar-item plain" key={index} onClick={() => handleOptionalAction(item)}>
              <p>{item.title}</p>
            </span>)
          } 
        </div>
      </div>
    );
  }
};

export default SidebarItem;

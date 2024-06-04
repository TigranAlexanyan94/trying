import { useState } from "react";
import "./Views.css";
import { RotatingLines } from "react-loader-spinner";
import Input from "../input/Input";
import Sidebar from "../sidebarMenu/Sidebar";
import items from "../../data/sidebar.json";


const Views = () => {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageId, setImageId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isloading, setLoading] = useState(false);


  const handleImage = (e: any): void => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlerResponseData = (responseData: any): void => {
    setImageUrl(responseData.url);
    setImageId(responseData.url);
    setApiKey(responseData.url);
  };

  return (
    <div className="Views">
      <div className="container">
        <Sidebar items={items}
          // handlerResponseData={handlerResponseData({})}
          handleSetLoading={setLoading}
        />
        <div className="form">
          <Input type="url" 
            placeholder="Paste Your URL" 
            onChange={handlerResponseData} 
            value={imageUrl} 
            text="Paste Your URL" />
          <Input type="text"
            placeholder="Paste Your Id" 
            onChange={handlerResponseData}
            value={imageId} text="Paste Your Id" /> 
          <Input type="text" 
            placeholder="Paste Your Key" 
            onChange={handlerResponseData} 
            value={apiKey} 
            text="Paste Your Key" />
          <div className="form-input">
            <input type="file" onChange={handleImage} />
          </div>

          {image ? <div> <br />
            {isloading ? <RotatingLines
              strokeColor="rgba(22,22,22,1)"
              strokeWidth="2"
              animationDuration="0.75"
              width="200"
              visible={true}
            /> :  <img src={imageUrl ? imageUrl : image} alt="" width="200" height="200" />}
          </div> : null}
        </div>
      </div>
    </div>
  );
};

export default Views;

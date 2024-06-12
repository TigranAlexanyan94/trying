import { useState } from "react";
import "./Views.css";
import { RotatingLines } from "react-loader-spinner";
import Sidebar from "../sidebarMenu/Sidebar";
import items from "../../data/sidebar.json";


const Views = () => {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [response, setResponse] = useState('');
  const [myImage, setMyImage] = useState('');
  const [isdisabledUrl, setDisabledUrl] = useState(false);

  const [isdisabledFile, setDisabledFile] = useState(false);

  const [isloading, setLoading] = useState(false);
  const [XPicsartAPIKey, setXPicsartAPIKey] = useState('');


  const handleImage = (e: any): void => {
    setDisabledUrl(true);
    console.log(e.target.files);
    setImage(e.target.files[0]);

    setMyImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlerUrl = (e: any): void => {
    setDisabledFile(true);
    console.log(e.target.value);
    setImage(e.target.value);
    setImageUrl(e.target.value)

    setMyImage(e.target.value);
  };

  const handleXPicsartAPIKey = (e: any): void => {
    setXPicsartAPIKey(e.target.value)
  }

  const handlerResponseData = (responseData: any): void => {
    setResponse(responseData.id);
    setImageUrl(responseData.url);
  };

  return (
    <div className="Views">
      <Sidebar items={items}
        image={image}
        imageUrl={imageUrl}
        handlerResponseData={handlerResponseData}
        handleSetLoading={setLoading}
        XPicsartAPIKey={XPicsartAPIKey}
      />
      <div className="container">
        <div style={{ width: "100%", height: "145px", display: "flex", justifyContent: "space-between" }}>
          <div className="form">
            <p style={{ color: "black", margin: "5px" }}>Image Url</p>
            <div className="form-input">
              <input type="text"
                disabled={isdisabledUrl}
                placeholder="Paste Your URL"
                onChange={handlerUrl}
              />
            </div>

            <p style={{ color: "black", margin: "5px" }}>ApI key</p>
            <div className="form-input">
              <input type="text"
                placeholder="Api Key"
                onChange={handleXPicsartAPIKey}
              />
            </div>
            
            <div className="form-input">
              <input disabled={isdisabledFile} type="file" onChange={handleImage} />
            </div>
            {response && imageUrl ? <div style={{ color: "black", margin: "5px" }}>
              <p> Id: {response}</p> Url: {imageUrl}
            </div> : null}
          </div>


          <div style={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {image ? <img src={myImage} alt="" width="100" height="100" /> : null}
          </div>
        </div>

        {isloading ? <RotatingLines
          strokeColor="rgba(22,22,22,1)"
          strokeWidth="2"
          animationDuration="0.75"
          width="200"
          visible={true} /> :
          <div style={{ margin: "5px", marginTop: "60px" }}>
            {response ? <img src={imageUrl} alt="" width="200" height="200" /> : null}</div>}
      </div>
    </div>
  );
};

export default Views;

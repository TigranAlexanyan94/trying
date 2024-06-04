import "./Input.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  text: string;
  onChange: (e: '')=> void;
}

const Input = (props: InputProps) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <div className="form-input">
      <input type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={()=>onChange('')} 
      id="video-url" />
    </div>);
};

export default Input;

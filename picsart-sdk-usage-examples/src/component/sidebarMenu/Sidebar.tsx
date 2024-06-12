import './Sidebar.css';
import SidebarItem from './SidebarItem';

interface Item {
  title: string;
  childrens: object[];
}

interface SidebarProps {
  items: Array<Item>;
  handlerResponseData: (data: any) => void;
  handleSetLoading: (load: boolean) => void;
  image: string;
  XPicsartAPIKey: string;
  imageUrl: string
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      {props.items.map((item: Item, index: number) =>
        <SidebarItem
          key={index}
          item={item}
          handlerResponseData={props.handlerResponseData}
          handleSetLoading={props.handleSetLoading}
          image={props.image}
          imageUrl={props.imageUrl}
          XPicsartAPIKey={props.XPicsartAPIKey}
        />
      )}
    </div>
  );
};


export default Sidebar;

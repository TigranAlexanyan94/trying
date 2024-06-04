import './Sidebar.css';
import SidebarItem from './SidebarItem';

interface Item {
  title: string;
  childrens: object[];
}

interface SidebarProps {
  items: Array<Item>;
  // handlerResponseData: void;
  handleSetLoading: (load: boolean) => void;
}

const Sidebar = ( props: SidebarProps) => {
  return (
    <div className="sidebar">
      {props.items.map((item: Item, index: number) => 
       <SidebarItem
        key={index}
        item={item}
        // handlerResponseData={handlerResponseData}
        handleSetLoading={props.handleSetLoading}
      />
     )}
    </div>
  );
};


export default Sidebar;

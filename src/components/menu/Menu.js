import "./Menu.css";
import "./Lists.css";

import MenuOrderedList from "./MenuOrderedList.js";

const Menu = (props) => {
  const getId = (id) => {
    console.log("3getId:" + id);
  };

  return (
    <nav className="menu">
      <div id="menu__overlay" className="menu__overlay  menu" role="menu">
        <div className="overlay-content">
          <MenuOrderedList
            chapters_info={props.chapters_info}
            onChapterViewId={props.onChapterViewId}
          ></MenuOrderedList>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

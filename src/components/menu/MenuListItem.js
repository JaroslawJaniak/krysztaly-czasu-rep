import React, { useState } from "react";

const MenuListItem = (props) => {
  const [stateChapterViewId, setStateChapterViewId] = useState("s1");

  const clickHandler = () => {
    setStateChapterViewId(props.chapterId);
    props.onChapterViewId(props.chapterId);
  };

  return (
    <li role="menuitem" className="menu__item">
      <button
        id={props.chapterId}
        className="menu__link"
        onClick={clickHandler}
      >
        {props.chapterTitle}
      </button>
      {props.children}
    </li>
  );
};

export default MenuListItem;

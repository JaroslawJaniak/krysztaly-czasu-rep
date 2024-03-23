import MenuUnorderedList from "./MenuUnorderedList.js";

const MenuOrderedList = (props) => {
  return (
    <ol className="menu__ordered-list">
      <MenuUnorderedList
        chapters_info={props.chapters_info}
        onChapterViewId={props.onChapterViewId}
      ></MenuUnorderedList>
    </ol>
  );
};

export default MenuOrderedList;

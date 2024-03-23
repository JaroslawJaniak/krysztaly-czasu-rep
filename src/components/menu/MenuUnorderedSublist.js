import MenuSublistItem from "./MenuSublistItem";

const MenuUnorderedSublist = (props) => {
  return (
    <ul id="ul_section2" className="menu__unordered-list sublist">
      {props.subchaptersInfo.map((subchapter) => (
        <MenuSublistItem
          key={Math.random().toString()}
          subchapterTitle={subchapter.subchapterTitle}
          subchapterHref={subchapter.subchapterAnchor}
        ></MenuSublistItem>
      ))}
    </ul>
  );
};

export default MenuUnorderedSublist;

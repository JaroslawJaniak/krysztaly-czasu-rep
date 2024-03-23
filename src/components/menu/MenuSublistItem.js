const MenuSublistItem = (props) => {
  return (
    <li role="menuitem" className="menu__item">
      <a href={props.subchapterHref} className="menu__link">
        {props.subchapterTitle}
      </a>
    </li>
  );
};

export default MenuSublistItem;

const ListItem = (props) => {
  const classes = "list-item " + props.className;

  return (
    <li role="menuitem" className={classes}>
      {props.children}
    </li>
  );
};

export default ListItem;

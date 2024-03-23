const MenuOpenButton = () => {
  const clickHandler = () => {
    console.log("clicked!");
  };

  return (
    <button
      id="openbtn"
      className="openbtn menu__button__openbtn"
      aria-expanded="true"
      aria-haspopup="true"
      aria-controls="menu-list"
      title="open"
    >
      <span>&#9776;</span>
    </button>
  );
};

export default MenuOpenButton;

const MenuCloseButton = () => {
  const clickHandler = () => {
    console.log("clicked!");
  };

  return (
    <button
      id="closebtn"
      className="closebtn menu__button__closebtn"
      title="close"
    >
      <span>&times;</span>
    </button>
  );
};

export default MenuCloseButton;

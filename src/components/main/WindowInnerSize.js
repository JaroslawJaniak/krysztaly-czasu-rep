const WindowInnerSize = () => {
  return (
    <div className="window__InnerSize">
      <span id="window__InnerWidth" className="window__InnerWidth">
        {window.innerHeight}
      </span>
      <span> x </span>
      <span id="window__InnerHeight" className="window__InnerHeight">
        {window.innerWidth}
      </span>
    </div>
  );
};

export default WindowInnerSize;

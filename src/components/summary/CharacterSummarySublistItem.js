const CharacterSummarySublistItem = (props) => {
  const deafaultView = (
    <div>
      <li class="menu__item character__summary__item">
        {props.summaryText}
        <span>{props.summaryValue}</span>
      </li>
    </div>
  );

  return (
    <div>
      <li class="menu__item character__summary__item">
        <b>{props.summaryText}</b>
        <span>{props.summaryValue}</span>
      </li>
    </div>
  );
};

export default CharacterSummarySublistItem;

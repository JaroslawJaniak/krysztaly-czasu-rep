const CharacterSummaryListItem = (props) => {
  return (
    <li class="menu__item" id={props.chapterId}>
      {props.chapterTitle}
      {props.children}
    </li>
  );
};

export default CharacterSummaryListItem;

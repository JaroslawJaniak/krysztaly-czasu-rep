import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummarySublist = (props) => {
  return (
    <ul class="unordered-list">
      {props.summaryInfo.map((summaryContent) => (
        <CharacterSummarySublistItem
          summaryText={summaryContent.text}
          summaryValue={summaryContent.value}
        ></CharacterSummarySublistItem>
      ))}
    </ul>
  );
};

export default CharacterSummarySublist;

import MenuListItem from "./MenuListItem.js";
import MenuUnorderedSublist from "./MenuUnorderedSublist.js";

const MenuUnorderedList = (props) => {
  return (
    <div>
      <ul className="menu__unordered-list">
        {props.chapters_info.map((chapters) => (
          <MenuListItem
            key={chapters.id}
            chapterId={chapters.id}
            chapterTitle={chapters.title}
            chapterHref={chapters.anchor}
            onChapterViewId={props.onChapterViewId}
          >
            <MenuUnorderedSublist subchaptersInfo={chapters.subchaptersInfo} />
          </MenuListItem>
        ))}
      </ul>
    </div>
  );
};

export default MenuUnorderedList;

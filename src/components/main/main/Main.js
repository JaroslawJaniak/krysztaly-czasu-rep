import React, { useState } from "react";
import Menu from "../../menu/Menu.js";
import Header from "../Header.js";
import Sections from "../Sections.js";

import ChapterContent_I from "../sections/chapters/chaper_I_components/ChapterContent_I.js";
import CharacterSummary from "../../summary/CharacterSummary.js";
import WindowInnerSize from "../WindowInnerSize.js";

//import "./kc_styles.css";
//import "./main.css";

//import "./kc_professions.css";
//import "./kc_checkbox.css";
import "./styles.css";

const Main = () => {
  const [stateChapterViewId, setStateChapterViewId] = useState("s1");

  let tempID;

  const getChapterViewId = (id) => {
    setStateChapterViewId(id);
    tempID = id;
  };

  const main_chapters_info = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#s1",
      subchaptersInfo: [
        {
          subchapterTitle: "subitem...",
          subchapterHref: "",
        },
        {
          subchapterTitle: "subitem...",
          subchapterHref: "",
        },
        {
          subchapterTitle: "subitem...",
          subchapterHref: "",
        },
        {
          subchapterTitle: "subitem...",
          subchapterHref: "",
        },
      ],
      summaryContent: [
        { text: "Płeć: ", value: "—" },
        { text: "Rasa: ", value: "—" },
      ],
      chapterContent: <ChapterContent_I />,
    },
  ];

  return (
    <body>
      <main className="main" role="main">
        <Menu
          chapters_info={main_chapters_info}
          onChapterViewId={getChapterViewId}
        />
        <div className="main__container">
          <Header />
          <div class="main__container__sections">
            <Sections chapters_info chapterViewId={stateChapterViewId} />
          </div>
        </div>
        <CharacterSummary chapters_info={main_chapters_info} />
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;

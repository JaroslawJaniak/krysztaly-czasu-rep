import React, { useState } from "react";
import ChapterContent_I from "./sections/chapters/chaper_I_components/ChapterContent_I";
import imageMap0 from "../../images/map0.jpg";

const Sections = (props) => {
  const [getSex, setGetSex] = useState("a");
  const [getRace, setGetRace] = useState("b");
  const [getPlaceOfBirthState, setGetPlaceOfBirthState] = useState("default");
  
  const main_chapters_info = [
    {
      id: "s1",
      title: "I. WYBÓR RASY I PŁCI",
      anchor: "#s1",
      subchaptersInfo: [],
      summaryContent: ["Płeć: ", "Rasa: "],
      chapterContent: (
        <ChapterContent_I onGetSex={setGetSex} onGetRace={setGetRace} />
      ),
    },
  ];

  let chapterDeafaultView = <div>chapterDeafaultView</div>;

  if (props.chapterViewId === "s1") {
    chapterDeafaultView = (
      <section id={main_chapters_info[0].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[0].title}</h3>
        <div className="content">{main_chapters_info[0].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s2") {
    chapterDeafaultView = (
      <section id={main_chapters_info[1].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[1].title}</h3>
        <div className="content">{main_chapters_info[1].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s3") {
    chapterDeafaultView = (
      <section id={main_chapters_info[2].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[2].title}</h3>
        <div className="content">{main_chapters_info[2].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s4") {
    chapterDeafaultView = (
      <section id={main_chapters_info[3].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[3].title}</h3>
        <div className="content">{main_chapters_info[3].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s5") {
    chapterDeafaultView = (
      <section id={main_chapters_info[4].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[4].title}</h3>
        <div className="content">{main_chapters_info[4].chapterContent}</div>
      </section>
    );
  } else if (props.chapterViewId === "s6") {
    chapterDeafaultView = (
      <section id={main_chapters_info[5].id} className="">
        <br />
        <h3 className="stylized">{main_chapters_info[5].title}</h3>
        <div className="content">{main_chapters_info[5].chapterContent}</div>
      </section>
    );
  }

  return <div>{chapterDeafaultView}</div>;
};
export default Sections;


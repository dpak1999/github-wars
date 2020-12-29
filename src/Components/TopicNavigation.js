import React, { useState, useEffect } from "react";
import { getPopularRepos } from "../utils/api";

const TopicNavigation = (props) => {
  const [clicked, setClicked] = useState("All");

  const topics = ["All", "Javascript", "React", "Vue", "Python", "CSS"];

  const handleClicked = (e) => {
    setClicked(e.target.textContent);
    fetchData(e.target.textContent);
  };
  const fetchData = (text) => {
    props.load(true);
    getPopularRepos(text)
      .then(({ items }) => props.repo(items))
      .then(() => props.load(false));
  };

  useEffect(() => {
    fetchData(clicked);
  }, [clicked]);

  return (
    <ul className="repo-navigation">
      {topics.map((item, index) => {
        return (
          <li
            title={item}
            className={clicked === item ? "clicked" : ""}
            key={index}
            onClick={handleClicked}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default TopicNavigation;

import React, { useCallback, useEffect, useState } from "react";
import NavigationItem from "./NavifationItem/NavigationItem";
import "./Navigation.css";

const contentItems = { introduction: null, about: null, techstack: null, timeline: null, projects: null };

const Navigation = (props) => {
  const [activeItem, setActiveItem] = useState("TOP");


  const handleScroll = useCallback(() => {
    const curPos = window.scrollY + 200;
    let activePart = null;

    for (const item in contentItems) {
      activePart = contentItems[item] <= curPos ? item : activePart;
      // If this condition is true, means looking too far down
      if (item !== activePart) {
        break;
      }
    }
    if (activePart !== activeItem) {
      setActiveItem(activePart);
    }
  },[activeItem]);

  // Find positions to use in active scroll detection
  const getContentItems = useCallback(() => {
    const curScroll = window.scrollY ;

    // Find top positions of every element we want to attach anchors to
    for (const item in contentItems) {
      contentItems[item] =
        document.getElementById(item).getBoundingClientRect().top + curScroll;
    }
    handleScroll();
  },[handleScroll]);


  useEffect(() => {
    getContentItems();
    window.addEventListener("scroll", handleScroll);
  }, [getContentItems, handleScroll]);

  return (
    <nav className="Navigation">
      <NavigationItem
        name="introduction"
        onClick={props.onClick}
        activeElem={activeItem}
        position={contentItems['introduction']}
      >
        Introduction
      </NavigationItem>
      <NavigationItem
        name="about"
        onClick={props.onClick}
        activeElem={activeItem}
        position={contentItems['about']}
      >
        About
      </NavigationItem>
      <NavigationItem
        name="techstack"
        onClick={props.onClick}
        activeElem={activeItem}
        position={contentItems['techstack']}
      >
        Tech Stack
      </NavigationItem>
      <NavigationItem
        name="timeline"
        onClick={props.onClick}
        activeElem={activeItem}
        position={contentItems['timeline']}
      >
        Timeline
      </NavigationItem>
      <NavigationItem
        name="projects"
        onClick={props.onClick}
        activeElem={activeItem}
        position={contentItems['projects']}
      >
        Projects
      </NavigationItem>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { storiesOf } from "@storybook/react";
import CourseModulesStatic from "../components/exercises/01_staticComponent";
import CourseModulesEmbeddedVars from "../components/exercises/02_embeddedVariables";
import CourseModulesWithProps from "../components/exercises/03_props";
import CourseModulesCollections from "../components/exercises/04_iteration";

const name = "BSc (H) Software Systems Practice ";
const modules = [
  {
    name: "Web App Development",
    noLectures: 3,
    noPracticals: 3
  },
  {
    name: "Agile Software Practice",
    noLectures: 3,
    noPracticals: 3
  },
  {
    name: "Enterprise Systems Arch",
    noLectures: 2,
    noPracticals: 3
  },
  {
    name: "Business Analytics",
    noLectures: 2,
    noPracticals: 3
  }
];

storiesOf("Exercises", module)
  .add("01 - static component", () => {
    return <CourseModulesStatic />;
  })
  .add("02 - JSX embedded variables", () => {
    return <CourseModulesEmbeddedVars />;
  })
  .add("03 - component with props", () => {
    const fourModules = [modules[0], modules[1],modules[2],modules[3]];
    return <CourseModulesWithProps modules={fourModules} course={name} />;
  })
  .add("04 - iteration", () => {
    return <CourseModulesCollections modules={modules} course={name} />;
  });

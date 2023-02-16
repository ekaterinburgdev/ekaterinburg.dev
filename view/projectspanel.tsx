import { ProjectsPanel, PROJECT_DEV, Theme } from "ekb";
import React from "react";
import ReactDOM from "react-dom/client";
import "ekb/style.css";

const rootNode = document.getElementById("project-panel");
const root = ReactDOM.createRoot(rootNode);
root.render(
  React.createElement(ProjectsPanel, { activeProjectId: PROJECT_DEV.id, theme: Theme.DARK })
);

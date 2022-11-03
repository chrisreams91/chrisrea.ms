import { Grid } from "grommet";
// import mainLogo from "./images/3dviz.jpg";
// import clock from "./images/Clock.jpg";
import ProjectCard from "./ProjectCard";
import {
  SiPython,
  SiTypescript,
  SiThreedotjs,
  SiReact,
  SiGo,
  SiRaspberrypi,
  SiRust,
} from "react-icons/si";

const projects = [
  {
    title: "3D Audio Visualizer",
    repository: "https://github.com/chrisreams91/3D-AudioVisualizer",
    image: "https://picsum.photos/900/450",
    icons: [SiTypescript, SiReact, SiThreedotjs],
    route: "/Visualizer",
  },
  {
    title: "3D-Printed Servo Clock",
    repository: "https://github.com/chrisreams91/servo-clock",
    image: "https://picsum.photos/900/450",
    icons: [SiPython, SiRaspberrypi],
    route: undefined,
  },
  {
    title: "Audio Player and Visualizer CLI",
    repository: "https://github.com/chrisreams91/audio-player-cli",
    image: "https://picsum.photos/900/450",
    icons: [SiGo],
    route: undefined,
  },
  {
    title: "Developer Dashboard CLI",
    repository: "https://github.com/chrisreams91/terminalDashboard",
    image: "https://picsum.photos/900/450",
    icons: [SiRust],
    route: undefined,
  },
  {
    title: "LED Display",
    repository: "https://github.com/chrisreams91/ledTicker",
    image: "https://picsum.photos/900/450",
    icons: [SiRust, SiRaspberrypi],
    route: undefined,
  },
  {
    title: "This Website",
    repository: "https://github.com/chrisreams91/chrisrea.ms",
    image: "https://picsum.photos/900/450",
    icons: [SiTypescript, SiReact],
    route: undefined,
  },
];

const Projects = () => {
  return (
    <Grid gap="medium" columns={{ count: "fit", size: "medium" }} pad="large">
      {projects.map((value) => (
        <ProjectCard {...value} />
      ))}
    </Grid>
  );
};
export default Projects;

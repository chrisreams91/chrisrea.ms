import { Box, Grid } from "grommet";
import ProjectCard from "./ProjectCard";

import threeDViz from "./images/threeDViz.jpg";
import clockCompressed from "./images/clockCompressed.jpg";
import cliViz from "./images/cliViz.png";
import thisSite from "./images/thisSite.jpg";

import {
  SiPython,
  SiTypescript,
  SiThreedotjs,
  SiReact,
  SiGo,
  SiRaspberrypi,
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";

const projects = [
  {
    title: "3D Audio Visualizer",
    repository: "https://github.com/chrisreams91/3D-AudioVisualizer",
    image: threeDViz,
    icons: [SiTypescript, SiReact, SiThreedotjs],
    route: "/Visualizer",
  },
  {
    title: "3D-Printed Servo Clock",
    repository: "https://github.com/chrisreams91/servo-clock",
    image: clockCompressed,
    icons: [SiPython, SiRaspberrypi],
    route: undefined,
  },
  {
    title: "Audio Visualizer CLI",
    repository: "https://github.com/chrisreams91/audio-player-cli",
    image: cliViz,
    icons: [SiGo, HiOutlineCommandLine],
    route: undefined,
  },
  {
    title: "This Website",
    repository: "https://github.com/chrisreams91/chrisrea.ms",
    image: thisSite,
    icons: [SiTypescript, SiReact],
    route: undefined,
  },
];

const Projects = () => {
  return (
    <Box>
      <Grid gap="medium" columns={{ count: "fit", size: "medium" }} pad="large">
        {projects.map((value, index) => (
          <ProjectCard key={index} {...value} />
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;

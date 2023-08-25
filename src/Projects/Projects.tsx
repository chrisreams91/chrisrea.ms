import { Box, Grid } from "grommet";
import ProjectCard from "./ProjectCard";
import {
  SiPython,
  SiTypescript,
  SiThreedotjs,
  SiReact,
  SiGo,
  SiRaspberrypi,
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";

interface Props {
  images: string[]
}

const Projects = ({images}: Props) => {
  const projects = [
    {
      title: "3D Audio Visualizer",
      repository: "https://github.com/chrisreams91/3D-AudioVisualizer",
      image: images[0],
      icons: [SiTypescript, SiReact, SiThreedotjs],
      route: "/Visualizer",
    },
    {
      title: "3D-Printed Servo Clock",
      repository: "https://github.com/chrisreams91/servo-clock",
      image: images[1],
      icons: [SiPython, SiRaspberrypi],
      route: undefined,
    },
    {
      title: "Audio Visualizer CLI",
      repository: "https://github.com/chrisreams91/audio-player-cli",
      image: images[2],
      icons: [SiGo, HiOutlineCommandLine],
      route: undefined,
    },
    {
      title: "This Website",
      repository: "https://github.com/chrisreams91/chrisrea.ms",
      image: images[3],
      icons: [SiTypescript, SiReact],
      route: undefined,
    },
  ];
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

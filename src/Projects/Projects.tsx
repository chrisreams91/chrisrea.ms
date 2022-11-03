import { Grid } from "grommet";
import mainLogo from "./3dviz.jpg";
// import clock from "./Clock.jpg";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "3D Audio Visualizer",
    repository: "https://github.com/chrisreams91/3D-AudioVisualizer",
    image: mainLogo,
    route: "/Visualizer",
  },
  {
    title: "3D-Printed Servo Clock",
    repository: "https://github.com/chrisreams91/servo-clock",
    image: mainLogo,
    route: undefined,
  },
  {
    title: "Audio Player and Visualizer CLI",
    repository: "https://github.com/chrisreams91/audio-player-cli",
    image: mainLogo,
    route: undefined,
  },
  {
    title: "This Website",
    repository: "https://github.com/chrisreams91/chrisrea.ms",
    image: mainLogo,
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

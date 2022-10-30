import React from "react";
// import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Chart,
  Grid,
  Image,
  Text,
  Anchor,
} from "grommet";
import { Code } from "grommet-icons";

const projects = [
  {
    title: "3D Audio Visualizer",
    message: "An audio spectrum visualizer in a 3D space",
    repository: "https://github.com/chrisreams91/chrisrea.ms",
    route: "/Visualizer",
  },
  {
    title: "3D Audio Visualizer",
    message: "Past 24hrs",
    repository: "bar",
    route: "Visualizer",
  },
  {
    title: "3D Audio Visualizer",
    message: "Past 24hrs",
    repository: "bar",
    route: "Visualizer",
  },
];

const Projects = () => {
  // const navigate = useNavigate();
  return (
    <Grid gap="medium" columns={{ count: "fit", size: "small" }}>
      {projects.map((value) => (
        // <Card key={value.title} onClick={() => navigate(value.route)}>
        <Card key={value.title} onClick={() => null}>
          <CardBody>
            <Image
              fill
              src="//v2.grommet.io/assets/IMG_4245.jpg"
              fit="contain"
            />
          </CardBody>
          <CardFooter pad={{ horizontal: "small" }}>
            <Text size="xsmall">{value.message}</Text>
            <Anchor
              target="_blank"
              a11yTitle="Chat with us on Slack"
              href={value.repository}
              icon={<Code color="brand" size="medium" />}
            />
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
};
export default Projects;

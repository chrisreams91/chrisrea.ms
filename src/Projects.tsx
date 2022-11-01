import {
  // Box,
  Card,
  CardBody,
  CardFooter,
  // Chart,
  Grid,
  Image,
  Text,
  Anchor,
  Spinner,
} from "grommet";
import { Code } from "grommet-icons";
import mainLogo from "./3dviz.jpg";
import styled from "styled-components";

const projects = [
  {
    title: "3D Audio Visualizer",
    message: "An audio spectrum visualizer in a 3D space",
    repository: "https://github.com/chrisreams91",
    route: "/Visualizer",
  },
  {
    title: "3D Audio Visualizer",
    message: "Past 24hrs",
    repository: "https://github.com/chrisreams91",
    route: "https://github.com/chrisreams91",
  },
  {
    title: "3D Audio Visualizer",
    message: "Past 24hrs",
    repository: "https://github.com/chrisreams91",
    route: "https://github.com/chrisreams91",
  },
];

const StyledAnchor = styled(Anchor)`
  &:hover {
    svg {
      width: 32px;
      height: 32px;
    }
    heght: 32px;
  }
`;

const Projects = () => {
  return (
    <Grid gap="medium" columns={{ count: "fit", size: "small" }}>
      {projects.map((value, index) => (
        <Card
          key={index}
          onClick={() => {}}
          hoverIndicator={{ elevation: "large" }}
          focusIndicator={false}
        >
          <CardBody
            onClick={() => window.open(value.route)}
            focusIndicator={false}
          >
            <Image fill src={mainLogo} fit="contain" />
          </CardBody>
          <CardFooter pad={{ horizontal: "small" }} height="xsmall">
            <Text size="small">{value.message}</Text>
            <StyledAnchor
              target="_blank"
              a11yTitle="Link to code"
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

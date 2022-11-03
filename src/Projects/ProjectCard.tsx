import {
  // Box,
  Card,
  CardBody,
  CardFooter,
  // Chart,
  // Grid,
  Image,
  Text,
  Anchor,
  // Spinner,
} from "grommet";
import { Code } from "grommet-icons";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  &:hover {
    svg {
      width: 32px;
      height: 32px;
    }
    heght: 32px;
  }
`;

interface Props {
  title: string;
  repository: string;
  image: any;
  route?: string;
}

const ProjectCard = ({ title, repository, image, route }: Props) => (
  <Card
    key={title}
    onClick={() => {}}
    hoverIndicator={{ elevation: "large" }}
    focusIndicator={false}
  >
    <CardBody
      onClick={() => route && window.open(route)}
      focusIndicator={false}
    >
      <Image fill src={image} fit="contain" />
    </CardBody>
    <CardFooter pad={{ horizontal: "small" }} color="light">
      <Text size="small">{title}</Text>
      <StyledAnchor
        target="_blank"
        a11yTitle="Link to code"
        href={repository}
        icon={<Code color="brand" size="medium" />}
      />
    </CardFooter>
  </Card>
);

export default ProjectCard;

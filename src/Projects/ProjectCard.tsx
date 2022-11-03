import {
  // Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  // Anchor,
  Box,
} from "grommet";
import { IconType } from "react-icons";
import { SiGo } from "react-icons/si";
// import styled from "styled-components";

// const StyledAnchor = styled(Anchor)`
//   &:hover {
//     svg {
//       width: 32px;
//       height: 32px;
//     }
//     heght: 32px;
//   }
// `;

interface Props {
  title: string;
  repository: string;
  image: any;
  icons: IconType[];
  route?: string;
}

const ProjectCard = ({ title, repository, image, icons, route }: Props) => (
  <Card
    key={title}
    onClick={() => window.open(repository)}
    focusIndicator={false}
    hoverIndicator={{ elevation: "large" }}
  >
    <CardBody focusIndicator={false}>
      <Image fill src={image} fit="contain" />
    </CardBody>
    <CardFooter
      pad={{ horizontal: "small" }}
      color="light"
      justify="between"
      height={{ min: "xxsmall" }}
    >
      <Text size="medium" weight={"normal"}>
        {title}
      </Text>
      <Box direction="row">
        {icons.map((Icon) => (
          <Box pad={"xxsmall"}>
            <Icon size={Icon === SiGo ? 40 : 30} color={"#6600cc"} />
          </Box>
        ))}
      </Box>
      {/* <StyledAnchor
        target="_blank"
        a11yTitle="Link to code"
        href={repository}
        icon={<Code color="brand" size="medium" />}
      /> */}
    </CardFooter>
  </Card>
);

export default ProjectCard;

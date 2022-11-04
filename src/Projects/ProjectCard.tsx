import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  ThemeContext,
  Box,
  ThemeType,
} from "grommet";
import { IconType } from "react-icons";
import { SiGo } from "react-icons/si";

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
      justify="between"
      height={{ min: "xxsmall" }}
    >
      <Text size="medium" weight={"normal"}>
        {title}
      </Text>
      <ThemeContext.Consumer>
        {(theme: ThemeType) => {
          // @ts-ignore
          const isDark = theme?.dark;
          const dark = "#6FFFB0";
          const light = "#7D4CDB";
          return (
            <Box direction="row">
              {icons.map((Icon, index) => (
                <Box pad={"xxsmall"} justify={"center"}>
                  <Icon
                    key={index}
                    size={Icon === SiGo ? 40 : 30}
                    color={isDark ? dark : light}
                  />
                </Box>
              ))}
            </Box>
          );
        }}
      </ThemeContext.Consumer>
    </CardFooter>
  </Card>
);

export default ProjectCard;

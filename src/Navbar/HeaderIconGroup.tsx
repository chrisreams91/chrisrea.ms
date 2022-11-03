import { Box, Anchor } from "grommet";
import { Github, Linkedin, Mail, Sun, Moon } from "grommet-icons";

interface Props {
  darkMode: boolean;
  onPressMode: any;
}

const HeaderIconGroup = ({ darkMode, onPressMode }: Props) => (
  <Box direction="row" gap="xxsmall" justify="center">
    {darkMode ? (
      <Anchor
        target="_blank"
        onClick={() => onPressMode(!darkMode)}
        a11yTitle="Mode"
        icon={<Sun color="brand" size="medium" />}
      />
    ) : (
      <Anchor
        target="_blank"
        onClick={() => onPressMode(!darkMode)}
        a11yTitle="Mode"
        icon={<Moon color="brand" size="medium" />}
      />
    )}
    <Anchor
      target="_blank"
      a11yTitle="Email"
      href="mailto:chrisreams91@gmail.com"
      icon={<Mail color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Github"
      href="https://github.com/chrisreams91"
      icon={<Github color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Linkedin"
      href="https://www.linkedin.com/in/chris-reams-044160144/"
      icon={<Linkedin color="brand" size="medium" />}
    />
  </Box>
);

export default HeaderIconGroup;

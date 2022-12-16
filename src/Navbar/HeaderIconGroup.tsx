import { Box, Anchor, ThemeContext, ThemeType } from "grommet";
import { Github, Linkedin, Mail, Sun, Moon } from "grommet-icons";
import { FaDiscord } from "react-icons/fa";
import { getColors } from "../util";
interface Props {
  darkMode: boolean;
  onPressMode: any;
}

const HeaderIconGroup = ({ darkMode, onPressMode }: Props) => (
  <ThemeContext.Consumer>
    {(theme: ThemeType) => {
      const color = getColors(theme, "anchor");
      console.log(color);
      return (
        <Box direction="row" gap="xxsmall" justify="center">
          {darkMode ? (
            <Anchor
              target="_blank"
              onClick={() => {
                localStorage.setItem("darkMode", `${!darkMode}`);
                onPressMode(!darkMode);
              }}
              a11yTitle="Mode"
              icon={<Sun size="medium" />}
            />
          ) : (
            <Anchor
              target="_blank"
              onClick={() => {
                localStorage.setItem("darkMode", `${!darkMode}`);
                onPressMode(!darkMode);
              }}
              a11yTitle="Mode"
              icon={<Moon size="medium" />}
            />
          )}
          <Anchor
            target="_blank"
            a11yTitle="Email"
            href="mailto:chrisreams91@gmail.com"
            icon={<Mail size="medium" />}
          />
          <Anchor
            target="_blank"
            a11yTitle="Github"
            href="https://github.com/chrisreams91"
            icon={<Github size="medium" />}
          />
          <Anchor
            target="_blank"
            a11yTitle="Linkedin"
            href="https://www.linkedin.com/in/chris-reams-044160144/"
            icon={<Linkedin size="medium" />}
          />
          <Anchor
            target="_blank"
            a11yTitle="Discord"
            href="https://discord.com/users/247629482788257795"
            icon={<FaDiscord color={color} size={30} />}
          />
        </Box>
      );
    }}
  </ThemeContext.Consumer>
);

export default HeaderIconGroup;

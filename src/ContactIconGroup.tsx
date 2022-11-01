import { Box, Anchor } from "grommet";
import { Github, Linkedin, Mail } from "grommet-icons";

const ContactIconGroup = () => (
  <Box direction="row" gap="xxsmall" justify="center">
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

export default ContactIconGroup;

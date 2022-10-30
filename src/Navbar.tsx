import { Box, Tab, Tabs, Header, Nav, Anchor } from "grommet";
import { Github, Linkedin, Mail } from "grommet-icons";

const ContactIcons = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      target="_blank"
      a11yTitle="Follow us on Twitter"
      href="https://github.com/chrisreams91"
      icon={<Mail color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Share feedback on Github"
      href="https://github.com/chrisreams91"
      icon={<Github color="brand" size="medium" />}
    />
    <Anchor
      target="_blank"
      a11yTitle="Chat with us on Slack"
      href="https://www.linkedin.com/in/chris-reams-044160144/"
      icon={<Linkedin color="brand" size="medium" />}
    />
  </Box>
);

interface Props {
  tabs: { component: JSX.Element; title: string }[];
  activeTabIndex: number;
  onTabPress: (index: number) => void;
}

const Navbar = ({ tabs, onTabPress, activeTabIndex }: Props) => {
  return (
    <Header hoverIndicator={true}>
      <Box direction="row" align="center" gap="small" justify="between">
        <Tabs
          activeIndex={activeTabIndex}
          onActive={onTabPress}
          justify="start"
        >
          {tabs.map((tab) => (
            <Tab title={tab.title} />
          ))}
        </Tabs>
      </Box>
      <Nav direction="row">
        <ContactIcons />
      </Nav>
    </Header>
  );
};

export default Navbar;

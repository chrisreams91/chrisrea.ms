import { Box, Tab, Tabs, Header, Nav, Anchor } from "grommet";
import ContactIconGroup from "./ContactIconGroup";

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
        <ContactIconGroup />
      </Nav>
    </Header>
  );
};

export default Navbar;

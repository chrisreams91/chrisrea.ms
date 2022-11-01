import { useState } from "react";
import { Grommet } from "grommet";
import { grommet, ThemeType } from "grommet/themes";
import Bio from "./Bio";
import Projects from "./Projects";
import Navbar from "./Navbar";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const tabs = [
    { component: <Bio />, title: "Home" },
    { component: <Projects />, title: "Projects" },
  ];

  const theme: ThemeType = {
    global: {
      focus: {
        shadow: undefined,
      },
    },
    anchor: {
      fontWeight: 600,
      hover: {
        extend: () => `height: '100px'`,
      },
    },
    icon: {
      extend: () => `height: '100px'`,
    },
  };

  return (
    <Grommet theme={theme}>
      <Navbar
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabPress={setActiveTabIndex}
      />
      {tabs[activeTabIndex].component}
    </Grommet>
  );
};

export default App;

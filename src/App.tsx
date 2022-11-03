import { useState } from "react";
import { Grommet } from "grommet";
import { ThemeType } from "grommet/themes";
import Bio from "./Bio/Bio";
import Projects from "./Projects/Projects";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(true);

  const tabs = [
    { component: <Bio />, title: "Home" },
    { component: <Projects />, title: "Projects" },
  ];

  const LightTheme: ThemeType = {
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

  // const DarkTheme: ThemeType = {};

  return (
    <Grommet theme={darkMode ? LightTheme : LightTheme}>
      <Navbar
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabPress={setActiveTabIndex}
        darkMode={darkMode}
        onPressMode={setDarkMode}
      />
      {tabs[activeTabIndex].component}
    </Grommet>
  );
};

export default App;

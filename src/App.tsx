import { useState } from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Bio from "./Bio/Bio";
import Projects from "./Projects/Projects";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { component: <Bio />, title: "Home" },
    { component: <Projects />, title: "Projects" },
  ];

  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
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

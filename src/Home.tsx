import React, { useState } from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Bio from "./Bio";
import Projects from "./Projects";
import Navbar from "./Navbar";

const Home = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const tabs = [
    { component: <Bio />, title: "Home" },
    { component: <Projects />, title: "Projects" },
  ];

  return (
    <Grommet theme={grommet}>
      <Navbar
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabPress={setActiveTabIndex}
      />
      {tabs[activeTabIndex].component}
    </Grommet>
  );
};

export default Home;

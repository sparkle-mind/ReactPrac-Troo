import { useState } from "react";
import tabbingStyle from "../tabbing/tabbing.module.css";
import { TabList } from "./TabList"; // Assuming this is a component for each tab
import { TabContent } from "./TabContent"; // Assuming this is the component to display content

export const Tabbing = () => {
  const [tabValue, setTabValue] = useState("Overview"); // Initial tab is "Overview"

  const handleTabValue = (targetValue) => {
    setTabValue(targetValue);
  };

  return (
    <section className={`${tabbingStyle.tabSection}`}>
      <ul className={`${tabbingStyle.tabList}`}>
        <TabList
          onSelectValue={() => handleTabValue("Overview")}
          isSelect={tabValue == "Overview"}
        >
          Overview
        </TabList>
        <TabList
          onSelectValue={() => handleTabValue("Features")}
          isSelect={tabValue == "Features"}
        >
          Features
        </TabList>
        <TabList
          onSelectValue={() => handleTabValue("Pricing")}
          isSelect={tabValue == "Pricing"}
        >
          Pricing
        </TabList>
        <TabList
          onSelectValue={() => handleTabValue("Contact")}
          isSelect={tabValue == "Contact"}
        >
          Contact
        </TabList>
      </ul>

      {/* Render the content based on the selected tab */}
      <TabContent selectedTab={tabValue} />
    </section>
  );
};

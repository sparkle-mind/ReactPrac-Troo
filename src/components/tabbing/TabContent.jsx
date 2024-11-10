import tabbingStyle from "../tabbing/tabbing.module.css";
import tabData from "../../../public/api/tabData.json"; // Adjust the path to the JSON file

export const TabContent = ({ selectedTab }) => {
  // Find the content for the selected tab
  const tab = tabData.find((item) => item.title === selectedTab);

  return (
    <div className={`${tabbingStyle.tabContent}`}>
      {tab ? (
        <>
          <h3>{tab.title}</h3>
          <p>{tab.description}</p>
          <a href="#" className="">
            {tab.link}
          </a>
        </>
      ) : (
        <p>Loading...</p> // Or show a default message if no tab matches
      )}
    </div>
  );
};

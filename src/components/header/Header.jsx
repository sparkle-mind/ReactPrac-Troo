import headerStyle from "../header/header.module.css";
import searchIcon from "../../../public/images/search.png";
import userProfile from "../../../public/images/user-profile.png";

export const Header = () => {
  const socialImgs = [
    {
      socialImg: "../../../public/images/msg.svg",
    },
    {
      socialImg: "../../../public/images/notification.svg",
    },
  ];
  return (
    <>
      <header>
        <div className={headerStyle["header-row"]}>
          <div className={headerStyle["header-searchBar"]}>
            <label>
              <img src={searchIcon} alt="" />
            </label>
            <input type="search" placeholder="Search (Ctrl+/)" />
          </div>

          <div className={headerStyle["header-social"]}>
            <ul>
              {socialImgs.map((icon, index) => {
                return (
                  <li key={index}>
                    <img src={icon.socialImg} alt="" />
                  </li>
                );
              })}
            </ul>
            <div className={headerStyle["user-profile"]}>
              <img src={userProfile} alt="" />
              <div className={headerStyle["user-detail"]}>
                <h4>samir patel</h4>
                <p>admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

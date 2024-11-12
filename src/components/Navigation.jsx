import { Link } from "react-router-dom";

const style = {
  nav: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    width: "250px",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    borderRadius: "0 15px 15px 0",
  },
  link:{
    
  }
};

const Navigation = () => {
  return (
    <>
      <div>
        <nav style={style.nav}>
          <Link to="/">Dashboard</Link>
          <Link to="map_filter">Map&Filter</Link>
          <Link to="todoList">TodoList</Link>
          <Link to="events">Events</Link>
          <Link to="listParent">list</Link>
          <Link to="useRefs">UseRefs</Link>
          <Link to="scrollExample" className="innerLink"> --> ScrollExample</Link>
          <Link to="login">Login</Link>
          <Link to="tab">Tab</Link>
          <Link to="lifting-state-up">lifting-state-up</Link>
          


        </nav>
      </div>
    </>
  );
};

export default Navigation;

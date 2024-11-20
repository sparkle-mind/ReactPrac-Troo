import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import Events from "./components/events/Events";
import Dashboard from "./components/Dashboard";
import { ListParent } from "./components/list/ListParent";
import { UseRefs } from "./components/useRefs/UseRefs";
import ScrollExample from "./components/useRefs/ScrollExample";
import Card from "./components/map_filter/Card";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Tabbing } from "./components/tabbing/Tabbing";
import { LiftingStateUpParent } from "./components/lifting-state-up/LiftingStateUpParent";
import Slider from "./components/slider/Slider";
import LsuExampleOne from "./components/lifting-state-up/LsuExampleOne";

function App() {
  return (
    <>
      <div className="main-app container">
        <Router>
          <Navigation />
          <Header/>
            <main className="sections">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/map_filter" element={<Card />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/events" element={<Events />}></Route>
            <Route path="/listParent" element={<ListParent />}></Route>
            <Route path="/useRefs" element={<UseRefs />}></Route>
            <Route path="/scrollExample" element={<ScrollExample />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/tab" element={<Tabbing />}></Route>
            <Route path="/lifting-state-up" element={<LiftingStateUpParent/>}></Route>
            <Route path="/LsuExampleOne" element={<LsuExampleOne/>}></Route>
            <Route path="/slider" element={<Slider/>}></Route>

          </Routes>
            </main>
        </Router>
      </div>
    </>
  );
}

export default App;

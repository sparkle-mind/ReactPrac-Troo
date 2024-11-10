import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const taskValue = (e) => {
    setTask(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      console.log(task);
    }
    setTask("");
  };


  const handleClearAll=()=>{
    setTaskList([]);
  }
  return (
    <section className="task-section">
      <div className="task-form">
        <h2>Add your task:</h2>
        <form onSubmit={handleForm}>
          <div className="task-input-row">
            <input
              type="text"
              placeholder="Add your task here"
              onChange={taskValue}
              value={task}
            />
            <button type="submit">Add task</button>
          </div>
        </form>
      </div>

      <div className="task-list">
        <ul>
          {taskList.map((curTask, index) => (
            <li key={index}>
              
              <h5>{curTask}</h5>
              <div className="icns">
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.26 3.59924L5.05 12.2892C4.74 12.6192 4.44 13.2692 4.38 13.7192L4.01 16.9592C3.88 18.1292 4.72 18.9292 5.88 18.7292L9.1 18.1792C9.55 18.0992 10.18 17.7692 10.49 17.4292L18.7 8.73924C20.12 7.23924 20.76 5.52924 18.55 3.43924C16.35 1.36924 14.68 2.09924 13.26 3.59924Z"
                      stroke="#545454"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.89 5.05078C12.32 7.81078 14.56 9.92078 17.34 10.2008"
                      stroke="#545454"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 22H21"
                      stroke="#545454"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 4.98307C14.725 4.70807 11.9333 4.56641 9.15 4.56641C7.5 4.56641 5.85 4.64974 4.2 4.81641L2.5 4.98307"
                      stroke="#545454"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.08331 4.14297L7.26665 3.0513C7.39998 2.25964 7.49998 1.66797 8.90831 1.66797H11.0916C12.5 1.66797 12.6083 2.29297 12.7333 3.05964L12.9166 4.14297"
                      stroke="#545454"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7084 7.61719L15.1667 16.0089C15.075 17.3172 15 18.3339 12.675 18.3339H7.32502C5.00002 18.3339 4.92502 17.3172 4.83335 16.0089L4.29169 7.61719"
                      stroke="#545454"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.60834 13.75H11.3833"
                      stroke="#545454"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.91669 10.418H12.0834"
                      stroke="#545454"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="clearAllBtn" onClick={handleClearAll}>
          clear all
        </button>
      </div>
    </section>
  );
};

export default TodoList;

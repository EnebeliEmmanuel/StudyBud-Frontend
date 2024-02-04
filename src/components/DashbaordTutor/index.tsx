import "./index.css";
import DashboardNavbar from "../../components/DashboardNavbar/";
import { FC, useState, useEffect } from "react";
import { useStudyBudStore } from "../../store/";
import TaskManager from "../../components/TaskManager//";
import { Data } from "./data.tsx";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

ChartJS.register(CategoryScale);

const index: FC = () => {
  const isDashboardNavActive = useStudyBudStore(
    (state) => state.isDashboardNavActive,
  );

  const chartData = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "CGPA",
        data: Data.map((data) => data.gpa),
        tension: 0.2,
      },
    ],
  })[0];

  const tasks = useState([
    {
      title: "Study Calc 204",
      time: "3:40pm",
    },
    {
      title: "Study Stats 240",
      time: "2:40pm",
    },
  ])[0];

  const [editorState, setEditorState] = useState<String>("");
  useEffect(() => {
    console.log(isDashboardNavActive);
  }, []);

  return (
    <div className="dashboard-main-container">
      <div className="dnav-container">
        <DashboardNavbar />
      </div>
      <div
        className={
          isDashboardNavActive
            ? "main-user-info-container-a"
            : "main-user-info-container"
        }
      >
        <div className="user-info-card">
          <h1>Welcome back,Dave!!</h1>
          <div className="userprofile-card">
            <div className="userprofile-img-container"></div>
            <div className="userprofile-info-container">
              <h2>dave jmaes</h2>
              <h3>Massachusetts Institute of Technology(MIT)</h3>
              <h4>77 Massachusetts Ave</h4>
              <p>3rd year - Mech. Eng.</p>
            </div>
          </div>
        </div>
        <h1>Let us goo</h1>
        <div>
          <div className="text-editor-container">
            <Editor />
            <input type="text" placeholder={editorState} />
            <textarea placeholder="Write an article or more ..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
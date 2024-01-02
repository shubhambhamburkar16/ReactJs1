import LearnReact from "./LearnReact";
import "./customDiv.css";

const React = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-2 customDiv">
          <LearnReact />
        </div>
        <div class="col-md-8">
          <h2>Welcome to React Learning Session</h2>
          <ul type="none" className="list">
            <li>React is a JavaScript library for building user interfaces.</li>
            <li>React is used to build single-page applications.</li>
            <li>React allows us to create reusable UI components.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default React;

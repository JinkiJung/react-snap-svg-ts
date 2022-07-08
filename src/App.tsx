import './App.css';
import { SnapCanvas } from './canvas/SnapCanvas';

function App() {
  const onCreate = (s: Snap.Paper): void => {
    // Lets create big circle in the middle:
    var bigCircle = s.circle(150, 150, 100);
    // By default its black, lets change its attributes
    bigCircle.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
    });
  }
  return (
    <div className="App">
      <SnapCanvas width="100vw" height="100vh" onCreate={onCreate}></SnapCanvas>
    </div>
  );
}

export default App;

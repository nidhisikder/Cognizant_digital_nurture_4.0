import './App.css';
import {CalculateScore} from '../src/Components/CalculateScore';
function App() {
  return (
    <div className="App">
      <CalculateScore 
      Name={"Nidhi Sikder"}
      School={"Army Public School"}
      total={150}
      goal={3}
      />
    </div>
  );
}

export default App;

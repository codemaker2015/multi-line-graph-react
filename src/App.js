import './App.css';
import MultiLineGraphDemo from './components/MultiLineGraphDemo';

function App() {
  return (
    <div className="App">
      <MultiLineGraphDemo data={{
                time: [1,2,3,4,5],
                sp1: [1,0,1,0,5],
                sp2: [0,2,0,4,0]
            }}/>
    </div>
  );
}

export default App;

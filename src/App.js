import logo from './logo.svg';
import './App.css';
import BMICalculator from './BMICalculator';
import Agecalulator from './Agecaculator';
import Emicalculator from './Emicalculator';
import Card from './Card';

function App() {
  return (
    <div>
      <Card>
      <BMICalculator/>
      <Emicalculator/>
      <Agecalulator/>
      </Card>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Transaction from './Components/Transaction.js';

const Title=()=><h1>โปรแกรมซื้อขายสินค้า</h1>

function App() {
  return (
    <div className="Container">
        <Title/>
        <Transaction/>
    </div>
  );
}

export default App;

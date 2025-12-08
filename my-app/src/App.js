import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
  <Navbar title= "TextUtils" aboutText="About TextUtils"/>
  <div className="container my-3">
    <TextForm heading ="enter the text to analyze belowa"/>
    </div>
      <button className="btn btn-primary">Convert to uppercase</button>
   </>
  );
}
 


export default App;

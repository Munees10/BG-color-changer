import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(
    {
      width: "100%",
      height: "100vh",
      backgroundColor: "#000000"
    }
  )
  return (
    <div style={color} className="d-flex justify-content-center align-items-center ">

      <div style={{ border: "solid black 1px" }} className='bg-light p-3 rounded w-50 d-flex justify-content-between align-items-center'>
        <button onClick={() => setColor({ ...color, backgroundColor: "#ff0000" })} className='btn fw-bold' style={{ backgroundColor: '#ff0000', }}>RED</button>
        <button onClick={() => setColor({ ...color, backgroundColor: "#808080" })} className='btn fw-bold' style={{ backgroundColor: '#808080' }}>GRAY</button>
        <button onClick={() => setColor({ ...color, backgroundColor: "#0000ff" })} className='btn fw-bold' style={{ backgroundColor: '#0000ff' }}>BLUE</button>
        <button onClick={() => setColor({ ...color, backgroundColor: "#ffff00" })} className='btn fw-bold' style={{ backgroundColor: '#ffff00' }}>YELLOW</button>
        <button onClick={() => setColor({ ...color, backgroundColor: "#ffffff" })} className='btn fw-bold border' style={{ backgroundColor: '#ffffff' }}>WHITE</button>
        <button onClick={() => setColor({ ...color, backgroundColor: "#008000" })} className='btn fw-bold' style={{ backgroundColor: '#008000' }}>GREEN</button>
      </div>


    </div>
  );
}

export default App;
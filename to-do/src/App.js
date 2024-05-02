import React,{useRef, useState} from 'react';
import logo from './images/logo1.png';
import './App.css';

function App() {
  const inTxt=useRef(null);
  const inEta=useRef(null);
  const divRef=useRef(null);
  const[count,setCount]=useState(1);
  
  const todo=()=>{
    const txt=inTxt.current.value.trim();
    const Eta=inEta.current.value.trim();
    
    if(txt !==''){
    
      const newDiv=document.createElement('div');
      newDiv.className='task-bx';
      setCount (count+1);

      const txtHeading=document.createElement('h3');
      txtHeading.textContent=`Task ${count}`;
      txtHeading.style.color='brown';
      newDiv.appendChild(txtHeading);

      const EtaInp=document.createElement('p');
      EtaInp.style.fontWeight='bolder';
      EtaInp.style.margin='2px';
      EtaInp.style.color='grey';
      EtaInp.textContent=`ETA : ${Eta}`;
      newDiv.appendChild(EtaInp);

      const tskInp=document.createElement('p');
      tskInp.style.padding='auto 20px';
      tskInp.style.color='white';
      tskInp.style.fontFamily='Times New Roman, Times, serif';
      tskInp.textContent=txt;
      newDiv.appendChild(tskInp);

      

      divRef.current.appendChild(newDiv);


     inTxt.current.value='';
     inEta.current.value='';
    }
  };

  return (
    <div className="App">
      <nav>
        <h3>Gservice</h3>
      </nav>
      <div className="container">
        <header>
          <div className="app-header">
            <h1>To-Do-List</h1>
            <p>Create your task and improve your performance</p>
            <button className='st-btn'>Get Started</button>
            <p>Already have a account? <span id="sg-in"> Sign in</span></p>
          </div>
        </header>

        <h1 id='tsk-hd'>Assign Your Task</h1>
        <div className="app-main-tsk">
          <img src={logo} alt="logo-png" id='logo-png' />
          <div className="tsk">
            <h2>Free Trail</h2>
            <textarea type="text" ref={inTxt} rows={4} cols={40} placeholder='Enter your Task'/>
            <input type="text" ref={inEta} placeholder='ETA : DD-MM-YY'  id="in-txt"/>
            <button id="add-btn" onClick={todo}>Add</button>
          </div>
          
          <div className="dis-main-tsk-box"  ref={divRef}>
            
          </div>
        </div>  

        <footer>
           <p id='wb-name'>Gservice</p>
           <span id='fo-menu'><a href="">Services</a></span>
           <span id='fo-menu'><a href="">Projects</a></span>
           <span id='fo-menu'><a href="">About</a></span>
           <span id='fo-menu'><a href="">Contacts</a></span>
           <p>Created By Gowthami Palanisamy @2024</p>

        </footer>
    </div>
    </div>
  );
}

export default App;

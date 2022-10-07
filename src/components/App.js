import React,{useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const [ state,setState]=useState()
// const {query, serchText}= useGlobleContext()  

  
  return (
    <div id="main">
     
        <div>
          <input 
          id="search-input"
          type="text"
          placeholder="search text"
          onChange={(e) => setState(e.target.value)}
          />

          {searchArray.filter((val)={
           if(state == ""){
            return val
           }
           else if(val.toLowerCase().includes(state.toLowerCase())){
            return val

           }
           }).map((val, key)=>{
            return<div key={key}>{val}
              </div>
           })}
        </div>
     
    </div>
  )
}


export default App;

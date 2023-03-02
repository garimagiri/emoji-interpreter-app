import React, { useState } from "react";
import "./styles.css";

var emojiDatabase = {
  "😊" : "smiling",
  "😢" : "sad",
  "❤️" : "love",
  "😂" : "laugh",
  "😑" : "annoyance"

}

var allEmoji = Object.keys(emojiDatabase); 
export default function App() {
  
  
  var [emoji, setemoji] = useState("");
  var [emojiMeaning ,setemojiMeaning] = useState("translation will appear here")
  
  function inputChange(event){
    const emojiValue  = event.target.value;
      setemoji(emojiValue);
      if(emojiValue in emojiDatabase){
        setemojiMeaning(emojiDatabase[emojiValue]);
      }
      else{
        setemojiMeaning("can't recognise this emoji")
      }
      
  }
  function emojiclickHandler(emojiValue){
     setemojiMeaning(emojiDatabase[emojiValue]);
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
     <input onChange={inputChange} placeholder={"put an emoji here to know the meaning"}/>
     <h3>{emoji}</h3>
     <h3>{emojiMeaning}</h3>
     
     {
       allEmoji.map(item => {
         return (
         <span key={item} onClick={()=> emojiclickHandler(item)} style={{fontSize:"30px", padding: "0.5rem", cursor: "pointer"}}>{item}</span>
         )
       })
     }
      
    </div>
  );
}

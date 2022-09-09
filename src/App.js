import React,{useState} from 'react';
import Weather from './Weatherresult';
import './App.css';


function App() {
  const APP_KEY = "73c3eac54aac47848f5123915220609";
  let cityinput="";

  const [weatherdata,setweatherdata]=useState([])

  function citytext(){
   
    document.querySelector("input").addEventListener("input",(e) => {
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput)

    })
     }
  
 async function getdata(value)
 {
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=6&aqi=no&alerts=no`);
    const result = await data.json();
    setweatherdata(result.forecast.forecastday);
 console.log(result.forecast.forecastday)
 }

  return (
    <div>
   <div className="search">
     <input type="text"  placeholder="Aranıyor.." onChange ={citytext } />
   <button onClick={()=> getdata(cityinput)}>Search</button>
   </div>
     {weatherdata.map(item => (<Weather key={item.date}  date={item.date} mintemp={item.day.mintemp_c}  maxtemp={item.day.mintemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>))}

    </div>
  );
}

export default App

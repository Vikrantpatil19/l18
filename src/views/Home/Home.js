import React, { useEffect, useState } from 'react'
import "./Home.css";
import I18n from '../../utils/i18l'

function Home() {

    const usersCount = 15;

    const [lang , setLang] = useState("en");


  return (
    <div>
        <h1>{I18n("welcomeMessage")}</h1>

        <p>
           {I18n("normalMessage")}
        </p>

        <h3>
           {I18n("greetingMessage")}
        </h3>

        

        <select  
        
        defaultValue = {localStorage.getItem("lang")}
        onChange={(e)=>{
           localStorage.setItem("lang" , e.target.value);
           window.location.reload();
        }}>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>

        <p>
           {I18n("userStatMessage")}
        </p>
    </div>
  )
}

export default Home
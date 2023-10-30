import React, { useState } from 'react'
import Test from '../components/Test'
import axios from 'axios'

const baseURL="http://localhost:8080"

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [buttonClick, setButtonClick] = useState(true);

  function getTests(){
    setButtonClick(!buttonClick)
    if(buttonClick){
      axios.get(baseURL+"/tests").then((tests)=>{
        setTests(tests.data)
      })
    }else{
      setTests([])
    }
  }
 
    return (
        <main>
        <div className="content-block">
            <div className="distant"><h2>Тесты текущего семестра</h2></div>
            
            <button className="accordion" onClick={getTests}>Семестр <i>Место для запроса номера актуального семестра</i></button>
            <div className="panel">
                <div>
              
                  {tests &&
                    tests.map(test=>(
                        <Test key={test.id} name={test.name}/>
                    ))   
                  }
                </div>
            </div>

        </div>
    </main>
    )
}

export default Tests
//            <script>
//               var acc = document.getElementsByclassNameName("accordion");
//                var i;

//                for (i = 0; i < acc.length; i++) {
//                    acc[i].addEventListener("click", function() {
//                        this.classNameList.toggle("active");
//                        var panel = this.nextElementSibling;
//                        if (panel.style.maxHeight) {
//                            panel.style.maxHeight = null;
//                        } else {
//                            panel.style.maxHeight = panel.scrollHeight + "px";
//                       }
//                    });
//                }
//            </script>
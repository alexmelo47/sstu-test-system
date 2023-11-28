import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Test from '../components/Test'
import axios from 'axios'

const baseURL="http://localhost:8080"

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [buttonClick, setButtonClick] = useState(true); 

  function getTests(){                                          /* Функция  запрашивающая по нажатию кнопки с сервера доступные пользователю тесты */
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
            
            <button className="accordion" onClick={getTests}>Доступные тесты</button> 
            <div className="panel">
                <div>
              
                  {tests &&
                    tests.map(test=>(
                        <Test key={test.id} name={test.name}/>
                    ))   
                  }
                </div>
            </div>

            <div><Link to="/preview/">Информатика 2 курс</Link></div> 

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
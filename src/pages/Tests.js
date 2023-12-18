import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Test from '../components/Test'
import axios from 'axios'

const baseURL ="https://maile.fita.cc"

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [buttonClick, setButtonClick] = useState(true); 
  localStorage.removeItem("fullTime");
  localStorage.removeItem("grade");
  localStorage.removeItem("test_name");
  localStorage.removeItem("test_author");

  function getTests(){  // Функция  запрашивающая по нажатию кнопки с сервера доступные пользователю тесты
    setButtonClick(!buttonClick)
    if(buttonClick){
        axios.get(baseURL + "/tests").then((tests) => {
            console.log(tests);
        setTests(tests.data)
      })
    }else{
      setTests([])
    }
  }
 //Название Дисциплина Тип Время_до_окончания
    return (
        <main>
            <div className="content-block">
                <div className="distant"><h2>Тесты текущего семестра</h2></div>
            
                <button className="accordion" onClick={getTests}>Доступные тесты</button> 
                <div className="panel">
                    <div>
                        <ul className="test-list examinational">
                            <li>ИД теста</li>
                            <li>Название</li>
                            <li>Способ</li>
                            <li>Статус</li>
                            <li></li>
                        </ul>
                      {tests &&
                        tests.map(test => (
                            <Test tid={test.id} name={test.name} status={test.status} method={test.method}/>
                        ))   
                      }
                    </div>
                </div>

                <div><Link to="/preview/">Тест для отладки</Link></div> 
            
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
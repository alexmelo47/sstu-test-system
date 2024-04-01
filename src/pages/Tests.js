import React, { useState } from 'react'
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
 
 //СДЕЛАТЬ НОРМАЛЬНЫЙ ПЕРЕХОД К ОПИСАНИЮ ТЕСТА И САМОМУ ТЕСТУ
    return (
        <main>
            <div className="content-block">
                <div className="distant"><h2>Тесты текущего семестра</h2></div>
            
                <button className="accordion" onClick={getTests}>Доступные тесты</button> 
                <div className="panel">
                    <div>
                        <ul className="test-list">
                            <li>Название</li>
                            <li>Дисциплина</li>
                            <li>Тип</li>
                            <li>Время окончания</li>
                            <li></li>
                        </ul>
                        {tests &&
                            tests.map(test => (
                                <Test key={test.id} tid={test.id} status={test.status} method={test.method} name={test.name} discipline={test.disciplines[0].name} teacher={test.author} time={test.endedAt} />
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
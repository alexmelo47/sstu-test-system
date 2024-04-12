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

  function getTests(){  //Запрос на доступные пользователю тесты
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
 
    return (
        <main>
            <div className="content-block">
            
                <button className="accordion" onClick={getTests}>Доступные тесты</button> 
                <div className="panel">
                    <div>
                        <ul className="test-list">
                            <li>Название</li>
                            <li>Дисциплины</li>
                            <li>Компетенции</li>
                            <li>Тип</li>
                            <li>Время окончания</li>
                            <li></li>
                        </ul>
                        {tests &&
                            tests.map(test => (
                                <Test
                                    key={test.id} tid={test.id}
                                    status={test.status} method={test.method}
                                    name={test.name} discipline={test.disciplines[0]?.name} teacher={test.author}
                                    time={new Date(test.endedAt).toString()} try_time={test.duration} try_cnt={test.attempts}
                                    testing_attr={test.competences} q_cnt={test.count}
                                />
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
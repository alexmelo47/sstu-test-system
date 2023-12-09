import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Test from '../components/Test'
import axios from 'axios'

const baseURL ="https://maile.fita.cc"

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [buttonClick, setButtonClick] = useState(true); 

  function getTests(){                                          /* Функция  запрашивающая по нажатию кнопки с сервера доступные пользователю тесты */
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
            <div className="distant"><h2>Тесты текущего семестра</h2></div>
            
            <button className="accordion" onClick={getTests}>Доступные тесты</button> 
            <div className="panel">
                <div>
              
                  {tests &&
                    tests.map(test => (
                        <Test tid={test.id} name={test.name} status={test.status} method={test.method} />
                    tests.map(test=>(
                        <Test key={test.id} name={test.name} status={test.status} method={test.method}/>
                    ))   
                  }
                </div>
            </div>

            <div><Link to="/preview/">Информатика 2 курс</Link></div> 
            <div><button className="open-test">Открыть тест</button></div>
            
            <ul className="test-list examinational"><li>Математика 4 курс группа б-пинж41 итоговая в семестре 1 попытка и больше вам не дадут не найдейтесь</li><li>На оценку</li><li>Адаптивный</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list examinational"><li>Математика</li><li>На оценку</li><li>Адаптивный</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list examinational"><li>Математика</li><li>На оценку</li><li>Адаптивный</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list training"><li>Русский</li><li>Тренировочный</li><li>Классический</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list training"><li>Русский</li><li>Тренировочный</li><li>Классический</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list training"><li>Русский</li><li>Тренировочный</li><li>Классический</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list debugging"><li>Информатика</li><li>Отборочный</li><li>Классический</li><li><button className="open-test">Открыть тест</button></li></ul>
            <ul className="test-list debugging"><li>Информатика</li><li>Отборочный</li><li>Классический</li><li><button className="open-test">Открыть тест</button></li></ul>
            
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
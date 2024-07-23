import React, { useState } from 'react'
import Test from '../components/Test'
import axios from 'axios'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const baseURL ="https://maile.fita.cc"

const Tests = () => {
    const [tests, setTests] = useState([]);
    const [buttonClick, setButtonClick] = useState(true); 
    localStorage.removeItem("Result");

    const [open4, setAccessWarn] = React.useState(false);
    const handleCloseAccessWarn = () => {
        setAccessWarn(false);
    }

    function getTests(){  //Запрос на доступные пользователю тесты
        setButtonClick(!buttonClick)
        if(buttonClick){
            axios.get(baseURL + "/tests").then((tests) => {
                //console.log(tests);
            setTests(tests.data)
            }).catch((err) => {
                if (err.toJSON().status === 403) {
                    setAccessWarn(true);
                }
                console.log(err);
            })
        }else{
            setTests([])
        }
    }
 
    return (
        <main>
            <div className="content-list">

                <Dialog open={open4} onClose={handleCloseAccessWarn} aria-labelledby="access-warning">
                    <DialogTitle id="access-warning">Предупреждение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Для выполнения данного действия необходимо авторизоваться.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseAccessWarn} color="primary">Закрыть</Button>
                    </DialogActions>
                </Dialog>
            
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
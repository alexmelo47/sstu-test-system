import React, { useState, useEffect } from 'react'
import Test from '../components/Test'
import axios from 'axios'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const baseURL ="https://maile.fita.cc"

const Tests = () => {
    const [tests, setTests] = useState([]);
    const [buttonClick, setButtonClick] = useState(true); 
    localStorage.removeItem("Result");

    const [open4, setAccessWarn] = React.useState(false);
    const handleCloseAccessWarn = () => {
        setAccessWarn(false);
    }

    useEffect(() => {
        getTests();
    }, []);

    function getTests() {  //Запрос на доступные пользователю тесты  ДОБАВИТЬ КРУЖОК ЗАГРУЗКИ
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

    const StyleButton = withStyles({
        root: {
          width: '93%',
          backgroundColor: '#0059A8',
          borderRadius: '30px',
          color: "white",
          textTransform: "none",
          fontFamily: [
            "Lucida Sans Unicode", 
            "Lucida Grande", 
            'sans-serif',
          ].join(','),
          fontSize: "1rem",
          margin: "5px",

          '&:hover': {
            backgroundColor: '#0372D4',
          },
          '&:active': {
            backgroundColor: '#0059A8',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
        },
      })(Button);

      const StyleAction = withStyles({
        root: {
            display: "flex",
            justifyContent: "center",
        },
      })(DialogActions);

      const StyleTitle = withStyles({
        root: {
          color: '#0059A8',
          fontSize: '2rem ',
          textAlign: "center",
          fontFamily: ["Roboto", "Helvetica", "Arial", 'sans-serif'].join(','),
          fontWeight: 700,
          lineHeight: 1.6,
          letterSpacing: '0.0075em',
        },
      })(DialogTitle);
    
 
    return (
        <main>
            <div className="content-list">

                <Dialog PaperProps={{
                                      style: { borderRadius: 15 }
                                  }} 
                                  open={open4} onClose={handleCloseAccessWarn} aria-labelledby="access-warning">
                    <StyleTitle disableTypography id="access-warning">Предупреждение</StyleTitle>
                    <DialogContent>
                        <DialogContentText>Для выполнения данного действия необходимо авторизоваться.</DialogContentText>
                    </DialogContent>
                    <StyleAction>
                        <StyleButton onClick={handleCloseAccessWarn} color="primary">Закрыть</StyleButton>
                    </StyleAction>
                </Dialog>

                {false && <button className="accordion" onClick={getTests}>Доступные тесты</button>} 
                <div className="panel">
                    <div>
                        <ul className="test-list test-top">
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
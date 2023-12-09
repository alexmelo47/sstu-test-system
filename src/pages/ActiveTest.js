import React, { Component, useState} from 'react'
import axios from 'axios'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function ActiveTest()  {

    const[open, setOpen] = React.useState(false);
    const handleClickOpenWarn = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    }

    return (
        /* 
        Страница в которой воспроизводится классическая форма тестирования
        */
        <main>
        <input className="btn-fin" type="submit" value="Завершить тестирование"/>
        <div className="content-block">

        <Dialog open={open} onClose={handleClose} aria-aria-labelledby="warning">
            <DialogTitle id="warning">Предупреждение</DialogTitle> 
            <DialogContent>
            <DialogContentText>Вы не ответили на один или более вопросов. Вы уверены, что хотите продолжить?</DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Да</Button>
                    <Button onClick={handleClose} color="primary">Нет</Button>
                </DialogActions>
        </Dialog>

            <fieldset>
                <legend><h3>&nbsp;Информатика 2 курс&nbsp;</h3></legend> 


            </fieldset>

            <div className="quest-btn">
                <input className="btn btn-2" type="submit" value="Предыдущий"/>
                <input className="btn btn-1" type="submit" value="Подтвердить ответ"/>
                <input className="btn btn-2" type="submit" value="Следующий"/>
            </div>

        </div>
    </main>
    )

}
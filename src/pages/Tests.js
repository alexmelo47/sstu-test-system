import React, { Component } from 'react'

export default class Tests extends Component {
  render() {
    return (
        <main>
        <div class="content-block">
            <div class="distant"><h2>Тесты текущего семестра</h2></div>
            
            <button class="accordion">Семестр <i>Место для запроса номера актуального семестра</i></button>
            <div class="panel">
                <br/><p><a href="/preview">Предмет 1.1</a></p><br/>
                <br/><p><i>Место для запроса актуального теста</i></p><br/>
                <br/><p><i>Место для запроса актуального теста</i></p><br/>
                <br/><p><i>Место для запроса актуального теста</i></p><br/>
                <br/><p><i>Место для запроса актуального теста</i></p><br/>
                <br/><p><i>Место для запроса актуального теста</i></p><br/>
                <br/><p><i>Либо 1 запрос выводящий все тесты списком</i></p><br/>
            </div>


            <br/><p><a href="/preview">Предмет 1.1</a></p><br/>

        </div>
    </main>
    )
  }
}
//            <script>
//               var acc = document.getElementsByClassName("accordion");
//                var i;

//                for (i = 0; i < acc.length; i++) {
//                    acc[i].addEventListener("click", function() {
//                        this.classList.toggle("active");
//                        var panel = this.nextElementSibling;
//                        if (panel.style.maxHeight) {
//                            panel.style.maxHeight = null;
//                        } else {
//                            panel.style.maxHeight = panel.scrollHeight + "px";
//                       }
//                    });
//                }
//            </script>
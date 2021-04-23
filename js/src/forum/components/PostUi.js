import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';
import Button from 'flarum/components/Button';

export default function () {
    extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
        // Stergerea butoanelor existente
        if (items.has('controls')) {
            items.remove('controls');
        }

        // Добавление кнопок выбора текста и изображений
        items.add(
            'Original',
            Button.component({
                title: "Original",
                className: 'Button Button--primary',
                onclick: imageOn.bind(this),
            },
                'Original'
            )
        );
        items.add(
            'Text in chirilica',
            Button.component({
                title: "Text in chirilica",
                className: 'Button Button--primary',
                onclick: chirilicaOn.bind(this),
            },
                'Text in chirilica'
            )
        );
        items.add(
            'Text transliterat',
            Button.component({
                title: "Text transliterat",
                className: 'Button Button--primary',
                /* onclick: modifyLayout.bind(this), */
            },
                'Text transliterat'
            )
        );
        /* if (y == undefined) {
                    console.log()
                } else {
                    img[i] = data[i];
                } */
        /* data[i].textContent = ""
        text = data[i].textContent; */
        /* let data = document.getElementsByClassName("PostStream-item")[0];
           data = document.getElementsByClassName("Post-body")[0]
           data = document.getElementsByTagName("img") */
        /* for (let i = 0; i < data.length; i++) {
            data[i].style.display = "block";
        }
        console.log(data) */



        let data = document.getElementsByClassName("PostStream-item")[0];
        data = document.getElementsByClassName("Post-body")[0]
        data = document.getElementsByTagName("p");
        /* for (let i = 0; i < data.length; i++) {
            if (data[i] != undefined) {
                let y = data[i].getElementsByTagName("img");
                if (y.length == 0) {
                    data[i].style.display = "none"
                }
            }
        } */

        function imageOn() {

            for (let i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    let y = data[i].getElementsByTagName("img");
                    if (y.length == 0) {
                        data[i].style.display = "none"
                    } else {
                        data[i].style.display = "block"
                    }
                }
            }
        }
        function chirilicaOn() {

            for (let i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    let y = data[i].getElementsByTagName("img");
                    if (y.length == 0) {
                        data[i].style.display = "block"
                    } else {
                        data[i].style.display = "none"
                    }
                }
            }
        }






    });

}
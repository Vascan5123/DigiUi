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
            'Imagini',
            Button.component({
                title: "Imagini",
                className: 'Button Button--primary',
                onclick: imageOn.bind(this),
            },
                app.translator.trans('digi-ui.forum.postui.buttons.images')
            )
        );
        items.add(
            'Text transliterat',
            Button.component({
                title: "Text transliterat",
                className: 'Button Button--primary',
                onclick: transliteranOn.bind(this),
            },
                app.translator.trans('digi-ui.forum.postui.buttons.trans_text')
            )
        );
        items.add(
            'Text in chirilica',
            Button.component({
                title: "Text in chirilica",
                className: 'Button Button--primary',
                onclick: chirilicaOn.bind(this),
            },
                app.translator.trans('digi-ui.forum.postui.buttons.cyr_text')
            )
        );


        const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
        let data = document.getElementsByClassName("PostStream-item")[0];
        data = document.getElementsByClassName("Post-body")[0]
        data = document.getElementsByTagName("p");


        function imageOn() {
            let images = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img");
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "block"
            }

            let span = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            for (let i = 0; i < span.length; i++) {
                span[i].style.display = "none"
            }
        }

        function transliteranOn() {
            let transliterat = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            for (let i = 0; i < transliterat.length; i++) {
                if (transliterat[i].classList.contains('transliterat')) {
                    transliterat[i].style.display = "block"
                }
            }

            let images = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img");
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none"
            }
            let chirilic = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            for (let i = 0; i < chirilic.length; i++) {
                if (chirilic[i].classList.contains('chirilic')) {
                    chirilic[i].style.display = "none"
                }
            }
        }

        function chirilicaOn() {
            let chirilic = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            for (let i = 0; i < chirilic.length; i++) {
                if (chirilic[i].classList.contains('chirilic')) {
                    chirilic[i].style.display = "block"
                }
            }

            let images = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img");
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none"
            }
            let transliterat = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            for (let i = 0; i < transliterat.length; i++) {
                if (transliterat[i].classList.contains('transliterat')) {
                    transliterat[i].style.display = "none"
                }
            }
        }


        /* function imageOn() {

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
        function transliteranOn() {
            for (let i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    let y = data[i].getElementsByTagName("img");
                    if (y.length == 0 && !/[^a-z][а-я]/.test(data[i].innerHTML)) {
                        data[i].style.display = "block"
                    } else {
                        data[i].style.display = "none"
                    }
                }
            }
        }

        function chirilicaOn() {
            for (let i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    let y = data[i].getElementsByTagName("img");
                    if (y.length == 0 && /[^a-z][а-я]/.test(data[i].innerHTML)) {
                        data[i].style.display = "block"
                    } else {
                        data[i].style.display = "none"
                    }
                }
            }
        } */






    });

}
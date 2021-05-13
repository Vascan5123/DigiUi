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
                id: "Button_text_imagini",
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
                id: "Button_text_transliterat",
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
                id: "Button_text_chirilica",
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


        let all_images = document.getElementsByClassName("PostStream-item")[0]
        if (all_images != undefined) {
            all_images = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img");
            if (all_images.length < 1) {
                document.getElementById("Button_text_imagini").classList.add("disabled")
            }
        }

        let all_transliterat = document.getElementsByClassName("PostStream-item")[0]
        if (all_transliterat != undefined) {
            all_transliterat = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            if (all_transliterat.length < 1) {
                document.getElementById("Button_text_transliterat").classList.add("disabled")
            }
            for (let i = 0; i < all_transliterat.length; i++) {
                if (!all_transliterat[i].classList.contains('transliterat')) {
                    if (all_transliterat.length < 1) {
                        document.getElementById("Button_text_transliterat").classList.add("disabled")
                    }
                }
            }
        }

        let all_chirilic = document.getElementsByClassName("PostStream-item")[0]
        if (all_chirilic != undefined) {
            all_chirilic = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
            if (all_chirilic.length < 1) {
                document.getElementById("Button_text_chirilica").classList.add("disabled")
            }
            for (let i = 0; i < all_chirilic.length; i++) {
                if (!all_chirilic[i].classList.contains('chirilic')) {
                    if (all_chirilic.length < 1) {
                        document.getElementById("Button_text_chirilica").classList.add("disabled")
                    }
                }
            }
        }

        function imageOn() {
            if (!document.getElementById("Button_text_imagini").classList.contains("disabled")) {
                let span = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
                if (span.length > 0) {
                    for (let i = 0; i < span.length; i++) {
                        span[i].style.display = "none"
                    }

                    let images = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img");
                    for (let i = 0; i < images.length; i++) {
                        images[i].style.display = "block"
                    }
                } else {
                    console.log("span not found");
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
            }
        }

        function transliteranOn() {
            if (!document.getElementById("Button_text_transliterat").classList.contains("disabled")) {
                let span = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
                if (span.length > 0) {
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
                } else {
                    console.log("span not found");
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
            }
        }

        function chirilicaOn() {
            if (!document.getElementById("Button_text_chirilica").classList.contains("disabled")) {
                let span = document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");
                if (span.length > 0) {
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
                } else {
                    console.log("span not found");
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
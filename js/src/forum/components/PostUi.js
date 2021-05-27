import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';
import Button from 'flarum/components/Button';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import { saveAs } from 'file-saver';

export default function () {
    extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
        // Stergerea butoanelor existente
        if (items.has('controls')) {
            items.remove('controls');
        }

        // Добавление кнопок выбора текста и изображений
        items.add(
            'Imagini_button',
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
            'Text transliterat_button',
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
            'Text in chirilica_button',
            Button.component({
                id: "Button_text_chirilica",
                title: "Text in chirilica",
                className: 'Button Button--primary',
                onclick: chirilicaOn.bind(this),
            },
                app.translator.trans('digi-ui.forum.postui.buttons.cyr_text')
            )
        );
        items.add(
            'Download',
            Button.component({
                id: "Button_download",
                title: "Download",
                className: 'Button Button--primary',
                onclick: DownloadOn.bind(this),
            },
                app.translator.trans('digi-ui.forum.postui.buttons.download')
            )
        );

        items.add(
            'Download_All',
            <div id="Button_download_all" class="d-none">
                <ul class="Buttons_download">
                    <li class="item-link-download"><a class="LinksButton Button Button--link" onclick={save_text_all.bind(this)}>{app.translator.trans('digi-ui.forum.postui.buttons.download_all')}</a></li>
                    <li class="item-link-download"><a class="LinksButton Button Button--link" onclick={save_text_transliterat.bind(this)}>{app.translator.trans('digi-ui.forum.postui.buttons.download_transliterat')}</a></li>
                    <li class="item-link-download"><a class="LinksButton Button Button--link" onclick={save_text_chirilică.bind(this)}>{app.translator.trans('digi-ui.forum.postui.buttons.download_chirilică')}</a></li>
                </ul>
            </div>
        );


        function DownloadOn() {
            var b1 = document.getElementById("Button_download_all");
            var b2 = document.getElementById("Button_download");
            if (b1.classList.contains("d-none")) {
                b1.classList.remove("d-none");
                b2.classList.add("disabled");
            } else {
                b1.classList.add("d-none");
                b2.classList.remove("disabled");
            }
        }



        function save_text_all() {
            let chirilic = document.getElementsByClassName("chirilic")[0].innerHTML;
            let transliterat = document.getElementsByClassName("transliterat")[0].innerHTML;
            let title = app.title;
            let tags_included = app.current.data.discussion.payload.included;
            let tags = []
            for (let i = 0; i < tags_included.length; i++) {
                if (tags_included[i].type == "tags")
                    if (tags_included[i].attributes.name != "Spre editare" || tags_included[i].attributes.name != "Verificat de Editor") {
                        tags.push(tags_included[i].attributes.name)
                    }
            }
            tags = tags.join(', ');

            let author = document.getElementsByClassName("PostUser")[0].getElementsByClassName("username")[0].innerHTML

            var blob = new Blob([title, "\n\n\n", "Metadata: ", tags, "\n\n\n", "Chirilic: ", chirilic, "\n\n\n", "Transliterat: ", transliterat, "\n\n\n", "Autor: ", author],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, title + ".txt");
        }

        function save_text_transliterat() {
            let transliterat = document.getElementsByClassName("transliterat")[0].innerHTML;
            let title = app.title;
            let tags_included = app.current.data.discussion.payload.included;
            let tags = []
            for (let i = 0; i < tags_included.length; i++) {
                if (tags_included[i].type == "tags")
                    if (tags_included[i].attributes.name != "Spre editare" || tags_included[i].attributes.name != "Verificat de Editor") {
                        tags.push(tags_included[i].attributes.name)
                    }
            }
            tags = tags.join(', ');

            let author = document.getElementsByClassName("PostUser")[0].getElementsByClassName("username")[0].innerHTML

            var blob = new Blob([title, "\n\n\n", "Metadata: ", tags, "\n\n\n", "Transliterat: ", transliterat, "\n\n\n", "Autor: ", author],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, title + ".txt");
        }

        function save_text_chirilică() {
            let chirilic = document.getElementsByClassName("chirilic")[0].innerHTML;
            let title = app.title;
            let tags_included = app.current.data.discussion.payload.included;
            let tags = []
            for (let i = 0; i < tags_included.length; i++) {
                if (tags_included[i].type == "tags")
                    if (tags_included[i].attributes.name != "Spre editare" || tags_included[i].attributes.name != "Verificat de Editor") {
                        tags.push(tags_included[i].attributes.name)
                    }
            }
            tags = tags.join(', ');

            let author = document.getElementsByClassName("PostUser")[0].getElementsByClassName("username")[0].innerHTML

            var blob = new Blob([title, "\n\n\n", "Metadata: ", tags, "\n\n\n", "Chirilic: ", chirilic, "\n\n\n", "Autor: ", author],
                { type: "text/plain;charset=utf-8" });
            saveAs(blob, title + ".txt");
        }























        /* const cyrillicPattern = /^\p{Script=Cyrillic}+$/u; */
        let data = document.getElementsByClassName("PostStream-item")[0];
        data = document.getElementsByClassName("Post-body")[0]
        data = document.getElementsByTagName("p");

        let all_images = document.getElementsByClassName("Post-body")[0]
        if (all_images) {
            let button = document.getElementById("Button_text_imagini")
            all_images = document.getElementsByClassName("Post-body")[0].getElementsByTagName("img")
            if (all_images.length < 1) {
                button.classList.add("disabled")
            }
        }


        let all_transliterat = document.getElementsByClassName("transliterat")
        if (all_transliterat.length < 1) {
            let button = document.getElementById("Button_text_transliterat")
            if (button) {
                button.classList.add("disabled")
            }
        }

        let all_chirilic = document.getElementsByClassName("chirilic")
        if (all_chirilic.length < 1) {
            let button = document.getElementById("Button_text_chirilica")
            if (button) {
                button.classList.add("disabled")
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





    });

}
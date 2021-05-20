import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import PostUi from './components/PostUi';
import CardItem from './components/CardItem';
import IndexPage from 'flarum/components/IndexPage';
import DiscussionsUserPage from 'flarum/components/DiscussionsUserPage';
import Button from 'flarum/components/Button';
import DiscussionList from 'flarum/components/DiscussionList';
import ComposerBody from 'flarum/components/ComposerBody';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import TagHero from 'flarum/tags/components/TagHero';
import TextEditor from 'flarum/components/TextEditor';


app.initializers.add('vascan/digi-ui', () => {
  PostUi();
  extend(IndexPage.prototype, 'init', function () {
    /* this.gridLayout = m.prop(false); */
  });
  extend(IndexPage.prototype, 'actionItems', function (items) {
    // Stergerea butoanelor existente
    if (items.has('refresh')) {
      items.remove('refresh');
    }
    if (items.has('markAllAsRead')) {
      items.remove('markAllAsRead');
    }
  });
  extend(IndexPage.prototype, 'viewItems', function (items) {
    // Удаление кнопки сортировки
    if (items.has('sort')) {
      items.remove('sort');
    }
    // Добавляем блок jumbotron сверху
    console.log()
    items.add(
      'jumbotron',
      <div class="jumbotron_class"></div>)
    // Добавляем текст сверху
    items.add(
      'Text_title_center_block',
      <p class="Text_title_center_block_class"><span> {app.translator.trans('digi-ui.forum.what_is_new')}</span></p>)
  });
  extend(DiscussionListItem.prototype, 'view', function (view) {
    let elementClassName;
    try {
      if (app.current.matches(IndexPage) || (app.current.matches(DiscussionsUserPage))) {
        // Modificare clasa DiscussionListItem-content
        elementClassName = view.children[2].attrs.className.split(' ');
        elementClassName[0] += '--grid';
        view.children[2].attrs.className = elementClassName.join(' ');

        // Modificare clasa DiscussionListItem-author
        elementClassName = view.children[2].children[0].attrs.className.split(' ');
        elementClassName[0] += '--grid';
        view.children[2].children[0].attrs.className = elementClassName.join(' ');

        // Modificare clasa DiscussionListItem-main
        elementClassName = view.children[2].children[2].attrs.className.split(' ');
        elementClassName[0] += '--grid';
        view.children[2].children[2].attrs.className = elementClassName.join(' ');

        // Modificare clasa DiscussionListItem-title
        elementClassName = view.children[2].children[2].children[0].attrs.className.split(' ');
        elementClassName[0] += '--grid';
        view.children[2].children[2].children[0].attrs.className = elementClassName.join(' ');
      }
    }
    catch { }
  });
  extend(DiscussionList.prototype, 'view', function (view) {
    let elementClassName;
    // Modificare clasa DiscussionList-discussions
    try {
      if (app.current.matches(IndexPage) || (app.current.matches(DiscussionsUserPage))) {
        elementClassName = view.children[0].attrs.className.split(' ');
        elementClassName[0] += '--grid';
        view.children[0].attrs.className = elementClassName.join(' ');
      }
    } catch {

    }
    /* if (app.current.matches(IndexPage)) {
      return (
        <div className={'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')}>
          <div class="DiscussionList-discussions flexCard">
            {state.discussions.map((discussion, i) => {
                return m(CardItem, {discussion: discussion});
            })}
          </div>
          <div className="DiscussionList-loadMore">{loading}</div>
        </div>
      );} */
  });
  override(require('@fof-upload').components.FileManagerButton.prototype, 'view', function (original) {
    if (app.current.matches(IndexPage)) {
      return Button.component({
        className: 'Button fof-upload-button Button--icon big_upload_icon',
        onclick: this.fileManagerButtonClicked.bind(this),
        icon: 'fas fa-folder-open',
        title: app.translator.trans('fof-upload.forum.buttons.media'),
      })
    } else {
      return Button.component({
        className: 'Button fof-upload-button Button--icon',
        onclick: this.fileManagerButtonClicked.bind(this),
        icon: 'fas fa-folder-open',
        title: app.translator.trans('fof-upload.forum.buttons.media'),
      })
    }
  });
  extend(ComposerBody.prototype, 'view', function (view) {
    view.children[0].children[1].children[1].children[0].attrs.class1 = "textarea_create_post";
    /* console.log(view.children[0].children[1].children[1].children[0].attrs.class1); */
  })
  /* override(ComposerBody.prototype, 'view', function () {
    return (
      <div className={'ComposerBody ' + (this.attrs.className || '')}>
        <div className="ComposerBody-content">
          <ul className="ComposerBody-header">{listItems(this.headerItems().toArray())}</ul>
          <div className="ComposerBody-editor">
            {TextEditor.component({
              class1: "textarea_create_post",
              submitLabel: this.attrs.submitLabel,
              placeholder: "",
              disabled: this.loading || this.attrs.disabled,
              composer: this.composer,
              preview: this.jumpToPreview && this.jumpToPreview.bind(this),
              onchange: this.composer.fields.content,
              onsubmit: this.onsubmit.bind(this),
              value: this.composer.fields.content(),
            })}
          </div>
        </div>
        {LoadingIndicator.component({ className: 'ComposerBody-loading' + (this.loading ? ' active' : '') })}
      </div>
    );
  }) */
  extend(TextEditor.prototype, 'oninput', textEditorF);
  override(TextEditor.prototype, 'buildEditorParams', function () {
    return {
      classNames: ['FormControl', 'Composer-flexible', 'TextEditor-editor', this.attrs.class1],
      disabled: this.disabled,
      placeholder: this.attrs.placeholder || '',
      value: this.value,
      oninput: this.oninput.bind(this),
      inputListeners: [],
      onsubmit: () => {
        this.onsubmit();
        m.redraw();
      },
    };
  })


  let url = window.location.href;
  if (url.includes("/t/")) {
    /* let re = '/';
    let nameList = url.split(re);
    let k = nameList.length - 1; */

    extend(IndexPage.prototype, 'viewItems', function (items) {
      // Удаление jumbotron
      if (items.has('jumbotron')) {
        items.remove('jumbotron');
      }
      if (items.has('Text_title_center_block')) {
        items.remove('Text_title_center_block');
      }
      
      /* override(TagHero.prototype, 'view', function (view) {
        const tag = this.attrs.model;
        const color = tag.color();

        return (
          <header className={'Hero TagHero' + (color ? ' TagHero--colored' : '')}
            style={color ? { color: '#fff', backgroundColor: color } : ''}>
            <div className="container">
              <div className="containerNarrow">
                <h2 className="Hero-title">{tag.icon() && tagIcon(tag, {}, { useColor: false })} {tag.name()}</h2>
                <div className="Hero-subtitle">{tag.description()}</div>
              </div>
            </div>
          </header>
        );
      }); */

      // Изменение текста
      /* if (items.has('Text_title_center_block')) {
        items.replace('Text_title_center_block',
          <p class="Text_title_center_block_class"><span>{nameList[k]}</span></p>);
      } */
    })
  }
  console.log(TagHero);



  /* function funonload() {
    let url = window.location.href;
    if (url.includes("/t/")) {
      console.log(document.getElementsByClassName("TagHero")[0].style.display = "none")
    }
  }
  window.onload = funonload;
 */



});
function textEditorF() {
  if (app.current.matches(IndexPage)) {
    console.log(document.getElementsByClassName("textarea_create_post"))
    let text = document.getElementsByClassName("textarea_create_post")[0].value;
    if (text.length > 0) {
      document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon");
    } else {
      document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon");
    }
  }
}
CardItem();
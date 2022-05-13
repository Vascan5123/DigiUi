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
    if (app.current.matches(IndexPage) && window.innerWidth > "425") {
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
  })

  extend(TextEditor.prototype, 'oninput', textEditorF);

  extend(TextEditor.prototype, 'buildEditorParams', function (buildEditorParams) {
    buildEditorParams.classNames.push(this.attrs.class1)
  })

  extend(IndexPage.prototype, 'viewItems', function (items) {
    let url = window.location.href;
    if (url.includes("/t/")) {
      // Удаление jumbotron
      if (items.has('jumbotron')) {
        items.remove('jumbotron');
      }
      if (items.has('Text_title_center_block')) {
        items.remove('Text_title_center_block');
      }
      if (TagHero != undefined) {
        extend(TagHero.prototype, 'view', function (view) {
          if (view != undefined) {
            view.attrs.className = "Hero TagHero2"
          }
        });
      }
    }
  })

});
function textEditorF() {
  if (app.current.matches(IndexPage) && window.innerWidth > "425") {
    let text = document.getElementsByClassName("textarea_create_post")[0].value;
    if (text != undefined) {
      if (text.length > 0) {
        document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon");
      } else {
        document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon");
      }
    }
    else {
      document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon");
    }
  }
}
CardItem();
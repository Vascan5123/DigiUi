import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import PostUi from './components/PostUi';
import CardItem from './components/CardItem';
import IndexPage from 'flarum/components/IndexPage';
import UserPage from 'flarum/components/UserPage';
import DiscussionsUserPage from 'flarum/components/DiscussionsUserPage';
import Button from 'flarum/components/Button';
import Navigation from 'flarum/components/Navigation';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import ComposerBody from 'flarum/components/ComposerBody';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import TextEditor from 'flarum/components/TextEditor';
import avatar from 'flarum/helpers/avatar';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';
import LinkButton from 'flarum/common/components/LinkButton';


app.initializers.add('vascan/digi-ui', () => {
  PostUi();
  extend(IndexPage.prototype, 'init', function () {
    /* this.gridLayout = m.prop(false); */
  });
  /* override(IndexPage.prototype, '', function () {
  }); */
  extend(IndexPage.prototype, 'view', function (view) {
    view.children[1].children[0].children[0].attrs.className = "IndexPage-nav sideNav openMenu_class"
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
  // Adding menu button
  override(Navigation.prototype, 'view', function () {
    const { history, pane } = app;
    return (
      <div
        className={'Navigation ButtonGroup ' + (this.attrs.className || '')}
        onmouseenter={pane && pane.show.bind(pane)}
        onmouseleave={pane && pane.onmouseleave.bind(pane)}
      >
        {history.canGoBack() ? [this.getBackButton(), this.getPaneButton()] : [getMenuButton(), this.getDrawerButton()]}
      </div>
    );
  });
  // This is Menu button
  function getMenuButton() {
    if (!app.current.matches(UserPage)) {
      return (
        <a id="menu_open_id" class="Button Button--icon hasIcon" title="Menu" active="false" type="button" onclick={menuOn.bind(this)}>
          <i class="fas fa-bars Button-icon"></i>
        </a>
      );
    }
  }
  function menuOn() {
    let nav = document.getElementsByClassName("IndexPage-nav")[0];
    if (nav.classList.contains('openMenu_class')) {
      nav.classList.remove("openMenu_class");
    } else {
      nav.classList.add("openMenu_class");
    }
  }
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
  extend(ComposerBody.prototype, 'view', function (view) {
    view.children[0].children.shift()
  });
});
function textEditorF() {
  if (app.current.matches(IndexPage)) {
    let text = document.getElementsByClassName("textarea_create_post")[0].value;
    if (text.length > 0) {
      document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon");
    } else {
      document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon");
    }
  }
}
CardItem();
import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import PostUi from './components/PostUi';
import CardItem from './components/CardItem';
import IndexPage from 'flarum/components/IndexPage';
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

app.initializers.add('vascan/digi-ui', () => {
  PostUi();
  extend(IndexPage.prototype, 'init', function () {
    /* this.gridLayout = m.prop(false); */
  });
  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    // Убераем левое меню
    /* if (items.has('newDiscussion')) {
      items.remove('newDiscussion');
    }
    if (items.has('nav')) {
      items.remove('nav');
    } */
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
    if (app.current.matches(IndexPage)) {
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
    return Button.component({
      className: 'Button fof-upload-button Button--icon big_upload_icon',
      onclick: this.fileManagerButtonClicked.bind(this),
      icon: 'fas fa-folder-open',
      title: app.translator.trans('fof-upload.forum.buttons.media'),
    })
  });
  extend(TextEditor.prototype, 'oninput', textEditorF);
  override(ComposerBody.prototype, 'view', function () {
    return (
      <div when={this.hasChanges.bind(this)}>
        <div className={'ComposerBody ' + (this.attrs.className || '')}>
          {/* {avatar(this.attrs.user, { className: 'ComposerBody-avatar' })} */}
          <div className="ComposerBody-content">
            <ul className="ComposerBody-header">{listItems(this.headerItems().toArray())}</ul>
            <div className="ComposerBody-editor">
              {TextEditor.component({
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
      </div>
    );
  })
});
function textEditorF() {
  let text = document.getElementById("textarea1").value;
  if (text.length > 0) {
    document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon");
  } else {
    document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon");
  }
}
CardItem();
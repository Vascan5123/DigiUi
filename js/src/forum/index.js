import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import DiscussionPage from 'flarum/components/DiscussionPage';
import DiscussionsUserPage from 'flarum/components/DiscussionsUserPage';
import Button from 'flarum/components/Button';
import Navigation from 'flarum/components/Navigation';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

app.initializers.add('vascan/digi-ui', () => {
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
      <p class="Text_title_center_block_class"><span> What's new</span></p>)
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
  });

  /* extend(DiscussionPage.prototype, 'sidebarItems', function (items) { */
    // Stergerea butoanelor existente
  /*   if (items.has('controls')) {
      items.remove('controls');
    } */

    // Добавление кнопок выбора текста и изображений
   /*  items.add(
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
        onclick: modifyLayout.bind(this),
      },
        'Text transliterat'
      )
    ); */

/* 
    function imageOn() {
      let data = document.getElementsByClassName("PostStream-item")[0];
      data = document.getElementsByClassName("Post-body")[0]
      data = document.getElementsByTagName("img")
      for (let i = 0; i < data.length; i++) {
        data[i].style.display = "block";
      }
      console.log(data)
    }
    function chirilicaOn() {
      let data = document.getElementsByClassName("PostStream-item")[0];
      data = document.getElementsByClassName("Post-body")[0] */
      /* data = document.getElementsByTagName("img")
      for (let i = 0; i < data.length; i++) {
        data[i].style.display = "block";
      } */
    /*   console.log(data)
    } */






  /* }); */


});

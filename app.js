'use strict';

function Image(json) = {
  //attributes
    this.url = json.image_url;
    this.title = json.title;
    this.description = json.description;
    this.keyword = json.keyword;
    this.horns = json.horns;
    //elements
    this.element = $("<section class='image'></section>");
    this.element.append(`<h2>${this.title}</h2>`);
    this.element.append(`<img id=${this.title}-image src=${this.url}></img>`);
    this.element.append(`<p class='description'>${this.description}</p>`);

    grabElement() {
      return this.element;
      console.log(this.element);
    }
}

$(document).ready(() => {
  const images = [];
  const main = $('main');

  function render() {
    let keyword = $('#keywords').val();
    main.empty();
    console.log('element emptied');
    for (const img of images) {
      console.log(keyword);
      if (keyword !== 'default' && img.keyword === keyword) {
        main.append(img.grabElement());
      } else {
        main.append(img.grabElement());
      }
    }
  }
  render();
})

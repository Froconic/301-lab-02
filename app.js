'use strict';


const images = [];

//ensures the program runs after page loads
$(document).ready(() => {

  // globals to contain the necessary json information

  let keywords = [];

  // constructor function to create the objects inide the json file
  function Image(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;

    // creates the corresponding element for the object
    this.$element = $("<section class='image'></section>");
    this.$element.append(`<h2>${this.title}</h2>`);
    this.$element.append(`<img id=${this.title}-image src=${this.url}></img>`);
    this.$element.append(`<p class='description'>${this.description}</p>`);

    // method to grab the element for use later
    this.grabElement = function() {
      return this.element;
    };
  }

  // function to create objects from json data and push to images array
  // function addImages() {
  $.get('./data/page-1.json', info => {
    let $info = info;
    $info.forEach(function(object) {
      images.push(new Image(object.image_url, object.title, object.description, object.keyword, object.horns));
    });

    // renders images to page
    $info.forEach(function(object) {
      render(object);
    });
    console.table(images);
    images.forEach(function (object) {
      createList(images);
    })
  });
  // }

  // function to generate the necessary tags and add images to page
  function render(object) {
    // addImages();
    let $imageSection = $('<section></section>').attr('data-keyword', object.keyword);
    let $title = $('<h2></h2>').text(object.title);
    let $image = $('<img>').attr({ src: object.image_url, alt: object.description });
    let $horns = $('<p></p>').text(`# of horns: ${object.horns}`);
    $imageSection.append($title, $image, $horns);
    $('main').append($imageSection);
  }

  function createList(object) {
    let $option = $('<option></option>').text(object.keyword).val(object.keyword);
    $('select').append($option);
  }
});

'use strict';


const images = [];

//ensures the program runs after page loads
$(document).ready(() => {

  // globals to contain the necessary json information

  let keywords = [];

  // constructor function to create the objects inide the json file
  function Image(imageUrl, title, description, keyword, horns) {
    this.imageUrl = imageUrl;
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

  function addImages() {
    $.get('./data/page-1.json', info => {
      let $info = info;
      $info.forEach(function (element) {
          images.push(new Image(element.image_url, element.title, element.description, element.keyword, element.horns));
          console.table(images);
        });
    });
  }

  function render() {

  }
});





//
//
//   function render() {
//     addImages();
//     console.log(images);
//     let $keyword = $('#keywords');
//     $main.empty();
//     $.get('./data/page-1.json', images => {
//       for (const img of images) {
//         if (keyword !== 'default' && img.keyword === keyword) {
//           console.log('in if statement');
//           $main.append(img.grabElement);
//         } else {
//           console.log('in else statement');
//           $main.append(img.grabElement);
//         }
//       }
//     });
//
//   }
//
//   render();
//
// });

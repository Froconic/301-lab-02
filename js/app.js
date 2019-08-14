'use strict';
$(document).ready(function () {
  const imageArray = [];

  $.getJSON('data/page-1.json', function (data) {
    $.each(data, function (index, value) {
      imageArray.push(value);
    });
  });

  let key = [];

  for (let i = 0; i < imageArray.length; i++) {
    console.log('first for loop');
    for (var j in imageArray[i]) {
      if (j.indexOf(j) === -1) {
        key.push(j);
        console.log('key pushed');
      }
    }
  }
});

// function Image(item) {
//   this.imageUrl = 'image_url',
//   this.title = 'title',
//   this.description = 'description',
//   this.keyword = 'keyword',
//   this.horns = 'horns';
// }
//
// Image.all = [];
//
// console.log('Running');
// Image.prototype.read(function () {
//   $.get('data/page-1.json', function (data) {
//     $('#photo-template').html(data);
//     alert('Success')
//   },

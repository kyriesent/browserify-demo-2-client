client = require('./browserify-demo-2-client.js');
$ = require('jquery');

$(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()
    text = $('input[name=text]').val()
    client.send(text);
  })
})
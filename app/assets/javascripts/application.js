// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {


      $('.login_form_reload').on('click', function() {

        $('.login-form').css('display', 'block')
        $('.login-form').css('transition', '1s')
      });

      // This is an event handler to stop event propagation
      // To close window onclick on other parts besides the field

      $('.').on('click', function(){})


      $('.sidenav').on('mouseover', function(){
        // e.preventDefault()
        $('.sidenav').addClass('open');

      });

      $('.sidenav').on('mouseout', function(){
        $('.sidenav').removeClass('open');
      });

      $('.google-plus').on('click', function(){
         alert("This is working!!")
      });

      //These are the navigation links
      /******
        render content on click on the home page
        Using ajax calls to get data from the database
      */

      $('.user-icon').on('click', function(event){
        alert("This is also working !!!")
        event.preventDefault()

        $.ajax({
          url: $('.user-icon').attr('action'),
          method: 'GET',
          data: {},
          dataType: 'html'
        }).done(function(responseData){
          console.log(responseData);
        })
      });

      $('.youtube').on('click', function(){
        alert("This can also be working hey!!!")
      });

      $('.twitter').on('click', function(event){
        event.preventDefault()

        $.ajax({
          url: $(this).attr('href'),
          type: 'GET',
          dataType: 'html',
          data: {param1: 4}
        })
        .done(function(responseData) {
          console.log(responseData);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });


      });

      $('.facebook').on('click', function(){
        alert("This happens to be working!!")
      });

      $('.instagram').on('click', function(){
        alert("This happens to be working!!")
      });

});

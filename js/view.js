$('document').ready(function(){
  $('body').on("show.bs.collapse", ".qr-collapse", function(event){
    var title = angular.element(event.target).scope().title;
    console.log(event);
    $(event.target).qrcode({text:'https://api.titledb.com/v0/proxy/' + title.titleid});
  });

  $('body').on("hidden.bs.collapse", ".qr-collapse", function(event){
    $(event.target).empty();
  });

  $(document).arrive(".title", function() {
      var $newElem = $(this);
      $($newElem).children('.content').children('h1, p').truncate();
      //$($newElem).children().children('[data-toggle="tooltip"]').tooltip(); TODO: Fix tootltips
  });
});

document.addEventListener("DOMContentLoaded", function(){
  $('summary').click(function(){
    let content = document.getElementsByClassName('details__content');
    $(this).siblings(content).slideToggle();
    $('summary').not($(this)).siblings(content).slideUp();
  });
});
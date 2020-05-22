$(function() {
  $("ul li.nav-item.has-treeview a#dropdown").on('click', function(){
      $(this).parent().hasClass('menu-open') ? $(this).parent().removeClass('menu-open') : $(this).parent().addClass('menu-open')
  });
});

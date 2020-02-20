$(document).on('click', '.indicators', (event) => {
  let selection = $(event.currentTarget);

  $('.indicators').removeClass('active');
  selection.addClass('active');
});

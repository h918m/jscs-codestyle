function ItemsListView() {}

ItemsListView.prototype._removeFocusHandler = function(event) {
  var target = $(event.target);
  if ((!target.is('.td-content'))) {
    this.blurAll();
  }
};
ItemsListView.prototype._mouseSortHandler = function(event, ui) {
  var tdControlsOffset = $('.td-controls-container').offset().top;

  ui.item.addClass('td-list-item-dragging');

  if (tdControlsOffset >= event.pageY) {
    ui.item.removeClass('td-list-item-dragging-out');
    ui.item.addClass('td-list-item-dragging-over');
  } else {
    ui.item.removeClass('td-list-item-dragging-over');
    ui.item.addClass('td-list-item-dragging-out');
  }

  try {
    this.findSelectedItem().blur();
  } catch (e) {}
};

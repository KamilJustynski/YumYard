import View from './View.js';
import previewViev from './previewViev.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewViev.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();

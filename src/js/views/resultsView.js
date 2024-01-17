import View from './View.js';
import previewViev from './previewViev.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewViev.render(result, false)).join('');
  }
}

export default new ResultsView();

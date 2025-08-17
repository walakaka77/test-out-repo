const path = require('path');

function renderWinePage(_req, res) {
  res.sendFile(path.join(process.cwd(), 'public', 'wine.html'));
}

module.exports = { renderWinePage };

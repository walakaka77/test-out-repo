const path = require('path');
const { buildUploadResult } = require('../services/fileService');

function renderForm(req, res) {
  // Serve a static HTML file for the form (keeps JS clean)
  res.sendFile(path.join(process.cwd(), 'public', 'upload.html'));
}

function handleUpload(req, res) {
  if (!req.file) return res.status(400).send('No file uploaded.');
  const result = buildUploadResult(req.file);
  res.status(201).json({ message: 'File uploaded', file: result });
}

module.exports = { renderForm, handleUpload };

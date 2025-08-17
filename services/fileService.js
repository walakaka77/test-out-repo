// Keep this “pure” when possible so it’s easy to unit test.
function buildUploadResult(file) {
    // business rules could go here (validate type/size, generate db record, etc.)
    return {
      originalName: file.originalname,
      savedAs: file.filename,
      size: file.size,
      path: file.path,
    };
  }
  
  module.exports = { buildUploadResult };
  
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function slugify(text) {
  return text.toLowerCase().replace(/ /g, '-');
}

function paginate(array, page, perPage) {
  const start = (page - 1) * perPage;
  return array.slice(start, start + perPage);
}

function validateEmail(email) {
  return email.includes('@');
}

module.exports = { formatDate, slugify, paginate, validateEmail };

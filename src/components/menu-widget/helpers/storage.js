function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key)) || 'day';
  }
  localStorage.setItem(key, JSON.stringify(data));
  return key;
}

export default storage;

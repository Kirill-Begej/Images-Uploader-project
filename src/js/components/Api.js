export default class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  sendFiles(filesState) {
    const data = new FormData();
    filesState.forEach((item) => {
      data.append(item.name, item.file);
    });
    return this._request(this._baseUrl, {
      method: 'POST',
      body: data,
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}

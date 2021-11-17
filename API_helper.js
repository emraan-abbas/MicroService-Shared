const request = require("request");

module.exports = {

    GetAllNotes: function (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },

  createNote: function (data,url) {
    return new Promise((resolve, reject) => {
      request(url, { data:data,json:true}, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },

  GetNoteById: function (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },


  editNote: function (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },

  deleteNote: function (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },

};
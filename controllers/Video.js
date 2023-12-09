'use strict';

var utils = require('../utils/writer.js');
var Video = require('../service/VideoService');

module.exports.cloudStorageDelete = function cloudStorageDelete (req, res, next, videoId) {
  Video.cloudStorageDelete(videoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStoragePlay = function cloudStoragePlay (req, res, next, videoId) {
  Video.cloudStoragePlay(videoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageResume = function cloudStorageResume (req, res, next, videoId, time) {
  Video.cloudStorageResume(videoId, time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageSaveParameters = function cloudStorageSaveParameters (req, res, next, videoId, quality, speed) {
  Video.cloudStorageSaveParameters(videoId, quality, speed)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageSearch = function cloudStorageSearch (req, res, next, title) {
  Video.cloudStorageSearch(title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageStop = function cloudStorageStop (req, res, next, videoId) {
  Video.cloudStorageStop(videoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageUpdate = function cloudStorageUpdate (req, res, next, videoId, title, description) {
  Video.cloudStorageUpdate(videoId, title, description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cloudStorageUpload = function cloudStorageUpload (req, res, next, body) {
  Video.cloudStorageUpload(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

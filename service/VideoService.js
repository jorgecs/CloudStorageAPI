'use strict';


/**
 * Delete video
 *
 * videoId String video to delete
 * returns APIResponse
 **/
exports.cloudStorageDelete = function(videoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "message": "Video deleted succesfully!"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Play video
 *
 * videoId String video to play
 * returns Video
 **/
exports.cloudStoragePlay = function(videoId) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: "First video",
      videoId: videoId,
      title: "Hello world"
    }
    resolve(Video)
  });
}


/**
 * Resume video
 *
 * videoId String video to resume
 * time String time to resume in milliseconds
 * returns Video
 **/
exports.cloudStorageResume = function(videoId,time) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: "First video",
      videoId: videoId,
      title: "Hello world"
    }
    resolve(Video)
  });
}


/**
 * Save video parameters
 *
 * videoId String video to save
 * quality Integer quality of the video
 * speed BigDecimal speed of the video
 * returns Video
 **/
exports.cloudStorageSaveParameters = function(videoId,quality,speed) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: "First video",
      videoId: videoId,
      title: "Hello world"
    }
    resolve(Video)
  });
}


/**
 * Index and retrieve video
 *
 * title String video to index
 * returns Video
 **/
exports.cloudStorageSearch = function(title) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: "First video",
      videoId: (Math.floor(Math.random() * 9) + 1),
      title: title
    }
    resolve(Video)
  });
}


/**
 * Stop video
 *
 * videoId String video to stop
 * returns inline_response_200
 **/
exports.cloudStorageStop = function(videoId) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: "First video",
      videoId: videoId,
      title: "Hello world",
      time: Math.floor(Math.random() * 5000)
    }
    resolve(Video)
  });
}


/**
 * Configure video
 *
 * videoId String video to modify
 * title String title to modify
 * description String description to modify
 * returns Video
 **/
exports.cloudStorageUpdate = function(videoId,title,description) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: (Math.floor(Math.random() * 9) + 1),
      description: description || "First video",
      videoId: videoId,
      title: title || "Hello world"
    }
    resolve(Video)
  });
}


/**
 * Upload a stream to be saved as a video
 *
 * body Streaming 
 * returns Video
 **/
exports.cloudStorageUpload = function(body) {
  return new Promise(function(resolve, reject) {
    const Video = {
      owner: body.owner,
      description: body.description,
      videoId: body.streamingId,
      title: body.title
    }
    resolve(Video)
  });
}



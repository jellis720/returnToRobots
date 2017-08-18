let MongoClient = require('mongodb').MongoClient;

let status = null;

exports.connect = function(url, done){
  if(status) return done();

  MongoClient.connect(url, function(err, data){
    if (err) return done(err);
    status = data;
    done();
  })
};

exports.get = function(){
  return status;
};

exports.close = function(done) {
  if (status) {
    status.close(function(err, result) {
      status = null;
      state.mode = null;
      done(err);
    });
  }
};

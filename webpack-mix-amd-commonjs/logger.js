module.exports = Logger;

function Logger() {

}

Logger.prototype.info = function(msg) {
  console.log(msg);
};

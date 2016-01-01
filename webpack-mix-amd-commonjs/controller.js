module.exports = Controller;

function Controller(elm) {
  this.el = document.getElementById(elm);

  this.activate();
}

Controller.prototype.activate = function() {
  this.el.addEventListener('click', this.handleClick);
};

Controller.prototype.handleClick = function(e) {

  require(['./logger'], function(Logger) {

    var logger = new Logger();
    logger.info('Webpack rock!');

  });

};

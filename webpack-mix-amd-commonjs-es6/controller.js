export default class Controller {

  constructor(elm) {
    this.el = document.getElementById(elm);

    this.activate();
  }

  activate() {
    this.el.addEventListener('click', (e)=>{
      require(['./logger'], function(module) {

        let logger = new module.Logger();
        logger.info('Webpack rock!');

      });

    });
  }
}

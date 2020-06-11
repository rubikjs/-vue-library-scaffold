export default class Config {
    static #options = {
      zIndex: 10000,
      top: 0,
      height: '3px',
      color: '#42b983',
      startEasing: 'ease-out',
      startDuration: '10s',
      endEasing: 'ease-out',
      endDuration: '.25s'
    }

    static get options () {
      return this.#options
    }

    static set options (opt) {
      Object.assign(this.#options, opt)
    }
}

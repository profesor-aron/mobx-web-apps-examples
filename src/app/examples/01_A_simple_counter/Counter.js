import { observable } from 'mobx'

class Counter {

  @observable value

  constructor() {
    this.value = 1
  }

  update(quantity) {
    this.value += quantity
  }

}

export default Counter

'use babel';

// https://github.com/mark-hahn/anysyn-coffee-coffee

import SubAtom from 'sub-atom';

const log = console.log.bind(console);

class AnySynCoffee {
  
  get config () {
    return {
      skinnyArrow: {
        title:  'Convert "function" to "->"',
        type:   'boolean',
        default: true
      }
    }
  }

  activate () {
    log('---- Activate anysyn-coffee ----');
  }

  addSyntax () {
    log('coffee: addSyntax');
    return {
      name: 'coffee'
    }
  }

  deActivate () {
  }

  // ------------ Private --------------
  
}

export default new AnySynCoffee;

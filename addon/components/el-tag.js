import Component from '@ember/component';
import layout from '../templates/components/el-tag';
import {computed, get, set} from "@ember/object";


const whichTransitionEvent = function () {
  let t;
  let el = document.createElement('fakeelement');
  let transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  let animations = {
    'animation': 'animationend',
    'OAnimation': 'oanimationend',
    'MozAnimation': 'mozAnimationEnd',
    'WebkitAnimation': 'webkitAnimationEnd'
  };
  // this.$().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
};

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['el-tag'],

  classNameBindings: ['getClassName',
    'hit:is-hit',
    'isClosed:el-hidden',
  ],


  getClassName: computed('type', 'size', function () {

    let classNames = '';

    if (get(this, 'type')) {
      classNames += ` el-tag--${get(this, 'type')}`;
    }
    if (get(this, 'size')) {
      classNames += ` el-tag--${get(this, 'size')}`;
    }

    return classNames;
  }),

  isClosed: false,

  closable: false,
  type: '',
  hit: false,
  color: '',
  size: '',

  handleClose: null,


  actions: {
    handleClose() {
      // this.$().addClass('animated flipOutY');
      let e = this.element;

      let transitionEvent = whichTransitionEvent();
      e.addEventListener(transitionEvent, () => {
        set(this, 'isClosed', true);
        if (this.get('close')) {
          this.get('close')();
        }
      });


      e.classList.add('animated');
      e.classList.add('flipOutY');


      /*this.$().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        () => {
          set(this, 'isClosed', true);

          if (this.get('close')) {
            this.get('close')();
          }
        }
      );
      */

    }
  },



});

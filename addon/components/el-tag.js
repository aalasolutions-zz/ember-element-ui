import Component from '@ember/component';
import layout from '../templates/components/el-tag';
import {computed, get, set} from "@ember/object";

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

    if (get(this, 'type')) {classNames += ` el-tag--${get(this, 'type')}`;}
    if (get(this, 'size')) {classNames += ` el-tag--${get(this, 'size')}`;}

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
      this.$().addClass('animated flipOutY');
      this.$().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        () => {
          set(this, 'isClosed', true);

          if (this.get('close')) {
            this.get('close')();
          }
        }
      );


    }
  }


});

import Component from '@ember/component';
import layout from '../templates/components/el-button';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,
  tagName: 'button',


  classNames: ['el-button'],
  classNameBindings: ['getClassName',
    'loading:is-loading',
    'plain:is-plain',
    'round:is-round',
    'circle:is-circle',
  ],

  attributeBindings: ['disabled', 'autofocus'],


  disabled: false,
  autofocus: false,

  type: 'default',
  size: false, // false, medium, small, mini
  icon:  false,
  loading: false,
  plain: false,
  round: false,
  circle: false,


  getClassName: computed('type', 'size', 'disabled', 'autofocus', function () {

    let classNames = '';

    classNames += 'el-button--' + get(this, 'type');

    if(get(this, 'size')){classNames += ` el-button--${get(this, 'size')}`;}

    if(get(this, 'loading') || get(this, 'disabled') ){classNames += ` is-disabled`;}

    return classNames;
  }),


  showIcon: computed('icon', 'disabled', function(){
    return !!(get(this, 'icon') && !get(this, 'disabled'));
  }),


});

import Component from '@ember/component';
import {get, set} from '@ember/object';
import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/el-tooltip';

// todo: use debounce

export default Component.extend({

  // layout,

  tagName: '',

  openDelay: 0,
  disabled: false,
  manual: false,
  effect: 'dark',
  arrowOffset: 0,
  popperCLass: '',
  content: '',
  visibleArrow: true,
  transition: 'el-fade-in-linear',
  hideAfter: 0,

  html: true,
  placement: 'auto',
  title: '',

  didInsertElement() {
    this._super(...arguments);
    let parent = this.getParent(this);

    set(this, 'parent', parent);

  },

  didRender(){
    $(get(this, 'parent')).attr('data-original-title', get(this, 'title'))
      .tooltip({
        placement: get(this, 'placement'),
        html: true
      });
  },


  getParent(view) {
    if (get(view, 'tagName') === '') {
      // Beware: use of private API! :(
      if (Ember.ViewUtils && Ember.ViewUtils.getViewBounds) {
        return Ember.ViewUtils.getViewBounds(view).parentElement;
      } else {
        return view._renderNode.contextualElement;
      }
    } else {
      return get(view, 'element').parentNode;
    }
  }

});


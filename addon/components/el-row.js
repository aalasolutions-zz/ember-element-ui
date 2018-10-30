import Component from '@ember/component';
import layout from '../templates/components/el-row';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,
  gutter: 5, // todo: Add dynamic gutter classes
  justify: 'start',
  align: 'top',
  type: null,


  classNames: ['el-row'],
  classNameBindings: ['getClassName'],

  getClassName: computed('justify', 'align', function(){


    let classNames = '';

    if(get(this, 'justify') !== 'start'){
      classNames += ` is-justify-${get(this, 'justify')}`;
    }

    if(get(this, 'align') !== 'top'){
      classNames += ` is-align-${get(this, 'align')}`;
    }
    if(get(this, 'type') === 'flex'){
      classNames += ` el-row--flex}`;
    }


    return classNames;

  }),

});

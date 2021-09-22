import Component from '@ember/component';
import layout from '../templates/components/el-badge';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,

  classNames: ['el-badge'],
  value: null,
  max: null,
  isDot: false,
  hidden: false,
  type: 'primary',

  isShow: computed('hidden', 'content', 'isDot', function(){
    return !get(this, 'hidden') && (get(this, 'content') || get(this, 'content') === 0 || get(this, 'isDot'));
  }),

  init(){
    this._super();

    let type = get(this,'type');

    if(['primary', 'success', 'warning', 'info', 'danger'].indexOf(type) === -1){
      // console.error('Provided type for el-badge is not valid. Please select one from [\'primary\', \'success\', \'warning\', \'info\', \'danger\']');
    }

    // set(this, 'value')
  },

  content: computed('isDot', 'value', 'max', function(){
    if(get(this, 'isDot')) return;
    const value = get(this, 'value');
    const max = get(this, 'max');

    if(typeof value === 'number' && typeof max === 'number'){
      return max < value ? `${max}+` : value;
    }

    return value;
  }),
});

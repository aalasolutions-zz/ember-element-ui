import Component from '@glimmer/component';
import {computed} from "@ember/object";

import {htmlSafe} from '@ember/template';
import {tracked} from "@glimmer/tracking";

export default class ElBadgeComponent extends Component {

  // layout,

  // classNames: ['el-badge'],
  /* value: null,
   max: null,
   isDot: false,
   hidden: false,
   type: 'primary',*/

  @computed('args.{hidden,content,isDot}')
  get isShow() {
    return !this.args.hidden && (this.args.content || this.args.content === 0 || this.args.isDot);
  }

  /* init(){
     this._super();

     let type = get(this,'type');

     if(['primary', 'success', 'warning', 'info', 'danger'].indexOf(type) === -1){
       // console.error('Provided type for el-badge is not valid. Please select one from [\'primary\', \'success\', \'warning\', \'info\', \'danger\']');
     }

     // set(this, 'value')
   }*/

  @computed('args.{isDot,value,max}')
  get content() {
    if (this.args.isDot) return;

    const value = this.args.value;
    const max = this.args.max;

    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : value;
    }

    return value;
  }
}

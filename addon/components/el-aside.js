import Component from '@glimmer/component';
// import layout from '../templates/components/el-aside';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';
import {tracked} from "@glimmer/tracking";

export default class ElAsideComponent extends Component {
  // layout,
  // tagName: 'aside',
  // classNames: ['el-aside', 'el-animate'],
  // width: '300px',
  @tracked collapse = false;

  // attributeBindings: ['style'],

  @computed('args.width', 'collapse')
  get style() {
    let width = this.collapse ? '65px' : this.args.width || '300px' ;
    return htmlSafe('width: ' + width);
  }

}

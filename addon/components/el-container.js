import Component from '@glimmer/component';
// import layout from '../templates/components/el-container';
import {computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

export default class ElContainerComponent extends Component {
  // layout,
  // tagName: 'section',

  @tracked hasChildToMakeVertical = false;
  // direction: null,
  // classNames: ['el-container'],
  // classNameBindings: ['getClassName'],
  //
  // hasChildToMakeVertical: false,

  @computed('args.direction', 'hasChildToMakeVertical')
  get getClassName() {
    return (this.args.direction === 'vertical' || this.hasChildToMakeVertical) ? 'is-vertical' : "";
  }

  // getClassName: computed('direction', 'hasChildToMakeVertical', function () {
  //   return  (get(this, 'direction') === 'vertical' || get(this, 'hasChildToMakeVertical')) ? 'is-vertical' : "";
  // }),

  onInsert(element, args) {
    // todo: check this one
    const child = element.children;
    let foundElements = false;
    for (let i = 0; i < child.length; i++) {
      let c = child[i];
      if (c.dataset.component === 'el-header' || c.dataset.component === 'el-footer') {
        foundElements = true;
        break;
      }
    }
    if (foundElements) {
      let _this = args[0];
      _this.hasChildToMakeVertical = foundElements;
    }

  }
};

import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default class ElRowComponent extends Component {
  // gutter: null, // todo: Add dynamic gutter classes

  @computed('args.gutter')
  get style() {
    if (this.args.gutter) {
      let gutter = (this.args.gutter / 2) + 'px';
      return htmlSafe(`margin-left: -${gutter}; margin-right: -${gutter}`);
    }
    return htmlSafe("");
  }

  @computed('args.{justify,align,type}')
  get className() {

    let classNames = 'el-row';

    if ((this.args.justify || 'start') !== 'start') {
      classNames += ` is-justify-${this.args.justify}`;
    }

    if ((this.args.align || 'top') !== 'top') {
      classNames += ` is-align-${this.args.align}`;
    }

    if (this.args.type === 'flex') {
      classNames += ` el-row--flex`;
    }

    return htmlSafe(classNames);
  }
}

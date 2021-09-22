import Component from '@glimmer/component';

import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default class ElColComponent extends Component {
  // span: 24,
  // offset: null,
  // pull: null,
  // push: null,
  // xs: null,
  // sm: null,
  // md: null,
  // lg: null,
  // xl: null,
  //
  // gutter: null,
  //
  // classNames: ['el-col'],
  // classNameBindings: ['getClassName'],
  // attributeBindings: ['style'],

  @computed('args.gutter')
  get style() {
    if (this.args.gutter) {
      let gutter = (this.args.gutter / 2) + 'px';
      return htmlSafe(`padding-left: ${gutter}; padding-right: ${gutter}`);
    }
    return htmlSafe("");
  }


  @computed('args.{span,offset,pull,push,xs,sm,md,lg,xl}')
  get className() {

    let classList = [];
    classList.push('el-col');
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this.args[prop] || this.args[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `el-col-${prop}-${this.args[prop]}`
            : `el-col-${this.args[prop]}`
        );
      }
    });


    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this.args[size] === 'number') {
        classList.push(`el-col-${size}-${this.args[size]}`);
      } else if (this.args[size] && typeof this.args[size] === 'object') {
        let props = this.args[size];


        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${props[prop]}`
              : `el-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return htmlSafe(classList.join(' '));

  }

}

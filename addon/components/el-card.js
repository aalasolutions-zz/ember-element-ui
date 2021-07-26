import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {tracked} from "@glimmer/tracking";

export default class ElCardComponent extends Component {

  @tracked box = false;


  @computed('args.{shadow,box}')
  get className() {
    let classNames = ` is-${(this.args.shadow || 'always')}-shadow`;
    if (this.args.box)
      classNames += ` box-card`;

    return classNames;
  }

}

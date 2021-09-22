import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default class ElCardHeaderComponent extends Component {

  @computed get style() {
    return htmlSafe(this.args.bodyStyle);
  }

};

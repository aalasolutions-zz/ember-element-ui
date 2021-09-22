import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default class ElCardBodyComponent extends Component {


  @computed get style() {
    return htmlSafe(this.args.bodyStyle);
  }

}

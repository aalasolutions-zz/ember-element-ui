import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default class ElFooterComponent extends Component {
  @computed('args.height')
  get style() {
    return htmlSafe('height: ' + (this.args.height || '60px'));
  }
}

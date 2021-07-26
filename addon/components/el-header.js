import Component from '@glimmer/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/template';

export default class ElHeaderComponent extends Component {


  @computed('deviceList')
  get style() {
    return htmlSafe('height: ' + this.args.height || '60px');
  }

};

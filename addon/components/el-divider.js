import Component from '@glimmer/component';
import { computed } from "@ember/object";

export default class ElDividerComponent extends Component {

  @computed('args.contentPosition')
  get _contentPosition () {
    return this.args.contentPosition || "center";
  }

  @computed('args.direction')
  get _direction(){
    return this.args.direction || 'horizontal';
  }

  @computed('_direction')
  get className() {
    return 'el-divider--' + this._direction ;
  }
}

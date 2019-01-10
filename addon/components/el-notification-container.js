import Component from '@ember/component';
import layout from '../templates/components/el-notification-container';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';

export default Component.extend({
  layout,
  messagesService: service('message'),

  init() {
    this._super();
    set(this, 'messages', get(this, 'messagesService').messages);
  }
});

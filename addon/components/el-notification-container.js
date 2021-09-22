import Component from '@ember/component';
import layout from '../templates/components/el-notification-container';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';

export default Component.extend({
  layout,
  messagesService: service('message'),
  messagesBoxService: service('message-box'),
  id: 'ember-element-wormhole',
  attributeBindings: [
    'id'
  ],
  init() {
    this._super();
    set(this, 'messages', get(this, 'messagesService').messages);
    set(this, 'messagesBox', get(this, 'messagesBoxService').messages);
  },

});

import Component from '@glimmer/component';
// import layout from './el-notification-container';
import {inject as service} from '@ember/service';
// import {get, set} from '@ember/object';


export default class ElNotificationContainerComponent extends Component {
  @service message;
  @service messageBox;

  constructor(owner, args) {
    super(owner, args);
    this.messages = this.message.messages;
    this.messagesBox = this.messageBox.messages;
  }

  //
  // layout,
  // messagesService: service('message'),
  // messagesBoxService: service('message-box'),
  // init() {
  //   this._super();
  //   set(this, 'messages', get(this, 'messagesService').messages);
  //   set(this, 'messagesBox', get(this, 'messagesBoxService').messages);
  // },

}

import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  columns: [
    { name: `Attribute`, valuePath: `attribute` },
    { name: `Description`, valuePath: `desc` },
    { name: `Type`, valuePath: `type` },
    { name: `Accepted Values`, valuePath: `val` },
    { name: `Default`, valuePath: `def` },
  ],
  rows: [
    {
      attribute: 'message',
      desc: 'message text',
      type: 'string',
      val: '-',
      def: '-',
    },
    {
      attribute: 'type',
      desc: 'message type',
      type: 'string',
      val: 'success/warning/info/error',
      def: 'info',
    },
    {
      attribute: 'iconClass',
      desc: "custom icon's class, overrides type",
      type: 'string',
      val: '-',
      def: '-',
    },
    // {attribute: '', desc: "", type: "boolean", val: '-', def: 'false'},
    {
      attribute: 'customClass',
      desc: 'custom class name for Message',
      type: 'string',
      val: '-',
      def: '-',
    },
    {
      attribute: 'duration',
      desc: 'display duration, millisecond. If set to 0, it will not turn off automatically',
      type: 'number',
      val: '-',
      def: '3000',
    },
    {
      attribute: 'showClose',
      desc: 'whether to show a close button',
      type: 'boolean',
      val: '-',
      def: 'false',
    },
    {
      attribute: 'center',
      desc: 'whether to center the text',
      type: 'boolean',
      val: '-',
      def: 'false',
    },
    {
      attribute: 'onClose',
      desc: 'callback function when closed with the message instance as the parameter',
      type: 'function',
      val: '-',
      def: '-',
    },

    // {attribute: '', desc: "", type: "", val: '', def: ''},
  ],

  message: service(),

  actions: {
    open() {
      this.get('message').info('This is a message.');
    },
    open2() {
      this.get('message').success('Congrats, this is a success message.');
    },
    open3() {
      this.get('message').warning('Warning, this is a warning message.', {
        showClose: true,
        autoClear: false,
      });
    },
    open4() {
      this.get('message').error('Oops, this is a error message.', {
        showClose: true,
        autoClear: false,
      });
    },
    open5() {
      this.get('message').info('This is a message.', {
        showClose: true,
        autoClear: false,
      });
    },
    open6() {
      this.get('message').success('Congrats, this is a success message.', {
        showClose: true,
        autoClear: false,
      });
    },
    open7() {
      this.get('message').warning('Warning, this is a warning message.', {
        showClose: true,
        autoClear: false,
      });
    },
    open8() {
      this.get('message').error('Oops, this is a error message.', {
        showClose: true,
        autoClear: false,
      });
    },
    openCenter() {
      this.get('message').info('Center Text', {
        center: true,
      });
    },
  },
});

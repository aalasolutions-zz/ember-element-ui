import Component from '@ember/component';
import layout from '../templates/components/el-alert';
import {computed, get, set} from "@ember/object";


export default Component.extend({
  layout,

  TYPE_CLASSES_MAP: null,

  classNames: ['el-alert'],
  classNameBindings: ['typeClass',
    'center:is-center',
    'isClosed:el-hidden',
  ],

  attributeBindings: ['role'],

  role: 'alert',

  title: '',
  description: '',
  type: 'info',
  closable: true,
  closeText: '',
  showIcon: false,
  center: false,
  isClosed: false,

  init() {
    this._super();
    set(this,
      'TYPE_CLASSES_MAP', {
        'success': 'el-icon-success',
        'warning': 'el-icon-warning',
        'error': 'el-icon-error'
      }
    )
  },

  typeClass: computed('type', function () {
    return `el-alert--${ get(this, 'type') }`;
  }),
  iconClass: computed('type', function () {
    return get(this, 'TYPE_CLASSES_MAP')[get(this, 'type')] || 'el-icon-info';
  }),
  isBigIcon: computed('description', function () {
    return get(this, 'description') !== '' ? 'is-big' : '';
  }),
  isBoldTitle: computed('description', function () {
    return get(this, 'description') !== '' ? 'is-bold' : '';

  }),

  actions: {
    close() {

      this.$().addClass('animated fadeOut');
      this.$().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        () => {
          set(this, 'isClosed', true);
          if (this.get('action')) {
            this.get('action')();
          }
        }
      );



    }
  }

});

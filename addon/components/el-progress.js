import Component from '@ember/component';
import layout from '../templates/components/el-progress';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,
  classNames: ['el-progress'],

  classNameBindings: ['getClassName',
    'hit:is-hit',
  ],




  attributeBindings: ['role'],
  role: "progressbar",

  percentage: 0,
  type: 'line',
  strokeWidth: 6,
  textInside: false,
  status: null,
  color: '',
  width: 126,
  showText: true,


  iconClass: computed('line', 'status', function() {
    if (get(this, 'type') === 'line') {
      return get(this, 'status') === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
    } else {
      return get(this, 'status') === 'success' ? 'el-icon-check' : 'el-icon-close';
    }
  }),

  relativeStrokeWidth: computed('strokeWidth', function(){
    return (get(this, 'strokeWidth') / this.width * 100).toFixed(1);

  }),

  trackPath: computed('relativeStrokeWidth', function(){
    const radius = parseInt(50 - parseFloat(get(this,'relativeStrokeWidth')) / 2, 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;

  }),

  perimeter: computed('relativeStrokeWidth', function() {
    const radius = 50 - parseFloat(get(this,'relativeStrokeWidth')) / 2;
    return 2 * Math.PI * radius;
  }),


  circlePathStyle: computed('perimeter', 'percentage', function() {
    const perimeter = get(this, 'perimeter');
    return {
      strokeDasharray: `${perimeter}px,${perimeter}px`,
      strokeDashoffset: (1 - get(this, 'percentage') / 100) * perimeter + 'px',
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    };
  }),


  stroke: computed('color', 'status', function() {
    let ret;
    if (get(this, 'color')) {
      ret = get(this, 'color');
    } else {
      switch (get(this, 'status')) {
        case 'success':
          ret = '#13ce66';
          break;
        case 'exception':
          ret = '#ff4949';
          break;
        default:
          ret = '#20a0ff';
      }
    }
    return ret;
  }),

  getClassName: computed('type', 'status', 'showText', 'textInside', function () {

    let classNames = '';

    if (get(this, 'type')) {
      classNames += ` el-progress--${get(this, 'type')}`;
    }
    if (get(this, 'status')) {
      classNames += ` is-${get(this, 'status')}`;
    } else {
      if (!get(this, 'showText')) {
        classNames += ` el-progress--without-text`;
      }
      if (get(this, 'textInside')) {
        classNames += ` el-progress--text-inside`;
      }
    }

    return classNames;
  }),


  barStyle: computed('percentage', 'color', function(){
    const style = {};
    style.width = get(this, 'percentage') + '%';
    style.backgroundColor = get(this, 'color');
    return style;
  }),

  progressTextSize: computed('type', 'strokeWidth', 'width', function(){
    return get(this, 'type') === 'line'
      ? 12 + get(this,'strokeWidth') * 0.4
      : get(this, 'width') * 0.111111 + 2 ;
  }),


  showTextInside: computed.and('showText', 'textInside'),
  showStatus: computed.not('status'),

  isTypeLine: computed.equal('type', 'line'),
  isTypeCircle: computed.equal('type', 'line'),

  progressText: computed('textInside', 'showText', function(){
    return !get(this, 'textInside') && get(this, 'showText');
  }),




});

import Route from '@ember/routing/route';
import {later} from '@ember/runloop';

export default Route.extend({
  actions: {
    didTransition() {
      later(this, () => {
        Prism.highlightAll();
      }, 20);
    }
  }
});


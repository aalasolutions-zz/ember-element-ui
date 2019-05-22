import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      later(this, () => {
        Prism.highlightAll();
      }, 100);
    }
  }
});

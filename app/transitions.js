export default function(){
  // Add your transitions here, like:
    this.transition(
      this.hasClass('menu-opened'),
      // this.toRoute('people.detail'),
      this.toValue(true),
      this.use('toDown'),
      this.reverse('toUp')
    );
}

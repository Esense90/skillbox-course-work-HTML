const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  shouldSortItems: true,
});
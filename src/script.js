function toggleClass(el, target) {
  el.classList.toggle('is-active');
  const $target = document.getElementById(target);
  $target.classList.toggle('is-active');
}

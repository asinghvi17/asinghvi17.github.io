async function loadTemplate(tag) {
  var request = await fetch('templates/' + tag + '.html')
  for (let content of document.getElementsByTagName(tag))
    {
      content.outerHTML = await request.text();
    }
}

const tags = ['navbar', 'footer', 'home', 'research', 'code']

tags.forEach(loadTemplate)

function toggleClass(el, target) {
  el.classList.toggle('is-active');
  const $target = document.getElementById(target);
  $target.classList.toggle('is-active');
}

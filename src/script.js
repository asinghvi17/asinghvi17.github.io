var navbarHTML = `
<nav class="navbar navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="index.html">
        <span class="icon has-text-primary">
          <span class="fa fa-home fa-2x"></span>
        </span>
      </a>
      <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <span class="icon has-text-primary">
            <span class="fa fa-book"></span>
          </span>
          <span>Research</span>
        </a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="https://piever.github.io/simpleblog/">
          <span class="icon has-text-primary">
            <span class="fa fa-rss"></span>
          </span>
          <span>Blog</span>
        </a>
        <a class="navbar-item" href="https://github.com/piever">
          <span class="icon has-text-primary">
            <span class="fab fa-github"></span>
          </span>
          <span>Github</span>
        </a>
      </div>
    </div>
  </div>
</nav>
`

var viewModel = {
    navbar: ko.observable(navbarHTML) // Initially blank
};

ko.applyBindings(viewModel);

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

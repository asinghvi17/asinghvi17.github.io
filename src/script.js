var navbarHTML = `
<nav class="navbar navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a role="button" data-bind="css: {'is-active': burgerActive()}, click: toggleBurger" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div data-bind="css: {'is-active': burgerActive()}" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="index.html">
          <span class="icon has-text-primary">
            <span class="fa fa-home"></span>
          </span>
          <span>Home</span>
        </a>
        <a class="navbar-item" href="research.html">
          <span class="icon has-text-primary">
            <span class="fa fa-book"></span>
          </span>
          <span>Research</span>
        </a>
        <a class="navbar-item" href="code.html">
          <span class="icon has-text-primary">
            <span class="fa fa-code"></span>
          </span>
          <span>Code</span>
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
ko.components.register('navbar', {
    viewModel: function() {
        this.burgerActive = ko.observable(false);
        this.toggleBurger = function () {
            var current = this.burgerActive();
            this.burgerActive(!current);
        }
    },
    template: navbarHTML
});

const footerHTML = `
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      Website created with <strong>Bulma</strong> and <strong>Knockout</strong>. 
    </p>
  </div>
</footer>
`

ko.components.register('footer', {
    template: footerHTML
});
 
ko.applyBindings();

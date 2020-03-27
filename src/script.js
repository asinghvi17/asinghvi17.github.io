const navbarHTML = `
<nav class="navbar navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a role="button" onclick="toggleClass(this, 'navMenu')" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">
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

const navbars = document.getElementsByTagName('navbar');
for (let el of navbars) { el.outerHTML = navbarHTML;}

const footerHTML = `
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      Website created with <strong>Bulma</strong>.
    </p>
  </div>
</footer>
`

const footers = document.getElementsByTagName('footer');
for (let el of footers) { el.outerHTML = footerHTML;}

function toggleClass(el, target) {
  el.classList.toggle('is-active');
  const $target = document.getElementById(target);
  $target.classList.toggle('is-active');
}

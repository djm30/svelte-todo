<div class="outer-container">
  <div class="container">
    <slot />
  </div>
</div>

<style>
  .outer-container {
    margin: 20px 20px;
  }

  .container {
    max-width: 1440px;
    margin: auto;
  }

  @media screen and (min-width: 1000px) {
    .outer-container {
      margin: 20px 140px;
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    .outer-container {
      margin: 20px 200px;
      display: block;
    }
  }

  @media screen and (min-width: 1400px) {
    .outer-container {
      margin: 20px 240px;
      display: block;
    }
  }
</style>

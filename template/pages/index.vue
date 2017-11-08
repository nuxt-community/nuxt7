<template>
  <f7-page>
    <f7-navbar title="Nuxt7 Project">
      <f7-nav-right>
        <a class="link icon-only searchbar-enable" data-searchbar=".searchbar-components">
          <i class="icon f7-icons ios-only">search_strong</i>
          <i class="icon material-icons md-only">search</i>
        </a>
      </f7-nav-right>
      <form data-search-container=".components-list" data-search-in="a" class="searchbar searchbar-expandable searchbar-components searchbar-init">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" placeholder="Search components"/>
            <i class="searchbar-icon"></i>
            <span class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button">Cancel</span>
        </div>
      </form>
    </f7-navbar>

    <f7-block-title class="searchbar-found">About</f7-block-title>

    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {

}
</script>

<template>
  <header class="app-header">
    <nav>
      <router-link to="/">{{ $T('basic/link-main') }}</router-link>
      <router-link to="/about">{{ $T('basic/link-about') }}</router-link>
      <router-link to="/games">{{ $T('basic/link-games') }}</router-link>
    </nav>

    <LangSwitcher/>
  </header>
</template>

<script>
import LangSwitcher from '@layout/components/LangSwitcher'

export default {
  name: 'AppHeader',
  components: {
    LangSwitcher,
  },
}
</script>

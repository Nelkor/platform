<template>
  <div id="app">
    <AppHeader/>
    <PagesEntry/>
  </div>
</template>

<script>
import AppHeader from '@layout/components/AppHeader'
import PagesEntry from '@/modules/entries/PagesEntry'

export default {
  name: 'App',
  components: {
    AppHeader,
    PagesEntry,
  },
}
</script>

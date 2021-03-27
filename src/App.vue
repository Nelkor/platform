<template>
  <div id="app">
    <PopUp/>
    <AppHeader/>
    <PagesEntry/>
  </div>
</template>

<script>
import PopUp from '@popup/PopUp'
import AppHeader from '@layout/components/AppHeader'
import PagesEntry from '@pages/PagesEntry'

export default {
  name: 'App',
  components: {
    PopUp,
    AppHeader,
    PagesEntry,
  },
}
</script>

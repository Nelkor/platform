<template>
  <header class="app-header">
    <div class="greeter">{{ $T('basic/hello') }}</div>

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

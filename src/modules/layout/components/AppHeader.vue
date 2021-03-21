<template>
  <header class="add-header">
    <label>
      <select
        v-model="selectedLang"
        :disabled="langIsChanging"
      >
        <option
          v-for="(lang, key) in $options.languages"
          :key="key"
          :value="key"
        >{{ lang.name }}</option>
      </select>
    </label>
  </header>
</template>

<script>
import { languages } from '@resources/languages'
import { changeLang } from '@resources/lang-helper'

export default {
  name: 'AppHeader',
  languages,
  data() {
    return {
      selectedLang: this.$store.state.lang.currentLang,
    }
  },
  computed: {
    langIsChanging() {
      return Boolean(this.$store.state.lang.changingFor)
    },
  },
  watch: {
    async selectedLang(value) {
      await changeLang(value)
    },
  },
}
</script>

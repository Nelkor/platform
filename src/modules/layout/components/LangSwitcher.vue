<template>
  <label class="lang-switcher">
    <span>{{ $T('basic/choose-lang') }}</span>

    <select
      v-model="selectedLang"
      :disabled="langIsChanging"
    >
      <option
        v-for="(lang, key) in $options.languages"
        :key="key"
        :value="key"
        :dir="lang.rtl ? 'rtl' : 'ltr'"
      >{{ lang.name }}</option>
    </select>
  </label>
</template>

<script>
import { languages } from '@resources/languages'
import { changeLang } from '@resources/lang-helper'

export default {
  name: 'LangSwitcher',
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

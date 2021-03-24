<template>
  <div class="router-entry">
    <component :is="component"/>
  </div>
</template>

<script>
import { loadView } from '@resources/preload'

export default {
  name: 'PagesEntry',
  data() {
    return {
      component: null,
    }
  },
  computed: {
    view() {
      return this.$route.path.split('/')[1] || 'root'
    },
  },
  watch: {
    view: {
      immediate: true,
      handler() {
        this.registerPage()
      },
    },
  },
  methods: {
    registerPage() {
      import('@pages/' + this.view + '/index.js')
        .then(async view => {
          this.component = null
          this.component = await loadView(view)
        })
        .catch(() => {
          this.$router.replace('/')
        })
    },
  },
}
</script>

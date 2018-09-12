<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Start from './views/Start'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Start
  }{{/router}}
}
</script>

<style lang="scss">
@import "styles/global_styles.scss";

</style>

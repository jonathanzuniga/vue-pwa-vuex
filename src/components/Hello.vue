<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

    <div>
      <div>{{count}}</div>
      <div>{{sheep}}</div>
      <!--<button @click="$store.commit('increment')">Inc</button>-->
      <!--<button @click="$store.commit('decrement')">Dec</button>-->
      <button @click="increment">Inc</button>
      <button @click="decrement">Dec</button>
    </div>
    <sample></sample>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import Sample from './Sample.vue';

  export default {
    name: 'hello',
    components: {
      Sample
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    computed: {
//      count() {
//        return this.$store.state.count;
//      }

//      ...mapState({
//        count: state => state.count
//      })

//      ...mapState({
//        count: 'count'
//      })

      ...mapState([
        'count'
      ]),

      ...mapGetters([
        'sheep'
      ])
    },
    methods: {
      ...mapMutations([
//        'increment',
        'decrement'
      ]),
      ...mapActions([
        'increment'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>

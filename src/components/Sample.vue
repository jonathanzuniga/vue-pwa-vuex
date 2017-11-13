<template>
  <div class="hello">
    <h3>Sample</h3>
    <div>
      <div>{{count}}</div>
      <div>{{sheep}}</div>
      <!--<button @click="$store.commit('increment')">Inc</button>-->
      <!--<button @click="$store.commit('decrement')">Dec</button>-->
      <button @click="increment">Inc</button>
      <button @click="decrement">Dec</button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'sample',
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

      ...mapState('moduleA', [
        'count'
      ]),

      ...mapGetters('moduleA', [
        'sheep'
      ])
    },
    methods: {
      ...mapMutations('moduleA', [
//        'increment',
        'decrement'
      ]),
      ...mapActions('moduleA', [
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

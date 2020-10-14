
export default {
  name: 'car',
  components: {},
  props: [],
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  watch: {
    $route(to) {
      this.id = to.params['id'];
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    Back() {
      this.$router.push('/cars')
    }
  }
}



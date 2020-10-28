export default {
    name: 'car',
    components: {},
    props: [],
    data() {
        return {
            // id: this.$router.currentRoute.params['id']  $router.currentRoute == $route
            id: this.$route.params['id']
        }
    },
    watch: {
        $route(to) {
            this.id = to.params['id'];
        }
    },
    beforeRouteLeave(to, from, next) {
        console.log('Leave')
        if (window.confirm('Are u want leave?')) {
            next()
        } else {
            next(false)
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        Back() {
            this.$router.push('/cars')
        }
    }
}



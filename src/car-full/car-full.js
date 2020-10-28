export default {
    name: 'car-full',
    components: {},
    props: [],
    data() {
        return {}
    },
    computed: {
        year() {
            return this.$route.query.year
        },
        name() {
            return this.$route.query.name
        }
    },
    beforeRouteEnter(to, from, next) {
        // console.log('123', to, from, next)
        next()
    },
    mounted() {

    },
    methods: {}
}



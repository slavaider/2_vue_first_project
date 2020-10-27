import OnOff from '../../on_off/on_off'

export default {
    name: 'src-home-page',
    data() {
        return {
            age: 20,
            text: '123',
            checkedValue: [],
            radio_checkedValue: '',
            social: 'instagram',
            social_list: ['vk', 'instagram', 'facebook'],
            switched: true
        }
    },
    watch: {
        age(value) {
            console.log(value, typeof value);
        }
    },
    components: {
        'on-off': OnOff
    },
    computed: {},
    mounted() {

    },
    methods: {}
}



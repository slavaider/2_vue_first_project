<template>
    <div class="on_off">
        <button :class="{active:value}"
                @click="onClick"
                type="button" class="btn btn-success mr-1">ON
        </button>
        <button :class="{active:!value}"
                @click="onClick"
                type="button" class="btn btn-danger">OFF
        </button>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onClick() {
                this.$emit('input', !this.value);
            }
        }
    };
</script>

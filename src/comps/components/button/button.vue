<template>
    <button
        class="xm__btn"
        @click="handleClick"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'xm__btn--'+type,
        {'is-plain': plain, 'is-round': round, 'is-long': long, 'xm__btn--block': block, 'no-radius': noRadius},
        iconClass
        ]"
        :disabled="disabled"
    >
        <i :class="icon" v-if="icon"></i>
        <i class="xm__icon--loading" v-if="loading && !icon"></i>
        <!-- <span><slot></slot></span> -->
        <slot></slot>
    </button>
</template>

<script>

export default {
  name: 'xm-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    long: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)// 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: {
    iconClass () {
      if (this.icon !== '') return 'xm__hasIconBtn'
    }
  }
}
</script>

<style scoped lang="scss">

</style>

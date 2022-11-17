<script lang="ts">
  import { computed, inject } from 'vue'
  const ELEMENT: {
    size?: number
  } = {}
  interface ElForm {
    disabled: boolean
  }
  interface ElFormItem {
    elFormItemSize: number
  }
  export default {
    name: 'ElButton',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      size: String,
      icon: {
        type: String,
        default: '',
      },
      nativeType: {
        type: String,
        default: 'button',
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean,
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      },
    },
    setup(props, ctx) {
      // inject
      const elForm = inject<ElForm>('elForm')
      const elFormItem = inject<ElFormItem>('elFormItem')

      // computed
      const _elFormItemSize = computed(() => {
        return (elFormItem || {}).elFormItemSize
      })
      const buttonSize = computed(() => {
        return props.size || _elFormItemSize.value || (ELEMENT || {}).size
      })
      const buttonDisabled = computed(() => {
        return props.disabled || (elForm || {}).disabled
      })

      // methods
      const handleClick = (e) => {
        ctx.emit('click', e)
      }

      return {
        buttonDisabled,
        buttonSize,
        _elFormItemSize,
        handleClick,
      }
    },
  }
</script>

<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

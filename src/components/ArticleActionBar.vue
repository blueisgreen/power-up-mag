<template>
  <div>
    <q-btn
      v-if="mode === 'list'"
      color="green"
      icon="add_circle"
      label="New Article"
      @click="() => emit('start-new-article')"
    />
    <q-btn
      v-if="mode === 'view'"
      color="primary"
      icon="edit"
      label="Edit"
      @click="() => emit('open-for-edit')"
    />
    <q-btn
      v-if="mode === 'edit' || mode === 'new'"
      color="secondary"
      icon="save"
      label="Save"
      @click="() => emit('save-draft')"
    />
    <q-btn
      v-if="mode === 'edit' || mode === 'new'"
      color="red"
      icon="cancel"
      label="Cancel"
      @click="() => emit('cancel-draft')"
    />
    <q-btn
      v-if="mode === 'view'"
      color="orange"
      icon="close"
      label="Close"
      @click="() => emit('close-article')"
    />
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'list',
    },
  },
  emits: [
    'start-new-article',
    'open-for-edit',
    'cancel-draft',
    'save-draft',
    'close-article',
  ],
  setup(props, { emit }) {
    return {
      emit,
    }
  },
}
</script>

<template>
  <div>{{ docName }}</div>
  <q-btn color="primary" icon="save" label="Save Content" />
  <q-editor
    v-model="editor"
    max-height="25rem"
    placeholder="--content goes here--"
    paragraph-tag="p"
    toolbar-push
    dark
    :toolbar="[
      ['left', 'center', 'right', 'justify'],
      ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
      ['hr', 'link'],
      [
        {
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
        },
        {
          label: $q.lang.editor.fontSize,
          icon: $q.iconSet.editor.fontSize,
          fixedLabel: true,
          fixedIcon: true,
          list: 'no-icons',
          options: [
            'size-1',
            'size-2',
            'size-3',
            'size-4',
            'size-5',
            'size-6',
            'size-7',
          ],
        },
        {
          label: $q.lang.editor.defaultFont,
          icon: $q.iconSet.editor.font,
          fixedIcon: true,
          list: 'no-icons',
          options: [
            'default_font',
            'arial',
            'arial_black',
            'comic_sans',
            'courier_new',
            'impact',
            'lucida_grande',
            'times_new_roman',
            'verdana',
          ],
        },
        'removeFormat',
      ],
      ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
      ['undo', 'redo'],
      ['viewsource'],
    ]"
    :fonts="{
      arial: 'Arial',
      arial_black: 'Arial Black',
      comic_sans: 'Comic Sans MS',
      courier_new: 'Courier New',
      impact: 'Impact',
      lucida_grande: 'Lucida Grande',
      times_new_roman: 'Times New Roman',
      verdana: 'Verdana',
    }"
  />
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    docName: {
      type: String,
      default: 'Your passage',
    },
    onSave: {
      type: Function,
      default: () => console.log('implement me'),
    },
  },
  setup() {
    const $q = useQuasar()
  },
  data() {
    return {
      editor: 'What say you?',
    }
  },
}
</script>

<style></style>

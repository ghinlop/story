<template lang="pug">
  .box
    table.table.table-hover
      thead.bg-grey_light
        tr
          th
            .checkbox
              label
                input(type='checkbox')
                span.checkbox-material
                  span.check
          th Name
          th Description
          th Slug
          th.text-center Posts
          th Actions
      tbody
        tr
          td
            .checkbox
              label
                input(type='checkbox')
                span.checkbox-material
                  span.check
          td Tin Tức
          td Chuyên mục cập nhật tin tức
          td tin-tuc
          td.text-center 1
          td
        tr
          td
            .checkbox
              label
                input(type='checkbox')
                span.checkbox-material
                  span.check
          td Tin Tức
          td Chuyên mục cập nhật tin tức
          td tin-tuc
          td.text-center 1
          td

</template>
<script>
export default {
  props: ["api"]
};
</script>

<template lang="pug">
    .box
        .d-flex.p-3.align-items-align
            a.btn.btn-sm.btn-primary.btn-material(href='#') New Post
            .flex-grow-1.text-right
            ul.nolist.d-inline-flex.text-center.v-setting_filter
                li.px-1
                a.shadow-hover(href='#')
                    span
                    i.mr-1.fi.fi-list-2
                    | All
                li.px-1
                a.shadow-hover(href='#')
                    span
                    i.mr-1.fi.fi-checkbox-active
                    | Public
                li.px-1
                a.shadow-hover(href='#')
                    span
                    i.mr-1.fi.fi-bookmark
                    | Private
                li.px-1
                a.shadow-hover(href='#')
                    span
                    i.mr-1.fi.fi-trash
                    | Trash
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
<style lang="scss" scoped>
.table{
    th, td{
        &:first-child{
            text-align: center;
        }
    }
}
.v-setting_filter{
    .badge{
        min-width: 80px;
        text-align: center;
        border-radius: 0;
    }
}
</style>

<script>
export default {

}
</script>

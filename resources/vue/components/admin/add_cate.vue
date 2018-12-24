<template lang="pug">
  .box.p-3
    form(action='', method='post')
      .form-group
        input.form-control(type='text', placeholder='Category Name', v-model='cate_name')
      .form-group
        input.form-control(type='text', placeholder='Slug Path', readonly='', v-model='slug')
      .row
        .col-md-3.col-4.pr-md-0
          .form-group
            input.form-control(type='number', placeholder='Order')
        .col-md-9.col-8
          .form-group
            select.form-control(name='', id='')
              option(value='0', disabled='', selected='') Select Category
              option(value='1') test 1
              option(value='2') test 2
      .form-group
        textarea.form-control(name='', id='', placeholder='Description')
      .row
        .col-8
          button.btn.btn-block.btn-info.btn-material(type='submit') Save
        .col-4
          a.btn.btn-block.btn-danger.btn-material(href='#', @click.prevent='reset()') Reset
</template>
<script>
export default {
  data() {
    return {
      cate_name: null
    };
  },
  computed: {
    slug: function() {
      if (this.cate_name) {
        let slug = this.cate_name.toLowerCase();
        slug = slug.replace(/\<script\>|\<\/script\>/gi, "");
        slug = slug.replace(/\.|\,|"|'|:|\/|\[|\]|\\|\}|\{|\(|\)|\+|\=|\_|\||\<|\>|\!|\*|\@|\#|\$|\%|\^|\&|\~|\`|\;|\?/gi, "-");
        slug = slug.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
        slug = slug.replace(/í|ì|ỉ|ĩ|ị/gi, "i");
        // Letter "d"
        slug = slug.replace(/đ/gi, "d");
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, "");
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, "-");
        return slug;
      }
    }
  },
  watch: {
    cate_name: function() {
      this.cate_name = this.cate_name.replace(/\<script\>|\<\/script\>/gi, "");
      return this.cate_name;
    }
  },
  methods:{
      reset(){
          this.cate_name = null
      }
  }
};
</script>


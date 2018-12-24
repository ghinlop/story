<template lang="pug">
    .container
        .row
            .col-md-8
                form(action="", method="post")
                    .form-group
                        input.form-control(placeholder="Post Title")
                        label.d-block
                            strong Slug
                            span
                    .form-group
                        textarea#post_content.form-control

            .col-md-4
</template>
<script>
import Quill from "quill";

export default {
  created() {
    $(document).ready(function() {
      new Quill("#post_content", {
        theme: "snow"
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@import '~quill/dist/quill.core.css';
</style>

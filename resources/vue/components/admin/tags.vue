<template lang="pug">
        .box.p-3
            .form-group
                input.form-control(placeholder="Enter tag search or create", v-model="filter_content", @keyup.188.prevent="tagPush()", @keyup.enter.prevent="tagPush()", @keydown.9.prevent="tagPush()")
                label.alert.alert-primary.d-block.rounded-0.mt-2
                    | Tự động hiển thị các Tag trùng khớp. Nếu Tag chưa tồn tại thì dùng phim "TAB" "ENTER" hoặc dấu "," để tạo một Tags mới
            v-tag(@remove="data = $event")

</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import vTag from "../mixin/tag";

export default {
  components: {
    vTag
  },
  data() {
    return {
      filter_content: null
    };
  },
  watch: {
    filter_content() {
      if (this.filter_content) {
        this.findTags(this.filter_content);
      }
      if (this.filter_content == "") {
        this.filter_content = null;
        this.findTags(null);
      }
      return this.filter_content;
    }
  },
  methods: {
    ...mapActions("TagsStore", ["findTags", "addTag"]),
    ...mapMutations("TagsStore", ["addNewTag"]),
    tagPush() {
        this.addTag(this.filter_content);
        this.filter_content = null;
    }
  }
};
</script>

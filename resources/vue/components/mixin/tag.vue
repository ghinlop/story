<template lang="pug">
    section
        label.alert.alert-danger.d-block(v-if="!checkData") Dữ liệu đưa vào không chính xác. Dữ liệu phải là dạng "Object"
        .d-flex.d-flex-wrap(v-else)
            div.v-tag.shadow-hover(v-for="(item, key) in showTags" :key="key")
                .v-tag_img(v-if="item.img")
                    img(:src="item.img")
                .v-tag_content(v-text="item.content")
                span.v-tag_close.fi.fi-close(v-if="item.close", @click.stop="removeItem(item.content, $event)")
</template>
<style lang="scss" scoped>
.v-tag {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border-radius: 50px;
  //   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 04), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
  //     0 0 1px -2px rgba(0, 0, 0, 0.2);
  background-color: #f1efef;
  &:hover {
    background-color: tomato;
    * {
      color: #fff;
    }
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
  &_img,
  &_close,
  &_content {
    display: inline;
  }
  &.remove {
    animation: removetags 0.4s ease-in-out forwards;
    position: relative;
  }
}
@keyframes removetags {
  0% {
    transform: scale(1, 1);
  }
  70% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(0, 0);
  }
}
.v-tag_img {
  height: 30px;
  width: 30px;
  margin: 0 5px 0 -12px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.v-tag_close {
  border-radius: 50%;
  margin: 0 -4px 0 4px;
  color: #0088dd;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
}
</style>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("TagsStore", ["tags", "tag_filter"]),
    ...mapGetters('TagsStore', ['showlist']),
    showTags() {
      return this.showlist;
    },
    checkData() {
      if (typeof this.tags === "object") {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations("TagsStore", ["removeTags"]),

    async removeItem(key, event) {
      event.path[1].classList.add("remove");
      await setTimeout(() => {
        event.path[1].classList.remove("remove");
        this.removeTags(key);
      }, 700);
    }
  }
};
</script>


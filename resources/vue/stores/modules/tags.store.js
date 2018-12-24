export default {
    namespaced: true,
    state: {
        tags: [
            {
                content: "test 1",
                close: true
            },
            {
                content: "test 2",
                close: true
            },
            {
                content: "test 3",
                close: true
            },
            {
                content: "test 4",
                close: true
            },
        ],
        tag_filter: null
    },
    mutations: {
        removeTags(state, item) {
            _.remove(state.tags, (items) => {
                console.log(items.content == item)
                return items.content == item;
            })
            console.log(state.tags)
            // state.tags.splice(item, 1);
        },
        addListTagFilter(state, item) {
            state.tag_filter = item;
        },
        addNewTag(state, item) {
            state.tags.push(item)
            _.orderBy(state.tags, ["content"], ["asc"]);
            // console.log(state.tags)
            state.tags = _.uniqBy(state.tags, "content");
        }
    },
    actions: {
        callRemoveTags({ commit }, index) {
            commit('removeTags', index)
        },
        findTags({ state, commit }, index) {
            if (index != null) {
                let result = state.tags.filter(tag => tag.content.toString().toLowerCase().indexOf(index) > -1);
                commit('addListTagFilter', result);
            } else {
                commit('addListTagFilter', null);
            }
        },
        addTag({ commit }, tag) {
            tag = tag.replace(/\,/gi, "");
            if (tag) {
                tag = {
                    content: tag,
                    close: true
                }
                commit('addNewTag', tag)
            }
            commit('addListTagFilter', null)
        }
    },
    getters: {
        showlist: state => {
            if(state.tag_filter){
                return _.orderBy(state.tag_filter, ["content"], ["asc"]);
            }else{
                return _.orderBy(state.tags, ["content"], ["asc"]);
            }
        }
    }
}
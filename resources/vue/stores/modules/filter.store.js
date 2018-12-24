export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        make_slug(data){
            data = data.toString().toLowerCase();
            data = data.replace(/\<script\>|\<\/script\>/gi, "");
            data = data.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
            // Letter "a"
            data = data.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
            // Letter "o"
            data = data.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
            // Letter "u"
            data = data.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
            data = data.replace(/í|ì|ỉ|ĩ|ị/gi, "i");
            // Letter "d"
            data = data.replace(/đ/gi, "d");
            // Trim the last whitespace
            data = data.replace(/\s*$/g, "");
            // Change whitespace to "-"
            data = data.replace(/\s+/g, "-");
            return data;
        }
    },
}
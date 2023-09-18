
<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <img :src="imageUrl" alt="" v-if="imageUrl" style="width: 100%;height: 800px;">
  </div>
</template>
<script>
import { getlxc } from '../../api/http';
import md5 from 'js-md5';
import axios from 'axios';
export default {
  data() {
    return {
      name: '董帅磊',
      role: '开发',
      str: 'nbsp123ok',
      imageUrl: ''
    }
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        const formData = new FormData();
        formData.append('imgurl', base64Data);
        axios.post('https://www.zzgoodqc.cn/index.php/index/upload/uploadimg', formData)
          .then(res => {
            const imagePath = res.data.data.url;
            // 拼接接口域名或IP
            this.imageUrl = `http://47.94.4.201/${imagePath}`;
            console.log(res.data.data);
          })
          .catch(error => {
            console.error(error);
            // 根据需要处理错误
          });
      }
      reader.readAsDataURL(file);
    }
  },
  computed: {
    fullImageUrl() {
      return this.imageUrl;
    }
  },
  created() {
    let data = {
      name: this.name,
      role: this.role,
      sign: md5(this.name + this.role + this.str + '123123')
    }
    getlxc(data).then(res => {
      console.log(res);
    })
  }
}
</script>
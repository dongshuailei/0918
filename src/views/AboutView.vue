<template>
  <div style="width: 40%;height: 50%;margin-left: 30%;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="id">
        <el-input v-model="form.userid"></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="phone" label="手机号码">
        <el-input v-model="form.iphone" maxlength="11"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import { mycenter } from '../../api/http'
export default {
  data() {
    return {
      form: {
        name: '1',
        sex: '1',
        iphone: '1',
        userid: "1"
      },
    }
  },
  methods: {
    onSubmit() {
      let data = {
        name: this.form.name,
        userid: this.form.userid,
        sex: this.form.sex,
        iphone: this.form.iphone,
      }
      mycenter(data).then((res) => {
        if (res.msg == '用户名重复') {
          this.$message({
            type: 'success',
            message: '用户名重复!'
          })
        } else {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
        }
        console.log(res);
      })
    },
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
            this.img = `http://47.94.4.201/${imagePath}`;
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
      return this.img;
    }
  },
  created() {

  }
}
</script>
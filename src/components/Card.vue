<template>
  <a-card  @click="$router.push(link)" hoverable style="width: 300px">
    <img
        slot="cover"
        alt="example"
        src="https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkb2ym5nj21hc0u0nhi.jpg"
    />

    <template slot="actions" class="ant-card-actions">
<!--      <a-icon key="setting" type="setting" />-->
<!--      <a-icon key="edit" type="edit" />-->
<!--      <a-icon key="ellipsis" type="ellipsis" />-->
      <div></div>
    </template>
    <a-card-meta :title="title" :description="des">
      <a-avatar
          slot="avatar"
          :src="avatar"
      />
    </a-card-meta>
    <a-card-meta :title="zuozhe" :description="gettime">
    </a-card-meta>
  </a-card>
</template>


<script>
export default {
  name: "Card",
  data(){
    return {
      cover:"https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkb2ym5nj21hc0u0nhi.jpg",
      title:" nihao",
      time:" 20:11",
      year:"2020/1/11",
      des:" nothing ",
      avatar:"",
      link:"www.baidu.com",
      zuozhe:"  ",
    };
  },
  computed:{
    gettime(){
      return this.year+"--"+this.time;
    }
  },
}
</script>

<style scoped>

</style>
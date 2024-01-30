<template>
  <button :class="{'active': Active === true}" class="tegs-btns">{{TextTags}}</button>
</template>

<script>
export default {
  props:{
    TextTags: String,
    Active: Boolean
  }
}
</script>

<style  scoped>
.tegs-btns{
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  padding: 9px 30px;
  border-radius: 10px;
  background: #F4F0EC;
  border: none;
  outline: none;
  cursor: pointer;
}
.active{
  background: #292F36;
  color: #FFFFFF;
}
</style>
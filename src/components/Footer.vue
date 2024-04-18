<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div>
        <router-link to="/" class="logo">
          <img style="width: 30px" src="/public/computer.png" alt="logo">
          <span>Interno</span>
        </router-link>
        <p class="text">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="icons">
          <a href="/">
            <img src="/public/twitter.svg" alt="twitter">
          </a>
          <a href="/">
            <img src="/public/linkidin.svg" alt="linkidin">
          </a>
        </div>
      </div>
      <nav>
        <ul>
          <p class="footer-text">Pages</p>
          <li  v-for="footerItem in footer" :key="footerItem.name" >
            <router-link class="footer-item" :to="footerItem.links">
              {{ footerItem.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="footer-block">
        <p class="footer-text">Contact</p>
        <span class="text-span">55 East Birchwood Ave.
          <br>
          Brooklyn, New York 11201</span>
        <span class="text-span">contact@interno.com</span>
        <span class="text-span">(123) 456 - 7890</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footer: Array
  }
}
</script>

<style  scoped>
.footer {
  margin-top: auto;
}
.logo{
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo span{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 50px */
}
.text{
  color: #4D5053;
  max-width: 393px;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  padding: 25px 0px;
}
.icons{
  display: flex;
  align-items: center;
  gap: 30px;
}
ul li{
  list-style: none;
  padding: 15px 0px;
  margin: 0;

}
ul{
  gap: 30px;
  align-items: center;
}
 a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  color: #292F36;

  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
}
.footer-text {
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
}
.footer-wrapper{
  display: flex;
  gap: 101px;
  justify-content: space-between;
}
.text-span{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  padding: 5px 0px;
}
.footer-block span{
  display: block;
}
</style>
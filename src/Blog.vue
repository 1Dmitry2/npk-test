<template>
  <div>
    <main class="bg">
      <div class="blog-item">
      <h4 class="blog-text">Техника, сборки пк, новости</h4>
      <span class="bg-crumbs">Home / Blog</span>
      </div>
    </main>
    <section class="container">
      <div style="padding-bottom: 50px">
        <h4 class="posts-text">Последний пост</h4>
      </div>
      <div>
        <div class="posts-shadow">
          <div class="posts-shadow-flex">
            <div>
              <img style="border-radius: 38px; width: 765px" src="/public/i3.jpeg" alt="posts-img">
            </div>
            <div>
              <h4 class="posts-title">Что такое AVX? И зачем они нужны?</h4>
              <p class="posts-text-p">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                <br>
                <br>
                Lorem Ipsum is not simply random text. It has roots in a piece of classica.
              </p>
              <div class="descr-posts">
                <div>
                  <span class="text-date">26 December,2022 </span>
                </div>
                <router-link to="/blog-ditails">
                  <img src="/public/step.svg" alt="steps">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div style="padding-bottom: 50px">
        <h4 class="blog-text">Новости и Техника</h4>
        <cards-design :CardsDesign="CardsDesign"/>
        <div class="section-button">
          <div class="steps-one steps-text">
            1
          </div>
          <div class="steps steps-text">
            2
          </div>
          <div class="steps steps-text">
            3
          </div>
          <div>
            <img src="/public/steps-or.svg" alt="step">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardsDesign from "./components/Cards-design.vue";

export default {
  components: {CardsDesign},
  data(){
    return{
      CardsDesign:[
        {id:1,img:'public/tecno.jpeg',title: 'Смартфоны техно со скидкой',date:'26 December,2022',links:'/blog',tag:'Большая скидка'},
        {id:2,img:'public/iphone.jpeg',title: 'Айфон в кредит(берите).',date:'26 December,2022',links:'/blog',tag:'Кредит есть'},
        {id:3,img:'public/gt-1030.jpeg',title: 'gt 1030 стоит 500тыс? Чтооо??',date:'26 December,2022',links:'/blog',tag:'Железо дорожает'},
        {id:4,img:'public/1080.jpeg',title: '1080 плохо? Уже не можно?',date:'26 December,2022',links:'/blog',tag:'1080 мониторы'},
        {id:5,img:'public/poco.jpeg',title: 'Смартфоны поко по выгодной цене.',date:'26 December,2022',links:'/blog',tag:'Скидок нет'},
        {id:6,img:'public/exy.jpeg',title: 'Самсунг на эксинус?',date:'26 December,2022',links:'/blog',tag:'Зачем?'},

      ]
    }
  }
}
</script>

<style scoped>
.bg{
  background: url("public/alll.jpeg") lightgray 50% / cover no-repeat;
  padding-top: 200px;
}
.blog-item{
  text-align: center;
  background: white;
  width: 503px;
  margin: 0 auto;
  border-radius: 37px 37px 0px 0px;
  padding: 41px 78px;
}
.blog-text{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
}
.bg-crumbs{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.posts-text{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}
.posts-shadow{
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 22px;
}
.posts-shadow-flex{
  display: flex;
  gap: 65px;
  align-items: center;
}
.descr-posts{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posts-title{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.posts-text-p{
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.text-date{
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.steps{
  border: 1px solid #CDA274;
  border-radius: 100%;
  width: 52px;
  text-align: center;
  padding: 14px 0px;
}
.steps-one{
  background: #F4F0EC;
  border-radius: 100%;
  width: 52px;
  text-align: center;
  padding: 14px 0px;
}
.steps-text{
  color: #292F36;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
}
.section-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;
}
</style>
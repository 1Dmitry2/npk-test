<template>
  <div>
    <main class="container">
    <div class="padding-section">
      <div class="bg-section">
        <h1 class="text-h1-section">Let Your Home
          <br>
          Be Unique</h1>
        <p class="text-p-section">There are many variations of the passages of <br>
          lorem Ipsum fromavailable, majority.</p>
        <button class="btn-section">
          Заказать сборку пк
          <img src="/public/left.svg" alt="left">
        </button>
      </div>
    </div>
    </main>
    <section class="container">
      <div class="padding-section">
        <div class="text-center">
        <h3 class="text-black">Наши клиенты</h3>
        <p class="text-p-section">It is a long established fact that a reader will be distracted by the of readable <br>
          content of page  lookings at its layouts  points.</p>
        </div>
        <div class="projects">
          <projects-item :projects="Projects"/>
        </div>
      </div>
    </section>
    <section>
      <div class="padding-section">
        <div class="bg-stats">
        <projects-statistics :ProjStats="ProjStats"/>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="padding-section">
        <div class="text-center">
          <h3 class="text-black">Сборки пк и Новости</h3>
          <p class="text-p">It is a long established fact that a reader will be distracted by the of readable content
            <br>
            of a page when lookings at its layouts the points of using.</p>
        </div>
        <cards-design :CardsDesign="CardsDesign"/>
      </div>
    </section>
  </div>
</template>

<script>


import ProjectsItem from "./components/Projects-item.vue";
import ProjectsStatistics from "./components/Projects-statistics.vue";
import CardsDesign from "./components/Cards-design.vue";

export default {
  components: {CardsDesign, ProjectsStatistics, ProjectsItem},
  data(){
    return {
      Projects: [
        {title: 'Ян Шелест', crumbs: 'Сборка комптютеров / Клиенты', img: 'public/4.jpeg', links: '/page-not'},
        {title: 'Ностальжи пк', crumbs: 'Сборка комптютеров / Клиенты', img: 'public/3.jpeg', links: '/page-not'},
        {title: 'Грин пейппер', crumbs: 'Сборка комптютеров / Клиенты', img: 'public/1.jpeg', links: '/page-not'},
        {title: 'Василий', crumbs: 'Сборка комптютеров / Клиенты', img: 'public/2.jpeg', links: '/page-not'},
      ],
      ProjStats:[
        {numbers: '12',text: 'Years Of Experiance'},
        {numbers: '85',text: 'Success Project'},
        {numbers: '15',text: 'Active Project'},
        {numbers: '95',text: 'Happy CUstomers'},
      ],
      CardsDesign:[
        {id:1,img:'public/pc-100k.png',title: 'Топ пк за 100к',date:'26 December,2022',links:'/blog',tag:'Скидка 1р'},
        {id:2,img:'public/pc-100p.png',title: 'Игравой пк за 1000р.',date:'26 December,2022',links:'/blog',tag:'Пожизненная гарантия'},
        {id:3,img:'public/fx-pc.jpeg',title: 'Комптютер на fx',date:'26 December,2022',links:'/blog',tag:'В топе'},
      ]
    }
  }
}
</script>
<style scoped>
.padding-section{
  padding-bottom: 40px;
}
.bg-section{
  background: url("public/building pc.jpeg");
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 40px;
  padding-top: 210px;
  padding-bottom: 280px;

}
.text-h1-section{
  color: #fff;
  font-family: "DM Serif Display";
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 81.25px */
}
.text-p-section{
  color: #fff;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.btn-section{
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 26px 49px;
  color: #FFF;
  outline: none;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  border: none;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  cursor: pointer;
  transition: .2s ease-in;
}
.btn-section:hover{
  background: #718596;
}
.text-center{
  text-align: center;
}
.bg-stats{
  background:  #F4F0EC;;
  height: 100vh;
}
.text-black{
  font-family: "DM Serif Display";
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 81.25px */
  color: #4d5053;
}
.text-p{
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
</style>
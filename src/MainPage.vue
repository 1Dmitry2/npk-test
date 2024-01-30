<template xmlns="http://www.w3.org/1999/html">
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
          Get Started
          <img src="/public/left.svg" alt="left">
        </button>
      </div>
    </div>
    </main>
    <section class="container">
      <div class="padding-section">
        <div class="text-center">
        <h3 class="text-h1-section">Follow Our Projects</h3>
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
          <h3 class="text-h1-section">Articles & News</h3>
          <p class="text-p-section">It is a long established fact that a reader will be distracted by the of readable content
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
        {title: 'Modern Kitchan', crumbs: 'Decor / Artchitecture', img: 'public/pr-1.svg', links: '/pojects-item-1'},
        {title: 'Modern Kitchan', crumbs: 'Decor / Artchitecture', img: 'public/pr-2.svg', links: '/pojects-item-1'},
        {title: 'Modern Kitchan', crumbs: 'Decor / Artchitecture', img: 'public/pr-3.svg', links: '/pojects-item-1'},
        {title: 'Modern Kitchan', crumbs: 'Decor / Artchitecture', img: 'public/pr-4.svg', links: '/pojects-item-1'},
      ],
      ProjStats:[
        {numbers: '12',text: 'Years Of Experiance'},
        {numbers: '85',text: 'Success Project'},
        {numbers: '15',text: 'Active Project'},
        {numbers: '95',text: 'Happy CUstomers'},
      ],
      CardsDesign:[
        {id:1,img:'public/design1.svg',title: 'Let’s Get Solution For Building Construction Work',date:'26 December,2022',links:'/blog',tag:'Kitchan Design'},
        {id:2,img:'public/design2.svg',title: 'Low Cost Latest Invented Interior Designing Ideas.',date:'26 December,2022',links:'/blog',tag:'Living Design'},
        {id:3,img:'public/design3.svg',title: 'Best For Any Office & Business Interior Solution',date:'26 December,2022',links:'/blog',tag:'Interior Design'},
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
  background: url("public/bg.png");
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 40px;
  padding-top: 210px;
  padding-bottom: 280px;
}
.text-h1-section{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 81.25px */
}
.text-p-section{
  color: #4D5053;
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
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border: none;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  cursor: pointer;
}
.text-center{
  text-align: center;
}
.bg-stats{
  background:  #F4F0EC;;
  height: 55vh;
}
</style>
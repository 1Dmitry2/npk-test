<template>
  <div>
    <main class="container">
      <div style="padding-bottom: 50px">
        <div class="ditails-flex">
          <div>
            <h3 class="title-texts">Let’s Get Solution for Building <br>
              Construction Work</h3>
            <img style="border-radius: 38px" src="/public/Photo-big.png" alt="images">
            <div class="image-el">
              <div>
                <span class="date">26 December,2022 </span>
              </div>
              <div>
                <span class="crumbs">Interior / Home / Decore</span>
              </div>
            </div>
            <p class="text-descr">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
              <br>
              <br>
              <br>
              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <img src="/public/Quotes.svg">
            <h3 class="title-texts">Design sprints are great</h3>
            <p class="text-descr">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <div class="text-el">
              <span class="number">1</span>
              <p class="text-descr">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <div class="text-el">
              <span class="number">2</span>
              <p class="text-descr">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <div class="text-el">
              <span class="number">3</span>
              <p class="text-descr">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <img style="border-radius: 38px" src="/public/big-img2.png">
            <p class="text-descr">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
          <div>
            <h4 class="title-text">Tags</h4>
            <div>
              <div style="display: flex; gap: 10px; padding: 6px">
              <tags-button :Active="true" :TextTags="'Kitchen'"/>
              <tags-button :Active="false" :TextTags="'Bedroom'"/>
              </div>
              <div style="display: flex; gap: 10px; padding: 6px">
              <tags-button :Active="false" :TextTags="'Building'"/>
              <tags-button :Active="false" :TextTags="'Architecture'"/>
              </div>
              <div style="display: flex; gap: 10px; padding: 6px">
              <tags-button :Active="false" :TextTags="'Kitchen Planning'"/>
              <tags-button :Active="false" :TextTags="'Bedroom'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TagsButton from "./components/tags-button.vue";

export default {
  components: {TagsButton}
}
</script>

<style  scoped>
.title-text{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.ditails-flex{
  display: flex;
  justify-content: space-between;
}
.image-el{
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.text-descr{
  max-width: 800px;
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.title-texts{
  color: #292F36;
  font-family: "DM Serif Display";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}
.text-el{
  display: flex;
  gap: 14px;
}
.text-el .number {
  margin-top: 20px;
  color: #CDA274;
  font-family: "DM Serif Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
  letter-spacing: 0.4px;
}
</style>
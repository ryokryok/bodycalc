<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <h1 class="title is-2">BodyCalc</h1>
        <span class="is-5">-適正体重、BMI、基礎代謝を計算するサイト-</span>

      </div>
      <div class="container" v-if="this.human.height != 0">
        <h1 class="title is-4">適正体重 : {{idealWeight* 18.5}}-{{ idealWeight*25.0 }} Kg</h1>
        <h1 class="title is-4">BMI : {{ bmi }}</h1>
        <h1 class="title is-4">基礎代謝 : {{calc}} Kcal/day</h1>
      </div>
      <div class="container" v-else>
        <h2 class="title is-5">
          フォームに入力してください！
        </h2>
      </div>
      <div class="continer">
        <div class="field">
          <div class="control">
            <label class="radio">
                            <input type="radio" name="question" value="0" v-model="human.sex">
                            男性
                          </label>
            <label class="radio">
                            <input type="radio" name="question" value="1" v-model="human.sex">
                            女性
                          </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="number" placeholder="身長(cm)" v-model.number="human.height">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="number" placeholder="体重(kg)" v-model.number="human.weight">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="number" placeholder="年齢" v-model.number="human.age">
          </div>
        </div>
      </div>
  
    </section>
  </div>
</template>

<script>
  export default {
    name: "home",
    // init data
    data() {
      return {
        human: {
          sex: "0",
          height: '',
          weight: '',
          age: '',
        }
      };
    },
    computed: {
      calc: function() {
        // scoped number for calc in this function
        let hbeResult = 0;
        // check for form validation
        if (
          this.human.weight != 0 &&
          this.human.height != 0 &&
          this.human.age != 0
        ) {
          // for man
          if (this.human.sex === "0") {
            hbeResult =
              66.473 +
              13.7516 * this.human.weight +
              5.0033 * this.human.height -
              6.755 * this.human.age;
            // for woman
          } else if (this.human.sex === "1") {
            hbeResult =
              655.0955 +
              9.5634 * this.human.weight +
              1.9496 * this.human.height -
              4.6756 * this.human.age;
          } else {}
          return Math.round(hbeResult);
        } else {
          return 0;
        }
      },
      bmi: function() {
        if (
          this.human.weight != 0 &&
          this.human.height != 0
        ) {
          return (this.human.weight / ((this.human.height / 100) * (this.human.height / 100))).toFixed(1);
        } else {
          return 0;
        }
      },
      idealWeight: function() {
        if (this.human.height != 0) {
          return ((this.human.height / 100) * this.human.height / 100).toFixed(1);
        } else {
          return 0;
        }
      },
    },
  };
</script>

<template>
  <div>
    <fireworks v-if="birthday || fireworks" />
    <dots v-else :theme="'girl'" />
    <div class="container" id="content">
      <img :src="require('@/assets/img/flamingo.png')" width="150px" />
      <h1 class="name">{{name}}</h1>
      <div class="congrats" v-if="birthday || fireworks">Congratulations!</div>
      <div class="age" v-if="age">
        <h2 class="years" v-if="age.years > 0">{{age.years}}&nbsp; year<span v-if="age.years > 1">s</span></h2>
        <div>
          <span class="months" v-if="age.months > 0">{{age.months}}&nbsp; month<span v-if="age.months > 1">s</span></span>
          <span v-if="age.months > 0 && age.days > 1"> and </span>
          <span class="days" v-if="age.days > 0">{{age.days}}&nbsp; day<span v-if="age.days > 1">s</span></span>
          <span> old</span>
        </div>
        <small v-if="false">
          {{age.hours}}h:{{age.minutes}}m:{{age.seconds}}s
        </small>
      </div>
      <img class="icon trigger-fireworks" @click="fireworks = !fireworks" src="~/assets/img/icons/fireworks.svg" />
      <nuxt-link to="/" class="sibling">Boy Version</nuxt-link>
    </div>
  </div>
</template>

<script>
/*********************
 * CHANGE INFO BELOW *
 * *******************/
  // Your Name
const name = "<Your Name>";

// Your Date of Birth (yyyy-mm-dd)
const dateOfBirth = "2019-10-07";
/*********************
 * CHANGE INFO ABOVE *
 * *******************/

import Dots from '~/components/Dots';
import Fireworks from '~/components/Fireworks';

export default {
  components: {
    Dots,
    Fireworks
  },
  data () {
    return {
      name: name,
      dateOfBirth: this.$moment(dateOfBirth),
      timer: null,
      fireworks: false
    }
  },
  computed: {
    age: function () {
      const now = this.$moment();
      const years = now.diff(this.dateOfBirth, 'year');
      this.dateOfBirth.add(years, 'years');
      const months = now.diff(this.dateOfBirth, 'months');
      this.dateOfBirth.add(months, 'months');
      const days = now.diff(this.dateOfBirth, 'days');
      this.dateOfBirth.add(days, 'days');
      const hours = now.diff(this.dateOfBirth, 'hours');
      this.dateOfBirth.add(hours, 'hours');
      const minutes = now.diff(this.dateOfBirth, 'minutes');
      this.dateOfBirth.add(minutes, 'minutes');
      const seconds = now.diff(this.dateOfBirth, 'seconds');
      return {years, months, days, hours, minutes, seconds}
    },
    birthday: function () {
      return this.age.months === 0 && this.age.days === 0;
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.dateOfBirth = this.$moment(dateOfBirth);
    }, 1000)
  },
  head () {
    return {
      title: this.name,
      link: [
        { rel: 'icon', hid: 'icon', type: 'image/x-icon', href: 'favicon-flamingo.ico' }
      ]
    }
  },
  beforeDestroy () {
    clearInterval(this.timer);
  },
}
</script>

<style lang="scss" scoped>
  #content {
    color: $primary-girl;
  }

  .sibling {
    color: $primary-boy;
    position: fixed;
    bottom:5px;
    font-size: 20px;
    right:5px;
    padding: 3px;
  }

  .name {
    margin-top: 5px;
  }
  .age {
    font-size: 30px;
  }
  .trigger-fireworks {
    position: fixed;
    bottom:5px;
    left:5px;
    padding: 3px;
    cursor: pointer;
  }
  .congrats {
    font-size: 50px;
    margin: 0;
    padding: 0;
    color: red;
  }
</style>

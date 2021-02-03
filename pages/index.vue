<template>
  <div>
    <dots />
    <fireworks v-if="birthday" />
    <div class="container" id="content">
      <img :src="require('@/assets/img/elephant.png')" class="main-picture" />
      <h1 class="name">{{name}}</h1>
      <div class="congrats" v-if="birthday">Congratulations!</div>
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
      timer: null
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
        { rel: 'icon', hid: 'icon', type: 'image/x-icon', href: 'favicon-elephant.ico' }
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
    color: $primary;
    padding: 50px 5px;
    animation: fadein 1s;
    text-align: center;
  }

  .main-picture {
    width: 250px;
    max-width: 100%;

  }
  .name {
    font-size: 80px;
  }
  .age {
    font-size: 30px;
  }
  .congrats {
    font-size: 50px;
    margin: 0;
    padding: 0;
    color: #de4e4e;
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>

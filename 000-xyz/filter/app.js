new Vue({
  el: '#app',
  data() {
    return {
      message: "hello world",
    };
  },
  filters: {
    getCapitalize (value) {
      if (!value || typeof value !== 'string') {
        return '';
      }
      return value[0].toUpperCase() + value.slice(1);
      // return `${value[0].toUpperCase()}${value.slice(1)}`;
    },
  },
  methods: {
    func () {
      //
    },
  },
});


/*

https://www.cnblogs.com/xgqfrms/p/16006261.html

https://vueschool.io/lessons/custom-vuejs-directive-values

*/
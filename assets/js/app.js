new Vue({
  el: '#calendar-n8',
  data: {
    start_date: moment().format("M/D/YYYY"),
    start_date_day: 0,
    start_date_month: 0,
    start_date_year: 0,
    number_days: 30,
    total_days: '',
    country_code: '',
    generate: false,
    days_number: [],
    months: [],
    days: [],
    how_many_months: 1,
    max_day_of_month: '',
    margin_days: '',
    days_needed: '',
    remaining_days: '',
    months_needed: 1,
    acumDays: 0,
    error: null
  },
  methods: {
    changeDate: function() {
      var splitDate = this.start_date.split("/");
      this.start_date_day = splitDate[1];
      this.start_date_month = splitDate[0];
      this.start_date_year = splitDate[2];
      console.log(moment(this.start_date).add(this.number_days, 'days').calendar());

    }
  },
  computed: {
  },
  mounted: function() {
    this.changeDate();
  }
});
$

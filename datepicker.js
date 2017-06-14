(function() {
  var datepicker = {};

  datepicker.getMonthData = function(year, month) {

    var ret = [];

    if (typeof year === 'undefined') {
      var today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
      // console.log(today);
      // console.log(year);
      // console.log(month);
    }

    var firstDay = new Date(year, month - 1, 1);
    var firstDayWeekDay = firstDay.getDay(); //这个月第一天是星期几
    // console.log(firstDay);
    // console.log(firstDayWeekDay);
    if (firstDayWeekDay === 0) firstDayWeekDay = 7;

    year = firstDay.getFullYear();
    month = firstDay.getMonth() + 1;

    var lastDayOfLastMonth = new Date(year, month - 1, 0);
    var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); //上个月有多少天

    // console.log(lastDayOfLastMonth);
    // console.log(lastDateOfLastMonth);

    var preMonthDayCount = firstDayWeekDay - 1; //日历组件第一行显示：上个月还有多少天要显示出来
    var lastDay = new Date(year, month, 0);
    var lastDate = lastDay.getDate(); //这个月有多少天

    // console.log(preMonthDayCount);
    // console.log(lastDay);
    // console.log(lastDate);

    for (var i = 0; i < 7 * 6; i++) { //这个循环可以有多种写法
      var date = i + 1 - preMonthDayCount;
      var showDate = date;
      var thisMonth = month;

      //上一个月
      if (date <= 0) {
        thisMonth = month - 1;
        showDate = lastDateOfLastMonth + date;
      } else if (date > lastDate) {
        //下一个月
        thisMonth = month + 1;
        showDate = showDate - lastDate;
      }

      if (thisMonth === 0) thisMonth = 12;
      if (thisMonth === 13) thisMonth = 1;

      ret.push({
        month: thisMonth,
        date: date,
        showDate: showDate
      });

    }

    return {
      year: year,
      month: month,
      days: ret
    };
  }

  window.datepicker = datepicker;
})();

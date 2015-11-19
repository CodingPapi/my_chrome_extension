function my_clock(el) {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  // var s=today.getSconds();
  m=m>=10?m:('0'+m);
  // s=s>=10?s:('0'+s);
  el.innerHTML = h + ":" + m;
  setTimeout(function() {my_clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);
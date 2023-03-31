<script>
        function countdown() {
          var now = new Date();
          var eventDate = new Date("2023-06-30T00:00:00+04:00");
          var currentTime = now.getTime();
          var eventTime = eventDate.getTime();
          var remTime = eventTime - currentTime;
  
          var sec = Math.floor(remTime / 1000);
          var min = Math.floor(sec / 60);
          var hrs = Math.floor(min / 60);
          var days = Math.floor(hrs / 24);
  
          hrs %= 24;
          min %= 60;
          sec %= 60;
  
          document.getElementById("days").textContent = days;
          document.getElementById("hours").textContent = hrs;
          document.getElementById("minutes").textContent = min;
          document.getElementById("seconds").textContent = sec;
  
          setTimeout(countdown, 1000);
        }
  
        countdown();
      </script>
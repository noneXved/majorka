      // Set the date to countdown to
      var countDownDate = new Date("April 30, 2023 00:00:00").getTime();

      // Update the countdown clock every second
      var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var timeRemaining = countDownDate - now;

        // Calculate days, hours, minutes, and seconds remaining
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        // Display the countdown clock in the format "days : hours : minutes : seconds"
        document.getElementById("clock").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        // If the countdown is over, display "Countdown is over!"
        if (timeRemaining < 0) {
          clearInterval(x);
          document.getElementById("clock").innerHTML = "Countdown is over!";
        }
      }, 1000);
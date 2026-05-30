(function () {
  var electionDay = new Date("2026-11-03T00:00:00");
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var msPerDay = 1000 * 60 * 60 * 24;
  var daysLeft = Math.ceil((electionDay - today) / msPerDay);

  var el = document.getElementById("days-remaining");
  if (!el) return;

  if (daysLeft > 0) {
    el.textContent = daysLeft;
  } else if (daysLeft === 0) {
    el.textContent = "Today";
  } else {
    el.textContent = "Past";
  }
})();

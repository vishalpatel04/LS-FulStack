const timelineRange = document.getElementById('timelineRange');
const eventDescription = document.getElementById('eventDescription');

const events = [
  "Day 1 at IITB — met my batchmates and saw the campus!",
  "Participated in Udghosh 2024 as part of the Kabaddi team.",
   "Designed Arduino-controlled UTM in a 6-member project team.",
  "Won Hostel GC in Kabaddi representing Hostel 16.",
  "Completed NSO cricket camp and built my skills.",
  "Hostel changes to Hostel-9",
  "Elected as Sports Secretary of Hostel-9 Council",
  "Participated in various sports GC events",
  "Part of Aavhaan'25 Coordinator",
 
];

timelineRange.addEventListener('input', function () {
  const index = parseInt(this.value) - 1;
  eventDescription.textContent = events[index];
});
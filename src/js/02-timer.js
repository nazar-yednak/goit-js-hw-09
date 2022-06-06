import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),      
flatpickr: document.querySelector('#datetime-picker')
}

let CURRENT_DATE = new Date();
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
      if (selectedDates[0] <= CURRENT_DATE) {
   
        Notiflix.Notify.failure("Please choose a date in the future");
   
      }
       else {
      refs.button.removeAttribute('disabled');
    
      }
  },
 
};
refs.button.addEventListener('click', timer);

flatpickr('#datetime-picker', options);


function renderTimer (string) {
  let { days, hours, minutes, seconds } = convertMs(string);
  refs.days.textContent = days;
  refs.minutes.textContent = minutes;
  refs.hours.textContent = hours;
  refs.seconds.textContent = seconds;
};

function timer() {
  const futureDate = new Date(refs.input.value);
   intervalId = setInterval(() => {
    const deltaDate = futureDate - new Date();
     renderTimer(deltaDate);
    refs.button.setAttribute('disabled', true);
 if (deltaDate < 1000) {
   clearInterval(intervalId);
   return
  }
   }, 1000)
  
    
  }

function addLeadingZero(value) {
  return String(value).padStart('2',0)
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addLeadingZero(Math.floor(ms / day));
  
  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}







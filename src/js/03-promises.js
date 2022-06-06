import Notiflix from 'notiflix';

const refs = {  
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
};
const { form, delay, step, amount } = refs;
let position = 0;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

   setTimeout(() => {
    for (let i = 0; i < amount.value; i += 1) {
      const stepDelay = +delay.value + +step.value * i;
      position = i + 1;
    
      createPromise(position, stepDelay)
        .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
        })
        .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
        });
    
    }
  }, delay.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}




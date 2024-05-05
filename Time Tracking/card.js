let dailyBtn = document.querySelector('.dailyBtn');
let weeklyBtn = document.querySelector('.weeklyBtn');
let monthlyBtn = document.querySelector('.monthlyBtn');

// work
let workHrs = document.querySelector('#workHrs');
let workWeek = document.querySelector('#workWeek');
// play
let playHrs = document.querySelector('#playHrs');
let playWeek = document.querySelector('#playWeek');
// study
let studyHrs = document.querySelector('#studyHrs');
let studyWeek = document.querySelector('#studyWeek');
// exercise
let exerciseHrs = document.querySelector('#exerciseHrs');
let exerciseWeek = document.querySelector('#exerciseWeek');
// social
let socialHrs = document.querySelector('#socialHrs');
let socialWeek = document.querySelector('#socialWeek');
// self-care
let selfcareHrs = document.querySelector('#selfcareHrs');
let selfcareWeek = document.querySelector('#selfcareWeek');

dailyBtn.addEventListener('click', ()=>{
    workHrs.innerHTML = '5hrs';
    workWeek.innerHTML =  'Last Week - 7hrs';
    playHrs.innerHTML = '1hrs';
    playWeek.innerHTML = 'Last Week - 2hrs';
    studyHrs.innerHTML = '0hrs';
    studyWeek.innerHTML = 'Last Week - 1hrs';
    exerciseHrs.innerHTML = '1hrs';
    exerciseWeek.innerHTML = 'Last Week - 1hrs';
    socialHrs.innerHTML = '1hrs';
    socialWeek.innerHTML = 'Last Week - 3hrs';
    selfcareHrs.innerHTML = '0hrs';
    selfcareWeek.innerHTML = 'Last Week - 1hrs';
});

weeklyBtn.addEventListener('click', ()=>{
    workHrs.innerHTML = '32hrs';
    workWeek.innerHTML =  'Last Week - 36hrs';
    playHrs.innerHTML = '10hrs';
    playWeek.innerHTML = 'Last Week - 8hrs';
    studyHrs.innerHTML = '4hrs';
    studyWeek.innerHTML = 'Last Week - 7hrs';
    exerciseHrs.innerHTML = '4hrs';
    exerciseWeek.innerHTML = 'Last Week - 5hrs';
    socialHrs.innerHTML = '5hrs';
    socialWeek.innerHTML = 'Last Week - 10hrs';
    selfcareHrs.innerHTML = '2hrs';
    selfcareWeek.innerHTML = 'Last Week - 2hrs';
});


monthlyBtn.addEventListener('click', ()=>{
    workHrs.innerHTML = '103hrs';
    workWeek.innerHTML =  'Last Week - 128hrs';
    playHrs.innerHTML = '23hrs';
    playWeek.innerHTML = 'Last Week - 29hrs';
    studyHrs.innerHTML = '13hrs';
    studyWeek.innerHTML = 'Last Week - 19hrs';
    exerciseHrs.innerHTML = '11hrs';
    exerciseWeek.innerHTML = 'Last Week - 18hrs';
    socialHrs.innerHTML = '21hrs';
    socialWeek.innerHTML = 'Last Week - 23hrs';
    selfcareHrs.innerHTML = '7hrs';
    selfcareWeek.innerHTML = 'Last Week - 11hrs';
});

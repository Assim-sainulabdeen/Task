
let data = [
    {
    start: 0,
    duration: 15,
    title: "Exercise"
    },
    {
    start: 25,
    duration: 30,
    title: "Travel to work"
    }, 
    {
    start: 30,
    duration: 30,
    title: "Plan day"
    },
    {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
    }, 
    {
    start: 100,
    duration: 15,
    title: "Code review"
    }, 
    {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
    }, 
    {
    start: 360,
    duration: 30,
    title: "Skype call"
    }, 
    {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
    }, 
    {
    start: 400,
    duration: 30,
    title: "Push up branch"
    }
];


let getTimeArray = () =>{
    let timeInterval = 30;
    let times = [];
    let startTime = 60*8;
    endTime = 18*60;
    for (let i=0; startTime <= endTime; i++) {
    let hh = Math.floor(startTime/60);
    let mm = (startTime%60);
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);

    if (times[i] == "0:00"){
        times[i] = "12:00";
    }else if (times[i] == "0:30"){
        times[i]="12:30";
    }
    startTime = startTime + timeInterval;
  
    }
    return times;
}
let time = getTimeArray();

for (let i =0 ; i < time.length; i++){

    if(time.indexOf(time[i]) % 2 == 0){
        $("#timecontent").append(
            `<div class="elementHeight fs-13 moveRight">${time[i]}</div>`
        )
    }else{
        $("#timecontent").append(
            `<div class="elementHeight fs-11 moveRight">${time[i]}</div>`    
        )
    }  
}
let data2 = [];
let gap = "left:0";

for (let i = 0; i< data.length; i++){


    let height = "height:" + (data[i].duration)*2+"px";
    let topMargin ="top:" + (data[i].start)*2+"px";
    let leftMargin ="left:50%";
  
    if ( ((i-1) >=0) && (data[i].start < ( data[i-1].start + data[i-1].duration)) || (data[i+1].start < ( data[i].start + data[i].duration)) )
    
    {
        data2.push(data[i]);        
    }
    else{
        $("#tasks").append(`
        <div class="fs-13 bodyBackgrounColor borderColor w-100 position-absolute" style="${height}; ${topMargin}" >${data[i].title}</div>
        `)
    }

}

let data3 = [...data2];


// console.log(data2);

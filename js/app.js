
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


let starstartTimeime =8*60 ;
let endTime = 18*60;
let count  = 1;

let tempdata = -1;



for (let i = 0; i <= (endTime-starstartTimeime) / 60 ; i++){

    let hour = Math.floor((starstartTimeime + (i*30)) /60);
    let minute = (((starstartTimeime + i*30 ) % 60) +"0").slice(0, 2)

    let tempValue = 0;
    tempdata = 0;

    if(data[i].start !=0 ){
        tempValue = data[i].start - (data[i-1].start + data[i-1].duration);
    }

    if(tempValue < 0 && tempdata == 0 ){
        for (let j = i; j < (endTime-starstartTimeime) / 60; j++){
          tempdata = data[j].start-(data[j-1].start + data[j-1].duration);
          if(tempdata < 0){
            count++;
          }else{
            break;
          }
        }
    }

    $("#content").append(`
        <div class="px-4">
            <div class="fs-14 moveLeft smallWidth timeColor">
                <span class="moveRight">${hour + ":" + minute}</span>
            </div>

            <div class="moveLeft largeWidth"></div>

        </div>
    `);


}
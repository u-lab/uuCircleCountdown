function countdown(){
    const now=new Date();//今の時間
    const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);//明日の0:00
    const differ=tomorrow.getTime()-now.getTime();//あと何秒か計算
    
    
    const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
    const hour=Math.floor(differ/1000/60/60);
    const day=Math.floor(differ/1000/60/60)*24;
    

    document.getElementById("day").textContent=String(day).padStart(2,"0");
    document.getElementById("hour").textContent=String(hour).padStart(2,"0"); //一桁になった時0がつくように
    document.getElementById("min").textContent=String(min).padStart(2,"0")
    document.getElementById("sec").textContent=String(sec).padStart(2,"0")
    setTimeout(countdown,1000);//1秒毎に繰り返す
    }
    countdown();
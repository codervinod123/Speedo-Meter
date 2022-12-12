const messaeBool=[
    "Get suggestions from Grammarly while you write in desktop applications",
    "From grammar and spelling to style and tone",
    "Grammarly suggestions are comprehensive, helping",
    "you communicate effectively and as you intend",
    "Grammarly allows me to get those communications out and feel",
    "Get started for free and find out what you can accomplish with the ",
    "Compose bold, clear, mistake-free writing with Grammarly",
]



var stratTime;
const start=()=>{
    document.getElementById('btn').innerText="Done";
    const date=new Date();
    stratTime=date.getTime();
    console.log(stratTime);
}

const countLen=(str)=>{
    const res=str.split(' ').length;
    return res
}
const compreWords=(str1,str2)=>{
    const word1=str1.split(' ');
    const word2=str2.split(' ');

    let cnt=0;
    word1.forEach((item,index)=>{
       if(item===word2[index])
        {
            cnt++;
        }
      })
      const wrong=word2.length-cnt-1; 
      const res=`${cnt} word you have typed right and ${wrong} word wrong`;
      return res;
}


const end=()=>{
    const date=new Date();
    var endTime=date.getTime();
    
    const total=(endTime-stratTime)/1000;
    const word=document.getElementById('editor').value;
    const wordLength=countLen(word);
    const speed=Math.round((wordLength/total)*60);
    var speedResult=`${speed} word per Minute! Good Try! improvement needed`;

    const realWord=document.getElementById('msg').innerHTML;
    
    speedResult+=compreWords(word,realWord);
    // console.log(speedResult);
    document.getElementById('msg').innerHTML=speedResult;

    
    // if(speed<20)
    // {
    //     const speedResult=`${speed} word per Minute! Good Try! improvement needed`;
    //     document.getElementById('msg').innerHTML=speedResult;
    // }
    // else
    // {
    //     const speedResult=`${speed} word per Minute! excellent! osm`;
    //     document.getElementById('msg').innerHTML=speedResult; 
    // }
}

const handlingMsg=()=>{
    
    if(document.getElementById("btn").innerText==="Start")
    {
        const ind=Math.floor(Math.random()*messaeBool.length);
        document.getElementById("msg").innerHTML=messaeBool[ind];
        const btxt=document.getElementById("btn");
        btxt.innerText=="Done";
        start();
    }
    else{
        
        document.getElementById('btn').innerText="Start";
        end();
    }
}


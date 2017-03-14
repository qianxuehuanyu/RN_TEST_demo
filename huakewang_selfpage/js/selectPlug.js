let selectPlug={
    //对象捕捉
     selectCreate(keyword) {
        const idkeyword="form_"+keyword+"select";
        const classkeyword="dpi_"+keyword;
        let form_select=document.getElementById(idkeyword);
        let dpiObj=document.getElementsByClassName(classkeyword)[0];
        let selectdl=form_select.getElementsByTagName("dl")[0];
        selectdl.value=false;
        let selectdds=selectdl.getElementsByTagName("dd");
        this.selectObject(dpiObj,selectdl,selectdds);
    },
     //添加点击事件
     selectObject(dpi,selectdl,selecctdds) {
         let dlheight;
         if(selecctdds.length==3){
             dlheight="138px";
         }else{
             dlheight="184px";
         }
        for(let i=0;i<selecctdds.length;i++){
            selecctdds[i].onclick=()=>{
                if(i==0){
                    selectPlug.ddchange("",selecctdds[0],dpi,selectdl,dlheight);
                }else{
                    selectPlug.ddchange(selecctdds[i].innerText,selecctdds[0],dpi,selectdl,dlheight);
                }
            }
        }
    },
     //下拉选项点击事件
     ddchange(innH,ddfirst,dpi,dlObj,dlheight) {

        if(innH!=""){
            ddfirst.style.color="#111";
            ddfirst.innerHTML=innH;
            dpi.value=innH;
        }else{
            ddfirst.innerHTML="请选择";
        }
        if(!dlObj.value){
            dlObj.style.height=dlheight;
            dlObj.value=!dlObj.value;
        }else{
            dlObj.style.height="46px";
            dlObj.value=!dlObj.value;
        }
    },
    //下拉框的滚动阻止事件
    preventScroll(keyword) {
        let objs = document.getElementsByClassName(keyword);
        for(let i=0;i<objs.length;i++){
            let _this=objs[i];
            if(navigator.userAgent.indexOf("Firefox")>0){
                _this.addEventListener('DOMMouseScroll',function(e){
                    _this.scrollTop += e.detail > 0 ? 23 : -23;
                    e.preventDefault();
                },false);
            }else{
                _this.onmousewheel = function(e){
                    e = e || window.event;
                    _this.scrollTop += e.wheelDelta > 0 ? -23 : 23;
                    return false;
                };
            }
        }
    }
};
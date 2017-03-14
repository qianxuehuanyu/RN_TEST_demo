/**
 * Created by admin on 2017/3/7.
 */
(function () {
    var urlLocalhost="http://localhost:2010";
    var user_test={id:69123,username:13261469964};
    HKWselfpage_HTML.data.user=function () {
        //$.post(urlLocalhost+"/users/login", {id:user_test.id},function (data) {
        //    console.log(data);
        //});

    };
    HKWselfpage_HTML.data.user();
    HKWselfpage_HTML.data.dataCheck=function () {

    };
    HKWselfpage_HTML.data.dataFinshLine=function () {

    };
    HKWselfpage_HTML.data.logoGgChange=function () {

    };
    HKWselfpage_HTML.data.dataBaseShowCheck=function () {

    };
    HKWselfpage_HTML.data.dataZDYBQ=function () {
        //自定义标签添加+初始化自动添加标签
            var zdybqarrery=["自由职业"];
            let zdybq=document.getElementById("zdybq");
            function zdybqaddclickchange(){
                let zdybqaddclick=zdybq.getElementsByClassName("zdybqaddclick")[0];
                zdybqaddclick.value=true;
                zdybqaddclick.onclick= function () {
                    zdybqadd(zdybqaddclick.value);
                    setTimeout(function () {
                        zdybqaddfinish();
                    },10)
                };
                function zdybqadd(key){
                    if(key){
                        zdybqaddclick.innerHTML='<input style="height: 12px;width: 80px;'+
                            'background:rgba(0,0,0,0);color:#fff;border: none;outline:none;'+
                            'border-bottom: 1px solid #fff;font-size: 12px;margin-top: 5px;" type="text" placeholder="标签不可重复">';
                    }
                }
                function zdybqaddfinish(){
                    let inputzdybq=zdybqaddclick.getElementsByTagName("input")[0]||undefined;
                    if(inputzdybq!=undefined){
                        zdybqaddclick.value=false;
                        let zdybqtextvalue;
                        inputzdybq.addEventListener("focus",function(){
                            zdybqaddclick.style.background="#555";
                            zdybqaddclick.style.color="#111";
                        });
                        inputzdybq.addEventListener("blur",function(){
                            zdybqaddclick.style.background="#eef3f6";
                            zdybqaddclick.style.color="#656668";
                            zdybqbianli();
                        });
                        inputzdybq.focus();
                        inputzdybq.addEventListener("keyup", function (event) {
                            if(inputzdybq.value.length<1){
                                zdybqaddclick.innerHTML='<input style="height: 12px;width: 80px;'+
                                    'background:rgba(0,0,0,0);color:#fff;border: none;outline:none;'+
                                    'border-bottom: 1px solid #fff;font-size: 12px;margin-top: 5px;" type="text" placeholder="内容不可为空">';
                            }else{
                                if(event.keyCode==13){
                                    zdybqtextvalue=inputzdybq.value;
                                    trueaddone(zdybqtextvalue);
                                }
                            }

                        });
                    }
                }
                function trueaddone(value){
                    if(value!=HKWselfpage_HTML.zdybqarrery[HKWselfpage_HTML.zdybqarrery.length-1]){
                        HKWselfpage_HTML.zdybqarrery.push(value);
                        zdybqbianli();
                    }else{
                        zdybqaddclick.innerHTML='<input style="height: 12px;width: 80px;'+
                            'background:rgba(0,0,0,0);color:#fff;border: none;outline:none;'+
                            'border-bottom: 1px solid #fff;font-size: 12px;margin-top: 5px;" type="text" placeholder="标签不可重复">';
                    }
                }
            }
            function zdybqbianli() {
                zdybq.innerHTML="";
                for(let i=0;i<HKWselfpage_HTML.zdybqarrery.length;i++){
                    let zdybqever=document.createElement("div");
                    zdybqever.className="zidingyibiaoqian";
                    zdybqever.innerHTML='<a>'+HKWselfpage_HTML.zdybqarrery[i]+
                        '<i style="" value='+i+'>X</i></a>';
                    zdybq.appendChild(zdybqever);
                }
                let zdybqtext=document.createElement("div");
                zdybqtext.className="zidingyibiaoqian zdybqaddclick";
                zdybqtext.innerHTML='<a>+</a>';
                zdybq.appendChild(zdybqtext);
                zdybqaddclickchange();
                zdybqdelete();
            }
            function zdybqdelete(){
                let arraryready=[];
                let deletebuttonX=zdybq.getElementsByTagName("i");
                for(let i=0;i<deletebuttonX.length;i++){
                    deletebuttonX[i].onclick= function () {
                        for(let j=0;j<HKWselfpage_HTML.zdybqarrery.length-1;j++){
                            if(j!=deletebuttonX[i].value){
                                arraryready.push(HKWselfpage_HTML.zdybqarrery[j]);
                            }
                        }
                        HKWselfpage_HTML.zdybqarrery=arraryready;
                        zdybqbianli();
                    }
                }

            }
    };
    HKWselfpage_HTML.data.dataBaseInForm=function () {

    };
    HKWselfpage_HTML.data.dataMyselfForm=function () {

    };

























})();

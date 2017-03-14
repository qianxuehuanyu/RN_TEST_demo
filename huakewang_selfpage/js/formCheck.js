/**
 * Created by admin on 2017/2/27.
 */
let theFormCheck={
    //数据检查返回 测试！！！！！
    data:{fromcheckresult:{}},
    formCheck(from) {
        let checkreturn;
        dataCheck(from);
        let success;
        let worry;
        let timeSI=setInterval(function () {
            if(checkreturn!=undefined){
                if(checkreturn){
                    success={result:true,message:"-----------------------------保存成功-----------------------------"};
                    theFormCheck.data.fromcheckresult=success;
                    clearInterval(timeSI);
                }else{
                    worry={result:checkreturn,message:"-----------------------------保存失败-----------------------------"};
                    theFormCheck.data.fromcheckresult=worry;
                    clearInterval(timeSI);
                }

            }
        },100);
        //检验是否为空
        function dataCheck(from){
            let keyword=[0,0,undefined];
            let forminput=from.getElementsByTagName("input");
            for(let i=0;i<forminput.length;i++) {
                if (forminput[i].required) {
                    let changedddd = from.getElementsByClassName(forminput[i].name)[0];
                    if (forminput[i].value.length==0) {
                        changedddd.style.borderColor = "red";
                        keyword[0]++;
                    }else{
                        keyword[0]++;keyword[1]++;
                    }
                }else{
                    keyword[0]++;keyword[1]++;
                }
            }
            let timeSI2=setInterval(function () {
                if(keyword[0]==forminput.length){
                    if(keyword[1]==keyword[0]) {
                        keyword[2]=true;
                    }else{
                        keyword[2]=false;
                    }
                    if(keyword[2]!=undefined){
                        checkreturn=keyword[2];
                        clearInterval(timeSI2);
                    }
                }
            },100);
        }

    },

    formcheckChange(formid,formnum) {
        let bbc_InfFrom=document.getElementById(formid);
        let cfbfbb_write=document.getElementsByClassName("cfbfbb_write")[formnum];
        let cfbfbb_show=document.getElementsByClassName("cfbfbb_show")[formnum];
        let save=cfbfbb_write.getElementsByClassName("savebuttonchoose")[0];
        let clear=cfbfbb_write.getElementsByClassName("clearbuttonchoose")[0];
        let bothRuturnForm=cfbfbb_write.getElementsByClassName("bothRuturnForm")[0];
        let bbc_Infreturn=bothRuturnForm.getElementsByClassName("Infreturn")[0];
        let heightchangediv=cfbfbb_write.getElementsByClassName("heightchangediv")[0];
        let closebianjitianjia=cfbfbb_write.getElementsByClassName("closebianjitianjia")[0];
        let forminput=cfbfbb_write.getElementsByTagName("input");
        for(let i=0;i<forminput.length;i++) {
            if (forminput[i].required) {
                let changedddd = cfbfbb_write.getElementsByClassName(forminput[i].name)[0];
                changedddd.addEventListener("click", function () {
                    let changedddtime = setInterval(function () {
                        if (forminput[i].value.length > 0) {
                            changedddd.style.borderColor = "";
                            clearInterval(changedddtime);
                        }
                    }, 100)
                })
            }
        }


        save.onclick=(event)=>{
            event.preventDefault();
            theFormCheck.formCheck(bbc_InfFrom);
            let other;
            bothRuturnForm.style.cssText="display:block;";
            bbc_Infreturn.style.opacity="1";
            let timeSI=setInterval(function () {
                if(theFormCheck.data.fromcheckresult!=undefined){
                    setTimeout(function () {
                        clearInterval(timeSI);
                        show(theFormCheck.data.fromcheckresult);
                    },600);

                }
            },10);
        };
        function show(checkend) {
            if(checkend.result){
                bothRuturnForm.style.background="rgba(0,0,0,0.5)";
                bbc_Infreturn.style.color="#04AE15";
                bbc_Infreturn.style.borderColor="#04AE15";
                bothRuturnForm.style.border="1px solid rgba(0,0,0,0)";
                bbc_Infreturn.innerHTML=checkend.message;
                setTimeout(function () {
                    bbc_Infreturn.style.opacity=0;
                },2000);
                setTimeout(function () {
                    closebianjitianjia.style.transform="rotate(45deg)";
                    heightchangediv.style.height="0";
                    heightchangediv.style.opacity=0;
                },2500);
                setTimeout(function () {
                    bothRuturnForm.style.borderColor="rgba(0,0,0,0)";
                    bothRuturnForm.style.display="none";
                    cfbfbb_show.style.display="block";
                    cfbfbb_show.style.opacity="1";
                    cfbfbb_write.style.position="absolute";
                    cfbfbb_write.style.minHeight="0";
                    cfbfbb_write.style.display="none";
                    setTimeout(function () {
                        cfbfbb_write.style.display="block";
                        cfbfbb_write.style.minHeight="0";
                        cfbfbb_write.style.opacity=0;
                        closebianjitianjia.style.display="none";
                        cfbfbb_show.style.opacity="1";
                        cfbfbb_write.style.position="absolute";
                        cfbfbb_write.style.display="none";
                        bothRuturnForm.style.display="none";
                        bbc_Infreturn.innerHTML='<img src="./image/loading.gif" style="text-align: center;width: 20px;height: 20px;"/>';
                    },100);
                },3500);
            }else{
                bothRuturnForm.style.background='rgba(0,0,0,0)';
                bbc_Infreturn.style.color="red";
                bbc_Infreturn.style.borderColor="red";
                bbc_Infreturn.innerHTML=checkend.message;
                setTimeout(function () {
                    bothRuturnForm.style.display="none";
                    bbc_Infreturn.innerHTML='<img src="./image/loading.gif" style="text-align: center;width: 20px;height: 20px;"/>';
                },2000);
            }

        }
        closebianjitianjia.onclick= function () {
            closebianjitianjia.style.transform="rotate(45deg)";
            heightchangediv.style.height="0";
            heightchangediv.style.opacity=0;
            setTimeout(function () {
                cfbfbb_show.style.opacity="1";
                cfbfbb_show.style.display="block";
                cfbfbb_write.style.position="absolute";
                cfbfbb_write.style.minHeight="0";
                cfbfbb_write.style.display="none";
                bothRuturnForm.style.display="none";
                setTimeout(function () {
                    for(let i=0;i<forminput.length;i++) {
                        let changedddd = cfbfbb_write.getElementsByClassName(forminput[i].name)[0];
                        changedddd.style.borderColor = "";
                    }
                    cfbfbb_write.style.display="block";
                    cfbfbb_write.style.minHeight="0";
                    cfbfbb_write.style.opacity=0;
                    closebianjitianjia.style.display="none";
                },10);
            },1000);
        };

        clear.onclick=()=>{
            closebianjitianjia.click();
        };

    }



};

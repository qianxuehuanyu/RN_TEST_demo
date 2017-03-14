/**
 * Created by admin on 2017/2/22.
 */

let HKWselfpage_HTML={

    data() {
        this.user,//用户标识
        this.dataCheck,//数据检测
        this.dataFinshLine,//顶部完成度标识
        this.logoGgChange,//顶部背景图片
        this.dataBaseShowCheck,//已有数据
        this.dataZDYBQ,//自定义标签数据
        this.dataBaseInForm,//基础数据
        this.dataMyselfForm//关于我数据
    },
    //初始化
    init() {
        this.sendbutton_alert();
        this.cfbf_intocheck();
        this.sexselect();
        this.experiencselect();
        this.schoolselect();
        this.baseInfSaveCheck();
        this.selectmouseWheel();
        this.inlocaladdress();
        this.aboutselfShowCheck();
        this.aboutselfSaveCheck();
        this.zdybq();
        this.bianjitinajia();
        this.theskillAdd();
        this.worksshow();
    },

    //封面上传提示效果
    sendbutton_alert(){
        let sendbuttontip=document.getElementById("cfoalter");
        let cfosendimagebutton=document.getElementById("cfosendimagebutton");
        sendbuttontip.style.cssText="transition:opacity 1s";
        cfosendimagebutton.addEventListener("mousemove", function () {
                sendbuttontip.style.opacity=1;
        });
        cfosendimagebutton.addEventListener("mouseout", function () {
                sendbuttontip.style.opacity=0;
        });
    },

    //个人或者机构单选框
    cfbf_intocheck() {
        let cfbf_intocheck=document.getElementsByClassName("cfbf_intocheck");
        let dpi_intokind=document.getElementsByClassName("dpi_intokind")[0];
        let dpi_kind=["myself","ourself"];
        for(let i=0;i<cfbf_intocheck.length;i++){
            cfbf_intocheck[i].value=i;
            cfbf_intocheck[i].onclick= function () {
                let incheckradio=cfbf_intocheck[this.value].getElementsByTagName("i")[0];
                incheckradio.className="incheckradio";
                let outcheckradio=cfbf_intocheck[(this.value+1)%2].getElementsByTagName("i")[0];
                outcheckradio.className="outcheckradio";
                dpi_intokind.value=dpi_kind[this.value];
            }
        }
    },

    //性别下拉框
    sexselect() {
        //下拉框的效果实现
        selectPlug.selectCreate("sex");
    },

    //工作经验下拉框
    experiencselect() {
        //下拉框的效果实现
        selectPlug.selectCreate("experience");
    },

    //学历下拉框
    schoolselect() {
        //下拉框的效果实现
        selectPlug.selectCreate("school");
    },

    //下拉框的滚动阻止事件
    selectmouseWheel() {
        selectPlug.preventScroll("textselectul2");
    },

    //详细地址选择效果
    inlocaladdress(){
        let inlocaladdress=document.getElementById("inlocaladdress");
        let inputvalue=inlocaladdress.getElementsByClassName("inlocalMap")[0];
        let inlocalIcon=inlocaladdress.getElementsByTagName("img")[0];
        inputvalue.addEventListener("keyup", function (event) {
            if(inputvalue.value.length>0){
                inlocalIcon.style.backgroundColor="#0bacf5";
                console.log("have!")
            }else{
                inlocalIcon.style.backgroundColor="#fff";
            }
            console.log(event.keyCode);
        });
    },

    //基本信息保存提交
    baseInfSaveCheck() {
        theFormCheck.formcheckChange("bbs_baseInfForm",0);

    },
    
    //编辑添加按钮初始化
    bianjitinajia() {
        let editor=document.getElementsByClassName("editor");
        let addeditor=document.getElementsByClassName("addeditor");
        let cfbfbb_show=document.getElementsByClassName("cfbfbb_show");
        let cfbfbb_write=document.getElementsByClassName("cfbfbb_write");

        for(let i=0;i<editor.length;i++){
            editor.value=i;
            let closebianjitianjia=cfbfbb_write[i].getElementsByClassName("closebianjitianjia")[0];
            let heightchangediv=cfbfbb_write[i].getElementsByClassName("heightchangediv")[0];
            heightchangediv.value=heightchangediv.style.height;
            editor[i].onclick= function () {
                cfbfbb_show[i].style.opacity=0;
                setTimeout(function () {
                    cfbfbb_show[i].style.display="none";
                    cfbfbb_write[i].style.position="relative";
                    cfbfbb_write[i].style.minHeight="100px";
                    cfbfbb_write[i].style.display="block";
                    heightchangediv.style.height="0px";
                    heightchangediv.style.display="block";
                    closebianjitianjia.style.display="inline-block";
                    setTimeout(function () {
                        heightchangediv.style.opacity=1;
                        cfbfbb_write[i].style.opacity="1";
                        closebianjitianjia.style.transform="rotate(225deg)";
                        heightchangediv.style.height=heightchangediv.value;
                    },100);
                },1000)
            }
        }
        for(let j=0;j<addeditor.length;j++){
            addeditor.value=j;
            let heightchangediv=cfbfbb_write[j+editor.length].getElementsByClassName("heightchangediv")[0];
            let closebianjitianjia_other=cfbfbb_write[j+editor.length].getElementsByClassName("closebianjitianjia_other")[0];
            heightchangediv.value=heightchangediv.style.height;
            addeditor[j].onclick= function () {
                cfbfbb_show[j+editor.length].style.opacity=0;
                setTimeout(function () {
                    cfbfbb_show[j+editor.length].style.display="none";
                    cfbfbb_write[j+editor.length].style.position="relative";
                    cfbfbb_write[j+editor.length].style.minHeight="100px";
                    cfbfbb_write[j+editor.length].style.display="block";
                    heightchangediv.style.height="0px";
                    heightchangediv.style.display="block";
                    closebianjitianjia_other.style.display="inline-block";
                    setTimeout(function () {
                        heightchangediv.style.opacity=1;
                        cfbfbb_write[j+editor.length].style.opacity="1";
                        closebianjitianjia_other.style.transform="rotate(135deg)";
                        heightchangediv.style.height=heightchangediv.value;
                        setTimeout(function () {
                            closebianjitianjia_other.style.transform="rotate(225deg)";
                        },500);
                    },100);
                },1000)
            }
        }
    },

    //About信息介绍范例查看
    aboutselfShowCheck() {
        let chakanfanli=document.getElementById("chakanfanli");
        let aboutself_fanli=document.getElementById("aboutself_fanli");
        let aboutmyself_textarea=document.getElementById("aboutmyself_textarea");
        let aboutselftextlength=document.getElementById("aboutselftextlength");
        let textlength=aboutselftextlength.getElementsByClassName("textlength")[0];
        let textlengthshow=aboutselftextlength.getElementsByClassName("textlengthshow")[0];
        let textlengt_setInterval;
        chakanfanli.onclick=()=>{
            aboutself_fanli.style.display="block";
            setTimeout(function () {
                aboutself_fanli.style.opacity="1";
            },10);
        };
        aboutmyself_textarea.addEventListener("focus",function(){
            textlengt_setInterval=setInterval(function () {
                textlength.innerHTML=aboutmyself_textarea.value.length;
                if(aboutmyself_textarea.value.length!=""){
                    aboutself_fanli.style.opacity="0";
                    setTimeout(function () {
                        aboutself_fanli.style.display="none";
                    },1000);
                }
                if(aboutmyself_textarea.value.length<50){
                    textlengthshow.innerHTML="<50";
                    textlengthshow.style.color="#0bacf5";
                    textlength.style.color="#7c7c7c";
                    aboutmyself_textarea.style.border="1px solid #dce0e0";
                }else if(aboutmyself_textarea.value.length>500){
                    textlengthshow.innerHTML=">500";
                    textlengthshow.style.color="#0bacf5";
                    textlength.style.color="#f33919";
                    aboutmyself_textarea.style.border="1px solid #f33919";
                }else {
                    textlengthshow.innerHTML="/500";
                    textlengthshow.style.color="#f33919";
                    textlength.style.color="#7c7c7c";
                    aboutmyself_textarea.style.border="1px solid #dce0e0";
                }
            },10);
            aboutmyself_textarea.addEventListener("focusout",function(){
                clearInterval(textlengt_setInterval);
            });
        });
    },

    //About信息提交
    aboutselfSaveCheck() {
        theFormCheck.formcheckChange("bbs_aboutselfFrom",1);
    },

    //擅长技能提交
    theskillAdd(){
        theFormCheck.formcheckChange("bbs_skillfFrom",2);
    },

    //作品案例提交
    worksshow(){
        theFormCheck.formcheckChange("bbs_worksFrom",3);
        //作品案例描述提示
        function workshow_alert(){
            let workshow_fanli=document.getElementById("workshow_fanli");
            let worksshow_textarea=document.getElementById("worksshow_textarea");
            let workshowlength=document.getElementById("workshowlength");
            let textlength=workshowlength.getElementsByClassName("textlength")[0];
            let textlengthshow=workshowlength.getElementsByClassName("textlengthshow")[0];
            let textlengt_setInterval;
            worksshow_textarea.addEventListener("focus",function(){
                textlengt_setInterval=setInterval(function () {
                    if(worksshow_textarea.value.length!=""){
                        workshow_fanli.style.opacity="0";
                        setTimeout(function () {
                            workshow_fanli.style.display="none";
                        },1000);
                    }
                    textlength.innerHTML=worksshow_textarea.value.length;
                    if(worksshow_textarea.value.length>500){
                        textlengthshow.innerHTML=">500";
                        textlengthshow.style.color="#0bacf5";
                        textlength.style.color="#f33919";
                        worksshow_textarea.style.border="1px solid #f33919";
                    }else {
                        textlengthshow.innerHTML="/500";
                        textlengthshow.style.color="#0bacf5";
                        textlength.style.color="#7c7c7c";
                        worksshow_textarea.style.border="1px solid #dce0e0";
                    }
                },10);
                worksshow_textarea.addEventListener("focusout",function(){
                    clearInterval(textlengt_setInterval);
                    if(worksshow_textarea.value.length==""){
                        workshow_fanli.style.display="block";
                        setTimeout(function () {
                            workshow_fanli.style.opacity="1";
                        },10);
                    }
                });
            });
        }
        workshow_alert();

        //详细图动态效果
        function workshow_detialsshow(){
            let workshow_detials_dl=document.getElementById("workshow_detials_dl");
            let workshow_detials_dd=workshow_detials_dl.getElementsByTagName("dd");
            let workshow_sendlocalhost=workshow_detials_dl.getElementsByClassName("workshow_sendlocalhost");
            for(let i=0;i<workshow_detials_dd.length;i++){
                workshow_detials_dd[i].value=i;
                workshow_detials_dd[i].addEventListener("mouseover", function () {
                    for(let j=0;j<workshow_detials_dd.length;j++){
                        if(j==this.value){
                            workshow_sendlocalhost[j].style.display="block";
                            workshow_detials_dd[j].style.background="url('./image/backgroundline.png') no-repeat 0 0 #fff";
                        }else{
                            workshow_detials_dd[j].style.background="rgba(0,0,0,0)";
                            workshow_sendlocalhost[j].style.display="none";
                        }
                    }
                })
            }
        }
        workshow_detialsshow();

        //作品案例高度动态
        function workshow_hegihtchange(){
            let cfbfbb_write=document.getElementsByClassName("cfbfbb_write")[3];
            let workshow_list=cfbfbb_write.getElementsByClassName("workshow_list")[0];
            let heightchangediv=cfbfbb_write.getElementsByClassName("heightchangediv")[0];
            let workshow_inlist=workshow_list.getElementsByClassName("workshow_inlist");
            heightchangediv.value=heightchangediv.style.height;
            setInterval(function () {
                if(workshow_inlist.length<=4){
                    //235px
                    heightchangediv.style.height=parseInt(heightchangediv.value)+235+"px";
                }else{
                    let height_count=parseInt(workshow_inlist/4);
                    heightchangediv.style.height=parseInt(heightchangediv.value)+235*height_count+"px"
                }
            },1000)
        }
        workshow_hegihtchange();
    },

};
(function () {
    HKWselfpage_HTML.init();
})();
//HKWselfpage_HTML.baseInfSaveCheck();
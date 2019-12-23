//实现点击品牌图片定位到
	var change=document.getElementById("change");
	var changeImg=document.getElementById("changeImg");
	var changelist=document.getElementById("changelist");
	var changeImglist=changelist.getElementsByTagName('img');
	var imgagesList1=["images/dapai1.webp","images/dapai2.webp","images/dapai3.webp",
	"images/dapai4.webp","images/dapai5.webp","images/dapai6.webp"];
	var imgagesList2=["images/haopai1.webp","images/haopai2.webp","images/haopai3.webp",
	"images/haopai4.webp","images/haopai5.webp","images/haopai6.webp"];
	var imgagesList3=["images/jingdian1.webp","images/jingdian2.webp","images/jingdian3.webp",
	"images/jingdian4.webp","images/jingdian5.webp","images/jingdian6.webp"];
	var testbtn=document.getElementsByClassName('testbtn');
	var test=document.getElementsByClassName("test");
	var changesrc=document.getElementById("changesrc");
	var movielist=document.getElementsByClassName("movie");
	var changea=document.getElementById("changea");
	var hide=document.getElementsByClassName("hide");
	var shoppingCar=document.getElementById("shoppingCar");
	var check=1;
	changeImg.onclick=function(){
		if(changesrc.getAttribute("src")=="images/Olay.jpg"){
			changea.setAttribute("href","#olay");
		}
		else if (changesrc.getAttribute("src")=="images/beidema.webp") {
			changea.setAttribute("href","#beidema");
		}
		else if (changesrc.getAttribute("src")=="images/SK.jpg") {
			changea.setAttribute("href","#sk2");
		}
	}
	change.children[0].style.background="red";
	change.children[0].onclick=function(){
		this.style.background="red";
		change.children[1].style.background="white";
		change.children[2].style.background="white";
		changesrc.setAttribute("src","images/SK.jpg");
		for (var i = 0; i < imgagesList1.length; i++) {
			changeImglist[i].setAttribute("src",imgagesList1[i]);
		}
	}
	change.children[1].onclick=function(){
		this.style.background="red";
		change.children[0].style.background="white";
		change.children[2].style.background="white";
		changesrc.setAttribute("src","images/beidema.webp");
		for (var i = 0; i < imgagesList1.length; i++) {
			changeImglist[i].setAttribute("src",imgagesList2[i]);
		}
	}
	change.children[2].onclick=function(){
		this.style.background="red";
		change.children[0].style.background="white";
		change.children[1].style.background="white";
		changesrc.setAttribute("src","images/Olay.jpg");
		for (var i = 0; i < imgagesList1.length; i++) {
			changeImglist[i].setAttribute("src",imgagesList3[i]);
		}
	}
	//上滑实现图片移动
	for (var i = 0; i < movielist.length; i++) {
		movielist[i].onmouseover=function(){
			this.classList.add("borderwidth");
			this.children[1].style.display="block";
		}
		movielist[i].onmouseout=function(){
			this.classList.remove("borderwidth");
			this.children[1].style.display="none";
		}
	}
	
	for (var i = 0; i < hide.length; i++) {
		hide[i].onclick=function(){
			if(this.style.backgroundImage.indexOf("car2")!=-1){
				this.style.backgroundImage="url(images/car.jpg)";
				shoppingCar.innerHTML=parseInt(shoppingCar.innerHTML)-1;
			}
			else{
				this.style.backgroundImage="url(images/car2.jpg)";
				shoppingCar.innerHTML=parseInt(shoppingCar.innerHTML)+1;
			}	

		}
	}
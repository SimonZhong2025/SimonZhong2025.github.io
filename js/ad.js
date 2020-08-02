function addV(){ 
	var vdiv = '<div class="type-panel"><hr style="border: 1px solid #f5f5f5; border-image: none;"><div class="se-type">骞垮憡鍖�</div><a href="https://www.onlineit.cn/so/" target="_blank"><div style="width: 100%;"><img src="/search/js/20200531.jpg" style="width: 100%;height: 100%;"></div></a></div>';
	var vcurrent = document.getElementById("se-all");
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "se-all")
	newDiv.innerHTML = vdiv;
	vcurrent.parentNode.insertBefore(newDiv, vcurrent.nextSibling);
	
	var delbox = document.getElementById("scroll-bar");  
	delbox.parentNode.removeChild(delbox);  
	
}setTimeout(addV,1000); 

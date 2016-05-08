
function download(img) {

	var link = document.createElement("a");
	
	link.href = img.src;
	
	link.download = true;
	
	link.style.display = "none";
	
	var evt = new MouseEvent("click", {
	
		"view": window,
		
		"bubbles": true,
		
		"cancelable": true
		
	});
	
	document.body.appendChild(link);
	
	link.dispatchEvent(evt);
	
	document.body.removeChild(link);
	
	console.log("Downloading...");
	
}


function downloadAll(imgs, ext, limit) {

	if (ext) {
	
		ext = "." + ext;
		
		imgs = [].slice.call(imgs).filter(function(img) {
		
			var src = img.src;
			
			return (src && (src.indexOf(ext, src.length - ext.length) !== -1));
			
		});
		
	}
	
	limit = (limit && (0 <= limit) && (limit <= imgs.length)) ? limit : imgs.length;
	
	for (var i = 0; i < limit; i++) {
	
		var img = imgs[i];
		
		console.log("IMG: " + img.src + " (", img, ")");
		
		download(img);
		
	}
	
}

function doit() {

	var imgs = document.querySelectorAll("img");
	
	downloadAll(imgs, "jpg", -1);
	
}

function addDownloadBtn() {

	var btn = document.createElement("button");
	
	btn.innerText = "Download all images";
	
	btn.addEventListener("click", doit);
	
	btn.style.position = "fixed";
	
	btn.style.top = btn.style.left = "0px";
	
	document.body.appendChild(btn);
	
}

addDownloadBtn();

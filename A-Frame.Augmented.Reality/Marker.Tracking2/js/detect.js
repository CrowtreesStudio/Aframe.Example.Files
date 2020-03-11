//AFRAME.registerComponent('listen',{
//	init(){
//		
//		let thisguy = this.el;
//		
//		// event constructor
//		let event = new CustomEvent("three-visible",{
//			detail:{
//				allvisible:true
//			}
//		});
//
//		thisguy.dispatchEvent(event);
//		
//		thisguy.addEventListener("three-visible", function(e){process(e.detail)});
//	},
//	
//	hideObj(){
//		console.log("hide objects");
//	}
//})


AFRAME.registerComponent('registerevent',{
    init(){
        
        let marker = this.el;
        
        marker.addEventListener('markerFound', function(){
            let markerID = marker.id;
            message.style.visibility = "visible";
			words.innerHTML = "Marker "+markerID+" found";
            console.log("marker found", markerID);
        });
        
        marker.addEventListener('markerLost', function(){
            let markerID = marker.id;
            message.style.visibility = "hidden";
            console.log("marker lost", markerID);
        });
    }
});



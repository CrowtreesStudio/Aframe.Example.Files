let doorObj;
let loaded = false;

window.onload = ()=>{
//    console.log("window loaded");
    init();
}

function init(){
    this.el=document.querySelector("#level") ;
//    console.log(this.el);
    this.el.addEventListener('model-loaded', ()=>{
//        console.log("init parses model");
        loaded = true;
        const obj = this.el.getObject3D('mesh');

        obj.children.forEach((model)=>{
            model.receiveShadow=true;
            if(model.name === "ground"){
                model.castShadow=false;
            }else{
                model.castShadow=true;
                model.material.shadowSide=1;
            }
            if(model.name==='door'){
                console.log("found the door");
                doorObj=model;
                console.log(doorObj);
            }
            console.log(model.name);
        });
        console.log(doorObj.name);
    });
    
    this.el2=document.querySelector("#non-player") ;
//    console.log(this.el2);
//    console.log("whats up");
    this.el2.addEventListener('model-loaded', ()=>{
//        console.log("second parses model");
        const obj2 = this.el2.getObject3D('mesh').children[0];
        
        obj2.children.forEach((model)=>{
            model.receiveShadow=true;
            model.castShadow=true;
            model.material.shadowSide=1;
            
//            console.log(model);
        })
    });
}

AFRAME.registerComponent('nav-pointer', {
    init:function(){
        const el = this.el;
//        console.log(el);
//        console.log(el.sceneEl);       
        
        
        // On Click, send NPC to the target location.
        el.addEventListener('click', (e)=>{
            const ctrlEl = el.sceneEl.querySelector('[nav-agent]');
            ctrlEl.setAttribute('nav-agent', {
                active:true,
                destination:e.detail.intersection.point
            });
        });
        
        // When hovering on the nav mesh, show a green cursor.
        el.addEventListener('mouseenter', ()=>{
            el.setAttribute('material', {color: 'green'});
        });
        el.addEventListener('mouseleave', ()=>{
           el.setAttribute('material', {color: 'crimson'}); 
        });
        
        // Refresh the raycaster after models load.
        if(loaded){
            el.sceneEl.addEventListener('object3dset', ()=>{
                this.el.Components.raycaster.refreshObjects();
            });
        };
        
    }
})

//AFRAME.registerComponent('portal-marker',{
//    update: function(){
//        console.log("Here");
//        console.log(doorObj);
//        this.el.setObject3D('door', doorObj);
//    }
//})








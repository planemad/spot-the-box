!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class o{constructor(t){this.data,this.emitter=t,this.elem=document.querySelector(".js-btn-removed"),this.onClick=this.onClick.bind(this),this.elem.addEventListener("click",this.onClick)}onClick(){const t=document.querySelector(".btn-status--active");t&&t.classList.remove("btn-status--active"),this.elem.classList.add("btn-status--active");const e={...this.data,status:"removed"};this.emitter.emit("data-update",e)}}class i{constructor(t){this.data,this.emitter=t,this.elem=document.querySelector(".js-btn-present"),this.onClick=this.onClick.bind(this),this.elem.addEventListener("click",this.onClick)}onClick(){const t=document.querySelector(".btn-status--active");t&&t.classList.remove("btn-status--active"),this.elem.classList.add("btn-status--active");const e={...this.data,status:"present"};this.emitter.emit("data-update",e)}}class n{constructor(t){this.data,this.emitter=t,this.elem=document.querySelector(".js-btn-inoperable"),this.onClick=this.onClick.bind(this),this.elem.addEventListener("click",this.onClick)}onClick(){const t=document.querySelector(".btn-status--active");t&&t.classList.remove("btn-status--active"),this.elem.classList.add("btn-status--active");const e={...this.data,status:"inoperable"};this.emitter.emit("data-update",e)}}class a{constructor(t){this.elem=document.querySelector(".js-btn-save"),this.emitter=t,this.active=!1,this.data=[],this.update=this.update.bind(this),this.onClick=this.onClick.bind(this),this.elem.addEventListener("click",this.onClick)}async onClick(){await fetch("https://khab7rvd6c.execute-api.us-east-1.amazonaws.com/dev/mailbox",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}),this.data={},this.emitter.emit("data-save")}update(t){this.active||(this.active=!0,this.elem.disabled=!1),this.data=t}}var c=class{constructor(t){this.emitter=t,this.containerElem=document.querySelector(".js-data-entry-container"),this.removedBtn=new o(t),this.presentBtn=new i(t),this.inoperableBtn=new n(t),this.saveBtn=new a(t),this.collectionBoxInfo=document.querySelector(".js-collection-box-info"),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.update=this.update.bind(this)}update(t){const e=t.properties,s={outlet:e.OUTLETID,lat:t.geometry.coordinates[1],lng:t.geometry.coordinates[0]},o=document.querySelector(".btn-status--active");o&&o.classList.remove("btn-status--active");const i=document.querySelector(".collection-box-lobby-note");i.classList.add("collection-box-lobby-note--hidden"),"USPS COLLECTION BOX - PO LOBBY"==e.BUSNAME&&i.classList.remove("collection-box-lobby-note--hidden"),this.removedBtn.data=s,this.presentBtn.data=s,this.collectionBoxInfo.innerHTML=`<p>Outlet ID: ${e.OUTLETID}</p><p>Type: ${e.BUSNAME}</p><p>Address: ${e.ADDR1}</p>`}show(t){this.containerElem.classList.remove("data-entry-container--hidden"),this.update(t)}hide(){this.containerElem.classList.add("data-entry-container--hidden")}};class r{constructor(t){this.emitter=t,this.elem=document.querySelector(".js-btn-back"),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.onClick=this.onClick.bind(this),this.elem.addEventListener("click",this.onClick)}onClick(){this.emitter.emit("show-map"),this.hide()}show(){this.elem.classList.remove("btn-back--hidden")}hide(){this.elem.classList.add("btn-back--hidden")}}var l=class{constructor(){this.timeOut,this.elem=document.querySelector(".snack"),this.showSnack=this.showSnack.bind(this)}showSnack(){clearTimeout(this.timeOut),this.elem.classList.remove("snack--hidden"),this.elem.classList.add("snack--visible"),this.timeOut=setTimeout(()=>{this.elem.classList.remove("snack--visible"),setTimeout(()=>{this.elem.classList.add("snack--hidden")},500)},2500)}};var d,u=class{constructor(t){this.emitter=t,this.modal=document.querySelector(".js-modal"),this.background=document.querySelector(".js-modal__background"),this.title=document.querySelector(".modal-title"),this.body=document.querySelector(".js-modal__body"),this.continueBtn=document.querySelector(".js-modal-continue-btn"),this.aboutBtn=document.querySelector(".js-btn-about"),this.open=this.open.bind(this),this.close=this.close.bind(this),this.addEventListeners()}addEventListeners(){this.continueBtn.addEventListener("click",this.close),this.aboutBtn.addEventListener("click",this.open)}open(){this.modal.classList.add("modal--visible"),this.background.classList.add("modal__background--visible"),this.body.classList.add("modal__body--visible")}close(){this.modal.classList.remove("modal--visible"),this.background.classList.remove("modal__background--visible"),this.body.classList.remove("modal__body--visible"),this.emitter.emit("modal-close")}};{const t={all:d=d||new Map,on:function(t,e){var s=d.get(t);s&&s.push(e)||d.set(t,[e])},off:function(t,e){var s=d.get(t);s&&s.splice(s.indexOf(e)>>>0,1)},emit:function(t,e){(d.get(t)||[]).slice().map((function(t){t(e)})),(d.get("*")||[]).slice().map((function(s){s(t,e)}))}};let e=!1;new u(t);const s=new c(t),o=new r(t),i=new l(t);function h(){document.querySelector(".overview-container").classList.remove("overview-container--hidden")}t.on("point-select",s.show),t.on("point-select",(function(){document.querySelector(".overview-container").classList.add("overview-container--hidden")})),t.on("point-select",o.show),t.on("data-update",s.saveBtn.update),t.on("show-map",h),t.on("show-map",s.hide),t.on("data-save",h),t.on("data-save",s.hide),t.on("data-save",i.showSnack),t.on("data-save",o.hide),t.on("data-save",()=>{fetch("https://khab7rvd6c.execute-api.us-east-1.amazonaws.com/dev/mailbox").then(t=>t.json()).then(t=>{n.getSource("collection-box-surveyed-src").setData(t)})}),t.on("modal-close",(function(){e||navigator.geolocation&&navigator.geolocation.getCurrentPosition(m);e=!0})),mapboxgl.accessToken="pk.eyJ1IjoicnVzc2JpZ2dzIiwiYSI6ImNrZHg2am55ejE3aHYyeWtqOGtocjh4ejgifQ.Qg_LH8LUNchJZBPsqDme9g";const n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-98.5795,39.8283],zoom:5});function m(t){n.flyTo({center:[t.coords.longitude,t.coords.latitude],zoom:12})}n.addControl(new MapboxGeocoder({accessToken:mapboxgl.accessToken,mapboxgl:mapboxgl})),n.addControl(new mapboxgl.NavigationControl),n.addControl(new mapboxgl.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),n.on("load",(function(){fetch("https://spot-the-box.s3.amazonaws.com/reports.json").then(t=>t.json()).then(t=>{n.addSource("collection-box-surveyed-src",{type:"geojson",data:t});n.addLayer({id:"collection-boxes-surveyed",type:"circle",source:"collection-box-surveyed-src",paint:{"circle-color":["match",["get","status"],"removed","#FF0000","present","#008000","#004B87"],"circle-radius":{base:4,stops:[[9,4],[12,6],[16,15],[18,30],[22,180]]}}})}),n.addSource("collection-box-src",{type:"vector",url:"mapbox://mikelmaron.3ws9y5k1"}),n.addLayer({id:"collection-boxes",type:"circle",source:"collection-box-src","source-layer":"collection_box_trim_valid-0tbyft",paint:{"circle-color":"#004B87","circle-radius":{base:4,stops:[[9,4],[12,6],[16,15],[18,30],[22,180]]}}}),n.on("mouseenter","collection-boxes-surveyed",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","collection-boxes-surveyed",(function(){n.getCanvas().style.cursor=""})),n.on("mouseenter","collection-boxes",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","collection-boxes",(function(){n.getCanvas().style.cursor=""})),n.on("click",(function(e){let s=n.queryRenderedFeatures(e.point,{layers:["collection-boxes-surveyed"]});if(s.length){const t=s[0],o=t.geometry.coordinates.slice(),i=t.properties.status,a=t.properties.outlet,c=parseFloat(t.properties.createdAt),r=new Date(1e3*c),l=`${r.getMonth()+1}-${r.getDate()}-${r.getFullYear()} ${r.getHours()}:${r.getMinutes()}`;for(;Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;(new mapboxgl.Popup).setLngLat(o).setHTML(`<strong>Outlet ID: ${a}</strong><p>Status: ${i}</p><p>Surveyed on:${l}</p>`).addTo(n)}else s=n.queryRenderedFeatures(e.point,{layers:["collection-boxes"]}),s.length&&t.emit("point-select",s[0])}))}));"mediaDevices"in navigator&&console.log("media supported")}}]);
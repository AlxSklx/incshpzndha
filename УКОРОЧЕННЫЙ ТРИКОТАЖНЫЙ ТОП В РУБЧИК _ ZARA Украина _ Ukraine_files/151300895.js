!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(150),i=[t];i.push(n(152)),i.push(n(158)),i.push(n(161)),i.push(n(164)),i.push(n(166)),i.push(n(176)),i.push(n(179)),i.push(n(182)),i.push(n(186)),i.push(n(189)),i.push(n(193)),i.push(n(197)),i.push(n(202)),i.push(n(203)),i.push(n(204)),i.push(n(207)),i.push(n(208)),i.push(n(211)),i.push(n(212)),i.push(n(216)),i.push(n(219)),g.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(84),a=n(23),o=n(16);n(128);var s=o.get("stores/directive"),u=n(87);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(131),d=n(116),f=n(132),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["12124613791"], "experiments": [{"weightDistributions": [{"entityId": "12098073110", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "12128241704", "actions": [], "name": null}, {"id": "12098073110", "actions": [{"viewId": "12124613791", "changes": [{"dependencies": [], "type": "custom_code", "id": "DFA7D5C7-AB3E-4841-83EA-3C785A4BE011", "value": function($){function leerCookie(str) {
	if (document.cookie.indexOf(";")==-1) return "";
	var cookies = document.cookie.split(";");
	for (i=0;i<cookies.length;i++) {
		if (cookies[i].split("=")[0].trim()==str) {
			return cookies[i].split("=")[1];
		}
	}
	return "";
}

function borrarCookie(str) {
	document.cookie = str + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = str + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;Domain=zara.com;';
}


function isATransaction (expCookie, ref1, ref2, ref3) {
	if (expCookie.indexOf(ref1) > -1 || expCookie.indexOf(ref2) > -1 || expCookie.indexOf(ref3) > -1){
		return true;
	} else {
		return false;
	}
}

setTimeout(function() {
	//'use strict';
	
	//if (!App.expApi) return false; // We're not in the NWS
  
  	window.optimizely = window.optimizely || [];
	
	optimizely.push(['setDimensionValue', 'by_country', window.location.pathname.substr(1,2)]);
	

	
	var expApi = window.zara.expApi;

	var langCode = window.location.pathname.substr(1,2);
	

	

			
			var articulos = window.zara.viewPayload.order.items;
			
			

			//window.optimizely = window.optimizely || [];
		  
			// ******************************************************************** 
			var revenueEvents = new Array();
			var item_price;
			// ********************************************************************

			//var orderId = ctx.dom.findEl('#orderId').innerText.split(': ')[1];

			//var expCookieTest = ctx.cookies.read('Cookie_Checkout_Test') || '';	
       

  
  
  
  
  /****************COOKIES ZAPATOS Y BOLSOS HOMBRE */
   var expCookieAddToCartHombreZapatos = leerCookie('COOKIE_ATC_HOMBRE_ZAPATOS_V2') || '';

  
  
  
  
  
  /****************FIN COOKIES ZAPATOS Y BOLSOS HOMBRE */

  
  /***** COOKIES CAMISAS WOMAN ****////
  var expCookieAddToCartCamisasWoman = leerCookie('ATC_BLOQUES_CAMISAS_WOMAN_V3') || '';
  /*****FIN CAMISAS WOMAN****///
  

  
    /***** COOKIES SIMILARES RELACIONADOS ****////
  var expCookieAddToCartRelacionados = leerCookie('COOKIE_CHANGE_POSITION_PRODUCT_INFO_MATCH') || '';
  var expCookieAddToCartRelacionados2 = leerCookie('COOKIE_ATC_REL_CARRUSEL') || '';
  var expCookieAddToCartSimilares = leerCookie('COOKIE_CHANGE_POSITION_PRODUCT_INFO_SIMILAR') || '';
  var expCookieAddToCartSimilares2 = leerCookie('COOKIE_ATC_SIM_CARRUSEL') || '';
  
  var expCookieATCGlobal = leerCookie('COOKIE_ADD_TO_CART_GLOBAL') || '';

  /*****FIN COOKIES SIMILARES RELACIONADOS****///
  
  /***** COOKIES ORDEN IT ****////
  var expCookieAddToCartWomanVestidos = leerCookie('ATC_ORDEN_VESTIDOS_WOMANV2') || '';
  var expCookieAddToCartWomanBlazer = leerCookie('ATC_ORDEN_BLAZER_WOMANV2') || '';
  var expCookieAddToCartWomanPantalones = leerCookie('ATC_ORDEN_PANTALONES_WOMANV2') || '';
  var expCookieAddToCartWomanCamisas = leerCookie('ATC_ORDEN_CAMISAS_WOMANV2') || '';
  var expCookieAddToCartWomanSpecialPrices = leerCookie('ATC_ORDEN_SPECIAL_PRICES_WOMANV2') || '';

  /*****FIN COOKIES ORDEN IT****///
  
	 /***** COOKIES ACCESORIOS MAN ****////
  var expCookieAddToCartAccesoriosMan = leerCookie('ATC_BLOQUES_MAN_ACCESORIOS') || '';
  /*****FIN ACCESORIOS****///
  
  var expCookieAddToCartContextualize = leerCookie('ATC_CONTEXTUALIZE2') || '';
  
  var expCookieAddToCartKPIVenta = leerCookie('ATC_KPI_VENTA') || '';
        
        
        
        
         var expCookieAddToCartDif = leerCookie('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2') || '';
         var expCookieAddToCartIg = leerCookie('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';
         var expCookieAddToCartSin = leerCookie('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
			
			var totalPrice = 0;
			
			var ourRef = "";
			
			var i, catId, productId, precio;
			
			for (i = 0; i < articulos.length; i++) {
   
				//catId = $orderItems[i].get('data-categoryId');
				//productId = $orderItems[i].get('data-productid');  
				//daData = $orderItems[i].get('data-ga-ecommerce-item');
				
				//productId = articulos[i].id;
				productId = articulos[i].detail.parentId;
				precio = articulos[i].totalAmount;
				catId = articulos[i].detail.categoryId;
        
 
        
        		precio = precio/100;
      if (zara.mkt.storeCode == 'ca'){
       precio = precio*0.66; 
      }
      
      if (zara.mkt.storeCode == 'us'){
       precio = precio*0.88; 
      }
      
      if (zara.mkt.storeCode == 'gb' || zara.mkt.storeCode == 'uk'){
       precio = precio*1.11; 
      }
      
       if (zara.mkt.storeCode == 'pl'){
        precio = precio*0.23; 
      }
       if (zara.mkt.storeCode == 'jp'){
        precio = precio*0.008; 
      }
      
      if (zara.mkt.storeCode == 'tr'){
        precio = precio*0.15; 
      }
       if (zara.mkt.storeCode == 'mx'){
        precio = precio*0.046; 
      }
      
      if (zara.mkt.storeCode == 'ru'){
        precio = precio*0.014; 
      }
      
      if (zara.mkt.storeCode == 'in'){
        precio = precio*0.013; 
      }
      
      if (zara.mkt.storeCode == 'au'){
        precio = precio*0.62; 
      }
      
      if (zara.mkt.storeCode == 'nz'){
        precio = precio*0.59; 
      }
        
        if (zara.mkt.storeCode == 'br'){
        precio = precio*0.23; 
      }
        
        if (zara.mkt.storeCode == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (zara.mkt.storeCode == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (zara.mkt.storeCode == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (zara.mkt.storeCode == 'kr'){
        precio = precio*0.000754650; 
      }
			if (zara.mkt.storeCode == 'hk'){
        precio = precio*0.113984; 
      }	
        if (zara.mkt.storeCode == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (zara.mkt.storeCode == 'mo'){
        precio = precio*0.110669; 
      }	
         if (zara.mkt.storeCode == 'my'){
        precio = precio*0.216420; 
      }	
				 if (zara.mkt.storeCode == 'th'){
        precio = precio*0.029; 
      }	
				 if (zara.mkt.storeCode == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (zara.mkt.storeCode == 'ro'){
        precio = precio*0.21; 
      }	
				
			
		var preciorev = precio*100;
				
				ourRef = window.zara.viewPayload.order.items[i].detail.reference.substr(2,7);
				var ourRef2 = window.zara.viewPayload.order.items[i].detail.reference.substr(1,7);
				
        
				
				
				
				

				
				
		 if (expCookieAddToCartHombreZapatos.indexOf(ourRef) > -1 || expCookieAddToCartHombreZapatos.indexOf(ourRef2) > -1 || expCookieAddToCartHombreZapatos.indexOf(productId) > -1){
   			window['optimizely'].push({type: "event",eventName: 'co_bloques_zapatos_hombre',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'co_bloques_hombre_total',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'rev_bloques_zapatos_hombre',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'rev_bloques_hombre_total',tags: {value: precio }});
 }
 
 
        
        
        
         /* FIN ZAPATOS Y BOLSOS HOMBRE */
        
        
        if (isATransaction (expCookieAddToCartCamisasWoman, ourRef, ourRef2, productId)){
        
   			 window['optimizely'].push({type: "event",eventName: 'checkout_bloques_total_woman',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'checkout_bloques_camisas_woman',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'revenue_bloques_total_woman',tags: {value: precio }});
          window['optimizely'].push({type: "event",eventName: 'revenue_bloques_camisas_woman',tags: {value: precio }});
		}
        
        
        
        
        
       
        
  
        
        
        if (isATransaction (expCookieATCGlobal, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_global',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_global',tags: {value: precio }});
       
  
		}
        
        
        
       if (isATransaction (expCookieAddToCartRelacionados, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_relacionado',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_relacionado',tags: {value: precio }});
  
		}
        if (isATransaction (expCookieAddToCartRelacionados2, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_relacionado',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_relacionado',tags: {value: precio }});
  
		}
        if (isATransaction (expCookieAddToCartSimilares, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_similar',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar',tags: {value: precio }});
  
		}
        if (isATransaction (expCookieAddToCartSimilares2, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar_relacionado_total',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_similar',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_similar',tags: {value: precio }});
  
		}
        
        if (isATransaction (expCookieAddToCartWomanVestidos, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_total_woman_vestidos',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_woman_vestidos',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_bloq_total_woman',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_bloq_total_woman',tags: {value: precio }});
  
		}
        
        if (isATransaction (expCookieAddToCartWomanBlazer, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_total_woman_blazer',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_woman_blazer',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_bloq_total_woman',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_bloq_total_woman',tags: {value: precio }});
  
		}
        if (isATransaction (expCookieAddToCartWomanPantalones, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_total_woman_pantalones',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_woman_pantalones',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_bloq_total_woman',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_bloq_total_woman',tags: {value: precio }});
  
		}
        
        if (isATransaction (expCookieAddToCartWomanCamisas, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_total_woman_camisas',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_woman_camisas',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_bloq_total_woman',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_bloq_total_woman',tags: {value: precio }});
  
		}
        
        
        if (isATransaction (expCookieAddToCartWomanSpecialPrices, ourRef, ourRef2, productId)){
        
   			window['optimizely'].push({type: "event",eventName: 'co_total_woman_special_prices',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_woman_special_prices',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_bloq_total_woman',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_bloq_total_woman',tags: {value: precio }});
  
		}
        
        if (isATransaction (expCookieAddToCartAccesoriosMan, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'co_total_man_accesorios',tags: {value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_man_accesorios',tags: {value: precio }});
  
		}
        
        
               if (isATransaction (expCookieAddToCartContextualize, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'CO_CONTEXTUALIZE_buscador',tags: {revenue:precio,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'REV_CONTEXTUALIZE_buscador',tags: {revenue:precio,value: precio }});
  
		}            
        
        
        
        if (isATransaction (expCookieAddToCartKPIVenta, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'CO_kpi_venta_buscador',tags: {revenue:precio,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'REV_kpi_venta_buscador',tags: {revenue:precio,value: precio }});
  
		}   
        
        
        if (isATransaction (expCookieAddToCartSin, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'co_rediseno_recomendador_sin_talla',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
        
        
        window['optimizely'].push({type: "event",eventName: 'rev_rediseno_recomendador_sin_talla',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
  
		}
       
        if (isATransaction (expCookieAddToCartDif, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'co_rediseno_recomendador_talla_diferente',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
        
        
        window['optimizely'].push({type: "event",eventName: 'rev_rediseno_recomendador_talla_diferente',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
  
		}
        
        
        if (isATransaction (expCookieAddToCartIg, ourRef, ourRef2, productId)){
        
        window['optimizely'].push({type: "event",eventName: 'co_rediseno_recomendador_talla_igual',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'co_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
        
        
        window['optimizely'].push({type: "event",eventName: 'rev_rediseno_recomendador_talla_igual',tags: {revenue:preciorev,value: precio }});
        window['optimizely'].push({type: "event",eventName: 'rev_total_rediseno_recomendador',tags: {revenue:preciorev,value: precio }});
  
		}
        
        
	
}
  


			var totalPriceRev = zara.analyticsData.order.totalPriceEUR.trim().replace('.','');

	   
			window["optimizely"].push({"type": "event","eventName": "trackRevenue","tags": {"revenue": totalPriceRev}});

			//ctx.cookies.remove('Cookie_Checkout_Test');


  
  
 
  	borrarCookie('ATC_BLOQUES_MAN_ACCESORIOS');
  
    borrarCookie('COOKIE_ATC_HOMBRE_ZAPATOS_V2');
    borrarCookie('COOKIE_ATC_HOMBRE_ZAPATOS_VESTIR_V2');
    borrarCookie('COOKIE_ATC_HOMBRE_BOLSOS_V2');

    borrarCookie('ATC_BLOQUES_CAMISAS_WOMAN_V3');
   
  
  	borrarCookie('COOKIE_CHANGE_POSITION_PRODUCT_INFO_MATCH');
  	borrarCookie('COOKIE_ATC_REL_CARRUSEL');
  	borrarCookie('COOKIE_CHANGE_POSITION_PRODUCT_INFO_SIMILAR');
  	borrarCookie('COOKIE_ATC_SIM_CARRUSEL');
  
  	borrarCookie('ATC_ORDEN_VESTIDOS_WOMANV2');
  	borrarCookie('ATC_ORDEN_BLAZER_WOMANV2');
  	borrarCookie('ATC_ORDEN_PANTALONES_WOMANV2');
  	borrarCookie('ATC_ORDEN_CAMISAS_WOMANV2');
  borrarCookie('ATC_ORDEN_SPECIAL_PRICES_WOMANV2');
  
  	borrarCookie('COOKIE_ATC_HOMBRE_ZAPATOS_V2');
  
  borrarCookie('ATC_CONTEXTUALIZE2');
        
        borrarCookie('ATC_KPI_VENTA');
        
        
        
        borrarCookie('COOKIE_ATC_SIN_RECOMENDADOR_V2');
  	borrarCookie('COOKIE_ATC_RECOMENDADOR_IGUAL_V2');
  	borrarCookie('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2');


		//});
		
	//});
	
},1000);
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "12097672287", "integrationSettings": null}], "id": "12095771640", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18181130364", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18053102027"], "experiments": [{"weightDistributions": [{"entityId": "18035842147", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18053102028", "actions": [{"viewId": "18053102027", "changes": [{"dependencies": [], "type": "custom_code", "id": "3a7133c5382a46ab81c3053ead52c40d", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18035842147", "actions": [{"viewId": "18053102027", "changes": [{"dependencies": [], "type": "custom_code", "id": "ed92948b5e114c33b88a16f997745677", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-kpi');
         console.log('tiebreak-sort-by-sale-kpi added');
         console.log(zara.expApi);
		 }
  
  if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-and-stock-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-and-stock-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-and-stock-kpi');
         console.log('tiebreak-sort-by-sale-and-stock-kpi added');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "ic";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18029931797", "integrationSettings": null}], "id": "18029812299", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18030012111", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18043521506"], "experiments": [{"weightDistributions": [{"entityId": "18053290825", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18035741769", "actions": [{"viewId": "18043521506", "changes": [{"dependencies": [], "type": "custom_code", "id": "abdc8d08e36b4a8ea48334ca2e50953c", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18053290825", "actions": [{"viewId": "18043521506", "changes": [{"dependencies": [], "type": "custom_code", "id": "4167b39fb25b42558ed6d790c8286c97", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-kpi');
         console.log('tiebreak-sort-by-sale-kpi added');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "uk";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18055900204", "integrationSettings": null}], "id": "18036121294", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18059511201", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18053290821"], "experiments": [{"weightDistributions": [{"entityId": "18035941706", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18035741767", "actions": [{"viewId": "18053290821", "changes": [{"dependencies": [], "type": "custom_code", "id": "1f645f0a7bb14fb2a29a0517e568357c", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18035941706", "actions": [{"viewId": "18053290821", "changes": [{"dependencies": [], "type": "custom_code", "id": "e50708e293794dd0b24ae896b5948df5", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-and-stock-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-and-stock-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-and-stock-kpi');
         console.log('tiebreak-sort-by-sale-and-stock-kpi added');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "es";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18024731891", "integrationSettings": null}], "id": "18037922181", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18034391439", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18063830289"], "experiments": [{"weightDistributions": [{"entityId": "18056520066", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18063750106", "actions": [{"viewId": "18063830289", "changes": [{"dependencies": [], "type": "custom_code", "id": "60b7470d06f24306965d73503e47f3f7", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18056520066", "actions": [{"viewId": "18063830289", "changes": [{"dependencies": [], "type": "custom_code", "id": "15a4a5a2c35040f5a0802ba84db94cdd", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  		
  
  
  	window.optimizely = window.optimizely || [];
var paises = "pt";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18052230233", "integrationSettings": null}], "id": "18052440211", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18056840055", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18056270162"], "experiments": [{"weightDistributions": [{"entityId": "18073250149", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18056710126", "actions": [{"viewId": "18056270162", "changes": [{"dependencies": [], "type": "custom_code", "id": "2a30ce64880649e5a55d32b51064955f", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18073250149", "actions": [{"viewId": "18056270162", "changes": [{"dependencies": [], "type": "custom_code", "id": "b50f7dac73ee46d8a280ee203d3f1951", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-kpi');
         console.log('tiebreak-sort-by-sale-kpi added');
         console.log(zara.expApi);
		 }
  
  		if(zara.expApi.activatedExperiments.indexOf('disable-contextualize') >= 0 ){        
console.log('disable-contextualize was already added');
} else {
         zara.expApi.activatedExperiments.push('disable-contextualize');
         console.log('disable-contextualize added');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "ie";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18044560092", "integrationSettings": null}], "id": "18054080308", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18060640280", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18089080241"], "experiments": [{"weightDistributions": [{"entityId": "18066030110", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18054720393", "actions": [{"viewId": "18089080241", "changes": [{"dependencies": [], "type": "custom_code", "id": "d3e692ec11724923a73057e13380ac72", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18066030110", "actions": [{"viewId": "18089080241", "changes": [{"dependencies": [], "type": "custom_code", "id": "277d38a625e5461d95bc08389b3d66b0", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-and-stock-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-and-stock-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-and-stock-kpi');
         console.log('tiebreak-sort-by-sale-and-stock-kpi added');
         console.log(zara.expApi);
		 }
  

  if(zara.expApi.activatedExperiments.indexOf('disable-contextualize') >= 0 ){        
console.log('disable-contextualize was already added');
} else {
         zara.expApi.activatedExperiments.push('disable-contextualize');
         console.log('disable-contextualize');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "ca";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18054360292", "integrationSettings": null}], "id": "18056630243", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18074950118", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18089000243"], "experiments": [{"weightDistributions": [{"entityId": "18060360243", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18069350247", "actions": [{"viewId": "18089000243", "changes": [{"dependencies": [], "type": "custom_code", "id": "d54fa6c01cc244d9b52f6f8294823a16", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	
  	window.optimizely = window.optimizely || [];
var paises = "de|us|fr|es|uk|jp|ru|tr|it|ca|pl|mx|br|be|po|kr|nl";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on('PRODUCT_SEARCH_NEW_SEARCH', function(data) {
        
				console.log("PRODUCT_SEARCH_NEW_SEARCH");
        //exec_exp();
			
			}, {
				origin: 'duplicados_buscador'
			});
        
      events.on('UPDATE_SEARCH_TERM', function(data) {
        
				console.log("UPDATE_SEARCH_TERM");
        
			
			}, {
				origin: 'duplicados_buscador'
			});
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18060360243", "actions": [{"viewId": "18089000243", "changes": [{"dependencies": [], "type": "custom_code", "id": "847364c79be64c7eb09bff1b0394134a", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	var expApi = App.expApi;
  				if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-and-stock-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-and-stock-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-and-stock-kpi');
         console.log('tiebreak-sort-by-sale-and-stock-kpi added');
         console.log(zara.expApi);
		 }
  
  	if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-kpi');
         console.log('tiebreak-sort-by-sale-kpi added');
         console.log(zara.expApi);
		 }
  
  if(zara.expApi.activatedExperiments.indexOf('disable-contextualize') >= 0 ){        
console.log('disable-contextualize was already added');
} else {
         zara.expApi.activatedExperiments.push('disable-contextualize');
         console.log('disable-contextualize');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "us";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	//var data = {index: 0,name: "V1WS_20191004_JOINLIFE_Watermark",alternative: "VARIANTE_A"}; //CD 150
	
  	//require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_exclude_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}

			}, {
				origin: 'experimento_exclude'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_exclude_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_exclude_buscador",});
				}
			
			}, {
				origin: 'experimento_exclude'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';
					
					if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}

					if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
						expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
						cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
					}
					console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartExclude = cookie.retrieve('ATC_EXCLUDE') || '';

				if (expCookieAddToCartExclude.indexOf(Ref) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}
				if (expCookieAddToCartExclude.indexOf(Ref2) == -1) {
				  expCookieAddToCartExclude += (expCookieAddToCartExclude == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_EXCLUDE', expCookieAddToCartExclude, {path:'/', expires:7});
				}

				console.log('add to cart exclude_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_exclude_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_exclude'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_exclude'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_exclude'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_exclude'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_exclude'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": null, "changes": null, "id": "18073010312", "integrationSettings": null}], "id": "18064270064", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18060320228", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18137850261"], "experiments": [{"weightDistributions": [{"entityId": "18114660107", "endOfRange": 5000}, {"entityId": "18114640264", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18114660107", "actions": [{"viewId": "18137850261", "changes": [{"dependencies": [], "type": "custom_code", "id": "cdd722261a6f4296949e48103c594f96", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	
  


  	window.optimizely = window.optimizely || [];
var paises = "es|nl|jp|pl|mx|pt|br|be|kr|ie";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	var data = {index: 0,name: "WS_20200519_disable-contextualize",alternative: "ORIGINAL"}; //CD 150
	if((window.location.pathname.substr(1,2) != 'es') && (window.location.pathname.substr(1,2) != 'be') && (window.location.pathname.substr(1,2) != 'kr') && (window.location.pathname.substr(1,2) != 'pt') && (window.location.pathname.substr(1,2) != 'jp')){
  	require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});
  }
    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_contextualize_buscador o');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_contextualize_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_contextualize_buscador o');
				  window['optimizely'].push({type: "event", eventName: "ctr_contextualize_buscador",});
				}

			}, {
				origin: 'experimento_contextualize'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_contextualize_buscador o');
				  window['optimizely'].push({type: "event", eventName: "ctr_contextualize_buscador",});
				}
			
			}, {
				origin: 'experimento_contextualize'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartcontextualize = cookie.retrieve('ATC_CONTEXTUALIZE2') || '';
					
					if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
						cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}

					if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
						cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}
					console.log('add to cart contextualize_buscador o');
					window['optimizely'].push({type: "event", eventName: "ATC_CONTEXTUALIZE_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartcontextualize = cookie.retrieve('ATC_CONTEXTUALIZE2') || '';

				if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
				  cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}
				if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}

				console.log('add to cart contextualize_buscador o');
					window['optimizely'].push({type: "event", eventName: "ATC_CONTEXTUALIZE_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_contextualize'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_contextualize'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_contextualize'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_contextualize'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			exec_exp();
			}, {
				origin: 'experimento_contextualize'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18114640264", "actions": [{"viewId": "18137850261", "changes": [{"dependencies": [], "type": "custom_code", "id": "e598eee78e184326ac025094e3ec1191", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  	
  

  if(zara.expApi.activatedExperiments.indexOf('disable-contextualize') >= 0 ){        
console.log('disable-contextualize was already added');
} else {
         zara.expApi.activatedExperiments.push('disable-contextualize');
         console.log('disable-contextualize');
         console.log(zara.expApi);
		 }
  	window.optimizely = window.optimizely || [];
var paises = "es|nl|jp|pl|mx|pt|br|be|kr|ie";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	var data = {index: 0,name: "WS_20200519_disable-contextualize",alternative: "VARIANTE_A"}; //CD 150
	if((window.location.pathname.substr(1,2) != 'es') && (window.location.pathname.substr(1,2) != 'be') && (window.location.pathname.substr(1,2) != 'kr') && (window.location.pathname.substr(1,2) != 'pt') && (window.location.pathname.substr(1,2) != 'jp')){
  	require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});
  }
    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_contextualize_buscador v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_contextualize_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_contextualize_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_contextualize_buscador",});
				}

			}, {
				origin: 'experimento_contextualize'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_contextualize_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_contextualize_buscador",});
				}
			
			}, {
				origin: 'experimento_contextualize'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartcontextualize = cookie.retrieve('ATC_CONTEXTUALIZE2') || '';
					
					if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
						cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}

					if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
						cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}
					console.log('add to cart contextualize_buscador v');
					window['optimizely'].push({type: "event", eventName: "ATC_CONTEXTUALIZE_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartcontextualize = cookie.retrieve('ATC_CONTEXTUALIZE2') || '';

				if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
				  cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}
				if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_CONTEXTUALIZE2', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}

				console.log('add to cart contextualize_buscador v');
					window['optimizely'].push({type: "event", eventName: "ATC_CONTEXTUALIZE_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_contextualize'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_contextualize'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_contextualize'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_contextualize'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			exec_exp();
			}, {
				origin: 'experimento_contextualize'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": ["and", "10831162406"], "changes": null, "id": "18130150509", "integrationSettings": null}], "id": "18110890197", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18151770740", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18126370287"], "experiments": [{"weightDistributions": [{"entityId": "18143140144", "endOfRange": 5000}, {"entityId": "18127880176", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18143140144", "actions": [{"viewId": "18126370287", "changes": [{"dependencies": [], "type": "custom_code", "id": "bbcbf9cd1a9c43dcbc5985561c521f22", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  		var expApi = App.expApi;
  


  	window.optimizely = window.optimizely || [];
var paises = "uk|fr|us|de|it|tr|ru|ca";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	var data = {index: 1,name: "WS_20200519_kpi_venta",alternative: "ORIGINAL"}; //CD 150


  if((window.location.pathname.substr(1,2) != 'uk') && (window.location.pathname.substr(1,2) != 'fr') && (window.location.pathname.substr(1,2) != 'us') && (window.location.pathname.substr(1,2) != 'de') && (window.location.pathname.substr(1,2) != 'it')){
  	require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

  } 
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_by-sale-kpi o');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_kpi_venta_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_kpi_venta_buscador o');
				  window['optimizely'].push({type: "event", eventName: "ctr_kpi_venta_buscador",});
				}

			}, {
				origin: 'experimento_contextualize'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_kpi_venta_buscador o');
				  window['optimizely'].push({type: "event", eventName: "ctr_kpi_venta_buscador",});
				}
			
			}, {
				origin: 'experimento_contextualize'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartcontextualize = cookie.retrieve('ATC_KPI_VENTA') || '';
					
					if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
						cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}

					if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
						cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}
					console.log('add to cart kpi_venta_buscador o');
					window['optimizely'].push({type: "event", eventName: "atc_kpi_venta_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartcontextualize = cookie.retrieve('ATC_KPI_VENTA') || '';

				if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
				  cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}
				if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}

				console.log('add to cart kpi_venta_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_kpi_venta_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_kpi_venta'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_kpi_venta'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_kpi_venta'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_kpi_venta'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			exec_exp();
			}, {
				origin: 'experimento_kpi_venta'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18127880176", "actions": [{"viewId": "18126370287", "changes": [{"dependencies": [], "type": "custom_code", "id": "40ec337b27d7412cad0caf0c588a0e8d", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/ 
 
   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
	
	if (!App.expApi) return false; // We're not in the NWS
  
  		var expApi = App.expApi;
  	
  		if(zara.expApi.activatedExperiments.indexOf('tiebreak-sort-by-sale-kpi') >= 0 ){        
console.log('tiebreak-sort-by-sale-kpi was already added');
} else {
         zara.expApi.activatedExperiments.push('tiebreak-sort-by-sale-kpi');
         console.log('tiebreak-sort-by-sale-kpi added');
         console.log(zara.expApi);
		 }


  	window.optimizely = window.optimizely || [];
var paises = "uk|fr|us|de|it|tr|ru|ca";
  if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
	window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});
  
	var expApi = window.zara.expApi;
	

	expApi.loader(function(require) {
		var countryCode = zara.mkt.countryCode.toLowerCase();
	var data = {index: 1,name: "WS_20200519_kpi_venta",alternative: "VARIANTE"}; //CD 150
	var expApi = window.zara.expApi;

  if((window.location.pathname.substr(1,2) != 'uk') && (window.location.pathname.substr(1,2) != 'fr') && (window.location.pathname.substr(1,2) != 'us') && (window.location.pathname.substr(1,2) != 'de') && (window.location.pathname.substr(1,2) != 'it')){
  require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});

  }
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
			var country = countryCode;
			var lang = window.zara.mkt.langCode;
		function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
			if (country == 'hk'){
        precio = precio*0.113984; 
      }	
        if (country == 'sg'){
        precio = precio*0.654725; 
      }	
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      }	
         if (country == 'my'){
        precio = precio*0.216420; 
      }	
				 if (country == 'th'){
        precio = precio*0.029; 
      }	
				 if (country == 'tw'){
        precio = precio*0.029; 
      }	
        	 if (country == 'ro'){
        precio = precio*0.21; 
      }	
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
	   
      }
     

      function exec_exp() {
        
        console.log('pag_by-sale-kpi v');
				  window['optimizely'].push({type: "event", eventName: "pag_vista_kpi_venta_buscador",});
        
      }

			
			
      
      events.on('BANNER_CLICK', function(data) {
      
				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_kpi_venta_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_kpi_venta_buscador",});
				}

			}, {
				origin: 'experimento_contextualize'
			});

      
      
      
			events.on('PRODUCT_LIST_PRODUCT_LINK_CLICK', function(data) {
       

				if(zara.analyticsData.pageType == 'PRODUCT_SEARCH_START'){
          console.log('ctr_kpi_venta_buscador v');
				  window['optimizely'].push({type: "event", eventName: "ctr_kpi_venta_buscador",});
				}
			
			}, {
				origin: 'experimento_contextualize'
			});
      
     
    
			




      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	     if(window.localStorage.getItem('ga_eec').indexOf('"listName":"/Buscador_Interno/Manual/') > -1){
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			

				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
					var expCookieAddToCartcontextualize = cookie.retrieve('ATC_KPI_VENTA') || '';
					
					if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
						cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}

					if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
						expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
						cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
					}
					console.log('add to cart kpi_venta_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_kpi_venta_buscador",tags: {value: atcvalue}});
;
				}
		
		
		} else {
    
	
			
			  var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));
			  
			 
				var expCookieAddToCartcontextualize = cookie.retrieve('ATC_KPI_VENTA') || '';

				if (expCookieAddToCartcontextualize.indexOf(Ref) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref;
				  cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}
				if (expCookieAddToCartcontextualize.indexOf(Ref2) == -1) {
				  expCookieAddToCartcontextualize += (expCookieAddToCartcontextualize == '' ? '' : '-') + Ref2;
				  cookie.store('ATC_KPI_VENTA', expCookieAddToCartcontextualize, {path:'/', expires:7});
				}

				console.log('add to cart kpi_venta_buscador v');
					window['optimizely'].push({type: "event", eventName: "atc_kpi_venta_buscador",tags: {value: atcvalue}});
			  
	 
			
        
		}
       }  
      }, {
        origin: 'experimento_kpi_venta'
      }); 
			
			
			events.on(events.types.NAVIGATION_START, function(data) {
			////console.log('navstart');
     
			}, {
				origin: 'experimento_kpi_venta'
			});

			events.on(events.types.CATEGORY_NAVIGATION, function() {
   
        ////console.log('category_navigation');
			}, {
			  origin: 'experimento_kpi_venta'
			});
			
			events.on(events.types.NAVIGATION_DONE, function(data) {

			
			}, {
				origin: 'experimento_kpi_venta'
			});
      
      events.on(events.types.PRODUCT_SEARCH_REQUESTED, function(data) {
				console.log('PRODUCT_SEARCH_REQUESTED');
			//exec_exp();
			}, {
				origin: 'experimento_kpi_venta'
			});
        
      
      
  
      

		});
	});
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": ["and", "10831162406"], "changes": null, "id": "18112530325", "integrationSettings": null}], "id": "18116450553", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18142782109", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18126860772"], "experiments": [{"weightDistributions": [{"entityId": "18126102945", "endOfRange": 5000}, {"entityId": "18146020923", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "18126102945", "actions": [{"viewId": "18126860772", "changes": [{"dependencies": [], "type": "custom_code", "id": "5721dfb7e2d64232bc13c08b0a0e76e4", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/  
    var stylesId = 'rediseno-guia-tallas';

  
    var css = '.product-card .size-recommender .bullet {background-color: #000;color: #fff;} .product-card .size-selector .size-select .size-list label.recommended:not(.back-soon):not(.disabled) {background: #fff;}  label.recommended:not(.back-soon):not(.disabled) .size-name {background-color: #000; color: #fff!important;border-radius: 50px;padding: 4px 6px;margin: -6px;} label.recommended .size-name.shorter{padding: 4px 8px!important;margin: -8px!important;} label.recommended .size-name.longer{padding: 4px 4px!important;margin: -4px!important;} .product-card .size-selector .size-select .size-list label .size-name-container { overflow: visible !important;}'; 
  
  // .product-card .size-selector .size-select .size-list label.recommended._disabled .size-name{background: #e5e5e5;}
   

  
    var head = document.head || document.getElementsByTagName('head')[0];    
    var style = document.createElement('style');
    

    style.type = 'text/css';
    style.id = stylesId;
    


    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }     

    

   // head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
  
    //if (!App.expApi) return false; // We're not in the NWS
    window.optimizely = window.optimizely || [];
    var paises = "es|fr|uk|us|ca|it|be|de|kr|jp|pt";
    if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
    window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});

    var expApi = window.zara.expApi;
  

  expApi.loader(function(require) {
  var countryCode = zara.mkt.countryCode.toLowerCase();
  var data = {index: 5,name: "WS_20200527_REDISENO_GUIA_TALLAS_V2",alternative: "ORIGINAL"}; //CD 155
  
 require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});
    
    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
      var country = countryCode;
      var lang = window.zara.mkt.langCode;
      
     
    function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
      if (country == 'hk'){
        precio = precio*0.113984; 
      } 
        if (country == 'sg'){
        precio = precio*0.654725; 
      } 
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      } 
         if (country == 'my'){
        precio = precio*0.216420; 
      } 
         if (country == 'th'){
        precio = precio*0.029; 
      } 
         if (country == 'tw'){
        precio = precio*0.029; 
      } 
           if (country == 'ro'){
        precio = precio*0.21; 
      } 
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
     
      }
      
      
      function exec_exp(){
        var i = 0;
        var interv = setInterval(function(){
          if($('label .size-name').length){
            clearInterval(interv);
        $('label .size-name').each(function(id, sizename){
if($(this).width() < 11){
 $(this).addClass('shorter');
} else {
if($(this).width() > 15){
 $(this).addClass('longer');
}
}
console.log($(this).width());
});
          } else {
               console.log('NaN');
          if(i <= 300) clearInterval(interv);
          }
        },10);
      }
     
         
 			events.on(events.types.PRODUCT_DETAILS_SIZE_SUGGESTER	, function(data) {
      	console.log('Click Recomendador O');
    		window['optimizely'].push({type: "event", eventName: "click_rediseno_recomendador",});
     	}, {
        origin: 'rediseno_recomendador'
       });
      
      events.on(events.types.PRODUCT_DETAILS_SIZE_GUIDE, function(data) {
      	console.log('Click Guia Tallas O');
    		window['optimizely'].push({type: "event", eventName: "click_rediseno_recomendador_guia",});
     	}, {
        origin: 'rediseno_recomendador'
       });
      

      
        events.on(events.types.NAVIGATION_START, function(data) {
        //console.log('navstart');



        }, {
            origin: 'rediseno_recomendador'
        });

        events.on(events.types.NAVIGATION_DONE, function(data) {
            
           exec_exp();

        }, {
            origin: 'similares_relacionados'
        });
      
      
     
      function get_pId_from_url(){
      var pattern_pId = "(p)([0-9]+)";
      var prodId = 0;
      if (window.location.href.match(pattern_pId)) {
        prodId = window.location.href.match(pattern_pId)[2];
      }
      return prodId;
    }
      
      function get_pId_from_url2(){
      var pattern_pId = "(v1=)([0-9]+)";
      var prodId = 0;
      if (window.location.href.match(pattern_pId)) {
        prodId = window.location.href.match(pattern_pId)[2];
      }
      return prodId;
    }
      
      
      
      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
	  
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			
			
				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
          var atcvalue = calc_precio(parseFloat(data.products[0].price));
          
          //var tallaRecomendada = data.recommendedSize;
					//var tallaSeleccionada = data.selectedSize;
          
          var tallaRecomendada = data.products[0].recommendedSize;
          console.log(tallaRecomendada);
          var tallaSeleccionada = data.products[0].selectedSize;
          console.log(tallaSeleccionada);
          
          if($('.size-guide-btn.size-recommender._size-recommender').length){
          	
            console.log('dentro comprobación uso recomendador');
            
            if(tallaRecomendada == undefined) {
            	console.log('sin talla');
              
              var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
              if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador o');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_sin_talla",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
            }else{

              if (tallaRecomendada == tallaSeleccionada) {
                console.log('talla igual');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual o');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

              } else {
                   console.log(tallaSeleccionada);
                if (tallaSeleccionada == undefined) {
                		console.log('talla igual sin seleccionar');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
                } else {
                  
                  console.log('talla distinta');
                console.log(tallaSeleccionada);
                  var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2') || '';

                  if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }

                  if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }
                  console.log('add to cart talla diferente v');
                  window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
                  window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

                
                }


              }

          	}
          
          } else {
            var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
							if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador o');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
          }
					
				}
			
		
		} else {
    
				var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));	
      
      	var tallaRecomendada = data.recommendedSize;
				var tallaSeleccionada = data.selectedSize;
      
			  if($('.size-guide-btn.size-recommender._size-recommender').length){
          	
            console.log('dentro comprobación uso recomendador');
            
            if(tallaRecomendada == undefined) {
            	console.log('sin talla');
              
              var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
              if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador o');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_sin_talla",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
            }else{

              if (tallaRecomendada == tallaSeleccionada) {
                console.log('talla igual');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual o');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

              } else {
                   console.log(tallaSeleccionada);
                if (tallaSeleccionada == undefined) {
                		console.log('talla igual sin seleccionar');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
                } else {
                  
                  console.log('talla distinta');
                console.log(tallaSeleccionada);
                  var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2') || '';

                  if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }

                  if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }
                  console.log('add to cart talla diferente v');
                  window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
                  window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

                
                }


              }

          	}
          
          } else {
            var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
							if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador o');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
          }
			  
     
		}
        
      }, {
        origin: 'rediseno_recomendador'
      });  

        events.on(events.types.CATEGORY_NAVIGATION, function() {

        ////console.log('category_navigation');
        }, {
        origin: 'rediseno_recomendador'
        });
      
      
        
      
      
  
      

    });
    });
  
  
  

  
}(window.zara));
}}]}], "name": null}, {"id": "18146020923", "actions": [{"viewId": "18126860772", "changes": [{"dependencies": [], "type": "custom_code", "id": "a7a69b9871df48f9bd39159d22285d85", "value": function($){(function(App) {


  /*_optimizely_evaluate=force*/  
    var stylesId = 'rediseno-guia-tallas';

  
    var css = '.product-card .size-recommender .bullet {background-color: #000;color: #fff;} .product-card .size-selector .size-select .size-list label.recommended:not(.back-soon):not(.disabled) {background: #fff;}  label.recommended:not(.back-soon):not(.disabled) .size-name {background-color: #000; color: #fff!important;border-radius: 50px;padding: 4px 6px;margin: -6px;} label.recommended .size-name.shorter{padding: 4px 8px!important;margin: -8px!important;} label.recommended .size-name.longer{padding: 4px 4px!important;margin: -4px!important;} .product-card .size-selector .size-select .size-list label .size-name-container { overflow: visible !important;}.product-card .size-selector .size-select .size-list label .size-name-container {margin-left: 5px !important;}.product-card .size-selector .size-select .size-list label.recommended .size-name {margin-left: -6px !important;} label.recommended:hover{background: #e5e5e5 !important;}'; 
  
  // .product-card .size-selector .size-select .size-list label.recommended._disabled .size-name{background: #e5e5e5;}
   

  
    var head = document.head || document.getElementsByTagName('head')[0];    
    var style = document.createElement('style');
    

    style.type = 'text/css';
    style.id = stylesId;
    


    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }     

    

    head.appendChild(style);


/*_optimizely_evaluate=safe*/
  
  
    //if (!App.expApi) return false; // We're not in the NWS
    window.optimizely = window.optimizely || [];
    var paises = "es|fr|uk|us|ca|it|be|de|kr|jp|pt";
    if((paises.indexOf(window.location.pathname.substr(1,2)) < 0)) return false;
    window["optimizely"].push({type: "user",attributes: {1603241203: window.location.pathname.substr(1,2)}});

    var expApi = window.zara.expApi;
  

  expApi.loader(function(require) {
  var countryCode = zara.mkt.countryCode.toLowerCase();
  var data = {index: 5,name: "WS_20200527_REDISENO_GUIA_TALLAS_V2",alternative: "VARIANTE_A"}; //CD 155
  
 require(['plugins/analytics-data-layer'], function (gaDataLayer){gaDataLayer.setCustomAttribute('experimentsContext',data);});
    
    
    
    require(['jquery', 'plugins/events-manager', 'plugins/cookie'], function($, events, cookie) {
 
      var country = countryCode;
      var lang = window.zara.mkt.langCode;
      
     
    function calc_precio(precio){
        
       if (country == 'ca'){
       precio = precio*0.66; 
      }
      
      if (country == 'us'){
       precio = precio*0.88; 
      }
      
      if (country == 'gb' || country == 'uk'){
       precio = precio*1.11; 
      }
      
       if (country == 'pl'){
        precio = precio*0.23; 
      }
       if (country == 'jp'){
        precio = precio*0.008; 
      }
      
      if (country == 'tr'){
        precio = precio*0.15; 
      }
       if (country == 'mx'){
        precio = precio*0.046; 
      }
      
      if (country == 'ru'){
        precio = precio*0.014; 
      }
      
      if (country == 'in'){
        precio = precio*0.013; 
      }
      
      if (country == 'au'){
        precio = precio*0.62; 
      }
      
      if (country == 'nz'){
        precio = precio*0.59; 
      }
        
        if (country == 'br'){
        precio = precio*0.23; 
      }
        
        if (country == 'hu'){
        precio = precio*0.0031; 
      }
        
            if (country == 'rs'){
        precio = precio*0.0085; 
      }
        
          if (country == 'vn'){
        precio = precio*0.0000383357; 
      }
        if (country == 'kr'){
        precio = precio*0.000754650; 
      }
      if (country == 'hk'){
        precio = precio*0.113984; 
      } 
        if (country == 'sg'){
        precio = precio*0.654725; 
      } 
        
        if (country == 'mo'){
        precio = precio*0.110669; 
      } 
         if (country == 'my'){
        precio = precio*0.216420; 
      } 
         if (country == 'th'){
        precio = precio*0.029; 
      } 
         if (country == 'tw'){
        precio = precio*0.029; 
      } 
           if (country == 'ro'){
        precio = precio*0.21; 
      } 
        
         precio = parseFloat(precio.toFixed(2));
        
        return precio;
     
      }
      
      
      function exec_exp(){
        var i = 0;
        var interv = setInterval(function(){
          if($('label .size-name').length){
            clearInterval(interv);
        $('label .size-name').each(function(id, sizename){
if($(this).width() < 11){
 $(this).addClass('shorter');
} else {
if($(this).width() > 15){
 $(this).addClass('longer');
}
}
console.log($(this).width());
});
          } else {
               console.log('NaN');
          if(i <= 300) clearInterval(interv);
          }
        },10);
      }
     
         
 			events.on(events.types.PRODUCT_DETAILS_SIZE_SUGGESTER	, function(data) {
      	console.log('Click Recomendador');
    		window['optimizely'].push({type: "event", eventName: "click_rediseno_recomendador",});
     	}, {
        origin: 'rediseno_recomendador'
       });
      
      events.on(events.types.PRODUCT_DETAILS_SIZE_GUIDE, function(data) {
      	console.log('Click Guia Tallas');
    		window['optimizely'].push({type: "event", eventName: "click_rediseno_recomendador_guia",});
     	}, {
        origin: 'rediseno_recomendador'
       });
      

      
        events.on(events.types.NAVIGATION_START, function(data) {
        //console.log('navstart');



        }, {
            origin: 'rediseno_recomendador'
        });

        events.on(events.types.NAVIGATION_DONE, function(data) {
            
           exec_exp();

        }, {
            origin: 'similares_relacionados'
        });
      
      
     
      function get_pId_from_url(){
      var pattern_pId = "(p)([0-9]+)";
      var prodId = 0;
      if (window.location.href.match(pattern_pId)) {
        prodId = window.location.href.match(pattern_pId)[2];
      }
      return prodId;
    }
      
      function get_pId_from_url2(){
      var pattern_pId = "(v1=)([0-9]+)";
      var prodId = 0;
      if (window.location.href.match(pattern_pId)) {
        prodId = window.location.href.match(pattern_pId)[2];
      }
      return prodId;
    }
      
      
      
      events.on(events.types.PRODUCT_DETAILS_ADD_TO_CART, function(data) {
        console.log(data);
	  
		if(zara.analyticsData.pageType == 'PRODUCT_BUNDLE_DETAILS'){
			 console.log(data);
			
				for(var dat = 0; dat < data.products.length; dat++){
					console.log('atc', data.products[dat].productRef);
					var Ref = data.products[dat].productRef;
					var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);    
					Ref = Ref.split("-")[0].substring(1);
          var atcvalue = calc_precio(parseFloat(data.products[0].price));
          
          /*var tallaRecomendada = data.recommendedSize;
          console.log(tallaRecomendada);
					var tallaSeleccionada = data.selectedSize;
           console.log(tallaSeleccionada);*/
          var tallaRecomendada = data.products[0].recommendedSize;
          console.log(tallaRecomendada);
          var tallaSeleccionada = data.products[0].selectedSize;
          console.log(tallaSeleccionada);
          
          if($('.size-guide-btn.size-recommender._size-recommender').length){
          	
            console.log('dentro comprobación uso recomendador');
            
            if(tallaRecomendada == undefined) {
            	console.log('sin talla');
              
              var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
              if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador v');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_sin_talla",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
            }else{

              if (tallaRecomendada == tallaSeleccionada) {
                console.log('talla igual');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

              } else {
                   console.log(tallaSeleccionada);
                if (tallaSeleccionada == undefined) {
                		console.log('talla igual sin seleccionar');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
                } else {
                  
                  console.log('talla distinta');
                console.log(tallaSeleccionada);
                  var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2') || '';

                  if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }

                  if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }
                  console.log('add to cart talla diferente v');
                  window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
                  window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

                
                }

              }

          	}
          
          } else {
            var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
							if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador v');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
          }
					
				}
			
		
		} else {
    
				var Ref = data.products[0].productRef;
			  var Ref2 = window.zara.analyticsData.productRef.split('-')[0].substr(1);  
			  Ref = Ref.split("-")[0].substring(1);
			  var atcvalue = calc_precio(parseFloat(data.products[0].price));	
      
      	var tallaRecomendada = data.recommendedSize;
      console.log(tallaRecomendada);
				var tallaSeleccionada = data.selectedSize;
      console.log(tallaSeleccionada);
      
			  if($('.size-guide-btn.size-recommender._size-recommender').length){
          	
            console.log('dentro comprobación uso recomendador');
            
            if(tallaRecomendada == undefined) {
            	console.log('sin talla');
              
              var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
              if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador v');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_sin_talla",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
            }else{

              if (tallaRecomendada == tallaSeleccionada) {
                console.log('talla igual');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

              } else {
                console.log(tallaSeleccionada);
                if (tallaSeleccionada == undefined) {
                		console.log('talla igual sin seleccionar');
                var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_IGUAL_V2') || '';

                if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }

                if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                  expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                  cookie.store('COOKIE_ATC_RECOMENDADOR_IGUAL_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                }
                console.log('add to cart talla igual v');
                window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_igual",tags: {value: atcvalue}});
                window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
                } else {
                  
                  console.log('talla distinta');
                console.log(tallaSeleccionada);
                  var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2') || '';

                  if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }

                  if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                    expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                    cookie.store('COOKIE_ATC_RECOMENDADOR_DIFERENTE_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
                  }
                  console.log('add to cart talla diferente v');
                  window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
                  window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});

                
                }
                

              }

          	}
          
          } else {
            var expCookieAddToCartRecomendador = cookie.retrieve('COOKIE_ATC_SIN_RECOMENDADOR_V2') || '';
					
							if (expCookieAddToCartRecomendador.indexOf(Ref) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }

              if (expCookieAddToCartRecomendador.indexOf(Ref2) == -1) {
                expCookieAddToCartRecomendador += (expCookieAddToCartRecomendador == '' ? '' : '-') + Ref2;
                cookie.store('COOKIE_ATC_SIN_RECOMENDADOR_V2', expCookieAddToCartRecomendador, {path:'/', expires:7});
              }
              console.log('add to cart sin recomendador v');
              window['optimizely'].push({type: "event", eventName: "atc_rediseno_recomendador_talla_diferente",tags: {value: atcvalue}});
              window['optimizely'].push({type: "event", eventName: "atc_total_rediseno_recomendador",tags: {value: atcvalue}});
          }
			  
     
		}
        
      }, {
        origin: 'rediseno_recomendador'
      });  

        events.on(events.types.CATEGORY_NAVIGATION, function() {

        ////console.log('category_navigation');
        }, {
        origin: 'rediseno_recomendador'
        });
      
      
        
      
      
  
      

    });
    });
  
  
  

  
}(window.zara));
}}]}], "name": null}], "audienceIds": ["and", "10831162406"], "changes": null, "id": "18173220080", "integrationSettings": null}], "id": "18156130384", "weightDistributions": null, "name": null, "groupId": null, "commitId": "18175280255", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.zara.com/be/", "match": "exact"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_home_page_belgium_english", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11093650364"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara\\.com\\/be\\/en\\/.+p([0-9]{8})\\.html", "match": "regex"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_product_page_belgium_english", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  //document.querySelector('button').addEventListener('click', activate);
}
, "deactivationEnabled": false, "id": "11095720188"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara\\.com\\/be\\/en\\/.+l([0-9]+)\\.html", "match": "regex"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_category_page_belgium_english", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/code-samples/index.html#page-activation
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  document.querySelector('button').addEventListener('click', activate);
}
, "deactivationEnabled": false, "id": "11103300484"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "\\/(au|tr|in|de|kr|ca|uk|us|fr|es|ru|nz|cn)\\/(fr|en|es|ru|de|ko|tr|zh|gl)\\/.+l(808|816|819|812|813|811|835).html.+v1=([0-9]+)", "match": "regex"}]], "name": null, "apiName": "151300895_visit_categories_trajes", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11604751202"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.zara.com/es/es/mujer-prendas-exterior-l1184.html?v1=1074615", "match": "simple"}]], "name": null, "apiName": "151300895_pageview_httpswwwzaracomesesmujerprendasexteriorl1184h", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11728303578"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.zara.com/es/es/mujer-prendas-exterior-l1184.html?v1=1074615", "match": "simple"}]], "name": null, "apiName": "151300895_httpswwwzaracomesesmujerprendasexteriorl1184htmlv11074", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11796510700"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/ww.+webapp\\/wcs\\/stores\\/servlet\\/(OrderConfirmationPage|OrderConfirmedPage)[a-zA-Z0-9\\?\\&\\.\\-=]*storeId=.+", "match": "regex"}, {"type": "url", "value": "zara\\.com\\/ww.+webapp\\/wcs\\/stores\\/servlet\\/CallbackOrderFinalize", "match": "regex"}, {"type": "url", "value": "zara\\.com\\/ww.+webapp\\/wcs\\/stores\\/servlet\\/(OrderConfirmationPage|OrderConfirmedPage)[a-zA-Z0-9\\?\\&\\.\\-=]*storeId=([0-9]{5})", "match": "regex"}, {"type": "url", "value": "zara\\.com\\/.+order\\/confirmation", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_checkout_test_ww", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12124613791"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara.com\\/(es|ca|uk|pl|nl|de).+l([0-9]+)\\.html\\?v1=([0-9]+)", "match": "regex"}]], "activationType": "manual", "name": null, "apiName": "category_pageview", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12346952304"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.zara.com/jp/en/woman-dresses-l1066.html", "match": "simple"}]], "name": null, "apiName": "151300895_optimizely_support_test", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15414590154"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara\\.com\\/pt.+v2=(1281625|1281698)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_dresses_products", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16706050683"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara\\.com\\/pt\\/.+(l1066|l1327)\\.html", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_dresses_category", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16719290142"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara.com\\/(es|ca|uk|pl|nl|de).+l([0-9]+)\\.html\\?v1=([0-9]+)", "match": "regex"}]], "name": null, "apiName": "151300895_woman_coats", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16727700220"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/uk\\/en\\/.+p([A-Z])([0-9]+)\\.html", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_v2pruebas_nws_20191031_bundles", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16854707509"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "element_present", "value": "body.bundle-detail-page"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_bundles_new_concept", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16858515285"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "prestage\\-std\\-zaraphr\\.inditex\\.com\\/uk\\/en\\/.+p([A-Z])([0-9]+)\\.html", "match": "regex"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_bundles_new_concept_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16884050762"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/mc.+p([0-9]+)\\.html.+v2=1445099", "match": "regex"}, {"type": "url", "value": "zara\\.com\\/mc.+p([0-9]+)\\.html.+v2=1445118", "match": "regex"}], ["or", {"type": "element_present", "value": "div#global-loader:not(.active)"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_product_punto_mc", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16907713082"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/(es|uk|fr|it|pt|tr|nl|ca).+p([0-9]+).+v2=(1079188|1079196|1079197|1079193|1079194|1079195|434794|1282252|1282242|1282329|1282328|1282474|1282471|1282472|1282390|1282391|1282388|1282211|1282332|1282330|1282367|1282368|1282369|1282256|1282241|1282263|1282262|1282261|1282264|1282397|1282364|1282247|1282219|1282220|1282275|1282269|1282267|1282274|1282268|1282270|1402149|1282265|1282480|1282217|1282342|1282339|1282340|1282341|1282343|1282380|1282381|1282382|1282434|1405151|1379252|1379253|1385752|1282228|1282236|1282288|1282286|1371233|1282287|1282226|1282291|1282289|1282290|1282259|1282305|1282292|1282293|1282294|1282306|1282304|1282302|1282446|1282303|1282218|1282310|1282307|1282308|1282441|1282254|1282327|1282325|1282326|1282324|1282393|1282212|1282320|1282313|1282312|1282318|1282239|1282230|1282375|1282249|1282251|1282246|1282227|1282399|1282371|1282392|1282248|1374344|1366815|1282215|1282358|1397770|1386256|1386257|1397771|434799|1283364|1283355|1283328|1283327|1283332|1283414|1283415|1283461|1398924|1385774|1385775|1398925|1283329|1283407|1283410|1283370|1283371|1283408|1283359|1283340|1283476|1283477|1283478|1283479|1398755|1283338|1283297|1283288|1283296|1283290|1283294|1283289|1373729|1283293|1283337|1283356|1283334|1283416|1283417|1283470|1283419|1283420|1283471|1283342|1391752|1391751|1391753|1283341|1283350|1283305|1283487|1283304|1283302|1283306|1283303|1391252|1283438|1283368|1283320|1283307|1283308|1283309|1283321|1283318|1283316|1404152|1283317|1283336|1283402|1283404|1283405|1283481|1283365|1283325|1283323|1283324|1283322|1283326|1283330|1283386|1283380|1283382|1283385|1283354|1283413|1283362|1283360|1283432|1283421|1283343|1366816|1283434|1283439|1283435|1283486|1283436|1283428|434804|1283707|1283703|1283705|1283704|1283624|1283626|1283625|1283607|1283609|1283608|1283610|1283537|1283541|1283538|1283540|1283539|1283726|1283723|1283725|1283722|1283701|1283671|1283676|1283674|1283673|1283672|1283677|1283586|1283601|1283593|1283592|1283590|1283591|1283602|1283588|1373230|1283664|1283569|1283575|1283571|1381251|1283573|1283574|1283570|1283572|1283639|1283632|1283641|1283656|1283653|1283655|1283652|1283615|1283729|1283744|1283730|1283731|1283746|1283741|1283740|1283737|1283579|1283709|1283717|1283712|1283716|1283710|1283713|1283543|1283554|1283548|1283547|1283663|1283684|1283685|1283693|1283688|1283695|1283692|1283702|1283631|1283630|434807|1284138|1284119|1284121|1284120|1284076|1284078|1284077|1282499|1282503|1282502|1282500|1282501|1284131|1284110|1284116|1284114|1284113|1284115|1284112|1284111|1284048|1284050|1284055|1284053|1284054|1284051|1284052|1284056|1373231|1284057|1284032|1284037|1380753|1381250|1284035|1284036|1284034|1284085|1284103|1284080|1284092|1284097|1284095|1284093|1284096|1372228|1284094|1284101|1284153|1284167|1284154|1284155|1284169|1284163|1284047|1284140|1284148|1284143|1284147|1284141|1284144|1282505|1284014|1284009|1284008|1284105|1284122|1284127|1284026|1284128|1284063|1284066|1284065|434810|1284182|1284202|1284200|1284219|1284220|1284192|1284178|1284186|1367852|1367853|1367854|1367855|1367856|1284191|1284179|1284190|1284196|1284185|1284228|1284194|1284184|1284248|1284193|1284187|1284216|1284215|1284214|1284180|1284222|1284224|1284181|1284246|1362225|1361726|1362725|1362227|1363225|1361728|1361729|1361727|1362726|1362228|1363226|1362226|1367314|1283276|1283277|1283280|1283283|1283281|1283282|1383259|775001|972006|1017501|771502|889035|990511|784001|979002|985001|976018|1133046|766003|902513|990510|903501|981008|1157557|1161503|270504)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_test_redireccin_1_1_1_1_4_2_1_2_1_1_1_1_1_1_1_1_2_2_1_1_1_1_1_1_1_2_1_1_1_1_1_3_2_5_2_3_2_1_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16908197514"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/mc.+(l681|l737)\\.html", "match": "regex"}], ["or", {"type": "element_present", "value": "div#global-loader:not(.active)"}]], "activationType": "dom_changed", "name": null, "apiName": "151300895_categora_punto", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16931372767"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "std\\.central\\.inditex\\.grp\\/es.+(l2028|l855)\\.html.+(1393756|1282833)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_man_tshirt_category", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16973470267"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "fep8-mob-zaraphr.inditex.com/es/es/search", "match": "substring"}]], "name": null, "apiName": "151300895_buscador_es_fep8", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17031610397"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "zara\\.com\\/(es).+p([0-9]+)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_test_redireccin_1_1_1_1_4_2_1_2_1_1_1_1_1_1_1_1_2_2_1_1_1_1_1_1_1_2_1_1_1_1_1_3_2_5_3_1_2_1_1_1_1_1_1_1_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17129920078"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/uk", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_pruebas_pre____ws_ordenacion", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18043521506"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/ic", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_pruebas_pre____ws_ordenaci_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18053102027"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/es", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_ws_exclude_search_categori_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18053290821"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/ie", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_pruebas_pre____ws_ordenaci_3", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18056270162"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/pt", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of__pruebas_pre____ws_ordenac_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18063830289"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/us", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_pruebas_pre____ws_ordenaci_4", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18089000243"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zaraphr.inditex.com/ca", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of__pruebas_pre____ws_ordenacio", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18089080241"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/(uk|fr|us|de|it|tr|ru|ca)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_ws_20200519_disable_contextu", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18126370287"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/(es|fr|uk|us|ca|it|be|de|kr|jp|pt)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_ws_20200525_rediseno_guia_ta", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18126860772"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "zara\\.com\\/(es|nl|jp|pl|mx|pt|br|be|kr|ie)", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "151300895_url_targeting_for_copy_of_pruebas_pre____ws_ordenaci_6", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "18137850261"}], "projectId": "151300895", "namespace": "151300895", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": "439340659", "id": "1603241203", "apiName": null, "name": null}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]], ["or", ["or", {"value": "gc", "type": "browser_version", "name": null, "match": null}, {"value": "ff", "type": "browser_version", "name": null, "match": null}, {"value": "safari", "type": "browser_version", "name": null, "match": null}]]], "id": "10831162406", "name": null}], "anonymizeIP": false, "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('17134040603', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['17134040603'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [{"name":"customDimension","default_value":"dimension150"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
* Javascript written in this tab will run every time a user is
* assigned to an experiment and variation, but before any experiment
* code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

var logEnabled = false;
var debugEvents = true;
var timeoutInterval = 100;
var maxWait = 10000;
var waited = 0;

function trackOptlyEvent(name, tags){
    try {
        if(debugEvents){
            tags = tags || {};
            window.optimizely.push({
                "type": "event",
                "eventName": name,
                "tags": tags
            });
        }
    } catch (error) {
        // console.log(error);
    }
}

try {
    (function(){
        function integrationLog(msg){
            if (logEnabled){
                console.log(msg);
            }
        }

        function waitForGaEventApi(method) {
            if (window.ga && window.ga.getAll) {
                method();
            } else {
                if (waited < maxWait){
                    setTimeout(function() {
                        waited = waited + timeoutInterval;
                        waitForGaEventApi(method);
                    }, timeoutInterval);
                } else {
                    trackOptlyEvent("failed_to_find_ga");
                }
            }
        }

      	trackOptlyEvent("aa_test_activated");
        integrationLog("AA test activated");

        var decisionString = optimizely.get('state').getDecisionString({
            campaignId: campaignId,
            shouldCleanString: true,
            maxLength: 255
        });

        waitForGaEventApi(function(){
            if(!!decisionString) {
                integrationLog("Sending decision event to GA");
              // send event to GA
              	var fieldsObject = {nonInteraction: true};
								fieldsObject[extension.customDimension] = decisionString;
              	integrationLog(fieldsObject);

              	var prefix = window.ga.getAll()[0].get('name');

                integrationLog(prefix);
              	window.ga(prefix+'.set', extension.customDimension, decisionString);
              	trackOptlyEvent("set_ga_event");
    						window.ga(prefix+'.send', "event", "Optimizely", "User Bucketed", fieldsObject);
                trackOptlyEvent("sent_ga_event",{
                  value: waited
                });
            }
        });
    })();
} catch (error) {
    trackOptlyEvent("ga_error",{
        errormessage: error.message
    });
}


      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "visitorAttributes": [], "enableForceParameters": true, "accountId": "151300895", "events": [{"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_SP", "id": "11473790575", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_SP", "id": "11473810967", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "visit_SP", "id": "11482961184", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_SP", "id": "11488680272", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_composicion", "id": "11495523972", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_sincompos_2", "id": "11525633904", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_test", "id": "11527292757", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_concompos_2", "id": "11534490047", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_TEST", "id": "11564061698", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_TEST", "id": "11582531884", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_con_composicion", "id": "11590751678", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_compos_2", "id": "11615320004", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_sin_composicion", "id": "11618920161", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "visit_TEST", "id": "11620340882", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_mujer_vestidos", "id": "11691984438", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_hombre_newin", "id": "11692062672", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_mujer_vestidos", "id": "11709613492", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "Pag. Vista VESTIDOS MUJER", "id": "11719095484", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_mujer_vestidos", "id": "11719184838", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_mujer_newin", "id": "11734156193", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_hombre_newin", "id": "11740190045", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_mujer_new_in", "id": "11763032203", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "Pag. Vista NEW IN MUJER", "id": "11769030018", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisas_caballero", "id": "11774125021", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_hombre_new_in", "id": "11774280040", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_mujer_newIn", "id": "11777880113", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "Pag. Vista HOMBRE NEW IN", "id": "11777880159", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_vestidos_girl", "id": "11782003563", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisetas_babyboy", "id": "11786024168", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisas_caballero", "id": "11786091582", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_vestidos_babygirl", "id": "11787741452", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisetas_boy", "id": "11789870460", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_vestidos_babygirl", "id": "11789973084", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_vestidos_mujer", "id": "11790053532", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisetas_babyboy", "id": "11791912674", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_vestidos_girl", "id": "11795311369", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisetas_babyboy", "id": "11797381054", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisas_caballero", "id": "11797393854", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vestidos_trf", "id": "11797685631", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_vestidos_girl", "id": "11799214796", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vestidos_mujer", "id": "11801171198", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vestidos_babygirl", "id": "11804932336", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_vestidos_babygirl", "id": "11804942728", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_vestidos_trf", "id": "11804981498", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_vestidos_trf", "id": "11806762552", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisetas_babyboy", "id": "11812462537", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisetas_boy", "id": "11812582617", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_vestidos_mujer", "id": "11814133895", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vestidos_girl", "id": "11814242925", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisetas_boy", "id": "11814502808", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_vestidos_mujer", "id": "11816350738", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisetas_boy", "id": "11818142959", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_vestidos_trf", "id": "11818192482", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisas_caballero", "id": "11820312955", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_dresstime", "id": "11918059120", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_generalinfo", "id": "11921600315", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_technology", "id": "11923490282", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_payment", "id": "11923590199", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_changes", "id": "11923740256", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_giftcard", "id": "11923760138", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_giftticket", "id": "11927360192", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_ayuda", "id": "11932960204", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_howshop", "id": "11940650129", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_dresstime", "id": "11948817285", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_recall", "id": "11952530259", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_shipping", "id": "11958140288", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_dresstime", "id": "11970777267", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_dresstime", "id": "12025952323", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_srpls", "id": "12107953340", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_angola", "id": "12111303701", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_other", "id": "12111785305", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_angola_paymentdata", "id": "12115403395", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_otros_paymentmethod", "id": "12115454671", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_angola_paymentmethod", "id": "12116942918", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_otros_paymentdata", "id": "12117255811", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_otros_summary", "id": "12121025305", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_angola_summary", "id": "12164962634", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_srpls", "id": "12177211589", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_orden_menu_man", "id": "12356163299", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_tallas_plegadas", "id": "12377462643", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_orden_menu_man", "id": "12391010005", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "button_click_tallas_plegadas", "id": "12391291990", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_orden_menu_man", "id": "12399190168", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "desplegar_tallas_clicked", "id": "12401741177", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_tallas_plegadas", "id": "12414990844", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "select_tallas_plegadas", "id": "12422761520", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_orden_menu_woman", "id": "12602020051", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "page_view_orden_menu_trf", "id": "12603860178", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_orden_menu_kids", "id": "12607720082", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_orden_menu_woman", "id": "12611010005", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_orden_menu_woman", "id": "12614010003", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_orden_menu_trf", "id": "12615470091", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_orden_menu_kids", "id": "12617930003", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_orden_menu_kids", "id": "12619340047", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "page_view_orden_menu_woman", "id": "12619470185", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "page_view_orden_menu_kids", "id": "12625360039", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "page_view_orden_menu_man", "id": "12626810216", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_orden_menu_trf", "id": "12628890046", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_orden_menu_trf", "id": "12634340063", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_vista_man", "id": "12823670245", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vista_2_3_4_man", "id": "12846410268", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_vista_2_3_4_man", "id": "12846890333", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_sales_discount", "id": "13171550234", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_sales_discount", "id": "13173380471", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_sales_discount", "id": "13177120334", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_sales_discount", "id": "13190540156", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "visit_category_page_menu_style", "id": "13210120073", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_menu_style", "id": "13215930137", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_hombre", "id": "13224040162", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-manjeans", "id": "13224080202", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_menu_style", "id": "13225520015", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_trf", "id": "13225800099", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_nina", "id": "13226060097", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-trfjeans", "id": "13227740349", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_hombre", "id": "13229590372", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_nina", "id": "13229880131", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisetas_mujer", "id": "13229900038", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_nina", "id": "13233260542", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-total", "id": "13233260713", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_camisetas_mujer", "id": "13233270517", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_nino", "id": "13233420082", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-womanjeans", "id": "13233490173", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_nina", "id": "13233560102", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-manjeans", "id": "13233570196", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-total", "id": "13233600114", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_exp", "id": "13235420168", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_nino", "id": "13235550017", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_exp", "id": "13235620250", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_mujer", "id": "13235650119", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-trfjeans", "id": "13237370208", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_exp_nuevas_parrillas", "id": "13237610142", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisetas_mujer", "id": "13239310079", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_trf", "id": "13239340213", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_mujer", "id": "13239400074", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_trough_menu_style", "id": "13240510062", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-womanjeans", "id": "13241180104", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_exp_nuevas_parrillas", "id": "13241320158", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_trf", "id": "13241370008", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_nina", "id": "13243060084", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_hombre", "id": "13244970080", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_exp_nuevas_parrillas", "id": "13245200091", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_trf", "id": "13246820265", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_mujer", "id": "13247330010", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_nino", "id": "13248780424", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_menu_style", "id": "13250500004", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_mujer", "id": "13250740346", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_hombre", "id": "13250800228", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-womancamisetas", "id": "13251080153", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisetas_mujer", "id": "13251130082", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_man", "id": "13252790115", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_trf", "id": "13252980105", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_nino", "id": "13254760111", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisetas_mujer", "id": "13254770121", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-womancamisetas", "id": "13255120064", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_nino", "id": "13256570046", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_mujer", "id": "13256940034", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "visit_add_to_cart", "id": "13273520028", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_total_bloques", "id": "13309630259", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_mujer_vestidos", "id": "13313740154", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_bloques", "id": "13315480083", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_bloques", "id": "13319500108", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques", "id": "13327480188", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_total_bloques", "id": "13332840325", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_hombre_camisetas", "id": "13340280220", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_burger_four", "id": "13355880460", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "cat_page_viewed_four", "id": "13365690570", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_event_burger_two", "id": "13387610139", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "cat_page_viewed_two", "id": "13387780053", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_event_burger_four", "id": "13389800010", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_burger_four", "id": "13393100078", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_burger_total", "id": "13395030320", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_burger_two", "id": "13395050124", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_burger_two", "id": "13398900186", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_event_burger_total", "id": "13399010244", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_burger_total", "id": "13405380146", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "cat_page_viewed_total", "id": "13406000125", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_event_burger_four", "id": "13406340523", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_event_burger_total", "id": "13413060053", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_event_burger_two", "id": "13414290411", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_TOTAL", "id": "13730000364", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_recomendador_igual", "id": "13733940119", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_recomendador_diferente", "id": "13736040175", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_recomendador_diferente", "id": "13736110132", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_recomendador_igual", "id": "13739810110", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_recomendador", "id": "13745610125", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisas_mujer_v2", "id": "13747920432", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_bloques_v2", "id": "13748000166", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisas_mujer_v2", "id": "13749650484", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_recomendador_igual", "id": "13751100353", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_recomendador_total", "id": "13753000160", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_recomendador_diferente", "id": "13753070142", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_sin_recomendador", "id": "13754820282", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_bloques_v2", "id": "13757770183", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisas_mujer_v2", "id": "13757800095", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_sin_recomendador", "id": "13759060015", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_sin_recomendador", "id": "13764340247", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_vestidos_mujer_v2", "id": "13767060510", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisas_mujer_v2", "id": "13767370095", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_camisas_mujer_bloques_v2", "id": "13769030394", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_recomendador_total", "id": "13770280134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_mujer_vestidos_v2", "id": "13771230040", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_vestidos_mujer_v2", "id": "13776130716", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_vestidos_mujer_bloques_v2", "id": "13778520199", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_vestidos_mujer_v2", "id": "13778720035", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_bloques_v2", "id": "13782440105", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques_v2", "id": "13782460106", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_event_total_bloques_v2", "id": "13790180029", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-total_v2", "id": "13820030633", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_mujer_v2", "id": "13824010256", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisetas_mujer_v2", "id": "13824090124", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_hombre_v2", "id": "13826110099", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_exp_nuevas_parrillas_v2", "id": "13827450310", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_mujer_v2", "id": "13827930085", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisetas_mujer_v2", "id": "13829350338", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_trf_v2", "id": "13829870143", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_mujer_v2", "id": "13829940112", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_trf_v2", "id": "13831361183", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_mujer_v2", "id": "13831361187", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_jeans_mujer_v2", "id": "13833600304", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_exp_v2", "id": "13837670233", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_exp_nuevas_parrillas_v2", "id": "13837680063", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisetas_mujer_v2", "id": "13837690115", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_trf_v2", "id": "13839420199", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-womanjeans_v2", "id": "13842700857", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisetas_mujer_v2", "id": "13844920262", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-total_v2", "id": "13845160165", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-womancamisetas_v2", "id": "13845260114", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-manjeans_v2", "id": "13845300147", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_hombre_v2", "id": "13847080331", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-trfjeans_v2", "id": "13847150227", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-manjeans_v2", "id": "13848930252", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicksection-womancamisetas_v2", "id": "13849060263", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_exp_nuevas_parrillas_v2", "id": "13850760260", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_trf_v2", "id": "13851090056", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_jeans_hombre_v2", "id": "13852840116", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_camisetas_mujer_v2", "id": "13854510373", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_exp_v2", "id": "13856710266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-womanjeans_v2", "id": "13858610154", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_jeans_hombre_v2", "id": "13858630184", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_jeans_man_v2", "id": "13858630186", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_jeans_trf_v2", "id": "13858710059", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "clicknextprev-trfjeans_v2", "id": "13860390352", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_mujer_vestidos_mini", "id": "14114640049", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_mujer_vestidos_mini", "id": "14122330066", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_mujer_vestidos_mini", "id": "14128060071", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_mujer_vestidos_mini", "id": "14130490053", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_mujer_vestidos_mini", "id": "14134120082", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_style_guide", "id": "14186600342", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_boy_style_guide", "id": "14190450359", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_girl_style_guide", "id": "14194400436", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_total_style_guide", "id": "14196620337", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_boy_style_guide", "id": "14196830173", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_girl_style_guide", "id": "14196920024", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_girl_style_guide", "id": "14198400678", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_style_guide", "id": "14204400414", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_boy_style_guide", "id": "14204410305", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_girl_style_guide", "id": "14204430435", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_style_guide", "id": "14206640229", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_total_style_guide", "id": "14214300539", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_girl_style_guide", "id": "14214710094", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_boy_style_guide", "id": "14216480460", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_boy_style_guide", "id": "14222140530", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_recomendador_igual_v2", "id": "14306840175", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_sin_recomendador_v2", "id": "14310740421", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_recomendador_diferente_v2", "id": "14316760310", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_sin_recomendador_v2", "id": "14320910113", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_recomendador_diferente_v2", "id": "14326730148", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_recomendador_total_v2", "id": "14330350623", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_sin_recomendador_v2", "id": "14336280395", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_recomendador_diferente_v2", "id": "14336640120", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_TOTAL_v2", "id": "14338210324", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_recomendador_igual_v2", "id": "14342300198", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_recomendador_total_v2", "id": "14342450210", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_est_jp_total", "id": "14343950199", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_coachella", "id": "14343970897", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_man_coachella", "id": "14344070255", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_est_jp_mujer", "id": "14345770217", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_coachella", "id": "14346050250", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_man_coachella", "id": "14346220045", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_recomendador_igual_v2", "id": "14347010154", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_recomendador_v2", "id": "14347080056", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_est_jp_hombre", "id": "14348240155", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_coachella", "id": "14349650826", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_woman_coachella", "id": "14349750333", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "suggester_data_complete", "id": "14351010064", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_est_jp_mujer", "id": "14351670242", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "coomingsoon_woman_coachella", "id": "14354160075", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_exp_jp_hombre", "id": "14357830323", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_est_jp_hombre", "id": "14357990300", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_woman_coachella", "id": "14358050065", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_est_jp_total", "id": "14360160016", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_coachella", "id": "14361720197", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_exp_jp_total", "id": "14363590797", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_est_jp_total", "id": "14363760326", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_est_jp_hombre", "id": "14363860152", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_est_jp_mujer", "id": "14364010129", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_est_jp_hombre", "id": "14364010130", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_man_coachella", "id": "14364070089", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_man_coachella", "id": "14365810334", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_woman_coachella", "id": "14366030041", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "coomingsoon_man_coachella", "id": "14368260026", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "coomingsoon_total_coachella", "id": "14369890249", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_man_home", "id": "14371510438", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_exp_jp_mujer", "id": "14373770222", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_woman_coachella", "id": "14375840030", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_man_coachella", "id": "14375850099", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_est_jp_total", "id": "14375950012", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_woman_coachella", "id": "14377530098", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_woman_home", "id": "14377840122", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_est_jp_mujer", "id": "14379540344", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_coachella", "id": "14381430518", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_mujer_punto", "id": "14420720257", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_mujer_punto", "id": "14422790183", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_expninos", "id": "14425740525", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_nino_camisetas", "id": "14426000325", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bebenino_camisetas", "id": "14428030287", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_expninos", "id": "14428090137", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_mujer_punto", "id": "14431470011", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_nino_camisetas", "id": "14431970289", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_expninos", "id": "14432110019", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bebenina_vestidos", "id": "14433970109", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_nino_camisetas", "id": "14434080110", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bebenina_vestidos", "id": "14435540239", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_nino_camisetas", "id": "14437810127", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bebenina_vestidos", "id": "14439470620", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total", "id": "14439580503", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_nina_vestidos", "id": "14441960057", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_mujer_punto", "id": "14443350010", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_bebenino_camisetas", "id": "14443450281", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_expninos", "id": "14445810380", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_prod_mujer_vestidos_mini", "id": "14448280117", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_nina_vestidos", "id": "14449400487", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_nina_vestidos", "id": "14449720278", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_bebenino_camisetas", "id": "14453640140", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_nina_vestidos", "id": "14453720118", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_expninos", "id": "14453830117", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_nino_camisetas", "id": "14455400149", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_mujer_punto", "id": "14457040041", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_bebenina_vestidos", "id": "14457410257", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bebenino_camisetas", "id": "14457450074", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_nina_vestidos", "id": "14459410236", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bebenino_camisetas", "id": "14459410239", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_bebenina_vestidos", "id": "14459520270", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_camisas_casual", "id": "14584781691", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_mujer_25", "id": "14592170816", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_mujer_25", "id": "14596100923", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_camisas", "id": "14598910351", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_mujer_25", "id": "14600270253", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisas_casual", "id": "14600670922", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_camisas", "id": "14600840592", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_mujer_25", "id": "14606090376", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_camisas_casual", "id": "14606621101", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisas_formal", "id": "14608800049", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_camisas_formal", "id": "14610690346", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_camisas", "id": "14612630322", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_camisas_formal", "id": "14616790174", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_mujer_25", "id": "14618100221", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_camisas", "id": "14623200382", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_camisas", "id": "14630960287", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_camisas_formal", "id": "14631180127", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_camisas_casual", "id": "14635050336", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisas_casual", "id": "14637140187", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_camisas_formal", "id": "14642980441", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_casual", "id": "14674440432", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_casual", "id": "14690150623", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_formal", "id": "14694010516", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_formal", "id": "14695901060", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_similar_product", "id": "14713600295", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_related", "id": "14713910224", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "swipe_similars", "id": "14719780161", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_related", "id": "14721430500", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_similar", "id": "14721940058", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "swipe_related", "id": "14723590527", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_similar", "id": "14725540531", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_similar", "id": "14733610107", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_related", "id": "14737580211", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_related_product", "id": "14741110714", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_mujer_25_v2", "id": "14746240481", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_mujer_25_v2", "id": "14753890289", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_mujer_25_v2", "id": "14757790323", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_mujer_25_v2", "id": "14767810779", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_mujer_25_v2", "id": "14777920124", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_mujer_25_v3", "id": "14788100400", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_mujer_25_v3", "id": "14789960371", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_mujer_25_v3", "id": "14792071154", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_mujer_25_v3", "id": "14799620563", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_mujer_25_v3", "id": "14811340497", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_mujer_25_v3", "id": "14811440405", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_mujer_25_v3", "id": "14821400529", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_recomendador_total_v2_at", "id": "14826750309", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "suggester_data_complete_at", "id": "14848700069", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_TOTAL_v2_at", "id": "14852650055", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_recomendador_v2_at", "id": "14858660220", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_mujer_pantalones", "id": "14948850937", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_vestidos_midi", "id": "14949820240", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_vestidos_mini", "id": "14949970399", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_vestidos_midi", "id": "14951690173", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_vestidos_mini", "id": "14951900451", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_vestidos_midi", "id": "14961770538", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_vestidos_mini", "id": "14963880203", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_vestidos_mini", "id": "14965510194", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_mujer_pantalones", "id": "14966830730", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_vestidos_mini", "id": "14969280302", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_mujer_pantalones", "id": "14972760207", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_vestidos_midi", "id": "14973580164", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_vestidos_midi", "id": "14977640266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_mujer_pantalones", "id": "14997090546", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_mujer_pantalones", "id": "15006970361", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_universos_mujer", "id": "15103711408", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_universos_kids", "id": "15104020084", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_category", "id": "15104320340", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_universos_mujer", "id": "15106170012", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_universos_mujer", "id": "15107730310", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_pdetails_hombre", "id": "15108330053", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_pdetails_mujer", "id": "15110210258", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_category_kids", "id": "15112020394", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_universos_kids", "id": "15115860010", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_universos", "id": "15119290736", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_universos", "id": "15121290622", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_universos_mujer", "id": "15121420303", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_universos_hombre", "id": "15123410834", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_pdetails_kids", "id": "15123920223", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_event_universos", "id": "15125100671", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_universos_hombre", "id": "15127300688", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_universos_hombre", "id": "15127540090", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_category_hombre", "id": "15131460941", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_universos_kids", "id": "15133170442", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_universos", "id": "15135410008", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_universos_hombre", "id": "15137180376", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_pdetails_universos", "id": "15137350922", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_universos_category_mujer", "id": "15139930015", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_universos_kids", "id": "15141010700", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_bloques", "id": "15183510048", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_trf_zapatos", "id": "15351790504", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_trf_zapatos", "id": "15355370351", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_trf_zapatos", "id": "15359400384", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_trf_bolsos", "id": "15365290661", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_trf_zapatos", "id": "15365660163", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_trf_bolsos", "id": "15369120992", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_destallados", "id": "15372710536", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_trf_bolsos", "id": "15373380257", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_destallados", "id": "15374640396", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_camisas_destallados", "id": "15376730142", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_destallados", "id": "15376840181", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_destallados", "id": "15378710507", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_trf_zapatos", "id": "15381350144", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_trf_bolsos", "id": "15383220419", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_trf_bolsos", "id": "15383270316", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_pantalones_destallados", "id": "15385710030", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_vestidos_destallados", "id": "15389250253", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_vestidos_destallados", "id": "15389250254", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_camisas_destallados", "id": "15389510208", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_camisas_destallados", "id": "15389540171", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_pantalones_destallados", "id": "15391270143", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_pantalones_destallados", "id": "15393090456", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_vestidos_destallados", "id": "15393110166", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_pantalones_destallados", "id": "15393340206", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_vestidos_destallados", "id": "15395420138", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_camisas_destallados", "id": "15397470059", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_vestidos_destallados", "id": "15409150097", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_camisas_destallados", "id": "15412990140", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_pantalones_destallados", "id": "15415080102", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_destallados", "id": "15418980134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_bloques_vestidos_new", "id": "15422900509", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_vestidos_new", "id": "15429430281", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_bloques_es_de", "id": "15433730693", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_widget", "id": "15434670176", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_bloques_camisas_new", "id": "15435240893", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_pantalones_new", "id": "15435480468", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_bloques_es_de", "id": "15436070093", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques_camisas_new", "id": "15437280249", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_widget", "id": "15440171024", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_vestidos_new", "id": "15441640238", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_widget", "id": "15442700077", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_bloques_pantalones_new", "id": "15443210719", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques_pantalones_new", "id": "15443660212", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques_es_de", "id": "15443850086", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_bloques_es_de", "id": "15444130046", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_camisas_new", "id": "15445550142", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_bloques_camisas_new", "id": "15445580458", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_camisas_new", "id": "15447110588", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_widget", "id": "15450610045", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_widget", "id": "15452460085", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_pantalones_new", "id": "15457120116", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_bloques_vestidos_new", "id": "15457230126", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_widget", "id": "15460300480", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_total_bloques_vestidos_new", "id": "15461280273", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_bloques_es_de", "id": "15461590086", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_total_bloques_pantalones_new", "id": "15463050784", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_cta", "id": "15508530332", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_cta", "id": "15516240354", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cta", "id": "15524370213", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_cta", "id": "15529880914", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_cta", "id": "15534270204", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_cta_filtros", "id": "15536130344", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_porcentajes", "id": "15585970250", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_porcentajes", "id": "15599500342", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_porcentajes", "id": "15603450558", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_porcentajes", "id": "15617590166", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_porcentajes", "id": "15621530370", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_pantalones_woman", "id": "15668530254", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bloques_camisas_woman", "id": "15672320411", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_vestidos_woman", "id": "15674650133", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bloques_vestidos_woman", "id": "15676340261", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_man_bermudas", "id": "15679620590", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_vestidos_woman", "id": "15680370461", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_woman", "id": "15681990480", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bloques_pantalones_woman", "id": "15682310135", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_camisas_woman", "id": "15684020733", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bloques_camisas_woman", "id": "15684380230", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_pantalones_woman", "id": "15686090511", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_camisas_woman", "id": "15688130149", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_vestidos_woman", "id": "15688270209", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_woman", "id": "15688280239", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_man_bermudas", "id": "15689110404", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bloques_vestidos_woman", "id": "15692140283", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_woman", "id": "15692230027", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_man_bermudas", "id": "15693270259", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_man_bermudas", "id": "15694960566", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bloques_total_woman", "id": "15695920290", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_camisas_woman", "id": "15696080104", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_man_bermudas", "id": "15701230371", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bloques_pantalones_woman", "id": "15701700370", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_pantalones_woman", "id": "15701930238", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bloques_total_woman", "id": "15703760414", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_zb_total_woman", "id": "15745870180", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_zapatos_woman", "id": "15751670315", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_bolsos_woman", "id": "15753670368", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_trf_bolsos_woman", "id": "15755500391", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_zb_woman", "id": "15757450246", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_bolsos_woman", "id": "15757660243", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_trf_zapatos_woman", "id": "15761440142", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_trf_bolsos_woman", "id": "15761520367", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_zapatos_woman", "id": "15765720127", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zb_total_woman", "id": "15767330210", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zb_total_woman", "id": "15767360184", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_zb_total_woman", "id": "15767530178", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_trf_zapatos_woman", "id": "15767630199", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_bolsos_woman", "id": "15775440344", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_trf_zapatos_woman", "id": "15775440346", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_trf_bolsos_woman", "id": "15782990260", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_zapatos_woman", "id": "15783110117", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_cta_buscar", "id": "15785540177", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_woman_trajes", "id": "15829420627", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_woman_trajes", "id": "15833520227", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_woman_trajes", "id": "15843520219", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_woman_trajes", "id": "15857000280", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_woman_trajes", "id": "15857070105", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_camisasypantalones_woman", "id": "16240900882", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_camisasypantalones_woman", "id": "16256850234", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_camisasypantalones_woman", "id": "16265820152", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_camisasypantalones_woman", "id": "16273260663", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_camisasypantalones_woman", "id": "16281030798", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_abrigos_nina", "id": "16328830066", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_total_nina", "id": "16336730157", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_total_nina", "id": "16340650198", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_camisetas_nina", "id": "16340680212", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_sudaderas_nina", "id": "16342510364", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_abrigos_nina", "id": "16342570197", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_sudaderas_nina", "id": "16342890136", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_camisetas_nina", "id": "16344650259", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_sudaderas_nina", "id": "16347550030", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_abrigos_nina", "id": "16348210098", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_nina", "id": "16349460084", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_vestidos_nina", "id": "16353380150", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_camisetas_nina", "id": "16357150225", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_abrigos_nina", "id": "16357400232", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_nina", "id": "16359510110", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_vestidos_nina", "id": "16363610119", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_sudaderas_nina", "id": "16365590046", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_nina", "id": "16367120145", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_vestidos_nina", "id": "16369050036", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_camisetas_nina", "id": "16369290126", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_sudaderas_nina", "id": "16371230100", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_vestidos_nina", "id": "16371360123", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_camisetas_nina", "id": "16372980087", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_vestidos_nina", "id": "16379020039", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_abrigos_nina", "id": "16381150058", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_jeans_man", "id": "16612660540", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_jeans_man", "id": "16620490395", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_jeans_man", "id": "16624640102", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_jeans_man", "id": "16624720118", "eventFilter": null}, {"category": "other", "name": null, "eventType": "click", "viewId": "12346952304", "apiName": "151300895_categoria__buscar", "id": "16625760071", "eventFilter": {"filterType": "target_selector", "selector": ".search-box"}}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_jeans_man", "id": "16657190126", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bedlinen", "id": "16714160461", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bedlinen", "id": "16715821069", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_coats_woman", "id": "16724920591", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bedlinen", "id": "16729360502", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bedlinen", "id": "16731720532", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_coats_woman", "id": "16732880354", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_coats_woman", "id": "16734620483", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bedlinen", "id": "16743200508", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_watermark_joinlife", "id": "16746250512", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_watermark_joinlife", "id": "16746550178", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_watermark_joinlife", "id": "16763380093", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_coats_woman", "id": "16767360046", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_watermark_joinlife", "id": "16769430450", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_coats_woman", "id": "16771220034", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue", "id": "16809850293", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_blankets", "id": "16828490310", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_camisetas_man_vista4", "id": "16828644763", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_camisetas_man_vista4", "id": "16828797938", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_total", "id": "16828870155", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_zh_newin", "id": "16830476633", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_blankets", "id": "16830510145", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_camisetas_man_vista4", "id": "16832565150", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf", "id": "16832686130", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_kids_expand", "id": "16836751007", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bedroom_total", "id": "16838430135", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf", "id": "16838449576", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bedroom_total", "id": "16840200132", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_kids_expand", "id": "16840851139", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zh_vistas", "id": "16842311559", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zh_newin", "id": "16842447143", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf_trf", "id": "16846824096", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_blankets", "id": "16848190127", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zh_vistas", "id": "16848372098", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bedroom", "id": "16849620135", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_bedroom", "id": "16849810134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_blankets", "id": "16849880112", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bedroom", "id": "16851840168", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bedroom", "id": "16852110177", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_newin_total", "id": "16852715101", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zh_newin", "id": "16853795668", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf_woman", "id": "16854289440", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zh_vistas", "id": "16855631649", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zh_vistas", "id": "16855851830", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bedroom_total", "id": "16855890161", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bedroom", "id": "16857450180", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bedroom", "id": "16857540136", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zh_vistas", "id": "16857721495", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_kids_expand", "id": "16860101081", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf", "id": "16860136598", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf_trf", "id": "16860207376", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_trf_newin", "id": "16860395063", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_trf", "id": "16860692337", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_blankets", "id": "16861220266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_atcvalue_bedlinen", "id": "16861240213", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf_newin", "id": "16862901918", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_camisetas_man_vista4", "id": "16863272935", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf_woman", "id": "16864412509", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_blankets", "id": "16865530206", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf_newin", "id": "16866685532", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bedroom_total", "id": "16867130296", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf_woman_newin", "id": "16867217956", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zh_newin", "id": "16868934417", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bedroom_total", "id": "16869040196", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_woman", "id": "16871243989", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf_newin", "id": "16871912036", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf", "id": "16873204662", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_newin", "id": "16873912190", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf_trf_newin", "id": "16874190231", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zh_newin", "id": "16875120716", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zh_newin", "id": "16877260495", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_delete_trf_woman_newin", "id": "16878031658", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf_trf_newin", "id": "16878230134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_camisetas_man_vista4", "id": "16879001023", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_camisetas_man_vista4", "id": "16880990439", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf_trf", "id": "16881392905", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf_trf_newin", "id": "16881542572", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf_woman_newin", "id": "16881881404", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf_woman_newin", "id": "16883453236", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_delete_trf_woman", "id": "16885381974", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf_woman", "id": "16885490868", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf_trf", "id": "16886961827", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_delete_trf", "id": "16887410129", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf_woman_newin", "id": "16889002700", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pageview_delete_trf_newin", "id": "16889620919", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_bolsos_woman", "id": "16894613479", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_delete_trf_trf_newin", "id": "16897121661", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_zapatos_bolsos_woman", "id": "16898441861", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_cazadoras_pantalones_man", "id": "16902302315", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_pantalones_man", "id": "16904861703", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_cazadoras_man", "id": "16908420735", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_pantalones_man", "id": "16908600721", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_zapatos_bolsos_woman", "id": "16909532780", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_bolsos_woman", "id": "16911801489", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_cazadoras_man", "id": "16914280593", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_bundles", "id": "16916086267", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_total_cazadoras_pantalones_man", "id": "16916260779", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_zapatos_bolsos_woman", "id": "16918060740", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_zapatos_woman", "id": "16919212417", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_pantalones_man", "id": "16919243621", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_cazadoras_pantalones_man", "id": "16920340096", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_zapatos_woman", "id": "16921383537", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_total_cazadoras_pantalones_man", "id": "16922100815", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_zapatos_bolsos_woman", "id": "16923641423", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles", "id": "16924320533", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_cazadoras_man", "id": "16929181801", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_cazadoras_pantalones_man", "id": "16931712134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_cazadoras_man", "id": "16933072584", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_zapatos_bolsos_woman", "id": "16933450671", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_pantalones_man", "id": "16935042397", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_bolsos_womanv2", "id": "16935194520", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_more", "id": "16935412556", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_pantalones_man", "id": "16937202898", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_zapatos_womanv2", "id": "16943162577", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_camisas_man", "id": "16944920226", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_cazadoras_man", "id": "16944960559", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_zapatos_bolsos_womanv2", "id": "16945173869", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_punto_man", "id": "16946360911", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_total_pcj_man", "id": "16951710715", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_pcj_man", "id": "16956331091", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_pcj_man", "id": "16958290548", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_pcj_man", "id": "16969500324", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_camisas_man", "id": "16971160531", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_camisas_man", "id": "16973231118", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_camisas_man", "id": "16979480868", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_punto_man", "id": "16979530950", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_punto_man", "id": "16980840363", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_punto_man", "id": "16983030645", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_camisas_man", "id": "16983140676", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_more_woman", "id": "16988880277", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_total_pcj_man", "id": "16990100088", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_punto_man", "id": "16991630272", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_woman", "id": "16992710418", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_bundles_woman", "id": "16992831036", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_more_kids", "id": "16998600449", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_mensaje_recomendador", "id": "17008334876", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_bundles_man", "id": "17013980405", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_bundles_kids", "id": "17014440278", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_man", "id": "17023640773", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_kids", "id": "17024130610", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_mensaje_recomendador", "id": "17029026485", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bundles_more_man", "id": "17033350034", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_total_vc_nina", "id": "17047983300", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_total_vc_nina", "id": "17053223873", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_total_vc_nina", "id": "17054121843", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_mensaje_recomendador", "id": "17065023304", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_total_vc_nina", "id": "17087141229", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_total_vc_nina", "id": "17117071145", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_prod_mensaje", "id": "17142191115", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_punto_woman", "id": "17252722185", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_punto_woman", "id": "17264065516", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_bloques_punto_woman", "id": "17269962877", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloqes_punto_woman", "id": "17270084326", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_punto_woman", "id": "17277582102", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_bloques_punto_woman", "id": "17279372711", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloqes_punto_woman", "id": "17287164680", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_newin", "id": "17452882405", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_bolsos_hombre", "id": "17464441663", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_bolsos_hombre", "id": "17464521847", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_zapatos_vestir_hombre", "id": "17468012012", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_kids", "id": "17468242275", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_newin", "id": "17468471734", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_kitchendining", "id": "17468710681", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_newin", "id": "17468720979", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_livingroom", "id": "17470411363", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_zapatos_hombre", "id": "17470481244", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_zapatos_hombre", "id": "17470621236", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_total", "id": "17472642226", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_total", "id": "17472691590", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_bathroom", "id": "17473821787", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_kitchendining", "id": "17473931907", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_kitchendining", "id": "17474361220", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_zapatos_hombre", "id": "17475702150", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_zapatos_vestir_hombre", "id": "17476101499", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_bedroom", "id": "17476201289", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_bathroom", "id": "17476690881", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_zapatos_vestir_hombre", "id": "17479722440", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_fragances", "id": "17480001828", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_livingroom", "id": "17480720636", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_kitchendining", "id": "17481641491", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloques_hombre_total", "id": "17481721753", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_kids", "id": "17481741393", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_bolsos_hombre", "id": "17481881258", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloques_hombre_total", "id": "17481911095", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_livingroom", "id": "17482690293", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_total", "id": "17483511266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_zapatos_hombre", "id": "17485571464", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_kids", "id": "17485601827", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_bolsos_hombre", "id": "17487412108", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_newin", "id": "17487651574", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_kitchendining", "id": "17487971096", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_total", "id": "17488380116", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_fragances", "id": "17490971137", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_zapatos_vestir_hombre", "id": "17491072181", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_total", "id": "17491101139", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_livingroom", "id": "17491231269", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_hombre_total", "id": "17491722504", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_bedroom", "id": "17491781340", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_newin", "id": "17493142071", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_kids", "id": "17493321267", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zarahome_alternative_bedroom", "id": "17493690974", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_fragances", "id": "17493712110", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_livingroom", "id": "17495301508", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_bathroom", "id": "17495351389", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_hombre_total", "id": "17495371433", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_bathroom", "id": "17496971814", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloques_zapatos_vestir_hombre", "id": "17497082431", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_fragances", "id": "17497561469", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloques_zapatos_hombre", "id": "17499013322", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zarahome_alternative_bedroom", "id": "17499301420", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_bolsos_hombre", "id": "17500400294", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zarahome_alternative_kids", "id": "17503081264", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zarahome_alternative_bathroom", "id": "17503490824", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloques_hombre_total", "id": "17503830460", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_bedroom", "id": "17505050697", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zarahome_alternative_fragances", "id": "17511090710", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_nina_bolsos", "id": "17630441539", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloq_total_nina", "id": "17634621490", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "set_ga_event", "id": "17639811751", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_nina_zapatos", "id": "17640021493", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_nina_bolsos", "id": "17647732225", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ga_error", "id": "17648460746", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_nina_zapatos", "id": "17648881229", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloq_total_nina", "id": "17658591414", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_nina_bolsos", "id": "17658611129", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_nina_bolsos", "id": "17660810476", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_nina_bolsos", "id": "17663371275", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sent_ga_event", "id": "17664700787", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "failed_to_find_ga", "id": "17664860115", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_nina_zapatos", "id": "17666290880", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloq_total_nina", "id": "17670450770", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_nina_zapatos", "id": "17671330985", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_nina_zapatos", "id": "17676130598", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "aa_test_activated", "id": "17681890249", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloq_total_nina", "id": "17694960556", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloq_total_nina", "id": "17697210452", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_kids", "id": "17708840211", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_bathroom", "id": "17708870609", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_bathroom", "id": "17710420547", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_bedroom", "id": "17710771124", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_kitchendining", "id": "17712780376", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_kitchendining", "id": "17714690564", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_livingroom", "id": "17716590441", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_livingroom", "id": "17716620337", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_fragances", "id": "17718140795", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_bedroom", "id": "17718250637", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_kids", "id": "17723980468", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_bathroom", "id": "17724490013", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_bathroom", "id": "17725820541", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total", "id": "17726270322", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_livingroom", "id": "17726520311", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total", "id": "17731610267", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_kitchendining", "id": "17731800475", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_bedroom", "id": "17731820595", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_kitchendining", "id": "17735950565", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_kids", "id": "17737750441", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_livingroom", "id": "17737870706", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_bathroom", "id": "17737980388", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_kitchendining", "id": "17738510201", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_fragances", "id": "17739340330", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_fragances", "id": "17741321603", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total", "id": "17742000275", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_bedroom", "id": "17742310372", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total", "id": "17744170188", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_zara_home_total_livingroom", "id": "17745060769", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_zara_home_total_bedroom", "id": "17747060709", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_fragances", "id": "17747700258", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_zara_home_total", "id": "17749020605", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_zara_home_total_kids", "id": "17755380403", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_zara_home_total_fragances", "id": "17759200233", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_zara_home_total_kids", "id": "17765060072", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_nuevo_modulo_relacionados", "id": "17766504052", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_exclude_buscador", "id": "17794871922", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_exclude_buscador", "id": "17816321583", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "act_smaller", "id": "17820620537", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "revenue_smaller", "id": "17823611708", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "checkout_smaller", "id": "17827800942", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_smaller", "id": "17832520119", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_smaller", "id": "17845731389", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_exclude_buscador", "id": "17847390861", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_similar_relacionado_total", "id": "17906612678", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloq_total_man", "id": "17908834048", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_relacionados_new_carrusel", "id": "17909904388", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_woman_blazer", "id": "17912765589", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_similares", "id": "17916382423", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloq_total_man", "id": "17920914393", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_woman_pantalones", "id": "17922225737", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloq_total_woman", "id": "17922913581", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_similares", "id": "17923362523", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_relacionados", "id": "17924282772", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_man_accesorios", "id": "17924592646", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_woman_blazer", "id": "17924603706", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_relacionados_click", "id": "17926291652", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_similares_click", "id": "17929432473", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_woman_camisas", "id": "17929437500", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_similar_relacionado_total", "id": "17929501850", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_relacionado", "id": "17929862529", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_similar_relacionado_total", "id": "17931711447", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_woman_camisas", "id": "17932073437", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_woman_camisas", "id": "17932464032", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_woman_vestidos", "id": "17933884829", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_woman_pantalones", "id": "17934593407", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloq_total_man", "id": "17934831000", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_bloq_total_man", "id": "17935024224", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_woman_camisas", "id": "17935754701", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_woman_pantalones", "id": "17936831632", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_hide_optionals_products", "id": "17938154209", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_similar_relacionado_total", "id": "17939382013", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_relacionado", "id": "17939382020", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_woman_vestidos", "id": "17941004984", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_similar_total", "id": "17942190097", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_global", "id": "17942842263", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_relacionado_total", "id": "17943630201", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_man_accesorios", "id": "17945623733", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_woman_blazer", "id": "17945732887", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_relacionados", "id": "17947021613", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_hide_optionals_products", "id": "17949442951", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_woman_vestidos", "id": "17949931105", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_woman_pantalones", "id": "17950993241", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_bloq_total_woman", "id": "17952341002", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_man_accesorios", "id": "17953262342", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_similar_new_carrusel", "id": "17956990176", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_hide_optionals_products", "id": "17957493606", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloq_total_man", "id": "17957580852", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_woman_blazer", "id": "17959243002", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_woman_camisas", "id": "17959272179", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_bloq_total_woman", "id": "17959731103", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_man_accesorios", "id": "17961042431", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_woman_blazer", "id": "17965052135", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_woman_vestidos", "id": "17965870307", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_woman_vestidos", "id": "17965990636", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_hide_optionals_products", "id": "17967870734", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_bloq_total_woman", "id": "17967970057", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_woman_pantalones", "id": "17971880352", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_bloq_total_woman", "id": "17977221320", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_global", "id": "17979420971", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_man_accesorios", "id": "17981090134", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_global", "id": "17981151100", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_cat_total_special_prices", "id": "18092140238", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "add_to_cart_total_woman_special_prices", "id": "18103560377", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_through_total_woman_special_prices", "id": "18107360509", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_woman_special_prices", "id": "18113200593", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_rediseno_recomendador_sin_talla", "id": "18114451146", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_contextualize_buscador", "id": "18114510206", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_kpi_venta_buscador", "id": "18116840083", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "REV_CONTEXTUALIZE_buscador", "id": "18118300200", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_woman_special_prices", "id": "18119000118", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_rediseno_recomendador_talla_igual", "id": "18122111545", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_rediseno_recomendador_talla_diferente", "id": "18122450933", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_rediseno_recomendador_talla_diferente", "id": "18124051625", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_rediseno_recomendador_talla_diferente", "id": "18128161180", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "CO_CONTEXTUALIZE_buscador", "id": "18130100533", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "CO_kpi_venta_buscador", "id": "18132050255", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_rediseno_recomendador_sin_talla", "id": "18134061350", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_rediseno_recomendador_talla_igual", "id": "18137690745", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ATC_CONTEXTUALIZE_buscador", "id": "18138300019", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_total_rediseno_recomendador", "id": "18138330802", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "rev_total_rediseno_recomendador", "id": "18140260654", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_rediseno_recomendador_sin_talla", "id": "18141860762", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_rediseno_recomendador", "id": "18141900994", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_contextualize_buscador", "id": "18141980205", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "click_rediseno_recomendador_guia", "id": "18143331527", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "ctr_kpi_venta_buscador", "id": "18143440989", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "co_rediseno_recomendador_talla_igual", "id": "18143461078", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pag_vista_kpi_venta_buscador", "id": "18145150654", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "REV_kpi_venta_buscador", "id": "18145390515", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "atc_total_rediseno_recomendador", "id": "18147510005", "eventFilter": null}], "experimental": {"trimPages": false}, "revision": "42339"},g=n(133),h="initializeOptimizelyPreview";if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),l.registerFunction("getAccountId",(function(){return p.accountId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var v;v=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],v.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(149).setupPreviewGlobal(),n(149).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/151300895.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)}));var _=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),_,s.getPreviewLayerIds()),f.addScriptSync(c),n(149).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)})),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(119).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){s();var e=V.getRumData();return e.extras=e.extras||{},e.extras.beacon={cjsTimeout:!0},e=v.pickBy(e,(function(e){return!v.isUndefined(e)})),a(e)}function r(e){var t=L.getPromise("RUM_FIRST_BEACON");return t?t.then(e):m.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return v.isEmpty(e)?w.resolve():r((function(){return N.request({url:G,method:"POST",data:e,withCredentials:!0}).then((function(e){return m.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw A.error("POST to client-rum failed:",e),m.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=I.getCurrentScript();if(e)return e.src}function s(){var e={id:V.getRumId(),v:j,account:k.getAccountId(),project:k.getSnippetId()||k.getProjectId(),snippet:k.getSnippetId(),revision:k.getRevision(),clientVersion:P.getClientVersion(),hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=E.getEvents().length}catch(e){A.debug("Unable to get behavior events for RUM:",e)}v.assign(e,u(),d()),S.dispatch(C.SET_RUM_DATA,{data:e})}function u(){var e=R.getGlobal("performance");if(e){var t,n=V.getScriptSrc();try{if(n){A.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;A.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=v.find(a,(function(e){return r.test(e.name)}))}if(t)return v.mapValues(O.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function c(){try{return!I.querySelector("body")}catch(e){return null}}function l(){try{R.getGlobal("requestAnimationFrame")((function(){var e=V.getRumData().timebase;S.dispatch(C.SET_RUM_DATA,{data:{render:y.now()-(e||0)}})}))}catch(e){return}}function d(){return F.getDurationsFor(v.values(O.RUMPerformanceTimingAttributes))}function f(){var e=T.keys(),t=v.filter(v.map(e,(function(e){var t=D.getStorageKeyFromKey(e);return t?{key:e,isForeign:D.isForeignKey(e),category:t,size:e.length+T.getItem(e).length}:null}))),n=v.reduce(t,(function(e,t){var n=t.key,i=D.getIdFromKey(n);if(!i)return e;var r=t.isForeign?e.foreign:e.local;return r[i]=!0,e}),{local:{},foreign:{}}),i=v.chain(t).filter({isForeign:!0}).reduce((function(e,t){var n=t.key.split("_")[0];return e[n]=!0,e}),{}).value(),r={local:0,foreign:0},a={local:{},foreign:{}};v.forEach(t,(function(e){var t=e.isForeign?"foreign":"local";r[t]+=e.size,a[t][e.category]||(a[t][e.category]=0),a[t][e.category]+=e.size}));var o={numKeys:T.allKeys().length,sizeKeys:T.allKeys().toString().length,sizeValues:T.allValues().toString().length,idCounts:{local:v.keys(n.local).length,foreign:v.keys(n.foreign).length},foreignOriginCount:v.keys(i).length,byteTotals:r,byteTotalsByCategory:a},s=b.estimateStorage();return s.then((function(e){return v.assign(o,{storageEstimate:e})}))}function p(){var e=R.getGlobal("performance"),t=e?e.timing:{},n=F.getMarks()||{},i=V.getApiData(),r=V.getDOMObservationData(),o=U.get("state").getActiveExperimentIds(),s=V.getFeaturesNeededData(),u=I.parseUri(V.getScriptSrc()),c=V.getRumData()||{},l=c.extras||{};v.assign(l,{apiCalls:i,DOMObservationData:r,paintTimings:h(),activeExperimentIds:o,numPages:M.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:g(),experimental:k.getExperimental(),featuresNeeded:s,beacon:{cjsOnload:!0}});var d=R.getGlobal("Prototype");d&&!v.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var p=!1,_={id:V.getRumId(),v:j,project:k.getSnippetId()||k.getProjectId(),navigationTimings:t,userTimings:n,xd:p,apis:v.keys(i),extras:l};f().then((function(e){var t=v.assign(_,{lsMetrics:e});a(t)}))}function g(){var e=R.getGlobal("navigator");if(e&&e.connection)return v.pick(e.connection,["downlink","rtt","effectiveType"])}function h(){var e=R.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(v.isEmpty(t))return;return v.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var v=n(2),_=n(5),m=n(6),E=n(72),y=n(24),I=n(81),S=n(9),T=n(82).LocalStorage,A=n(23),b=n(86),w=n(12).Promise,D=n(75),R=n(41),N=n(87),C=n(7),O=n(25),x=n(16),L=x.get("stores/async_request"),P=x.get("stores/client_metadata"),k=x.get("stores/global"),V=x.get("stores/rum"),F=x.get("stores/performance"),M=(x.get("stores/xdomain"),x.get("stores/view_data")),U=n(89),G="https://rum.optimizely.com/rum",B=3e3,j="1.0",z=.01;t.initialize=function(){var e,t=_.generate().replace(/-/g,"");e=Math.random()<z;var n=o();S.dispatch(C.SET_RUM_DATA,{id:t,RumHost:G,inRumSample:e,src:n,data:{id:t,sync:c(),timebase:y.now(),sampleRate:z,url:n}})},t.queueBeacons=function(){return V.getSampleRum()?(l(),I.isLoaded()?R.setTimeout(p,B):R.addEventListener("load",p),new w(function(e,t){R.setTimeout((function(){i().then(e,t)}),B)}).catch((function(e){A.warn("RUM / Error sending data:",e)}))):w.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function g(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function _(e){return e&&e.Object===Object?e:null}function m(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return gi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Pn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(zt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function R(){}function N(e,t){return O(e,t)&&delete e[t]}function C(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function O(e,t){return Xi?e[t]!==An:Di.call(e,t)}function x(e,t,n){e[t]=Xi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function P(){this.d={hash:new R,map:Ki?new Ki:[],string:new R}}function k(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Ki?t.map["delete"](e):W(t.map,e)}function V(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Ki?t.map.get(e):X(t.map,e)}function F(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Ki?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?x("string"==typeof e?n.string:n.hash,e,t):Ki?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function G(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function B(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function j(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function z(){this.d={array:[],map:null}}function H(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function K(e){var t=this.d,n=t.array;return n?$(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():ji.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Ct(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Ct(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Ct(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Ct(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!jt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Gn||c==Bn;if(fr(e))return Ce(e,t);if(c==Hn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new j);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return jt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,h(n))),i?(a=s,u=!1):t.length>=wn&&(a=G,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Pt(o)&&(n||dr(o)||xt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Gt(e[t])}))}function ge(e,t,n,i,r){return e===t||(null==e||null==t||!jt(e)&&!zt(t)?e!==e&&t!==t:he(e,t,ge,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Vn,c=Vn;o||(u=Ci.call(e),u=u==kn?Hn:u),s||(c=Ci.call(t),c=c==kn?Hn:c);var l=u==Hn&&!I(e),d=c==Hn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||Qt(e)?He(e,t,n,i,r,a):Ye(e,t,u,n,i,r,a);return a.pop(),g}if(!(r&xn)){var h=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(h||v){var g=n(h?e.value():e,v?t.value():t,i,r,a);return a.pop(),g}}if(!f)return!1;var g=Ke(e,t,n,i,r,a);return a.pop(),g}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function _e(e){return Hi(Object(e))}function me(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&ge(e[r],n[r],An,On|xn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),jt(o))r||(r=new j),Se(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Pt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||xt(u)?xt(s)?l=tn(s):!jt(s)||i&&Gt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Te(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ce(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Oe(e){var t=new e.constructor(e.byteLength);return new Vi(t).set(new Vi(e)),t}function xe(e){return yt(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Pe(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Ve(e,t){var n=t?Oe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Fe(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function je(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return jt(i)?i:n}}function ze(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Ti&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=je(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&xn,u=r&On,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],g=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==g&&!n(p,g,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case Fn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case zn:return e!=+e?t!=+t:e==+t;case Yn:case qn:return e==t+""}return!1}function Ke(e,t,n,i,r,a){var o=r&xn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,g=o;++d<u;){f=s[d];var h,v=e[f],_=t[f];if(!(h===An?v===_||n(v,_,i,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var m=e.constructor,E=t.constructor;m!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof m&&m instanceof m&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function qe(e,t){var n=e[t];return Yt(n)?n:An}function We(e){return Ci.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return Oe(e);case Fn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Ve(e,n);case jn:return xe(e);case zn:case qn:return new i(e);case Yn:return Le(e);case Kn:return Pe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||$t(e)||xt(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.e,this.u)}function gt(e,t,n){return t=n?An:t,ue(e,ve(t))}function ht(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function _t(e,t){return tr(e,ie(t))}function mt(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,Re(e,ve(t))}function Tt(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return m(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Yi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return jt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function Ct(e,t){return e===t||e!==e&&t!==t}function Ot(e,t){return e>t}function xt(e){return Pt(e)&&Di.call(e,"callee")&&(!Bi.call(e,"callee")||Ci.call(e)==kn)}function Lt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Pt(e){return zt(e)&&Lt(e)}function kt(e){return e===!0||e===!1||zt(e)&&Ci.call(e)==Fn}function Vt(e){return zt(e)&&Ci.call(e)==Mn}function Ft(e){if(Lt(e)&&(dr(e)||$t(e)||Gt(e.splice)||xt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&zi(e)}function Gt(e){var t=jt(e)?Ci.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pn}function jt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function zt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Yt(e){return null!=e&&(Gt(e)?xi.test(wi.call(e)):zt(e)&&(I(e)?xi:li).test(e))}function Kt(e){return null===e}function qt(e){return"number"==typeof e||zt(e)&&Ci.call(e)==zn}function Wt(e){if(!zt(e)||Ci.call(e)!=Hn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function Xt(e){return jt(e)&&Ci.call(e)==Yn}function $t(e){return"string"==typeof e||!dr(e)&&zt(e)&&Ci.call(e)==qn}function Qt(e){return zt(e)&&Bt(e.length)&&!!fi[Ci.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return _e(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=me(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||S(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function gn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function hn(e){return function(){return e}}function vn(e){return e}function _n(e){return ye(hr({},e))}function mn(e,t,n){var i=sn(t),r=pe(t,i);null!=n||jt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(jt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Ti._===this&&(Ti._=Oi),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Sn(e){return e&&e.length?c(e,vn,Ot):An}function Tn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,Cn=32,On=1,xn=2,Ln=1/0,Pn=9007199254740991,kn="[object Arguments]",Vn="[object Array]",Fn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",jn="[object Map]",zn="[object Number]",Hn="[object Object]",Yn="[object RegExp]",Kn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Vn]=fi[$n]=fi[Fn]=fi[Mn]=fi[Un]=fi[Gn]=fi[jn]=fi[zn]=fi[Hn]=fi[Yn]=fi[Kn]=fi[qn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Vn]=pi[$n]=pi[Fn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[jn]=pi[zn]=pi[Hn]=pi[Yn]=pi[Kn]=pi[qn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Gn]=pi[Xn]=!1;var gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},vi=hi[typeof t]&&t&&!t.nodeType?t:An,_i=hi[typeof e]&&e&&!e.nodeType?e:An,mi=_i&&_i.exports===vi?vi:An,Ei=_(vi&&_i&&"object"==typeof n&&n),yi=_(hi[typeof self]&&self),Ii=_(hi[typeof window]&&window),Si=_(hi[typeof this]&&this),Ti=Ei||Ii!==(Si&&Si.window)&&Ii||yi||Si||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ni=wi.call(Object),Ci=bi.toString,Oi=Ti._,xi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=mi?An:An,Pi=Ti.Reflect,ki=Ti.Symbol,Vi=Ti.Uint8Array,Fi=Pi?Pi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=bi.propertyIsEnumerable,ji=Ai.splice,zi=Ti.isFinite,Hi=Object.keys,Yi=Math.max,Ki=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Xi=qe(Object,"create"),$i=Ki?wi.call(Ki):"",Qi=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();Fi&&!Bi.call({valueOf:1},"valueOf")&&(me=function(e){return T(Fi(e))});var ir=Fe,rr=be("length"),ar=Ui||function(){return[]};(Ki&&We(new Ki)!=jn||qi&&We(new qi)!=Kn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ci.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return jn;case Qi:return Kn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return ze(e,Nn|Cn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,gr(t)||0,n)})),lr=Dt((function(e,t){return ze(e,Cn,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:hn(!1),pr=Number,gr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),_r=Ue((function(e,t,n,i){Fe(t,un(t),e,i)})),mr=Dt((function(e){return e.push(An,Z),_r.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Te(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,L.prototype.clear=P,L.prototype["delete"]=k,L.prototype.get=V,L.prototype.has=F,L.prototype.set=M,U.prototype.push=B,j.prototype.clear=z,j.prototype["delete"]=H,j.prototype.get=Y,j.prototype.has=K,j.prototype.set=q,w.assign=hr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=mr,w.defer=ur,w.delay=cr,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=_n,w.merge=Er,w.mixin=mn,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=Tt,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,mn(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=gn,w.every=gt,w.find=vt,w.findIndex=it,w.forEach=_t,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=mt,w.indexOf=st,w.isArguments=xt,w.isArray=dr,w.isBoolean=kt,w.isDate=Vt,w.isEmpty=Ft,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Kt,w.isNumber=qt,w.isObject=jt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Sn,w.min=Tn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=St,w.uniqueId=In,w.each=_t,w.first=ot,mn(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&_i&&(mi&&((_i.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new a(function(e,t){o=e,u=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,
REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.T=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.R=e,this.N=t,this.C=0,this.O=!1,this.L={},r.extend(this,n),this.P={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.L[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.P)},i.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.N.D(this.R,e)},i.prototype.emitChange=function(){this.O=!0,this.C++},i.prototype.hasChanges=function(){return this.O},i.prototype.resetChange=function(){this.O=!1},i.prototype.getStateId=function(){return this.C},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function p(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function g(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return x(a,r,e,i._result)}))})():R(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function m(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===g&&t.constructor.resolve===h?S(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,_()):e(n)?T(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?x(n,i,r,a):r(a);e._subscribers.length=0}}function C(){this.error=null}function O(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function x(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=O(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,m())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function P(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function V(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function M(e){return new V(this,e).promise}function U(e){var t=this;return new t(K(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(v);return D(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[re]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&B(),this instanceof z?L(this,e):j())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=Y,q=0,W=void 0,X=void 0,$=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new C,ce=new C,le=0;return V.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},V.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=E(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===z){var a=new n(v);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},V.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},V.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},z.all=M,z.race=U,z.resolve=h,z.reject=G,z._setScheduler=a,z._setAsap=o,z._asap=$,z.prototype={constructor:z,then:g,"catch":function(e){return this.then(null,e)}},z.polyfill=H,z.Promise=z,z}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,g=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new u(e,t)),1!==g.length||h||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),u={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),client_metadata:n(31),cookie_options:n(33),event_data:n(34),event_emitter:n(35),dimension_data:n(36),directive:n(37),global:n(38),global_state:n(39),history:n(40),integration_settings:n(42),layer:n(43),layer_data:n(44),log:n(46),observed_redirect:n(47),pending_events:n(48),performance:n(49),plugins:n(50),provider_status:n(51),pending_redirect:n(52),rum:n(53),sandbox:n(54),session:n(55),tracker_optimizely:n(56),ua_data:n(57),view:n(58),view_data:n(59),visitor:n(60),visitor_attribute_entity:n(61),visitor_events:n(62),visitor_events_manager:n(67),visitor_id:n(68),visitor_bucketing:n(69),xdomain:n(70)};u["group_data"]=n(71),a.registerStores(u),i.forOwn(u,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){i.isArray(t)||(t=[t]);for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n},t.setFieldValue=function(e,t,n){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];i.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=n}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.V),this.on(r.ACTION_EXECUTED,this.F),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},V:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.P.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.P.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.P.actions[u]=n}))}))}))})),this.emitChange())},F:function(e){var t=e.actionId;i.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return i.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.P.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.P.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),u=n(9),c=n(26);i.prototype.G=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};u.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.j(e.logLevel,e.logMessage,!0)}),this))},i.prototype.j=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.z(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.j(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.j(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.z([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.j(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.j(s.LogLevel.ERROR,[this.H(),e]),this.j(s.LogLevel.INFO,[e.stack])):this.j(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.j("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.j("GROUPEND",[].slice.call(arguments))},i.prototype.z=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(2),r=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.REGISTER_ASYNC_DEFERRED,this.Y),this.on(i.RESOLVE_DEFERRED,this.K),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},Y:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},K:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getAudiencesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getAudienceName:function(e){var t=i.find(i.values(this.P),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.V)},getChange:function(e){return this.P[e]},V:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},i.each(a.Lifecycle,i.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=n(32);e.exports={initialize:function(){this.P={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.J),this.on(i.SET_CLIENT_VERSION,this.Z)},getClientName:function(){return this.P.name},getClientVersion:function(){return this.P.version},J:function(e){e&&(this.P.name=e),this.emitChange()},Z:function(e){e&&(this.P.version=e),this.emitChange()}}}),(function(e,t,n){t.VERSION="0.144.0",t.NAME="js"}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.ee),this.on(i.SET_COOKIE_AGE,this.te),this.on(i.SET_COOKIE_AUTO_REFRESH,this.ne)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},ee:function(e){this.P.currentDomain=e,this.emitChange()},te:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},ne:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.V)},getAll:function(){return a.safeReference(i.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.P,{pageId:e}))},V:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.re),this.on(a.REMOVE_EMITTER_HANDLER,this.ae)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.P.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},re:function(e){var t=i(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},ae:function(e){var t=!1,n=e.token;r.forOwn(this.P.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.P.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.oe)},getAll:function(){return i.cloneDeep(this.P)},conflictInObservingChanges:function(){return!this.P.mutationObserverAPISupported},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.P.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},oe:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.se),this.on(r.ACTIVATE,this.ue),this.on(r.RECORD_GLOBAL_DECISION,this.ce),this.on(r.SET_DOMCONTENTLOADED,this.le)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},getExperimental:function(){return a.safeReference(this.P.experimental)},domContentLoadedHasFired:function(){return this.P.domContentLoaded},ue:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},ce:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},se:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.P,n,t),this.emitChange()}},le:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.de)},getEffectiveReferrer:function(){return this.P.effectiveReferrer},getEffectiveVariationId:function(){return this.P.effectiveVariationId},de:function(e){i.isUndefined(e.effectiveReferrer)||(this.P.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.P.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(41);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.fe),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.pe)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},fe:function(){this.P.originalPushState||(this.P.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},pe:function(){this.P.originalReplaceState||(this.P.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.V),this.on(r.SET_INTEGRATION_SETTINGS,this.ge)},V:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},ge:function(e){var t=this.P[e.id];t?i.extend(t,e):this.P[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.P))},get:function(e){return i.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.he),this.on(r.RECORD_LAYER_DECISION,this.ve),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this._e)},getLayerState:function(e,t){if(this.P[e]){var n=this.P[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.P)i.forEach(this.P[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)i.forEach(this.P[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},he:function(e){e.merge||(this.P={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.P[t];if(i.isUndefined(r))this.P[t]={},this.P[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][n]=e);
}}),this)),this.emitChange()},ve:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.P[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.P[e.layerId]=n,this.emitChange()},_e:function(e){var t=e.layerId,n=e.pageId||o;return this.P[t]?this.P[t][n]?(this.P[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(45);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.V)},V:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[n.id]=n})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return i.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(this.P.layers,(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){var t=i.find(this.P.layers,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return i.some(this.P.layers,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={logs:[]},this.on(i.LOG,this.me)},getLogs:function(){return this.P.logs},me:function(e){this.P.logs.push(e),this.emitChange()},w:function(){return this.P.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Ee),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.ye)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},Ee:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},ye:function(){this.P.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ie),this.on(r.REMOVE_PENDING_EVENT,this.Se),this.on(r.LOAD_PENDING_EVENTS,this.Te)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ie:function(e){i.keys(this.P).length>=o&&this.Ae();var t=e.id,n=e.retryCount;this.P[t]&&this.P[t].retryCount===n||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},Se:function(e){delete this.P[e.id],this.emitChange()},Te:function(e){this.P=e.events,this.Ae(),this.emitChange()},Ae:function(){for(var e=i.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.be)},be:function(e){i.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.P[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.P=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.we)},we:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.De)},getPendingAttributeValue:function(e){return e=i.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.P,e)},De:function(e){a.setFieldValue(this.P,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Ee)},isExpectingRedirect:function(){return i.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},Ee:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Re),this.on(r.RECORD_API_USAGE,this.Ne),this.on(r.INITIALIZE_CHANGE_METRICS,this.Ce),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.Oe),this.on(r.RECORD_AUDIENCE_USAGE,this.xe),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Le),this.on(r.RECORD_CHANGE_OVERHEATED,this.Pe),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.ke),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ve),this.on(r.RECORD_INTEGRATION_USAGE,this.Fe),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.Me),this.on(r.RECORD_LAYER_POLICY_USAGE,this.Ue),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.Ge)},Re:function(e){i.merge(this.P,e),this.emitChange()},Ne:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},Ce:function(){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Le:function(e){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Pe:function(){i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},Ve:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},Be:function(e,t,n){i.isUndefined(this.P.featuresNeeded[e])&&(this.P.featuresNeeded[e]={});var r=this.P.featuresNeeded[e];i.each(t,(function(e){r[e]||(r[e]={}),r[e][n]||(r[e][n]=!0)}))},Fe:function(e){this.Be("integrations",e.integrations,e.layerId)},ke:function(e){this.Be("changeTypes",e.changeTypes,e.layerId)},Oe:function(e){this.Be("activationTypes",[e.activationType],e.entityId),this.emitChange()},Ge:function(e){this.Be("viewFeatures",e.featuresUsed,e.entityId),this.emitChange()},Me:function(e){this.Be("layerFeatures",[e.feature],e.entityId),this.emitChange()},Ue:function(e){this.Be("policy",[e.policy],e.layerId),this.emitChange()},xe:function(e){this.Be("audiences",e.audienceTypes,e.layerId),this.emitChange()},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return i.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src},getFeaturesNeededData:function(){var e=this.P.featuresNeeded,t={};return i.forOwn(e,(function(e,n){var r=i.keys(e);i.isEmpty(r)||(t[n]={}),i.forEach(r,(function(r){t[n][r]=i.keys(e[r]).length}))})),t}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.je)},je:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.ze),this.on(r.LOAD_SESSION_STATE,this.He)},getState:function(){return i.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},He:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},ze:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.Ye(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Ke),this.on(r.REGISTER_PREVIOUS_BATCH,this.qe),this.on(r.REGISTER_TRACKER_VISITOR,this.We),this.on(r.REGISTER_TRACKER_EVENT,this.Xe),this.on(r.REGISTER_TRACKER_DECISION,this.$e),this.on(r.RESET_TRACKER_EVENTS,this.Qe),this.on(r.RESET_TRACKER_STORE,this.Ye),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Je),this.on(r.SET_TRACKER_POLLING,this.Ze),this.on(r.SET_TRACKER_BATCHING,this.et),this.on(r.SET_TRACKER_SEND_EVENTS,this.tt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.nt),this.on(r.SET_TRACKER_DIRTY,this.it),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.rt)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},nt:function(e){i.isEmpty(this.P.data)||i.isEmpty(e.data)||(this.Ke(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],i.isEmpty(this.P.previousBatches)||i.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},it:function(e){this.P.isDirty=e,this.emitChange()},Xe:function(e){var t=this.at();!i.isEmpty(t.snapshots)&&i.isEmpty(this.P.decisionEvents)||this.ot(),this.st().events.push(e.event),this.P.decisions=e.decisions,this.it(!0)},$e:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.it(!0)},We:function(e){i.isEmpty(this.P.data)?this.P.data=e.data:this.Ke(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.it(!0)},qe:function(e){this.P.previousBatches.push(e),this.it(!0)},Ye:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Qe:function(){var e=this.at();this.P.data.visitors=[e],e.snapshots=[],this.it(!0)},Je:function(){this.P.previousBatches=[],this.it(!0)},Ze:function(e){this.P.polling=e,this.emitChange()},et:function(e){this.P.shouldBatch=e,this.emitChange()},tt:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.P.data)},getPreviousBatches:function(){return i.cloneDeep(this.P.previousBatches)},ut:function(){return this.P.decisionEvents.slice()},ct:function(){this.P.decisionEvents=[]},dt:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},st:function(){return i.last(this.at().snapshots)},at:function(){return i.last(this.P.data.visitors)},ot:function(){var e=this.ut(),t=this.at();t.snapshots.push({decisions:this.dt(),events:e}),this.ct(),this.it(!0)},Ke:function(){this.P.decisionEvents.length>0&&this.ot()},hasEventsToSend:function(){if(!i.isEmpty(this.P.decisionEvents))return!0;if(!i.isEmpty(this.P.data)){var e=i.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},rt:function(e){var t=this.at();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.V)},V:function(e){i.isEmpty(this.P)&&(this.P=e.data)},get:function(){return i.cloneDeep(this.P)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o=!1,s={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=i.cloneDeep(s),this.on(r.REGISTER_VIEWS,this.ft),this.on(r.SET_VIEW_ACTIVE_STATE,this.pt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.ht),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.vt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this._t),this.on(r.SET_GLOBAL_TAGS,this.mt),this.on(r.RESET_VIEW_STATES,this.Et),this.on(r.SET_VIEW_BATCHING,this.et)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.P.viewStates[e]),n=this.P.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.P.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.P.globalTags)},Et:function(){this.P.viewStates={},this.emitChange()},ft:function(e){i.each(e.views,i.bind((function(e){var t=e.id;o&&this.P.viewStates[t]||(this.P.viewStates[t]={id:t,isActive:i.isBoolean(e.isActive)?e.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}})}),this)),this.emitChange()},pt:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},ht:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},vt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},_t:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},mt:function(e){i.extend(this.P.globalTags,e),this.emitChange()},et:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.V)},getAll:function(){return a.safeReference(i.values(this.P.views))},getPagesMap:function(){return a.safeReference(this.P.views)},get:function(e){return a.safeReference(this.P.views[e])},getByApiName:function(e){return a.safeReference(this.P.apiNamesToViews[e])},apiNameToId:function(e){var t=this.P.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.P.views[e];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.P.views).length},getAllViewsForActivationType:function(e){return i.filter(this.P.views,{activationType:e})},V:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.P.views[e.id]=e,this.P.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.yt),this.on(r.SET_VISITOR_ATTRIBUTES,this.It),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.St)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e){var t=this.P.profile;return i.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return i.cloneDeep(this.P.metadata[e])},getVisitorIdFromAPI:function(){return this.P.visitorId},St:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},It:function(e){i.each(e.attributes,i.bind((function(e){var t=e.key;a.setFieldValue(this.P.profile,t,e.value),e.metadata&&i.forOwn(e.metadata,i.bind((function(e,n){a.setFieldValue(this.P.metadata,t.concat(n),e)}),this))}),this)),this.emitChange()},yt:function(e){this.P.visitorId=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.Tt)},getCustomBehavioralAttributes:function(){return i.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.P);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.P[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},Tt:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(63).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.V),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.At),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.bt)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},V:function(e){this.P.events=e,this.emitChange()},At:function(e){this.P.foreignEvents[e.key]=e.value},bt:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(64),s=n(19).getFieldValue,u=n(65);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(66).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.wt)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},wt:function(e){this.P[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={randomId:null},this.on(r.SET_VISITOR_ID,this.V)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},V:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.Dt),this.on(r.MERGE_VARIATION_ID_MAP,this.Rt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.Nt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Ct)},getVariationIdMap:function(){return i.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},Dt:function(e){var t=this.P.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=n,this.emitChange())},Rt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.each(t||{},(function(e,t){n[t]?i.assign(n[t],e):n[t]=e})),this.P.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},Nt:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Ct:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.assign(n,t),this.P.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.Ot),this.on(r.XDOMAIN_ADD_FRAME,this.xt),this.on(r.XDOMAIN_SET_MESSAGE,this.Lt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.Pt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.kt),this.on(r.XDOMAIN_SET_DISABLED,this.Vt)},getMessages:function(){return i.cloneDeep(this.P.messages)},getNextMessageId:function(){return this.P.messages.length},getMessageById:function(e){return this.P.messages[e]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},Ot:function(e){this.P.defaultFrame=e},xt:function(e){this.P.frames.push(e)},Lt:function(e){this.P.messages[e.messageId]=e.message},Pt:function(e){this.P.subscribers.push(e.subscriber)},kt:function(e){this.P.canonicalOrigins=e.canonicalOrigins},Vt:function(e){this.P.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.V)},V:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,n){var i=n(73);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){y.dispatch(_.SET_VISITOR_EVENTS,e)}function r(e){y.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){y.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){y.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){y.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){y.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return N.getEvents()}function l(){return C.getBaseMap()}function d(){return C.getEventQueue()}function f(){return C.getLastEvent()}function p(){return C.getCleared()}function g(){return C.getInitialized()}function h(){var e=c().concat(d()),t=!1;return e.length>x&&(e=e.slice(-x),t=!0),i(e),a([]),t}var v=n(2),_=n(7),m=n(24),E=n(74),y=n(9),I=n(23),S=n(75),T=t,A=n(63).Event,b=n(64),w=n(63).EventBase,D=n(85),R=n(16),N=R.get("stores/visitor_events"),C=R.get("stores/visitor_events_manager"),O={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},x=1e3;t.initialize=function(e,t){if(!g()){T.Ft(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){I.debug("Behavior store: adding event",e);var t=T.Mt(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),c(),d()),T.Ut(d())},t.getEvents=function(){return d().length>0&&(h()&&D.sessionize(c()),T.Gt(c()),T.Ut(d())),c()},T.Ft=function(e,t){T.Bt(e,t)&&(T.Gt(c()),T.Ut(d())),D.sessionize(c())},T.Bt=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return O.EVENTBASE in r?(i(T.jt(e)),a(T.jt(t))):(n=!0,i(T.zt(e)),a(T.zt(t))),d().length>0&&(h(),n=!0),i(T._updateBaseMapAndMaybeDedupe(c())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.zt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.Ht(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Yt();return D.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(c())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.Kt=function(){return m.now()},T.Mt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=T.qt(o);var s=T.Kt(),u=new A(o,s,-1);return D.updateSessionId(f(),u),D.updateSessionIndex(f(),u),
u},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.qt(e[t].eventBase);return e},T.Gt=function(e){var t=T.Wt(e);S.persistBehaviorEvents(t)},T.Ut=function(e){var t=T.Wt(e);S.persistBehaviorEventQueue(t)},T.Xt=function(){p()||(i([]),a([]),T.Gt(c()),T.Ut(d()),r({}),o(null),s(!0))},T.qt=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.Yt=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.Wt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);v.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);v.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=O,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.Ht=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},T.jt=function(e){for(var t=O,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.Ht(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new A(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.jt(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return c(B.LAYER_MAP)||{}}function r(e,t){R.dispatch(N.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=W.getPreferredLayerMapString();g(B.LAYER_MAP,e,!0)}function o(e){R.dispatch(N.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=L.now()),R.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i=t.provides;if(D.isArray(i)||(i=[i]),!Q||!D.includes(["queryParams","url"],i[0])){var r=t.isSticky&&!D.isUndefined(F.getFieldValue(e,i));if(!r){var a;try{var o=P.evaluate(t.getter);D.isFunction(o)&&(o=o((function(){return F.getFieldValue(e,i)}),(function(e){n(i,e)}))),D.isUndefined(o)||(t.isAsync?(a=o.then((function(e){n(i,e)}),(function(e){U.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),R.dispatch(N.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:a})):n(i,o))}catch(e){U.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}}function u(){I(c(B.EVENTS)||[],c(B.EVENT_QUEUE)||[]);var e=f(B.LAYER_STATES);D.forEach(e,(function(e){e.item=D.map(e.item,d)})),S(l(e)),T(c(B.SESSION_STATE)||{}),b(c(B.VISITOR_PROFILE)||{});var n=c(B.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()}function c(e){var t=h(e),n=M.getItem(t);if(!n){var i=v(e);n=M.getItem(i),p(e,n)}return D.isString(n)&&(n=w(n)),n}function l(e){var t=[];return D.each(e,(function(e){D.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function d(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function f(e){var t=q.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return D.each(M.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:w(M.getItem(e))};n.push(a)}})),n}function p(e,t){var n=h(e),i=v(e);M.setItem(n,t),M.removeItem(i)}function g(e,t,n){try{var i=h(e);n||(t=V.stringify(t));try{M.removeItem(v(e)),M.setItem(i,t)}catch(e){throw U.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}}catch(e){U.warn("Unable to persist visitor data:",e.message)}}function h(e){var n=q.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function v(e){var t=q.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function _(e,n){if(!q.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(E(e)){var i=t.getStorageKeyFromKey(e);if(D.includes(B,i)){var r=h(i);if(!(e.indexOf(r)<=0))if(i===B.EVENT_QUEUE)R.dispatch(N.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:O.deserialize(w(n))});else if(i===B.EVENTS)R.dispatch(N.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:O.deserialize(w(n))});else if(i===B.LAYER_STATES)R.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.map(w(n),d),merge:!0});else if(i===B.VARIATION_MAP)R.dispatch(N.MERGE_VARIATION_ID_MAP,{variationIdMap:w(n)});else if(i===B.VISITOR_PROFILE){var a=["custom"],o=w(n);D.each(a,(function(e){var t=Y.getPlugin(k.PluginTypes.visitorProfileProviders,e);if(t){if(o.profile&&o.metadata){var n=m(o,e,t.attributionType);if(!D.isEmpty(n)){var i=[];D.forOwn(n.data,(function(t,r){var a=n.metadata[r],o={key:[e,r],value:t,metadata:a};i.push(o)})),R.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else U.debug("Attribute type",e,"not used by any audiences")}))}}}}function m(e,t,n){var i=X.getAttribute(t),r=X.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(D.isEmpty(i))return{data:a,metadata:o};var s={};return D.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===k.AttributionTypes.FIRST_TOUCH&&i>=a||n===k.AttributionTypes.LAST_TOUCH&&a>=i||D.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function E(e){var t=e.split("$$")[0];return t.indexOf("://")>0}function y(){var e=X.getVisitorProfile(),t=X.getVisitorProfileMetadata(),n=Y.getAllPlugins(k.PluginTypes.visitorProfileProviders);if(n){var i=D.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=D.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function I(e,t){C.initializeStore(e,t)}function S(e){R.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.filter(e,(function(e){return!!e.decision}))})}function T(e){e=D.extend({lastSessionTimestamp:0,sessionId:null},e),R.dispatch(N.LOAD_SESSION_STATE,e)}function A(){return"oeu"+L.now()+"r"+Math.random()}function b(e){var t,n,i=Y.getAllPlugins(k.PluginTypes.visitorProfileProviders),r=D.filter(i,(function(e){return D.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=D.reduce(t,(function(e,t,n){var i=t,a=D.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),R.dispatch(N.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function w(e){try{return V.parse(e)}catch(t){return U.debug("Failed to parse: ",e,t),null}}var D=n(2),R=n(9),N=n(7),C=n(72),O=n(73),x=n(76),L=n(24),P=n(16),k=n(25),V=n(26),F=n(19),M=n(82).LocalStorage,U=n(23),G=n(12).Promise,B=n(25).VisitorStorageKeys,j=P.get("stores/cookie_options"),z=P.get("stores/global"),H=P.get("stores/layer"),Y=P.get("stores/plugins"),K=P.get("stores/session"),q=P.get("stores/visitor_id"),W=P.get("stores/visitor_bucketing"),X=P.get("stores/visitor"),$=P.get("stores/provider_status"),Q=!1;t.getOrGenerateId=function(){var e=t.getCurrentId();return e||(e=A()),{randomId:e}},t.getCurrentId=function(){return X.getVisitorIdFromAPI()||x.get(k.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return M.keys().length>0},t.setId=function(e){var n=q.getBucketingId();R.dispatch(N.SET_VISITOR_ID,e),q.getBucketingId()!==n&&(u(),t.deleteOldLocalData());try{t.maybePersistVisitorId(e)}catch(e){if(U.error("Visitor / Unable to persist visitorId, disabling tracking"),R.dispatch(N.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof x.MismatchError)throw U.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return c(B.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){R.dispatch(N.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=W.getVariationIdMapString();g(B.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){g(B.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){R.dispatch(N.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=D.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=D.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=D.partial(s,t),i=D(e).filter({isAsync:!0}).map(n).filter().value();return D.forEach(D.filter(e,(function(e){return!e.isAsync})),n),i.length>0?G.all(i):G.resolve()},t.persistBehaviorEvents=function(e){g(B.EVENTS,e)},t.persistBehaviorEventQueue=function(e){g(B.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=H.getLayerStates(t.getNamespace());e=D.map(e,(function(e){return D.omit(e,"namespace")})),g(B.LAYER_STATES,e)},t.persistSessionState=function(){g(B.SESSION_STATE,K.getState())},t.persistVisitorProfile=function(){g(B.VISITOR_PROFILE,y())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return D.includes(e,n)&&D.includes(e,"_")&&D.includes(e,"$$")&&D.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){x.remove(k.COOKIES.VISITOR_UUID),e.randomId&&(j.getAutoRefresh()||t.getCurrentId()!==e.randomId?(x.set(k.COOKIES.VISITOR_ID,e.randomId),U.log("Persisting visitorId:",e.randomId)):U.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return X.getAttribute(e)},t.getPendingAttributeValue=function(e){return $.getPendingAttributeValue(e)},t.isForeignKey=E,t.checkKeyForVisitorId=function(e){var n=q.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(e);return!i||i===n},t.getIdFromKey=function(e){var n=e.split("$$")[0],i=t.getStorageKeyFromKey(e),r=D.includes(k.StorageKeys,i);if(r)return null;var a=n.indexOf("_"),o=a===-1;return o?n:n.substring(a+1)},t.getStorageKeyFromKey=function(e){var t,n=e.split("$$").pop(),i=n.indexOf("://")>-1;if(i){var r=n.indexOf("_");t=n.substring(r+1)}else t=n;return D.includes(D.values(k.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var e=M.keys();D.each(e,(function(e){t.isForeignKey(e)||t.checkKeyForVisitorId(e)||M.removeItem(e)}))},t.deleteOldForeignData=function(){var e=M.keys();D.each(e,(function(e){t.isForeignKey(e)&&M.removeItem(e)}))},t.loadForeignData=function(){D.each(M.keys(),(function(e){var t=M.getItem(e);t&&_(e,t)}))},t.getNamespace=function(){return z.getNamespace()},t.serializeFieldKey=function(e){return D.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=x.getAll();D.forEach(D.keys(e),(function(e){0===e.indexOf(k.COOKIES.SESSION_STATE+"$$")&&x.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return d.dispatch(c.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(77).create,o=n(24),s=n(81),u=n(41),c=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),g=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,u;n=s.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(u=t.safeDecodeURIComponent(i.substring(0,o)),void 0===c[u])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,c){a=r.extend({encodeValue:!0},a),c!==!1&&(c=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(u.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var h=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*h)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=a.encodeValue,_=t.get(e,v);if(_!==n){if(!_)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+n+'" for "'+e+'", got "'+_+'"')}}},t.remove=function(e,n){for(var i=u.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(78),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(79)(),a=n(80);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.parseUri=function(e){var n=t.createElement("a");return n.href=e,n},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(77).create,s=n(83),u=n(41),c=t.Error=o("StorageError");try{r=u.getGlobal("localStorage")}catch(e){throw new c("Unable to read localStorage: "+e.toString())}if(!r)throw new c("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i,t.isOptimizelyKey=function(e){return e.slice(0,a.length)===a}}),(function(e,t,n){function i(e,t){this.$t=e,this.Qt=t}var r=n(2),a=n(23),o="$$";i.prototype.Jt=function(e){return[this.Qt,e].join(o)},i.prototype.Zt=function(e){return e.replace(this.Qt+o,"")},i.prototype.setItem=function(e,t){try{this.$t.setItem(this.Jt(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.$t.removeItem(this.Jt(e))},i.prototype.getItem=function(e){var t=null;try{t=this.$t.getItem(this.Jt(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.$t);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Qt)}),this)),r.bind(this.Zt,this))},i.prototype.allKeys=function(){return r.keys(this.$t)},i.prototype.allValues=function(){return r.values(this.$t)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return u.getGlobal("performance")}var r=n(7),a=n(77).create,o=n(24),s=n(9),u=n(41),c=n(16),l=c.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(63).Event,o=n(24),s=n(64),u=n(63).EventBase;t.CURRENT_SESSION_INDEX=0;var c=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<c},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new u("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),c=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,c="number"!=typeof c?n:c,e=new a(new u("",""),n,c,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var u=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>c&&(u+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,u);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.estimateStorage=function(){var e=r.getGlobal("navigator");try{return e.storage.estimate()}catch(e){return i.resolve({usage:null,quota:null})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),u=n(23),c=n(12).Promise,l=n(88),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new c(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),u.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(81),u=n(25),c=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(41);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(u.SandboxedFunctions,(function(e){return n[e]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(90),o=n(16),s=o.get("stores/plugins"),u=n(7),c=n(25),l=n(9),d=!1,f=[n(105),n(106),n(127)],p=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(f[s]&&(a=f[s][n]),t&&p.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(u.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){if(d&&"state"!==e)return void r.warn('Module "'+e+'" not found.');r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(c.PluginTypes.apiModules,e),t?(l.dispatch(u.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(l.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],c=e.getLayerStates();s.onlySingleExperiments&&(c=o.filter(c,(function(e){var n=t.get(e.layerId);return n&&l.isSingleExperimentPolicy(n.policy)})));var f=o.map(c,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=d.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:!!e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(91),u=n(92),c=n(94),l=n(45),d=n(95);t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,n,i,r,a,s,l,d){var f={},p={},g={},h={audiences:e.getAudiencesMap(),events:n.getEventsMap(),campaigns:f,pages:r.getPagesMap(),experiments:p,variations:g,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},v=c.dereferenceChangeId;return o.each(i.getAll(),(function(e){u.defineProperty(f,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"campaign"),u.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return p[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){u.defineProperty(p,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"experiment"),u.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return g[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){u.defineProperty(g,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,v)})}))}),"variation"),t}),"variationMap","byId")}))}))})),h.groups=a.getGroupsMap(),h}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,u,c,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,c,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=u.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e[t.id].isActive=!!e[t.id].isActive,e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return c.isGlobalHoldback()},getActivationId:function(){return c.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=d.getExperimentAndVariation();return e&&(e.referrer=d.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?s.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=s.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),u=o.mapValues(a.names,(function(t,n){return s.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:u.experiment,variation:u.variation};return l.isSingleExperimentPolicy(r.layer.policy)||o.extend(c,{campaign:u.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(96).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(102)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var g=u.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),_=h*l.length,m=g+_;if(s&&(m+=f.length),m>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-m,y=d.length,I=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(E/y));E-=A,y--,I.unshift(T.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),g=d.names,h=d.idStrings,_=u.reduce(h,(function(e,t){return e+t.length}),0);if(_+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=a-_-c-s.length,E={};E.variation=Math.min(g.variation.length,Math.floor(m/3)),m-=E.variation,E.experiment=Math.min(g.experiment.length,Math.floor(m/2)),m-=E.experiment,
E.layer=m;var y={};u.each(g,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return v.isSingleExperimentPolicy(e.policy)||I.push(y.layer+h.layer),I=I.concat([y.experiment+h.experiment,y.variation+h.variation,s]),I.join(l)}var u=n(2),c=n(16),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=n(23),v=n(45);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||g,experiment:t.name||g,variation:n.name||g};if(o&&(s=u.mapValues(s,i)),s.experiment===g&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(93),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,u){i(e,t,(function(){var e=["prop",s,u||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(92),u=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return c(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=u.getChange(e);return t?o.safeReference(t):e};var c=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(97).observeSelector,a=n(98).poll,o=n(100).waitForElement,s=n(101).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(m),a),this.observe(t,e)});return function(i){var r=m[i];n.observe(t,e),r.cancelObservation=function(){delete m[i],l.isEmpty(m)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));m[e].cancelObservation=function(){t(),delete m[e]}}}function r(e){var t=m[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(m[e]){if(o(m[e]))return 0===m[e].matchedCount&&l.isFunction(m[e].options.onTimeout)&&m[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(m[e].selector);t.length&&(l.each(t,(function(t){t.en&&t.en[e]||m[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;m[e]&&m[e].callbackQueue.length;){var t=m[e].callbackQueue.shift();if(u(t,e),m[e].matchedCount=m[e].matchedCount+1,m[e].callback(t),m[e]&&m[e].options.once)return void r(e)}}function u(e,t){e.en||(e.en={}),e.en[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),p=n(81),g=(n(25),n(9),n(5).generate),h=n(98),v=n(41),_=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),m={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=g();return n=l.assign({},_,n||{}),m[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),v.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),u=n(41),c=n(99).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=c),l[t]||(l[t]={callbacks:{},id:u.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(97).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(98).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(103);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(104),s=n(16),u=n(9),c=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),u.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){u.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(c.error("Error in handler for event:",e,r),o.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(103);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(106);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){function i(e){var t;return e.eventId&&(t=y.create(e.eventId,e.eventName,"custom")),R.updateAllViewTags(),function(){var n=p.trackCustomEvent(e.eventName,e.tags,t);n?b.log("API / Tracking custom event:",e.eventName,e.tags):b.log("API / Not tracking custom event:",e.eventName)}}function r(e){var t;return e.eventData&&(t=y.create(e.eventData.id,e.eventData.apiName,"click",e.eventData)),function(){var e=p.trackClickEvent(t);e?b.log("API / Tracking click event:",e):b.log("API / Not tracking click event:",e)}}function a(e){var t=e.eventData,n=A.createLayerState(t.layerId,t.experimentId,t.variationId),i=A.createSingle(t.layerId,t.experimentId,t.variationId);return function(){A.recordLayerDecision(n.layerId,n.decisionTicket,n.decision),b.log("API / Tracking decision event:",n),p.trackDecisionEvent(n.decision,n.decisionTicket,i)}}function o(e){var t=R.create(e.eventData.id,e.eventData.apiName),n=R.createState(t.id);return function(){var e=p.trackViewActivation(t,n);e?b.log("API / Tracking pageview event:",e):b.log("API / Not tracking pageview event:",e)}}var s=n(2),u=n(7),c=n(89),l=n(90),d=n(107),f=n(25),p=n(108),g=n(115),h=n(6),v=n(77).create,_=n(24),m=n(116),E=n(119),y=n(120),I=n(103),S=n(9),T=n(26),A=n(111),b=n(23),w=n(121),D=n(112),R=n(122),N=n(75),C=n(16),O=C.get("stores/dimension_data"),x=C.get("stores/view"),L=C.get("stores/view_data"),P=C.get("stores/visitor_id"),k=C.get("stores/layer_data"),V=C.get("stores/directive"),F=!1,M=!1,U=F||M,G=86400,B=90,j=t.ApiListenerError=v("ApiListenerError");t.event=function(e){var t;switch(e.eventType){case"click":t=r(e);break;case"decision":t=a(e);break;case"pageview":t=o(e);break;case"custom":default:t=i(e)}P.getBucketingId()?t():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(e){U&&(S.dispatch(u.SET_CLIENT_NAME,e.clientName),S.dispatch(u.SET_CLIENT_VERSION,e.clientVersion)),F&&e.forceVariationIds&&S.dispatch(u.LOAD_DIRECTIVE,{forceVariationIds:e.forceVariationIds})},t.priorRedirectString=function(e){U&&D.load(e.value)},t.microsnippetError=function(e){if(U){var t=e.errorData.metadata&&e.errorData.metadata.err||{};t.name=e.errorData.code;var n={engine:e.engine,msVersion:e.errorData.msVersion,requestId:e.errorData.requestId,projectId:e.errorData.projectId,snippetKey:e.errorData.snippetKey,args:e.errorData.args};E.handleError(t,n)}},t.rum=function(e){S.dispatch(u.SET_RUM_DATA,e.eventData)},t.initialViewStates=function(e){var t=s.map(e.states,(function(e,t){return{id:t,isActive:e}}));R.registerViews(t)},t.page=function(e){var t=L.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?R.activateViaAPI(t,e.tags):(R.deactivate(t),b.log("API / Deactivated Page",R.description(t)))};P.getBucketingId()?i():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){R.setGlobalTags(e.tags)},t.user=function(e){U&&e.visitorId&&(P.getBucketingId()?(b.log("API / Setting visitor Id:",e.visitorId),N.setId({randomId:e.visitorId})):(b.log("API / Setting visitor Id for activation:",e.visitorId),S.dispatch(u.SET_VISITOR_ID_VIA_API,e.visitorId))),F&&s.each(["IP","location","queryParams","url"],(function(t){e[t]&&(b.log("API / Setting",t,":",e[t]),z(t,e[t],!1))})),b.log("API / Setting visitor custom attributes:",e.attributes),s.each(e.attributes,(function(e,t){var n,i,r=t,a=O.getById(t)||O.getByApiName(t);a&&(r=a.id,n=a.apiName,i=a.segmentId||a.id);var o={id:i,value:e};n&&(o.name=n),z(r,o,!0)}))};var z=function(e,t,n){var i=[{key:n?["custom",e]:[e],value:t,metadata:{lastModified:_.now()}}],r=function(){S.dispatch(u.SET_VISITOR_ATTRIBUTES,{attributes:i})};P.getBucketingId()?r():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postVisitorProfileLoad,cleanupFn:r})};t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;m.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<B&&(b.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",B,", setting to minimum."),t=B),b.log("API / Setting cookie age to",t,"days."),S.dispatch(u.SET_COOKIE_AGE,t*G)},t.extendCookieLifetime=function(e){e=s.extend({isEnabled:!0},e),b.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),S.dispatch(u.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){b.log("API / Setting cookie domain to",e.cookieDomain),S.dispatch(u.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);b.log("API / Disabling tracking"),S.dispatch(u.LOAD_DIRECTIVE,{trackingDisabled:!0})}else b.log("API / Disabling everything"),S.dispatch(u.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;s.isUndefined(t)&&(t="INFO"),s.isUndefined(n)&&(n=""),b.setLogMatcher(n),b.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(l[t]||c.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');w.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;h.makeAsyncRequest(t),h.resolveRequest(t,e.data)},t.addListener=function(e){if(!s.isFunction(e.handler))throw new Error("A handler function must be supplied");e=s.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new j(e)}},I.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");I.off(e.token)},t.load=function(e){e.data=s.extend({},e.data),d.normalizeClientData(e.data),S.dispatch(u.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");S.dispatch(u.SET_INTEGRATION_SETTINGS,s.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&s.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,i=e.campaignId;if(i){if(t=k.get(i),!t)throw new Error("Could not find layer "+i)}else if(t=k.getLayerByExperimentId(e.experimentId),i=t.id,!i)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=s.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+i);var r=e.variationId;if(s.isUndefined(e.variationIndex)){if(!s.find(n.variations,{id:r}))throw new Error("Cound not find variation "+r+" in experiment "+e.experimentId)}else if(r=n.variations[e.variationIndex].id,!r)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);N.updateVariationIdMap(i,e.experimentId,r),P.getBucketingId()&&N.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!s.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+T.stringify(e.canonicalOrigins));s.each(e.canonicalOrigins,(function(e){if(!s.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e.canonicalOrigins})},t.disableCrossOrigin=function(){b.log("API / cross origin tracking is DISABLED"),S.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){V.shouldActivate()?(s.forEach(x.getActiveViewStates(),(function(e){R.deactivate(L.get(e.id))})),S.dispatch(u.RESET_VIEW_STATES),g.emitActivateEvent()):b.debug("Not activating.")},t.sendEvents=function(){g.emitSendEvents()},t.holdEvents=function(){g.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=P.description(t),i=$.isExpectingRedirect(),r=$.getLayerId();if(i&&r===t.id){var a=G.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,m(a,[G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,m(a,[G.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r,a){var o=P.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t,n){var i=f({activeViewStates:Y.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),r=n&&n.pageId?g(n):Y.getActiveViewTags(),a=y.extend({},r,t),o=n&&n.category?n.category:N.OTHER;return y.extend(i,{eventEntityId:n&&n.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:Y.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:Y.getActiveViewStates(),visitorProfile:Q.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e.apiName,r=e.category||N.OTHER,a=e.id,o=g(e);return y.extend(t,{eventApiName:i,eventCategory:r,eventEntityId:a,eventTags:o,pageId:e.pageId,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:Q.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return y.extend(e,{eventTags:{}})}function c(e,t,n,i){var r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=F.getReferrer()||D.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:ee.getRandomId(),decisionId:e,activationId:z.getActivationId(),namespace:z.getNamespace(),timestamp:A.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:z.getAccountId(),projectId:z.getProjectId(),revision:String(z.getRevision()),clientName:j.getClientName(),clientVersion:j.getClientVersion(),referrer:c,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:y.isNull(e.clientName)?b.NAME:e.clientName,integrationStringVersion:y.isNull(e.integrationStringVersion)?1:e.integrationStringVersion,anonymizeIP:y.isNull(z.getAnonymizeIP())?void 0:z.getAnonymizeIP(),activationId:z.getActivationId(),decisionTicketAudienceIds:[],sessionId:H.getSessionId(),activeViewStates:[],userFeatures:h(n),layerStates:q.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:A.now(),revision:z.getRevision(),clientName:j.getClientName(),clientVersion:j.getClientVersion(),projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:H.getSessionId(),visitorId:ee.getRandomId(),decision:t,decisionTicket:n,userFeatures:h(i),layerStates:q.getLayerStatesForAnalytics()}}function f(e){var t=F.getReferrer()||D.getReferrer(),n={eventId:B.generate(),timestamp:A.now(),revision:z.getRevision(),clientName:j.getClientName(),clientVersion:j.getClientVersion(),projectId:z.getProjectId(),accountId:z.getAccountId(),activationId:z.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:z.isGlobalHoldback(),namespace:z.getNamespace(),referrer:t,visitorId:ee.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return n}function p(e){var t=Y.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function g(e){var t={};return e.pageId?p(e.pageId):t}function h(e){var t=K.getAllPlugins(R.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=_(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function _(e,t){var n=[];return y.each(K.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function m(e,t,n){var i=E(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function E(e,t){var n=[];return y.each(K.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(7),S=n(104),T=n(72),A=n(24),b=n(32),w=n(16),D=n(81),R=n(25),N=n(74),C=n(103),O=n(109),x=n(110),L=n(9),P=n(111),k=n(23),V=(n(84),n(12).Promise),F=n(95),M=n(112),U=n(114),G=n(113),B=n(5),j=w.get("stores/client_metadata"),z=w.get("stores/global"),H=w.get("stores/session"),Y=w.get("stores/view"),K=w.get("stores/plugins"),q=w.get("stores/layer"),W=w.get("stores/layer_data"),X=w.get("stores/observed_redirect"),$=w.get("stores/pending_redirect"),Q=w.get("stores/visitor"),J=w.get("stores/directive"),Z=w.get("stores/event_data"),ee=w.get("stores/visitor_id"),te="COOKIE",ne=!1,ie=1e3;t.trackClientActivation=function(){if(J.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t,n){t=t||{},n||(n=Z.getByApiName(e));var i=a(e,t,n),r={name:e,type:x.CUSTOM,category:i.eventCategory,tags:y.omit(i.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:n?n.name||n.apiName:e,apiName:n?n.apiName:void 0,type:x.CUSTOM,tags:y.omit(i.eventTags,"revenue"),category:i.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return T.addEvent(r),v("onCustomEvent",i),i},t.trackDecisionEvent=function(e,t,n){n||(n=W.get(e.layerId));var a=B.generate();L.dispatch(I.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(te){o=c(a,e,t,n);var s=$.isExpectingRedirect(),u=$.getLayerId();if(s&&u===n.id){M.persist(o,te);var d=P.description(n);k.log("Relaying decision for redirect Campaign",d,P.description(n))}}if(!J.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",P.description(n));var f=Q.getVisitorProfile();if(te){var p=l(o,e.isLayerHoldback,f);i(p,n),r(a,e,t,f,!0,n)}else r(a,e,t,f,!1,n)},t.trackPostRedirectDecisionEvent=function(){if(!J.shouldSendTrackingData())return V.resolve();if(X.hasTracked())return V.resolve();var e=X.get();if(!e)return V.resolve();var t=Q.getVisitorProfile(),n=l(e,!1,t),i=G.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,m(i,[G.PostRedirectPolicies.TRACK_IMMEDIATELY],n),ne){var r=new V(function(e,t){var n=C.on({filter:{type:O.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),C.off(n)}})}),a=U.makeTimeoutPromise(ie);return V.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=Q.getVisitorProfile(),n=l(e,!1,t),n.timing=G.TrackLayerDecisionTimingFlags.postRedirectPolicy,m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA),V.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return T.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e,t){if(t||(t=Y.getViewState(e.id)),!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData()?(T.addEvent(i),L.dispatch(I.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),u=o.get("stores/global"),c=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:a.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"},t.createSingle=function(e,t,n){var i={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t,variations:[{id:n,actions:[]}]}]};return i},t.createLayerState=function(e,t,n){var i={layerId:e,decision:{layerId:e,experimentId:t,variationId:n,isLayerHoldback:!1},decisionTicket:{audienceIds:[]}};return i},t.getIntegrationTypes=function(e){return i.keys(i.reduce(i.keys(e.integrationSettings),(function(e,t){return i.isNaN(Number(t))||(t="custom"),e[t]=1,e}),{}))}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return _.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}_.debug("Relay / Setting redirect relay cookie:",t);try{f.set(h.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){_.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e)return _.log("Relay / Found redirect cookie:",e),e}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void _.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void _.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return _.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){_.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){_.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;v.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),v.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(76),p=n(104),g=n(16),h=n(25),v=n(9),_=n(23),m=n(113),E=g.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",
relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],S={},T={};l.forEach(I,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===m.RedirectRelayMedia.COOKIE?i(e):_.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(e){if(e||(e=a()),e){var t=o(e);if(t){var n=[];return l.forEach(I,(function(e){(l.isNull(t[e.name])||l.isUndefined(t[e.name]))&&(e.isNullable?t[e.name]=null:(delete t[e.name],n.push(e.name)))})),n.length?void _.error("Relay / Observed redirect data with missing fields:",n):(v.dispatch(d.LOAD_REDIRECT_DATA,t),v.dispatch(d.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(t)}}),t)}}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(103),u=n(109),c=n(92),l=n(94);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};c.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:u.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};c.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:C.isMutationObserverAPISupported()})}function a(){var e=C.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),t=R.getQueryParamValue(O.OPT_OUT),n="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.",r="true"===t||"false"===t;if(r){var a="true"===t;b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:a}),C.alert(a?n:i)}else e&&b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e})}function s(){var e=!1,t=[O.AB_PREVIEW,O.DISABLE];t.push(O.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function u(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(O.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=C.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(O.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function g(){var e=S.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(O.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function _(){var e=R.getQueryParamValue(O.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function m(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),y=n(7),I=n(104),S=n(76),T=n(77).create,A=n(25),b=n(9),w=n(23),D=t.JSONParseError=T("JSONParseError"),R=n(117),N=n(26),C=n(41),O={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){m(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),g(),h(),v(),_()};var x=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*x},!0)):S.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(118),r=n(41);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(41);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1]},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){function i(e){return e&&e.engine?e.engine:v?"edge-tracking":h?"edge-helper":f.getClientName()}var r=n(2),a=n(77).BaseError,o=n(24),s=n(16),u=n(81),c=n(23),l=n(41),d=n(87),f=s.get("stores/client_metadata"),p=s.get("stores/global"),g="https://errors.client.optimizely.com",h=!1,v=!1;t.handleError=function(e,t){function n(){return d.request({url:g+"/log",method:"POST",data:_,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",h=e.message||"",v=e.stack||null;e instanceof a&&(h instanceof Error?(h=h.message,v=e.message.stack):v=null);var _={timestamp:o.now(),clientEngine:i(t),clientVersion:f.getClientVersion(),accountId:p.getAccountId(),projectId:p.getProjectId(),errorClass:s,message:h,stacktrace:v},m=r.map(p.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&r.forEach(t,(function(e,t){r.isObject(e)||m.push({key:t,value:String(e)})}),[]),r.isEmpty(m)||(_.metadata=m),c.error("Logging error",_),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){var i=n(2);t.create=function(e,t,n,r){var a=i.extend({category:"other"},r,{id:e,apiName:t,eventType:n});return a}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(103),u=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=v.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(115),s=n(123),u=n(24),c=n(16),l=n(25),d=n(110),f=n(9),p=n(23),g=n(124),h=c.get("stores/event_data"),v=c.get("stores/plugins"),_=c.get("stores/rum"),m=c.get("stores/view"),E=c.get("stores/view_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=m.getActiveViewStates();r.each(e,(function(e){var n=E.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(v.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=E.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var s=[];r.each(e,(function(e){var u,c=m.getViewState(e.id),d=t.createViewTicket();if(c.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,d)||t.deactivate(e)}catch(n){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(u=t.hasValidStaticConditions(e,d),!u)return r.isBoolean(c.isActive)||t.setViewActiveState(e,!1),void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){return r.isBoolean(c.isActive)||t.setViewActiveState(e,!1),void p.error("Page / Error evaluating whether to activate page ",t.description(e),n)}if(s.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n}),_.getSampleRum()){var g=e.activationType||l.ViewActivationTypes.immediate;f.dispatch(a.RECORD_ACTIVATION_TYPE_USAGE,{activationType:g,entityId:e.id})}var v=h.getByPageId(e.id);i(v,!0)}})),r.isEmpty(s)||o.emitViewsActivated({views:s})},t.deactivate=function(e){var n=m.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=h.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){var n={};if(r.isEmpty(e.staticConditions))return!0;var i=v.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var o=s.evaluate(e.staticConditions,(function(e){var r=e.type,a=i[r];if(!a)throw new Error("Page / No matcher found for type="+r);return a&&(n[e.type]||(n[e.type]=!0)),a.match(t,e)}));return p.groupEnd(),_.getSampleRum()&&o&&f.dispatch(a.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:r.keys(n),entityId:e.id}),o},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.isActivationTypeImmediate=function(e){return e===l.ViewActivationTypes.immediate||!e},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e},t.create=function(e,t){var n={id:e,apiName:t,category:"other"};return n},t.createState=function(e){var t={id:e,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}};return t}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),c.groupCollapsed('Condition / Applying operator "'+i+'" with args',u.stringify(r));try{n=d[i](r,t),c.debug("Condition / Result:",n)}finally{c.groupEnd()}return n}return n=t(e),c.debug("Condition / Evaluated:",u.stringify(e),":",n),n}var s=n(2),u=n(26),c=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(125),t.Error=n(126).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(77).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(129))}),(function(e,t,n){n(41);e.exports=n(130)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-23T17:34Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=q.type(e);return"function"!==n&&!q.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(q.isFunction(t))return q.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return q.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(te.test(t))return q.filter(t,e,n);t=q.filter(t,e)}return q.grep(e,(function(e){return q.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=ce[e]={};return q.each(e.match(ue)||[],(function(e,n){t[n]=!0})),t}function l(){ie.addEventListener?(ie.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(ie.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(ie.addEventListener||"load"===event.type||"complete"===ie.readyState)&&(l(),q.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(ge,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:pe.test(n)?q.parseJSON(n):n)}catch(e){}q.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!q.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function g(e,t,n,i){if(q.acceptData(e)){var r,a,o=q.expando,s=e.nodeType,u=s?q.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=F.pop()||q.guid++:o),u[c]||(u[c]=s?{}:{toJSON:q.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=q.extend(u[c],t):u[c].data=q.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[q.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[q.camelCase(t)])):r=a,r}}function h(e,t,n){if(q.acceptData(e)){var i,r,a=e.nodeType,o=a?q.cache:e,s=a?e[q.expando]:q.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){q.isArray(t)?t=t.concat(q.map(t,q.camelCase)):t in i?t=[t]:(t=q.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!q.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?q.cleanData([e],!0):Y.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function _(){return!1}function m(){try{return ie.activeElement}catch(e){}}function E(e){var t=be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==fe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==fe?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||q.nodeName(i,t)?a.push(i):q.merge(a,y(i,t));return void 0===t||t&&q.nodeName(e,t)?q.merge([e],a):a}function I(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function S(e,t){return q.nodeName(e,"table")&&q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function T(e){return e.type=(null!==q.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Ve.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)q._data(n,"globalEval",!t||q._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&q.hasData(e)){var n,i,r,a=q._data(e),o=q._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)q.event.add(t,n,s[n][i])}o.data&&(o.data=q.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!Y.noCloneEvent&&t[q.expando]){r=q._data(t);for(i in r.events)q.removeEvent(t,i,r.handle);t.removeAttribute(q.expando)}"script"===n&&t.text!==e.text?(T(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),Y.html5Clone&&e.innerHTML&&!q.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=q(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:q.css(r[0],"display");return r.detach(),a}function N(e){var t=ie,n=He[e];return n||(n=R(e,t),"none"!==n&&n||(Be=(Be||q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Be[0].contentWindow||Be[0].contentDocument).document,t.write(),t.close(),n=R(e,t),Be.detach()),He[e]=n),n}function C(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=tt.length;r--;)if(t=tt[r]+n,t in e)return t;return i}function x(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=q._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&_e(i)&&(a[o]=q._data(i,"olddisplay",N(i.nodeName)))):(r=_e(i),(n&&"none"!==n||!r)&&q._data(i,"olddisplay",r?n:q.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function L(e,t,n){var i=Qe.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function P(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=q.css(e,n+ve[a],!0,r)),i?("content"===n&&(o-=q.css(e,"padding"+ve[a],!0,r)),"margin"!==n&&(o-=q.css(e,"border"+ve[a]+"Width",!0,r))):(o+=q.css(e,"padding"+ve[a],!0,r),"padding"!==n&&(o+=q.css(e,"border"+ve[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=je(e),o=Y.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=ze(e,t,a),(r<0||null==r)&&(r=e.style[t]),Ke.test(r))return r;i=o&&(Y.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(o?"border":"content"),i,a)+"px"}function V(e,t,n,i){var r;if(q.isArray(t))q.each(t,(function(t,r){n||pt.test(e)?i(e,r):V(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==q.type(t))i(e,t);else for(r in t)V(e+"["+r+"]",t[r],n,i)}var F=[],M=F.slice,U=F.concat,G=F.push,B=F.indexOf,j={},z=j.toString,H=j.hasOwnProperty,Y={},K="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",q=function(e,t){return new q.fn.init(e,t)},W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,X=/^-ms-/,$=/-([\da-z])/gi,Q=function(e,t){return t.toUpperCase()};q.fn=q.prototype={jquery:K,constructor:q,selector:"",length:0,toArray:function(){return M.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:M.call(this)},pushStack:function(e){var t=q.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return q.each(this,e,t)},map:function(e){return this.pushStack(q.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(M.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:G,sort:F.sort,splice:F.splice},q.extend=q.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||q.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(q.isPlainObject(n)||(t=q.isArray(n)))?(t?(t=!1,a=e&&q.isArray(e)?e:[]):a=e&&q.isPlainObject(e)?e:{},o[i]=q.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},q.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===q.type(e)},isArray:Array.isArray||function(e){return"array"===q.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!q.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==q.type(e)||e.nodeType||q.isWindow(e))return!1;try{if(e.constructor&&!H.call(e,"constructor")&&!H.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(Y.ownLast)for(t in e)return H.call(e,t);for(t in e);return void 0===t||H.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?j[z.call(e)]||"object":typeof e},globalEval:function(e){e&&q.trim(e)&&(n.execScript||function(e){n["eval"].call(n,e)})(e)},camelCase:function(e){return e.replace(X,"ms-").replace($,Q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(W,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?q.merge(n,"string"==typeof e?[e]:e):G.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(B)return B.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return U.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),q.isFunction(e))return n=M.call(arguments,2),i=function(){return e.apply(t||this,n.concat(M.call(arguments)))},i.guid=e.guid=e.guid||q.guid++,i},now:function(){return+new Date},support:Y}),q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){j["[object "+t+"]"]=t.toLowerCase()}));var J=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,g,h;if((t?t.ownerDocument||t:G)!==x&&O(t),t=t||x,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&P){if(11!==s&&(r=me.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,g=t,h=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);g=Ee.test(e)&&l(t.parentNode)||t,h=c.join(",")}if(h)try{return J.apply(n,g.querySelectorAll(h)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=x.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)S.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||q)-(~e.sourceIndex||q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=j++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[B,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===B&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function g(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function h(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function _(e,t,n,r,a,o){return r&&!r[U]&&(r=_(r)),a&&!a[U]&&(a=_(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],g=o.length,_=i||h(t||"*",s.nodeType?[s]:s,[]),m=!e||!i&&t?_:v(_,f,e,s,u),E=n?a||(i?e:g||r)?[]:o:m;if(n&&n(m,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(m[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(m[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(g,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function m(e){for(var t,n,i,r=e.length,a=S.relative[e[0].type],o=a||S.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=S.relative[e[s].type])l=[p(g(l),n)];else{if(n=S.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!S.relative[e[i].type];i++);return _(s>1&&g(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&m(e.slice(s,i)),i<r&&m(e=e.slice(i)),i<r&&f(e))}l.push(n)}return g(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,g="0",h=i&&[],_=[],m=R,E=i||a&&S.find["TAG"]("*",c),y=B+=null==m?1:Math.random()||.1,I=E.length;for(c&&(R=o!==x&&o);g!==I&&null!=(l=E[g]);g++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(B=y)}r&&((l=!f&&l)&&p--,i&&h.push(l))}if(p+=g,r&&g!==p){for(d=0;f=n[d++];)f(h,_,o,s);if(i){if(p>0)for(;g--;)h[g]||_[g]||(_[g]=$.call(u));_=v(_)}J.apply(u,_),c&&!i&&_.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(B=y,R=m),h};return r?i(o):o}var y,I,S,T,A,b,w,D,R,N,C,O,x,L,P,k,V,F,M,U="sizzle"+1*new Date,G=e.document,B=0,j=0,z=n(),H=n(),Y=n(),K=function(e,t){return e===t&&(C=!0),0},q=1<<31,W={}.hasOwnProperty,X=[],$=X.pop,Q=X.push,J=X.push,Z=X.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),ge={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,_e=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Se=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Te=function(){O()};try{J.apply(X=Z.call(G.childNodes),G.childNodes),X[G.childNodes.length].nodeType}catch(e){J={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:G;return i!==x&&9===i.nodeType&&i.documentElement?(x=i,L=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),P=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=_e.test(i.getElementsByClassName),I.getById=r((function(e){return L.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(S.find["ID"]=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){return e.getAttribute("id")===t}}):(delete S.find["ID"],S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),S.find["TAG"]=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},S.find["CLASS"]=I.getElementsByClassName&&function(e,t){if(P)return t.getElementsByClassName(e)},V=[],k=[],(I.qsa=_e.test(i.querySelectorAll))&&(r((function(e){L.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=_e.test(F=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&r((function(e){I.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),V.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),V=V.length&&new RegExp(V.join("|")),t=_e.test(L.compareDocumentPosition),M=t||_e.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},K=t?function(e,t){if(e===t)return C=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===G&&M(G,e)?-1:t===i||t.ownerDocument===G&&M(G,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return C=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:N?ee(N,e)-ee(N,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===G?-1:c[r]===G?1:0},i):x},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==x&&O(e),n=n.replace(de,"='$1']"),I.matchesSelector&&P&&(!V||!V.test(n))&&(!k||!k.test(n)))try{var i=F.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,x,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==x&&O(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==x&&O(e);var n=S.attrHandle[t.toLowerCase()],i=n&&W.call(S.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==i?i:I.attributes||!P?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(C=!I.detectDuplicates,N=!I.sortStable&&e.slice(0),e.sort(K),C){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return N=null,e},T=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},S=t.selectors={cacheLength:50,createPseudo:i,match:ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Se),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Se),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ge["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Se).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,g,h=a!==o?"nextSibling":"previousSibling",v=t.parentNode,_=s&&t.nodeName.toLowerCase(),m=!u&&!s;if(v){if(a){for(;h;){for(d=t;d=d[h];)if(s?d.nodeName.toLowerCase()===_:1===d.nodeType)return!1;g=h="only"===e&&!g&&"nextSibling"}return!0}if(g=[o?v.firstChild:v.lastChild],o&&m){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===B&&c[1],f=c[0]===B&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[h]||(f=p=0)||g.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[B,p,f];break}}else if(m&&(c=(t[U]||(t[U]={}))[e])&&c[0]===B)f=c[1];else for(;(d=++p&&d&&d[h]||(f=p=0)||g.pop())&&((s?d.nodeName.toLowerCase()!==_:1!==d.nodeType)||!++f||(m&&((d[U]||(d[U]={}))[e]=[B,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Se),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Se).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===x.activeElement&&(!x.hasFocus||x.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!S.pseudos["empty"](e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},S.pseudos["nth"]=S.pseudos["eq"];for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})S.pseudos[y]=u(y);return d.prototype=S.filters=S.pseudos,S.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=H[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=S.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in S.filter)!(r=ge[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=Y[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=m(t[n]),a[U]?i.push(a):r.push(a);a=Y(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&P&&S.relative[a[1].type]){if(t=(S.find["ID"](o.matches[0].replace(Ie,Se),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=ge["needsContext"].test(e)?0:a.length;r--&&(o=a[r],!S.relative[s=o.type]);)if((u=S.find[s])&&(i=u(o.matches[0].replace(Ie,Se),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!P,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(K).join("")===U,I.detectDuplicates=!!C,O(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(x.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);q.find=J,q.expr=J.selectors,q.expr[":"]=q.expr.pseudos,q.unique=J.uniqueSort,q.text=J.getText,q.isXMLDoc=J.isXML,q.contains=J.contains;var Z=q.expr.match.needsContext,ee=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,te=/^.[^:#\[\.,]*$/;q.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?q.find.matchesSelector(i,e)?[i]:[]:q.find.matches(e,q.grep(t,(function(e){return 1===e.nodeType})))},q.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(q(e).filter((function(){for(t=0;t<r;t++)if(q.contains(i[t],this))return!0})));for(t=0;t<r;t++)q.find(e,i[t],n);return n=this.pushStack(r>1?q.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Z.test(e)?q(e):e||[],!1).length}});var ne,ie=n.document,re=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ae=q.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:re.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ne).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof q?t[0]:t,q.merge(this,q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),ee.test(n[1])&&q.isPlainObject(t))for(n in t)q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=ie.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return ne.find(e);this.length=1,this[0]=i}return this.context=ie,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):q.isFunction(e)?"undefined"!=typeof ne.ready?ne.ready(e):e(q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),q.makeArray(e,this))};ae.prototype=q.fn,ne=q(ie);var oe=/^(?:parents|prev(?:Until|All))/,se={children:!0,contents:!0,next:!0,prev:!0};q.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!q(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),q.fn.extend({has:function(e){var t,n=q(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(q.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=Z.test(e)||"string"!=typeof e?q(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&q.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?q.unique(a):a)},index:function(e){return e?"string"==typeof e?q.inArray(this[0],q(e)):q.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(q.unique(q.merge(this.get(),q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return q.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return q.dir(e,"nextSibling")},prevAll:function(e){return q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return q.dir(e,"previousSibling",n)},siblings:function(e){return q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return q.sibling(e.firstChild)},contents:function(e){return q.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:q.merge([],e.childNodes)}},(function(e,t){q.fn[e]=function(n,i){var r=q.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=q.filter(i,r)),this.length>1&&(se[e]||(r=q.unique(r)),oe.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var ue=/\S+/g,ce={};q.Callbacks=function(e){e="string"==typeof e?ce[e]||c(e):q.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){q.each(n,(function(n,i){var r=q.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&q.each(arguments,(function(e,n){for(var i;(i=q.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?q.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},q.extend({Deferred:function(e){var t=[["resolve","done",q.Callbacks("once memory"),"resolved"],["reject","fail",q.Callbacks("once memory"),"rejected"],["notify","progress",q.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return q.Deferred((function(n){q.each(t,(function(t,a){var o=q.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?q.extend(e,i):i}},r={};return i.pipe=i.then,q.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=M.call(arguments),o=a.length,s=1!==o||e&&q.isFunction(e.promise)?o:0,u=1===s?e:q.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?M.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&q.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var le;q.fn.ready=function(e){return q.ready.promise().done(e),this},q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?q.readyWait++:q.ready(!0)},ready:function(e){if(e===!0?!--q.readyWait:!q.isReady){if(!ie.body)return setTimeout(q.ready);q.isReady=!0,e!==!0&&--q.readyWait>0||(le.resolveWith(ie,[q]),q.fn.triggerHandler&&(q(ie).triggerHandler("ready"),q(ie).off("ready")))}}}),q.ready.promise=function(e){if(!le)if(le=q.Deferred(),"complete"===ie.readyState)setTimeout(q.ready);else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{ie.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&ie.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!q.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),q.ready()}})()}return le.promise(e)};var de,fe="undefined";for(de in q(Y))break;Y.ownLast="0"!==de,Y.inlineBlockNeedsLayout=!1,q((function(){var e,t,n,i;n=ie.getElementsByTagName("body")[0],n&&n.style&&(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==fe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",Y.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=ie.createElement("div");if(null==Y.deleteExpando){Y.deleteExpando=!0;try{delete e.test}catch(e){Y.deleteExpando=!1}}e=null})(),q.acceptData=function(e){var t=q.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var pe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ge=/([A-Z])/g;q.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?q.cache[e[q.expando]]:e[q.expando],!!e&&!p(e)},data:function(e,t,n){return g(e,t,n)},removeData:function(e,t){return h(e,t)},_data:function(e,t,n){return g(e,t,n,!0)},_removeData:function(e,t){return h(e,t,!0)}}),q.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=q.data(a),1===a.nodeType&&!q._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=q.camelCase(i.slice(5)),f(a,i,r[i])));q._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){q.data(this,e)})):arguments.length>1?this.each((function(){q.data(this,e,t)})):a?f(a,e,q.data(a,e)):void 0},removeData:function(e){return this.each((function(){q.removeData(this,e)}))}}),q.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=q._data(e,t),n&&(!i||q.isArray(n)?i=q._data(e,t,q.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=q.queue(e,t),i=n.length,r=n.shift(),a=q._queueHooks(e,t),o=function(){q.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q._data(e,n)||q._data(e,n,{empty:q.Callbacks("once memory").add((function(){q._removeData(e,t+"queue"),q._removeData(e,n)}))})}}),q.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?q.queue(this[0],e):void 0===t?this:this.each((function(){var n=q.queue(this,e,t);q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&q.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){q.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=q.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=q._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ve=["Top","Right","Bottom","Left"],_e=function(e,t){return e=t||e,"none"===q.css(e,"display")||!q.contains(e.ownerDocument,e)},me=q.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===q.type(n)){r=!0;for(s in n)q.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,q.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(q(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Ee=/^(?:checkbox|radio)$/i;!(function(){var e=ie.createElement("input"),t=ie.createElement("div"),n=ie.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",Y.leadingWhitespace=3===t.firstChild.nodeType,Y.tbody=!t.getElementsByTagName("tbody").length,Y.htmlSerialize=!!t.getElementsByTagName("link").length,Y.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),Y.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,Y.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){Y.noCloneEvent=!1})),t.cloneNode(!0).click()),null==Y.deleteExpando){Y.deleteExpando=!0;try{delete t.test}catch(e){Y.deleteExpando=!1}}})(),(function(){var e,t,i=ie.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(Y[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),Y[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ye=/^(?:input|select|textarea)$/i,Ie=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,Te=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;q.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=q._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=q.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof q===fe||e&&q.event.triggered===e.type?void 0:q.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(ue)||[""],s=t.length;s--;)a=Ae.exec(t[s])||[],p=h=a[1],g=(a[2]||"").split(".").sort(),p&&(c=q.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=q.event.special[p]||{},d=q.extend({type:p,origType:h,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&q.expr.match.needsContext.test(r),namespace:g.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,g,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),q.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=q.hasData(e)&&q._data(e);if(v&&(l=v.events)){for(t=(t||"").match(ue)||[""],c=t.length;c--;)if(s=Ae.exec(t[c])||[],p=h=s[1],g=(s[2]||"").split(".").sort(),p){for(d=q.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&h!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),
o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,g,v.handle)!==!1||q.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)q.event.remove(e,p+t[c],n,i,!0);q.isEmptyObject(l)&&(delete v.handle,q._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=H.call(e,"type")?e.type:e,g=H.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Te.test(p+q.event.triggered)&&(p.indexOf(".")>=0&&(g=p.split("."),p=g.shift(),g.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[q.expando]?e:new q.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:q.makeArray(t,[e]),c=q.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!q.isWindow(i)){for(u=c.delegateType||p,Te.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(q._data(s,"events")||{})[e.type]&&q._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&q.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&q.acceptData(i)&&o&&i[p]&&!q.isWindow(i)){l=i[o],l&&(i[o]=null),q.event.triggered=p;try{i[p]()}catch(e){}q.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=q.event.fix(e);var t,n,i,r,a,o=[],s=M.call(arguments),u=(q._data(this,"events")||{})[e.type]||[],c=q.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=q.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((q.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?q(n,this).index(u)>=0:q.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[q.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Se.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new q.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==m()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===m()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(q.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=q.extend(new q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?q.event.trigger(r,null,t):q.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},q.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===fe&&(e[i]=null),e.detachEvent(i,n))},q.Event=function(e,t){return this instanceof q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:_):this.type=e,t&&q.extend(this,t),this.timeStamp=e&&e.timeStamp||q.now(),void(this[q.expando]=!0)):new q.Event(e,t)},q.Event.prototype={isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||q.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),Y.submitBubbles||(q.event.special.submit={setup:function(){return!q.nodeName(this,"form")&&void q.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=q.nodeName(t,"input")||q.nodeName(t,"button")?t.form:void 0;n&&!q._data(n,"submitBubbles")&&(q.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),q._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&q.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!q.nodeName(this,"form")&&void q.event.remove(this,"._submit")}}),Y.changeBubbles||(q.event.special.change={setup:function(){return ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(q.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),q.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),q.event.simulate("change",this,e,!0)}))),!1):void q.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ye.test(t.nodeName)&&!q._data(t,"changeBubbles")&&(q.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||q.event.simulate("change",this.parentNode,e,!0)})),q._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return q.event.remove(this,"._change"),!ye.test(this.nodeName)}}),Y.focusinBubbles||q.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){q.event.simulate(t,e.target,q.event.fix(e),!0)};q.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=q._data(i,t);r||i.addEventListener(e,n,!0),q._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=q._data(i,t)-1;r?q._data(i,t,r):(i.removeEventListener(e,n,!0),q._removeData(i,t))}}})),q.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=_;else if(!i)return this;return 1===r&&(o=i,i=function(e){return q().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=q.guid++)),this.each((function(){q.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,q(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=_),this.each((function(){q.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){q.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return q.event.trigger(e,t,n,!0)}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",we=/ jQuery\d+="(?:null|\d+)"/g,De=new RegExp("<(?:"+be+")[\\s/>]","i"),Re=/^\s+/,Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ce=/<([\w:]+)/,Oe=/<tbody/i,xe=/<|&#?\w+;/,Le=/<(?:script|style|link)/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^$|\/(?:java|ecma)script/i,Ve=/^true\/(.*)/,Fe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:Y.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ue=E(ie),Ge=Ue.appendChild(ie.createElement("div"));Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,q.extend({clone:function(e,t,n){var i,r,a,o,s,u=q.contains(e.ownerDocument,e);if(Y.html5Clone||q.isXMLDoc(e)||!De.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(Ge.innerHTML=e.outerHTML,Ge.removeChild(a=Ge.firstChild)),!(Y.noCloneEvent&&Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||q.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],g=0;g<d;g++)if(a=e[g],a||0===a)if("object"===q.type(a))q.merge(p,a.nodeType?[a]:a);else if(xe.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(Ce.exec(a)||["",""])[1].toLowerCase(),l=Me[u]||Me._default,s.innerHTML=l[1]+a.replace(Ne,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!Y.leadingWhitespace&&Re.test(a)&&p.push(t.createTextNode(Re.exec(a)[0])),!Y.tbody)for(a="table"!==u||Oe.test(a)?"<table>"!==l[1]||Oe.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)q.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(q.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),Y.appendChecked||q.grep(y(p,"input"),I),g=0;a=p[g++];)if((!i||q.inArray(a,i)===-1)&&(o=q.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)ke.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=q.expando,u=q.cache,c=Y.deleteExpando,l=q.event.special;null!=(n=e[o]);o++)if((t||q.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?q.event.remove(n,i):q.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==fe?n.removeAttribute(s):n[s]=null,F.push(r))}}}),q.fn.extend({text:function(e){return me(this,(function(e){return void 0===e?q.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?q.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||q.cleanData(y(n)),n.parentNode&&(t&&q.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&q.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&q.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return q.clone(this,e,t)}))},html:function(e){return me(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Le.test(e)&&(Y.htmlSerialize||!De.test(e))&&(Y.leadingWhitespace||!Re.test(e))&&!Me[(Ce.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ne,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(q.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,q.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=U.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=q.isFunction(f);if(p||c>1&&"string"==typeof f&&!Y.checkClone&&Pe.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=q.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=q.map(y(s,"script"),T),r=a.length;u<c;u++)i=s,u!==d&&(i=q.clone(i,!0,!0),r&&q.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,q.map(a,A),u=0;u<r;u++)i=a[u],ke.test(i.type||"")&&!q._data(i,"globalEval")&&q.contains(o,i)&&(i.src?q._evalUrl&&q._evalUrl(i.src):q.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Fe,"")));s=n=null}return this}}),q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){q.fn[e]=function(e){for(var n,i=0,r=[],a=q(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),q(a[i])[t](n),G.apply(r,n.get());return this.pushStack(r)}}));var Be,je,ze,He={},Ye=/^margin/,Ke=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),qe=/^(top|right|bottom|left)$/;n.getComputedStyle?(je=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||q.contains(e.ownerDocument,e)||(o=q.style(e,t)),Ke.test(o)&&Ye.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):ie.documentElement.currentStyle&&(je=function(e){return e.currentStyle},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),Ke.test(o)&&!qe.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=ie.getElementsByTagName("body")[0],t&&t.style&&(e=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(ie.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=ie.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",Y.opacity="0.5"===i.opacity,Y.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===t.style.backgroundClip,Y.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,q.extend(Y,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),q.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var We=/alpha\([^)]*\)/i,Xe=/opacity\s*=\s*([^)]*)/,$e=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+he+")(.*)$","i"),Je=new RegExp("^([+-])=("+he+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"},tt=["Webkit","O","Moz","ms"];q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Y.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=q.camelCase(t),u=e.style;if(t=q.cssProps[s]||(q.cssProps[s]=O(u,s)),o=q.cssHooks[t]||q.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=Je.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(q.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||q.cssNumber[s]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=q.camelCase(t);return t=q.cssProps[s]||(q.cssProps[s]=O(e.style,s)),o=q.cssHooks[t]||q.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=ze(e,t,i)),"normal"===a&&t in et&&(a=et[t]),""===n||n?(r=parseFloat(a),n===!0||q.isNumeric(r)?r||0:a):a}}),q.each(["height","width"],(function(e,t){q.cssHooks[t]={get:function(e,n,i){if(n)return $e.test(q.css(e,"display"))&&0===e.offsetWidth?q.swap(e,Ze,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&je(e);return L(e,n,i?P(e,t,i,Y.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,r),r):0)}}})),Y.opacity||(q.cssHooks.opacity={get:function(e,t){return Xe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=q.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===q.trim(a.replace(We,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=We.test(a)?a.replace(We,r):a+" "+r)}}),q.cssHooks.marginRight=C(Y.reliableMarginRight,(function(e,t){if(t)return q.swap(e,{display:"inline-block"},ze,[e,"marginRight"])})),q.each({margin:"",padding:"",border:"Width"},(function(e,t){q.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ve[i]+t]=a[i]||a[i-2]||a[0];return r}},Ye.test(e)||(q.cssHooks[e+t].set=L)})),q.fn.extend({css:function(e,t){return me(this,(function(e,t,n){var i,r,a={},o=0;if(q.isArray(t)){for(i=je(e),r=t.length;o<r;o++)a[t[o]]=q.css(e,t[o],!1,i);return a}return void 0!==n?q.style(e,t,n):q.css(e,t)}),e,t,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){_e(this)?q(this).show():q(this).hide()}))}}),q.fn.delay=function(e,t){return e=q.fx?q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=ie.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=ie.createElement("select"),r=n.appendChild(ie.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",Y.getSetAttribute="t"!==t.className,Y.style=/top/.test(i.getAttribute("style")),Y.hrefNormalized="/a"===i.getAttribute("href"),Y.checkOn=!!e.value,Y.optSelected=r.selected,Y.enctype=!!ie.createElement("form").enctype,n.disabled=!0,Y.optDisabled=!r.disabled,e=ie.createElement("input"),e.setAttribute("value",""),Y.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),Y.radioValue="t"===e.value})();var nt=/\r/g;q.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=q.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,q(this).val()):e,null==r?r="":"number"==typeof r?r+="":q.isArray(r)&&(r=q.map(r,(function(e){return null==e?"":e+""}))),t=q.valHooks[this.type]||q.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=q.valHooks[r.type]||q.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(nt,""):null==n?"":n)}}}),q.extend({valHooks:{option:{get:function(e){var t=q.find.attr(e,"value");return null!=t?t:q.trim(q.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(Y.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!q.nodeName(n.parentNode,"optgroup"))){if(t=q(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=q.makeArray(t),o=r.length;o--;)if(i=r[o],q.inArray(q.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),q.each(["radio","checkbox"],(function(){q.valHooks[this]={set:function(e,t){if(q.isArray(t))return e.checked=q.inArray(q(e).val(),t)>=0}},Y.checkOn||(q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var it,rt,at=q.expr.attrHandle,ot=/^(?:checked|selected)$/i,st=Y.getSetAttribute,ut=Y.input;q.fn.extend({attr:function(e,t){return me(this,q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){q.removeAttr(this,e)}))}}),q.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===fe?q.prop(e,t,n):(1===a&&q.isXMLDoc(e)||(t=t.toLowerCase(),i=q.attrHooks[t]||(q.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=q.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void q.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(ue);if(a&&1===e.nodeType)for(;n=a[r++];)i=q.propFix[n]||n,q.expr.match.bool.test(n)?ut&&st||!ot.test(n)?e[i]=!1:e[q.camelCase("default-"+n)]=e[i]=!1:q.attr(e,n,""),e.removeAttribute(st?n:i)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?q.removeAttr(e,n):ut&&st||!ot.test(n)?e.setAttribute(!st&&q.propFix[n]||n,n):e[q.camelCase("default-"+n)]=e[n]=!0,n}},q.each(q.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=at[t]||q.find.attr;at[t]=ut&&st||!ot.test(t)?function(e,t,i){var r,a;return i||(a=at[t],at[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,at[t]=a),r}:function(e,t,n){if(!n)return e[q.camelCase("default-"+t)]?t.toLowerCase():null}})),ut&&st||(q.attrHooks.value={set:function(e,t,n){return q.nodeName(e,"input")?void(e.defaultValue=t):it&&it.set(e,t,n)}}),st||(it={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},at.id=at.name=at.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},q.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:it.set},q.attrHooks.contenteditable={set:function(e,t,n){it.set(e,""!==t&&t,n)}},q.each(["width","height"],(function(e,t){q.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),Y.style||(q.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var ct=/^(?:input|select|textarea|button|object)$/i,lt=/^(?:a|area)$/i;q.fn.extend({prop:function(e,t){return me(this,q.prop,e,t,arguments.length>1)},removeProp:function(e){return e=q.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),q.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!q.isXMLDoc(e),a&&(t=q.propFix[t]||t,r=q.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=q.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}}}),Y.hrefNormalized||q.each(["href","src"],(function(e,t){q.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),Y.optSelected||(q.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){q.propFix[this.toLowerCase()]=this})),Y.enctype||(q.propFix.enctype="encoding");var dt=/[\t\r\n\f]/g;q.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=q.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?q.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):q.isFunction(e)?this.each((function(n){q(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=q(this),a=e.match(ue)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==fe&&"boolean"!==n||(this.className&&q._data(this,"__className__",this.className),this.className=this.className||e===!1?"":q._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(dt," ").indexOf(t)>=0)return!0;return!1}}),q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),q.fn.extend({wrapAll:function(e){if(q.isFunction(e))return this.each((function(t){q(this).wrapAll(e.call(this,t))}));if(this[0]){var t=q(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return q.isFunction(e)?this.each((function(t){q(this).wrapInner(e.call(this,t))})):this.each((function(){var t=q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=q.isFunction(e);return this.each((function(n){q(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){q.nodeName(this,"body")||q(this).replaceWith(this.childNodes)})).end()}}),q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!Y.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||q.css(e,"display"))},q.expr.filters.visible=function(e){return!q.expr.filters.hidden(e)};var ft=/%20/g,pt=/\[\]$/,gt=/\r?\n/g,ht=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;q.param=function(e,t){var n,i=[],r=function(e,t){t=q.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=q.ajaxSettings&&q.ajaxSettings.traditional),q.isArray(e)||e.jquery&&!q.isPlainObject(e))q.each(e,(function(){r(this.name,this.value)}));else for(n in e)V(n,e[n],t,r);return i.join("&").replace(ft,"+")},q.fn.extend({serialize:function(){return q.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=q.prop(this,"elements");return e?q.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!q(this).is(":disabled")&&vt.test(this.nodeName)&&!ht.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=q(this).val();return null==n?null:q.isArray(n)?q.map(n,(function(e){return{name:t.name,value:e.replace(gt,"\r\n")}})):{name:t.name,value:n.replace(gt,"\r\n")}})).get()}}),q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ee.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=q.buildFragment([e],t,r),r&&r.length&&q(r).remove(),q.merge([],i.childNodes))},i=[],r=function(){return q}.apply(t,i),!(void 0!==r&&(e.exports=r));var _t=n.jQuery,mt=n.$;return q.noConflict=function(e){return n.$===q&&(n.$=mt),e&&n.jQuery===q&&(n.jQuery=_t),q},typeof a===fe&&(n.jQuery=n.$=q),q}))}),(function(e,t,n){var i=n(23),r=n(41),a="optimizelyDataApi";t.registerFunction=function(e,t){var n=r.getGlobal(a);
n||(n={},r.setGlobal(a,n)),n[e]||(n[e]=t)},t.unregisterFunction=function(e){var t=r.getGlobal(a);t&&t[e]&&(t[e]=function(){i.log('Ignoring attempt to call "'+a+"."+e+'" which has been unregistered.')})},t.getFunction=function(e){return r.getGlobal(a)[e]}}),(function(e,t,n){var i=n(81),r=n(23),a=n(87);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var u=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:u})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;D.isNumber(e)&&0===_e.getCount()?(J.log("Activating after delay of",e,"ms because no Experiments are running"),W.dispatch(x.SET_RUM_DATA,{data:{activateDfd:!0}}),ce.setTimeout(P.emitActivateEvent,e)):P.emitActivateEvent()}function r(e){Ne.handleError(e.data.error,e.data.metadata)}function a(){D.isArray(window.optimizely)&&(window.optimizely=D.filter(window.optimizely,(function(e){var t=!0;return!Re.push(e,t)})))}function o(){var e=n(148),i=!!ue.getCurrentId(),r=!!i&&ue.hasSomeData();i?r?J.log("xd / Existing visitor; has data on this origin"):J.log("xd / Existing visitor; new to this origin"):J.log("xd / New visitor");var a=he.getAccountId(),o="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),u="/client_storage/a"+a+".html";e.subscribe((function(e,t){ue.checkKeyForVisitorId(e)&&Q.setItem(e,t)}));var c=e.fetchAll().then((function(t){var n=De.getCanonicalOrigins();if(n){var i=e.getXDomainUserId(t,n);i&&(J.log("Syncing cross-origin visitor randomId:",i),ue.maybePersistVisitorId({randomId:i}))}return ue.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(e){if(ue.loadForeignData(),i&&!r){var t=!D.isEmpty(e);J.debug("xd / Loaded foreign data? ",t),s(t)}J.log("Loaded visitor data from foreign origins"),P.emitOriginsSyncedEvent()}),(function(e){throw i&&!r&&(J.debug("xd / Failed to load foreign data:",e),s(!1,e)),e}));return ie.all([e.load(o,u)["catch"]((function(e){throw J.debug("xd / Failed to load iframe:",e),i&&!r&&s(!1,e),e})),c["catch"]((function(e){J.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",e.message),J.debug("xd / Enqueuing sync to happen after visitorId set."),W.dispatch(x.ADD_CLEANUP_FN,{lifecycle:H.Lifecycle.postVisitorProfileLoad,cleanupFn:P.emitOriginsSyncedEvent})}))])}function s(e,t){W.dispatch(x.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function u(e){var t=Se.getVisitorProfile();return ue.populateEagerVisitorData(e,t)}function c(e,t,n){e=e||[];var i=ye.getAllPlugins(H.PluginTypes.visitorProfileProviders),r=he.getGlobalHoldbackThreshold(),a=Se.getVisitorProfile();ue.populateLazyVisitorData(i,a);var o=be.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=Se.getVisitorProfile();if(t&&!Le){var c=we.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&G.isPageIdRelevant(t)?D.map(n,(function(e){return G.createTicket(D.extend({},l,{pageId:e}))})):[G.createTicket(l)]}function l(e){return{bucketingId:be.getBucketingId(),preferredLayerId:we.getPreferredLayerMap()[e.id]}}function d(e){var n=_e.getAllByPageIds(e),i=ge.getForceVariationIds(),r=ge.getForceAudienceIds(),a=!D.isEmpty(i);a&&J.log("Force variations are in use. Disabling mutual exclusivity.");var o=a?{individual:n}:D.reduce(n,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=ve.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});J.log("Deciding Campaigns/Experiments for Page(s)",e);var s=D.map(o.groups,X.description).join(", ");J.log("Groups:",s);var u=D.map(o.individual,$.description).join(", ");J.log("Campaigns/Experiments not in Groups (by Campaign id):",u);var c=D.map(o.groups,D.partial(f,i,r,e))||[],l=D.map(o.individual,(function(n){var a=D.filter(n.pageIds,D.partial(D.includes,e));return t.decideAndExecuteLayerASAP(i,r,a,n)})),d=c.concat(l);return ie.all(d).then((function(t){var n=D.filter(t,(function(e){return!!e}));return J.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",D.map(n,$.description).join(", ")),n}))}function f(e,n,i,r){try{var a=l(r),o=G.decideGroup(r,a);if(o.reason)return J.debug("Not activating Group",X.description(r),"; reason:",o.reason),Ie.getSampleRum()&&W.dispatch(x.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),ie.resolve();var s=_e.get(o.layerId);if(!s)return J.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),ie.resolve();var u=D.filter(s.pageIds,D.partial(D.includes,i));return D.isEmpty(u)?(J.debug("Not activating Group",X.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),ie.resolve()):(Ie.getSampleRum()&&W.dispatch(x.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),t.decideAndExecuteLayerASAP(e,n,u,s))}catch(e){return J.error("Error getting decision for Group",X.description(r),"; ",e),ie.reject(e)}}function p(e,t,n,i){return new ie(function(r,a){try{m(i,e,t,n,(function(a){D.each(a,(function(r){var a=r.pageId?[r.pageId]:n;J.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){J.error("Error getting decision for Campaign: "+$.description(i),e),a(e)}})}function g(e,n,i,r,a){var o=$.description(e);J.log("Activating Campaign",o,"on Page(s)",r),i.length&&(J.log("Applying force audienceIds:",i,"to Campaign",o),a=D.cloneDeep(a),a.audienceIds=i);var s=t.decideLayer(e,a,n),u=!(!n.length&&!i.length),c=t.getActionsForDecision(e,s,u),l=w(c.actions,r);if(c.maybeExecute&&h(l,e,s,r),D.forEach(r,(function(){L.trackDecisionEvent(s,a)})),P.emitLayerDecided({layer:e,decisionTicket:a,decision:s}),s.error)throw s.error;if(Ie.getSampleRum()){W.dispatch(x.RECORD_LAYER_POLICY_USAGE,{policy:e.policy,layerId:e.id});var d=_(c.actions);W.dispatch(x.RECORD_CHANGE_TYPE_USAGE,{changeTypes:D.keys(d),layerId:e.id}),D.isEmpty(e.integrationSettings)||W.dispatch(x.RECORD_INTEGRATION_USAGE,{integrations:$.getIntegrationTypes(e),layerId:e.id})}return G.isInCohort(s)?void(c.maybeExecute&&v(l,e,s,r)):void J.log("Not activating Campaign: "+$.description(e)+"; not in the cohort because:",s.reason)}function h(e,t,n,i){var r=$.description(t);J.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),D.forEach(e,O.prepareAction)}function v(e,t,n,i){var r=$.description(t);return J.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),ie.all(D.map(e,(function(e){return O.executePreparedAction(e).then(D.partial(P.emitActionAppliedEvent,e))}))).then((function(){J.log("All page actions for",n,"applied:",e),P.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){J.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e){var t={};return D.each(e,(function(e){D.each(e.changeSet,(function(e){t[e.type]||(t[e.type]=!0)}))})),t}function m(e,t,n,i,r){if(t.length||n.length)return void r(c([],void 0,i));var a=$.relatedAudienceIds(e),o=D.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]),s=ye.getAllPlugins(H.PluginTypes.audienceMatchers);if(Ie.getSampleRum()){var u={};if(D.each(o,(function(e){D.extend(u,E(e.conditions,s))})),!D.isEmpty(u)){var l=D.keys(u);W.dispatch(x.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:e.id})}}S(o,s,$.getActivationTimeout(e),(function(){var t=c(o,e,i);D.map(t,(function(t){y(t,o,e)})),r(t)}))}function E(e,t){var n={};return D.each(e,(function(e){D.isArray(e)?D.extend(n,E(e,t)):D.isObject(e)&&t[e.type]&&(n[e.type]=!0)})),n}function y(e,t,n){var i=D.map(e.audienceIds,D.bind(de.get,de)),r=D.filter(t,(function(t){return!D.includes(e.audienceIds,t.id)}));J.log("When deciding Campaign",$.description(n),"visitor is in audiences:",I(i),"and not in audiences:",I(r))}function I(e){var t=[];return D.each(e,(function(e){t.push(e.name,e)})),t}function S(e,t,n,i){var r=D.reduce(e,(function(e,n){return D.extend(e,k.requiredAudienceFieldsForConditions(n.conditions,t))}),{}),a=D.reduce(r,(function(e,t){if(D.isUndefined(ue.getAttribute(t))){var n=ue.getPendingAttributeValue(t);D.isUndefined(n)||e.push(n)}return e}),[]);if(0===a.length)return i();var o=[].concat(e),s=re.firstToResolve(D.map(a,(function(e){return ie.resolve(e).then((function(){var e=Se.getVisitorProfile();if(o=D.filter(o,(function(n){return D.isUndefined(k.isInAudience(e,n,t))})),!D.isEmpty(o))throw new Error("At least one audience is still pending")}))})));ie.race([s,new ie(function(e,t){ce.setTimeout(t,n)})]).then((function(){J.log("Activating Campaign after pending Audiences resolved",e),i()}),(function(){J.log("Activating Campaign after timeout on Audiences",e),i()}))}function T(e,t,n){var i,r=$.description(e);return i=n.length?G.getDummyLayerDecision(e,n):G.decideLayer(e,t),J.log("Recording decision for Campaign",r,t,"->",i),$.recordLayerDecision(e.id,t,i),Le||(i.variationId&&i.experimentId&&ue.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&ue.updatePreferredLayerMap(e.groupId,e.id)),i}function A(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();W.dispatch(x.CLEAR_CLEANUP_FN,{lifecycle:e})}}function b(e,t,n){var i=$.description(e),r="NOT applying changes for Campaign",a={actions:[],maybeExecute:!1};return a.actions=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!n&&he.isGlobalHoldback()?(J.log(r,i,"(visitor is in global holdback)"),a):t.isLayerHoldback?(J.log(r,i,"(visitor is in layer holdback)"),a):t.experimentId&&t.variationId?(a.maybeExecute=!0,J.log("Got Actions for Campaign:",i,a.actions),a):(J.log(r,i,"(visitor is not eligible for any Experiments)"),a)}function w(e,t){return D.filter(e,(function(e){return D.isUndefined(e.pageId)||D.includes(t,e.pageId)}))}var D=n(2),R=n(77).create,N=t.ActivationCodeError=R("ActivationCodeError"),C=t.ProjectJSError=R("ProjectJSError"),O=n(134),x=n(7),L=n(108),P=n(115),k=n(138),V=n(76),F=n(104),M=n(107),U=n(24),G=n(139),B=n(16),j=n(116),z=n(81),H=n(25),Y=n(103),K=n(109),q=n(144),W=n(9),X=n(143),$=n(111),Q=n(82).LocalStorage,J=n(23),Z=n(145),ee=n(84),te=n(121),ne=n(146),ie=n(12).Promise,re=n(147),ae=n(112),oe=(n(114),n(136)),se=n(122),ue=n(75),ce=n(41),B=n(16),le=B.get("stores/session"),de=B.get("stores/audience_data"),fe=B.get("stores/action_data"),pe=B.get("stores/cleanup"),ge=B.get("stores/directive"),he=B.get("stores/global"),ve=B.get("stores/group_data"),_e=B.get("stores/layer_data"),me=B.get("stores/layer"),Ee=B.get("stores/pending_events"),ye=B.get("stores/plugins"),Ie=B.get("stores/rum"),Se=B.get("stores/visitor"),Te=B.get("stores/view_data"),Ae=B.get("stores/view"),be=B.get("stores/visitor_id"),we=B.get("stores/visitor_bucketing"),De=B.get("stores/xdomain"),Re=n(89),Ne=n(119),Ce=n(1),Oe=1e3,xe=!1,Le=!1,Pe=!1,ke=Le||Pe,Ve=t;t.initialize=function(e){var n=e.clientData;if(M.normalizeClientData(e.clientData),Y.on({filter:{type:"error"},handler:r}),W.dispatch(x.DATA_LOADED,{data:n}),J.log("Initialized with DATA:",n),a(),j.setOptOut(ge.shouldOptOut()),ge.isDisabled()||ge.shouldOptOut())return void J.log("Controller / Is disabled");Ce.queueBeacons(),z.isReady()?W.dispatch(x.SET_DOMCONTENTLOADED):z.addReadyHandler((function(){W.dispatch(x.SET_DOMCONTENTLOADED)}));var o=!1,s=V.get(H.COOKIES.REDIRECT);if(s){var u=s.match(/^(\d+)\|(.*)/);if(u){J.debug("Found legacy redirect data:",s);var c=u[1],l=u[2];W.dispatch(x.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),o=!0}}if(!ke){ee.time("projectJS");var d=he.getProjectJS();if(D.isFunction(d))try{q.apply(d)}catch(e){J.error("Error while executing projectJS: ",e),F.emitError(new C(e))}ee.timeEnd("projectJS")}D.each(e.plugins||[],(function(e){try{e(te)}catch(e){F.emitInternalError(e)}})),D.each(he.getPlugins()||[],(function(e){try{q.apply(e,[te])}catch(e){F.emitError(e)}})),o||ae.load();var f=Y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Se.observe(ue.persistVisitorProfile),me.observe(ue.persistLayerStates),le.observe(ue.persistSessionState),Ee.observe(Z.persistPendingEvents),Le||we.observe(ue.persistVisitorBucketingStore),Y.off(f)}});Y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),Y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=Z.getPendingEvents();if(p&&(W.dispatch(x.LOAD_PENDING_EVENTS,{events:p}),Z.retryPendingEvents(p)),Y.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),P.emitInitializedEvent(),!ge.shouldActivate())return ie.resolve();var g=[];return i(),ie.all(g)},t.activate=function(){try{var e=[];J.log("Activated client"),A(H.Lifecycle.preActivate);var t=U.now();W.dispatch(x.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Te.getAll();se.registerViews(n),ue.setId(ue.getOrGenerateId()),e.push(L.trackPostRedirectDecisionEvent()),W.dispatch(x.MERGE_VARIATION_ID_MAP,{variationIdMap:ue.getVariationIdMap()}),W.dispatch(x.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ue.getPreferredLayerMap()}),A(H.Lifecycle.postVisitorProfileLoad),e.push(u(ye.getAllPlugins(H.PluginTypes.visitorProfileProviders)).then((function(){J.log("Populated visitor profile")})));var i=c(),r=G.decideGlobal(i);J.log("Made global decision",i,"->",r),W.dispatch(x.RECORD_GLOBAL_DECISION,r);var a=L.trackClientActivation();a?J.log("Tracked activation event",a):J.log("Not tracking activation event");var o=Ve.setUpViewActivation(n);return xe?se.activateMultiple(o):D.each(o,(function(e){se.activateMultiple([e])})),A(H.Lifecycle.postViewsActivated),A(H.Lifecycle.postActivate),P.emitActivatedEvent(),ie.all(e).then((function(){Y.emit({type:K.TYPES.LIFECYCLE,name:"activateDeferredDone"}),J.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),ie.reject(e)}},Ve.setUpViewActivation=function(e){var t=[];return D.each(e,(function(e){D.isBoolean(Ae.getViewState(e.id).isActive)&&se.isActivationTypeImmediate(e.activationType)?J.debug("Skipping page: already evaluated, presumably at the edge",se.description(e)):se.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===H.ViewActivationTypes.callback?(J.debug("Setting up conditional activation for Page",se.description(e)),Ve.activateViewOnCallback(e)):e.activationType===H.ViewActivationTypes.polling?(J.debug("Setting up polling activation for Page",se.description(e)),ne.pollFor(D.partial(q.apply,e.activationCode),null,D.partial(oe.isTimedOut,U.now())).then((function(){se.activateMultiple([e])}))["catch"]((function(t){J.warn("Failed to activate view ",e,t)}))):e.activationType!==H.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Ve.activateViewOnCallback=function(e){var t=function(t){var n=D.extend({},t,{pageName:e.apiName,type:"page"});Re.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Ae.isViewActive(e.id)}});try{q.apply(e.activationCode,[t,n])}catch(t){var i=new N("("+t.toString()+") in activationCode for "+se.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=D.map(n,"id");try{if(!be.getBucketingId())throw new Error("View activated with no visitorId set");var r=d(i)["catch"](F.emitError);return t=ie.all(D.map(n,(function(e){var t=function(){se.parseViewTags(e);var t=L.trackViewActivation(e);t?J.log("Tracked activation for Page",se.description(e),t):J.log("Not Tracking activation for Page",se.description(e))};return z.isReady()?ie.resolve(t()):ne.pollFor(z.isReady,Oe).then(t)}))),ie.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);D.each(n,(function(e){var n=fe.getActionState(e);n&&(D.each(n,(function(e,n){if(e.cancel)try{e.cancel(),J.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){J.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),J.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){J.error("Controller / Error undoing change upon deactivation of page.",e)}})),W.dispatch(x.REMOVE_ACTION_STATE,{actionId:e}),J.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={push:Re.push};Pe||(e.get=Re.get);var t=window.optimizely;D.isArray(t)&&D.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.persistItemsWithId=function(e){return D.each(e,(function(e,t){ue.checkKeyForVisitorId(t)&&Q.setItem(t,e)})),e},t.initializeXDomainStorage=o,t.decideAndExecuteLayerASAP=p,t.decideLayer=T,t.getActionsForDecision=b}),(function(e,t,n){function i(e,t,n){var i=_.getActionState(t.id);if(!i)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=_.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=m.getChange(t);if(!c){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new g(function(d){var f=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var v="change_"+c.src,E=u.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/151300895/data"+c.src,(function(){u.resolveRequest(v)}))})).then((function(){var e=m.getChange(c.id);e||s.emitError(new S("Failed to load async change from src: "+c.src)),i(e,n,l.now())}));f.push(E)}g.all(f).then((function(){var e=l.now(),i=_.getChangeApplier(t,n.id);return i?(p.debug("Action / Applying change:",c),i.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",c),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",c,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(104),u=n(6),c=n(77).create,l=n(24),d=n(16),f=n(9),p=n(23),g=n(12).Promise,h=n(132),v=d.get("stores/global"),_=d.get("stores/action_data"),m=d.get("stores/change_data"),E=d.get("stores/session"),y=n(135),I=n(136);I.initialize();var S=c("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:v.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=m.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=m.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return g.all(n).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),u=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(137),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){return function(n){var i=n.type,a=t[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,n),l=0;l<s.length;l++){var d=s[l],f=u.getFieldValue(e,d);if(o.isUndefined(f))return void c.debug("Audience / Required field",d,"for type",i,"has no value")}c.debug("Matching condition:",n,"to values:",e);var p=a.match(e,n);if(!o.isUndefined(p))return!!p}}function r(e,t){var n="function"==typeof e?e(t):e;return o.isString(n)&&(n=[n]),o.isArray(n)?n:(c.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(123),u=n(19),c=n(23),l=n(75);t.isInAudience=function(e,t,n){var r=i(e,n);c.groupCollapsed("Checking audience",t.name,t.id,t),c.debug("Visitor Profile:",e);var o;try{var u=s.evaluate(t.conditions,r)}catch(e){o=e,u=!1}return c.groupEnd(),o&&c.error("Audience / Error evaluating audience",a(t),":",o),c.log("Is "+(u?"in":"NOT in")+" audience:",a(t)),u},t.requiredAudienceFieldsForConditions=function e(t,n){var i={};return o.each(t,(function(t){if(o.isArray(t))o.extend(i,e(t,n));else if(o.isObject(t)){var a=n[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){i[l.serializeFieldKey(e)]=e}))}}})),i}}),(function(e,t,n){function i(e,t){_.debug("Decision / Deciding layer for group: ",h.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)_.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(u);return{layerId:null,reason:u}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(g.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(g.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return c.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(104),c=n(138),l=n(140),d=n(141),f=n(142).DecisionError,p=n(16),g=n(25),h=n(143),v=n(111),_=n(23),m=n(45),E=p.get("stores/plugins"),y=p.get("stores/global"),I=p.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){_.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){_.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);n=c.experiment,i=c.variation}else _.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(_.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(_.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(m.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(65),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(140),a=n(123),o=n(142).DecisionError,s=n(23),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,c){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(78),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(104),a=n(25),o=n(26),s=n(82).LocalStorage,u=n(23),c=n(87),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(41),o=100,s=50;t.pollFor=function(e,t,n){var u,c;return i.isFunction(n)?c=n:(u=n||o,c=function(){return u--,u<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!c()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,u=n(7),c=n(16),l=n(9),d=n(104),f=n(77).create,p=n(24),g=n(81),h=n(26),v=n(146),_=n(75),m=n(41),E=n(23),y=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.deleteData=function(e,t){return r({type:"DELETE",visitorId:e},t)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=g.createElement("iframe");
i.src=e+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},g.appendTo(g.querySelector("body"),i)})},t.getXDomainUserId=function(e,t){var n,i={},r=o.keys(e);return o.each(t,(function(e){i[e]=[],o.each(r,(function(t){var r=_.getUserIdFromKey(t,e);!n&&r&&(n=r),r&&!o.includes(i[e],r)&&i[e].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){m.addEventListener("message",i);var r=function(){return!!g.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(103),u=n(109),c=n(41),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=c.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){c.getGlobal(d)||c.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(151))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(153)),e.registerAudienceMatcher("behavior",n(155))}}),(function(e,t,n){var i=n(154);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(73),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(156),o=n(157);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return u.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return u.extend(i,{orderBy:[{field:[c.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(u.isUndefined(e))throw new Error("rule is undefined");if(!u.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(u.isArray(e["filter"])?u.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),u.isArray(e["sort"])?u.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],c="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));u.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+c+" is unknown"),u.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?((!u.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):u.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!u.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u=n(2),c={FIELDS:n(64).FIELDS,FIELDS_V0_2:n(64).FIELDS_V0_2},l=n(26),d=n(23),f=n(157);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return u.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),u.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[c.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return u.isArray(e)?{op:"between",args:[{field:[c.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return u.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||u.includes(u.values(c.FIELDS),e)||(n=[c.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",c.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",c.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",c.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&u.each(e.filters,(function(r){var a,o,u=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",c.FIELDS.TIME),o=s.aggregateField("max",c.FIELDS.TIME)),a){var l=u,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,u,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:u.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return u.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(u.each(e["sort"],(function(e){u.includes(["ascending","descending"],e["direction"])&&(u.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=u.filter(u.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&u.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return u.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?u.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):u.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(u.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return u.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[c.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!u.isArray(e)||!u.every(e,u.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=u.keys(c.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),u.includes(r,e[0])?n+" is not supported here":u.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!u.isString(e)&&!u.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!u.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!u.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(u.isArray(t)&&2===t.length&&u.isNumber(t[0])&&u.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(u.isString(t)||u.isArray(t)&&2===t.length&&u.isString(t[0])&&u.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!u.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),u=n(19).getFieldValue,c=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);if(!i.isArray(t))return n;var r=u(e,t);return"undefined"==typeof r&&(r=n),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},g=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=p(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(g,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},h=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),g=f.join(".");u[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(c.stringify(p)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:u,events:[]}),n[h].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var v=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],u=s["op"];if(u in t.aggregateOperators){var c=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(u,c),d=t.aggregateOperators[u]([c],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+u)}})),r},_=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},m=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l(t,s,0),c=l(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var u=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,c=t.generateAlias(e["op"],u);return c in o||(r.push({op:e["op"],args:e["args"]}),o[c]=!0),{field:[c]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var u=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<u.length;c++)e.hasOwnProperty(u[c])&&(s[u[c]]=e[u[c]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var u=e[t.clause.LIMIT];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],n+1))),r},y=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return g(t,e)}))}))},I=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=I(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return g(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=h(e[t.clause.GROUP_BY],r),s=v(e[t.clause.AGGREGATE],o);r=_(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return g(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=m(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var u=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),u=Number(e[t.clause.OFFSET]));var c;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),c=u+Number(e[t.clause.LIMIT])),(u>0||!i.isUndefined(c))&&(r=r.slice(u,c),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=y(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",n);var i=E(e);if(i.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+i.join("\n"));var o=I(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(159))}}),(function(e,t,n){var i=n(2),r=n(160),a=n(154),o=n(26),s=n(156);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),u=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),c=a.getEvents();return r.evaluate(u,c)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(64).FIELDS},s=n(156),u=n(157);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var c=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=u.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(162)),e.registerAudienceMatcher("first_session",n(163))}}),(function(e,t,n){var i=n(64),r=n(154),a=n(19).getFieldValue,o=n(85).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(165))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(154),d=n(156),f=n(157);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(167)),e.registerVisitorProfileProvider(n(172)),e.registerVisitorProfileProvider(n(173)),e.registerAudienceMatcher("browser_version",n(174))}}),(function(e,t,n){var i=n(168);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(169),a=n(41),o=n(7),s=n(16),u=n(9),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),u.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in u)return e;var t=a.keys(u);return a.find(t,(function(t){var n=u[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(170);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),u=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(u.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:c[u.model]||"unknown",type:r(d,u.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},u={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",g="model",h="name",v="type",_="vendor",m="version",E="architecture",y="console",I="mobile",S="tablet",T="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,u,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<p.length;r++)u=s[++i],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,u):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=u?u.replace(o[1],o[2]):a:this[o[0]]=u?o[1].call(this,u,o[2]):a:4==o.length&&(this[o[0]]=u?o[3].call(this,u.replace(o[1],o[2])):a):this[o]=u?u:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,m],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[h,m],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],m],[/(edge)\/((\d+)?[\w\.]+)/i],[h,m],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],m],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],m],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],m],[/(QQ)\/([\d\.]+)/i],[h,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,m],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[h,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,m],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],m],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[m,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[m,h],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[m,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[g,_,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[_,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[_,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[_,g,[v,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[g,[_,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[g,D.str,R.device.amazon.model],[_,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,_,[v,I]],[/\((ip[honed|\s\w*]+);/i],[g,[_,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[_,g,[v,I]],[/\(bb10;\s(\w+)/i],[g,[_,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[g,[_,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[_,"Sony"],[g,"Xperia Tablet"],[v,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[g,[_,"Sony"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[_,g,[v,y]],[/android.+;\s(shield)\sbuild/i],[g,[_,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[g,[_,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[_,D.str,R.device.sprint.vendor],[g,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[_,g,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[_,[g,/_/g," "],[v,I]],[/(nexus\s9)/i],[g,[_,"HTC"],[v,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[g,[_,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[_,g,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[_,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[_,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[_,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[_,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[_,w.trim],[g,w.trim],[v,T]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[_,"Samsung"],[v,T]],[/\(dtv[\);].+(aquos)/i],[g,[_,"Sharp"],[v,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[_,"Samsung"],g,[v,S]],[/smart-tv.+(samsung)/i],[_,[v,T],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[_,"Samsung"],g,[v,I]],[/sie-(\w+)*/i],[g,[_,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[_,"Nokia"],g,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[g,[_,"Acer"],[v,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[g,[_,"LG"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[_,"LG"],g,[v,S]],[/(lg) netcast\.tv/i],[_,g,[v,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[g,[_,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[_,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[_,g,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[_,g,[v,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[_,g,[v,I]],[/crkey/i],[[g,"Chromecast"],[_,"Google"]],[/android.+;\s(glass)\s\d/i],[g,[_,"Google"],[v,A]],[/android.+;\s(pixel c)\s/i],[g,[_,"Google"],[v,S]],[/android.+;\s(pixel xl|pixel)\s/i],[g,[_,"Google"],[v,I]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[g,/_/g," "],[_,"Xiaomi"],[v,I]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[g,/_/g," "],[_,"Xiaomi"],[v,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[g,[_,"Meizu"],[v,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[g,[_,"OnePlus"],[v,I]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[g,[_,"RCA"],[v,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[g,[_,"Dell"],[v,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[g,[_,"Verizon"],[v,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[_,"Barnes & Noble"],g,[v,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[g,[_,"NuVision"],[v,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[_,"ZTE"],g,[v,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[g,[_,"Swiss"],[v,I]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[g,[_,"Swiss"],[v,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[g,[_,"Zeki"],[v,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[_,"Dragon Touch"],g,[v,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[g,[_,"Insignia"],[v,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[g,[_,"NextBook"],[v,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[_,"Voice"],g,[v,I]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[_,"LvTel"],g,[v,I]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[g,[_,"Envizen"],[v,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[_,g,[v,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[g,[_,"MachSpeed"],[v,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[_,g,[v,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[g,[_,"Rotor"],[v,S]],[/android.+(KS(.+))\s+build/i],[g,[_,"Amazon"],[v,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[_,g,[v,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],_,g],[/(android.+)[;\/].+build/i],[g,[_,"Generic"]]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,m],[/rv\:([\w\.]+).*(gecko)/i],[m,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[m,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[m,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],m],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],m],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],m],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,m],[/(haiku)\s(\w+)/i],[h,m],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,m]]},C=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof C))return new C(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};C.VERSION=o,C.BROWSER={NAME:h,MAJOR:p,VERSION:m},C.CPU={ARCHITECTURE:E},C.DEVICE={MODEL:g,VENDOR:_,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:b},C.ENGINE={NAME:h,VERSION:m},C.OS={NAME:h,VERSION:m},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=C),t.UAParser=C):"function"===c&&n(171)?(i=function(){return C}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=C)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(175).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(177)),e.registerAudienceMatcher("campaign",n(178))}}),(function(e,t,n){var i=n(117);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(180));var t=n(181);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=n,o=s.getByApiName(n),u=s.getById(n),c=u;return i.isObject(t)?(!t.id&&o&&(c=o,r=o.id,i.extend(t,{id:c.segmentId||c.id})),t.name||c&&c.apiName&&(t.name=c.apiName),t.id||c||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled."),e[r]=t,e):(a.error('Unable to restore custom attribute "'+n+'" because value is not an object'),e)}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(183)),e.registerVisitorProfileProvider(n(184)),e.registerAudienceMatcher("device",n(185))}}),(function(e,t,n){var i=n(168);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(187)),e.registerAudienceMatcher("device_type",n(188))}}),(function(e,t,n){var i=n(168);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(190)),e.registerAudienceMatcher("referrer",n(191))}}),(function(e,t,n){var i=n(81),r=n(95);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(192);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(194)),e.registerAudienceMatcher("source_type",n(196))}}),(function(e,t,n){var i=n(117),r=n(81),a=n(95),o=n(195),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(i.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(198)),e.registerVisitorProfileProvider(n(199)),e.registerAudienceMatcher("time_and_day",n(200))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(201);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(23),o=n(146),s=n(95),u=n(113),c=n(41),l="google_classic_analytics",d="Optimizely",f="_gaq",p=128,g=p-d.length,h=n(91),v=["stores/layer_data",function(e){return function(t){var n=t.decision.experimentId,r=t.decision.variationId,o=t.decision.isLayerHoldback,s=e.get(t.decision.layerId),u=i.find(s.experiments,{id:n});if(u){var c=u["integrationSettings"]||s["integrationSettings"]||{},d=c[l];if(d){var f=i.find(u.variations,{id:r});if(f){var p=h.generateAnalyticsString(s,u,f,o,g,!0);if(p)return m(p,d)["catch"]((function(e){a.warn("Tracker for",l,"failed:",e)}))}}}}}],_=function(e){var t=e.integrationSettings;if(t&&t[l]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},o=e.isLayerHoldback,s=h.generateAnalyticsString(n,i,r,o,g,!0);if(s)return m(s,t[l])["catch"]((function(e){a.warn("Tracker for",l,"failed:",e)}))}},m=function(e,t){var n=50,r=200;return o.pollFor((function(){var e=c.getGlobal(f);if(e&&!i.isArray(e))return e}),r,n).then((function(n){var i=null,r=null,o=!0,u=t.google_analytics_tracker,c=u?u+".":"",l=parseInt(t.google_analytics_slot,10);if(isNaN(l))return void a.warn('Google Analytics custom variable slot cannot be parsed to an integer: "',t.google_analytics_slot,'".  No data can be sent to Google Analytics.');var f=s.getReferrer();f&&n.push([c+"_setReferrerOverride",f]),n.push([c+"_setCustomVar",l,d,e],[c+"_trackEvent","Optimizely","Assigned to Campaign",i,r,o])}))},E={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:v,trackLayerDecision:_,serializeSettings:r.stringify,deserializeSettings:r.parse};e.exports=function(e){e.registerAnalyticsTracker("google_classic_analytics",E)}}),(function(e,t,n){function i(e){function t(e,t,n){try{u(t),e[n]=t}catch(e){O.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=C.keys(ie),i=C.omit(e,n),r=C.pick(e,n),a=C.reduce(i,t,{}),o=C.reduce(r,(function(e,n,i){var r=ie[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){O.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=C.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return C.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function o(e){return C.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:$,uuid:e.eventId,timestamp:e.timestamp}}function u(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=V.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function c(e){if(null==e)throw new Error("Metric value is null");if(!C.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return C.reduce(e,(function(e,t){try{u(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){F.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){K.dispatch(P.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);K.dispatch(P.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:Q}]}]}]};K.dispatch(P.REGISTER_PREVIOUS_BATCH,n),D()}function g(e){var t=C.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision,ee&&(n.enrich_decisions=!0);var i={session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=R(e.layerStates);K.dispatch(P.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function h(e){return se?oe:e}function v(e){var t={entity_id:e.layerId,type:Q,uuid:e.decisionId,timestamp:e.timestamp};K.dispatch(P.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:R(e.layerStates)}),f(e.userFeatures),D()}function _(){if(!W.canSend())return void F.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(C.each(W.getPreviousBatches(),m),K.dispatch(P.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(K.dispatch(P.FINALIZE_BATCH_SNAPSHOT),m(W.getEventBatch()),K.dispatch(P.RESET_TRACKER_EVENTS)))):void F.debug("Not sending events because there are no events to send")}function m(e){F.debug("Sending ticket:",e);var t=x.generate();B.retryableRequest({url:L,method:"POST",data:E(e)},t)}function E(e){var t=C.extend({},C.pick(e,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:C.map(e.visitors,y)});return t}function y(e){return{visitor_id:e.visitor_id,session_id:oe,attributes:C.map(e.attributes,I),snapshots:C.map(e.snapshots,S)}}function I(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:C.map(e.decisions,A),events:C.map(t,b)}}function T(e){var t=C.reduce(e,(function(e,t){var n;if(n=t.type!==J||!C.isEmpty(t.tags)||!C.isEmpty(C.pick(t,C.keys(ie)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=C.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return C.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===Q&&(e.type=Q,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return C.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!re||z.isLoaded();t&&_(),W.isPolling()&&G.setTimeout(e,ne)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,ne),K.dispatch(P.SET_TRACKER_POLLING,!0),G.setTimeout((function(){K.dispatch(P.SET_TRACKER_BATCHING,!1),K.dispatch(P.SET_TRACKER_POLLING,!1)}),te))):void _()}function R(e){return C.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function N(){var e=W.getPersistableState();if(e)try{F.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),K.dispatch(P.SET_TRACKER_DIRTY,!1)}catch(e){F.debug("Failed to persist pending batch:",e)}}var C=n(2),O=n(104),x=n(5),L="https://logx.optimizely.com/v1/events",P=n(7),k=n(77).create,V=n(26),F=n(23),M=n(113),U=n(75),G=n(41),B=n(87),j=n(16),z=n(81),H=n(103),Y=n(109),K=n(9),q=j.get("stores/global"),W=j.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),$="client_activation",Q="campaign_activated",J="view_activated",Z="multi-event",ee=!1,te=1e4,ne=1e3,ie={revenue:{validate:c,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:c,sanitize:Math.floor,excludeFeature:!0},value:{validate:c,sanitize:C.identity}},re=!1,ae=!1,oe="AUTO",se=!0,ue=[function(){return function(e){v(C.extend(e,e.decision))}}],ce=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):v(e)},le=[function(){return function(e){d(r(e),e.userFeatures,R(e.layerStates))}}],de=[function(){return function(e){g(e),d(s(e),e.userFeatures,R(e.layerStates))}}],fe=[function(){return function(e){d(o(e),e.userFeatures,R(e.layerStates))}}],pe=[function(){return function(e){d(a(e),e.userFeatures,R(e.layerStates))}}],ge={onLayerDecision:ue,trackLayerDecision:ce,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:le,onClientActivation:de,onClickEvent:pe,onCustomEvent:fe};e.exports=function(e){e.registerAnalyticsTracker("optimizely",ge),H.on({filter:{type:Y.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){K.dispatch(P.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||_()}}),H.on({filter:{type:Y.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){K.dispatch(P.SET_TRACKER_SEND_EVENTS,!1)}}),K.dispatch(P.SET_TRACKER_SEND_EVENTS,!ae);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(N),H.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(205)),e.registerViewMatcher("url",n(206))}}),(function(e,t,n){var i=n(117);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(192);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){var i="element_present",r={match:function(e,t){return!!document.querySelector(t.value)}};e.exports=function(e){e.registerViewMatcher(i,r)}}),(function(e,t,n){var i=n(81),r=n(25),a=n(103),o=n(209),s=n(122),u="DOMChanged",c={token:void 0,setUpObserver:function(){o.createDOMChangedObserver(),this.token=a.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){s.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){a.off(this.token)}};e.exports=function(e){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),e.registerViewTrigger(u,c)}}),(function(e,t,n){var i=n(81),r=n(103),a=n(210);t.createDOMChangedObserver=function(){var e=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},n={attributes:!0,childList:!0,subtree:!0,characterData:!0},o=a.create((function(){r.emit(t,!0)}));a.observe(o,e,n)}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,n){e.observe(t,n)}}),(function(e,t,n){function i(){r(),a(),h.addEventListener("popstate",_,!1),h.addEventListener("hashchange",m,!1),d.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){g.getViewsAndActivate(l.ViewActivationTypes.URLChanged)}})}function r(){function e(){var e=p.getOriginalPushState().apply(this,arguments);return o("pushState"),e}f.dispatch(u.ENSURE_ORIGINAL_PUSHSTATE),h.getGlobal("history").pushState=e}function a(){function e(){var e=p.getOriginalReplaceState().apply(this,arguments);return o("replaceState"),e}f.dispatch(u.ENSURE_ORIGINAL_REPLACESTATE),h.getGlobal("history").replaceState=e}function o(e){d.emit({type:"viewTrigger",name:"URLChanged",data:{source:e,newURL:h.getHref()}},!0)}var s=n(2),u=n(7),c=n(16),l=n(25),d=n(103),f=n(9),p=c.get("stores/history"),g=n(122),h=n(41),v="URLChanged";e.exports=function(e){i(),e.registerViewTrigger(v)};var _=s.partial(o,"popstate"),m=s.partial(o,"hashchange")}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(108),a=n(213),o=n(23),s=n(122);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=c(i,t)}catch(s){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),u),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(104),s=n(77).create,u=n(81),c=n(214),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(215)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(217),o=n(218),s=n(144);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){var i=n(141),r=n(142).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);
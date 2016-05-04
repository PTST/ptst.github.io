			function coloc(){
				document.getElementById("vlandiv").style.display = "none";
				document.getElementById("crossdiv").style.display = "none";
				document.getElementById("trunkdiv").style.display = "block";
				document.getElementById("reprovdiv").style.display = "block";
				document.getElementById("coloc-btn").className = "button-success pure-button";
				document.getElementById("tdc-btn").className = "button-error pure-button";
				$('#vlan').attr('checked', false);
				$('#cross').attr('checked', false);
			}

			function TDC(){
				document.getElementById("vlandiv").style.display = "block";
				document.getElementById("crossdiv").style.display = "block";
				document.getElementById("trunkdiv").style.display = "none";
				document.getElementById("reprovdiv").style.display = "none";
				document.getElementById("coloc-btn").className = "button-error pure-button";
				document.getElementById("tdc-btn").className = "button-success pure-button";
				$('#Trunks').attr('checked', false);
				$('#reprov').attr('checked', false);

			}

			function createticket(){
					var inputdsl = document.getElementById("DSLnummer").value;
			        if (inputdsl.value == "") {
			            document.getElementById("fejldsl").style.display = "none";

			        } else {
			        	$(".dslnummer").text(inputdsl);
			        	document.getElementById("fejldsl").style.display = "block";
			        }

			        var inputcircuit = document.getElementById("circuit").value;
			        if (inputcircuit.value == "") {
			            document.getElementById("fejlcircuit").style.display = "none";

			        } else {
			        	$(".circuit").text(inputcircuit);
			        	document.getElementById("fejlcircuit").style.display = "block";
			        }

			        var trunkinput = document.getElementById("trunknr").value;
			        if (trunkinput.value == "") {
			            document.getElementById("trunkchange").style.display = "none";
			            document.getElementById("trunkspace").style.display = "none";

			        } else {
			        	$(".trunknr").text(trunkinput);
			        	document.getElementById("trunkchange").style.display = "inline-block";
			        	document.getElementById("trunkspace").style.display = "inline-block";
			        }

					if ($('#adresse').is(':checked')) {
						document.getElementById("fejl1").style.display = "block";
					}else{
						document.getElementById("fejl1").style.display = "none";
					}

					if ($('#cables').is(':checked')) {
						document.getElementById("fejl2").style.display = "block";
					}else{
						document.getElementById("fejl2").style.display = "none";
					}

					if ($('#dsl').is(':checked')) {
						document.getElementById("fejl3").style.display = "block";
					}else{
						document.getElementById("fejl3").style.display = "none";
					}

					if ($('#onlinedato').is(':checked')) {
						document.getElementById("fejl4").style.display = "block";
					}else{
						document.getElementById("fejl4").style.display = "none";
					}

					if ($('#CLB').is(':checked')) {
						document.getElementById("fejl5").style.display = "block";
					}else{
						document.getElementById("fejl5").style.display = "none";
					}

					if ($('#fas').is(':checked')) {
						document.getElementById("fejl6").style.display = "block";
					}else{
						document.getElementById("fejl6").style.display = "none";
					}

					if ($('#Reset').is(':checked')) {
						document.getElementById("fejl7").style.display = "block";
					}else{
						document.getElementById("fejl7").style.display = "none";
					}

					if ($('#Testhastighed').is(':checked')) {
						document.getElementById("fejl8").style.display = "block";
					}else{
						document.getElementById("fejl8").style.display = "none";
					}

					if ($('#Trunks').is(':checked')) {
						document.getElementById("fejl9").style.display = "block";
					}else{
						document.getElementById("fejl9").style.display = "none";
					}

					if ($('#vlan').is(':checked')) {
						document.getElementById("fejl10").style.display = "block";
					}else{
						document.getElementById("fejl10").style.display = "none";
					}

					if ($('#Hovedstik').is(':checked')) {
						document.getElementById("fejl11").style.display = "block";
					}else{
						document.getElementById("fejl11").style.display = "none";
					}

					if ($('#reprov').is(':checked')) {
						document.getElementById("fejl12").style.display = "block";
					}else{
						document.getElementById("fejl12").style.display = "none";
					}

					if ($('#cross').is(':checked')) {
						document.getElementById("fejl13").style.display = "block";
					}else{
						document.getElementById("fejl13").style.display = "none";
					}

					if ($('#adresse').is(':checked') || $('#cables').is(':checked') || $('#dsl').is(':checked') || $('#onlinedato').is(':checked') || $('#CLB').is(':checked') || $('#fas').is(':checked') || $('#Reset').is(':checked') || $('#Testhastighed').is(':checked') || $('#Trunks').is(':checked') || $('#vlan').is(':checked') || $('#Hovedstik').is(':checked') || $('#reprov').is(':checked') || $('#cross').is(':checked')) {
						document.getElementById("fejl0").style.display = "block";
					}else{
						document.getElementById("fejl0").style.display = "none";	
					}
				

					
			}
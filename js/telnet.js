	    	function acs() {
    			document.getElementById("acstekst").style.display = "block";
    			document.getElementById("giptjektekst").style.display = "none";
    			document.getElementById("gipfjerntekst").style.display = "none";
		}
		
		function giptjek() {
			document.getElementById("acstekst").style.display = "none";
    			document.getElementById("giptjektekst").style.display = "block";
    			document.getElementById("gipfjerntekst").style.display = "none";
		}
		
		function gipfjern() {
			document.getElementById("acstekst").style.display = "none";
    			document.getElementById("giptjektekst").style.display = "none";
    			document.getElementById("gipfjerntekst").style.display = "block";
		}
		
		function coloc() {
			var PPPOA = "pppoa"
			$("#pppo").text(PPPOA);
			document.getElementById("gipfjernkommando").style.display = "block";
			$("#tdcbttn").attr('class', 'button alert');
			$("#colocbttn").attr('class', 'button success');
		}
		
		function TDCcentral() {
			var PPPOE = "pppoe"
			$("#pppo").text(PPPOE);
			document.getElementById("gipfjernkommando").style.display = "block";
			$("#tdcbttn").attr('class', 'button success');
			$("#colocbttn").attr('class', 'button alert');
		}
	    	
	    	$(document).ready(function() {
	            $('#btnAdd').click(function() {
	                var num     = $('.clonedInput').length;
	                var newNum  = new Number(num + 1);
	 
	                var newElem = $('#input' + num).clone().attr('id', 'input' + newNum);
	     
	                newElem.children(':first').attr('id', 'name' + newNum).attr('name', 'name' + newNum).attr('placeholder', 'port ' + newNum).val("");
	                $('#input' + num).after(newElem);
	                $('#btnDel').attr('disabled',false);
	                $('#btnDel').attr('class','button');
	 
	                if (newNum == 25)
	                    $('#btnAdd').attr('disabled','disabled');
	                    $('#btnDel').attr('class','disabled');
	            });
	 
	            $('#btnDel').click(function() {
	                var num = $('.clonedInput').length;
	 
	                $('#input' + num).remove();
	                $('#btnAdd').attr('disabled',false);
	                $('#btnDel').attr('class','button');
	 
	                if (num-1 == 1)
	                    $('#btnDel').attr('disabled','disabled');
	                    $('#btnDel').attr('class','disabled');
	            });
	 
	            $('#btnDel').attr('disabled','disabled');
	            $('#btnDel').attr('class','disabled');
	        });
			
			function choose() {
				var input = document.getElementById("dropdown");
				if (input.value == "appletv") {
					appletv();
				}
				if (input.value == "sonos") {
					sonos();
				}
				if (input.value == "xbox1") {
					xbox1();
				}
				if (input.value == "xbox360") {
					xbox360();
				}
				if (input.value == "PS") {
					PS();
				}
				if (input.value == "dankort") {
					dankort();
				}
				if (input.value == "chromecast") {
					chromecast();
				}
				if (input.value == "canaldigital") {
					canaldigital();
				}
								
			}
			
			
			function sonos() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name7').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name8').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name9').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name10').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name11').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name12').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name13').length == 0) {
		        	$('#btnAdd').trigger('click');}
				
				$('#IDinput').val('Sonos')
				$('#name1').val('80')
				$('#name2').val('445')
				$('#name3').val('3400')
				$('#name4').val('443')
				$('#name5').val('4070')
	        	$('#name6').val('136-139')
		        $('#name7').val('1900')
		        $('#name8').val('1900')
		        $('#name9').val('1901')
		        $('#name10').val('2869')
		        $('#name11').val('6969')
		        $('#name12').val('10243')
		        $('#name13').val('10280-10284')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
	        function appletv() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('atv')
				$('#name1').val('80')
				$('#name2').val('443')
				$('#name3').val('53')
				$('#name4').val('5353')
				$('#name5').val('123')
	        	$('#name6').val('3689')
		        $('#name7').val('')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function xbox1() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name7').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('Xone')
				$('#name1').val('88')
				$('#name2').val('3074')
				$('#name3').val('53')
				$('#name4').val('80')
				$('#name5').val('500')
	        	$('#name6').val('3544')
		        $('#name7').val('4500')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function xbox360() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('xbox')
				$('#name1').val('88')
				$('#name2').val('3074')
				$('#name3').val('53')
				$('#name4').val('80')
				$('#name5').val('')
	        	$('#name6').val('')
		        $('#name7').val('')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function PS() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name7').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name8').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name9').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name10').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('PS')
				$('#name1').val('80')
				$('#name2').val('443')
				$('#name3').val('465')
				$('#name4').val('983')
				$('#name5').val('3478-3480')
	        	$('#name6').val('3658')
		        $('#name7').val('5223')
		        $('#name8').val('6000-7000')
		        $('#name9').val('9293')
		        $('#name10').val('10070-10080')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}       
	    	
			function chromecast() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('chrome')
				$('#name1').val('80')
				$('#name2').val('1024')
				$('#name3').val('1900')
				$('#name4').val('8008')
				$('#name5').val('8009')
	        	$('#name6').val('32768-61000')
		        $('#name7').val('')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function dankort() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name5').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name6').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name7').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('DK')
				$('#name1').val('19000')
				$('#name2').val('21')
				$('#name3').val('50020')
				$('#name4').val('13')
				$('#name5').val('80')
	        	$('#name6').val('5214')
		        $('#name7').val('24000')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function canaldigital() {
				if ($('#name2').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name3').length == 0) {
		        	$('#btnAdd').trigger('click');}
				if ($('#name4').length == 0) {
		        	$('#btnAdd').trigger('click');}
								
				$('#IDinput').val('CD')
				$('#name1').val('80')
				$('#name2').val('8080')
				$('#name3').val('8888')
				$('#name4').val('8889')
				$('#name5').val('')
	        	$('#name6').val('')
		        $('#name7').val('')
		        $('#name8').val('')
		        $('#name9').val('')
		        $('#name10').val('')
		        $('#name11').val('')
		        $('#name12').val('')
		        $('#name13').val('')
		        $('#name14').val('')
		        $('#name15').val('')
		        $('#name16').val('')
		        $('#name17').val('')
		        $('#name18').val('')
		        $('#name19').val('')
		        $('#name20').val('')
		        $('#name21').val('')
		        $('#name22').val('')
		        $('#name23').val('')
		        $('#name24').val('')
		        $('#name25').val('')
			}
			
			function showdiv() {
		        var inputID = document.getElementById("IDinput");
		        if (inputID.value == "") {
		            alert("Husk at indtaste enhedens navn!");
					return
		        } else {
		        	var ID = document.getElementById("IDinput").value;
		        	$(".ID1").text(ID);
		        }
		        var inputIP = document.getElementById("IPinput");
		        if (inputIP.value == "") {
		            alert("Husk at indtaste enhedens IP!");
					return
		        } else {
		        	var IP = document.getElementById("IPinput").value;
		        	$(".IP1").text(IP);
		        }
		        var input = document.getElementById("name1");
		        if ($('#name1').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item1").style.display = "none";
		        } else {
		            document.getElementById("item1").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            var PT1 = document.getElementById("name1").value;
			        $("#PORT1").text(PT1);
		        }
		        var input = document.getElementById("name2");
		        if ($('#name2').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item2").style.display = "none";
		        } else {
		            document.getElementById("item2").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT2 = document.getElementById("name2").value;
			        $("#PORT2").text(PT2);
		        }
		        var input = document.getElementById("name3");
		        if ($('#name3').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item3").style.display = "none";
		        } else {
		            document.getElementById("item3").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT3 = document.getElementById("name3").value;
			        $("#PORT3").text(PT3);
		        }
		        var input = document.getElementById("name4");
		        if ($('#name4').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item4").style.display = "none";
		        } else {
		            document.getElementById("item4").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT4 = document.getElementById("name4").value;
			        $("#PORT4").text(PT4);
		        }
		        var input = document.getElementById("name5");
		        if ($('#name5').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item5").style.display = "none";
		        } else {
		            document.getElementById("item5").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT5 = document.getElementById("name5").value;
			        $("#PORT5").text(PT5);
		        }
		        var input = document.getElementById("name6");
		        if ($('#name6').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item6").style.display = "none";
		        } else {
		            document.getElementById("item6").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT6 = document.getElementById("name6").value;
			        $("#PORT6").text(PT6);
		        }
		        var input = document.getElementById("name7");
		        if ($('#name7').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item7").style.display = "none";
		        } else {
		            document.getElementById("item7").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT7 = document.getElementById("name7").value;
			        $("#PORT7").text(PT7);
			        var PT8 = document.getElementById("name8").value;
		        }
		        var input = document.getElementById("name8");
		        if ($('#name8').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item8").style.display = "none";
		        } else {
		            document.getElementById("item8").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        $("#PORT9").text(PT8);
		        }
		        var input = document.getElementById("name9");
		        if ($('#name9').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item9").style.display = "none";
		        } else {
		            document.getElementById("item9").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT9 = document.getElementById("name9").value;
			        $("#PORT9").text(PT9);
		        }
		        var input = document.getElementById("name10");
		        if ($('#name10').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item10").style.display = "none";
		        } else {
		            document.getElementById("item10").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT10 = document.getElementById("name10").value;
			        $("#PORT10").text(PT10);
		        }
		        var input = document.getElementById("name11");
		        if ($('#name11').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item11").style.display = "none";
		        } else {
		            document.getElementById("item11").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT11 = document.getElementById("name11").value;
			        $("#PORT11").text(PT11);
		        }
		        var input = document.getElementById("name12");
		        if ($('#name12').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item12").style.display = "none";
		        } else {
		            document.getElementById("item12").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT12 = document.getElementById("name12").value;
			        $("#PORT12").text(PT12);
		        }
		        var input = document.getElementById("name13");
		        if ($('#name13').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item13").style.display = "none";
		        } else {
		            document.getElementById("item13").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT13 = document.getElementById("name13").value;
			        $("#PORT13").text(PT13);
		        }
		        var input = document.getElementById("name14");
		        if ($('#name14').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item14").style.display = "none";
		        } else {
		            document.getElementById("item14").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT14 = document.getElementById("name14").value;
			        $("#PORT14").text(PT14);
		        }
				
				var input = document.getElementById("name15");
		        if ($('#name15').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item15").style.display = "none";
		        } else {
		            document.getElementById("item15").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT15 = document.getElementById("name15").value;
			        $("#PORT15").text(PT15);
		        }
		        var input = document.getElementById("name16");
		        if ($('#name16').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item16").style.display = "none";
		        } else {
		            document.getElementById("item16").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT16 = document.getElementById("name16").value;
			        $("#PORT16").text(PT16);
		        }
				
				var input = document.getElementById("name17");
		        if ($('#name17').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item17").style.display = "none";
		        } else {
		            document.getElementById("item17").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT17 = document.getElementById("name17").value;
			        $("#PORT17").text(PT17);
		        }
				
				var input = document.getElementById("name18");
		        if ($('#name18').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item18").style.display = "none";
		        } else {
		            document.getElementById("item18").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT18 = document.getElementById("name18").value;
			        $("#PORT18").text(PT18);
		        }
				
				var input = document.getElementById("name19");
		        if ($('#name19').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item19").style.display = "none";
		        } else {
		            document.getElementById("item19").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT19 = document.getElementById("name19").value;
			        $("#PORT19").text(PT19);
		        }
				
				var input = document.getElementById("name20");
		        if ($('#name20').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item20").style.display = "none";
		        } else {
		            document.getElementById("item20").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT20 = document.getElementById("name20").value;
			        $("#PORT20").text(PT20);
		        }
				
				var input = document.getElementById("name21");
		        if ($('#name21').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item21").style.display = "none";
		        } else {
		            document.getElementById("item21").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT21 = document.getElementById("name21").value;
			        $("#PORT21").text(PT21);
		        }
				
				var input = document.getElementById("name22");
		        if ($('#name22').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item22").style.display = "none";
		        } else {
		            document.getElementById("item22").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT22 = document.getElementById("name22").value;
			        $("#PORT22").text(PT22);
		        }
				
				var input = document.getElementById("name23");
		        if ($('#name23').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item23").style.display = "none";
		        } else {
		            document.getElementById("item23").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT23 = document.getElementById("name23").value;
			        $("#PORT23").text(PT23);
		        }
				
				var input = document.getElementById("name24");
		        if ($('#name24').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item24").style.display = "none";
		        } else {
		            document.getElementById("item24").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
		            var PT24 = document.getElementById("name24").value;
			        $("#PORT24").text(PT24);
		        }
				
				var input = document.getElementById("name25");
		        if ($('#name25').length == 0 || input.value == "" || inputIP.value == "" || inputID.value == "") {
		            document.getElementById("item25").style.display = "none";
		        } else {
		            document.getElementById("item25").style.display = "block";
		            document.getElementById("select").style.display = "block";
		            document.getElementById("husk").style.display = "block";
			        var PT25 = document.getElementById("name25").value;
			        $("#PORT25").text(PT25);
	        }
		}

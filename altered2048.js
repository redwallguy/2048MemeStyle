$(document).ready(function() {
	
	$(".custom > input").css("opacity", 0);
	$(".custom").css("visibility","hidden");
        $("#GameOverCover").css("opacity", .7);
        $("#GameOverCover").css("visibility","hidden");

	var score = 0;
	var highscore = 0;
	
	var powerarray = [];
	powerarray[0] = "Memes/meme2.gif";
	powerarray[1] = "Memes/meme4.gif";
	powerarray[2] = "Memes/meme8.jpg";
	powerarray[3] = "Memes/meme16.jpg";
	powerarray[4] = "Memes/meme32.gif";
	powerarray[5] = "Memes/meme64.jpg";
	powerarray[6] = "Memes/meme128.jpg";
	powerarray[7] = "Memes/meme256.jpg";
	powerarray[8] = "Memes/meme512.png";
	powerarray[9] = "Memes/meme1024.jpg";
	powerarray[10] = "Memes/meme2048.jpeg";

	var oldboardstate = [];
	oldboardstate[0] = "nada";
	oldboardstate[1] = "nada";
	oldboardstate[2] = "nada";
	oldboardstate[3] = "nada";
	oldboardstate[4] = "nada";
	oldboardstate[5] = "nada";
	oldboardstate[6] = "nada";
	oldboardstate[7] = "nada";
	oldboardstate[8] = "nada";
	oldboardstate[9] = "nada";
	oldboardstate[10] = "nada";
	oldboardstate[11] = "nada";
	oldboardstate[12] = "nada";
	oldboardstate[13] = "nada";
	oldboardstate[14] = "nada";
	oldboardstate[15] = "nada";

	function changeScore() {
		$("#cs").text(score);
		if(score > highscore) {
			highscore = score;
		}
		$("#hs").text(highscore);
	}

	function newGame() {
                $("#container > div").each(function(index,element) {
                   $(this).css("backgroundImage", "none");
                   $(this).attr("class", "nada");
                });
		var x, y;
		x = Math.floor((Math.random() * 16) + 1);
		y = Math.floor((Math.random() * 16) + 1);
		while(y == x) {
		y = Math.floor((Math.random() * 16) + 1);
		}

		x = "#c" + x;
		y = "#c" + y;

		$(x).attr("class", "meme2");
		$(y).attr("class", "meme2");
		$(x).css("backgroundImage", "url(" + powerarray[0] + ")");
		$(y).css("backgroundImage", "url(" + powerarray[0] + ")");
		score = 0;
		changeScore();
		for(var j = 0; j < 16; j++) {
			var z = "#c" + String(j+1);
			oldboardstate[j] = $(z).attr("class");
		}
	}
	newGame();

	/*function testGame() {
		$("div.nada").attr("class", "meme2");
		$("div.meme2").css("backgroundImage", "url(meme2.gif)");
	}
	testGame();*/

	var i2, i2_;
	var reg = /\D/g;
	var combobig, combosmall;
	var medstr;

	function swipeLeft() {

		loop111: {
		for(i2 = 1; i2 < 5; i2++) {
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 1;
				//var no_others = true;
				loop112: {
				for(i2_; i2_ < 5; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c1") {
								idt3 = "#c3";
								idt4 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c2") {
								idt3 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop112;
					}
				}
				}
/*
				if(no_others && idt != "#c1") {
					$("#c1").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c1").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop113: {
		for(i2 = 1; i2 < 5; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 1;
				loop114: {
				for(i2_; i2_ < 5; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop114;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop113;
				}
			}
		}
		}

		loop121: {
		for(i2 = 5; i2 < 9; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 1;
				//var no_others = true;
				loop122: {
				for(i2_; i2_ < 9; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c5") {
								idt3 = "#c7";
								idt4 = "#c8";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c6") {
								idt3 = "#c8";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop122;
					}
				}
				}
				/*if(no_others && idt != "#c5") {
					$("#c5").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c5").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop123: {
		for(i2 = 5; i2 < 9; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 1;
				loop124: {
				for(i2_; i2_ < 9; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop124;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop123;
				}
			}
		}
		}

		loop131: {
		for(i2 = 9; i2 < 13; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 1;
				//var no_others = true;
				loop132: {
				for(i2_; i2_ < 13; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c9") {
								idt3 = "#c11";
								idt4 = "#c12";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c10") {
								idt3 = "#c12";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop132;
					}
				}
				}
				/*if(no_others && idt != "#c9") {
					$("#c9").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c9").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop133: {
		for(i2 = 9; i2 < 13; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 1;
				loop134: {
				for(i2_; i2_ < 13; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop134;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop133;
				}
			}
		}
		}

		loop141: {
		for(i2 = 13; i2 < 17; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 1;
				//var no_others = true;
				loop142: {
				for(i2_; i2_ < 17; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c13") {
								idt3 = "#c15";
								idt4 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c14") {
								idt3 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop142;
					}
				}
				}
				/*if(no_others && idt != "#c13") {
					$("#c13").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c13").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop143: {
		for(i2 = 13; i2 < 17; i2++) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 1;
				loop144: {
				for(i2_; i2_ < 17; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop144;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop143;
				}
			}
		}
		}

	}

	function swipeRight() {

		loop211: {
		for(i2 = 4; i2 > 0; i2--) {
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 1;
				//var no_others = true;
				loop212: {
				for(i2_; i2_ > 0; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c4") {
								idt3 = "#c2";
								idt4 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c3") {
								idt3 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop212;
					}
				}
				}
				/*if(no_others && idt != "#c4") {
					$("#c4").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c4").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop213: {
		for(i2 = 4; i2 > 0; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 1;
				loop214: {
				for(i2_; i2_ > 0; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop214;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop213;
				}
			}
		}
		}

		loop221: {
		for(i2 = 8; i2 > 4; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 1;
				//var no_others = true;
				loop222: {
				for(i2_; i2_ > 4; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c8") {
								idt3 = "#c6";
								idt4 = "#c5";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c7") {
								idt3 = "#c5";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop222;
					}
				}
				}
				/*if(no_others && idt != "#c8") {
					$("#c8").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c8").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop223: {
		for(i2 = 8; i2 > 4; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 1;
				loop224: {
				for(i2_; i2_ > 4; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop224;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop223;
				}
			}
		}
		}

		loop231: {
		for(i2 = 12; i2 > 8; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 1;
				//var no_others = true;
				loop232: {
				for(i2_; i2_ > 8; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c12") {
								idt3 = "#c10";
								idt4 = "#c9";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c11") {
								idt3 = "#c9";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop232;
					}
				}
				}
				/*if(no_others && idt != "#c12") {
					$("#c12").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c12").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop233: {
		for(i2 = 12; i2 > 8; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 1;
				loop234: {
				for(i2_; i2_ > 8; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop234;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop233;
				}
			}
		}
		}

		loop241: {
		for(i2 = 16; i2 > 12; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 1;
				//var no_others = true;
				loop242: {
				for(i2_; i2_ > 12; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c16") {
								idt3 = "#c14";
								idt4 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c15") {
								idt3 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop242;
					}
				}
				}
				/*if(no_others && idt != "#c16") {
					$("#c16").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c16").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop243: {
		for(i2 = 16; i2 > 12; i2--) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 1;
				loop244: {
				for(i2_; i2_ > 12; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop244;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop243;
				}
			}
		}
		}

	}

	function swipeUp() {

		loop311: {
		for(i2 = 1; i2 < 17; i2+=4) {
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 4;
				//var no_others = true;
				loop312: {
				for(i2_; i2_ < 17; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c1") {
								idt3 = "#c9";
								idt4 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c5") {
								idt3 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop312;
					}
				}
				}
				/*if(no_others && idt != "#c1") {
					$("#c1").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c1").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop313: {
		for(i2 = 1; i2 < 17; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 4;
				loop314: {
				for(i2_; i2_ < 17; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop314;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop313;
				}
			}
		}
		}

		loop321: {
		for(i2 = 2; i2 < 18; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 4;
				//var no_others = true;
				loop322: {
				for(i2_; i2_ < 18; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c2") {
								idt3 = "#c10";
								idt4 = "#c14";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c6") {
								idt3 = "#c14";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop322;
					}
				}
				}
				/*if(no_others && idt != "#c2") {
					$("#c2").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c2").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop323: {
		for(i2 = 2; i2 < 18; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 4;
				loop324: {
				for(i2_; i2_ < 18; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop324;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop323;
				}
			}
		}
		}

		loop331: {
		for(i2 = 3; i2 < 19; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 4;
				//var no_others = true;
				loop332: {
				for(i2_; i2_ < 19; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c3") {
								idt3 = "#c11";
								idt4 = "#c15";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c7") {
								idt3 = "#c15";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop332;
					}
				}
				}
				/*if(no_others && idt != "#c3") {
					$("#c3").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c3").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop333: {
		for(i2 = 3; i2 < 19; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 4;
				loop334: {
				for(i2_; i2_ < 19; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop334;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop333;
				}
			}
		}
		}

		loop341: {
		for(i2 = 4; i2 < 20; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 + 4;
				//var no_others = true;
				loop342: {
				for(i2_; i2_ < 20; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c4") {
								idt3 = "#c12";
								idt4 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c8") {
								idt3 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop342;
					}
				}
				}
				/*if(no_others && idt != "#c4") {
					$("#c4").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c4").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop343: {
		for(i2 = 4; i2 < 20; i2+=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 + 4;
				loop344: {
				for(i2_; i2_ < 20; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop344;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop343;
				}
			}
		}
		}

	}

	function swipeDown() {

		loop411: {
		for(i2 = 13; i2 > -3; i2-=4) {
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 4;
				//var no_others = true;
				loop412: {
				for(i2_; i2_ > -3; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c13") {
								idt3 = "#c5";
								idt4 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c9") {
								idt3 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop412;
					}
				}
				}
				/*if(no_others && idt != "#c13") {
					$("#c13").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c13").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop413: {
		for(i2 = 13; i2 > -3; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 4;
				loop414: {
				for(i2_; i2_ > -3; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop414;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop413;
				}
			}
		}
		}

		loop421: {
		for(i2 = 14; i2 > -2; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 4;
				loop422: {
				for(i2_; i2_ > -2; i2_-=4) {
					idt2 += i2_;
					//var no_others = true;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c14") {
								idt3 = "#c6";
								idt4 = "#c2";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c10") {
								idt3 = "#c2";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop422;
					}
				}
				}
				/*if(no_others && idt != "#c14") {
					$("#c14").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c14").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop423: {
		for(i2 = 14; i2 > -2; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 4;
				loop424: {
				for(i2_; i2_ > -2; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop424;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop423;
				}
			}
		}
		}

		loop431: {
		for(i2 = 15; i2 > -1; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 4;
				//var no_others = true;
				loop432: {
				for(i2_; i2_ > -1; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c15") {
								idt3 = "#c7";
								idt4 = "#c3";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c11") {
								idt3 = "#c3";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop432;
					}
				}
				}
				/*if(no_others && idt != "#c15") {
					$("#c15").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c15").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop433: {
		for(i2 = 15; i2 > -1; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 4;
				loop434: {
				for(i2_; i2_ > -1; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop434;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop433;
				}
			}
		}
		}

		loop441: {
		for(i2 = 16; i2 > 0; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			
			if($(idt).attr("class") != "nada") {
				i2_ = i2 - 4;
				//var no_others = true;
				loop442: {
				for(i2_; i2_ > 0; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "nada") {
						idt2 = "#c";
					}
					else {
						//no_others = false;
						medstr = $(idt2).attr("class").replace(reg, '');
						combobig = parseInt(medstr);
						combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
						if($(idt2).attr("class") == $(idt).attr("class")) {
							$(idt).css("backgroundImage", "url(" + powerarray[combosmall] + ")");
							$(idt2).css("backgroundImage", "none");
							medstr = "meme" + (combobig*2);
							score += combobig*2;
							changeScore();
							$(idt).attr("class", medstr);
							$(idt2).attr("class", "nada");
							if($(idt).attr("id") == "c16") {
								idt3 = "#c8";
								idt4 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "nada");
							}
							if($(idt).attr("id") == "c12") {
								idt3 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "nada");
							}
						}
						break loop442;
					}
				}
				}
				/*if(no_others && idt != "#c16") {
					$("#c16").css("backgroundImage", $(idt).css("backgroundImage"));
					$("#c16").attr("class", $(idt).attr("class"));
					$(idt).css("backgroundImage", "none");
					$(idt).attr("class", "nada");
				}*/
			}
		}
		}

		loop443: {
		for(i2 = 16; i2 > 0; i2-=4) {
			idt = "#c";
			idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "nada") {
				i2_ = i2 - 4;
				loop444: {
				for(i2_; i2_ > 0; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "nada") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "nada");
						$(idt2).css("backgroundImage", "none");
						break loop444;
					}
					else {
						idt2 = "#c";
					}
				}
				break loop443;
				}
			}
		}
		}

	}
	function updateBoardArray() {
		for(var j = 0; j < 16; j++) {
			var z = "#c" + String(j+1);
			oldboardstate[j] = $(z).attr("class");
		}
	}
	function resetOneMove() {
		for(var j = 0; j < 16; j++) {
			var z = "#c" + String(j+1);
			$(z).attr("class", oldboardstate[j]);
			medstr = $(z).attr("class").replace(reg, '');
			if(medstr != "")
			{
			combobig = parseInt(medstr);
			combosmall = Math.round((Math.log(combobig))/(Math.log(2)));
			$(z).css("backgroundImage", "url(" + powerarray[combosmall-1] + ")");
			}
			else {
			$(z).css("backgroundImage", "none");
			}
		}
	}

	function addNew() {
		if ($("div.nada").length == 0) {
			return false;
		}
		var j = Math.floor(Math.random() * $("div.nada").length);
		if(Math.random() < 0.5) {
			$("div.nada")[j].style.backgroundImage = "url(" + powerarray[0] +")";
			$("div.nada")[j].setAttribute("class", "meme2");
		}
		else {
			$("div.nada")[j].style.backgroundImage = "url(" + powerarray[1] + ")";
			$("div.nada")[j].setAttribute("class", "meme4");
		}
	}
	
	function anyAdjacent() {
		if ($("#c1").attr("class") == $("#c2").attr("class") || $("#c1").attr("class") == $("#c5").attr("class")) {
			return true;
		}
		if ($("#c2").attr("class") == $("#c3").attr("class") || $("#c2").attr("class") == $("#c6").attr("class")) {
			return true;
		}
		if ($("#c3").attr("class") == $("#c4").attr("class") || $("#c3").attr("class") == $("#c7").attr("class")) {
			return true;
		}
		if ($("#c4").attr("class") == $("#c8").attr("class")) {
			return true;
		}
		if ($("#c5").attr("class") == $("#c6").attr("class") || $("#c5").attr("class") == $("#c9").attr("class")) {
			return true;
		}
		if ($("#c6").attr("class") == $("#c7").attr("class") || $("#c6").attr("class") == $("#c10").attr("class")) {
			return true;
		}
		if ($("#c7").attr("class") == $("#c8").attr("class") || $("#c7").attr("class") == $("#c11").attr("class")) {
			return true;
		}
		if ($("#c8").attr("class") == $("#c12").attr("class")) {
			return true;
		}
		if ($("#c9").attr("class") == $("#c10").attr("class") || $("#c9").attr("class") == $("#c13").attr("class")) {
			return true;
		}
		if ($("#c10").attr("class") == $("#c11").attr("class") || $("#c10").attr("class") == $("#c14").attr("class")) {
			return true;
		}
		if ($("#c11").attr("class") == $("#c12").attr("class") || $("#c11").attr("class") == $("#c15").attr("class")) {
			return true;
		}
		if ($("#c12").attr("class") == $("#c16").attr("class")) {
			return true;
		}
                if ($("#c13").attr("class") == $("c#14").attr("class")) {
                    return true;
                }
                if ($("#c14").attr("class") == $("c#15").attr("class")) {
                    return true;
                }
                if ($("#c15").attr("class") == $("c#16").attr("class")) {
                    return true;
                }
		return false;
	}

	function checkGame() {
		var gameOver = true;
		$("#container > div").each(function(index, element) {
			if($(this).attr("class") == "nada") {
				gameOver = false;
				return false;
			}
		});
		if(gameOver && !anyAdjacent()) {
                        $("#GameOverCover > label").text("Game Over...Try Again?");
			$("#GameOverCover").css("visibility","visible");
                        $(document).off("keydown");
		}
		var didjaWin = false;
		$("#container > div").each(function(index, element) {
			if($(this).attr("class") == "meme2048") {
				didjaWin = true;
				return false;
			}
		});
		if(didjaWin) {
			$("#container > div").attr("class", "nada");
			$("div.nada").css("backgroundImage", "none");
			$("#GameOverCover > label").text("YOU WON!!! Give it another go?");
			$("#GameOverCover").css("visibility","visible");
                        $(document).off("keydown");
		}
	}
	/*
	$("#container > div").click(function() {
		alert($(this).attr("class"));
	});
	*/

	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: 
				updateBoardArray();
				swipeLeft();
				addNew();
				checkGame();
				break;

			case 38:
				updateBoardArray();
				swipeUp();
				addNew();
				checkGame();
				break;
			case 39:
				updateBoardArray();
				swipeRight();
				addNew();
				checkGame();
				break;
			case 40:
				updateBoardArray();
				swipeDown();
				addNew();
				checkGame();
				break;
			default:
					  }

		e.preventDefault();
	});
	
	$("#reset").click(function(){
		newGame();
	});
	$("#back").click(function(){
		resetOneMove();
	});
	
	$("#themeBtn").click(function(){
		$("#dropdownContent").toggle();
	});
        
        $("#GameOverCover > label").click(function() {
              $(document).keydown(function(e) {
                switch(e.which) {
                        case 37: 
                                updateBoardArray();
                                swipeLeft();
                                addNew();
                                checkGame();
                                break;

                        case 38:
                                updateBoardArray();
                                swipeUp();
                                addNew();
                                checkGame();
                                break;
                        case 39:
                                updateBoardArray();
                                swipeRight();
                                addNew();
                                checkGame();
                                break;
                        case 40:
                                updateBoardArray();
                                swipeDown();
                                addNew();
                                checkGame();
                                break;
                        default:
                }

            e.preventDefault();
            });  
            $("#GameOverCover").css("visibility","hidden");
            newGame();
        });
	
	function toGF() {
	powerarray[0] = "GravityFalls/meme2.gif";
	powerarray[1] = "GravityFalls/meme4.gif";
	powerarray[2] = "GravityFalls/meme8.jpeg";
	powerarray[3] = "GravityFalls/meme16.jpg";
	powerarray[4] = "GravityFalls/meme32.jpg";
	powerarray[5] = "GravityFalls/meme64.png";
	powerarray[6] = "GravityFalls/meme128.png";
	powerarray[7] = "GravityFalls/meme256.png";
	powerarray[8] = "GravityFalls/meme512.png";
	powerarray[9] = "GravityFalls/meme1024.png";
	powerarray[10] = "GravityFalls/meme2048.gif";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 Gravity Falls Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	function toOW() {
	powerarray[0] = "OW/meme2.jpg";
	powerarray[1] = "OW/meme4.jpg";
	powerarray[2] = "OW/meme8.jpg";
	powerarray[3] = "OW/meme16.jpg";
	powerarray[4] = "OW/meme32.jpg";
	powerarray[5] = "OW/meme64.jpg";
	powerarray[6] = "OW/meme128.jpg";
	powerarray[7] = "OW/meme256.jpg";
	powerarray[8] = "OW/meme512.jpg";
	powerarray[9] = "OW/meme1024.jpg";
	powerarray[10] = "OW/meme2048.jpg";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 Overwatch Style");

	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	function toLoL() {
	powerarray[0] = "LoL/meme2.jpg";
	powerarray[1] = "LoL/meme4.gif";
	powerarray[2] = "LoL/meme8.gif";
	powerarray[3] = "LoL/meme16.jpg";
	powerarray[4] = "LoL/meme32.jpg";
	powerarray[5] = "LoL/meme64.jpg";
	powerarray[6] = "LoL/meme128.png";
	powerarray[7] = "LoL/meme256.gif";
	powerarray[8] = "LoL/meme512.gif";
	powerarray[9] = "LoL/meme1024.jpg";
	powerarray[10] = "LoL/meme2048.png";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 League of Legends Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	function toShips() {
	powerarray[0] = "Ships/meme2.png";
	powerarray[1] = "Ships/meme4.jpg";
	powerarray[2] = "Ships/meme8.jpg";
	powerarray[3] = "Ships/meme16.jpg";
	powerarray[4] = "Ships/meme32.jpg";
	powerarray[5] = "Ships/meme64.jpg";
	powerarray[6] = "Ships/meme128.jpg";
	powerarray[7] = "Ships/meme256.gif";
	powerarray[8] = "Ships/meme512.jpg";
	powerarray[9] = "Ships/meme1024.jpg";
	powerarray[10] = "Ships/meme2048.jpg";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 Ship Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	function toRWBY() {
	powerarray[0] = "RWBY/meme2.gif";
	powerarray[1] = "RWBY/meme4.gif";
	powerarray[2] = "RWBY/meme8.gif";
	powerarray[3] = "RWBY/meme16.gif";
	powerarray[4] = "RWBY/meme32.gif";
	powerarray[5] = "RWBY/meme64.gif";
	powerarray[6] = "RWBY/meme128.gif";
	powerarray[7] = "RWBY/meme256.gif";
	powerarray[8] = "RWBY/meme512.gif";
	powerarray[9] = "RWBY/meme1024.gif";
	powerarray[10] = "RWBY/meme2048.gif";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 RWBY Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	function toMemes() {
	powerarray[0] = "Memes/meme2.gif";
	powerarray[1] = "Memes/meme4.gif";
	powerarray[2] = "Memes/meme8.jpg";
	powerarray[3] = "Memes/meme16.jpg";
	powerarray[4] = "Memes/meme32.gif";
	powerarray[5] = "Memes/meme64.jpg";
	powerarray[6] = "Memes/meme128.jpg";
	powerarray[7] = "Memes/meme256.jpg";
	powerarray[8] = "Memes/meme512.png";
	powerarray[9] = "Memes/meme1024.jpg";
	powerarray[10] = "Memes/meme2048.jpeg";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 Meme Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}

	function toStarWars() {
	powerarray[0] = "StarWars/meme2.jpg";
	powerarray[1] = "StarWars/meme4.jpg";
	powerarray[2] = "StarWars/meme8.jpg";
	powerarray[3] = "StarWars/meme16.gif";
	powerarray[4] = "StarWars/meme32.gif";
	powerarray[5] = "StarWars/meme64.jpg";
	powerarray[6] = "StarWars/meme128.png";
	powerarray[7] = "StarWars/meme256.jpg";
	powerarray[8] = "StarWars/meme512.jpg";
	powerarray[9] = "StarWars/meme1024.jpg";
	powerarray[10] = "StarWars/meme2048.jpg";
		
	$("#l1a").css("backgroundImage", "url(" + powerarray[0] + ")");
	$("#l2a").css("backgroundImage", "url(" + powerarray[1] + ")");
	$("#l3a").css("backgroundImage", "url(" + powerarray[2] + ")");
	$("#l4a").css("backgroundImage", "url(" + powerarray[3] + ")");
	$("#l5a").css("backgroundImage", "url(" + powerarray[4] + ")");
	$("#l6a").css("backgroundImage", "url(" + powerarray[5] + ")");
	$("#l7a").css("backgroundImage", "url(" + powerarray[6] + ")");
	$("#l8a").css("backgroundImage", "url(" + powerarray[7] + ")");
	$("#l9a").css("backgroundImage", "url(" + powerarray[8] + ")");
	$("#l10a").css("backgroundImage", "url(" + powerarray[9] + ")");
	$("#l11a").css("backgroundImage", "url(" + powerarray[10] + ")");
	$("h1").text("2048 Star Wars Style");
		
	$("#container > div").each(function(index,element) {
	$(this).attr("class", "hey");
	});
	$(".custom").css("visibility","hidden");
	newGame();
	}
	
	$("#Memes").click(function() {
		toMemes();
	});
	
	$("#RWBY").click(function() {
		toRWBY();
	});
	
	$("#GF").click(function() {
		toGF();
	});
	
	$("#OW").click(function() {
		toOW();
	});
	
	$("#LoL").click(function() {
		toLoL();
	});
	
	$("#Ships").click(function() {
		toShips();
	});

	$("#StarWars").click(function() {
		toStarWars();
	});
	
	$("#Random").click(function() {
		var rng = Math.floor(Math.random()* 7);
		
		switch(rng) {
			case 0:
				toMemes();
				break;
			case 1:
				toRWBY();
				break;
			case 2:
				toGF();
				break;
			case 3:
				toOW();
				break;
			case 4:
				toLoL();
				break;
			case 5:
				toShips();
				break;
			case 6:
				toStarWars();
				break;
			default:
				break;
			   }
	});
	
	$("#Custom").click(function() {
		$(".custom").css("visibility","visible");
		
		powerarray[0] = "";
		powerarray[1] = "";
		powerarray[2] = "";
		powerarray[3] = "";
		powerarray[4] = "";
		powerarray[5] = "";
		powerarray[6] = "";
		powerarray[7] = "";
		powerarray[8] = "";
		powerarray[9] = "";
		powerarray[10] = "";
		
		$("#l1a").css("backgroundImage", "none");
		$("#l2a").css("backgroundImage", "none");
		$("#l3a").css("backgroundImage", "none");
		$("#l4a").css("backgroundImage", "none");
		$("#l5a").css("backgroundImage", "none");
		$("#l6a").css("backgroundImage", "none");
		$("#l7a").css("backgroundImage", "none");
		$("#l8a").css("backgroundImage", "none");
		$("#l9a").css("backgroundImage", "none");
		$("#l10a").css("backgroundImage", "none");
		$("#l11a").css("backgroundImage", "none");
		$("h1").text("2048 Custom Style");
		
		$(document).off("keydown");
		
		
		$(".custom > input").on("change", function() {
			var memePic = $(this)[0].files[0];
			
			if(validFileType(memePic)) {
				var legendNo = $(this).attr("id").match(/\d+/);
				var memePicsrc = window.URL.createObjectURL(memePic);
				$("#l"+legendNo+"a").css("backgroundImage","url("+memePicsrc+")");
				powerarray[parseInt(legendNo)-1] = memePicsrc;
				var allDoneWithCustom = true;
				for(var adwc=0; adwc < powerarray.length; adwc++) {
					if(powerarray[adwc].length == 0) {
						allDoneWithCustom = false;
						break;
					}
				}
				if(allDoneWithCustom) {
					$(document).on("keydown");
					$(document).keydown(function(e) {
						switch(e.which) {
							case 37: 
								updateBoardArray();
								swipeLeft();
								addNew();
								checkGame();
								break;

							case 38:
								updateBoardArray();
								swipeUp();
								addNew();
								checkGame();
								break;
							case 39:
								updateBoardArray();
								swipeRight();
								addNew();
								checkGame();
								break;
							case 40:
								updateBoardArray();
								swipeDown();
								addNew();
								checkGame();
								break;
							default:
						}

					e.preventDefault();
					});
					$("#container > div").each(function(index,element) {
					$(this).attr("class", "hey");
					});
					checkGame();
				}
			}
			else {
				alert("Not a picture. Please try again.");
			}
		});
	});
	
	function validFileType(file) {
		var fileTypes = ['image/jpeg',
						'image/pjpeg',
						'image/png',
						'image/gif'];
		for(var vft = 0; vft < fileTypes.length; vft++) {
			if(file.type === fileTypes[vft]) {
				return true;
    		}
		}
	}
	
});
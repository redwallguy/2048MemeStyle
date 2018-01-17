$(document).ready(function() {

	"use strict";
	var score = 0;
	var highscore = 0;

	function changeScore() {
		$("#cs").text(score);
		if(score > highscore) {
			highscore = score;
		}
		$("#hs").text(highscore);
	}

	function newGame() {
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
		$(x).css("backgroundImage", "url(meme2.gif)");
		$(y).css("backgroundImage", "url(meme2.gif)");
		score = 0;
		changeScore();
	}
	newGame();

	/*function testGame() {
		$("div.null").attr("class", "meme2");
		$("div.meme2").css("backgroundImage", "url(meme2.gif)");
	}
	testGame();*/

	var powerarray = [];
	powerarray[0] = "meme2.gif";
	powerarray[1] = "meme4.gif";
	powerarray[2] = "meme8.jpg";
	powerarray[3] = "meme16.jpg";
	powerarray[4] = "meme32.gif";
	powerarray[5] = "meme64.jpg";
	powerarray[6] = "meme128.jpg";
	powerarray[7] = "meme256.jpg";
	powerarray[8] = "meme512.png";
	powerarray[9] = "meme1024.jpg";
	powerarray[10] = "meme2048.jpeg";

	var boardstate1 = [];
	boardstate1[0] = "null";
	boardstate1[1] = "null";
	boardstate1[2] = "null";
	boardstate1[3] = "null";
	boardstate1[4] = "null";
	boardstate1[5] = "null";
	boardstate1[6] = "null";
	boardstate1[7] = "null";
	boardstate1[8] = "null";
	boardstate1[9] = "null";
	boardstate1[10] = "null";
	boardstate1[11] = "null";
	boardstate1[12] = "null";
	boardstate1[13] = "null";
	boardstate1[14] = "null";
	boardstate1[15] = "null";

	var boardstate2 = [];
	boardstate2[0] = "null";
	boardstate2[1] = "null";
	boardstate2[2] = "null";
	boardstate2[3] = "null";
	boardstate2[4] = "null";
	boardstate2[5] = "null";
	boardstate2[6] = "null";
	boardstate2[7] = "null";
	boardstate2[8] = "null";
	boardstate2[9] = "null";
	boardstate2[10] = "null";
	boardstate2[11] = "null";
	boardstate2[12] = "null";
	boardstate2[13] = "null";
	boardstate2[14] = "null";
	boardstate2[15] = "null";

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
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 1;
				//var no_others = true;
				loop112: {
				for(i2_; i2_ < 5; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c1") {
								idt3 = "#c3";
								idt4 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c2") {
								idt3 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop113: {
		for(i2 = 1; i2 < 5; i2++) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 1;
				loop114: {
				for(i2_; i2_ < 5; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 1;
				//var no_others = true;
				loop122: {
				for(i2_; i2_ < 9; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c5") {
								idt3 = "#c7";
								idt4 = "#c8";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c6") {
								idt3 = "#c8";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop123: {
		for(i2 = 5; i2 < 9; i2++) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 1;
				loop124: {
				for(i2_; i2_ < 9; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 1;
				//var no_others = true;
				loop132: {
				for(i2_; i2_ < 13; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c9") {
								idt3 = "#c11";
								idt4 = "#c12";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c10") {
								idt3 = "#c12";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop133: {
		for(i2 = 9; i2 < 13; i2++) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 1;
				loop134: {
				for(i2_; i2_ < 13; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 1;
				//var no_others = true;
				loop142: {
				for(i2_; i2_ < 17; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c13") {
								idt3 = "#c15";
								idt4 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c14") {
								idt3 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop143: {
		for(i2 = 13; i2 < 17; i2++) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 1;
				loop144: {
				for(i2_; i2_ < 17; i2_++) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 1;
				//var no_others = true;
				loop212: {
				for(i2_; i2_ > 0; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c4") {
								idt3 = "#c2";
								idt4 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c3") {
								idt3 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop213: {
		for(i2 = 4; i2 > 0; i2--) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 1;
				loop214: {
				for(i2_; i2_ > 0; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 1;
				//var no_others = true;
				loop222: {
				for(i2_; i2_ > 4; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c8") {
								idt3 = "#c6";
								idt4 = "#c5";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c7") {
								idt3 = "#c5";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop223: {
		for(i2 = 8; i2 > 4; i2--) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 1;
				loop224: {
				for(i2_; i2_ > 4; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 1;
				//var no_others = true;
				loop232: {
				for(i2_; i2_ > 8; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c12") {
								idt3 = "#c10";
								idt4 = "#c9";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c11") {
								idt3 = "#c9";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop233: {
		for(i2 = 12; i2 > 8; i2--) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 1;
				loop234: {
				for(i2_; i2_ > 8; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 1;
				//var no_others = true;
				loop242: {
				for(i2_; i2_ > 12; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c16") {
								idt3 = "#c14";
								idt4 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c15") {
								idt3 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop243: {
		for(i2 = 16; i2 > 12; i2--) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 1;
				loop244: {
				for(i2_; i2_ > 12; i2_--) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 4;
				//var no_others = true;
				loop312: {
				for(i2_; i2_ < 17; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c1") {
								idt3 = "#c9";
								idt4 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c5") {
								idt3 = "#c13";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop313: {
		for(i2 = 1; i2 < 17; i2+=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 4;
				loop314: {
				for(i2_; i2_ < 17; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 4;
				//var no_others = true;
				loop322: {
				for(i2_; i2_ < 18; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c2") {
								idt3 = "#c10";
								idt4 = "#c14";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c6") {
								idt3 = "#c14";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop323: {
		for(i2 = 2; i2 < 18; i2+=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 4;
				loop324: {
				for(i2_; i2_ < 18; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 4;
				//var no_others = true;
				loop332: {
				for(i2_; i2_ < 19; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c3") {
								idt3 = "#c11";
								idt4 = "#c15";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c7") {
								idt3 = "#c15";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop333: {
		for(i2 = 3; i2 < 19; i2+=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 4;
				loop334: {
				for(i2_; i2_ < 19; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 + 4;
				//var no_others = true;
				loop342: {
				for(i2_; i2_ < 20; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c4") {
								idt3 = "#c12";
								idt4 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c8") {
								idt3 = "#c16";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop343: {
		for(i2 = 4; i2 < 20; i2+=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 + 4;
				loop344: {
				for(i2_; i2_ < 20; i2_+=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 4;
				//var no_others = true;
				loop412: {
				for(i2_; i2_ > -3; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c13") {
								idt3 = "#c5";
								idt4 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c9") {
								idt3 = "#c1";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop413: {
		for(i2 = 13; i2 > -3; i2-=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 4;
				loop414: {
				for(i2_; i2_ > -3; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 4;
				loop422: {
				for(i2_; i2_ > -2; i2_-=4) {
					idt2 += i2_;
					//var no_others = true;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c14") {
								idt3 = "#c6";
								idt4 = "#c2";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c10") {
								idt3 = "#c2";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop423: {
		for(i2 = 14; i2 > -2; i2-=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 4;
				loop424: {
				for(i2_; i2_ > -2; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 4;
				//var no_others = true;
				loop432: {
				for(i2_; i2_ > -1; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c15") {
								idt3 = "#c7";
								idt4 = "#c3";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c11") {
								idt3 = "#c3";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop433: {
		for(i2 = 15; i2 > -1; i2-=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 4;
				loop434: {
				for(i2_; i2_ > -1; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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
			var idt = "#c";
			var idt2 = "#c";
			var idt3, idt4;
			idt += i2;
			
			if($(idt).attr("class") != "null") {
				var i2_ = i2 - 4;
				//var no_others = true;
				loop442: {
				for(i2_; i2_ > 0; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") == "null") {
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
							$(idt2).attr("class", "null");
							if($(idt).attr("id") == "c16") {
								idt3 = "#c8";
								idt4 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
								$(idt3).css("backgroundImage", $(idt4).css("backgroundImage"));
								$(idt4).css("backgroundImage", "none");
								$(idt3).attr("class", $(idt4).attr("class"));
								$(idt4).attr("class", "null");
							}
							if($(idt).attr("id") == "c12") {
								idt3 = "#c4";
								$(idt2).css("backgroundImage", $(idt3).css("backgroundImage"));
								$(idt3).css("backgroundImage", "none");
								$(idt2).attr("class", $(idt3).attr("class"));
								$(idt3).attr("class", "null");
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
					$(idt).attr("class", "null");
				}*/
			}
		}
		}

		loop443: {
		for(i2 = 16; i2 > 0; i2-=4) {
			var idt = "#c";
			var idt2 = "#c";
			idt += i2;
			if($(idt).attr("class") == "null") {
				var i2_ = i2 - 4;
				loop444: {
				for(i2_; i2_ > 0; i2_-=4) {
					idt2 += i2_;
					if($(idt2).attr("class") != "null") {
						$(idt).attr("class", $(idt2).attr("class"));
						$(idt).css("backgroundImage", $(idt2).css("backgroundImage"));
						$(idt2).attr("class", "null");
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

	function addNew() {
		var j = Math.floor(Math.random() * $("div.null").length);
		if(Math.random() < 0.5) {
			$("div.null")[j].style.backgroundImage = "url(meme2.gif)";
			$("div.null")[j].setAttribute("class", "meme2");
		}
		else {
			$("div.null")[j].style.backgroundImage = "url(meme4.gif)";
			$("div.null")[j].setAttribute("class", "meme4");
		}
	}

	function checkGame() {
		var gameOver = true;
		$("#container > div").each(function(index, element) {
			if($(this).attr("class") == "null") {
				gameOver = false;
				return false;
			}
		});
		if(gameOver) {
			$("#container > div").attr("class", "null");
			$("div.null").css("backgroundImage", "none");
			alert("Game Over");
			newGame();
		}
		var didjaWin = false;
		$("#container > div").each(function(index, element) {
			if($(this).attr("class") == "meme2048") {
				didjaWin = true;
				return false;
			}
		});
		if(didjaWin) {
			$("#container > div").attr("class", "null");
			$("div.null").css("backgroundImage", "none");
			alert("YOU WON!!!!!");
			newGame();
		}
	}
	
	$("div > div").click(function() {
		alert($(this).attr("class"));
	});

    	$(document).keydown(function(e) {
    	switch(e.which) {
		case 37: 
			swipeLeft();
			addNew();
			checkGame();
			break;

		case 38:
			swipeUp();
			addNew();
			checkGame();
			break;
		case 39:
			swipeRight();
			addNew();
			checkGame();
			break;
		case 40:
			swipeDown();
			addNew();
			checkGame();
			break;
		default:
	}
			
    	e.preventDefault();
    	});

});
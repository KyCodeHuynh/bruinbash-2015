var pages = ["#home", "#concert1", "#film", "#festival", "#tickets", "#faq", "#thanks"]
var colors = ["#grad1", "#grad2", "#grad3"] 
var faqcontent = [
"<b>How do I get in?</b><br>Enter the lottery <a target = \"_blank\" href = \"https://oss.ticketmaster.com/aps/uclacto/EN/buy/quickbuy/1004\" >here</a>.<br><br><b>How do I log in?</b><br>If you have used the UCLA Central Ticket Office's site before, your Account ID is your BruinCard number. If you don't remember your password click on the \"Forgot Your Password?\" link and a temporary password will be sent to you. If you have never used CTO's site, creating an account only takes a couple of seconds.<br><br><b>How does the lottery work?</b><br>The lottery opens Monday, September 22nd at 10am. It closes Friday, September 26th at 4pm. You can enter the lottery any time during this window. Entering early does not increase your chances of being selected. You will receive an email after the lottery closes informing you if you received a seat. To claim your wristband, you must go to the IM Field between 12pm-6pm on Monday, September 29th with your BruinCard. Staff will scan your BruinCard and wristband you.<br><br><b>Can I enter the lotteries for the concert and both movie screenings?</b><br>No. You can only enter the lottery for one event, either the concert or a film.<br><br><b>Can I transfer my ticket to a friend’s BruinCard?</b><br>No.<br><br><b>Can I switch my film ticket to with a concert ticket, or vice-versa?</b><br>No.<br><br><b>Why is there a lottery this year?</b><br>An online system is the fairest ticket distribution method. Students participating in Volunteer Day will be off-campus Monday morning. This system gives students who volunteer that day an equal shot to receive tickets. Additionally, this system is fairer to commuting students, transfer students, non-traditional students, and students who prefer to be sleeping instead of standing in line at 5am.", 
"<b>Where is LA Tennis Center?</b><br>See the map <a href = \"https://www.google.com/maps/@34.070075,-118.447991,17z\" target = \"_blank\" >here</a>. The venue is on campus across from De Neve Residence Halls.<br><br><b>How does wristbanding work?</b><br>If you are selected for a concert spot, a digital ticket placed on your BruinCard. You must bring your BruinCard to the IM Field on Monday, September 29th between 12pm and 6pm. We will scan your BruinCard to confirm you are a currently registered UCLA undergraduate that was awarded a ticket, and then we will wristband you.<br><br><b>How does seating work?</b><br>We will distribute different colored wristbands throughout the day. These colors correspond to the order that students will be let into the venue. We will draw the colors in a random order and announce the order of colors on the IM Field. Arriving early to claim your wristband does not mean you will be let in first.<br><br><b>How can I sit with my friends?</b><br>Go to the IM Field with the group you want to sit with. After your BruinCards are scanned, ask for your entire group to be given the same color wristband.<br><br><b>Can I pick up a wristband for my friend?</b><br>No, students may not use multiple BruinCards to pick up wristbands for fellow students. One wristband per BruinCard per student. <br><br><b>When do doors open? When does the show begin?</b><br>Doors open at 6pm. Show begins at 8pm.<br><br><b>Why can’t you hold it in Pauley?</b><br>The summer flooding damaged Pauley Pavilion’s court and facilities. They won’t be completely restored until late October.<br><br><b>Why can’t you hold it in Drake?</b><br>There is a game scheduled in that venue on Sunday 9/28. There is not enough time to build a stage on the field.<br><br><b>Why can’t you just book Kanye?</b><br>The electric bill would be too high if we turned on All of the Lights.<br>", 
"<b>How do I get into the films?</b><br>If you were selected to receive a seat at a film, you must bring your BruinCard to the IM Field on Monday, September 29th between 12pm and 6pm. Students may not use multiple BruinCards to pick up wristbands for their friends. One wristband per BruinCard per student.<br><br><b>Where are the film screenings?</b><br>Kill the Messenger will be screened in Ackerman Grand Ballroom. Beyonce and Jay-Z: On The Run will be screened in the Carnesale Commons Palisades Room.", 
"<b>What's at the festival?</b><br>4 food trucks, plus a Kettle Korn booth, will be selling food all night long. Bruin Bash sponsors like Coca-Cola and Little Miracles will be hosting giveaways. UCLA Transportation will be screenprinting shirts. Power 106 will be playing music.<br><br><b>How do I get in?</b><br>BruinCards are required for festival entry. All students are welcome; No wristbands required. Bring cash or a credit card for the food trucks.", 
"<b>Where can I get a BruinCard? </b><br>123 Kerckhoff Hall.<br><br><b>When can I get a BruinCard? </b><br>BruinCard office hours are posted <a href = \"https://secure.bruincard.ucla.edu/bcw/web/Contactus/contactus.aspx\" target = \"_blanlk\" >here</a>. <br><br><b>What can I bring?</b><br>Only small purses will be allowed into LA Tennis Center, Ackerman Grand Ballroom, Carnesale Commons, and the IM Field. Large bags and backpacks will be turned away at security checks before entrance into the venues. Alcohol and drug paraphernalia will not be tolerated. Students under the influence will not be admitted. Wristband required at entry to concert and films. BruinCard required for entry to festival."]

var synop1 = "<div class = \"topbuff\" > ACKERMAN GRAND BALLROOM<br>8 PM<br> </div><div class = \"topbuff\" > <a href = \"https://www.youtube.com/watch?v=VW4XO-52ubE:\" target=\"_blank\"> WATCH THE TRAILER </a> <br><br></div><div class =  \"syn\">Two-time Academy Award nominee Jeremy Renner (“The Bourne Legacy”) leads an all-star cast in a dramatic thriller based on the remarkable true story of Pulitzer Prize-winning journalist Gary Webb. Webb stumbles onto a story which leads to the shady origins of the men who started the crack epidemic on the nation’s streets…and further alleges that the CIA was aware of major dealers who were smuggling cocaine into the U.S., and using the profits to arm rebels fighting in Nicaragua. Despite warnings from drug kingpins and CIA operatives to stop his investigation, Webb keeps digging to uncover a conspiracy with explosive implications. His journey takes him from the prisons of California to the villages of Nicaragua to the highest corridors of power in Washington, D.C. – and draws the kind of attention that threatens not just his career, but his family and his life.</div>"

var synop2 = "<div class = \"topbuff\" >Carnesale Commons Palisades room<br>8 PM<br></div><div class = \"topbuff\" ><a href = \"https://www.youtube.com/watch?v=bB-GuDzQvzY\" target=\"_blank\"> WATCH THE TRAILER </a> <br><br></div><div class =  \"syn\"> Beyoncé and Jay-Z's On the Run features the superstars in their first collaborative tour -- and their first HBO concert event. Taping September 12 and 13 at Paris' Stade de France, this special features the superstars performing more than 40 songs. Although 17-time Grammy winner Beyoncé and 19-time Grammy winner Jay-Z have recorded numerous hit songs together (including \"Crazy in Love\" and \"Drunk in Love\") and have been special guests on each other's tours, \"On the Run Tour\" marks the first time the married couple has toured together on the same bill.</div>"

var thanks3 = "<div class=\"column\"><b>UCLA Campus Events Commission</b><br>Greg Kalfayan<br>Alex Johl<br>Stone Frankle<br><br><b>UCLA Cultural Affairs Commission</b><br>Irmary Garcia<br>Sal Mohizzo<br>Isaiah Lauwerys<br><br><b>UCLA Chancellor’s Office</b><br><br><b>UCLA Recreation</b><br>Mick Deluca<br>Kenn Heller<br>Rich Mylin<br>Lorrie Klimoski<br>Susan Brown<br>Dennis Koehne<br>Ignacio Vega<br>Kiran Mistry<br></div><div class=\"column\">Ryan Nelson<br>Jamie Andersen<br>Paul Brown<br>Luis Sanchez<br>Jason Zeck<br>Chett Miller<br>Edgar Torres<br><br><b>UCLA Events Office</b><br>Ella Gogel<br><br><b>UCLA Residential Life</b><br>Karen Hedges<br>Jazmin Dantzler<br><br><b>Associated Students UCLA</b><br>Tandy Girotti<br>Roy Champawat<br>Patty Zimmerman<br>Janine La Croix<br>Debbie Simmons<br></div><div class=\"column\">Cindy Bolton<br>John Mrwik<br><br><b>UCLA Central Ticket Office</b> <br>Raymond Mesa<br><br><b>UCLA Student Organizations, Leadership and Engagement</b><br>Kris Kaupalolo<br>Pam Cysner<br>Mike Cohn<br>Zoila De La Pena<br><br><b>UCLA True Bruin Welcome</b><br><br><b>Site Design</b><br>Rebecca Rusheen<br>Alexa Dobrowski<br>Keaton Boyle<br>Christian Gimber<br>Katie Shannon<br></div>"

var thanks2 = "<div class=\"column\"><b>UCLA Campus Events Commission</b><br>Greg Kalfayan<br>Alex Johl<br>Stone Frankle<br><br><b>UCLA Cultural Affairs Commission</b><br>Irmary Garcia<br>Sal Mohizzo<br>Isaiah Lauwerys<br><br><b>UCLA Chancellor’s Office</b><br><br><b>UCLA Recreation</b><br>Mick Deluca<br>Kenn Heller<br>Rich Mylin<br>Lorrie Klimoski<br>Susan Brown<br>Dennis Koehne<br>Ignacio Vega<br>Kiran Mistry<br>Ryan Nelson<br>Jamie Andersen<br>Paul Brown<br>Luis Sanchez<br>Jason Zeck<br>Chett Miller<br>Edgar Torres<br><br><b>UCLA Events Office</b><br>Ella Gogel<br><br></div><div class=\"column\"><b>UCLA Residential Life</b><br>Karen Hedges<br>Jazmin Dantzler<br><br><b>Associated Students UCLA</b>Tandy Girotti<br><br>Roy Champawat<br>Patty Zimmerman<br>Janine La Croix<br>Debbie Simmons<br>Cindy Bolton<br>John Mrwik<br><br><b>UCLA Central Ticket Office</b> <br>Raymond Mesa<br><br><b>UCLA Student Organizations, Leadership and Engagement</b><br>Kris Kaupalolo<br>Pam Cysner<br>Mike Cohn<br>Zoila De La Pena<br><br><b>UCLA True Bruin Welcome</b><br><br><b>Site Design</b><br>Rebecca Rusheen<br>Alexa Dobrowski<br>Keaton Boyle<br>Christian Gimber<br>Katie Shannon<br></div>"

var thanks1 = "<b>UCLA Campus Events Commission</b><br>Greg Kalfayan<br>Alex Johl<br>Stone Frankle<br><br><b>UCLA Cultural Affairs Commission</b><br>Irmary Garcia<br>Sal Mohizzo<br>Isaiah Lauwerys<br><br><b>UCLA Chancellor’s Office</b><br><br><b>UCLA Recreation</b><br>Mick Deluca<br>Kenn Heller<br>Rich Mylin<br>Lorrie Klimoski<br>Susan Brown<br>Dennis Koehne<br>Ignacio Vega<br>Kiran Mistry<br>Ryan Nelson<br>Jamie Andersen<br>Paul Brown<br>Luis Sanchez<br>Jason Zeck<br>Chett Miller<br>Edgar Torres<br><br><b>UCLA Events Office</b><br>Ella Gogel<br><br><b>UCLA Residential Life</b><br>Karen Hedges<br>Jazmin Dantzler<br><br><b>Associated Students UCLA</b>Tandy Girotti<br>Roy Champawat<br>Patty Zimmerman<br>Janine La Croix<br>Debbie Simmons<br>Cindy Bolton<br>John Mrwik<br><br><b>UCLA Central Ticket Office</b> <br>Raymond Mesa<br><br><b>UCLA Student Organizations, Leadership and Engagement</b><br>Kris Kaupalolo<br>Pam Cysner<br>Mike Cohn<br>Zoila De La Pena<br><br><b>UCLA True Bruin Welcome</b><br><br><b>Site Design</b><br>Rebecca Rusheen<br>Alexa Dobrowski<br>Keaton Boyle<br>Christian Gimber<br>Katie Shannon<br>"

var ticketcontent = [
"<a target=\"_blank\" href=\"https://oss.ticketmaster.com/aps/uclacto/EN/buy/quickbuy/1004\"><div id = \"click\"></div></a><div id = \"lot\"></div><div id = \"expl\">Lottery opens Monday 9/22 at 10am.<br>Lottery closes Friday 9/26 at 4pm. <br><br>Entering early does not increase your chances.<br>See FAQ page for detailed ticketing information.</div>", 
"<a href = \"http://open.spotify.com/user/uclacec/playlist/3ebXbQGwlIWJXnyTz6Ue0V\" target = \"_blank\"><div id = \"spotpic\"></div></a><div id = \"expl\">Click <a target=\"_blank\" href= \"http://open.spotify.com/user/uclacec/playlist/3ebXbQGwlIWJXnyTz6Ue0V\" >HERE</a> to follow UCLACEC & the 2014 Bruin Bash playlist on Spotify for a chance to win early access passes to Bruin Bash. Then check your email on 9/29 to see if you're 1 of 10 lucky Spotify users to win floor access. Full rules <a href = \"http://bit.ly/1C4URZz\" target = \"_blank\">here.</a></div>"
]

function loadColumn(){
	width = $(window).width(); 
	if (width > 700)
		$("#columns").html(thanks3); 
	else if (width > 450)
		$("#columns").html(thanks2); 
	else 
		$("#columns").html(thanks1); 
	
}
function changePoster(one) {
	//alert("changing poster"); 
	if (one) {
		$("#poster").css({"background-image" : "url('./imgs/ktm.jpg')"}); 
		height=$("#poster").height();
		width= height / 1.481966; 
		$("#synop").html(synop1);
		wrapWidth = $(".contentwrap").width(); 
		if (width/wrapWidth > .45){
			width = wrapWidth*.42;
			height = width * 1.481966;
		}
		$(".fact").removeClass("fact"); 
		$("#leftfilm").addClass("fact"); 
		
	}
	else
	{
		$("#poster").css({"background-image" : "url('./imgs/otr.jpg')"}); 
		height=$("#poster").height();
		width= height / 1.48125; 
		wrapWidth = $(".contentwrap").width(); 
		if (width/wrapWidth > .45){
			width = wrapWidth*.45;
			height = width * 1.48125;
		}
		$("#synop").html(synop2); 
		$(".fact").removeClass("fact"); 
		$("#rightfilm").addClass("fact"); 
	}

	$("#poster").css({"height" : height.toString() + 'px'});
	$("#poster").css({"width" : width.toString() + 'px'});
	$("#synop").css({"height": height.toString() + 'px'});
	$("#synop").css({"width": width.toString() + 'px'}); 
	parentWidth = $(".contentwrap").width(); 
	widthFrac = width/parentWidth*100; 
	marg = (50-widthFrac);
	$("#poster").css({"margin-left" : marg.toString() + '%'}); 
	
}
function scroll(next) {
	active =  $(".active"); 
	active.removeClass('active');
	if(next == "#home") {
		$("#link1").addClass('active'); 
		if(document.location.hash == "" || document.location.hash == "#home")
		{
			$(".leftArrow").css('display', 'none'); 
		}
		$(".leftArrow").fadeOut(); 
	}
	else {
		$(".leftArrow").fadeIn(); 
		$("#menu").fadeIn(); 
	}
	if (next == "#concert1")
		$("#link2").addClass('active'); 
	if (next == "#film")
		$("#link3").addClass('active'); 
	if (next == "#festival")
		$("#link4").addClass('active'); 
	if (next == "#tickets")
		$("#link5").addClass('active'); 
	if (next == "#faq")
		$("#link6").addClass('active');  
	if (next == "#thanks") {
		$("#link7").addClass('active'); 
		if (document.location.hash == "#thanks")
		{
			
			$(".rightArrow").css('display', 'none'); 
		}
		$(".rightArrow").fadeOut(); 
	}
	else 	
		$(".rightArrow").fadeIn(); 
	$('html, body').animate({scrollLeft: $(next).offset().left}, 800,
            function() { 
				window.location.hash = next; 
				changePoster(true); 
				loadColumn(); 
			});
    return false;
}

function scrollLeft(current) {
	index = $.inArray(current, pages); 
	next = index-1;
	if(next >= 0)	
		scroll(pages[next]); 
	
}

function scrollRight(current) {
	index = $.inArray(current, pages); 
	next = index+1;
	if(next < pages.length)	
		scroll(pages[next]);
	
}
 var b1 = 0; 
 var b2 = 100; 
 var y1 = 0;
 var y2 = 100; 
 var yellow = true; 
function updateGradient() {	
	//defaultgrads = "linear-gradient(rgba(0,165,229,.75), rgba(255,242,0,.75))";
	//$('#wrap').css({background: defaultgrad});
	if(y1 == 100)
	{
		yellow = false;
		y1 = 0; 
		y2 = 100; 
	}
	if(b1 == 100)
	{
		yellow = true; 
		b1 = 0;
		b2 = 100; 
	}
	grad1 = "linear-gradient(rgba(0,165,229,.75)"+(y1-100)+"%, rgba(255,242,0,.75)"+y1+"%, rgba(0,165,229,.75)"+y2+"%) ";
	grad2 = "linear-gradient(rgba(255,242,0,.75)"+(b1-100)+"%, rgba(0,165,229,.75)"+b1+"%, rgba(255,242,0,.75)"+b2+"%) ";
	if (yellow)
	{
		y1 ++; 
		y2 ++; 
		grad = grad1;
	} else {
		b1++;
		b2++; 
		grad = grad2; 
	}
	$('#wrap').css({background: grad});
}

setInterval(updateGradient,50);	
$(document).keydown(function(e) {
    if (e.keyCode == 37 ) {
		scrollLeft(document.location.hash); 
    } 
	else if(e.keyCode == 39) {
		scrollRight(document.location.hash); 
	}
  });	

$(document).ready(function(){ 
	
	hash = document.location.hash; 
	$("#answers").html(faqcontent[0]); 
	$("#tickcontent").html(ticketcontent[0]); 
	changePoster(true); 
	$("#infotext").html("<br>Chance the Rapper is a breakthrough hip hop artist from Chicago, Illinois. His newest mixtape, Acid Rap, has been extremely well-received by the hip hop community, along with his numerous collaborations with artists like Vic Mensa, Ab-Soul, and Childish Gambino. ");
	//loadColumn(); 
	if( hash != "")
		scroll(document.location.hash);
	else
		scroll("#home"); 
	$(".left").click(function(){ 
		scrollLeft(document.location.hash);
   }); 
   	$(".right").click(function(){
		 scrollRight(document.location.hash); 
   }); 
   $("#link1").click(function(){
		scroll("#home"); 
	}); 
	$("#link2").click(function(){
		scroll("#concert1"); 
	}); 
	$("#link3").click(function(){
		scroll("#film"); 
	}); 
	$("#link4").click(function(){
		scroll("#festival"); 
	}); 
	$("#link5").click(function(){
		scroll("#tickets"); 
	}); 
	$("#link6").click(function(){
		scroll("#faq"); 
	}); 
	$("#link7").click(function(){
		scroll("#thanks"); 
	});
	$("#star").click(function() {
		$(".info").fadeIn(); 
		$("#star").fadeOut();
		if ($(".tact").attr("id") == "o")
			$("#infotext").html("<br>Kandace Springs is an emerging singer/songwriter from Nashville, Tennessee, currently residing in New York City. Her soulful covers of Jhene Aiko's <i>\"The Worst\"</i> and Sam Smith's <i>\"Stay With Me\"</i> quickly caught the attention of many, including Blue Note, Capitol Records and SRP.");
		else
			$("#infotext").html("<br>Chance the Rapper is a breakthrough hip hop artist from Chicago, Illinois. His newest mixtape, Acid Rap, has been extremely well-received by the hip hop community, along with his numerous collaborations with artists like Vic Mensa, Ab-Soul, and Childish Gambino. ");
	}); 
	$("#x").click(function() {
		$(".info").fadeOut(); 
		$("#star").fadeIn();
	}); 
	$("#t1").click(function() { 
		$("#answers").html(faqcontent[0]); 
		$(".act").removeClass('act'); 
		$("#t1").addClass('act'); 
	});
	$("#t2").click(function() { 
		$("#answers").html(faqcontent[1]); 
		$(".act").removeClass('act'); 
		$("#t2").addClass('act'); 
	});
	$("#t3").click(function() { 
		$("#answers").html(faqcontent[2]); 
		$(".act").removeClass('act'); 
		$("#t3").addClass('act'); 
	});
	$("#t4").click(function() { 
		$("#answers").html(faqcontent[3]);
		$(".act").removeClass('act'); 
		$("#t4").addClass('act'); 		
	});
	$("#t5").click(function() { 
		$("#answers").html(faqcontent[4]);
		$(".act").removeClass('act'); 
		$("#t5").addClass('act'); 
	});
	$("#o").click(function() { 
		if ($(".tact").attr("id") != "o")
		{
			$("#changinglink").attr("href", "https://soundcloud.com/kandacesprings");
			$(".tact").removeClass("tact"); 
			$("#o").addClass("tact"); 
			$(".info").fadeOut(); 
			$("#star").fadeIn(); 
			$("#headlineimage").css({"background-image" : "url('./imgs/kandace.png')"}); 
			//$("#headlineimage").css({"background-size" : "60%"}); 
		}
	});
	$("#h").click(function() {
		if ($(".tact").attr("id") != "h")
		{
			$("#changinglink").attr("href", "https://soundcloud.com/chancetherapper"); 
			$(".tact").removeClass("tact"); 
			$("#h").addClass("tact"); 
			$("#headlineimage").css({"background-image" : "url('./imgs/chance.png')"}); 
			//$("#headlineimage").css({"background-size" : "65%"});
			$(".info").fadeOut();
			$("#star").fadeIn(); 
		}
	});
	
	
	$("#tix").click(function() {
		$(".tickact").removeClass("tickact"); 
		$("#tix").addClass("tickact"); 
		$("#tickcontent").html(ticketcontent[0]); 
	});
	$("#spo").click(function() {
		$(".tickact").removeClass("tickact"); 
		$("#spo").addClass("tickact"); 
		$("#tickcontent").html(ticketcontent[1]); 
	});
	$("#leftfilm").click(function() {
		changePoster(true); 
	});
	$("#rightfilm").click(function() {
		 changePoster(false); 
		
	});

	$(window).resize(function() {
		//alert($(window).width()); 
		scroll(document.location.hash); 
		
	}); 
	$("#lol").click(function() {
		$("html").css({"cursor" : "url('./imgs/kanye.cur'), auto"});
		
	}); 
		
}); 
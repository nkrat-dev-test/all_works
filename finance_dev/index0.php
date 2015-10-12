<!DOCTYPE html>
<html>
<head>
<title>FINANCE 3</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="description" content=""> 
<meta name="keywords" content=""> 

<link rel="icon" type="image/svg+xml" href="images/favicon.svg">

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />


<link href="css/main.css" rel="stylesheet" type="text/css" media="screen"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,100,100italic,500,700,300italic,400italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<script src="http://malsup.github.com/jquery.form.js"></script>


<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->

<script src="js/min/looper-min.js"></script>
<script src="js/head.js"></script>
<script  type="text/javascript"  src="https://rawgithub.com/WickyNilliams/headroom.js/master/src/jQuery.headroom.js"></script>

<script> 
        $(document).ready(function() { 
            $('#cform').ajaxForm(function() { 
	            $("#em").val('');
	            $("#sb").val('');
	            $("#feed").val('');
	             $("#submit").prop('disabled', true);
                 $("#submit").addClass('disable');
	            $('.thk').fadeIn(0); 
                $('.thk').addClass('slideDown2');
setTimeout(function(){
$('.thk').fadeOut(800);
}, 2000); 
setTimeout(function(){
$('.thk').removeClass('slideDown2');
}, 2801); 
            }); 
        }); 
</script> 	


</head>
<body>
<div class="thk off">Ваше повідомлення надіслано. Дякуємо!</div>	
<div id="page-preloader">
		<div class="cube">
		<div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
</div>
	</div>


<div class="popup off">
	<div class="x" id="close"><?php include('images/cross.php');?></div>
	<div class="fig big_hero-1 off"><img data-aload="images/s1.jpg" src="images/s1.jpg" class="imgs"></div>
	<div class="fig big_hero-2 off"><img data-aload="images/s2.jpg" src="images/s2.jpg" class="imgs"></div>
	<div class="fig big_hero-3 off"><?php include('table.php');?></div>
	<div class="fig big_hero-4 off"><?php include('imp.php');?></div>
</div>	





<header>
	<div class="logo"><a href="index.php"><?php include('images/logo/logo.php'); ?></a></div>
	<div class="nav" id="nav">
		<ul>
			<li><a class="active" href="#start">Головна</a></li>
			<li><a href="#project">Про проект</a></li>
			<li><a href="#how_it_works">Як працює</a></li>
			<li><a href="#ec">Quant</a></li>
			<li><a href="#secure">Безпека</a></li>
			<li><a href="#expereince">Досвід</a></li>
			<li><a href="#contacts">Зв'язок</a></li>
		</ul>
	</div>
</header>


<section class="start" id="start">
	
	<div class="overlay">
		<div class="hello"><img src="images/st.svg" class="imgs"></div>
		<div class="nb"></div>
		<div class="d animate bounceMouse"></div>
	</div>
	
	<div data-looper="go" class="looper xfade">
    <div class="looper-inner">
	    
	    
	    
	    
	   
	    
	    
       
        
        <div class="item">
            <div style="width:100%; height: 100%; position: absolute; background: url('images/bgs/01.jpg') center center no-repeat; background-size: cover;"></div>
        </div>
        
         <div class="item">
            <div style="width:100%; height: 100%; position: absolute; background: url('images/bgs/02.jpg') center center no-repeat; background-size: cover;"></div>
        </div>
        
         <div class="item">
            <div style="width:100%; height: 100%; position: absolute; background: url('images/bgs/03.jpg') center center no-repeat; background-size: cover;"></div>
        </div>
        
         <div class="item">
            <div style="width:100%; height: 100%; position: absolute; background: url('images/bgs/04.jpg') center center no-repeat; background-size: cover;"></div>
        </div>
        
         <div class="item">
            <div style="width:100%; height: 100%; position: absolute; background: url('images/bgs/05.jpg') center center no-repeat; background-size: cover;"></div>
        </div>
       
    </div>
</div>
</section>



<div id="project">	
<section class="section" id="about">
	<div class="marker m1" id="s1"></div>
	<div class="inblock">
		<div class="block_content cleft">
			<div class="text t120" id="t1">
				<h1>Про проект</h1>
				<p>Регіональна фінансова екосистема, яка дозволяє створити інноваційний та успішний регіон.
Netopay Finance об’єднує сучасні фінансові рішення та інформаційні технології, забезпечує ефективну взаємодію населення, бізнесу та регіональних/муніципальних органів влади, а також дає можливість використання еквівалентів цінностей в електронному вигляді в якості засобу взаєморозрахунків всередині регіону</p>
			</div>
		</div>
		
		
	  <div class="animation">
	    <div class="elem p1"></div>
	    <div class="elem p2"></div>	
	    <div class="elem p3"></div>	
	    <div class="elem p4"></div>	
	    <div class="elem p5"></div>
	    <div class="elem p6"></div>			
	  </div>
	  
	  	
	</div>
</section>



<section class="section light" id="advantages">
	<div class="marker m2"></div>
	<div class="inblock">
		<div class="block_content cright">
			<div class="text t100" id="t2">
				<h1>Переваги</h1>
				<ul>
					<li>Підвищення статків та рівня життя населення</li>
					<li>Створення рівних умов ведення бізнесу та зниження податкового навантаження</li>
					<li>Розвиток бізнесу та створення нових робочих місць</li>
					<li>Цільове та прозоре використання бюджетних коштів</li>
					<li>Покращення інфраструктури, рівня соціального забезпечення та достатку регіону</li>
					<li>Підвищення інвестиційної привабливості регіону</li>
				</ul>
			</div>
		</div>
		
		
	  <div class="animation">
	    <div class="elem g1"></div>
	    <div class="elem g2"></div>	
	    <div class="elem g3"></div>	
	    <div class="elem g4"></div>
	    <div class="elem g5"></div>	
	  </div>
	  
	  	
	</div>
</section>
</div>



<section class="section works" id="how_it_works">
	<div class="marker m3"></div>
	<div class="inblock">
		<div class="block_content cleft">
			<div class="text t120" id="t3">
				<h1>Як це працює</h1>
				<p style="font-weight: 400;">Регіональна фінансова екосистема, яка дозволяє створити інноваційний та успішний регіон.
Netopay Finance об’єднує сучасні фінансові рішення та інформаційні технології, забезпечує ефективну взаємодію населення, бізнесу та регіональних/муніципальних органів влади, а також дає можливість використання еквівалентів цінностей в електронному вигляді в якості засобу взаєморозрахунків всередині регіону</p>
			</div>
			<div class="schemes">
				<div class="sch" id="sch1">Схема А</div>
				<div class="sch" id="sch2">Схема Б</div>
			</div>
		</div>
		
		
	  <div class="animation gears cright">
		  <div class="gear1 spin2"></div>
	      <div class="gear2 spin"></div>
	      <div class="gear3 spin"></div>
	  </div>
	  
	  	
	</div>
</section>

<div id="ec">
<section class="section qr" id="quant">
    <div class="marker m4"></div>
	  <div class="container">
		<div class="row">
			<div class="col-md-4">
				<h1 class="white" id="t4" style="visibility: hidden;">Quant.<span class="q">Regio</span></h1>
			    <p id="t5" style="visibility: hidden;">Рассказываем юзеру о квантах. бла-бла-бла. Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. </p>
			 
			</div>
			<div class="col-md-4 pulse2"><?php include('images/quant.php');?></div>
			<div class="col-md-4">
				<p style="margin-top:65px; visibility: hidden; padding-top: 70px;" id="t6" >
				Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Grid classes apply to devices with screen widths. 
			</p>
			
			</div>
		</div>
		<div class="examples">
			<h2 class="center">Приклад використання Quant</h2>
			<div class="examples_block">
				<div class="one_example">
					<div class="ex_icon"><?php include('images/icons/1_01.php');?></div>
					<div class="ex_anno">Користувач обирає в якості методу оплати товару Netopay Finance</div>
				</div>
				
				<div class="one_example">
					<div class="ex_icon"><?php include('images/icons/1_02.php');?></div>
					<div class="ex_anno">На екрані смартфону відображається штрих-код товару для сканування</div>
				</div>
				
				<div class="one_example">
					<div class="ex_icon"><?php include('images/icons/2_03.php');?></div>
					<div class="ex_anno">Користувач підтверджує платіж введенням PIN-коду<br>в телефоні</div>
				</div>
				
				<div class="one_example">
					<div class="ex_icon"><?php include('images/icons/2_04.php');?></div>
					<div class="ex_anno">Касир отримує повідомлення про надходження коштів і відпускає товар</div>
				</div>
				
			</div>
		</div>
	</div>
	  
  
</section>



<section class="section sky" id="rules">
	<div class="marker m5"></div>
	<div class="inblock-r">
		<h1 class="center hpad" id="t7" style="visibility: hidden;">Свої правила для регіону</h1>
		<p class="small_text center" id="t8" style="visibility: hidden; font-weight: 400;">
			Блок о том, что в каждом регионе установлены свои правила и кратко про дифференциацию расходов/доходов на экологию, медицину, образование и другие сферы. Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any .col-md-* class to an element will not only
affect its styling on medium devices but also on large devices if a .col-lg-* class is not present.
		</p>
		<div class="regio_btn" id="rb" style="visibility: hidden">Приклад</div>
	</div>
</section>
<section class="hidden_sky"></section>
	
<section class="section sep" id="t9"></section>

<section class="section summer_sky">
	<div class="marker m6"></div>
	<div class="inblock-r">
	  <div class="flags">
		  <div class="flag">
			  <div class="d_ico"><?php include('images/eu.php');?></div>
			  <div class="d_anno">Відповідає Директивам Євросоюзу</div>
		  </div>
		  <div class="flag">
			  <div class="d_ico"><?php include('images/ua.php');?></div>
			  <div class="d_anno">Відповідає законам України</div>
		  </div>
	  </div>
  </div>
</section>
</div>


<section class="section indigo" id="secure">
	<div class="marker ms"></div>
	<div class="inblock-r">
		<h1 class="center">Без банків. Безпечно.</h1>
		<p class="small_text center" id="t8" style="font-weight: 400;">
			Навідміну від існуючої системи, у Netopay Finance відсутні посередники у вигляді банків, платіжних систем і фінансових установ та зберігається анонімність користувачів
		</p>
		
		<div class="examples_sec">
			
			<div class="examples_block_sec">
				<div class="one_example_sec" id="i1">
					<div class="ex_icon_sec"><img src="images/icons/human.svg"></div>
					<div class="ex_anno_sec">HumanID</div>
					<div class="ex_anno_sec_add">Авторизація за допомогою відбитків пальців</div>
				</div>
				
				<div class="one_example_sec" id="i2">
					<div class="ex_icon_sec"><img src="images/icons/phone.svg"></div>
					<div class="ex_anno_sec">PhoneID</div>
					<div class="ex_anno_sec_add">Авторизація за допомогою смартфону та технології одноразових паролей</div>
				</div>
				
				<div class="one_example_sec" id="i3">
					<div class="ex_icon_sec"><img src="images/icons/sim.svg"></div>
					<div class="ex_anno_sec">SimID</div>
					<div class="ex_anno_sec_add">Авторизація за допомогою мобільного телефону,<br>SIM-Картки та PIN</div>
				</div>
				
				<div class="one_example_sec" id="i4">
					<div class="ex_icon_sec"><img src="images/icons/token.svg"></div>
					<div class="ex_anno_sec">TokenID</div>
					<div class="ex_anno_sec_add">Авторизація за допомогою смарт-картки та PIN</div>
				</div>
				
			</div>
		</div>
		
		<!--<div class="secure_block">
			<div class="one_secure">
				Пользователи — физические лица, субъекты хозяйственной деятельности и органы региональной (муниципальной) власти
			</div>
			<div class="one_secure">
				Доступ к платежной системе в рамках Netopay Finance возможен через различные каналы как online так и offline (интернет, GSM, NFC, Bluetooth, QR-коды)
			</div>
			<div class="one_secure">
				Для подтверждения права доступа к Netopay Finance и подтверждения платежных транзакций, пользователям предлагаются различные методы авторизации с помощью сервиса GAUS — Global Authorization Service
			</div>
			<div class="one_secure">
				Платформа Netopay предоставляет необходимые компоненты для выпуска (эмиссии) и учета эквивалентов ценностей в электронном виде – всех типов Quant
			</div>
		</div>-->
		
	</div>
</section>





<section class="section ultralight top_beams" id="expereince">
	<div class="inblock-r">
		<h1 class="center">Досвід</h1>
		<p class="center">Аналогічні проекти в Німеччині</p>
		<div class="projects">
			<?php include('projects.php');?>
		</div>
	</div>
</section>


<section class="section pres">
	<div class="marker m7"></div>
	<div class="inblock-r center">
		<div class="d_ico" id="t8"><a href="pdf/Netopay_Finance_RU.pdf"><?php include('images/get.php');?></a></div>
		<div class="d_anno download" id="t9">Завантажити PDF (0.7MB)</div>
	</div>
</section>

<section class="section" id="contacts">
	<h1 class="center">Співпраця</h1>
	<p class="center">
		На сьогодні Netopay Finance є ефективним інструментом боротьби з кризою та<br>створення умов для розвитку регіону/міста/галузі. Почни зміни з себе!
	</p>
	<div class="container" style="margin-top: 70px;">
			<div class="row">
			  
				<div class="col-md-6">
					<form role="form" id="cform" method="post" action="notify.php">
  <div class="form-group">
    
    <input type="email" class="form-control" style="padding: 30px 20px 30px 20px; font-size: 16px;" name="email"  id="em" onkeyup="check();" placeholder="E-mail">
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" style="padding: 30px 20px 30px 20px; font-size: 16px;" name="subj"  id="sb" onkeyup="check();"  placeholder="Тема повідомлення">
  </div>
  

 
  <div class="form-group">
   <textarea class="form-control" style="padding: 20px 20px 20px 20px; resize: none; font-size: 16px;" name="message" id="feed" rows="10" placeholder="Повідомлення"></textarea>
  </div>
  <button type="submit" id="submit" class="mybtn btnfix disable" disabled>Надіслати</button>
</form>

	 <script>
	
  function check() {
  //var phone = $.trim($("#ph").val());
  var email = $.trim($("#em").val());
  var subj = $.trim($("#sb").val());
  
  if( email.length && subj.length >0) {
    $("#submit").prop('disabled', false);
    $("#submit").removeClass('disable');
  } else {
    $("#submit").prop('disabled', true);
    $("#submit").addClass('disable');
  }
}
	
	
</script>

				</div>
				<div class="col-md-1"></div>
				
				
				
				
				<div class="col-md-4 for_contacts">
					
					<div class="people">
					<p><span>N.KRAT Group запрошує до співпраці по впровадженню Netopay Finance:</span></p>
                     
                     <ul>
	                     <li>Регіональні та муніципальні органи влади</li>
	                     <li>Громадські та фінансові організації</li>
	                     <li>Населення</li>
	                     <li>Банки</li>
	                 </ul>    
                    </div> 
                     
                     
                     

						
					
					
					<div class="office">
					<!--<p><span>Центральний офіс</span></p>-->
					<p>N.KRAT Group GmbH</p>
						<p>
							вул. Рінгофенштрассе, 43<br>
                            44287 м. Дортмунд, Німеччина
						</p>
						
						<p>
							e-mail: de@nkrat.net<br>
                            Тел: +49 231 444 781 00<br>
                            Факс: +49 231 444 781 01
						</p>
						
					</div>

				</div>
				
				
				
				
			   	
			</div>
		</div>

		
		
		
		
		
	</div>
	
</section>

<div class="footer">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-2"><div class="flogo"><?php include('images/logo/footer_logo.php');?></div></div>
			<div class="col-md-6"></div>
			<div class="col-md-2 right"><div class="imp">Disclaimer</div></div>
			<div class="col-md-1"></div>
		</div>
	</div>
</div>

<script>
	$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(1550).fadeOut('slow');
});
</script>

<script src="js/min/anim-min.js"></script>
<script>
function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
</script>


</body>
</html>
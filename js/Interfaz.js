(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.jugar = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Nivel2 = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pizza1 = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pq = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rebanada1 = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Respuestas_s = function() {
	this.spriteSheet = ss["Interfaz_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vb = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("250.000", "bold 63px 'Segoe Print'");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 291;
	this.text.setTransform(-0.5,-15.2,0.258,0.258);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-15.1,76.1,30.3);


(lib.tt5 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("tabla del #5", "bold 28px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 180;
	this.text.setTransform(-2,-26.4);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-28.4,192,60);


(lib.tt4 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("tabla del #4", "bold 28px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 180;
	this.text.setTransform(-2,-26.4);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-28.4,192,60);


(lib.tt3 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("tabla del #3", "bold 28px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 180;
	this.text.setTransform(-2,-26.4);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-28.4,192,60);


(lib.tt2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("tabla del #2", "bold 28px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 180;
	this.text.setTransform(-2,-26.4);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-28.4,192,60);


(lib.tt1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("tabla del #1", "bold 28px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 180;
	this.text.setTransform(-2,-26.4);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.1,-28.4,192,60);


(lib.t5 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45", "bold 13px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 123;
	this.text.setTransform(-2,-106);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-106,127.2,212.2);


(lib.t4 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36", "bold 13px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 123;
	this.text.setTransform(-2,-106);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-106,127.2,212.2);


(lib.t3 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27", "bold 13px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 123;
	this.text.setTransform(-2,-106);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-106,127.2,212.2);


(lib.t2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18", "bold 13px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 123;
	this.text.setTransform(-2,-106);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-106,127.2,212.2);


(lib.t1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9", "bold 13px 'Segoe Print'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 123;
	this.text.setTransform(-2,-106);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-106,127.2,212.2);


(lib.Símbolo1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.pizza1();
	this.instance.setTransform(0,0,1.016,1.078);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,423.9,308.3);


(lib.si = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Si", "bold 63px 'Segoe Print'");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 64;
	this.text.setTransform(-1.9,-56.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AlLFLQiIiJAAjCQAAjBCIiJQCKiJDBgBQDCABCJCJQCKCJgBDBQABDCiKCJQiJCKjCAAQjBAAiKiKg");
	this.shape.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-56.9,93.8,113.8);


(lib.rebanada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.rebanada1();
	this.instance.setTransform(-70,-70,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({rotation:-15,x:-85.7,y:-49.5},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.no = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("No", "bold 63px 'Segoe Print'");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 87;
	this.text.setTransform(-0.6,-56.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AlLFLQiIiJAAjCQAAjBCIiJQCKiJDBgBQDCABCJCJQCKCJgBDBQABDCiKCJQiJCKjCAAQjBAAiKiKg");
	this.shape.setTransform(0,4.6);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.9,-56.9,93.8,113.8);


(lib.menu = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("Menu", "bold 28px 'Segoe Print'", "#000033");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 93;
	this.text.setTransform(-4,-29);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCFF66").ss(2.8,1,1).p("AI1AAQAAB4imBVQilBVjqAAQjpAAilhVQimhVAAh4QAAh3CmhVQClhVDpAAQDqAAClBVQCmBVAAB3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0079B1").s().p("AmODNQilhWgBh3QABh2ClhWQClhUDpAAQDpAACmBUQClBWABB2QgBB3ilBWQimBUjpAAQjpAAilhUg");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-30.4,115.8,60.8);


(lib.Interpolación3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.pizza1();
	this.instance.setTransform(-211.9,-154.1,1.016,1.078);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.9,-154.1,423.9,308.3);


(lib.Interpolación2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.pizza1();
	this.instance.setTransform(-197.9,-144,0.95,1.007);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.9,-144,396,288);


(lib.Interpolación1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.pizza1();
	this.instance.setTransform(-275,-200,1.319,1.399);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275,-200,550,400);


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Egq9AfPMAAAg+dMBV7AAAMAAAA+dg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC66").s().p("Egq9AfPMAAAg+dMBV7AAAMAAAA+dg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC99").s().p("Egq9AfPMAAAg+dMBV7AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:0.5}}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape,p:{y:0}}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-199.5,550,400);


(lib.fl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666CC").ss(12,1,1).p("AB2BxIAABkID0jgIj0jJIAABkIAADhInfAAIAAjhIHfAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB2BxInfAAIAAjhIHfAAIAADhIAAjhIAAhkID0DKIj0Dfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-27.3,84.5,54.7);


(lib.fa = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("234.000", "bold 63px 'Segoe Print'");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 291;
	this.text.setTransform(-0.5,-16.3,0.275,0.275);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-16.3,81.3,32.7);


(lib.btn_J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.instance = new lib.jugar();
	this.instance.setTransform(-108.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AvyF2QmjibAAjbQAAjaGjicQGjiaJPgBQJQABGiCaQGjCcABDaQgBDbmjCbQmiCcpQAAQpPAAmjicg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AvyF2QmjibAAjbQAAjaGjicQGjiaJPgBQJQABGiCaQGjCcABDaQgBDbmjCbQmiCcpQAAQpPAAmjicg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009999").s().p("AvyF2QmjibAAjbQAAjaGjicQGjiaJPgBQJQABGiCaQGjCcABDaQgBDbmjCbQmiCcpQAAQpPAAmjicg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-53,286,106);


// stage content:
(lib.Interfaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		this.gotoAndStop();
		var timeline = this;
		
		this.btn_J.addEventListener("click",_click1);
		this.btn_J.cursor = "pointer";
		
		function _click1(event){
			alert("Bienvenido");
			stop();
		timeline.gotoAndPlay(2)
		}
	}
	this.frame_167 = function() {
		this.stop();
		this.button_3.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		function fl_MouseClickHandler_11()
		{
			alert("Felicitaciones");
			stop();
			this.gotoAndPlay(217);
		}
		
		this.button_4.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		function fl_MouseClickHandler_12()
		{
			alert("Vamos a aprenderlas");
			stop();
			this.gotoAndPlay(169);
		}
	}
	this.frame_176 = function() {
		this.stop();
		this.button_5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.gotoAndPlay(178);
		}
	}
	this.frame_187 = function() {
		this.stop();
		this.button_5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.gotoAndPlay(189);
		}
	}
	this.frame_197 = function() {
		this.stop();
		this.button_5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.gotoAndPlay(199);
		}
	}
	this.frame_207 = function() {
		this.stop();
		this.button_5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.gotoAndPlay(209);
		}
	}
	this.frame_208 = function() {
		this.stop();
		this.menu.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.gotoAndPlay(167);
		}
		this.stop();
	}
	this.frame_216 = function() {
		this.stop();
		
		this.menu.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
			this.gotoAndPlay(167);
		}
	}
	this.frame_217 = function() {
		this.stop();
		
		this.button_9.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
			
			alert("Bien");
			stop();
		
		}
		
		
		
		this.button_10.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15()
		{
			alert("Mal");
			stop();
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(167).call(this.frame_167).wait(9).call(this.frame_176).wait(11).call(this.frame_187).wait(10).call(this.frame_197).wait(10).call(this.frame_207).wait(1).call(this.frame_208).wait(8).call(this.frame_216).wait(1).call(this.frame_217).wait(3));

	// Inicio
	this.btn_J = new lib.btn_J();
	this.btn_J.setTransform(275,200);

	this.saludo = new cjs.Text("Hola\nAmigit@", "bold 63px 'Segoe Print'");
	this.saludo.name = "saludo";
	this.saludo.textAlign = "center";
	this.saludo.lineHeight = 63;
	this.saludo.lineWidth = 271;
	this.saludo.setTransform(271.5,84.1,1.752,1);
	this.saludo.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);
	this.saludo._off = true;

	this.instance = new lib.rebanada();
	this.instance.setTransform(276,291);
	this.instance._off = true;

	this.button_4 = new lib.no();
	this.button_4.setTransform(445,313.8);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.button_3 = new lib.si();
	this.button_3.setTransform(122.1,313.8);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.si(), 3);

	this.instance_1 = new lib.Respuestas_s();
	this.instance_1.setTransform(40.1,2.3,0.783,0.783);

	this.instance_2 = new lib.tt1();
	this.instance_2.setTransform(352.2,147.9);

	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(360.6,273.1);

	this.button_5 = new lib.fl();
	this.button_5.setTransform(469.2,274.9);
	new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.fl(), 3);

	this.instance_4 = new lib.tt2();
	this.instance_4.setTransform(352.2,147.9);

	this.instance_5 = new lib.t2();
	this.instance_5.setTransform(360.6,273.1);

	this.instance_6 = new lib.tt3();
	this.instance_6.setTransform(352.2,147.9);

	this.instance_7 = new lib.t3();
	this.instance_7.setTransform(360.6,273.1);

	this.instance_8 = new lib.tt4();
	this.instance_8.setTransform(352.2,147.9);

	this.instance_9 = new lib.t4();
	this.instance_9.setTransform(360.6,273.1);

	this.instance_10 = new lib.tt5();
	this.instance_10.setTransform(352.2,147.9);

	this.instance_11 = new lib.t5();
	this.instance_11.setTransform(360.6,273.1);

	this.menu = new lib.menu();
	this.menu.setTransform(467.3,350.2,0.621,0.621);
	new cjs.ButtonHelper(this.menu, 0, 1, 1);

	this.button_10 = new lib.fa();
	this.button_10.setTransform(436.5,298.7);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.button_9 = new lib.vb();
	this.button_9.setTransform(503.9,169.2);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.instance_12 = new lib.pq();
	this.instance_12.setTransform(395.8,128.5,0.638,0.638);

	this.instance_13 = new lib.Nivel2();
	this.instance_13.setTransform(0,49.5,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_J}]}).to({state:[]},1).to({state:[{t:this.saludo}]},74).to({state:[{t:this.saludo}]},24).to({state:[{t:this.saludo}]},24).to({state:[{t:this.instance}]},22).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.saludo},{t:this.button_3},{t:this.button_4},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.button_5,p:{x:469.2,y:274.9}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.button_5,p:{x:473.7,y:274}},{t:this.instance_5},{t:this.instance_4}]},8).to({state:[{t:this.instance_1},{t:this.button_5,p:{x:476,y:278}},{t:this.instance_7},{t:this.instance_6}]},11).to({state:[{t:this.instance_1},{t:this.button_5,p:{x:469,y:274}},{t:this.instance_9},{t:this.instance_8}]},10).to({state:[{t:this.instance_1},{t:this.menu},{t:this.instance_11},{t:this.instance_10}]},10).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.button_9},{t:this.button_10}]},9).to({state:[{t:this.saludo}]},1).to({state:[{t:this.saludo}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.saludo).wait(75).to({_off:false},0).wait(24).to({x:271.4,y:143.1,text:"Preparado",lineWidth:345},0).wait(24).to({text:"A Jugar"},0).to({_off:true},22).wait(22).to({_off:false,scaleX:1,x:273,y:-5.8,text:"Te sabes las\ntablas",lineWidth:411},0).to({_off:true},1).wait(50).to({_off:false,y:114.4,text:"MAL",font:NaN,lineHeight:96,lineWidth:238},0).wait(1).to({x:277,y:96.7,text:"BIEN",lineWidth:352},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).wait(1).to({x:320.3,y:274},0).wait(1).to({x:364.6,y:257},0).wait(1).to({x:409,y:240},0).wait(1).to({y:201.7},0).wait(1).to({y:163.3},0).wait(1).to({y:125},0).wait(1).to({x:364.6,y:100.7},0).wait(1).to({x:320.3,y:76.3},0).wait(1).to({x:276,y:52},0).wait(1).to({x:227,y:74.7},0).wait(1).to({x:178,y:97.3},0).wait(1).to({x:129,y:120},0).wait(1).to({y:157.7},0).wait(1).to({y:195.3},0).wait(1).to({y:233},0).wait(1).to({x:178,y:252.3},0).wait(1).to({x:227,y:271.7},0).wait(1).to({x:276,y:291},0).wait(3).to({x:275,y:290},0).wait(1).to({x:275.5,y:318.5},0).to({_off:true},1).wait(52));

	// Capa 3
	this.instance_14 = new lib.Interpolación1("synched",0);
	this.instance_14.setTransform(275,200);
	this.instance_14._off = true;

	this.instance_15 = new lib.Interpolación2("synched",0);
	this.instance_15.setTransform(275,200);
	this.instance_15._off = true;

	this.instance_16 = new lib.Interpolación3("synched",0);
	this.instance_16.setTransform(275,200);
	this.instance_16._off = true;

	this.instance_17 = new lib.Símbolo1();
	this.instance_17.setTransform(275,200,1,1,0,0,0,211.9,154.1);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.BlurFilter(4, 4, 2)];
	this.instance_17.cache(-2,-2,428,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({_off:true},24).wait(195));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},24).to({y:200.1},3).to({_off:true,y:200},21).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28).to({_off:false},21).to({y:200.1},12).to({_off:true,regX:211.9,regY:154.1,y:200,mode:"independent"},14).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(61).to({_off:false},14).wait(69).to({_off:true},1).wait(75));

	// Fondo
	this.instance_18 = new lib.fondo();
	this.instance_18.setTransform(275,200.1,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,550,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
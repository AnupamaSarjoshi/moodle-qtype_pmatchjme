$wnd.jsme.runAsyncCallback5('function oQ(){this.pb=Ym("file");this.pb[Zc]="gwt-FileUpload";this.a=new pQ;this.a.c=this;if(-1==this.lb){var a=this.pb,b=4096|(this.pb.__eventBits||0);It();su(a,b)}else this.lb|=4096}r(350,331,Zh,oQ);_.ud=function(a){var b;a:{b=this.a;switch(st(a.type)){case 1024:if(!b.a){b.b=!0;b=!1;break a}break;case 4096:if(b.b){b.a=!0;var c=b.c.pb,d=an(Xc,!0);c.dispatchEvent(d);b.a=!1;b.b=!1}}b=!0}b&&Ou(this,a)};_.a=null;r(351,1,{});function pQ(){}r(352,351,{},pQ);_.a=!1;_.b=!1;_.c=null;\nfunction qQ(a){var b=$doc.createElement(Fd);RJ(kg,b.tagName);this.pb=b;this.b=new zK(this.pb);this.pb[Zc]="gwt-HTML";yK(this.b,a,!0);HK(this)}r(356,357,Zh,qQ);function rQ(){qx();var a=$doc.createElement("textarea");!lt&&(lt=new kt);!jt&&(jt=new it);this.pb=a;this.pb[Zc]="gwt-TextArea"}r(396,397,Zh,rQ);function sQ(a,b){var c,d;c=$doc.createElement(Hg);d=$doc.createElement(ug);d[Bc]=a.a.a;d.style[Qg]=a.b.a;var e=(nt(),ot(d));c.appendChild(e);mt(a.d,c);$u(a,b,d)}\nfunction wQ(){Yv.call(this);this.a=(aw(),hw);this.b=(iw(),lw);this.e[Vc]=$a;this.e[Uc]=$a}r(405,347,yh,wQ);_.Pd=function(a){var b;b=$m(a.pb);(a=dv(this,a))&&this.d.removeChild($m(b));return a};\nfunction xQ(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Rg]=pe,a.ab=!1,a.ae());b=a.pb;b.style[ze]=0+(Io(),Ff);b.style[Cg]=ab;hM(a,Ui(hn($doc)+(gn()-Vm(a.pb,tf)>>1),0),Ui(jn($doc)+(fn()-Vm(a.pb,sf)>>1),0));d||((a.ab=c)?(a.pb.style[jd]=Sf,a.pb.style[Rg]=Sg,vi(a.gb,200)):a.pb.style[Rg]=Sg)}finally{a.w=!0}}function yQ(a){a.i=(new uL(a.j)).rc.Re();Ku(a.i,new zQ(a),(Np(),Np(),Op));a.d=F(Dx,q,40,[a.i])}\nfunction AQ(){CM();var a,b,c,d,e;ZM.call(this,(qN(),rN),null,!0);this.Pg();this.db=!0;a=new qQ(this.k);this.f=new rQ;this.f.pb.style[Ug]=cb;wu(this.f,cb);this.Ng();tM(this,"400px");e=new wQ;e.pb.style[oe]=cb;e.e[Vc]=10;c=(aw(),bw);e.a=c;sQ(e,a);sQ(e,this.f);this.e=new pw;this.e.e[Vc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],mw(this.e,a);sQ(e,this.e);HM(this,e);DL(this,!1);this.Og()}r(662,663,WH,AQ);_.Ng=function(){yQ(this)};\n_.Og=function(){var a=this.f;a.pb.readOnly=!0;var b=Au(a.pb)+"-readonly";vu(a.Cd(),b,!0)};_.Pg=function(){CL(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function zQ(a){this.a=a}r(665,1,{},zQ);_.ad=function(){JM(this.a,!1)};_.a=null;function BQ(a){this.a=a}r(666,1,{},BQ);\n_.Ic=function(){Fu(this.a.f.pb,!0);this.a.f.pb.focus();var a=this.a.f,b;b=Wm(a.pb,Pg).length;if(0<b&&a.kb){if(0>b)throw new oF("Length must be a positive integer. Length: "+b);if(b>Wm(a.pb,Pg).length)throw new oF("From Index: 0  To Index: "+b+"  Text Length: "+Wm(a.pb,Pg).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function CQ(a){yQ(a);a.a=(new uL(a.b)).rc.Re();Ku(a.a,new DQ(a),(Np(),Np(),Op));a.d=F(Dx,q,40,[a.a,a.i])}\nfunction EQ(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";CL(a.I.b,"Paste")}function FQ(a){CM();AQ.call(this);this.c=a}r(668,662,WH,FQ);_.Ng=function(){CQ(this)};_.Og=function(){wu(this.f,"150px")};_.Pg=function(){EQ(this)};_.ae=function(){YM(this);Lm((Im(),Jm),new GQ(this))};_.a=null;_.b=null;_.c=null;function HQ(a){CM();FQ.call(this,a)}r(667,668,WH,HQ);_.Ng=function(){var a;CQ(this);a=new oQ;Ku(a,new IQ(this),(kJ(),kJ(),lJ));this.d=F(Dx,q,40,[this.a,a,this.i])};\n_.Og=function(){wu(this.f,"150px");XA(new JQ(this),this.f)};_.Pg=function(){EQ(this);this.k+=" Or drag and drop a file on it."};function IQ(a){this.a=a}r(669,1,{},IQ);_._c=function(a){var b,c;b=new FileReader;a=(c=a.a.target,c.files[0]);KQ(b,new LQ(this));b.readAsText(a)};_.a=null;function LQ(a){this.a=a}r(670,1,{},LQ);_.af=function(a){qA();px(this.a.a.f,a)};_.a=null;function JQ(a){this.a=a;this.b=new MQ(this);this.c=this.d=1}r(671,501,{},JQ);_.a=null;function MQ(a){this.a=a}r(672,1,{},MQ);\n_.af=function(a){this.a.a.f.pb[Pg]=null!=a?a:l};_.a=null;function DQ(a){this.a=a}r(676,1,{},DQ);_.ad=function(){if(this.a.c){var a=this.a.c,b;b=new nA(a.a,0,Wm(this.a.f.pb,Pg));dB(a.a.a,b.a)}JM(this.a,!1)};_.a=null;function GQ(a){this.a=a}r(677,1,{},GQ);_.Ic=function(){Fu(this.a.f.pb,!0);this.a.f.pb.focus()};_.a=null;r(678,1,vh);_.Tc=function(){var a,b;a=new NQ(this.a);void 0!=$wnd.FileReader?b=new HQ(a):b=new FQ(a);vM(b);xQ(b)};function NQ(a){this.a=a}r(679,1,{},NQ);_.a=null;r(680,1,vh);\n_.Tc=function(){var a;a=new AQ;var b=this.a,c;px(a.f,b);b=(c=tF(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);wu(a.f,20*(10>b?b:10)+Ff);Lm((Im(),Jm),new BQ(a));vM(a);xQ(a)};function KQ(a,b){a.onload=function(a){b.af(a.target.result)}}V(662);V(668);V(667);V(679);V(665);V(666);V(676);V(677);V(669);V(670);V(671);V(672);V(356);V(405);V(396);V(350);V(351);V(352);x(TH)(5);\n//@ sourceURL=5.js\n')
/*
 Joel Espinosa Longi
 jlongi@im.unam.mx
 https://github.com/jlongi/DescartesJS
 LGPL - http://www.gnu.org/licenses/lgpl.html
 2016-06-03
*/
var babel = (function (a) {
    if (a.loadLib) return a;
    a.loadLib = !0;
    a.falso = a["false"] = a.fals = a.gezurra = a.faux = a.fals = "false";
    a.verdadero =
      a["true"] =
      a.veritable =
      a.egia =
      a.vrai =
      a.verdadeiro =
      a.veritable =
        "true";
    a.no = a.ez = a.non = a["n\u00e3o"] = "false";
    a["s\u00ed"] = a.yes = a.bai = a.oui = a.si = a["sim "] = "true";
    a.negro =
      a.black =
      a.negre =
      a.beltza =
      a.noir =
      a.preto =
      a["#000000"] =
        "#000000";
    a.maxenta = a.magenta = a["#ff00ff"] = "#ff00ff";
    a.azul = a.blue = a.blau = a.urdina = a.bleu = a["#0000ff"] = "#0000ff";
    a.turquesa = a.cyan = a.turkesa = a.turquoise = a["#00ffff"] = "#00ffff";
    a.verde = a.green = a.verd = a.berdea = a.vert = a["#00ff00"] = "#00ff00";
    a.amarillo =
      a.yellow =
      a.groc =
      a.horia =
      a.jaune =
      a.amarelo =
      a["#ffff00"] =
        "#ffff00";
    a.naranja =
      a.orange =
      a.taronja =
      a.laranja =
      a.laranxa =
      a["#ffc800"] =
        "#ffc800";
    a.rojo =
      a.red =
      a.vermell =
      a.gorria =
      a.rouge =
      a.vermello =
      a.vermelho =
      a["#ff0000"] =
        "#ff0000";
    a.pink = a.rosa = a.arrosa = a.rose = a["#ffafaf"] = "#ffafaf";
    a.grisObscuro =
      a.darkGray =
      a.grisFosc =
      a["gris iluna"] =
      a.grisObscur =
      a.grisEscuro =
      a.cinzaEscuro =
      a["#404040"] =
        "#404040";
    a.gris = a.gray = a.grisa = a.cinza = a["#808080"] = "#808080";
    a.grisClaro =
      a.lightGray =
      a.grisClar =
      a["gris argia"] =
      a.grisClair =
      a.cinzaClaro =
      a["#c0c0c0"] =
        "#c0c0c0";
    a.blanco =
      a.white =
      a.blanc =
      a.zuria =
      a.branco =
      a["#ffffff"] =
        "#ffffff";
    a.escala = a.scale = a.eskala = a["\u00e9chelle"] = "scale";
    a.nombre = a.name = a.nom = a.izena = a.nome = "name";
    a.ikusgai = a["vis\u00edvel"] = a.visible = "visible";
    a.rastro = a.trace = a.rastre = a.arrastoa = "trace";
    a.fondo =
      a.background =
      a.fons =
      a.hondoa =
      a.fond =
      a.fundo =
        "background";
    a["par\u00e1metro"] =
      a.parameter =
      a.parametroa =
      a["par\u00e2metro"] =
      a["par\u00e0metre"] =
        "parameter";
    a["sucesi\u00f3n"] =
      a.sequence =
      a["successi\u00f3"] =
      a.segida =
      a.succession =
      a["seq\u00fc\u00eancia"] =
        "sequence";
    a["tama\u00f1o"] =
      a.size =
      a.neurria =
      a.taille =
      a.tamanho =
      a["grand\u00e0ria"] =
        "size";
    a.decimales =
      a.decimals =
      a.hamartarra =
      a["d\u00e9cimales"] =
      a.decimais =
        "decimals";
    a.red =
      a.net =
      a.xarxa =
      a.sarea =
      a["r\u00e9seau"] =
      a.rede =
      a.malha =
        "net";
    a.red10 =
      a.net10 =
      a.xarxa10 =
      a.sarea10 =
      a["r\u00e9seau10"] =
      a.rede10 =
      a.malha10 =
        "net10";
    a.ejes = a.axes = a.eixos = a.ardatzak = a.eixes = "axes";
    a.texto = a.text = a.testua = a.texte = "text";
    a["cr\u00e9ditos"] =
      a.about =
      a["cr\u00e8dits"] =
      a.kreditoak =
      a["cr\u00e9dits"] =
      a.sobre =
        "about";
    a.config = a.konfig = a["configura\u00e7\u00e3o"] = "config";
    a.limpiar = a.clear = a.neteja = a.ezabatu = a.nettoye = a.limpar = "clear";
    a.incr = a.gehi = a.incremento = "incr";
    a.min = a.inf = "min";
    a.max = a.sup = a["m\u00e1x"] = "max";
    a.relleno =
      a.fill =
      a.ple =
      a.betea =
      a.plein =
      a.recheo =
      a.preencher =
        "fill";
    a["relleno+"] =
      a["fill+"] =
      a["ple+"] =
      a["betea+"] =
      a["plein+"] =
      a["recheo+"] =
      a["preencher+"] =
      a.fillP =
        "fillP";
    a["relleno-"] =
      a["fill-"] =
      a["ple-"] =
      a["betea-"] =
      a["plein-"] =
      a["recheo-"] =
      a["preencher-"] =
      a.fillM =
        "fillM";
    a.flecha =
      a.arrow =
      a.fletxa =
      a.gezia =
      a["fl\u00e8che"] =
      a.frecha =
      a.seta =
        "arrow";
    a.ancho = a.width = a.ample = a.zabalera = a.large = a.largura = "width";
    a.punta = a.spear = a.muturra = a.pointe = a.ponta = "spear";
    a["regi\u00f3n"] =
      a.region =
      a["regi\u00f3"] =
      a.eskualde =
      a["r\u00e9gion"] =
      a["rexi\u00f3n"] =
      a["regi\u00e3o"] =
        "region";
    a.norte = a.north = a.nord = a.ipar = "north";
    a.sur = a.south = a.sud = a.hego = a.sul = "south";
    a.este = a.east = a.est = a.ekialde = a.leste = "east";
    a.oeste = a.west = a.oest = a.hegoalde = a.ouest = "west";
    a.exterior = a.external = a.kanpoalde = a.externo = "external";
    a["expresi\u00f3n"] =
      a.expresion =
      a["expresi\u00f3"] =
      a.adierazpen =
      a["express\u00e3o"] =
        "expresion";
    a.tipo = a.type = a.tipus = a.mota = "type";
    a["posici\u00f3n"] =
      a.position =
      a["posici\u00f3"] =
      a.posizio =
      a["posi\u00e7\u00e3o"] =
        "position";
    a["constricci\u00f3n"] =
      a.constraint =
      a["constricci\u00f3"] =
      a.beharte =
      a.constriction =
      a["constrici\u00f3n"] =
      a["restri\u00e7\u00e3o"] =
        "constraint";
    a.valor = a.value = a.balio = a.valeur = "value";
    a["ecuaci\u00f3n"] =
      a.equation =
      a["equaci\u00f3"] =
      a.ekuazio =
      a["\u00e9quation"] =
      a["equa\u00e7\u00e3o"] =
        "equation";
    a.curva = a.curve = a.corba = a.kurba = a.courbe = "curve";
    a.texto = a.text = a.testu = a.texte = "text";
    a.punto = a.point = a.punt = a.puntu = a.ponto = "point";
    a.segmento = a.segment = a.zuzenki = "segment";
    a.arco = a.arc = a.arku = "arc";
    a["pol\u00edgono"] =
      a.polygon =
      a["pol\u00edgon"] =
      a.poligono =
      a.polygone =
        "polygon";
    a.imagen = a.image = a.imatge = a.irudi = a.imaxe = a.imagem = "image";
    a["Versi\u00f3n"] =
      a.Version =
      a["Versi\u00f3"] =
      a["Vers\u00e3o"] =
      a.version =
        "version";
    a.Idioma = a.Language = a.Hizkuntza = a.Langue = a.language = "language";
    a["O.x"] = "O.x";
    a["O.y"] = "O.y";
    a.Botones =
      a.Buttons =
      a.Botons =
      a.Botoiak =
      a.Boutons =
      a["Bot\u00f3ns"] =
      a["Bot\u00f5es"] =
      a.Botons =
        "Buttons";
    a["Animaci\u00f3n"] =
      a.Animation =
      a["Animaci\u00f3"] =
      a.Animazio =
      a["Anima\u00e7\u00e3o"] =
        "Animation";
    a.constante = a.constant = a.Konstante = "constant";
    a.fuente = a.font = a.iturri = a.source = a.fonte = "font";
    a["num\u00e9rico"] =
      a.numeric =
      a["num\u00e8ric"] =
      a.zenbakizko =
      a["num\u00e9rique"] =
        "numeric";
    a["gr\u00e1fico"] =
      a.graphic =
      a["gr\u00e0fic"] =
      a.grafiko =
      a.graphique =
        "graphic";
    a.inicio =
      a.init =
      a.inici =
      a.hasiera =
      a.commencement =
      a["in\u00edcio"] =
        "init";
    a.hacer =
      a["do"] =
      a.fer =
      a.egin =
      a.faire =
      a.facer =
      a.fazer =
      a.doExpr =
        "doExpr";
    a.mientras =
      a["while"] =
      a.mentre =
      a.bitartean =
      a["tandis que"] =
      a.mentres =
      a.enquanto =
      a.whileExpr =
        "whileExpr";
    a.evaluar =
      a.evaluate =
      a.avalua =
      a.ebaluatu =
      a["\u00e9valuer"] =
      a.avaliar =
        "evaluate";
    a.variable = a.aldagaia = a["vari\u00e1vel"] = "variable";
    a["funci\u00f3n"] =
      a["function"] =
      a["funci\u00f3"] =
      a.funtzio =
      a.fonction =
      a["fun\u00e7\u00e3o"] =
        "function";
    a.algoritmo = a.algorithm = a.algorisme = a.algorithme = "algorithm";
    a.vector = a.array = a.bektore = a.vecteur = a.matriz = "array";
    a["dibujar-si"] =
      a["draw-if"] =
      a["marraztu-baldin"] =
      a["dessiner-si"] =
      a["debuxar-se"] =
      a["desenhar-se"] =
      a["dibuixa-si"] =
      a.drawif =
        "drawif";
    a.dominio =
      a.range =
      a.domini =
      a["izate-eremua"] =
      a.domain =
      a["dom\u00ednio"] =
        "range";
    a.pausa = a.delay = a.eten = "delay";
    a["eje-x"] =
      a["x-axis"] =
      a["eix-x"] =
      a["x-ardatza"] =
      a["axe-x"] =
      a["eixe-x"] =
      a["eixo-x"] =
      a.x_axis =
        "x_axis";
    a["eje-y"] =
      a["y-axis"] =
      a["eix-y"] =
      a["y-ardatza"] =
      a["axe-y"] =
      a["eixe-y"] =
      a["eixo-y"] =
      a.y_axis =
        "y_axis";
    a["n\u00fameros"] = a.numbers = a.nombres = a.zenbakiak = "numbers";
    a["exponencial-si"] =
      a["exponential-if"] =
      a["esponentzial-baldin"] =
      a["exponentiel-si"] =
      a["exponencial-se"] =
      a.exponentialif =
        "exponentialif";
    a.familia = a.family = a["fam\u00edlia"] = a.famille = "family";
    a.intervalo = a.interval = a.tarte = a.intervalle = "interval";
    a.pasos = a.steps = a.passos = a.pausoak = a.pas = "steps";
    a.centro = a.center = a.centre = a.zentro = "center";
    a.radio = a.radius = a.radi = a.erradio = a.rayon = a.raio = "radius";
    a.fin = a.end = a.fi = a.bukaera = a.fim = "end";
    a["una-sola-vez"] =
      a["only-once"] =
      a["una-sola-vegada"] =
      a["behin-bakarrik"] =
      a["une-seule-fois"] =
      a["unha-soa-vez"] =
      a["apenas-uma-vez"] =
      a.onlyOnce =
        "onlyOnce";
    a.siempre = a.always = a.sempre = a.beti = a.toujours = "always";
    a["color-int"] =
      a["int-colour"] =
      a["barruko-kolore"] =
      a["couleur-int"] =
      a["cor-int"] =
      a.colorInt =
        "colorInt";
    a.repetir =
      a.loop =
      a.repeteix =
      a.errepikatu =
      a["r\u00e9p\u00e9ter"] =
        "loop";
    a.controles =
      a.controls =
      a.kontrolak =
      a["contr\u00f4les"] =
      a.controis =
        "controls";
    a.animar = a.animate = a.anima = a.animatu = a.animer = "animate";
    a.auto = "auto";
    a.alto = a.height = a.alt = a.altu = a.haut = a.altura = "height";
    a.x = a.left = "x";
    a.y = a.top = "y";
    a.espacio =
      a.space =
      a.espai =
      a.espazio =
      a.espace =
      a.espazo =
      a["espa\u00e7o"] =
        "space";
    a.Nu = "Nu";
    a.Nv = "Nv";
    a.ancho =
      a.depth =
      a.amplada =
      a.zabalera =
      a.largeur =
      a.ancho =
      a.profundidade =
      a.amplada =
      a.width =
        "width";
    a.largo =
      a.length =
      a.llargada =
      a.luzera =
      a.longueur =
      a.longo =
      a.comprimento =
      a.llargada =
        "length";
    a.alto =
      a.height =
      a["al\u00e7ada"] =
      a.altu =
      a.hauteur =
      a.alto =
      a.altura =
      a["al\u00e7ada"] =
        "height";
    a.color_reverso =
      a.backcolor =
      a.color_revers =
      a["atzealde kolorea"] =
      a.couleur_revers =
      a.cor_reverso =
      a.cor_de_fundo =
        "backcolor";
    a.aristas =
      a.edges =
      a.arestes =
      a.ertzak =
      a["ar\u00eates"] =
      a.arestas =
        "edges";
    a.rotini = a.inirot = "inirot";
    a.posini = a.inipos = "inipos";
    a["tri\u00e1ngulo"] =
      a.triangle =
      a.hirukia =
      a["tri\u00e2ngulo"] =
        "triangle";
    a.cara = a.face = a.aurpegi = "face";
    a.polireg = a.regpoly = a["pol\u00edgonoRegular"] = "polireg";
    a.superficie = a.surface = a["superf\u00edcie"] = a.azalera = "surface";
    a.cubo = a.cube = a.cub = a.kubo = "cube";
    a["paralelep\u00edpedo"] =
      a.box =
      a["paral\u00b7lelep\u00edpede"] =
      a.paralelepipedo =
      a["parall\u00e9l\u00e9pip\u00e8de"] =
        "box";
    a.cono = a.cone = a.con = a.kono = a["c\u00f4ne"] = "cone";
    a.cilindro = a.cylinder = a.cilindre = a.zilindro = a.cylindre = "cylinder";
    a.esfera = a.sphere = a["sph\u00e8re"] = "sphere";
    a.tetraedro =
      a.tetrahedron =
      a.tetraedre =
      a["t\u00e9tra\u00e8dre"] =
        "tetrahedron";
    a.octaedro =
      a["octahedron="] =
      a.octaedre =
      a.oktaedro =
      a["octa\u00e8dre"] =
        "octahedron";
    a.dodecaedro =
      a.dodecahedron =
      a.dodecaedre =
      a.dodekaedro =
      a["dod\u00e9ca\u00e8dre"] =
        "dodecahedron";
    a.icosaedro =
      a.icosahedron =
      a.icosaedre =
      a.ikosaedro =
      a["icosa\u00e8dre"] =
        "icosahedron";
    a.elipsoide =
      a.ellipsoid =
      a["el\u00b7lipsoide"] =
      a["ellipso\u00efde"] =
      a["elips\u00f3ide"] =
        "ellipsoid";
    a.macro = a.makro = "macro";
    a.id = "id";
    a.modelo = a.model = a.eredu = a["mod\u00e8le"] = "model";
    a.color = a.kolore = a.couleur = a.cor = a.colour = a.kolorea = "color";
    a.luz = a.light = a.llum = a.argia = a["lumi\u00e8re"] = "light";
    a.metal = a.metall = a["m\u00e9tal"] = "metal";
    a.alambre =
      a.wire =
      a.filferro =
      a.alanbre =
      a["fil de fer"] =
      a.arame =
        "wire";
    a.cortar = a.split = a.talla = a.moztu = a.couper = a.dividir = "split";
    a.despliegue =
      a.render =
      a.desplegament =
      a.zabaltze =
      a["d\u00e8ploiement"] =
      a.despregamento =
      a.processar =
        "render";
    a.orden = a.sort = a.ordre = a.ordena = a.orde = a.ordenar = "sort";
    a.pintor = a.painter = a.margolari = a.peintre = "painter";
    a["trazado de rayos"] =
      a["ray trace"] =
      a["tra\u00e7at de raigs"] =
      a["izpi trazadura"] =
      a["trace de rayons"] =
      a["trazado de raios"] =
      a["tra\u00e7ado de raios"] =
      a.raytrace =
        "raytrace";
    a.imagen =
      a.bg_image =
      a.imatge =
      a.irudia =
      a.imaxe =
      a.imagem_de_fundo =
      a.image =
        "image";
    a.despl_imagen =
      a.bg_display =
      a.despl_imatge =
      a["irudi desplazamendu"] =
      a.despl_image =
      a.despr_imaxe =
      a["apresenta\u00e7\u00e3o_de_imagem"] =
        "bg_display";
    a["arr-izq"] =
      a.topleft =
      a["dalt-esq"] =
      a["goi-ezk"] =
      a["au-dessus-gau"] =
      a["arr-esq"] =
      a["acima-esquerda"] =
        "topleft";
    a["expand."] = a.stretch = a.hedatu = a["expandir "] = "stretch";
    a.mosaico = a.patch = a.mosaic = a.mosaiko = a["mosa\u00efque"] = "patch";
    a.centrada =
      a.center =
      a.zentratu =
      a["centr\u00e9e"] =
      a.centrado =
        "imgcenter";
    a.archivo = a.file = a.fitxer = a.artxibo = a.fichier = a.arquivo = "file";
    a.tipo_de_macro =
      a.macro_type =
      a.tipus_de_macro =
      a.makro_mota =
      a.type_de_macro =
      a.tipo_de_macro =
      a.tipo_de_macro =
      a.tipus_de_macro =
        "macro_type";
    a.filas_norte =
      a.rows_north =
      a.files_nord =
      a["HTML kodea"] =
      a.files_nord =
      a.filas_norte =
      a.linhas_norte =
      a.files_nord =
      a.rowsNorth =
        "rowsNorth";
    a.filas_sur =
      a.rows_south =
      a.files_sud =
      a.ipar_lerro =
      a.files_sud =
      a.filas_sur =
      a.linhas_sul =
      a.files_sud =
      a.rowsSouth =
        "rowsSouth";
    a.ancho_este =
      a.width_east =
      a.ample_est =
      a.hego_lerro =
      a.ample_est =
      a.ancho_leste =
      a.largura_leste =
      a.ample_est =
      a.widthEast =
        "widthEast";
    a.ancho_oeste =
      a.width_west =
      a.ample_oest =
      a.ekialde_zabalera =
      a.ample_ouest =
      a.ancho_oeste =
      a.largura_oeste =
      a.ample_oest =
      a.widthWest =
        "widthWest";
    a.fijo = a.fixed = a.fix = a.hegoalde_zabalera = a.fixe = a.fixo = "fixed";
    a["Reiniciar Animaci\u00f3n"] =
      a["Init Animation"] =
      a["Reinicia Animaci\u00f3"] =
      a.finko =
      a["Recommencer l'Animation"] =
      a["Reiniciar Anima\u00e7\u00e3o"] =
      a.initAnimation =
        "initAnimation";
    a["Explicaci\u00f3n"] =
      a.Explanation =
      a.Azalpena =
      a.Explication =
      a["Explica\u00e7\u00e3o"] =
      a["Explicaci\u00f3"] =
        "Explanation";
    a.tooltip = a.dica = "tooltip";
    a.discreto = a.discrete = a.discret = a.diskretu = "discrete";
    a.interfaz =
      a.gui =
      a["interf\u00edcie"] =
      a.interfaze =
      a["interface"] =
        "gui";
    a.pulsador = a.spinner = a.polsador = a.pultsadore = a.bouton = "spinner";
    a["campo de texto"] =
      a.textfield =
      a["camp de text"] =
      a["testu esarrua"] =
      a["champ de texte"] =
        "textfield";
    a["men\u00fa"] = a.choice = a.menu = a.escolha = "menu";
    a.barra = a.scrollbar = a.barre = "scrollbar";
    a.opciones =
      a.options =
      a.opcions =
      a.aukerak =
      a["opci\u00f3ns"] =
      a["op\u00e7\u00f5es"] =
        "options";
    a.interior = a.barruko = a["int\u00e9rieur"] = "interior";
    a["condici\u00f3n"] =
      a.condition =
      a["condici\u00f3"] =
      a.baldintza =
      a["condi\u00e7\u00e3o"] =
        "condition";
    a["acci\u00f3n"] =
      a.action =
      a["acci\u00f3"] =
      a.ekintza =
      a["a\u00e7\u00e3o"] =
        "action";
    a.evento =
      a.event =
      a.esdeveniment =
      a.gertaera =
      a["\u00e9v\u00e9nement"] =
        "event";
    a["abrir URL"] =
      a["open URL"] =
      a["obre URL"] =
      a["URL zabaldu"] =
      a["ouvrir URL"] =
      a.openURL =
        "openURL";
    a["abrir Escena"] =
      a["open Scene"] =
      a["obre Escena"] =
      a["eszena zabaldu"] =
      a["ouvrir Escena"] =
      a["abrir Cena"] =
      a.openScene =
        "openScene";
    a["bot\u00f3n"] =
      a.button =
      a["bot\u00f3"] =
      a.botoi =
      a.bouton =
      a["bot\u00e3o"] =
        "button";
    a.mensaje =
      a.message =
      a.mezua =
      a.mensaxe =
      a.mensagem =
      a.missatge =
        "message";
    a.alternar =
      a.alternate =
      a.alterna =
      a.txandakatu =
      a.alterner =
        "alternate";
    a["ejecuci\u00f3n"] =
      a.execution =
      a["execuci\u00f3"] =
      a.gauzatze =
      a["ex\u00e9cution"] =
      a["execuci\u00f3n"] =
      a["execu\u00e7\u00e3o"] =
        "execution";
    a.calcular =
      a.calculate =
      a.calcula =
      a.kalkulatu =
      a.calculer =
        "calculate";
    a.coord_abs = a.abs_coord = a.koor_abs = "abs_coord";
    a.negrita =
      a.bold =
      a.negreta =
      a.lodi =
      a["caract\u00e8re gras"] =
      a.negra =
      a.negrito =
        "bold";
    a.cursiva =
      a.italics =
      a.etzana =
      a.italique =
      a["it\u00e1lico"] =
        "italics";
    a.subrayada =
      a.underlined =
      a.subratllat =
      a.azpimarratua =
      a.soulignement =
      a["subli\u00f1ada"] =
      a.sublinhado =
        "underlined";
    a.imagen = a.image = a.imatge = a.irundia = a.imaxe = a.imagem = "image";
    a.pos_mensajes =
      a.msg_pos =
      a.pos_missatges =
      a.mezuen_pos =
      a.pos_messages =
      a.pos_mensaxes =
        "msg_pos";
    a.izquierda =
      a.left =
      a.esquerra =
      a.eskerrean =
      a.gauche =
      a.esquerda =
      a.esquerda =
      a.esquerra =
      a.x =
        "x";
    a.derecha =
      a.right =
      a.dreta =
      a.eskuinan =
      a.droite =
      a.dereita =
      a.direita =
      a.dreta =
        "right";
    a["sensible_a_los_movimientos_del_rat\u00f3n"] =
      a.sensitive_to_mouse_movements =
      a["sensible_als_moviments_del_ratol\u00ed"] =
      a["xagu mugimenduarekiko sentikorra"] =
      a.sensible_aux_mouvements_du_souris =
      a.sensible_aos_movementos_do_rato =
      a["sens\u00edvel_aos_movimentos_do_mouse"] =
        "sensitive_to_mouse_movements";
    a.reproducir =
      a.play =
      a.reprodueix =
      a.erreproduzitu =
      a.reproduire =
      a.reproduzir =
      a.playAudio =
        "playAudio";
    a["activo-si"] =
      a["active-if"] =
      a["actiu-si"] =
      a["altiboa-baldin"] =
      a["actif-si"] =
      a["activo-se"] =
      a["ativo-se"] =
      a.activeif =
        "activeif";
    a.rotfin = a.finrot = a.bukrot = a.endrot = "endrot";
    a.posfin = a.finpos = a.bukpos = a.endpos = "endpos";
    a.editable = a.editagarria = a["edit\u00e1vel"] = "editable";
    a.tipo = a.type = a.tipus = a.mota = "type";
    a.R2 = "R2";
    a.R3 = "R3";
    a.vectores = a.bektoreak = a.vecteurs = a.vetores = a.vectors = "vectors";
    a["fuente puntos"] =
      a["font size"] =
      a["font punts"] =
      a["puntu iturria"] =
      a["source points"] =
      a["fonte puntos"] =
      a["fonte pontos"] =
      a.font_size =
        "font_size";
    a["ecuaci\u00f3n"] =
      a.equation =
      a["equaci\u00f3"] =
      a.ekuazio =
      a["\u00e9quation"] =
      a["equa\u00e7\u00e3o"] =
        "equation";
    a.punto = a.dot = a.punt = a.puntu = a.point = a.ponto = "point";
    a.escenario =
      a.scenario =
      a.escenari =
      a.agertoki =
      a["sc\u00e8ne"] =
      a["cen\u00e1rio"] =
        "scenario";
    a.cID = "cID";
    a.matriz = a.matrix = a.matriu = a.matrice = "matrix";
    a.filas = a.rows = a.files = "rows";
    a.columnas = a.columns = a.colonnes = "columns";
    a.solo_texto =
      a.only_text =
      a.seulement_texte =
      a["s\u00f3_texto"] =
      a.tan_sols_texte =
      a.onlyText =
        "onlyText";
    a.respuesta = a.answer = "answer";
    a.peso = a.weight = a.pes = "weight";
    a.decimal_symbol =
      a["signo decimal"] =
      a["decimal symbol"] =
        "decimal_symbol";
    a.info = "info";
    a.color_contorn_text =
      a.color_text_border =
      a.color_borde_texto =
      a.muga_testuaren_kolorea =
      a.couleur_contour_texte =
      a.cor_borde_texto =
      a.colore_bordo_testo =
      a.cor_borda_texto =
      a.color_contorn_text =
      a.border =
        "border";
    a.video = a["vid\u00e9o"] = "video";
    a.audio = a["\u00e0udio"] = "audio";
    a.autoplay = "autoplay";
    a.loop = "loop";
    a.poster = "poster";
    a.opacidad =
      a.opacity =
      a["opacit\u00e9"] =
      a.opacitat =
      a.opacidade =
        "opacity";
    a.alinear = a.align = a["ali\u00f1ar"] = a.aligner = "align";
    a.malla = a.mesh = "mesh";
    a.local = a.Local = "local";
    return a;
  })(babel || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d;
    a.convertFont = function (a) {
      if ("" == a) return a;
      k = a.split(",");
      d = "";
      "bold" == k[1].toLowerCase()
        ? (d += "Bold ")
        : "italic" == k[1].toLowerCase() || "italics" == k[1].toLowerCase()
        ? (d += "Italic ")
        : "bold+italic" == k[1].toLowerCase() && (d += "Italic Bold ");
      fontName = k[0].split(" ")[0].toLowerCase();
      d += k[2] + "px ";
      return (d =
        "serif" === fontName ||
        "times new roman" === fontName ||
        "timesroman" === fontName ||
        "times" === fontName
          ? d + "descartesJS_serif,Times,'Times New Roman', serif"
          : "sansserif" === fontName ||
            "arial" === fontName ||
            "helvetica" === fontName
          ? d + "descartesJS_sansserif,Arial,Helvetica,Sans-serif"
          : d + "descartesJS_monospace,Courier,'Courier New',Monospace");
    };
    a.getTextWidth = function (c, g) {
      a.ctx.font = g;
      return Math.round(a.ctx.measureText(c).width);
    };
    a.getFieldFontSize = function (a) {
      a = Math.min(50, a);
      return (a =
        24 <= a
          ? Math.floor(a / 2 + 2 - a / 16)
          : 20 <= a
          ? 12
          : 17 <= a
          ? 11
          : 15 <= a
          ? 10
          : 9);
    };
    var f = {
        ss_5: { a: 5, d: 3 },
        ss_6: { a: 5, d: 3 },
        ss_7: { a: 6, d: 3 },
        ss_8: { a: 7, d: 3 },
        ss_9: { a: 9, d: 4 },
        ss_10: { a: 10, d: 4 },
        ss_11: { a: 11, d: 4 },
        ss_12: { a: 12, d: 4 },
        ss_13: { a: 13, d: 4 },
        ss_14: { a: 13, d: 4 },
        ss_15: { a: 14, d: 4 },
        ss_16: { a: 15, d: 4 },
        ss_17: { a: 15, d: 5 },
        ss_18: { a: 16, d: 5 },
        ss_19: { a: 18, d: 5 },
        ss_20: { a: 19, d: 5 },
        ss_21: { a: 19, d: 6 },
        ss_22: { a: 20, d: 6 },
        ss_23: { a: 21, d: 6 },
        ss_24: { a: 21, d: 7 },
        ss_25: { a: 23, d: 6 },
        ss_26: { a: 25, d: 7 },
        ss_27: { a: 26, d: 7 },
        ss_28: { a: 26, d: 7 },
        ss_29: { a: 27, d: 7 },
        ss_30: { a: 28, d: 8 },
        ss_31: { a: 28, d: 8 },
        ss_32: { a: 29, d: 8 },
        ss_33: { a: 31, d: 8 },
        ss_34: { a: 32, d: 8 },
        ss_35: { a: 32, d: 9 },
        ss_36: { a: 33, d: 9 },
        ss_37: { a: 34, d: 10 },
        ss_38: { a: 34, d: 10 },
        ss_39: { a: 35, d: 10 },
        ss_40: { a: 36, d: 10 },
        ss_41: { a: 38, d: 11 },
        ss_42: { a: 38, d: 11 },
        ss_43: { a: 39, d: 11 },
        ss_44: { a: 40, d: 11 },
        ss_45: { a: 40, d: 11 },
        ss_46: { a: 42, d: 11 },
        ss_47: { a: 43, d: 11 },
        ss_48: { a: 45, d: 11 },
        ss_49: { a: 45, d: 13 },
        ss_50: { a: 46, d: 13 },
        ss_51: { a: 47, d: 13 },
        ss_52: { a: 48, d: 13 },
        ss_53: { a: 48, d: 14 },
        ss_54: { a: 49, d: 14 },
        ss_55: { a: 51, d: 14 },
        ss_56: { a: 52, d: 14 },
        ss_57: { a: 52, d: 14 },
        ss_58: { a: 53, d: 14 },
        ss_59: { a: 53, d: 14 },
        ss_60: { a: 54, d: 14 },
        ss_61: { a: 55, d: 15 },
        ss_62: { a: 56, d: 15 },
        ss_63: { a: 57, d: 15 },
        ss_64: { a: 58, d: 15 },
        ss_65: { a: 59, d: 16 },
        ss_66: { a: 60, d: 16 },
        ss_67: { a: 60, d: 16 },
        ss_68: { a: 61, d: 16 },
        ss_69: { a: 62, d: 17 },
        ss_70: { a: 63, d: 17 },
        ss_71: { a: 64, d: 17 },
        ss_72: { a: 65, d: 17 },
        ss_73: { a: 66, d: 17 },
        ss_74: { a: 66, d: 17 },
        ss_75: { a: 67, d: 17 },
        ss_76: { a: 68, d: 17 },
        ss_77: { a: 70, d: 18 },
        ss_78: { a: 70, d: 18 },
        ss_79: { a: 71, d: 18 },
        ss_80: { a: 72, d: 18 },
        ss_81: { a: 73, d: 20 },
        ss_82: { a: 73, d: 20 },
        ss_83: { a: 74, d: 20 },
        ss_84: { a: 75, d: 20 },
        ss_85: { a: 77, d: 20 },
        ss_86: { a: 77, d: 20 },
        ss_87: { a: 78, d: 20 },
        ss_88: { a: 79, d: 20 },
        ss_89: { a: 80, d: 20 },
        ss_90: { a: 80, d: 20 },
        ss_91: { a: 81, d: 20 },
        ss_92: { a: 83, d: 20 },
        ss_93: { a: 84, d: 20 },
        ss_94: { a: 84, d: 20 },
        ss_95: { a: 85, d: 20 },
        ss_96: { a: 86, d: 20 },
        ss_97: { a: 87, d: 20 },
        ss_98: { a: 87, d: 20 },
        ss_99: { a: 89, d: 20 },
        s_5: { a: 4, d: 4 },
        s_6: { a: 5, d: 4 },
        s_7: { a: 6, d: 4 },
        s_8: { a: 7, d: 4 },
        s_9: { a: 9, d: 4 },
        s_10: { a: 10, d: 3 },
        s_11: { a: 11, d: 4 },
        s_12: { a: 12, d: 4 },
        s_13: { a: 12, d: 4 },
        s_14: { a: 13, d: 4 },
        s_15: { a: 13, d: 5 },
        s_16: { a: 15, d: 5 },
        s_17: { a: 15, d: 5 },
        s_18: { a: 16, d: 5 },
        s_19: { a: 16, d: 6 },
        s_20: { a: 17, d: 6 },
        s_21: { a: 18, d: 6 },
        s_22: { a: 20, d: 6 },
        s_23: { a: 20, d: 7 },
        s_24: { a: 21, d: 7 },
        s_25: { a: 23, d: 7 },
        s_26: { a: 23, d: 7 },
        s_27: { a: 24, d: 8 },
        s_28: { a: 26, d: 8 },
        s_29: { a: 26, d: 8 },
        s_30: { a: 27, d: 8 },
        s_31: { a: 28, d: 9 },
        s_32: { a: 28, d: 9 },
        s_33: { a: 29, d: 9 },
        s_34: { a: 31, d: 9 },
        s_35: { a: 32, d: 10 },
        s_36: { a: 32, d: 10 },
        s_37: { a: 33, d: 10 },
        s_38: { a: 34, d: 10 },
        s_39: { a: 34, d: 12 },
        s_40: { a: 35, d: 12 },
        s_41: { a: 37, d: 12 },
        s_42: { a: 38, d: 12 },
        s_43: { a: 39, d: 12 },
        s_44: { a: 40, d: 12 },
        s_45: { a: 41, d: 13 },
        s_46: { a: 41, d: 13 },
        s_47: { a: 42, d: 13 },
        s_48: { a: 43, d: 13 },
        s_49: { a: 44, d: 15 },
        s_50: { a: 45, d: 15 },
        s_51: { a: 45, d: 15 },
        s_52: { a: 46, d: 15 },
        s_53: { a: 48, d: 15 },
        s_54: { a: 48, d: 15 },
        s_55: { a: 49, d: 15 },
        s_56: { a: 50, d: 15 },
        s_57: { a: 51, d: 15 },
        s_58: { a: 52, d: 15 },
        s_59: { a: 53, d: 15 },
        s_60: { a: 54, d: 15 },
        s_61: { a: 54, d: 17 },
        s_62: { a: 55, d: 17 },
        s_63: { a: 56, d: 17 },
        s_64: { a: 57, d: 17 },
        s_65: { a: 58, d: 17 },
        s_66: { a: 59, d: 17 },
        s_67: { a: 60, d: 17 },
        s_68: { a: 61, d: 17 },
        s_69: { a: 61, d: 18 },
        s_70: { a: 62, d: 18 },
        s_71: { a: 63, d: 18 },
        s_72: { a: 64, d: 18 },
        s_73: { a: 65, d: 19 },
        s_74: { a: 66, d: 19 },
        s_75: { a: 67, d: 19 },
        s_76: { a: 67, d: 19 },
        s_77: { a: 68, d: 20 },
        s_78: { a: 70, d: 20 },
        s_79: { a: 71, d: 20 },
        s_80: { a: 71, d: 20 },
        s_81: { a: 72, d: 21 },
        s_82: { a: 73, d: 21 },
        s_83: { a: 73, d: 21 },
        s_84: { a: 75, d: 21 },
        s_85: { a: 76, d: 21 },
        s_86: { a: 77, d: 21 },
        s_87: { a: 77, d: 21 },
        s_88: { a: 78, d: 21 },
        s_89: { a: 79, d: 21 },
        s_90: { a: 81, d: 21 },
        s_91: { a: 81, d: 21 },
        s_92: { a: 82, d: 21 },
        s_93: { a: 83, d: 21 },
        s_94: { a: 83, d: 21 },
        s_95: { a: 84, d: 21 },
        s_96: { a: 86, d: 21 },
        s_97: { a: 87, d: 21 },
        s_98: { a: 87, d: 21 },
        s_99: { a: 88, d: 21 },
        m_5: { a: 4, d: 3 },
        m_6: { a: 5, d: 3 },
        m_7: { a: 6, d: 3 },
        m_8: { a: 6, d: 3 },
        m_9: { a: 9, d: 4 },
        m_10: { a: 9, d: 4 },
        m_11: { a: 10, d: 5 },
        m_12: { a: 11, d: 5 },
        m_13: { a: 11, d: 6 },
        m_14: { a: 11, d: 7 },
        m_15: { a: 12, d: 6 },
        m_16: { a: 13, d: 6 },
        m_17: { a: 14, d: 7 },
        m_18: { a: 14, d: 7 },
        m_19: { a: 15, d: 7 },
        m_20: { a: 16, d: 7 },
        m_21: { a: 16, d: 8 },
        m_22: { a: 17, d: 8 },
        m_23: { a: 17, d: 9 },
        m_24: { a: 19, d: 9 },
        m_25: { a: 21, d: 9 },
        m_26: { a: 21, d: 9 },
        m_27: { a: 22, d: 9 },
        m_28: { a: 22, d: 10 },
        m_29: { a: 23, d: 10 },
        m_30: { a: 24, d: 10 },
        m_31: { a: 25, d: 11 },
        m_32: { a: 26, d: 11 },
        m_33: { a: 26, d: 11 },
        m_34: { a: 27, d: 11 },
        m_35: { a: 28, d: 11 },
        m_36: { a: 28, d: 12 },
        m_37: { a: 28, d: 11 },
        m_38: { a: 30, d: 11 },
        m_39: { a: 31, d: 12 },
        m_40: { a: 31, d: 12 },
        m_41: { a: 32, d: 14 },
        m_42: { a: 32, d: 14 },
        m_43: { a: 33, d: 14 },
        m_44: { a: 34, d: 14 },
        m_45: { a: 35, d: 14 },
        m_46: { a: 36, d: 14 },
        m_47: { a: 37, d: 14 },
        m_48: { a: 37, d: 14 },
        m_49: { a: 38, d: 17 },
        m_50: { a: 38, d: 17 },
        m_51: { a: 39, d: 17 },
        m_52: { a: 41, d: 17 },
        m_53: { a: 41, d: 18 },
        m_54: { a: 42, d: 18 },
        m_55: { a: 43, d: 18 },
        m_56: { a: 43, d: 18 },
        m_57: { a: 44, d: 19 },
        m_58: { a: 46, d: 19 },
        m_59: { a: 46, d: 19 },
        m_60: { a: 47, d: 19 },
        m_61: { a: 47, d: 21 },
        m_62: { a: 48, d: 21 },
        m_63: { a: 49, d: 21 },
        m_64: { a: 49, d: 22 },
        m_65: { a: 51, d: 21 },
        m_66: { a: 52, d: 21 },
        m_67: { a: 52, d: 21 },
        m_68: { a: 53, d: 21 },
        m_69: { a: 53, d: 22 },
        m_70: { a: 54, d: 22 },
        m_71: { a: 55, d: 22 },
        m_72: { a: 56, d: 22 },
        m_73: { a: 57, d: 23 },
        m_74: { a: 58, d: 23 },
        m_75: { a: 58, d: 23 },
        m_76: { a: 59, d: 23 },
        m_77: { a: 59, d: 24 },
        m_78: { a: 60, d: 24 },
        m_79: { a: 62, d: 24 },
        m_80: { a: 62, d: 24 },
        m_81: { a: 63, d: 25 },
        m_82: { a: 64, d: 25 },
        m_83: { a: 64, d: 25 },
        m_84: { a: 65, d: 25 },
        m_85: { a: 65, d: 25 },
        m_86: { a: 67, d: 25 },
        m_87: { a: 68, d: 25 },
        m_88: { a: 68, d: 25 },
        m_89: { a: 69, d: 25 },
        m_90: { a: 70, d: 25 },
        m_91: { a: 70, d: 25 },
        m_92: { a: 71, d: 25 },
        m_93: { a: 72, d: 25 },
        m_94: { a: 73, d: 25 },
        m_95: { a: 74, d: 25 },
        m_96: { a: 74, d: 25 },
        m_97: { a: 75, d: 25 },
        m_98: { a: 76, d: 25 },
        m_99: { a: 77, d: 25 },
      },
      q = {};
    document.createElement("canvas");
    var c;
    a.getFontMetrics = function (a) {
      if (q[a]) return q[a];
      c = parseInt(a.match(/(\d+\.*)+px/)[0]);
      var g;
      a.match("sansserif")
        ? (g = "ss_")
        : a.match("serif")
        ? (g = "s_")
        : a.match("monospace") && (g = "m_");
      g = f[g + c];
      g = { ascent: g.a, descent: g.d, h: g.a + g.d, baseline: g.a };
      return (q[a] = g);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k() {
      var a, e, b, n, c, g, m, d, h;
      Number.prototype.oToFixed = Number.prototype.toFixed;
      Number.prototype.toFixed = function (f) {
        f = f ? f : 0;
        f = 0 > f ? 0 : parseInt(f);
        a = this.toString();
        c = a.indexOf("e");
        -1 !== c &&
          ((g = a.split("e")),
          (d = "-" === g[0][0] ? "-" : ""),
          (m =
            "-" === d
              ? parseFloat(g[0].substring(1)).oToFixed(11)
              : parseFloat(g[0]).oToFixed(11)),
          (h = parseInt(g[1])),
          (e = m.indexOf(".")),
          0 > e + h
            ? ((e = 0 > e ? 1 : e),
              (a =
                d +
                "0." +
                Array(Math.abs(e + h) + 1).join("0") +
                m.replace(".", "")))
            : ((m = m.replace(".", "")),
              (a = d + m + Array(h - m.length + 2).join("0"))));
        e = a.indexOf(".");
        b = "";
        if (-1 === e)
          0 < f && (b = "."), (b += Array(f + 1).join("0")), (a += b);
        else if (((n = a.length - e - 1), n >= f))
          11 >= f && (a = parseFloat(a).oToFixed(f)),
            (a = 0 < f ? a.substring(0, e + 1 + f) : a.substring(0, e));
        else {
          var v = 0;
          for (f -= n; v < f; v++) b += "0";
          a += b;
        }
        return a;
      };
    }
    if (a.loadLib) return a;
    var d = 2 * Math.PI,
      f = 360 / d,
      q = d / 360,
      c = Math.floor,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e;
    a.rangeOK = 1;
    a.cssScale = 1;
    a.extend = function (a, e) {
      if ("function" == typeof Object.create)
        a.prototype = Object.create(e.prototype);
      else if (a.prototype.__proto__) a.prototype.__proto__ = e.prototype;
      else
        for (var b in e.prototype)
          e.prototype.hasOwnProperty(b) && (a.prototype[b] = e.prototype[b]);
      a.prototype.uber = e.prototype;
    };
    a.radToDeg = function (a) {
      return a * f;
    };
    a.degToRad = function (a) {
      return a * q;
    };
    a.drawLine = function (a, b, n, g, m, d, f) {
      a.lineWidth = f || 1;
      a.strokeStyle = d || "black";
      e = a.lineWidth % 2 ? 0.5 : 0;
      a.beginPath();
      a.moveTo(c(b) + e, c(n) + e);
      a.lineTo(c(g) + e, c(m) + e);
      a.stroke();
    };
    a.getColor = function (a, e) {
      if ("string" == typeof e) return e;
      h = a.eval(e);
      g = c(255 * h[0][0]);
      b = c(255 * h[0][1]);
      u = c(255 * h[0][2]);
      m = 1 - h[0][3];
      return "rgba(" + g + "," + b + "," + u + "," + m + ")";
    };
    a.getFeatures = function () {
      var e = navigator.appVersion.toLowerCase();
      a.hasTouchSupport =
        (window.hasOwnProperty && window.hasOwnProperty("ontouchstart")) ||
        "ontouchstart" in window ||
        /android/i.test(e);
      a.isIOS = /iPad|iPhone/i.test(navigator.userAgent);
      e = document.createElement("canvas");
      a.hasCanvas = e.getContext && e.getContext("2d");
      a.hasCanvas &&
        ((a.ctx = document.createElement("canvas").getContext("2d")),
        (a._ratio = 1.5));
      k();
    };
    a.removeNeedlessDecimals = function (a) {
      var e, b;
      if ("string" == typeof a && ((e = a.indexOf(".")), -1 != e)) {
        b = a.substring(e);
        if (0 == parseFloat(b)) return a.substring(0, e);
        for (var n = b.length; 0 < n; n--)
          if (0 != b.charAt(n)) return a.substring(0, e + n + 1);
      }
      return a;
    };
    a.returnValue = function (a) {
      return "number" === typeof a ? parseFloat(a.toFixed(11)) : a;
    };
    a.whichBtn = function (a) {
      return null !== a.which
        ? 2 > a.which
          ? "L"
          : 2 === a.which
          ? "M"
          : "R"
        : 2 > a.button
        ? "L"
        : 4 === a.button
        ? "M"
        : "R";
    };
    a.getCursorPosition = function (e, b) {
      e.touches
        ? ((r = e.touches[0]), (n = r.pageX), (v = r.pageY))
        : ((n = e.pageX), (v = e.pageY));
      x = b.getBoundingClientRect();
      return {
        x: (n - window.pageXOffset - x.left) / a.cssScale,
        y: (v - window.pageYOffset - x.top) / a.cssScale,
      };
    };
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    a.setInterval = function (a, e) {
      function b() {
        new Date().getTime() - n >= e && (a.call(), (n = new Date().getTime()));
        c.value = requestAnimationFrame(b);
      }
      if (!requestAnimationFrame) return setInterval(a, e);
      var n = new Date().getTime(),
        c = {};
      c.value = requestAnimationFrame(b);
      return c;
    };
    a.clearInterval = function (a) {
      a &&
        (cancelAnimationFrame
          ? cancelAnimationFrame(a.value)
          : clearInterval(a));
    };
    a.setTimeout = function (a, e) {
      function b() {
        new Date().getTime() - n >= e
          ? a.call()
          : (c.value = requestAnimationFrame(b));
      }
      if (!requestAnimationFrame) return setTimeout(a, e);
      var n = new Date().getTime(),
        c = {};
      c.value = requestAnimationFrame(b);
      return c;
    };
    a.clearTimeout = function (a) {
      a &&
        (cancelAnimationFrame
          ? cancelAnimationFrame(a.value)
          : clearTimeout(a));
    };
    a.showAbout = function () {
      var e =
        "<html>\n<head>\n<style>\nbody{ text-align:center; }\niframe{ width:650px; height:73px; overflow:hidden; border:1px solid black; }\ndt{ font-weight:bold; margin-top:10px; }\n</style>\n</head>\n<body>\n<iframe src='http://arquimedes.matem.unam.mx/Descartes5/creditos/bannerPatrocinadores.html'></iframe>\n<h2> <a href='http://proyectodescartes.org/' target='_blank'>ProyectoDescartes.org</a> <br> <a href='http://descartesjs.org' target='_blank'>DescartesJS.org</a> </h2>\n<dl>\n<dt> Dise&ntilde;o funcional:</dt>\n<dd>\n<nobr>Jos&eacute; Luis Abreu Leon,</nobr>\n<nobr>Jos&eacute; R. Galo Sanchez,</nobr>\n<nobr>Juan Madrigal Muga</nobr>\n</dd>\n<dt>Autores del software:</dt>\n<dd>\n<nobr>Jos&eacute; Luis Abreu Leon,</nobr>\n<nobr>Marta Oliver&oacute; Serrat,</nobr>\n<nobr>Oscar Escamilla Gonz&aacute;lez,</nobr>\n<nobr>Joel Espinosa Longi</nobr>\n</dd>\n</dl>\n<p>\nEl software en Java est&aacute; bajo la licencia\n<a href='https://joinup.ec.europa.eu/software/page/eupl/licence-eupl'>EUPL v.1.1 </a>\n<br>\nEl software en JavaScript est&aacute; bajo licencia\n<a href='http://www.gnu.org/licenses/lgpl.html'>LGPL</a>\n</p>\n<p>\nLa documentaci&oacute;n y el c&oacute;digo fuente se encuentran en :\n<br>\n<a href='http://arquimedes.matem.unam.mx/Descartes5/'>http://arquimedes.matem.unam.mx/Descartes5/</a>\n</p>\n";
      a.ccLicense &&
        (e +=
          "<p>\nEste objeto, creado con Descartes, est&aacute; licenciado\npor sus autores como\n<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'><nobr>Creative Commons</nobr></a>\n<br>\n<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'><img src='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'></a>\n</p>");
      var e = e + "</body> </html>",
        b = window.open(
          "",
          "creditos",
          "width=700,height=500,titlebar=0,toolbar=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0"
        );
      b.document.write(e);
      b.document.close();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d;
    a.cacheFiles = {};
    a.openExternalFile = function (f) {
      if (a.cacheFiles[f]) return a.cacheFiles[f];
      k = null;
      var q = !1;
      if (window.XMLHttpRequest)
        try {
          q = new XMLHttpRequest();
        } catch (c) {
          q = !1;
        }
      else if (window.ActiveXObject)
        try {
          q = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (c) {
          try {
            q = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (h) {
            q = !1;
          }
        }
      d = q;
      d.open("GET", f, !1);
      try {
        d.send(null),
          (k = d.responseText),
          k.match(String.fromCharCode(65533)) &&
            (d.open("GET", f, !1),
            d.overrideMimeType("text/plain; charset=ISO-8859-1"),
            d.send(null),
            (k = d.responseText));
      } catch (c) {
        console.log("Error to load the file :", f), (k = null);
      }
      return k;
    };
    a.addExternalFileContent = function (d, k) {
      a.cacheFiles[d] = k;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a) {
      l = a.indexOf("--radial--");
      -1 != l && (a = a.substring(0, l));
      c = a.trim();
      a = { ignoreAcents: !1, ignoreCaps: !1, regExp: null };
      c[0] == c[c.length - 1] &&
        "'" == c[0] &&
        ((a.ignoreCaps = !0),
        (c = c.substring(1, c.length - 1)),
        "`" == c[0] &&
          "\u00b4" == c[c.length - 1] &&
          ((a.ignoreAcents = !0), (c = c.substring(1, c.length - 1))));
      "`" == c[0] &&
        "\u00b4" == c[c.length - 1] &&
        ((a.ignoreAcents = !0),
        (c = c.substring(1, c.length - 1)),
        c[0] == c[c.length - 1] &&
          "'" == c[0] &&
          ((a.ignoreCaps = !0), (c = c.substring(1, c.length - 1))));
      "*" === c.charAt(0) && "*" !== c.charAt(c.length - 1)
        ? (c = c.substring(1) + "$")
        : "*" !== c.charAt(0) && "*" === c.charAt(c.length - 1)
        ? (c = "^" + c.substring(0, c.length - 1))
        : "*" !== c.charAt(0) && "*" !== c.charAt(c.length - 1)
        ? (c = "^" + c + "$")
        : "*" === c.charAt(0) &&
          "*" === c.charAt(c.length - 1) &&
          (c = c.substring(1, c.length - 1));
      c = c.replace(/\?/g, "[\\S\\s]{1}");
      a.regExp = c;
      return a;
    }
    function d(a, e) {
      c = (a || "").trim();
      a = { ignoreAcents: !1, ignoreCaps: !1, regExp: null };
      a.expr = c.split(",");
      a.expr[0] = a.expr[0].trim();
      a.expr[0] = {
        type: a.expr[0].charAt(0),
        expr: e.parser.parse(a.expr[0].substring(1)),
      };
      a.expr[1] = a.expr[1].trim();
      a.expr[1] = {
        type: a.expr[1].charAt(a.expr[1].length - 1),
        expr: e.parser.parse(a.expr[1].substring(0, a.expr[1].length - 1)),
      };
      return a;
    }
    function f(a, b, c) {
      b = parseFloat(b);
      u = a.expr[0];
      m = a.expr[1];
      r = c.eval(u.expr);
      n = c.eval(m.expr);
      v = "(" == u.type;
      x = "[" == u.type;
      e = ")" == m.type;
      p = "]" == m.type;
      return ((v && b > r) || (x && b >= r)) && ((e && b < n) || (p && b <= n))
        ? 1
        : 0;
    }
    function q(a) {
      return a
        .toString()
        .replace(/\u00e1/g, "a")
        .replace(/\u00e9/g, "e")
        .replace(/\u00ed/g, "i")
        .replace(/\u00f3/g, "o")
        .replace(/\u00fa/g, "u")
        .replace(/\u00c1/g, "A")
        .replace(/\u00c9/g, "E")
        .replace(/\u00cd/g, "I")
        .replace(/\u00d3/g, "O")
        .replace(/\u00da/g, "U")
        .replace(/\u00f1/g, "n")
        .replace(/\u00d1/g, "N");
    }
    if (a.loadLib) return a;
    var c, h, g, b, u, m, r, n, v, x, e, p, l;
    a.buildRegularExpresionsPatterns = function (a, e) {
      a = a || "";
      "(" === a.charAt(0) &&
        ")" === a.charAt(a.length - 1) &&
        -1 === a.indexOf(",") &&
        (a = a.substring(1, a.length - 1));
      a = a
        .replace(/&squot;/g, "'")
        .replace(/&amp;/g, "&")
        .split("|");
      for (var b = 0, n = a.length; b < n; b++) {
        h = a[b].split("&");
        g = [];
        for (var m = 0, l = h.length; m < l; m++)
          (c = h[m]),
            -1 === c.indexOf(",") ||
            ("(" !== c.charAt(0) && "[" !== c.charAt(0)) ||
            (")" !== c.charAt(c.length - 1) && "]" !== c.charAt(c.length - 1))
              ? g.push(k(c))
              : g.push(d(c, e));
        a[b] = g;
      }
      return a;
    };
    a.escorrecto = function (e, n, c, m) {
      c = c || a.externalEvaluator;
      m = m || a.buildRegularExpresionsPatterns(e, c);
      n = q(n);
      e = 0;
      for (var g = m.length; e < g; e++) {
        h = m[e];
        b = !0;
        for (var l = 0, d = h.length; l < d; l++)
          b = h[l].regExp
            ? b && !!n.match(new RegExp(q(h[l].regExp), "i"))
            : b && f(h[l], n, c);
        if (b) return 1;
      }
      return 0;
    };
    a.esCorrecto = function (e, n, m, g) {
      m = m || a.externalEvaluator;
      g = g || a.buildRegularExpresionsPatterns(e, m);
      e = 0;
      for (var l = g.length; e < l; e++) {
        h = g[e];
        b = !0;
        for (var d = 0, p = h.length; d < p; d++)
          (c = h[d].regExp)
            ? (h[d].ignoreAcents && ((n = q(n)), (c = q(c))),
              h[d].ignoreCaps &&
                ((n = n.toLowerCase()), (c = q(c).toLowerCase())),
              (b = b && !!n.match(c)))
            : (b = b = b && f(h[d], n, m));
        if (b) return 1;
      }
      return 0;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.getCCLImg = function () {
      var a = new Image();
      a.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAMAAABUFvrSAAABC1BMVEUAAAC1urSEhYRDREMNDg2EhoR5fHkpKSmRk5EbGxuRlJGVmZQoKShAQEBwcHCTmJNQUVAQEBBgYGCAgIC/v78ODg5QUFDf39/////v7++fn5+Rj49aV1jj4+PIx8cwMDB9f3zW1dUyMTGamJkZGRkNDA12c3SjoaEjHyC6ubkpKikoJSY/OzxoZWaHhoesq6s/NzljX2HPz891cnN4dXbx8fGflpqOh4uenZ0xLS4kJCQoKCjo5+ePj4+1tbUtLS3g3+Cvr6/JyMggICAqKip+e3wfGxyEgYIqJyeYlpd/gX5ubGyMiovLyst6fXmeoJ18f3xdXl2ChYJwcm81NjWWmZYyMzE+Pz6JjIk4KLQtAAACdUlEQVR4AdWVBXvbOhiFj8OcGBp/YU5UZrq0cse83f3/X7IvkS0rKnd8ym/8vFWOCD8u1g/JTxHH4glwEvGkZSSVBiedegCJxJksVLI5XZsvAMVSqQgUypKU7yZKXAFgO67nuY4NoKKJF1D1ieNXsVC+LwEQem23RjJ1VheUNw2HGTB9QeLCjDSaBmm12y1FAATejk8qtU405i6qvVBMVXCHKfQH7B2Oxi1F+JmJ4CxKEooz7A2Hq8xBz0vwI+4jPX0Ly2JlFe4a1hXxqS02NsdCNCQJxFnYWzSXmo2sFKNIHAdwiFPElGzvCCHGrV5EaHdP7BMdiENJpDgGuGSkDiSluEQccIhTgiTtMYBxLyK7f4m/uWYh/mESiuOwuQivWiy68se/RGQjfouYHeNDIZqLivz3xJuJjzRxAg4LMU3xGJzp3w4S11chye4B9QRnJSSLkxOidSH0KgAeYgenvnda76DjH5/WZ13MxGdy8gBt8pg0xeEhxuvnFyE5EOLy8ql4pk8e4BEFPau6vUD8HFUylxuT1uVw1NjVyaXgvNiV5E4xZynaICV9g7xsGuTV+npPErOK2tapy1VMf8gqvnFLy8kLZk1NXgmJaFOj45Q60ZFjFe4iUlyBTWq5HRdnP+gUcSvM60cemxnu4toN8g1RW9q/Zkt/u/jNdYdQ5lvFeGtZ79isHUO+PDbf4xvzYf6gr7k28NGy3uKb052O2byaPiGM3B+QXxz1B3PjIbpqfqNfphndCwo+KSLyb+NfhcBow8qE13/Omu8hPDY1EnxoCY8TGPlszeV/aDGLkITMARpA5f8vofWLrr1+xEpuzgPhj81XdrZiwA3vh8AAAAAASUVORK5CYII=";
      return a;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor,
      d = Math.min,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e;
    a.Color = function (a, e) {
      this.b = this.g = this.r = 0;
      this.a = 1;
      this.evaluator = e;
      if (a) {
        if (
          (babel[a] &&
            ("net" === babel[a] && (a = "rojo"),
            (a = babel[a]),
            (this.r = parseInt("0x" + a.substring(1, 3), 16)),
            (this.g = parseInt("0x" + a.substring(3, 5), 16)),
            (this.b = parseInt("0x" + a.substring(5, 7), 16)),
            (this.colorStr = a),
            (this.getColor = this.getColorStr)),
          6 === a.length &&
            ((this.r = parseInt("0x" + a.substring(0, 2), 16)),
            (this.g = parseInt("0x" + a.substring(2, 4), 16)),
            (this.b = parseInt("0x" + a.substring(4, 6), 16)),
            (this.colorStr = "#" + a),
            (this.getColor = this.getColorStr)),
          8 === a.length &&
            ((this.r = parseInt("0x" + a.substring(2, 4), 16)),
            (this.g = parseInt("0x" + a.substring(4, 6), 16)),
            (this.b = parseInt("0x" + a.substring(6, 8), 16)),
            (this.a = 1 - parseInt("0x" + a.substring(0, 2), 16) / 255),
            (this.colorStr =
              "rgba(" +
              this.r +
              "," +
              this.g +
              "," +
              this.b +
              "," +
              this.a +
              ")"),
            (this.getColor = this.getColorStr)),
          "(" === a[0])
        ) {
          q = [];
          c = this.splitComa(a.substring(1, a.length - 1));
          for (var b = 0, n = c.length; b < n; b++)
            (h = parseInt(c[b], 16)),
              c[b] != h.toString(16) && c[b] !== "0" + h.toString(16)
                ? ("[" === c[b].charAt(0) &&
                    "]" === c[b].charAt(c[b].length - 1) &&
                    (c[b] = c[b].substring(1, c[b].length - 1)),
                  q.push(this.evaluator.parser.parse(c[b])))
                : q.push(this.evaluator.parser.parse((h / 255).toString()));
          this.rExpr = q[0];
          this.gExpr = q[1];
          this.bExpr = q[2];
          this.aExpr = q[3];
          this.getColor = this.getColorExp;
        }
      } else
        (this.colorStr =
          "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"),
          (this.getColor = this.getColorStr);
    };
    a.Color.prototype.splitComa = function (a) {
      g = [];
      for (var e = (m = u = b = 0), n = a.length; e < n; e++)
        (r = a.charAt(e)),
          "(" === r
            ? b++
            : ")" === r
            ? b--
            : "[" === r
            ? u++
            : "]" === r
            ? u--
            : "," === r &&
              0 === b &&
              0 === u &&
              (g.push(a.substring(m, e)), (m = e + 1));
      g.push(a.substring(m));
      return g;
    };
    a.Color.prototype.getColorStr = function () {
      return this.colorStr;
    };
    a.Color.prototype.getColorExp = function () {
      f = this.evaluator;
      this.r = d(255, k(255 * f.eval(this.rExpr)));
      this.g = d(255, k(255 * f.eval(this.gExpr)));
      this.b = d(255, k(255 * f.eval(this.bExpr)));
      this.a = 1 - f.eval(this.aExpr);
      return (
        "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
      );
    };
    a.Color.prototype.borderColor = function () {
      return 380 > this.r + this.g + this.b ? "#ffffff" : "#000000";
    };
    a.RGBAToHexColor = function (b) {
      b = b.substring(5, b.length - 1).split(",");
      n = parseInt(b[0]).toString(16);
      v = parseInt(b[1]).toString(16);
      x = parseInt(b[2]).toString(16);
      e = (255 - parseInt(255 * parseFloat(b[3]))).toString(16);
      n = 1 == n.length ? "0" + n : n;
      v = 1 == v.length ? "0" + v : v;
      x = 1 == x.length ? "0" + x : x;
      e = 1 == e.length ? "0" + e : e;
      return new a.Color(e + n + v + x);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = document.head,
      d = document.createElement("meta");
    d.setAttribute("http-equiv", "X-UA-Compatible");
    d.setAttribute("content", "IE=edge,chrome=1");
    k.appendChild(d);
    d = document.createElement("meta");
    d.setAttribute("name", "viewport");
    d.setAttribute(
      "content",
      "width=device-width,initial-scale=1.0,user-scalable=yes"
    );
    document.querySelector("meta[name=viewport]") || k.appendChild(d);
    d = document.createElement("meta");
    d.setAttribute("name", "apple-mobile-web-app-capable");
    d.setAttribute("content", "yes");
    k.appendChild(d);
    d = document.createElement("meta");
    d.setAttribute("name", "apple-mobile-web-app-status-bar-style");
    d.setAttribute("content", "black");
    k.appendChild(d);
    d = document.createElement("meta");
    d.setAttribute("name", "DescartesJS_author");
    d.setAttribute("content", "Joel Espinosa Longi");
    k.appendChild(d);
    (k = document.getElementById("StyleDescartesApps2")) &&
      k.parentNode.removeChild(k);
    k = document.createElement("style");
    k.type = "text/css";
    k.id = "StyleDescartesApps2";
    k.setAttribute("rel", "stylesheet");
    document.head.appendChild(k);
    k.innerHTML =
      "div.DescartesCatcher{background-color:rgba(255,255,255,0);cursor:pointer;position:absolute;}\ndiv.DescartesAppContainer{border:0 solid black;position:relative;overflow:hidden;top:0;left:0;}\ndiv.DescartesLoader{background-color:#CACACA;position:absolute;overflow:hidden;top:0;left:0;}\ndiv.DescartesLoaderImage{position:absolute;background-repeat:no-repeat;background-position:center;overflow:hidden;top:0;left:0;}\ncanvas.DescartesLoaderBar{position:absolute;overflow:hidden;top:0;left:0;}\ncanvas.DescartesSpace2DCanvas,canvas.DescartesSpace3DCanvas,div.blocker{touch-action:none;position:absolute;overflow:hidden;left:0;top:0;}\ndiv.DescartesSpace2DContainer,div.DescartesSpace3DContainer{position:absolute;overflow:hidden;line-height:0;}\ncanvas.DescartesButton{position:absolute;cursor:pointer;}\ndiv.DescartesButtonContainer{position:absolute;background-repeat:no-repeat;}\ndiv.DescartesSpinnerContainer,div.DescartesTextFieldContainer,div.DescartesMenuContainer{background:lightgray;position:absolute;overflow:hidden;}\ndiv.DescartesSpinnerContainer input,div.DescartesTextFieldContainer input,div.DescartesMenuContainer select{border-radius:0;}\ninput.DescartesSpinnerField,input.DescartesTextFieldField,input.DescartesMenuField,input.DescartesScrollbarField{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:descartesJS_sansserif,Arial,Helvetica,Sans-serif;padding:0;border:solid #666 1px;position:absolute;top:0;}\nlabel.DescartesSpinnerLabel,label.DescartesMenuLabel,label.DescartesScrollbarLabel,label.DescartesTextFieldLabel{font-family:descartesJS_sansserif,Arial,Helvetica,Sans-serif;font-weight:normal;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-color:#e0e4e8;position:absolute;left:0;top:0;}\ndiv.DescartesGraphicControl{touch-action:none;border-style:none;position:absolute;}\ndiv.DescartesTextAreaContainer{position:absolute;overflow:hidden;background:#c0d0d8;}\nselect.DescartesMenuSelect{font-family:descartesJS_sansserif,Arial,Helvetica,Sans-serif;padding-top:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-color:white;position:absolute;left:0;top:0;}\ndiv.DescartesScrollbarContainer{touch-action:none;background:#eee;overflow:hidden;position:absolute;}";
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.sin,
      d = Math.floor,
      f = Math.random,
      q = Math.round,
      c = Math.abs,
      h = String.fromCharCode,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p;
    a.Krypto = function (a) {
      this.key = (a || 0).toString();
    };
    a.Krypto.prototype.getKey = function (a) {
      g = [];
      for (var e = 0; 256 > e; e++)
        g[e] = h(
          this.alfanum(
            d(
              c(
                7.5 *
                  (k(1 * e - a) +
                    k(1.4 * e + a) +
                    k(0.6 * e - a) +
                    k(2.2 * e + a))
              )
            )
          )
        );
      return g.join("");
    };
    a.Krypto.prototype.encode = function (a) {
      b = d(31 * f());
      this.key = this.getKey(b);
      return h(this.alfanum(b)) + this.encripta(a);
    };
    a.Krypto.prototype.decode = function (a) {
      b = this.numalfa(a.charCodeAt(0));
      this.key = this.getKey(b);
      return this.desencripta(a.substring(1));
    };
    a.Krypto.prototype.encripta = function (a) {
      return this.bytesToString(this.encriptaAux(this.stringToBytes(a)));
    };
    a.Krypto.prototype.encriptaAux = function (a) {
      if (null == a || null == this.key) return null;
      n = Array(3 * a.length);
      for (var b = 0, c = a.length; b < c; b++)
        (e = 256 * d(a[b] + 128) + q(255 * f()) + 65536 * q(255 * f())),
          (p = d((e << this.shift(b)) / 256)),
          (n[3 * b] = this.alfanum(p % 32)),
          (n[3 * b + 1] = this.alfanum((p / 32) % 32)),
          (n[3 * b + 2] = this.alfanum((p / 1024) % 32));
      return n;
    };
    a.Krypto.prototype.desencripta = function (a) {
      return this.bytesToString(this.desencriptaAux(this.stringToBytes(a)));
    };
    a.Krypto.prototype.desencriptaAux = function (a) {
      if (null == a || null == this.key) return null;
      v = Array(a.length / 3);
      for (var b = 0, n = v.length; b < n; b++)
        (p =
          this.numalfa(a[3 * b]) +
          32 * this.numalfa(a[3 * b + 1]) +
          1024 * this.numalfa(a[3 * b + 2])),
          (e = d((256 * p) >> this.shift(b))),
          (x = (d(e / 256) % 256) - 128),
          0 > x && (x += 256),
          (v[b] = x);
      return v;
    };
    a.Krypto.prototype.alfanum = function (a) {
      a = d(a);
      return 10 > a ? 48 + a : 87 + a;
    };
    a.Krypto.prototype.numalfa = function (a) {
      return 58 > a ? a - 48 : a - 87;
    };
    a.Krypto.prototype.stringToBytes = function (a) {
      m = Array(a.length);
      for (var e = 0, b = a.length; e < b; e++) m[e] = a.charCodeAt(e);
      return m;
    };
    a.Krypto.prototype.bytesToString = function (a) {
      for (var e = 0, b = a.length; e < b; e++) a[e] = h(a[e]);
      return a.join("");
    };
    a.Krypto.prototype.shift = function (a) {
      u = this.key.charCodeAt(a % this.key.length);
      m = this.numalfa(u);
      r = d((m / 2) % 8);
      0 == r && (r = 4);
      return r;
    };
    a.Krypto.prototype.parseByte = function (a) {
      a = parseInt(a);
      a = 0 > a ? 0 : a;
      return 255 < a ? 255 : a;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.max;
    a.Animation = function (d, f) {
      this.parent = d;
      var k = d.evaluator,
        c = k.parser,
        h = new a.Auxiliary(d),
        g = this;
      g.delay = f.delay ? c.parse(f.delay) : c.parse("60");
      g.loop = f.loop ? f.loop : !1;
      g.auto = void 0 == f.auto ? !0 : f.auto;
      g.controls = f.controls;
      g.init = h.splitInstructions(c, f.init);
      g.doExpr = h.splitInstructions(c, f.doExpr);
      f.whileExpr && (g.whileExpr = c.parse(f.whileExpr));
      var b,
        u = g.doExpr.length;
      g.animExec = function () {
        for (b = 0; b < u; b++) k.eval(g.doExpr[b]);
        g.parent.update();
        g.playing && (0 < k.eval(g.whileExpr) || g.loop)
          ? (g.timer = a.setTimeout(g.animExec, k.eval(g.delay)))
          : (g.stop(), (g.pause = !1), g.parent.update());
      };
      g.playing = !1;
      g.auto && g.play();
    };
    a.Animation.prototype.play = function () {
      this.playing
        ? ((this.pause = !0), this.stop())
        : (this.pause || this.reinit(),
          (this.playing = !0),
          (this.pause = !1),
          (this.timer = a.setTimeout(
            this.animExec,
            k(10, this.parent.evaluator.eval(this.delay))
          )));
    };
    a.Animation.prototype.stop = function () {
      this.playing = !1;
      a.clearTimeout(this.timer);
    };
    a.Animation.prototype.reinit = function () {
      for (var a = 0, f = this.init.length; a < f; a++)
        this.parent.evaluator.eval(this.init[a]);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Action = function (a, d) {
      this.parent = a;
      this.evaluator = this.parent.evaluator;
    };
    a.Action.prototype.execute = function () {};
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Message = function (k, d) {
      a.Action.call(this, k, d);
      this.parameter = (d || "").replace(/\\n/g, "\n").replace(/&squot;/g, "'");
    };
    a.extend(a.Message, a.Action);
    a.Message.prototype.execute = function () {
      alert(this.parameter);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Calculate = function (k, d) {
      a.Action.call(this, k, d);
      var f = this.evaluator,
        q = f.parser;
      d = (d || "").replace(/&squot;/g, "'");
      d = d.replace(/;/g, "\\n");
      d = d.split("\\n") || [""];
      for (var c = [], h, g = 0, b = d.length; g < b; g++)
        (h = q.parse(d[g], !0)) && c.push(h);
      b = c.length;
      this.execute = function () {
        for (g = 0; g < b; g++) f.eval(c[g]);
      };
    };
    a.extend(a.Calculate, a.Action);
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.OpenURL = function (k, d) {
      a.Action.call(this, k, d);
      this.parameter = d;
      this.target = "_blank";
      var f = this.parameter.indexOf("target");
      -1 != f &&
        ((this.target = this.parameter.substring(f)),
        (this.target = this.target.substring(this.target.indexOf("=") + 1)),
        (this.parameter = this.parameter.substring(0, f - 1)));
      if ("javascript" == this.parameter.substring(0, 10)) {
        this.parameter = new a.SimpleText(
          k,
          this.parameter.substring(11).replace(/&squot;/g, "'")
        );
        var q = this;
        this.actionExec = function () {
          try {
            eval(q.parameter.toString());
          } catch (a) {}
        };
      } else
        "http" != this.parameter.substring(0, 4) &&
          (this.parameter =
            window.location.href.substring(
              0,
              window.location.href.lastIndexOf("/") + 1
            ) + this.parameter),
          (this.actionExec = function () {
            window.open(this.parameter, this.target);
          });
    };
    a.extend(a.OpenURL, a.Action);
    a.OpenURL.prototype.execute = function () {
      this.actionExec();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.OpenScene = function (k, d) {
      a.Action.call(this, k, d);
      this.parameter = d;
      this.target = "_blank";
      var f = this.parameter.indexOf("target");
      -1 != f &&
        ((this.target = this.parameter.substring(f)),
        (this.target = this.target.substring(this.target.indexOf("=") + 1)),
        (this.parameter = this.parameter.substring(0, f - 1)));
      "javascript" == this.parameter.substring(0, 10)
        ? ((this.parameter = this.parameter
            .substring(11)
            .replace(/&squot;/g, "'")),
          (this.actionExec = function () {
            eval(this.parameter);
          }))
        : ("http://" != this.parameter.substring(0, 7) &&
            (this.parameter =
              window.location.href.substring(
                0,
                window.location.href.lastIndexOf("/") + 1
              ) + this.parameter),
          (this.actionExec = function () {
            window.open(
              this.parameter,
              this.target,
              "width=" +
                this.parent.width +
                ",height=" +
                this.parent.height +
                ",left=" +
                (window.screen.width - this.parent.width) / 2 +
                ", top=" +
                (window.screen.height - this.parent.height) / 2 +
                "location=0,menubar=0,scrollbars=0,status=0,titlebar=0,toolbar=0"
            );
          }));
    };
    a.extend(a.OpenScene, a.Action);
    a.OpenScene.prototype.execute = function () {
      this.actionExec();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Config = function (k, d) {
      a.Action.call(this, k, d);
    };
    a.extend(a.Config, a.Action);
    a.Config.prototype.execute = function () {
      this.parent.editor
        ? this.parent.editor.show()
        : window
            .open(
              "about:blank",
              "_blank",
              "width=800px,height=600px,location=no,menubar=no,scrollbars=yes"
            )
            .document.write(
              "<xmp style='width:100%; height:100%;'><script type='text/javascript' src='http://arquimedes.matem.unam.mx/Descartes5/lib/descartes-min.js'>\x3c/script>\n" +
                this.parent.applet.outerHTML
                  .replace(/<applet/g, "<ajs")
                  .replace(/<\/applet/g, "</ajs") +
                "</xmp>"
            );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Init = function (k, d) {
      a.Action.call(this, k, d);
    };
    a.extend(a.Init, a.Action);
    a.Init.prototype.execute = function () {
      this.parent.init();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Clear = function (k, d) {
      a.Action.call(this, k, d);
    };
    a.extend(a.Clear, a.Action);
    a.Clear.prototype.execute = function () {
      this.parent.clear();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Animate = function (k, d) {
      a.Action.call(this, k, d);
    };
    a.extend(a.Animate, a.Action);
    a.Animate.prototype.execute = function () {
      this.parent.play();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.InitAnimation = function (k, d) {
      a.Action.call(this, k, d);
    };
    a.extend(a.InitAnimation, a.Action);
    a.InitAnimation.prototype.execute = function () {
      this.parent.reinitAnimation();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = /[\w\.\-//]*(\.ogg|\.oga|\.mp3|\.wav)/gi;
    a.PlayAudio = function (d, f) {
      a.Action.call(this, d, f);
      f && f.match(k)
        ? (this.filenameExpr = this.evaluator.parser.parse(
            "'" + f.match(k) + "'"
          ))
        : ("" != f &&
            "[" == f[0] &&
            "]" == f[f.length - 1] &&
            (f = f.substring(1, f.length - 1)),
          (this.filenameExpr = this.evaluator.parser.parse(f)));
    };
    a.extend(a.PlayAudio, a.Action);
    a.PlayAudio.prototype.execute = function () {
      var a = (this.theAudio = this.parent.getAudio(
        this.evaluator.eval(this.filenameExpr)
      ));
      a.paused ? a.play() : (a.pause(), (a.currentTime = 0));
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Auxiliary = function (a, d) {
      this.parent = a;
      this.evaluator = this.parent.evaluator;
      this.expresion = this.id = "";
      this.evaluate = "onlyOnce";
      this.local = "";
      for (var c in d) d.hasOwnProperty(c) && (this[c] = d[c]);
    };
    a.Auxiliary.prototype.firstRun = function () {};
    a.Auxiliary.prototype.update = function () {};
    var k, d;
    a.Auxiliary.prototype.splitInstructions = function (a, q) {
      d = [];
      q = q ? q.split(";") : [""];
      for (var c = 0, h = q.length; c < h; c++)
        (k = a.parse(q[c], !0)) && d.push(k);
      return d;
    };
    a.Auxiliary.prototype.getPrivateVariables = function (a, q) {
      d = [];
      q = q ? q.split(/;|,/) : [""];
      for (var c = 0, h = q.length; c < h; c++)
        (k = a.parse(q[c], !0)) && d.push(k);
      c = 0;
      for (h = d.length; c < h; c++)
        d[c] =
          "asign" === d[c].type
            ? d[c].childs[0].value
            : "identifier" === d[c].type
            ? d[c].value
            : "";
      return d;
    };
    a.Auxiliary.prototype.parseExpressions = function (a) {
      this.init = this.splitInstructions(a, this.init);
      this.privateVars = this.getPrivateVariables(a, this.local);
      this.doExpr = this.splitInstructions(a, this.doExpr);
      this.whileExpr = a.parse(this.whileExpr);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Variable = function (k, d) {
      a.Auxiliary.call(this, k, d);
      var f = this.evaluator.parser;
      this.expresionString = this.expresion;
      (this.expresion = f.parse(this.expresionString)) &&
        f.setVariable(this.id, this.expresion);
      this.editable &&
        (this.registerTextField(), (this.parent.editableRegionVisible = !0));
    };
    a.extend(a.Variable, a.Auxiliary);
    a.Variable.prototype.registerTextField = function () {
      var a = document.createElement("div"),
        d = document.createElement("label");
      d.appendChild(document.createTextNode("___" + this.id + "=___"));
      var f = document.createElement("input");
      f.value = this.expresionString;
      f.disabled = !this.editable;
      a.appendChild(d);
      a.appendChild(f);
      var q = this,
        c = q.evaluator.parser;
      f.onkeydown = function (a) {
        13 == a.keyCode &&
          ((q.expresion = c.parse(this.value)),
          c.setVariable(q.id, q.expresion),
          q.parent.update());
      };
      this.parent.editableRegion.textFields.push({ container: a, type: "div" });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Constant = function (k, d) {
      a.Auxiliary.call(this, k, d);
      this.expresion = this.evaluator.parser.parse(this.expresion);
      this.update();
    };
    a.extend(a.Constant, a.Auxiliary);
    a.Constant.prototype.update = function () {
      this.evaluator.setVariable(this.id, this.evaluator.eval(this.expresion));
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f;
    a.Vector = function (f, c) {
      k = f.evaluator;
      d = k.parser;
      this.size = d.parse("3");
      a.Auxiliary.call(this, f, c);
      this.expresion = this.expresion.split(";");
      this.parseFile = d.parse(this.file);
      this.update();
    };
    a.extend(a.Vector, a.Auxiliary);
    a.Vector.prototype.update = function () {
      var q = this.expresion;
      k = this.evaluator;
      d = k.parser;
      this.oldFile = this.file;
      if ((f = k.eval(this.parseFile))) this.file = f;
      var c;
      if (this.file) {
        c =
          (vectorElement = document.getElementById(this.file)) &&
          "descartes/vectorFile" == vectorElement.type
            ? vectorElement.text
            : a.openExternalFile(this.file);
        if (null != c) {
          c = c.replace(/\r/g, "").split("\n");
          for (var h = [], g = 0, b = c.length; g < b; g++)
            "" != c[g] && h.push(c[g]);
          c = h;
        }
        null == c || (1 == c.length && "" == c[0])
          ? (this.size = d.parse("0"))
          : ((q = c), (this.size = null));
        null === this.size && (this.size = d.parse(q.length + ""));
      }
      c = [];
      g = 0;
      for (b = q.length; g < b; g++)
        (h = d.parse(q[g], !0)) &&
          "asign" != h.type &&
          (h = d.parse(this.id + "[" + g + "]=" + q[g], !0)),
          c.push(h);
      q = [];
      q._size_ = k.eval(this.size);
      g = 0;
      for (b = this._size_; g < b; g++) q.push(0);
      k.vectors[this.id] = q;
      k.setVariable(this.id + ".long", q._size_);
      g = 0;
      for (b = c.length; g < b; g++) k.eval(c[g]);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Matrix = function (k, d) {
      var f = k.evaluator,
        q = f.parser;
      this.rows = q.parse("3");
      this.columns = q.parse("3");
      a.Auxiliary.call(this, k, d);
      this.expresion = this.splitInstructions(q, this.expresion);
      var q = f.eval(this.rows),
        c = f.eval(this.columns),
        h = [];
      h.type = "matrix";
      for (var g, b = 0; b < c; b++) {
        g = [];
        for (var u = 0, m = q; u < m; u++) g.push(0);
        h[b] = g;
      }
      f.matrices[this.id] = h;
      this.update();
    };
    a.extend(a.Matrix, a.Auxiliary);
    a.Matrix.prototype.update = function () {
      var a = this.evaluator,
        d = a.eval(this.rows),
        f = a.eval(this.columns);
      a.setVariable(this.id + ".filas", d);
      a.setVariable(this.id + ".columnas", f);
      var q = a.matrices[this.id];
      q.rows = d;
      q.cols = f;
      d = 0;
      for (f = this.expresion.length; d < f; d++) a.eval(this.expresion[d]);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Function = function (k, d) {
      a.Auxiliary.call(this, k, d);
      var f = this.evaluator,
        q = f.parser,
        c = this.id.indexOf("(");
      this.name = this.id.substring(0, c);
      this.params = this.id.substring(c + 1, this.id.indexOf(")"));
      this.domain = this.range ? q.parse(this.range) : q.parse("1");
      this.params = "" == this.params ? [] : this.params.split(",");
      this.numberOfParams = this.params.length;
      this.algorithm || (this.whileExpr = this.doExpr = this.init = "");
      this.parseExpressions(q);
      this.expresion = q.parse(this.expresion);
      var h = this;
      this.functionExec = function () {
        this.iterations = 0;
        if (h.numberOfParams <= arguments.length) {
          for (var c = [], b = 0, d = h.privateVars.length; b < d; b++)
            c.push(f.getVariable(h.privateVars[b])),
              f.setVariable(h.privateVars[b], 0);
          for (var m = [], b = 0, d = h.params.length; b < d; b++)
            (m[b] = f.getVariable(h.params[b]) || 0),
              f.setVariable(h.params[b], arguments[b]);
          b = 0;
          for (d = h.init.length; b < d; b++) f.eval(h.init[b]);
          do {
            b = 0;
            for (d = h.doExpr.length; b < d; b++) f.eval(h.doExpr[b]);
            if (1e5 < ++this.iterations)
              return (
                console.log(
                  "se ha excedido el l\u00edmite de 100000 repeticiones en la funci\u00f3n << " +
                    h.name +
                    " >>"
                ),
                0
              );
          } while (0 < f.eval(h.whileExpr));
          var r = f.eval(h.expresion);
          a.rangeOK = f.eval(h.domain);
          b = 0;
          for (d = h.params.length; b < d; b++)
            f.setVariable(h.params[b], m[b]);
          b = 0;
          for (d = h.privateVars.length; b < d; b++)
            f.setVariable(h.privateVars[b], c[b]);
          return r;
        }
        return 0;
      };
      f.setFunction(this.name, this.functionExec);
    };
    a.extend(a.Function, a.Auxiliary);
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Algorithm = function (k, d) {
      a.Auxiliary.call(this, k, d);
      var f = this.evaluator;
      this.parseExpressions(f.parser);
      this.algorithmExec = function () {
        for (var a = (this.iterations = 0), c = this.init.length; a < c; a++)
          f.eval(this.init[a]);
        do {
          a = 0;
          for (c = this.doExpr.length; a < c; a++) f.eval(this.doExpr[a]);
          if (1e5 < ++this.iterations)
            return (
              console.log(
                "se ha excedido el l\u00edmite de 100000 repeticiones en el algoritmo << " +
                  self.name +
                  " >>"
              ),
              0
            );
        } while (0 < f.eval(this.whileExpr));
      };
    };
    a.extend(a.Algorithm, a.Auxiliary);
    a.Algorithm.prototype.update = function () {
      this.algorithmExec();
      "onlyOnce" === this.evaluate && (this.update = function () {});
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Event = function (k, d) {
      a.Auxiliary.call(this, k, d);
      var f = this.evaluator;
      delete this.evaluate;
      this.condition = f.parser.parse(this.condition);
      this.lastEvaluation = !1;
      this.action = this.parent.lessonParser.parseAction(this);
      "onlyOnce" == this.execution &&
        (this.eventExec = function () {
          0 < this.evaluator.eval(this.condition) &&
            !this.lastEvaluation &&
            ((this.lastEvaluation = !0), this.action.execute());
        });
      "alternate" == this.execution &&
        (this.eventExec = function () {
          var a = 0 < this.evaluator.eval(this.condition);
          3 == this.parent.version
            ? a != this.lastEvaluation &&
              (this.action.execute(), (this.lastEvaluation = a ? !0 : !1))
            : a && !this.lastEvaluation
            ? (this.action.execute(), (this.lastEvaluation = !0))
            : !a && this.lastEvaluation && (this.lastEvaluation = !1);
        });
      "always" == this.execution &&
        (this.eventExec = function () {
          0 < this.evaluator.eval(this.condition) && this.action.execute();
        });
    };
    a.extend(a.Event, a.Auxiliary);
    a.Event.prototype.update = function () {
      this.eventExec();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c;
    a.Graphic = function (c, g) {
      this.parent = c;
      this.evaluator = c.evaluator;
      var b = this.evaluator.parser;
      this.spaceID = "";
      this.background = !1;
      this.type = "";
      this.drawif = b.parse("1");
      this.abs_coord = !1;
      this.color = new a.Color("blue");
      2 !== this.parent.version &&
        ((this.color = new a.Color("20303a")),
        this.parent.arquimedes && (this.color = new a.Color("black")));
      this.trace = "";
      this.expresion = b.parse("(0,0)");
      this.family = "";
      this.family_interval = b.parse("[0,1]");
      this.family_steps = b.parse("8");
      this.editable = !1;
      this.font =
        "Monospaced,PLAIN," + (5 <= this.parent.version ? "15" : "12");
      this.fixed = !0;
      this.text = "";
      this.decimals = b.parse("2");
      for (var d in g) g.hasOwnProperty(d) && (this[d] = g[d]);
      this.space = this.getSpace();
      this.canvas = this.background ? this.space.backCanvas : this.space.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.trace && (this.traceCtx = this.space.backCtx);
      this.font = a.convertFont(this.font);
      this.fontSize = (this.fontSize = this.font.match(/([\d\.]+)px/))
        ? parseFloat(this.fontSize[1])
        : 10;
    };
    a.Graphic.prototype.getSpace = function () {
      for (var a = this.parent.spaces, c, b = 0, d = a.length; b < d; b++)
        if (((c = a[b]), c.id == this.spaceID)) return c;
      return a[0];
    };
    a.Graphic.prototype.getFamilyValues = function () {
      k = this.evaluator;
      d = k.eval(this.family_interval);
      this.familyInf = d[0][0];
      this.familySup = d[0][1];
      this.fSteps = Math.round(k.eval(this.family_steps));
      this.family_sep =
        0 < this.fSteps ? (this.familySup - this.familyInf) / this.fSteps : 0;
    };
    a.Graphic.prototype.drawFamilyAux = function (a, c, b) {
      k = this.evaluator;
      this.getFamilyValues();
      f = k.getVariable(this.family);
      if (0 <= this.fSteps)
        for (var d = 0, m = this.fSteps; d <= m; d++)
          k.setVariable(this.family, this.familyInf + d * this.family_sep),
            0 < k.eval(this.drawif) && (this.update(), this.drawAux(a, c, b));
      k.setVariable("_Text_H_", 0);
      k.setVariable(this.family, f);
    };
    a.Graphic.prototype.draw = function (a, c) {
      "" != this.family
        ? this.drawFamilyAux(this.ctx, a, c)
        : 0 < this.evaluator.eval(this.drawif) &&
          (this.update(), this.drawAux(this.ctx, a, c));
    };
    a.Graphic.prototype.drawTrace = function (a, c) {
      "" != this.family
        ? this.drawFamilyAux(this.traceCtx, a, c)
        : 0 < this.evaluator.eval(this.drawif) &&
          (this.update(), this.drawAux(this.traceCtx, a, c));
    };
    a.Graphic.prototype.drawText = function (a, d, b, f, m, r, n, v, x, e, p) {
      a.textNode = d;
      if ("rtfNode" === d.type)
        (a.fillStyle = m.getColor()),
          (a.strokeStyle = m.getColor()),
          (a.textBaseline = "alphabetic"),
          (a.textNode.pos = { x: b, y: f }),
          d.draw(a, b, f + 1, x, e, n, p, m.getColor());
      else
        for (
          "simpleText" === d.type && (d = d.toString(x, e).split("\\n")),
            b += /Arial|Times/i.test(r) ? -2 : 0,
            k = this.evaluator,
            a.fillStyle = m.getColor(),
            a.font = r,
            a.textAlign = n,
            a.textBaseline = v,
            this.border &&
              ((a.strokeStyle = this.border.getColor()), (a.lineWidth = 4)),
            c = 1.2 * this.fontSize || 0,
            m = 0,
            r = d.length;
          m < r;
          m++
        )
          (q = d[m]),
            this.border &&
              ((a.lineJoin = "round"),
              (a.miterLimit = 2),
              a.strokeText(q, b, f + c * m)),
            a.fillText(q, b, f + c * m);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.SimpleText = function (a, d) {
      this.text = d = d.replace("&#x2013", "\u2013").replace(/\&squot;/g, "'");
      this.textElements = [];
      this.textElementsMacros = [];
      this.parent = a;
      this.evaluator = a.evaluator;
      this.type = "simpleText";
      for (var c = "'", h = 0, g = 0, b = -1, k, m; h < d.length; )
        (k = d.charAt(h)),
          (m = d.charAt(h - 1)),
          "[" === k && "\\" === m
            ? (this.textElements.push(d.substring(g, h - 1) + "["),
              this.textElementsMacros.push("'" + d.substring(g, h - 1) + "['"),
              (g = h + 1))
            : "]" === k && "\\" === m
            ? (this.textElements.push(d.substring(g, h - 1) + "]"),
              this.textElementsMacros.push("'" + d.substring(g, h - 1) + "]'"),
              (g = h + 1))
            : "[" === k && -1 === b
            ? (this.textElements.push(d.substring(g, h)),
              this.textElementsMacros.push("'" + d.substring(g, h) + "'"),
              (g = h),
              b++)
            : "[" === k
            ? b++
            : "]" === k && 0 === b
            ? (this.textElements.push(
                this.evaluator.parser.parse(d.substring(g, h + 1))
              ),
              this.textElementsMacros.push("[" + d.substring(g, h + 1) + "]"),
              (g = h + 1),
              b--)
            : ("]" == d.charAt(h) && (b = 0 > b ? b : b - 1),
              (c += d.charAt(h))),
          h++;
      this.textElements.push(d.substring(g, h));
      this.textElementsMacros.push("'" + d.substring(g, h) + "'");
    };
    var k, d;
    a.SimpleText.prototype.toString = function (f, q) {
      k = "";
      for (var c = 0, h = this.textElements.length; c < h; c++)
        "string" === typeof this.textElements[c]
          ? (k += this.textElements[c])
          : ((d = this.evaluator.eval(this.textElements[c])[0][0]),
            "" !== d &&
              ("string" === typeof d
                ? (k += d)
                : ((d = parseFloat(d)),
                  (d = q
                    ? d.toFixed(f)
                    : a.removeNeedlessDecimals(d.toFixed(f))),
                  (k += d
                    .toString()
                    .replace(".", this.parent.decimal_symbol)))));
      return k;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C;
    a._debug_vez = 0;
    a.Equation = function (b, c) {
      this.width = b.evaluator.parser.parse("1");
      this.fillM = this.fillP = "";
      a.Graphic.call(this, b, c);
      this.parseExpression();
      (this.visible =
        2 === this.parent.version && void 0 == this.visible
          ? !0
          : this.visible) && this.registerTextField();
      n = new a.R2();
      v = new a.R2();
      x = new a.R2();
      l = new a.R2();
      e = new a.R2();
      this.cInd = 0;
    };
    a.extend(a.Equation, a.Graphic);
    a.Equation.prototype.parseExpression = function () {
      if ("compOperator" === this.expresion.type) {
        var e = this.expresion.childs[0],
          b = this.expresion.childs[1];
        "identifier" != e.type || "y" != e.value || b.contains("y")
          ? "identifier" != b.type || "y" != b.value || e.contains("y")
            ? "identifier" != e.type || "x" != e.value || b.contains("x")
              ? "identifier" != b.type ||
                "x" != b.value ||
                e.contains("x") ||
                ((this.funExpr = b),
                (this.of_y = !0),
                (this.drawAux = this.drawAuxFun))
              : ((this.funExpr = b),
                (this.of_y = !0),
                (this.drawAux = this.drawAuxFun))
            : ((this.funExpr = e),
              (this.of_y = !1),
              (this.drawAux = this.drawAuxFun))
          : ((this.funExpr = b),
            (this.of_y = !1),
            (this.drawAux = this.drawAuxFun));
      }
      this.newt = new a.R2Newton(this.evaluator, this.expresion);
    };
    a.Equation.prototype.update = function () {};
    a.Equation.prototype.draw = function () {
      "" != this.family
        ? this.drawFamilyAux(this.ctx, this.fill, this.color)
        : (this.update(), this.drawAux(this.ctx, this.fill, this.color));
    };
    a.Equation.prototype.drawFamilyAux = function (a, e, b) {
      d = this.evaluator;
      this.getFamilyValues();
      tempParam = d.getVariable(this.family);
      if (0 <= this.fSteps)
        for (var n = 0, c = this.fSteps; n <= c; n++)
          d.setVariable(this.family, this.familyInf + n * this.family_sep),
            this.update(),
            this.drawAux(a, e, b);
      d.setVariable(this.family, tempParam);
    };
    a.Equation.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.fill, this.trace);
    };
    var A, J, I, N, z, M, L;
    a.Equation.prototype.drawAux = function (O, Q, P) {
      if (!(0 >= this.evaluator.eval(this.drawif))) {
        d = this.evaluator;
        f = d.parser;
        q = this.space;
        c = d.eval(this.width);
        O.strokeStyle = this.color.getColor();
        O.lineWidth = c;
        h = f.getVariable("x");
        g = f.getVariable("y");
        b = q.w + 24;
        u = q.h + 24;
        m = b / 9;
        3 > m && (m = 3);
        r = u / 7;
        3 > r && (r = 3);
        0 == this.cInd
          ? ((k = []), this.cInd++)
          : (this.cInd = (this.cInd + 1) % 1e5);
        n.set(0, 0);
        v.set(0, 0);
        x.set(0, 0);
        M = 0.25;
        L = 8;
        this.abs_coord || ((M /= q.scale), (L /= q.scale));
        O.beginPath();
        for (C = parseInt(r / 2); C < u; C += r)
          for (K = parseInt(m / 2); K < b; K += m) {
            if (this.abs_coord) {
              l.set(K, C);
              p = this.newt.findZero(l, M);
              if (null == p) continue;
              d.setVariable("x", p.x);
              d.setVariable("y", p.y);
              e.set(p.x, p.y);
            } else {
              l.set(q.getRelativeX(K), q.getRelativeY(C));
              p = this.newt.findZero(l, M);
              if (null == p) continue;
              d.setVariable("x", p.x);
              d.setVariable("y", p.y);
              e.set(q.getAbsoluteX(p.x), q.getAbsoluteY(p.y));
            }
            w = e.ix();
            y = e.iy();
            if (-12 <= w && w < b + 24 && -12 <= y && y < u + 24) {
              if (k[w + 12 + (y + 12) * q.w] === this.cInd) continue;
              k[w + 12 + (y + 12) * q.w] = this.cInd;
            }
            a.rangeOK && (O.moveTo(w, y), O.lineTo(w, y));
            n.x = p.x;
            n.y = p.y;
            v.x = p.x;
            v.y = p.y;
            B = this.newt.getUnitNormal();
            if (0 != B.x || 0 != B.y)
              for (B.rotL90(), x.x = B.x, x.y = B.y, D = E = 0, F = !1; 2 > D; )
                if (
                  (F &&
                    ((x.x = -B.x),
                    (x.y = -B.y),
                    (p.x = n.x),
                    (p.y = n.y),
                    (v.x = p.x),
                    (v.y = p.y),
                    this.abs_coord
                      ? e.set(p.x, p.y)
                      : e.set(q.getAbsoluteX(p.x), q.getAbsoluteY(p.y)),
                    (w = e.ix()),
                    (y = e.iy()),
                    (F = !1),
                    (E = 0)),
                  (p.x += L * x.x),
                  (p.y += L * x.y),
                  (p = this.newt.findZero(p, M)),
                  null != p)
                ) {
                  d.setVariable("x", p.x);
                  d.setVariable("y", p.y);
                  x.x = p.x - v.x;
                  x.y = p.y - v.y;
                  x.normalize();
                  if (0 == x.x && 0 == x.y) break;
                  v.x = p.x;
                  v.y = p.y;
                  this.abs_coord
                    ? e.set(p.x, p.y)
                    : e.set(q.getAbsoluteX(p.x), q.getAbsoluteY(p.y));
                  H = parseInt(e.ix());
                  G = parseInt(e.iy());
                  if (H != w || G != y)
                    if (
                      ((A = w),
                      (J = y),
                      (w = H),
                      (y = G),
                      -12 <= w && w < b + 24 && -12 <= y && y < u + 24)
                    ) {
                      E = 0;
                      I = k[w + 12 + (y + 12) * q.w];
                      k[w + 12 + (y + 12) * q.w] = this.cInd;
                      for (Q = 1; 8 > Q; Q++)
                        (N = A + Math.round(((w - A) * Q) / 8)),
                          (z = J + Math.round(((y - J) * Q) / 8)),
                          0 <= N &&
                            N < b &&
                            0 <= z &&
                            z < u &&
                            (k[N + 12 + (z + 12) * q.w] = this.cInd);
                      a.rangeOK && (O.moveTo(A, J), O.lineTo(w, y));
                      if (I === this.cInd) break;
                    } else (F = !0), D++;
                  else 4 < ++E && ((F = !0), D++);
                }
          }
        O.stroke();
      }
    };
    a.Equation.prototype.X = function (a, e, b) {
      b || (e = this.space.w / 2 + this.space.Ox + this.space.scale * e);
      e < -a && (e = -a);
      e > this.space.w + a && (e = this.space.w + a);
      return e;
    };
    a.Equation.prototype.Y = function (a, e, b) {
      b || (e = this.space.h / 2 + this.space.Oy - this.space.scale * e);
      e < -a && (e = -a);
      e > this.space.h + a && (e = this.space.h + a);
      return e;
    };
    a.Equation.prototype.XX = function (a, e, b) {
      return Math.round(this.X(a, e, b));
    };
    a.Equation.prototype.YY = function (a, e, b) {
      return Math.round(this.Y(a, e, b));
    };
    a.Equation.prototype.extrapolate = function (e, b, n, c, d, m) {
      for (
        var g = this.evaluator.getVariable(b),
          f = m / 2,
          l = 0,
          h,
          v,
          r,
          p,
          k,
          x;
        1e-15 < Math.abs(f);

      ) {
        h = this.evaluator.getVariable(b);
        v = this.evaluator.getVariable(b) + f;
        this.evaluator.setVariable(b, v);
        r = !0;
        try {
          (p = d),
            (d = this.evaluator.eval(this.funExpr)),
            this.evaluator.setVariable(n, d),
            0 < this.evaluator.eval(e)
              ? ((k = new a.R2(Math.min(p, d), Math.max(p, d))),
                (x = 0),
                (x =
                  0 < m
                    ? this.Singularity(Math.abs(f), b, c, h, p, v, d, k)
                    : this.Singularity(Math.abs(f), b, c, v, d, h, p, k)),
                0 < x && (r = !1))
              : (r = !1);
        } catch (u) {
          r = !1;
        }
        r ? (l += f) : this.evaluator.setVariable(b, h);
        f /= 2;
      }
      this.evaluator.setVariable(b, g);
      return new a.R2(l / Math.abs(m), d);
    };
    a.Equation.prototype.extrapolateOnSingularity = function (
      e,
      b,
      n,
      c,
      d,
      m
    ) {
      c = this.evaluator.getVariable(b);
      for (var g = m / 2, f = 0, l = d, h; 1e-15 < Math.abs(g); ) {
        this.evaluator.setVariable(b, this.evaluator.getVariable(b) + g);
        h = !0;
        if (0 < this.evaluator.eval(e))
          try {
            (l = this.evaluator.eval(this.funExpr)),
              this.evaluator.setVariable(n, l),
              0 >= this.evaluator.eval(e) && (h = !1);
          } catch (v) {
            h = !1;
          }
        else h = !1;
        h
          ? (f += g)
          : this.evaluator.setVariable(b, this.evaluator.getVariable(b) - g);
        g /= 2;
      }
      if (0 == f)
        for (g = m / 2, f = m, l = d; 1e-15 < Math.abs(g); ) {
          this.evaluator.setVariable(b, this.evaluator.getVariable(b) - g);
          h = !0;
          if (0 < this.evaluator.eval(e))
            try {
              l = this.evaluator.eval(this.funExpr);
            } catch (v) {
              h = !1;
            }
          else h = !1;
          h
            ? (f += -g)
            : this.evaluator.setVariable(b, this.evaluator.getVariable(b) + g);
          g /= 2;
        }
      this.evaluator.setVariable(b, c);
      return new a.R2(f / Math.abs(m), l);
    };
    a.Equation.prototype.Singularity = function (a, e, b, n, c, d, m, g) {
      if (isNaN(m) || isNaN(c) || isNaN(g.y) || isNaN(g.x) || n >= d) return 2;
      var f = this.evaluator.getVariable(e),
        l = 0;
      try {
        if (
          1e-15 > Math.abs(d - n) ||
          (1e-12 > Math.abs(d - n) && Math.abs(m - c) > Math.abs(a))
        )
          return this.evaluator.setVariable(e, f), 1;
        var h = (n + d) / 2;
        this.evaluator.setVariable(e, h);
        var v = NaN;
        try {
          v = this.evaluator.eval(this.funExpr);
        } catch (r) {
          return 2;
        }
        if (isNaN(v)) return 2;
        if (Math.abs(m - c) > a) {
          this.evaluator.setVariable(e, n - 1e-12);
          var p = this.evaluator.eval(this.funExpr),
            p = (c - p) / 1e-12;
          this.evaluator.setVariable(e, d + 1e-12);
          var k = (this.evaluator.eval(this.funExpr) - m) / 1e-12;
          if (
            (10 > Math.abs(k) || 10 > Math.abs(p)) &&
            ((0 <= k && 0 <= p) || (0 >= k && 0 >= p)) &&
            4 * Math.abs(k) < Math.abs((m - c) / (d - n))
          )
            return this.evaluator.setVariable(e, f), 2;
        }
        if (isNaN(g.x) || isNaN(g.y) || isNaN(v)) return 2;
        if (!(g.x <= v && v <= g.y)) {
          this.evaluator.setVariable(e, h);
          g.x = Math.min(c, v);
          g.y = Math.max(c, v);
          var x = this.Singularity(a / 2, e, b, n, c, h, v, g);
          this.evaluator.setVariable(e, d);
          g.x = Math.min(m, v);
          g.y = Math.max(m, v);
          var u = this.Singularity(a / 2, e, b, h, v, d, m, g),
            l = Math.max(x, u);
        }
      } catch (r) {
        l = 1;
      }
      this.evaluator.setVariable(e, f);
      return l;
    };
    a.Equation.prototype.drawAuxFun = function (e, b, n) {
      h = this.evaluator.parser.getVariable("x");
      g = this.evaluator.parser.getVariable("y");
      a.rangeOK = 1;
      b = "x";
      n = "y";
      this.of_y && ((b = "y"), (n = "x"));
      var c = this.drawif,
        d = this.evaluator.eval(this.width),
        m = !1,
        f = new a.R2(
          this.space.w / 2 + this.space.Ox,
          this.space.h / 2 + this.space.Oy
        ),
        f = this.of_y ? f.ix() : f.iy(),
        l = 0,
        v = 0,
        p = 0,
        r = 0,
        k = 1 / this.space.scale,
        x =
          k *
          (this.of_y
            ? Math.ceil(-this.space.h + (this.space.h / 2 + this.space.Oy))
            : -Math.ceil(this.space.w / 2 + this.space.Ox)),
        u = 0;
      this.abs_coord && ((x = 0), (k = 1));
      for (
        var q,
          z,
          w,
          y,
          A,
          E,
          B,
          M,
          D,
          C = this.of_y ? this.space.h + 4 : this.space.w + 4;
        p <= C;

      ) {
        q = !0;
        z = 0;
        this.evaluator.setVariable(b, x);
        try {
          (w = this.evaluator.eval(this.funExpr)),
            isNaN(w) ||
              (this.evaluator.setVariable(n, w),
              0 < this.evaluator.eval(this.drawif) && a.rangeOK
                ? (m
                    ? ((y = Math.min(u, w)),
                      (A = Math.max(u, w)),
                      (E = new a.R2(y, A)),
                      (z = this.Singularity(k, b, 0, x - k, u, x, w, E)),
                      0 === z
                        ? (u <= w
                            ? ((u = E.x), (w = E.y))
                            : ((w = E.x), (u = E.y)),
                          (B = parseInt(
                            this.of_y
                              ? this.XX(d, u, this.abs_coord)
                              : this.YY(d, u, this.abs_coord)
                          )),
                          (l = this.abs_coord
                            ? Math.round(w)
                            : parseInt(
                                this.of_y
                                  ? this.XX(d, w, this.abs_coord)
                                  : this.YY(d, w, this.abs_coord)
                              )),
                          this.fillM &&
                            l > f &&
                            ((e.lineWidth = 1),
                            (e.strokeStyle = this.fillM.getColor()),
                            e.beginPath(),
                            this.of_y
                              ? (e.moveTo(f + 1, this.space.h - p + 0.5),
                                e.lineTo(l, this.space.h - p + 0.5))
                              : (e.moveTo(p + 0.5, f + 1),
                                e.lineTo(p + 0.5, l)),
                            e.stroke()),
                          this.fillP &&
                            l < f &&
                            ((e.lineWidth = 1),
                            (e.strokeStyle = this.fillP.getColor()),
                            e.beginPath(),
                            this.of_y
                              ? (e.moveTo(f - 1, this.space.h - p + 0.5),
                                e.lineTo(l, this.space.h - p + 0.5))
                              : (e.moveTo(p + 0.5, f - 1),
                                e.lineTo(p + 0.5, l)),
                            e.stroke()),
                          (e.lineWidth = d),
                          (e.strokeStyle = this.color.getColor()),
                          e.beginPath(),
                          this.of_y
                            ? (e.moveTo(B + 0.5, this.space.h - r),
                              e.lineTo(l + 0.5, this.space.h - p))
                            : (e.moveTo(r + 0.5, B), e.lineTo(p + 0.5, l)))
                        : 1 === z
                        ? (this.evaluator.setVariable(b, x - k),
                          (M = this.extrapolate(c, b, n, 0, u, k)),
                          (l = parseInt(
                            this.of_y
                              ? this.XX(d, M.y, this.abs_coord)
                              : this.YY(d, M.y, this.abs_coord)
                          )),
                          (e.lineWidth = d),
                          (e.strokeStyle = this.color.getColor()),
                          e.beginPath(),
                          this.of_y
                            ? (e.moveTo(v + 0.5, this.space.h - r),
                              e.lineTo(
                                l + 0.5,
                                this.space.h - r + Math.round(M.x)
                              ))
                            : (e.moveTo(r + 0.5, v),
                              e.lineTo(r + Math.round(M.x) + 0.5, l)),
                          this.evaluator.setVariable(b, x),
                          (D = this.extrapolate(c, b, n, 0, w, -k)),
                          (v = this.YY(d, D.y, this.abs_coord)),
                          (l = this.YY(d, w, this.abs_coord)),
                          (e.lineWidth = d),
                          (e.strokeStyle = this.color.getColor()),
                          e.beginPath(),
                          this.of_y
                            ? (e.moveTo(v + 0.5, this.space.h - p),
                              e.lineTo(l + 0.5, this.space.h - p))
                            : (e.moveTo(p + 0.5, v), e.lineTo(p + 0.5, l)))
                        : ((l = parseInt(
                            this.of_y
                              ? this.XX(d, w, this.abs_coord)
                              : this.YY(d, w, this.abs_coord)
                          )),
                          (e.lineWidth = d),
                          (e.strokeStyle = this.color.getColor()),
                          e.beginPath(),
                          this.of_y
                            ? (e.moveTo(l + 0.5, this.space.h - p),
                              e.lineTo(l + 0.5, this.space.h - p))
                            : (e.moveTo(p + 0.5, l), e.lineTo(p + 0.5, l))))
                    : ((D = this.extrapolateOnSingularity(c, b, n, 0, w, -k)),
                      (v = this.of_y
                        ? this.XX(d, D.y, this.abs_coord)
                        : this.YY(d, D.y, this.abs_coord)),
                      (l = parseInt(
                        this.of_y
                          ? this.XX(d, w, this.abs_coord)
                          : this.YY(d, w, this.abs_coord)
                      )),
                      (e.lineWidth = d),
                      (e.strokeStyle = this.color.getColor()),
                      e.beginPath(),
                      this.of_y
                        ? (e.moveTo(
                            v,
                            this.space.h - (p + Math.round(D.x)) + 0.5
                          ),
                          e.lineTo(l, this.space.h - p + 0.5))
                        : (e.moveTo(p + Math.round(D.x), v), e.lineTo(p, l))),
                  e.stroke(),
                  (u = w))
                : (q = !1));
        } catch (F) {
          q = !1;
        }
        m &&
          !q &&
          (this.evaluator.setVariable(b, x - k),
          this.evaluator.setVariable(n, u),
          (M = this.extrapolate(c, b, n, 0, u, k)),
          (l = parseInt(
            this.of_y
              ? this.XX(d, M.y, this.abs_coord)
              : this.YY(d, M.y, this.abs_coord)
          )),
          0 < this.evaluator.eval(this.drawif) &&
            a.rangeOK &&
            ((e.lineWidth = d),
            (e.strokeStyle = this.color.getColor()),
            e.beginPath(),
            this.of_y
              ? (e.moveTo(v, this.space.h - (r + Math.round(M.x)) + 0.5),
                e.lineTo(l, this.space.h - (r + Math.round(M.x)) + 0.5))
              : (e.moveTo(r + Math.round(M.x) + 0.5, v),
                e.lineTo(r + Math.round(M.x) + 0.5, l)),
            e.stroke()),
          this.evaluator.setVariable(b, x));
        m = q;
        x += k;
        v = l;
        r = p++;
      }
      this.evaluator.parser.setVariable("x", h);
      this.evaluator.parser.setVariable("y", g);
    };
    a.Equation.prototype.registerTextField = function () {
      var a = document.createElement("input");
      a.value = this.expresionString;
      a.disabled = !this.editable;
      var e = this;
      a.onkeydown = function (a) {
        13 == a.keyCode &&
          ((e.expresion = e.evaluator.parser.parse(this.value)),
          e.parseExpression(),
          e.parent.update());
      };
      this.parent.editableRegion.textFields.push(a);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.round,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n;
    a.Curve = function (b, n) {
      this.parameter = "t";
      this.parameter_interval = b.evaluator.parser.parse("[0,1]");
      this.parameter_steps = b.evaluator.parser.parse("8");
      this.width = b.evaluator.parser.parse("1");
      this.fill = "";
      a.Graphic.call(this, b, n);
      (this.visible = 2 == this.parent.version && void 0 == this.visible) &&
        this.registerTextField();
    };
    a.extend(a.Curve, a.Graphic);
    a.Curve.prototype.update = function () {
      d = this.evaluator;
      f = d.eval(this.parameter_interval);
      this.paraInf = f[0][0];
      this.paraSup = f[0][1];
      this.pSteps = d.eval(this.parameter_steps);
      this.paraSep =
        0 < this.pSteps
          ? Math.abs(this.paraSup - this.paraInf) / this.pSteps
          : 0;
    };
    a.Curve.prototype.draw = function () {
      this.uber.draw.call(this, this.fill, this.color);
    };
    a.Curve.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.fill, this.trace);
    };
    a.Curve.prototype.drawAux = function (f, x, e) {
      d = this.evaluator;
      q = this.space;
      c = k(d.eval(this.width));
      f.lineWidth = 0 < c ? c : 1e-6;
      f.lineCap = "round";
      f.lineJoin = "round";
      f.strokeStyle = e.getColor();
      h = d.getVariable(this.parameter);
      f.beginPath();
      d.setVariable(this.parameter, this.paraInf);
      g = d.eval(this.expresion);
      this.exprX = k(this.abs_coord ? g[0][0] : q.getAbsoluteX(g[0][0]));
      this.exprY = k(this.abs_coord ? g[0][1] : q.getAbsoluteY(g[0][1]));
      this.rotateExp &&
        ((b = a.degToRad(d.eval(this.rotateExp))),
        (u = Math.cos(b)),
        (m = Math.sin(b)),
        (r = this.exprX * u - this.exprY * m),
        (n = this.exprX * m + this.exprY * u),
        (this.exprX = r),
        (this.exprY = n));
      f.moveTo(this.exprX + 0.5, this.exprY + 0.5);
      for (e = 1; e <= this.pSteps; e++)
        d.setVariable(this.parameter, this.paraInf + e * this.paraSep),
          (g = d.eval(this.expresion)),
          (this.exprX = this.abs_coord
            ? k(g[0][0])
            : k(q.getAbsoluteX(g[0][0]))),
          (this.exprY = this.abs_coord
            ? k(g[0][1])
            : k(q.getAbsoluteY(g[0][1]))),
          this.rotateExp &&
            ((r = this.exprX * u - this.exprY * m),
            (n = this.exprX * m + this.exprY * u),
            (this.exprX = r),
            (this.exprY = n)),
          f.lineTo(this.exprX + 0.5, this.exprY + 0.5);
      this.fill && ((f.fillStyle = x.getColor()), f.fill("evenodd"));
      f.stroke();
      d.setVariable(this.parameter, h);
    };
    a.Curve.prototype.registerTextField = function () {
      var a = document.createElement("input");
      a.value = this.expresionString;
      a.disabled = !this.editable;
      var b = this;
      a.onkeydown = function (a) {
        13 == a.keyCode &&
          ((b.expresion = b.evaluator.parser.parse(this.value)),
          b.parent.update());
      };
      this.parent.editableRegion.textFields.push(a);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = 2 * Math.PI,
      d = Math.round,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p;
    a.Sequence = function (e, b) {
      this.size = e.evaluator.parser.parse("2");
      this.range = e.evaluator.parser.parse("[1, 100]");
      a.Graphic.call(this, e, b);
    };
    a.extend(a.Sequence, a.Graphic);
    a.Sequence.prototype.update = function () {
      f = this.evaluator;
      c = f.eval(this.expresion);
      this.exprX = c[0][0];
      this.exprY = c[0][1];
      this.rotateExp &&
        ((h = a.degToRad(f.eval(this.rotateExp))),
        (g = Math.cos(h)),
        (b = Math.sin(h)),
        (u = this.exprX * g - this.exprY * b),
        (m = this.exprX * b + this.exprY * g),
        (this.exprX = u),
        (this.exprY = m));
      v = f.eval(this.range);
      this.rangeInf = v[0][0];
      this.rangeMax = v[0][1];
    };
    a.Sequence.prototype.draw = function () {
      this.uber.draw.call(this, this.color, this.color);
    };
    a.Sequence.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Sequence.prototype.drawAux = function (a, b) {
      f = this.evaluator;
      q = this.space;
      e = x = Math.ceil(f.eval(this.size) - 0.4);
      a.fillStyle = b.getColor();
      a.beginPath();
      this.rangeInf > this.rangeMax &&
        ((p = this.rangeInf),
        (this.rangeInf = this.rangeMax),
        (this.rangeMax = p));
      for (
        var m = f.getVariable("n"), g = this.rangeInf, h = this.rangeMax;
        g <= h;
        g++
      )
        f.setVariable("n", g),
          (c = f.eval(this.expresion)),
          (this.exprX = c[0][0]),
          (this.exprY = c[0][1]),
          (r = d(this.abs_coord ? this.exprX : q.getAbsoluteX(this.exprX))),
          (n = d(this.abs_coord ? this.exprY : q.getAbsoluteY(this.exprY))),
          a.beginPath(),
          a.arc(r, n, x, 0, k, !0),
          a.fill();
      a.fill();
      this.text != [""] &&
        this.uber.drawText.call(
          this,
          a,
          this.text,
          r + e,
          n - e,
          this.color,
          this.font,
          "start",
          "alphabetic",
          f.eval(this.decimals),
          this.fixed,
          !0
        );
      f.setVariable("n", m);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = 2 * Math.PI,
      d = Math.round,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x;
    a.Point = function (e, b) {
      this.size = e.evaluator.parser.parse("2");
      a.Graphic.call(this, e, b);
    };
    a.extend(a.Point, a.Graphic);
    a.Point.prototype.update = function () {
      f = this.evaluator;
      c = f.eval(this.expresion);
      this.exprX = c[0][0];
      this.exprY = c[0][1];
      this.rotateExp &&
        ((h = a.degToRad(f.eval(this.rotateExp))),
        (g = Math.cos(h)),
        (b = Math.sin(h)),
        (u = this.exprX * g - this.exprY * b),
        (m = this.exprX * b + this.exprY * g),
        (this.exprX = u),
        (this.exprY = m));
    };
    a.Point.prototype.draw = function () {
      this.uber.draw.call(this, this.color, this.color);
    };
    a.Point.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Point.prototype.drawAux = function (a, b) {
      f = this.evaluator;
      q = this.space;
      v = d(f.eval(this.size));
      x = v + 1;
      a.fillStyle = b.getColor();
      r = d(this.abs_coord ? this.exprX : q.getAbsoluteX(this.exprX));
      n = d(this.abs_coord ? this.exprY : q.getAbsoluteY(this.exprY));
      a.beginPath();
      a.arc(r, n, v, 0, k, !0);
      a.fill();
      this.text != [""] &&
        this.uber.drawText.call(
          this,
          a,
          this.text,
          r + x + 1,
          n - x,
          this.color,
          this.font,
          "start",
          "alphabetic",
          f.eval(this.decimals),
          this.fixed,
          !0
        );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.round,
      d = 2 * Math.PI,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B;
    a.Segment = function (e, b) {
      this.width = e.evaluator.parser.parse("1");
      this.size = e.evaluator.parser.parse("2");
      a.Graphic.call(this, e, b);
    };
    a.extend(a.Segment, a.Graphic);
    a.Segment.prototype.update = function () {
      f = this.evaluator;
      c = f.eval(this.expresion);
      this.endPoints = [];
      for (var e = 0, n = c.length; e < n; e++)
        this.endPoints[e] = { x: c[e][0], y: c[e][1] };
      if (this.rotateExp)
        for (
          h = a.degToRad(f.eval(this.rotateExp)),
            g = Math.cos(h),
            b = Math.sin(h),
            e = 0,
            n = this.endPoints.length;
          e < n;
          e++
        )
          (u = this.endPoints[e].x * g - this.endPoints[e].y * b),
            (m = this.endPoints[e].x * b + this.endPoints[e].y * g),
            (this.endPoints[e].x = u),
            (this.endPoints[e].y = m);
    };
    a.Segment.prototype.draw = function () {
      this.uber.draw.call(this, this.color, this.color);
    };
    a.Segment.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Segment.prototype.drawAux = function (a, b, c) {
      f = this.evaluator;
      q = this.space;
      r = k(f.eval(this.width));
      a.lineWidth = 0 < r ? r : 1e-6;
      e = f.eval(this.size);
      0 > e && (e = 0);
      a.fillStyle = b.getColor();
      a.strokeStyle = c.getColor();
      a.lineCap = "round";
      n = 10 + a.lineWidth;
      p = 0 == a.lineWidth % 2 ? 0 : 0.5;
      this.abs_coord
        ? ((l = k(this.endPoints[0].x)),
          (w = k(this.endPoints[0].y)),
          (y = k(this.endPoints[1].x)),
          (B = k(this.endPoints[1].y)))
        : ((l = k(q.getAbsoluteX(this.endPoints[0].x))),
          (w = k(q.getAbsoluteY(this.endPoints[0].y))),
          (y = k(q.getAbsoluteX(this.endPoints[1].x))),
          (B = k(q.getAbsoluteY(this.endPoints[1].y))));
      a.beginPath();
      a.moveTo(l + p, w + p);
      a.lineTo(y + p, B + p);
      a.stroke();
      0 < e &&
        (a.beginPath(),
        a.arc(l, w, e, 0, d, !0),
        a.arc(y, B, e, 0, d, !0),
        a.fill());
      this.text != [""] &&
        ((v = parseInt((l + y) / 2) - 3),
        (x = parseInt((w + B) / 2) + 3),
        this.uber.drawText.call(
          this,
          a,
          this.text,
          v + n,
          x - n,
          this.color,
          this.font,
          "start",
          "alphabetic",
          f.eval(this.decimals),
          this.fixed,
          !0
        ));
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor,
      d = Math.round,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B;
    a.Arrow = function (e, b) {
      this.width = e.evaluator.parser.parse("5");
      this.size = e.evaluator.parser.parse("2");
      this.spear = e.evaluator.parser.parse("8");
      this.arrow = new a.Color("ee0022");
      a.Graphic.call(this, e, b);
    };
    a.extend(a.Arrow, a.Graphic);
    a.Arrow.prototype.update = function () {
      f = this.evaluator;
      q = f.eval(this.expresion);
      this.endPoints = [];
      for (var e = 0, n = q.length; e < n; e++)
        this.endPoints[e] = { x: q[e][0], y: q[e][1] };
      if (this.rotateExp)
        for (
          c = a.degToRad(f.eval(this.rotateExp)),
            h = Math.cos(c),
            g = Math.sin(c),
            e = 0,
            n = this.endPoints.length;
          e < n;
          e++
        )
          (b = this.endPoints[e].x * h - this.endPoints[e].y * g),
            (u = this.endPoints[e].x * g + this.endPoints[e].y * h),
            (this.endPoints[e].x = b),
            (this.endPoints[e].y = u);
    };
    a.Arrow.prototype.draw = function () {
      this.uber.draw.call(this, this.arrow, this.color);
    };
    a.Arrow.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.arrow, this.trace);
    };
    a.Arrow.prototype.drawAux = function (b, c, g) {
      f = this.evaluator;
      m = this.space;
      f.eval(this.size);
      v = f.eval(this.width);
      0 > v && (v = 0);
      x = Math.ceil(v / 2);
      e = m.scale;
      this.vect = new a.Vector2D(
        this.endPoints[1].x - this.endPoints[0].x,
        this.endPoints[1].y - this.endPoints[0].y
      );
      p = this.vect.vectorLength();
      this.angle = this.vect.angleBetweenVectors(a.Vector2D.AXIS_X);
      b.fillStyle = c.getColor();
      b.strokeStyle = g.getColor();
      b.lineWidth = 2;
      this.abs_coord
        ? ((l = d(this.endPoints[0].x)),
          (w = d(this.endPoints[0].y)),
          (y = d(this.endPoints[1].x)),
          (B = d(this.endPoints[1].y)))
        : ((l = d(m.getAbsoluteX(this.endPoints[0].x))),
          (w = d(m.getAbsoluteY(this.endPoints[0].y))),
          (y = d(m.getAbsoluteX(this.endPoints[1].x))),
          (B = d(m.getAbsoluteY(this.endPoints[1].y))));
      c = f.eval(this.spear);
      0 > c && (c = 0);
      b.save();
      b.translate(l, w, p);
      this.abs_coord
        ? (0 <= this.vect.x && 0 <= this.vect.y) ||
          (0 >= this.vect.x && 0 <= this.vect.y)
          ? b.rotate(this.angle)
          : b.rotate(-this.angle)
        : ((p *= e),
          (0 <= this.vect.x && 0 <= this.vect.y) ||
          (0 >= this.vect.x && 0 <= this.vect.y)
            ? b.rotate(-this.angle)
            : b.rotate(this.angle));
      b.beginPath();
      b.moveTo(-x, k(-x));
      b.lineTo(k(p - c - v), k(-x));
      b.lineTo(k(p - 2 * c), k(-c - x));
      b.lineTo(k(p), 0);
      b.lineTo(k(p - 2 * c), k(c + x));
      b.lineTo(k(p - c - v), k(x));
      b.lineTo(-x, k(x));
      b.closePath();
      b.stroke();
      b.fill();
      b.restore();
      this.text != [""] &&
        ((r = parseInt((l + y) / 2) - 3),
        (n = parseInt((w + B) / 2) + 3),
        this.uber.drawText.call(
          this,
          b,
          this.text,
          r,
          n,
          g,
          this.font,
          "start",
          "alphabetic",
          f.eval(this.decimals),
          this.fixed,
          !0
        ));
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.round,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v;
    a.Polygon = function (b, e) {
      this.width = b.evaluator.parser.parse("1");
      this.fill = "";
      a.Graphic.call(this, b, e);
      this.endPoints = [];
    };
    a.extend(a.Polygon, a.Graphic);
    a.Polygon.prototype.update = function () {
      d = this.evaluator;
      q = d.eval(this.expresion);
      for (var n = 0, e = q.length; n < e; n++)
        this.endPoints[n] = { x: q[n][0], y: q[n][1] };
      if (this.rotateExp)
        for (
          c = a.degToRad(d.eval(this.rotateExp)),
            h = Math.cos(c),
            g = Math.sin(c),
            n = 0,
            e = this.endPoints.length;
          n < e;
          n++
        )
          (b = this.endPoints[n].x * h - this.endPoints[n].y * g),
            (u = this.endPoints[n].x * g + this.endPoints[n].y * h),
            (this.endPoints[n].x = b),
            (this.endPoints[n].y = u);
    };
    a.Polygon.prototype.draw = function () {
      this.uber.draw.call(this, this.fill, this.color);
    };
    a.Polygon.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Polygon.prototype.drawAux = function (a, e, b) {
      d = this.evaluator;
      f = this.space;
      m = k(d.eval(this.width));
      a.lineWidth = 0 < m ? m : 1e-6;
      a.strokeStyle = b.getColor();
      a.lineCap = "round";
      a.lineJoin = "round";
      r = 0 < m ? 0.5 : 0;
      n = k(
        this.abs_coord
          ? this.endPoints[0].x
          : f.getAbsoluteX(this.endPoints[0].x)
      );
      v = k(
        this.abs_coord
          ? this.endPoints[0].y
          : f.getAbsoluteY(this.endPoints[0].y)
      );
      a.beginPath();
      a.moveTo(n + r, v + r);
      b = 1;
      for (var c = this.endPoints.length; b < c; b++)
        (n = k(
          this.abs_coord
            ? this.endPoints[b].x
            : f.getAbsoluteX(this.endPoints[b].x)
        )),
          (v = k(
            this.abs_coord
              ? this.endPoints[b].y
              : f.getAbsoluteY(this.endPoints[b].y)
          )),
          a.lineTo(n + r, v + r);
      this.fill && ((a.fillStyle = e.getColor()), a.fill());
      a.stroke();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.round,
      d = Math.min,
      f = Math.max,
      q = Math.acos,
      c = Math.sqrt,
      h = Math.PI,
      g = h / 2,
      b = 2 * h,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J;
    a.Arc = function (e, b) {
      this.width = e.evaluator.parser.parse("1");
      this.fill = "";
      this.center = e.evaluator.parser.parse("(0,0)");
      this.radius = e.evaluator.parser.parse("1");
      this.init = "0";
      this.end = "90";
      a.Graphic.call(this, e, b);
      this.init.match(/^_\(/) &&
        ((this.initFlag = !0), (this.init = this.init.substring(1)));
      this.end.match(/^_\(/) &&
        ((this.endFlag = !0), (this.end = this.end.substring(1)));
      this.initExpr = e.evaluator.parser.parse(this.init);
      this.endExpr = e.evaluator.parser.parse(this.end);
    };
    a.extend(a.Arc, a.Graphic);
    a.Arc.prototype.update = function () {
      u = this.evaluator;
      m = u.eval(this.center);
      this.exprX = m[0][0];
      this.exprY = m[0][1];
      r = 0;
      this.rotateExp &&
        ((r = a.degToRad(u.eval(this.rotateExp))),
        (n = Math.cos(r)),
        (v = Math.sin(r)),
        (x = this.exprX * n - this.exprY * v),
        (e = this.exprX * v + this.exprY * n),
        (this.exprX = x),
        (this.exprY = e));
      var k = u.eval(this.initExpr),
        A = u.eval(this.endExpr);
      /^(\(|\[)expr(\)|\])$/i.test(this.initExpr.type) &&
      /^(\(|\[)expr(\)|\])$/i.test(this.endExpr.type)
        ? ((p = k[0][0]),
          (l = k[0][1]),
          (w = A[0][0]),
          (y = A[0][1]),
          this.vectors
            ? this.abs_coord && ((l = -l), (y = -y))
            : this.abs_coord
            ? ((p -= this.exprX),
              (l = -l + this.exprY),
              (w -= this.exprX),
              (y = -y + this.exprY))
            : ((p -= this.exprX),
              (l -= this.exprY),
              (w -= this.exprX),
              (y -= this.exprY)),
          (B = 0 == p ? (0 > l ? -g : g) : q((1 * p) / c(p * p + l * l))),
          (E = 0 == w ? (0 > y ? -g : g) : q((1 * w) / c(w * w + y * y))),
          (B += r),
          (E += r),
          0 < p && 0 < l && this.abs_coord && (B = b - B),
          0 < p && 0 > l && !this.abs_coord && (B = b - B),
          0 > p && 0 > l && !this.abs_coord && (B = b - B),
          0 > p && 0 < l && this.abs_coord && (B = b - B),
          0 < w && 0 < y && this.abs_coord && (E = b - E),
          0 < w && 0 > y && !this.abs_coord && (E = b - E),
          0 > w && 0 > y && !this.abs_coord && (E = b - E),
          0 > w && 0 < y && this.abs_coord && (E = b - E),
          this.initFlag
            ? ((D = B), (B = E), (E = D))
            : ((D = d(B, E)),
              (F = f(B, E)),
              (B = D),
              (E = F),
              E - B > h && this.abs_coord && ((B = F), (E = D)),
              E - B <= h && !this.abs_coord && ((B = F), (E = D))),
          (this.iniAng = B),
          (this.endAng = E),
          (this.drawPoints = !0))
        : ((this.iniAng = a.degToRad(k) + r),
          (this.endAng = a.degToRad(A) + r),
          (this.drawAngle = !0));
    };
    a.Arc.prototype.draw = function () {
      this.uber.draw.call(this, this.fill, this.color);
    };
    a.Arc.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.fill, this.trace);
    };
    a.Arc.prototype.drawAux = function (a, e, b) {
      u = this.evaluator;
      H = this.space;
      C = u.eval(this.radius);
      0 > C && (C = 0);
      J = k(u.eval(this.width));
      a.lineWidth = 0 < J ? J : 1e-6;
      a.lineCap = "round";
      a.strokeStyle = b.getColor();
      this.drawAngle
        ? (this.abs_coord
            ? ((G = k(this.exprX)), (K = k(this.exprY)))
            : ((G = k(H.getAbsoluteX(this.exprX))),
              (K = k(H.getAbsoluteY(this.exprY))),
              (C *= H.scale),
              (this.iniAng = -this.iniAng),
              (this.endAng = -this.endAng)),
          this.iniAng > this.endAng &&
            ((A = this.iniAng), (this.iniAng = this.endAng), (this.endAng = A)))
        : this.drawPoints &&
          (this.abs_coord
            ? ((G = k(this.exprX)), (K = k(this.exprY)))
            : ((G = k(H.getAbsoluteX(this.exprX))),
              (K = k(H.getAbsoluteY(this.exprY))),
              (C *= H.scale),
              (this.iniAng = -this.iniAng),
              (this.endAng = -this.endAng)));
      this.fill &&
        ((a.fillStyle = e.getColor()),
        a.beginPath(),
        a.moveTo(G, K),
        a.arc(G, K, C, this.iniAng, this.endAng, void 0),
        a.fill());
      a.beginPath();
      a.arc(G, K, C, this.iniAng, this.endAng, void 0);
      a.stroke();
      this.text != [""] &&
        this.uber.drawText.call(
          this,
          a,
          this.text,
          G + 4,
          K - 2,
          this.color,
          this.font,
          "start",
          "alphabetic",
          u.eval(this.decimals),
          this.fixed,
          !0
        );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u, m, r, n, v, x, e, p, l, w, y;
    a.Text = function (e, b) {
      this.width = e.evaluator.parser.parse("0");
      a.Graphic.call(this, e, b);
      this.align || (this.align = "start");
      this.ascent =
        this.fontSize -
        Math.ceil(this.fontSize / 7) -
        (this.font.match("Courier") ? 3 : 0);
      this.descent = a.getFontMetrics(this.font).descent;
      this.abs_coord = !0;
    };
    a.extend(a.Text, a.Graphic);
    a.Text.prototype.update = function () {
      k = this.evaluator;
      d = k.eval(this.expresion);
      this.exprX = d[0][0];
      this.exprY = d[0][1];
      this.rotateExp &&
        ((f = a.degToRad(k.eval(this.rotateExp))),
        (q = Math.cos(f)),
        (c = Math.sin(f)),
        (h = this.exprX * q - this.exprY * c),
        (g = this.exprX * c + this.exprY * q),
        (this.exprX = h),
        (this.exprY = g));
      4 <= d[0].length &&
        ((this.centered = !0), (this.exprW = d[0][2]), (this.exprH = d[0][3]));
    };
    a.Text.prototype.draw = function () {
      this.uber.draw.call(this, this.color);
    };
    a.Text.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.color);
    };
    a.Text.prototype.drawAux = function (a, e) {
      w = this.evaluator.eval(this.decimals);
      "rtfNode" === this.text.type
        ? ((r = this.text), (this.ascent = 0))
        : (r = this.splitText(this.text.toString(w, this.fixed).split("\\n")));
      if (this.text != [""]) {
        var b = parseInt(this.exprX) + 5,
          n = parseInt(this.exprY) + this.ascent;
        this.centered &&
          ((b = this.getMaxWidth(r)),
          (b = parseInt(this.exprX + (this.exprW - b) / 2)),
          (n = parseInt(
            this.exprY +
              this.descent +
              (this.exprH - 1.2 * this.fontSize * (r.length - 1)) / 2
          )));
        this.uber.drawText.call(
          this,
          a,
          r,
          b,
          n,
          e,
          this.font,
          this.align,
          "alphabetic",
          w,
          this.fixed
        );
      }
    };
    a.Text.prototype.splitText = function (e) {
      k = this.evaluator;
      b = k.eval(this.width);
      r = [];
      if (20 <= b && "undefined" != e.type) {
        for (var c = 0, d = e.length; c < d; c++)
          (u = e[c]),
            (m = a.getTextWidth(u, this.font)),
            m > b ? (r = r.concat(this.splitWords(u, b))) : r.push(u);
        n = Math.floor(1.2 * this.fontSize) * r.length;
        k.setVariable("_Text_H_", n);
        return r;
      }
      k.setVariable("_Text_H_", 0);
      return e;
    };
    a.Text.prototype.splitWords = function (b, n) {
      v = b;
      x = [];
      e = "";
      for (var c = (l = 0), d = b.length; c < d; c++)
        (p = v.charAt(c)),
          " " === p && (lastIndexOfWhite = c),
          (e += p),
          a.getTextWidth(e, this.font) > n &&
            ((y = b.substring(l, c + 1)),
            " " !== p &&
              (-1 === y.indexOf(" ")
                ? ((lastIndexOfWhite = c), c--)
                : (c = lastIndexOfWhite)),
            x.push(b.substring(l, lastIndexOfWhite)),
            (e = ""),
            (l = c + 1));
      x.push(b.substring(l));
      return x;
    };
    a.Text.prototype.getMaxWidth = function (e) {
      for (var b = -1, n = 0, c = e.length; n < c; n++)
        (u = e[n]), (b = Math.max(b, a.getTextWidth(u, this.font)));
      return b;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.round,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l;
    a.Image = function (e, b) {
      this.file = "";
      this.inirot = e.evaluator.parser.parse("0");
      a.Graphic.call(this, e, b);
      this.img = new Image();
      this.scaleY = this.scaleX = 1;
      this.ratio = e.ratio;
      this.update();
    };
    a.extend(a.Image, a.Graphic);
    a.Image.prototype.update = function () {
      d = this.evaluator;
      f = d.eval(this.expresion);
      this.exprX = f[0][0];
      this.exprY = f[0][1];
      this.rotateExp &&
        ((q = a.degToRad(d.eval(this.rotateExp))),
        (c = Math.cos(q)),
        (h = Math.sin(q)),
        (g = this.exprX * c - this.exprY * h),
        (b = this.exprX * h + this.exprY * c),
        (this.exprX = g),
        (this.exprY = b));
      4 <= f[0].length &&
        ((this.centered = !0),
        (this.scaleX = f[0][2]),
        (this.scaleY = f[0][3]));
      f[1] &&
        2 == f[1].length &&
        ((this.centered = !0),
        (this.scaleX = f[1][0]),
        (this.scaleY = f[1][1]));
      0 == this.scaleX && (this.scaleX = 1e-5);
      0 == this.scaleY && (this.scaleY = 1e-5);
      if ((u = d.eval(this.file)) || "" == u)
        this.img = this.parent.getImage(u);
    };
    a.Image.prototype.draw = function () {
      this.uber.draw.call(this);
    };
    a.Image.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this);
    };
    a.Image.prototype.drawAux = function (b) {
      d = this.evaluator;
      m = this.space;
      this.img &&
        this.img.ready &&
        this.img.complete &&
        ((p = this.img.width),
        (l = this.img.height),
        this.img.canvas && ((p = k(p / this.ratio)), (l = k(l / this.ratio))),
        (r = this.centered ? 0 : k(p / 2)),
        (n = this.centered ? 0 : k(l / 2)),
        (v = k(this.abs_coord ? this.exprX : m.getAbsoluteX(this.exprX))),
        (x = k(this.abs_coord ? this.exprY : m.getAbsoluteY(this.exprY))),
        (e = a.degToRad(-d.eval(this.inirot))),
        b.save(),
        b.translate(v + r, x + n),
        b.rotate(e),
        this.opacity && (b.globalAlpha = d.eval(this.opacity)),
        b.scale(this.scaleX, this.scaleY),
        b.drawImage(this.img, -p / 2, -l / 2, p, l),
        b.restore());
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a, c, n) {
      b = 4 * (c + n * a.width);
      return {
        r: a.data[b],
        g: a.data[b + 1],
        b: a.data[b + 2],
        a: a.data[b + 3],
      };
    }
    if (a.loadLib) return a;
    var d, f, q, c, h, g, b, u;
    a.Fill = function (b, c) {
      a.Graphic.call(this, b, c);
    };
    a.extend(a.Fill, a.Graphic);
    a.Fill.prototype.update = function () {
      d = this.evaluator.eval(this.expresion);
      this.exprX = d[0][0];
      this.exprY = d[0][1];
    };
    a.Fill.prototype.draw = function () {
      this.uber.draw.call(this, this.color, this.color);
    };
    a.Fill.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Fill.prototype.drawAux = function (a, d) {
      d.getColor();
      imageData = a.getImageData(0, 0, this.space.w, this.space.h);
      this.abs_coord
        ? ((f = parseInt(this.exprX)), (q = parseInt(this.exprY)))
        : ((f = parseInt(this.space.getAbsoluteX(this.exprX))),
          (q = parseInt(this.space.getAbsoluteY(this.exprY))));
      if (!(0 > f || 0 > q || f >= this.space.w || q >= this.space.h)) {
        c = [[f, q]];
        g = k(imageData, f, q);
        for (u = 0; 0 < c.length; ) {
          u++;
          h = c.pop();
          f = h[0];
          q = h[1];
          var n = k(imageData, f, q);
          if (g.r === n.r && g.g === n.g && g.b === n.b && g.a === n.a) {
            var n = imageData,
              v = d;
            b = 4 * (f + q * n.width);
            n.data[b + 0] = v.r;
            n.data[b + 1] = v.g;
            n.data[b + 2] = v.b;
            n.data[b + 3] = 255 * v.a;
            0 < f && c.push([f - 1, q]);
            f < imageData.width - 1 && c.push([f + 1, q]);
            c.push([f, q - 1]);
            c.push([f, q + 1]);
          }
          if (u >= this.space.w * this.space.h * 3) break;
        }
        a.putImageData(imageData, 0, 0);
      }
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a, k) {
    if (a.loadLib) return a;
    var d = new String(
        "-_-rnd-pi-e-sqr-ra\u00edz-sqrt-exp-log-log10-abs-ent-sgn-ind-sen-sin-cos-tan-cot-sec-csc-senh-sinh-cosh-tanh-coth-sech-csch-asen-asin-acos-atan-min-max-_Num_-_Trace_-_Stop_Audios_-esCorrecto-escorrecto-_NumToStr_-_NumACadena_-_charAt_-_letraEn_-_substring_-_subcadena_-_length_-_longitud_-_indexOf_-\u00edndiceDe-_GetValues_-_GetMatrix_-_MatrixToStr_-_StrToMatrix_-_GetVector_-_VectorToStr_-_StrToVector_-_ExecStr_-_ExecBlock_-_Save_-_Open_-_SaveState_-_OpenState_-_AnchoDeCadena_-_strWidth_-_Rojo_-_Red_-_Verde_-_Green_-_Azul_-_Blue_-"
      ),
      f = /[\w\.\-//]*(\.png|\.jpg|\.gif|\.svg)/gi,
      q;
    a.Macro = function (c, h) {
      this.hasExpresion = !1;
      this.inirot = c.evaluator.parser.parse("0");
      this.inipos = c.evaluator.parser.parse("(0,0)");
      a.Graphic.call(this, c, h);
      for (var g in h)
        "expresion" == g && (this.hasExpresion = !0),
          h.hasOwnProperty(g) && (this[g] = h[g]);
      this.graphics = [];
      g = c.lessonParser;
      var b = new a.Tokenizer();
      if (this.hasExpresion) {
        "'" !== this.expresion.charAt(0) &&
          (this.expresion = "'" + this.expresion + "'");
        this.expresion = this.evaluator.parser.parse(this.expresion);
        var u = this.evaluator.eval(this.expresion),
          m;
        u &&
          ((m = document.getElementById(u)) && "descartes/macro" == m.type
            ? (m = m.text)
            : (m = a.openExternalFile(u)) &&
              !m.match(/tipo_de_macro/g) &&
              (m = null));
        var r, n;
        if (m) {
          n = m
            .replace(/&aacute;/g, "\u00e1")
            .replace(/&eacute;/g, "\u00e9")
            .replace(/&iacute;/g, "\u00ed")
            .replace(/&oacute;/g, "\u00f3")
            .replace(/&uacute;/g, "\u00fa")
            .replace(/&Aacute;/g, "\u00c1")
            .replace(/&Eacute;/g, "\u00c9")
            .replace(/&Iacute;/g, "\u00cd")
            .replace(/&Oacute;/g, "\u00d3")
            .replace(/&Uacute;/g, "\u00da")
            .replace(/&ntilde;/g, "\u00f1")
            .replace(/&Ntilde;/g, "\u00d1")
            .replace(/\&gt;/g, ">")
            .replace(/\&lt;/g, "<")
            .replace(/\&amp;/g, "&")
            .replace(/\r/g, "")
            .split("\n");
          m = [];
          for (var u = 0, v = n.length; u < v; u++)
            if (((r = n[u].indexOf("=")), -1 !== r)) {
              r = g.split(n[u]);
              for (var x = 0, e = r.length; x < e; x++)
                r[x] &&
                  1 < r.length &&
                  (("id" !== k[r[x][0]] && "type" !== k[r[x][0]]) || m.push(r));
            }
          for (var p, l, u = 0, v = m.length; u < v; u++)
            for (
              e = ((x = m[u] || []), x[0]) && "id" === x[0][0],
                n = 0,
                r = x.length;
              n < r;
              n++
            )
              if (
                ((p = x[n][0].indexOf(".")),
                -1 === p || e
                  ? (p = k[x[n][0]])
                  : ((p = k[x[n][0].substring(p + 1)]),
                    (x[n][0] = this.name + "." + x[n][0])),
                !(
                  "font" === p ||
                  (("fill" === p ||
                    "color" === p ||
                    "border" === p ||
                    "arrow" === p) &&
                    "(" !== x[n][1].charAt(0)) ||
                  ("file" === p && x[n][1].match(f)) ||
                  ("id" !== p && void 0 !== k[x[n][1]])
                ))
              )
                if ("text" == p)
                  if (x[n][1].match(/\{\\rtf1/)) {
                    p = x[n][1];
                    var q = this;
                    l = function (a, e) {
                      for (
                        var n = b.tokenize(e.replace(/\&squot;/g, "'")),
                          c = 0,
                          m = n.length;
                        c < m;
                        c++
                      )
                        "identifier" != n[c].type ||
                          d.match("-" + n[c].value + "-") ||
                          (n[c].value = q.name + "." + n[c].value);
                      return (
                        (a.match(/^\\expr/) ? "\\expr " : "\\decimals ") +
                        b.flatTokens(n)
                      );
                    };
                    p = p.replace(
                      /\\expr ([a-zA-Z_0-9\u00C0-\u021B+*/%|&^#!?:()><.'\+\-]*)/gi,
                      l
                    );
                    p = p.replace(
                      /\\decimals ([a-zA-Z_0-9\u00C0-\u021B+*/%|&^#!?:()><.'\+\-]*)/gi,
                      l
                    );
                    x[n][1] = p;
                  } else {
                    l = g.parseText(x[n][1]).textElementsMacros;
                    for (var y = 0, B = l.length; y < B; y++) {
                      p = b.tokenize(l[y].replace(/\&squot;/g, "'"));
                      for (var E = 0, D = p.length; E < D; E++)
                        "identifier" !== p[E].type ||
                          d.match("-" + p[E].value + "-") ||
                          (p[E].value = this.name + "." + p[E].value);
                      p = b
                        .flatTokens(p)
                        .replace(/&squot;/g, "'")
                        .replace(/'\+\(/g, "[")
                        .replace(/\)\+'/g, "]");
                      l[y] = p.substring(1, p.length - 1);
                    }
                    x[n][1] = l.join("");
                  }
                else {
                  l = x[n][1].replace(/\&squot;/g, "'").split(";");
                  y = 0;
                  for (B = l.length; y < B; y++) {
                    p = b.tokenize(l[y].replace(/\\n/g, ";"));
                    E = 0;
                    for (D = p.length; E < D; E++)
                      "identifier" !== p[E].type ||
                        d.match("-" + p[E].value + "-") ||
                        (p[E].value = this.name + "." + p[E].value);
                    l[y] = b.flatTokens(p);
                  }
                  x[n][1] = l.join(";");
                }
          u = 0;
          for (v = m.length; u < v; u++)
            if (m[u][0]) {
              x = "";
              e = !1;
              n = 0;
              for (r = m[u].length; n < r; n++)
                "type" === k[m[u][n][0]] &&
                  ((x = "espacio='" + this.spaceID + "' "), (e = !0)),
                  (x = x + m[u][n][0] + "='" + m[u][n][1] + "' ");
              m[u] = x;
              e
                ? this.graphics.push(
                    g.parseGraphic(
                      m[u],
                      this.abs_coord,
                      this.background,
                      this.inirot
                    )
                  )
                : g.parseAuxiliar(m[u]);
            }
        }
      }
    };
    a.extend(a.Macro, a.Graphic);
    a.Macro.prototype.update = function () {
      q = this.evaluator.eval(this.inipos);
      this.iniPosX = q[0][0];
      this.iniPosY = q[0][1];
    };
    a.Macro.prototype.drawAux = function (a) {
      for (var d = 0, g = this.graphics.length; d < g; d++)
        this.graphics[d] &&
          (a.save(),
          this.graphics[d].abs_coord
            ? a.translate(this.iniPosX, this.iniPosY)
            : a.translate(
                this.iniPosX * this.space.scale,
                -this.iniPosY * this.space.scale
              ),
          this.graphics[d].draw(),
          a.restore());
    };
    return a;
  })(descartesJS || {}, babel),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Generic = function (k, d) {
      this.width = k.evaluator.parser.parse("1");
      a.Graphic.call(this, k, d);
    };
    a.extend(a.Generic, a.Graphic);
    a.Generic.prototype.update = function () {};
    a.Generic.prototype.draw = function () {
      this.uber.draw.call(this, this.fill, this.color);
    };
    a.Generic.prototype.drawTrace = function () {
      this.uber.drawTrace.call(this, this.trace, this.trace);
    };
    a.Generic.prototype.drawAux = function (a, d, f) {
      var q = this.evaluator.getDefinition(this.expresionString);
      q && q.draw(a, d, f, this);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.sqrt,
      d = Math.sin,
      f = Math.cos,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w;
    a.norm3D = function (a) {
      return k(a.x * a.x + a.y * a.y + a.z * a.z);
    };
    a.normalize3D = function (e) {
      q = a.norm3D(e);
      if (0 === q) return { x: 0, y: 0, z: 0 };
      if (1 === q) return { x: e.x, y: e.y, z: e.z };
      q = 1 / q;
      return { x: e.x * q, y: e.y * q, z: e.z * q };
    };
    a.dotProduct3D = function (a, e) {
      return a.x * e.x + a.y * e.y + a.z * e.z;
    };
    a.crossProduct3D = function (a, e) {
      return {
        x: a.y * e.z - a.z * e.y,
        y: a.z * e.x - a.x * e.z,
        z: a.x * e.y - a.y * e.x,
      };
    };
    a.scalarProduct3D = function (a, e) {
      return { x: a.x * e, y: a.y * e, z: a.z * e };
    };
    a.subtract3D = function (a, e) {
      return { x: a.x - e.x, y: a.y - e.y, z: a.z - e.z };
    };
    a.add3D = function (a, e) {
      return { x: a.x + e.x, y: a.y + e.y, z: a.z + e.z };
    };
    a.equals3DEpsilon = function (a, e, b) {
      return (
        Math.abs(a.x - e.x) <= b &&
        Math.abs(a.y - e.y) <= b &&
        Math.abs(a.z - e.z) <= b
      );
    };
    a.Vector4D = function (a, e, b, n) {
      this.x = a || 0;
      this.y = e || 0;
      this.z = b || 0;
      this.w = n || 0;
    };
    a.Matrix4x4 = function (a, e, b, n, c, d, m, g, f, l, h, p, v, r, k, u) {
      this.a00 = a || 0;
      this.a01 = e || 0;
      this.a02 = b || 0;
      this.a03 = n || 0;
      this.a10 = c || 0;
      this.a11 = d || 0;
      this.a12 = m || 0;
      this.a13 = g || 0;
      this.a20 = f || 0;
      this.a21 = l || 0;
      this.a22 = h || 0;
      this.a23 = p || 0;
      this.a30 = v || 0;
      this.a31 = r || 0;
      this.a32 = k || 0;
      this.a33 = u || 0;
    };
    a.Matrix4x4.prototype.setIdentity = function () {
      this.a00 = 1;
      this.a10 = this.a03 = this.a02 = this.a01 = 0;
      this.a11 = 1;
      this.a21 = this.a20 = this.a13 = this.a12 = 0;
      this.a22 = 1;
      this.a32 = this.a31 = this.a30 = this.a23 = 0;
      this.a33 = 1;
      return this;
    };
    a.Matrix4x4.prototype.multiplyVector4 = function (e) {
      return new a.Vector4D(
        e.x * this.a00 + e.y * this.a10 + e.z * this.a20 + e.w * this.a30,
        e.x * this.a01 + e.y * this.a11 + e.z * this.a21 + e.w * this.a31,
        e.x * this.a02 + e.y * this.a12 + e.z * this.a22 + e.w * this.a32,
        e.x * this.a03 + e.y * this.a13 + e.z * this.a23 + e.w * this.a33
      );
    };
    a.Matrix4x4.prototype.translate = function (e) {
      return new a.Matrix4x4(
        this.a00,
        this.a01,
        this.a02,
        this.a03,
        this.a10,
        this.a11,
        this.a12,
        this.a13,
        this.a20,
        this.a21,
        this.a22,
        this.a23,
        this.a00 * e.x + this.a10 * e.y + this.a20 * e.z + this.a30,
        this.a01 * e.x + this.a11 * e.y + this.a21 * e.z + this.a31,
        this.a02 * e.x + this.a12 * e.y + this.a22 * e.z + this.a32,
        this.a03 * e.x + this.a13 * e.y + this.a23 * e.z + this.a33
      );
    };
    a.Matrix4x4.prototype.rotateX = function (b) {
      c = d(b);
      h = f(b);
      r = this.a10;
      n = this.a11;
      v = this.a12;
      x = this.a13;
      e = this.a20;
      p = this.a21;
      l = this.a22;
      w = this.a23;
      return new a.Matrix4x4(
        this.a00,
        this.a01,
        this.a02,
        this.a03,
        r * h + e * c,
        n * h + p * c,
        v * h + l * c,
        x * h + w * c,
        r * -c + e * h,
        n * -c + p * h,
        v * -c + l * h,
        x * -c + w * h,
        this.a30,
        this.a31,
        this.a32,
        this.a33
      );
    };
    a.Matrix4x4.prototype.rotateY = function (n) {
      c = d(n);
      h = f(n);
      g = this.a00;
      b = this.a01;
      u = this.a02;
      m = this.a03;
      e = this.a20;
      p = this.a21;
      l = this.a22;
      w = this.a23;
      return new a.Matrix4x4(
        g * h + e * -c,
        b * h + p * -c,
        u * h + l * -c,
        m * h + w * -c,
        this.a10,
        this.a11,
        this.a12,
        this.a13,
        g * c + e * h,
        b * c + p * h,
        u * c + l * h,
        m * c + w * h,
        this.a30,
        this.a31,
        this.a32,
        this.a33
      );
    };
    a.Matrix4x4.prototype.rotateZ = function (e) {
      c = d(e);
      h = f(e);
      g = this.a00;
      b = this.a01;
      u = this.a02;
      m = this.a03;
      r = this.a10;
      n = this.a11;
      v = this.a12;
      x = this.a13;
      return new a.Matrix4x4(
        g * h + r * c,
        b * h + n * c,
        u * h + v * c,
        m * h + x * c,
        g * -c + r * h,
        b * -c + n * h,
        u * -c + v * h,
        m * -c + x * h,
        this.a20,
        this.a21,
        this.a22,
        this.a23,
        this.a30,
        this.a31,
        this.a32,
        this.a33
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a) {
      a.textNode = null;
      0 !== parseInt(this.size) &&
        ((a.lineWidth = 1),
        (a.fillStyle = this.backColor),
        (a.strokeStyle = this.frontColor),
        a.beginPath(),
        a.arc(this.projVert[0].x, this.projVert[0].y, this.size + 0.5, 0, h),
        a.fill(),
        a.stroke());
    }
    function d(a, b) {
      a.textNode = null;
      a.lineCap = "round";
      a.lineJoin = "round";
      a.lineWidth =
        "#" == this.backColor.charAt(0) || "#" == this.frontColor.charAt(0)
          ? 1
          : 0.1;
      a.beginPath();
      a.moveTo(this.projVert[0].x, this.projVert[0].y);
      for (var c = 1, e = this.projVert.length; c < e; c++)
        a.lineTo(this.projVert[c].x, this.projVert[c].y);
      a.closePath();
      "color" === this.model
        ? ((a.fillStyle =
            0 <= this.direction ? this.backColor : this.frontColor),
          (a.strokeStyle = a.fillStyle),
          a.stroke(),
          a.fill())
        : "light" === this.model || "metal" === this.model
        ? ((a.fillStyle =
            0 <= this.direction
              ? b.computeColor(this.backColor, this, "metal" === this.model)
              : b.computeColor(this.frontColor, this, "metal" === this.model)),
          (a.strokeStyle = a.fillStyle),
          a.stroke(),
          a.fill())
        : "wire" === this.model &&
          ((a.lineWidth = 1.5), (a.strokeStyle = this.frontColor), a.stroke());
      this.edges &&
        "wire" !== this.model &&
        ((a.lineWidth = 1), (a.strokeStyle = "#808080"), a.stroke());
    }
    function f(a) {
      a.textNode = null;
      m = this.evaluator.getVariable(this.family);
      this.evaluator.setVariable(this.family, this.familyValue);
      this.drawText(
        a,
        this.text,
        this.projVert[0].x,
        this.projVert[0].y + this.displace,
        this.frontColor,
        this.font,
        "left",
        "alphabetic",
        this.decimals,
        this.fixed,
        !0
      );
      this.evaluator.setVariable(this.family, m);
    }
    function q(a) {
      a.textNode = null;
      a.lineCap = "round";
      a.lineJoin = "round";
      a.lineWidth = this.lineWidth;
      a.strokeStyle = this.frontColor;
      a.beginPath();
      a.moveTo(this.projVert[0].x, this.projVert[0].y);
      a.lineTo(this.projVert[1].x, this.projVert[1].y);
      a.stroke();
    }
    function c(b, c, d) {
      return a.normalize3D(
        a.crossProduct3D(a.subtract3D(b, c), a.subtract3D(b, d))
      );
    }
    if (a.loadLib) return a;
    var h = 2 * Math.PI,
      g,
      b,
      u,
      m;
    a.Primitive3D = function (a, b) {
      this.space = b;
      for (var m in a) a.hasOwnProperty(m) && (this[m] = a[m]);
      this.projVert = [];
      this.spaceVertices = [];
      "vertex" === this.type
        ? (this.draw = k)
        : "face" === this.type
        ? ((this.normal = c(
            this.vertices[0],
            this.vertices[1],
            this.vertices[2]
          )),
          (this.draw = d))
        : "text" === this.type
        ? ((this.fontSize = (this.fontSize = this.font.match(/(\d+)px/))
            ? parseInt(this.fontSize[1])
            : 10),
          (this.draw = f))
        : "edge" === this.type && (this.draw = q);
      this.isText &&
        (this.computeDepth = function () {
          this.projVert = this.vertices;
          this.depth = this.vertices[0].z;
          this.average = this.vertices[0];
          this.passDraw = 1;
        });
    };
    a.Primitive3D.prototype.computeDepth = function (b) {
      this.space = b;
      this.average = { x: 0, y: 0, z: 0 };
      this.removeDoubles();
      this.normal = { x: 0, y: 1, z: 0 };
      this.direction = { x: 1, y: 0, z: 0 };
      for (var d = 0, m = this.vertices.length; d < m; d++)
        (this.spaceVertices[d] = b.rotateVertex(this.vertices[d])),
          (this.average.x += this.spaceVertices[d].x),
          (this.average.y += this.spaceVertices[d].y),
          (this.average.z += this.spaceVertices[d].z);
      this.average = a.scalarProduct3D(this.average, 1 / m);
      this.depth = a.norm3D(a.subtract3D(b.eye, this.average));
      2 < this.vertices.length &&
        ((this.normal = c(
          this.spaceVertices[0],
          this.spaceVertices[1],
          this.spaceVertices[2]
        )),
        (this.direction = a.dotProduct3D(this.normal, a.normalize3D(b.eye))));
      this.passDraw = 1;
      d = 0;
      for (m = this.vertices.length; d < m; d++)
        (this.projVert[d] = b.project(this.spaceVertices[d])),
          (this.passDraw = this.passDraw && 0 < this.projVert[d].z);
      this.minDistanceToEye = Math.Inifinity;
      this.maxDistanceToEye = -Math.Inifinity;
      this.miny = this.minx = Math.Inifinity;
      this.maxx = -Math.Inifinity;
      this.maxy = -Math.Inifinity;
      d = 0;
      for (m = this.vertices.length; d < m; d++) {
        var e = a.norm3D(a.subtract3D(this.spaceVertices[d], b.eye));
        this.minDistanceToEye = Math.min(this.minDistanceToEye, e);
        this.maxDistanceToEye = Math.max(this.maxDistanceToEye, e);
      }
      d = 0;
      for (m = this.vertices.length; d < m; d++)
        this.minx > this.projVert[d].x && (minx = this.projVert[d].x),
          this.maxx < this.projVert[d].x && (maxx = this.projVert[d].x),
          this.miny > this.projVert[d].y && (miny = this.projVert[d].y),
          this.mixy < this.projVert[d].y && (mixy = this.projVert[d].y);
      b.new3D || (this.passDraw = 1);
    };
    var r;
    a.Primitive3D.prototype.removeDoubles = function () {
      if ("edge" !== this.type) {
        r = [];
        for (var a = 0, b = this.vertices.length; a < b; a++)
          (this.vertices[a].x === this.vertices[(a + 1) % b].x &&
            this.vertices[a].y === this.vertices[(a + 1) % b].y &&
            this.vertices[a].z === this.vertices[(a + 1) % b].z &&
            this.vertices[a].w === this.vertices[(a + 1) % b].w) ||
            r.push(this.vertices[a]);
        0 === r.length && r.push(this.vertices[0]);
        this.vertices = r;
      }
    };
    a.Primitive3D.prototype.drawText = function (
      c,
      d,
      m,
      e,
      f,
      l,
      h,
      r,
      k,
      q,
      D
    ) {
      c.textNode = d;
      if ("rtfNode" == d.type)
        (c.fillStyle = f),
          (c.strokeStyle = f),
          (c.textBaseline = "alphabetic"),
          (c.textNode.pos = { x: m, y: e }),
          d.draw(c, m, e, k, q, h, D);
      else
        for (
          "simpleText" === d.type && (d = d.toString(k, q).split("\\n")),
            m += /Arial|Times/i.test(l) ? -2 : 0,
            g = this.evaluator,
            c.fillStyle = a.getColor(g, f),
            c.font = l,
            c.textAlign = h,
            c.textBaseline = r,
            b = 1.2 * this.fontSize || 0,
            f = 0,
            l = d.length;
          f < l;
          f++
        )
          (u = d[f]),
            this.border && c.strokeText(u, m, e + b * f),
            c.fillText(u, m, e + b * f);
    };
    a.Primitive3D.prototype.splitFace = function (b) {
      if (this.intersects(b)) {
        var c = null,
          d = null,
          e = 0,
          m = 0,
          g,
          f,
          h,
          r,
          k,
          u;
        u = this.vertices;
        var q = b.vertices;
        g = 0;
        for (k = q.length; g < k; g++)
          if (((r = this.intersection(q[g], q[(g + 1) % k])), null !== r))
            if (null === c) {
              if (((c = r), (e = g), 2 === q.length)) {
                d = c;
                break;
              }
            } else if (!a.equals3DEpsilon(r, c, 1e-8)) {
              d = r;
              m = g;
              break;
            }
        if (null !== c && null !== d) {
          g = this.isInterior(c) || this.isInterior(d);
          h = f = null;
          if (!g && 3 <= q.length)
            for (k = 0, u = u.length; k < u; k++)
              if (
                ((r = b.intersection(
                  this.vertices[k],
                  this.vertices[(k + 1) % u]
                )),
                null !== r)
              )
                if (null === f) f = r;
                else if (!a.equals3DEpsilon(r, f, 1e-8)) {
                  h = r;
                  break;
                }
          if (
            g ||
            (null !== f && null !== h && b.isInterior(f) && b.isInterior(h))
          ) {
            h = !0;
            u = r = null;
            if (2 === q.length)
              a.equals3DEpsilon(c, q[0], 1e-8) ||
              a.equals3DEpsilon(c, q[1], 1e-8)
                ? (h = !1)
                : ((r = []),
                  (r[0] = q[0]),
                  (r[1] = c),
                  (u = []),
                  (u[0] = c),
                  (u[1] = q[1]));
            else
              for (r = [], u = [], g = k = f = 0; g < q.length; g++)
                g < e
                  ? (r[f++] = q[g])
                  : g == e
                  ? ((r[f++] = q[g]), (r[f++] = c), (u[k++] = c))
                  : g < m
                  ? (u[k++] = q[g])
                  : g == m
                  ? ((u[k++] = q[g]), (u[k++] = d), (r[f++] = d))
                  : (r[f++] = q[g]);
            if (h)
              return (
                (c = []),
                (c[0] = new a.Primitive3D(
                  {
                    vertices: r,
                    type: "face",
                    frontColor: b.frontColor,
                    backColor: b.backColor,
                    edges: b.edges,
                    model: b.model,
                  },
                  this.space
                )),
                (c[0].normal = b.normal),
                (c[1] = new a.Primitive3D(
                  {
                    vertices: u,
                    type: "face",
                    frontColor: b.frontColor,
                    backColor: b.backColor,
                    edges: b.edges,
                    model: b.model,
                  },
                  this.space
                )),
                (c[1].normal = b.normal),
                c
              );
          }
        }
      }
      return [b];
    };
    a.Primitive3D.prototype.intersects = function (a) {
      return this.intersectsPlane(a) && a.intersectsPlane(this);
    };
    a.Primitive3D.prototype.intersectsPlane = function (b) {
      var c,
        d,
        e,
        m = this.vertices;
      c = b.vertices;
      if (0 < c.length) {
        d = a.dotProduct3D(c[0], b.normal);
        e = a.dotProduct3D(m[0], b.normal);
        if (1e-8 > Math.abs(d - e)) return !0;
        for (var g = 1, f = m.length; g < f; g++)
          if (
            ((c = a.dotProduct3D(m[g], b.normal)),
            1e-8 > Math.abs(d - c) || (c > d && e < d) || (c < d && e > d))
          )
            return !0;
      }
      return !1;
    };
    a.Primitive3D.prototype.intersection = function (b, c) {
      var d = this.vertices;
      if (0 < d.length) {
        var e = a.subtract3D(c, b),
          m = a.dotProduct3D(e, this.normal);
        if (
          0 !== m &&
          ((d = a.dotProduct3D(a.subtract3D(d[0], b), this.normal) / m),
          -1e-8 < d && 1.00000001 > d)
        )
          return a.add3D(b, a.scalarProduct3D(e, d));
      }
      return null;
    };
    a.Primitive3D.prototype.isInterior = function (b) {
      var c = this.vertices;
      if (0 < c.length)
        for (
          var d = 0, e = a.subtract3D(c[0], b), m = 0, g = c.length;
          m < g;
          m++
        ) {
          var f = a.subtract3D(c[(m + 1) % g], b),
            h = a.dotProduct3D(a.crossProduct3D(e, f), this.normal);
          if (1e-8 > Math.abs(h)) {
            if (0 > a.dotProduct3D(e, f)) break;
          } else {
            if ((0 > d && 0 < h) || (0 < d && 0 > h)) return !1;
            e = f;
            d = h;
          }
        }
      return !0;
    };
    a.Primitive3D.prototype.inFrontOf = function (a, b, c) {
      var e, d;
      if (
        this.maxx <= b.minx ||
        this.minx >= b.maxx ||
        this.maxy <= b.miny ||
        this.miny >= b.maxy ||
        this.minDistanceToEye >= b.maxDistanceToEye
      )
        return !1;
      for (var m = 0; 3 > m; m++) {
        e = null;
        switch (m) {
          case 0:
            e = this.intersections(b);
            break;
          case 1:
            e = b.verticesContainedIn(this);
            break;
          case 2:
            e = this.verticesContainedIn(b);
        }
        if (null != e && e != []) {
          for (var g = 0; g < e.length; g++) a.push(e[g]);
          for (var g = 0, f = e.length; g < f; g++) {
            d = e[g];
            d = this.space.rayFromEye(d.x, d.y);
            try {
              t = this.distanceToEyeAlong(d) - b.distanceToEyeAlong(d);
              if (t <= -c) return !0;
              if (t >= c) return !1;
            } catch (h) {
              console.log("Error: inFrontOf");
            }
          }
        }
      }
      return !1;
    };
    a.Primitive3D.prototype.intersections = function (b) {
      for (
        var c = [],
          d,
          e,
          m,
          g = new a.R2(),
          f = this.spaceVertices,
          h = b.spaceVertices,
          r = this.projVert,
          k = b.projVert,
          u = 0,
          q = f.length;
        u < q;
        u++
      ) {
        b = f[u];
        d = f[(u + 1) % q];
        for (var H = 0, G = h.length; H < G; H++)
          (e = h[H]),
            (m = h[(H + 1) % G]),
            b != e &&
              b != m &&
              d != e &&
              d != m &&
              ((e = g.intersection(r[u], r[(u + 1) % q], k[H], k[(H + 1) % G])),
              null != e && c.push(e));
      }
      return c;
    };
    a.Primitive3D.prototype.distanceToEyeAlong = function (b) {
      b = a.dotProduct3D(this.normal, b);
      if (1e-6 < Math.abs(b))
        return (
          a.dotProduct3D(
            a.subtract3D(this.average, this.space.eye),
            this.normal
          ) / b
        );
    };
    a.Primitive3D.prototype.verticesContainedIn = function (a) {
      for (
        var b = [],
          c = this.spaceVertices,
          e = this.projVert,
          d = 0,
          m = c.length;
        d < m;
        d++
      )
        !a.isVertex(c[d]) && a.appearsToContain(e[d]) && b.push(e[d]);
      return b;
    };
    a.Primitive3D.prototype.appearsToContain = function (a) {
      for (
        var b = 0, c, e = this.projVert, d = 0, m = this.spaceVertices.length;
        d < m;
        d++
      ) {
        c =
          (e[d].x - a.x) * (e[(d + 1) % m].y - a.y) -
          (e[(d + 1) % m].x - a.x) * (e[d].y - a.y);
        if (0 != b)
          if (1e-8 > Math.abs(c)) {
            if (1e-8 < Math.abs(e[d].x - e[(d + 1) % m].x))
              return (
                Math.min(e[d].x, e[(d + 1) % m].x) <= a.x + 1e-8 &&
                a.x <= Math.max(e[d].x, e[(d + 1) % m].x) + 1e-8
              );
            if (1e-8 < Math.abs(e[d].y - e[(d + 1) % m].y))
              return (
                Math.min(e[d].y, e[(d + 1) % m].y) <= a.y + 1e-8 &&
                a.y <= Math.max(e[d].y, e[(d + 1) % m].y) + 1e-8
              );
          } else if ((0 < b && 0 > c) || (0 > b && 0 < c)) return !1;
        b = c;
      }
      return !0;
    };
    a.Primitive3D.prototype.isVertex = function (b) {
      for (var c = this.spaceVertices, d = 0, e = c.length; d < e; d++)
        if (a.equals3DEpsilon(b, c[d], 1e-8)) return !0;
      return !1;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = { x: 0, y: 0, z: 0 },
      d,
      f,
      q,
      c,
      h,
      g,
      b = a.degToRad;
    a.Graphic3D = function (b, c) {
      this.parent = b;
      this.evaluator = b.evaluator;
      var d = b.evaluator.parser;
      this.spaceID = "E0";
      this.background = !1;
      this.type = "";
      this.color = new a.Color("eeffaa");
      this.backcolor = new a.Color("6090a0");
      this.Nu = this.evaluator.parser.parse("7");
      this.Nv = this.evaluator.parser.parse("7");
      this.drawif = d.parse("1");
      this.abs_coord = !1;
      this.family = "";
      this.family_interval = d.parse("[0,1]");
      this.family_steps = d.parse("8");
      this.font = "Monospaced,PLAIN,12";
      this.fixed = !0;
      this.text = "";
      this.decimals = d.parse("2");
      this.inirot = "(0,0,0)";
      this.inirotEuler = !1;
      this.inipos = d.parse("(0,0,0)");
      this.endrot = "(0,0,0)";
      this.endrotEuler = !1;
      this.endpos = d.parse("(0,0,0)");
      this.model = "color";
      for (var g in c) c.hasOwnProperty(g) && (this[g] = c[g]);
      void 0 == this.expresion &&
        "macro" != this.type &&
        (this.expresion = d.parse("(0,0)"));
      this.space = this.getSpace();
      this.canvas = this.background ? this.space.backCanvas : this.space.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.font = a.convertFont(this.font);
      this.fontSize = (this.fontSize = this.font.match(/(\d+)px/))
        ? parseFloat(this.fontSize[1])
        : 10;
      this.inirot.match("Euler") &&
        ((this.inirot = this.inirot.replace("Euler", "")),
        (this.inirotEuler = !0));
      this.endrot.match("Euler") &&
        ((this.endrot = this.endrot.replace("Euler", "")),
        (this.endrotEuler = !0));
      this.inirot = d.parse(this.inirot);
      this.endrot = d.parse(this.endrot);
      this.inirotM = new a.Matrix4x4();
      this.inirotM_X = new a.Matrix4x4();
      this.inirotM_Y = new a.Matrix4x4();
      this.inirotM_Z = new a.Matrix4x4();
      this.iniposM = new a.Matrix4x4();
      this.endrotM = new a.Matrix4x4();
      this.endrotM_X = new a.Matrix4x4();
      this.endrotM_Y = new a.Matrix4x4();
      this.endrotM_Z = new a.Matrix4x4();
      this.endposM = new a.Matrix4x4();
    };
    a.Graphic3D.prototype.getSpace = function () {
      for (var a = this.parent.spaces, b, c = 0, d = a.length; c < d; c++)
        if (((b = a[c]), b.id == this.spaceID)) return b;
      return a[0];
    };
    a.Graphic3D.prototype.getFamilyValues = function () {
      d = this.evaluator;
      f = d.eval(this.family_interval);
      this.familyInf = f[0][0];
      this.familySup = f[0][1];
      this.fSteps = Math.round(d.eval(this.family_steps));
      this.family_sep =
        0 < this.fSteps ? (this.familySup - this.familyInf) / this.fSteps : 0;
    };
    a.Graphic3D.prototype.buildFamilyPrimitives = function () {
      d = this.evaluator;
      this.getFamilyValues();
      q = d.getVariable(this.family);
      if (0 <= this.fSteps)
        for (var a = 0, b = this.fSteps; a <= b; a++)
          d.setVariable(this.family, this.familyInf + a * this.family_sep),
            (this.familyValue = this.familyInf + a * this.family_sep),
            d.eval(this.drawif) && this.buildPrimitives();
      d.setVariable(this.family, q);
    };
    a.Graphic3D.prototype.update = function () {
      this.primitives = [];
      this.evaluator.eval(this.drawif) &&
        (this.family || this.buildPrimitives());
      this.family && this.buildFamilyPrimitives();
    };
    a.Graphic3D.prototype.updateMVMatrix = function () {
      h = this.evaluator.eval(this.inirot);
      this.inirotEuler
        ? ((this.inirotM = this.inirotM.setIdentity()),
          (this.inirotM = this.inirotM.rotateZ(b(h[0][0]))),
          (this.inirotM = this.inirotM.rotateX(b(h[0][1]))),
          (this.inirotM = this.inirotM.rotateZ(b(h[0][2]))))
        : ((this.inirotM_X = this.inirotM_X.setIdentity().rotateX(b(h[0][0]))),
          (this.inirotM_Y = this.inirotM_Y.setIdentity().rotateY(b(h[0][1]))),
          (this.inirotM_Z = this.inirotM_Z.setIdentity().rotateZ(b(h[0][2]))));
      h = this.evaluator.eval(this.inipos);
      k = { x: h[0][0], y: h[0][1], z: h[0][2] };
      this.iniposM = this.iniposM.setIdentity().translate(k);
      h = this.evaluator.eval(this.endrot);
      this.endrotEuler
        ? ((this.endrotM = this.endrotM.setIdentity()),
          (this.endrotM = this.endrotM.rotateZ(b(h[0][0]))),
          (this.endrotM = this.endrotM.rotateX(b(h[0][1]))),
          (this.endrotM = this.endrotM.rotateZ(b(h[0][2]))))
        : ((this.endrotM_X = this.endrotM_X.setIdentity().rotateX(b(h[0][0]))),
          (this.endrotM_Y = this.endrotM_Y.setIdentity().rotateY(b(h[0][1]))),
          (this.endrotM_Z = this.endrotM_Z.setIdentity().rotateZ(b(h[0][2]))));
      h = this.evaluator.eval(this.endpos);
      k = { x: h[0][0], y: h[0][1], z: h[0][2] };
      this.endposM = this.endposM.setIdentity().translate(k);
    };
    a.Graphic3D.prototype.transformVertex = function (a) {
      this.inirotEuler
        ? (c = this.inirotM.multiplyVector4(a))
        : ((c = this.inirotM_X.multiplyVector4(a)),
          (c = this.inirotM_Y.multiplyVector4(c)),
          (c = this.inirotM_Z.multiplyVector4(c)));
      c = this.iniposM.multiplyVector4(c);
      this.endrotEuler
        ? (c = this.endrotM.multiplyVector4(c))
        : ((c = this.endrotM_X.multiplyVector4(c)),
          (c = this.endrotM_Y.multiplyVector4(c)),
          (c = this.endrotM_Z.multiplyVector4(c)));
      c = this.endposM.multiplyVector4(c);
      this.macroChildren && (c = this.applyMacroTransform(c));
      return c;
    };
    a.Graphic3D.prototype.applyMacroTransform = function (a) {
      this.macro_inirotEuler
        ? (c = this.macro_inirotM.multiplyVector4(a))
        : ((c = this.macro_inirotM_X.multiplyVector4(a)),
          (c = this.macro_inirotM_Y.multiplyVector4(c)),
          (c = this.macro_inirotM_Z.multiplyVector4(c)));
      c = this.macro_iniposM.multiplyVector4(c);
      this.macro_endrotEuler
        ? (c = this.macro_endrotM.multiplyVector4(c))
        : ((c = this.macro_endrotM_X.multiplyVector4(c)),
          (c = this.macro_endrotM_Y.multiplyVector4(c)),
          (c = this.macro_endrotM_Z.multiplyVector4(c)));
      return (c = this.macro_endposM.multiplyVector4(c));
    };
    a.Graphic3D.prototype.parseExpression = function () {
      g = [];
      for (
        var a = this.expresion
            .replace(/\n/g, " ")
            .replace(/ ( )+/g, " ")
            .trim(),
          b = [],
          c = 0,
          d,
          f = a.length,
          e = a.length - 1;
        -1 < e;
        e--
      )
        (d = a.charAt(e)),
          0 == c
            ? "=" == d && (c = 1)
            : 1 == c
            ? " " != d && (c = "<" == d || ">" == d ? 0 : 2)
            : 2 == c &&
              " " == d &&
              (b.unshift(a.substring(e + 1, f)), (f = e), (c = 0));
      b.unshift(a.substring(0, f));
      e = 0;
      for (a = b.length; e < a; e++)
        g.push(this.evaluator.parser.parse(b[e], !0));
      return g;
    };
    var u;
    a.Graphic3D.prototype.splitFace = function (a) {
      for (var b = 0, c = this.primitives.length; b < c; b++)
        if (((u = []), "face" === this.primitives[b].type)) {
          for (var d = 0, g = a.primitives.length; d < g; d++)
            "face" === a.primitives[d].type
              ? (u = u.concat(this.primitives[b].splitFace(a.primitives[d])))
              : u.push(a.primitives[d]);
          a.primitives = u;
        }
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c;
    a.Point3D = function (d, c) {
      a.Graphic3D.call(this, d, c);
    };
    a.extend(a.Point3D, a.Graphic3D);
    a.Point3D.prototype.buildPrimitives = function () {
      k = this.evaluator;
      this.updateMVMatrix();
      d = k.eval(this.expresion);
      f = d[0][0];
      q = d[0][1];
      c = d[0][2];
      this.primitives.push(
        new a.Primitive3D({
          vertices: [this.transformVertex(new a.Vector4D(f, q, c, 1))],
          type: "vertex",
          backColor: this.backcolor.getColor(),
          frontColor: this.color.getColor(),
          size: k.eval(this.width),
        })
      );
      "" !== this.text &&
        this.primitives.push(
          new a.Primitive3D(
            {
              vertices: [this.transformVertex(new a.Vector4D(f, q, c, 1))],
              type: "text",
              frontColor: this.color.getColor(),
              font: this.font,
              decimals: k.eval(this.decimals),
              fixed: this.fixed,
              displace: this.fontSize,
              evaluator: k,
              text: this.text,
              family: this.family,
              familyValue: this.familyValue,
            },
            this.space
          )
        );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g;
    a.Segment3D = function (b, d) {
      this.width = b.evaluator.parser.parse("1");
      a.Graphic3D.call(this, b, d);
    };
    a.extend(a.Segment3D, a.Graphic3D);
    a.Segment3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      g = evaluator.getVariable("u");
      evaluator.setVariable("u", this.Nu);
      expr = evaluator.eval(this.expresion);
      k = expr[0][0];
      d = expr[0][1];
      f = expr[0][2];
      q = expr[1][0];
      c = expr[1][1];
      h = expr[1][2];
      this.primitives.push(
        new a.Primitive3D(
          {
            vertices: [
              this.transformVertex(new a.Vector4D(k, d, f, 1)),
              this.transformVertex(new a.Vector4D(q, c, h, 1)),
            ],
            type: "edge",
            frontColor: this.color.getColor(),
            lineWidth: evaluator.eval(this.width),
          },
          this.space
        )
      );
      evaluator.setVariable("u", g);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u, m, r, n, v, x;
    a.Surface3D = function (e, b) {
      this.parameter = "t";
      this.parameter_interval = e.evaluator.parser.parse("[0,1]");
      this.parameter_steps = e.evaluator.parser.parse("8");
      a.Graphic3D.call(this, e, b);
      this.expresion = this.parseExpression();
    };
    a.extend(a.Surface3D, a.Graphic3D);
    a.Surface3D.prototype.buildPrimitives = function () {
      k = this.evaluator;
      this.updateMVMatrix();
      q = k.getVariable("x");
      c = k.getVariable("y");
      h = k.getVariable("z");
      d = k.getVariable("u");
      f = k.getVariable("v");
      k.setVariable("u", 0);
      k.setVariable("v", 0);
      g = k.eval(this.Nu);
      b = k.eval(this.Nv);
      u = [];
      for (r = 0; r <= g; r++)
        for (k.setVariable("u", r / g), n = 0; n <= b; n++) {
          k.setVariable("v", n / b);
          v = 0;
          for (x = this.expresion.length; v < x; v++) k.eval(this.expresion[v]);
          u.push(
            this.transformVertex(
              new a.Vector4D(
                k.getVariable("x"),
                k.getVariable("y"),
                k.getVariable("z"),
                1
              )
            )
          );
        }
      for (r = 0; r < g; r++)
        for (n = 0; n < b; n++)
          (m = []),
            m.push(u[n + r * b + r]),
            m.push(u[n + 1 + r * b + r]),
            m.push(u[n + 2 + (r + 1) * b + r]),
            m.push(u[n + 1 + (r + 1) * b + r]),
            this.primitives.push(
              new a.Primitive3D(
                {
                  vertices: m,
                  type: "face",
                  frontColor: this.color.getColor(),
                  backColor: this.backcolor.getColor(),
                  edges: this.edges,
                  model: this.model,
                },
                this.space
              )
            );
      k.setVariable("x", q);
      k.setVariable("y", c);
      k.setVariable("z", h);
      k.setVariable("u", d);
      k.setVariable("v", f);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h;
    a.Polygon3D = function (d, b) {
      this.width = d.evaluator.parser.parse("1");
      a.Graphic3D.call(this, d, b);
    };
    a.extend(a.Polygon3D, a.Graphic3D);
    a.Polygon3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      expr = evaluator.eval(this.expresion);
      for (var g = 0, b = expr.length - 1; g < b; g++)
        (k = expr[g][0]),
          (d = expr[g][1]),
          (f = expr[g][2]),
          (q = expr[g + 1][0]),
          (c = expr[g + 1][1]),
          (h = expr[g + 1][2]),
          this.primitives.push(
            new a.Primitive3D(
              {
                vertices: [
                  this.transformVertex(new a.Vector4D(k, d, f, 1)),
                  this.transformVertex(new a.Vector4D(q, c, h, 1)),
                ],
                type: "edge",
                frontColor: this.color.getColor(),
                lineWidth: evaluator.eval(this.width),
              },
              this.space
            )
          );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h;
    a.Curve3D = function (d, b) {
      this.width = d.evaluator.parser.parse("1");
      a.Graphic3D.call(this, d, b);
      this.expresion = this.parseExpression();
    };
    a.extend(a.Curve3D, a.Graphic3D);
    a.Curve3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      q = evaluator.getVariable("x");
      c = evaluator.getVariable("y");
      h = evaluator.getVariable("z");
      f = evaluator.getVariable("u");
      evaluator.setVariable("u", 0);
      d = evaluator.eval(this.Nu);
      k = [];
      for (var g = 0; g <= d; g++) {
        evaluator.setVariable("u", g / d);
        for (var b = 0, u = this.expresion.length; b < u; b++)
          evaluator.eval(this.expresion[b]);
        k.push(
          this.transformVertex(
            new a.Vector4D(
              evaluator.getVariable("x"),
              evaluator.getVariable("y"),
              evaluator.getVariable("z"),
              1
            )
          )
        );
      }
      g = 0;
      for (b = k.length - 1; g < b; g++)
        this.primitives.push(
          new a.Primitive3D(
            {
              vertices: [k[g], k[g + 1]],
              type: "edge",
              frontColor: this.color.getColor(),
              lineWidth: evaluator.eval(this.width),
            },
            this.space
          )
        );
      evaluator.setVariable("x", q);
      evaluator.setVariable("y", h);
      evaluator.setVariable("z", c);
      evaluator.setVariable("u", f);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u;
    a.Triangle3D = function (b, d) {
      a.Graphic3D.call(this, b, d);
    };
    a.extend(a.Triangle3D, a.Graphic3D);
    a.Triangle3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      expr = evaluator.eval(this.expresion);
      k = expr[0][0];
      d = expr[0][1];
      f = expr[0][2];
      q = expr[1][0];
      c = expr[1][1];
      h = expr[1][2];
      g = expr[2][0];
      b = expr[2][1];
      u = expr[2][2];
      this.primitives.push(
        new a.Primitive3D(
          {
            vertices: [
              this.transformVertex(new a.Vector4D(k, d, f, 1)),
              this.transformVertex(new a.Vector4D(g, b, u, 1)),
              this.transformVertex(new a.Vector4D(q, c, h, 1)),
            ],
            type: "face",
            frontColor: this.color.getColor(),
            backColor: this.backcolor.getColor(),
            edges: this.edges,
            model: this.model,
          },
          this.space
        )
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k;
    a.Face3D = function (d, f) {
      a.Graphic3D.call(this, d, f);
    };
    a.extend(a.Face3D, a.Graphic3D);
    a.Face3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      expr = evaluator.eval(this.expresion);
      k = [];
      for (var d = expr.length - 1; 0 <= d; d--)
        k.push(
          this.transformVertex(
            new a.Vector4D(expr[d][0], expr[d][1], expr[d][2], 1)
          )
        );
      this.primitives.push(
        new a.Primitive3D(
          {
            vertices: k,
            type: "face",
            frontColor: this.color.getColor(),
            backColor: this.backcolor.getColor(),
            edges: this.edges,
            model: this.model,
          },
          this.space
        )
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c;
    a.Polireg3D = function (d, c) {
      this.width = d.evaluator.parser.parse("2");
      this.length = d.evaluator.parser.parse("2");
      a.Graphic3D.call(this, d, c);
    };
    a.extend(a.Polireg3D, a.Graphic3D);
    a.Polireg3D.prototype.buildPrimitives = function () {
      evaluator = this.evaluator;
      this.updateMVMatrix();
      k = evaluator.eval(this.Nu);
      d = [this.transformVertex(new a.Vector4D(0, 0, 0, 1))];
      f = evaluator.eval(this.width) / 2;
      q = evaluator.eval(this.length) / 2;
      c = (2 * Math.PI) / k;
      for (var h = 0; h < k; h++)
        d.push(
          this.transformVertex(
            new a.Vector4D(f * Math.cos(c * h), q * Math.sin(c * h), 0, 1)
          )
        );
      for (h = 0; h < k; h++)
        this.primitives.push(
          new a.Primitive3D(
            {
              vertices: [d[0], h + 2 <= k ? d[h + 2] : d[1], d[h + 1]],
              type: "face",
              frontColor: this.color.getColor(),
              backColor: this.backcolor.getColor(),
              edges: this.edges,
              model: this.model,
            },
            this.space
          )
        );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q;
    a.Text3D = function (d, f) {
      a.Graphic3D.call(this, d, f);
    };
    a.extend(a.Text3D, a.Graphic3D);
    a.Text3D.prototype.buildPrimitives = function () {
      k = this.evaluator;
      d = k.eval(this.expresion);
      f = d[0][0];
      q = d[0][1];
      this.primitives.push(
        new a.Primitive3D(
          {
            vertices: [new a.Vector4D(f, q, 0, 1)],
            type: "text",
            frontColor: this.color.getColor(),
            font: this.font,
            decimals: k.eval(this.decimals),
            fixed: this.fixed,
            displace: 0,
            isText: !0,
            evaluator: k,
            text: this.text,
            family: this.family,
            familyValue: this.familyValue,
          },
          this.space
        )
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a, k) {
    if (a.loadLib) return a;
    var d = new String(
        "-rnd-pi-e-sqr-sqrt-ra\u00edz-exp-log-log10-abs-ent-sgn-ind-sin-sen-cos-tan-cot-sec-csc-sinh-senh-cosh-tanh-coth-sech-csch-asin-asen-acos-atan-min-max-"
      ),
      f = /[\w\.\-//]*(\.png|\.jpg|\.gif|\.svg)/gi,
      q,
      c;
    a.Macro3D = function (c, g) {
      this.expresion = void 0;
      this.inirot = "(0,0,0)";
      this.inirotEuler = !1;
      this.inipos = c.evaluator.parser.parse("(0,0,0)");
      this.endrot = "(0,0,0)";
      this.endrotEuler = !1;
      this.endpos = c.evaluator.parser.parse("(0,0,0)");
      a.Graphic.call(this, c, g);
      for (var b in g) g.hasOwnProperty(b) && (this[b] = g[b]);
      this.inirot.match("Euler") &&
        ((this.inirot = this.inirot.replace("Euler", "")),
        (this.inirotEuler = !0));
      this.endrot.match("Euler") &&
        ((this.endrot = this.endrot.replace("Euler", "")),
        (this.endrotEuler = !0));
      this.inirot = this.evaluator.parser.parse(this.inirot);
      this.endrot = this.evaluator.parser.parse(this.endrot);
      this.inirotM = new a.Matrix4x4();
      this.inirotM_X = new a.Matrix4x4();
      this.inirotM_Y = new a.Matrix4x4();
      this.inirotM_Z = new a.Matrix4x4();
      this.iniposM = new a.Matrix4x4();
      this.endrotM = new a.Matrix4x4();
      this.endrotM_X = new a.Matrix4x4();
      this.endrotM_Y = new a.Matrix4x4();
      this.endrotM_Z = new a.Matrix4x4();
      this.endposM = new a.Matrix4x4();
      this.graphics = [];
      b = c.lessonParser;
      var u = new a.Tokenizer();
      if (void 0 != this.expresion) {
        "'" !== this.expresion.charAt(0) &&
          (this.expresion = "'" + this.expresion + "'");
        this.expresion = this.evaluator.parser.parse(this.expresion);
        var m = this.evaluator.eval(this.expresion),
          r;
        m &&
          ((r = document.getElementById(m)) && "descartes/macro" == r.type
            ? (r = r.text)
            : (r = a.openExternalFile(m)) &&
              !r.match(/tipo_de_macro/g) &&
              (r = null));
        var n, v;
        if (r) {
          v = r
            .replace(/&aacute;/g, "\u00e1")
            .replace(/&eacute;/g, "\u00e9")
            .replace(/&iacute;/g, "\u00ed")
            .replace(/&oacute;/g, "\u00f3")
            .replace(/&uacute;/g, "\u00fa")
            .replace(/&Aacute;/g, "\u00c1")
            .replace(/&Eacute;/g, "\u00c9")
            .replace(/&Iacute;/g, "\u00cd")
            .replace(/&Oacute;/g, "\u00d3")
            .replace(/&Uacute;/g, "\u00da")
            .replace(/&ntilde;/g, "\u00f1")
            .replace(/&Ntilde;/g, "\u00d1")
            .replace(/\&gt;/g, ">")
            .replace(/\&lt;/g, "<")
            .replace(/\&amp;/g, "&")
            .replace(/\r/g, "")
            .split("\n");
          r = [];
          for (var m = 0, q = v.length; m < q; m++)
            (n = v[m].indexOf("=")),
              -1 !== n &&
                ((n = v[m].substring(0, n)),
                ("id" !== k[n] && "type" !== k[n]) || r.push(b.split(v[m])));
          for (var e, p, l, w, m = 0, q = r.length; m < q; m++)
            for (
              w = ((e = r[m] || []), e[0]) && "id" === e[0][0],
                v = 0,
                n = e.length;
              v < n;
              v++
            )
              if (
                ((p = e[v][0].indexOf(".")),
                -1 === p || w
                  ? (p = k[e[v][0]])
                  : ((p = k[e[v][0].substring(p + 1)]),
                    (e[v][0] = this.name + "." + e[v][0])),
                !(
                  "font" === p ||
                  (("fill" === p ||
                    "color" === p ||
                    "backcolor" === p ||
                    "arrow" === p) &&
                    "(" !== e[v][1].charAt(0)) ||
                  ("file" === p && e[v][1].match(f)) ||
                  ("id" !== p && void 0 !== k[e[v][1]])
                ) ||
                  "width" === p ||
                  "height" === p ||
                  "length" === p)
              )
                if ("text" == p)
                  if (e[v][1].match(/\{\\rtf1/)) {
                    p = e[v][1];
                    var y = this;
                    l = function (a, e) {
                      for (
                        var b = u.tokenize(e.replace(/\&squot;/g, "'")),
                          c = 0,
                          g = b.length;
                        c < g;
                        c++
                      )
                        "identifier" != b[c].type ||
                          d.match("-" + b[c].value + "-") ||
                          (b[c].value = y.name + "." + b[c].value);
                      return (
                        (a.match(/^\\expr/) ? "\\expr " : "\\decimals ") +
                        u.flatTokens(b)
                      );
                    };
                    p = p.replace(
                      /\\expr ([a-zA-Z_0-9\u00C0-\u021B+*/%|&^#!?:()><.']*)/gi,
                      l
                    );
                    p = p.replace(
                      /\\decimals ([a-zA-Z_0-9\u00C0-\u021B+*/%|&^#!?:()><.']*)/gi,
                      l
                    );
                    e[v][1] = p;
                  } else {
                    l = b.parseText(e[v][1]).textElementsMacro3Ds;
                    for (var B = 0, E = l.length; B < E; B++) {
                      p = u.tokenize(l[B].replace(/\&squot;/g, "'"));
                      for (var D = 0, F = p.length; D < F; D++)
                        "identifier" !== p[D].type ||
                          d.match("-" + p[D].value + "-") ||
                          (p[D].value = this.name + "." + p[D].value);
                      p = u
                        .flatTokens(p)
                        .replace(/&squot;/g, "'")
                        .replace(/'\+\(/g, "[")
                        .replace(/\)\+'/g, "]");
                      l[B] = p.substring(1, p.length - 1);
                    }
                    e[v][1] = l.join("");
                  }
                else {
                  p = u.tokenize(e[v][1]);
                  l = 0;
                  for (B = p.length; l < B; l++)
                    "identifier" !== p[l].type ||
                      d.match("-" + p[l].value + "-") ||
                      (p[l].value = this.name + "." + p[l].value);
                  e[v][1] = u.flatTokens(p);
                }
          m = 0;
          for (q = r.length; m < q; m++)
            if (r[m][0]) {
              e = "";
              w = !1;
              v = 0;
              for (n = r[m].length; v < n; v++)
                "type" === k[r[m][v][0]] &&
                  ((e = "espacio='" + this.spaceID + "' "), (w = !0)),
                  (e = e + r[m][v][0] + "='" + r[m][v][1] + "' ");
              r[m] = e;
              w
                ? this.graphics.push(
                    b.parse3DGraphic(
                      r[m],
                      this.abs_coord,
                      this.background,
                      this.inirot
                    )
                  )
                : b.parseAuxiliar(r[m]);
            }
        }
        m = 0;
        for (q = this.graphics.length; m < q; m++)
          this.graphics[m].macroChildren = !0;
      }
    };
    a.extend(a.Macro3D, a.Graphic);
    a.Macro3D.prototype.update = function () {
      this.updateTransformation();
      if (this.inipos) {
        var a = this.evaluator.eval(this.inipos);
        this.iniPosX = a[0][0];
        this.iniPosY = a[0][1];
      }
      this.primitives = [];
      for (var a = 0, d = this.graphics.length; a < d; a++)
        (q = this.graphics[a]),
          (q.macro_inirotEuler = this.inirotEuler),
          (q.macro_inirotM = this.inirotM),
          (q.macro_inirotM_X = this.inirotM_X),
          (q.macro_inirotM_Y = this.inirotM_Y),
          (q.macro_inirotM_Z = this.inirotM_Z),
          (q.macro_iniposM = this.iniposM),
          (q.macro_endrotEuler = this.endrotEuler),
          (q.macro_endrotM = this.endrotM),
          (q.macro_endrotM_X = this.endrotM_X),
          (q.macro_endrotM_Y = this.endrotM_Y),
          (q.macro_endrotM_Z = this.endrotM_Z),
          (q.macro_endposM = this.endposM),
          q.update();
      a = 0;
      for (d = this.graphics.length; a < d; a++) {
        q = this.graphics[a];
        if (q.split || this.split)
          for (var b = a + 1; b < d; b++)
            (c = this.graphics[b]), (c.split || this.split) && q.splitFace(c);
        this.primitives = this.primitives.concat(q.primitives || []);
      }
    };
    a.Macro3D.prototype.updateTransformation = function () {
      tmpExpr = this.evaluator.eval(this.inirot);
      this.inirotEuler
        ? ((this.inirotM = this.inirotM.setIdentity()),
          (this.inirotM = this.inirotM.rotateZ(a.degToRad(tmpExpr[0][0]))),
          (this.inirotM = this.inirotM.rotateX(a.degToRad(tmpExpr[0][1]))),
          (this.inirotM = this.inirotM.rotateZ(a.degToRad(tmpExpr[0][2]))))
        : ((this.inirotM_X = this.inirotM_X
            .setIdentity()
            .rotateX(a.degToRad(tmpExpr[0][0]))),
          (this.inirotM_Y = this.inirotM_Y
            .setIdentity()
            .rotateY(a.degToRad(tmpExpr[0][1]))),
          (this.inirotM_Z = this.inirotM_Z
            .setIdentity()
            .rotateZ(a.degToRad(tmpExpr[0][2]))));
      tmpExpr = this.evaluator.eval(this.inipos);
      translate = { x: tmpExpr[0][0], y: tmpExpr[0][1], z: tmpExpr[0][2] };
      this.iniposM = this.iniposM.setIdentity().translate(translate);
      tmpExpr = this.evaluator.eval(this.endrot);
      this.endrotEuler
        ? ((this.endrotM = this.endrotM.setIdentity()),
          (this.endrotM = this.endrotM.rotateZ(a.degToRad(tmpExpr[0][0]))),
          (this.endrotM = this.endrotM.rotateX(a.degToRad(tmpExpr[0][1]))),
          (this.endrotM = this.endrotM.rotateZ(a.degToRad(tmpExpr[0][2]))))
        : ((this.endrotM_X = this.endrotM_X
            .setIdentity()
            .rotateX(a.degToRad(tmpExpr[0][0]))),
          (this.endrotM_Y = this.endrotM_Y
            .setIdentity()
            .rotateY(a.degToRad(tmpExpr[0][1]))),
          (this.endrotM_Z = this.endrotM_Z
            .setIdentity()
            .rotateZ(a.degToRad(tmpExpr[0][2]))));
      tmpExpr = this.evaluator.eval(this.endpos);
      translate = { x: tmpExpr[0][0], y: tmpExpr[0][1], z: tmpExpr[0][2] };
      this.endposM = this.endposM.setIdentity().translate(translate);
    };
    a.Macro3D.prototype.drawAux = function (a) {};
    return a;
  })(descartesJS || {}, babel),
  descartesJS = (function (a) {
    function k(a, b, e, c, g) {
      d.call(this, a / 1.8, a / 1.8, a / 1.8, c, g);
    }
    function d(a, b, d, c, g) {
      a /= 2;
      b /= 2;
      d /= 2;
      this.changeGeometry(a, b, d, c, g) ||
        ((this.vertices = [
          new e(a, d, b, 1),
          new e(a, -d, b, 1),
          new e(a, d, -b, 1),
          new e(a, -d, -b, 1),
          new e(-a, d, b, 1),
          new e(-a, -d, b, 1),
          new e(-a, d, -b, 1),
          new e(-a, -d, -b, 1),
        ]),
        (this.faces = [
          [2, 3, 1, 0],
          [1, 5, 4, 0],
          [5, 7, 6, 4],
          [6, 7, 3, 2],
          [4, 6, 2, 0],
          [3, 7, 5, 1],
        ]),
        this.updateValues(a, b, d, c, g));
    }
    function f(a, b, d, c, g) {
      a /= 2;
      this.changeGeometry(a, b, d, c, g) ||
        ((this.vertices = [
          new e(0, 0, a, 1),
          new e(-0.49 * a, -0.86 * a, -0.32 * a, 1),
          new e(-0.49 * a, 0.86 * a, -0.32 * a, 1),
          new e(1 * a, 0, -0.32 * a, 1),
        ]),
        (this.faces = [
          [3, 2, 1],
          [1, 2, 0],
          [2, 3, 0],
          [3, 1, 0],
        ]),
        this.updateValues(a, b, d, c, g));
    }
    function q(a, b, d, c, g) {
      a /= 2;
      this.changeGeometry(a, b, d, c, g) ||
        ((this.vertices = [
          new e(0, 0, a, 1),
          new e(a, 0, 0, 1),
          new e(-a, 0, 0, 1),
          new e(0, a, 0, 1),
          new e(0, -a, 0, 1),
          new e(0, 0, -a, 1),
        ]),
        (this.faces = [
          [3, 1, 0],
          [2, 3, 0],
          [1, 4, 0],
          [4, 2, 0],
          [1, 3, 5],
          [3, 2, 5],
          [4, 1, 5],
          [2, 4, 5],
        ]),
        this.updateValues(a, b, d, c, g));
    }
    function c(b, d, c, g, m) {
      b /= 3.4;
      if (!this.changeGeometry(b, d, c, g, m)) {
        F = b / 1.6180339887;
        H = 1.6180339887 * b;
        this.vertices = [
          new e(b, b, b, 1),
          new e(b, b, -b, 1),
          new e(b, -b, b, 1),
          new e(b, -b, -b, 1),
          new e(-b, b, b, 1),
          new e(-b, b, -b, 1),
          new e(-b, -b, b, 1),
          new e(-b, -b, -b, 1),
          new e(0, F, H, 1),
          new e(0, F, -H, 1),
          new e(0, -F, H, 1),
          new e(0, -F, -H, 1),
          new e(F, H, 0, 1),
          new e(F, -H, 0, 1),
          new e(-F, H, 0, 1),
          new e(-F, -H, 0, 1),
          new e(H, 0, F, 1),
          new e(H, 0, -F, 1),
          new e(-H, 0, F, 1),
          new e(-H, 0, -F, 1),
        ];
        G = new a.Matrix4x4().setIdentity().rotateY(-v / 6);
        A = 0;
        for (J = this.vertices.length; A < J; A++)
          this.vertices[A] = G.multiplyVector4(this.vertices[A]);
        this.faces = [
          [0, 16, 2, 10, 8],
          [12, 1, 17, 16, 0],
          [8, 4, 14, 12, 0],
          [2, 16, 17, 3, 13],
          [13, 15, 6, 10, 2],
          [6, 18, 4, 8, 10],
          [3, 17, 1, 9, 11],
          [13, 3, 11, 7, 15],
          [1, 12, 14, 5, 9],
          [11, 9, 5, 19, 7],
          [5, 14, 4, 18, 19],
          [6, 15, 7, 19, 18],
        ];
        this.updateValues(b, d, c, g, m);
      }
    }
    function h(b, d, c, g, m) {
      b /= 4;
      if (!this.changeGeometry(b, d, c, g, m)) {
        H = 1.6180339887 * b;
        this.vertices = [
          new e(0, b, H, 1),
          new e(0, b, -H, 1),
          new e(0, -b, H, 1),
          new e(0, -b, -H, 1),
          new e(b, H, 0, 1),
          new e(b, -H, 0, 1),
          new e(-b, H, 0, 1),
          new e(-b, -H, 0, 1),
          new e(H, 0, b, 1),
          new e(H, 0, -b, 1),
          new e(-H, 0, b, 1),
          new e(-H, 0, -b, 1),
        ];
        this.faces = [
          [10, 0, 2],
          [0, 8, 2],
          [8, 5, 2],
          [5, 7, 2],
          [7, 10, 2],
          [6, 0, 10],
          [11, 6, 10],
          [7, 11, 10],
          [7, 3, 11],
          [5, 3, 7],
          [9, 3, 5],
          [8, 9, 5],
          [4, 9, 8],
          [0, 4, 8],
          [6, 4, 0],
          [11, 3, 1],
          [6, 11, 1],
          [4, 6, 1],
          [9, 4, 1],
          [3, 9, 1],
        ];
        G = new a.Matrix4x4().setIdentity().rotateY(-1.029);
        A = 0;
        for (J = this.vertices.length; A < J; A++)
          this.vertices[A] = G.multiplyVector4(this.vertices[A]);
        this.updateValues(b, d, c, g, m);
      }
    }
    function g(a, b, d, c, g) {
      a /= 2;
      this.isSphere ? (d = b = a) : ((b /= 2), (d /= 2));
      if (!this.changeGeometry(a, b, d, c, g)) {
        this.vertices = [new e(0, 0, b, 1)];
        for (A = 1; A < c; A++)
          for (D = (A * v) / c, I = 0; I < g; I++)
            (E = (I * x) / g),
              (w = a * r(D) * n(E)),
              (y = d * r(D) * r(E)),
              (B = b * n(D)),
              this.vertices.push(new e(w, y, B, 1));
        this.vertices.push(new e(0, 0, -b, 1));
        this.faces = [];
        for (A = 0; A < g; A++)
          this.faces.push([0, ((A + 1) % g) + 1, (A % g) + 1]);
        for (A = 1; A < c - 1; A++)
          for (I = 0; I < g; I++)
            this.faces.push([
              I + 1 + (A - 1) * g,
              ((I + 1) % g) + 1 + (A - 1) * g,
              ((I + 1) % g) + 1 + A * g,
              I + 1 + A * g,
            ]);
        for (A = 0; A < g; A++)
          this.faces.push([
            this.vertices.length - 1,
            this.vertices.length - 1 - g + A,
            this.vertices.length - 1 - g + ((A + 1) % g),
          ]);
        this.updateValues(a, b, d, c, g);
      }
    }
    function b(a, b, d, c, g) {
      a /= 2;
      b /= 2;
      d /= 2;
      if (!this.changeGeometry(a, b, d, c, g)) {
        this.vertices = [];
        for (A = 0; A < g; A++)
          for (I = 0; I < c; I++)
            (w = ((a * (g - A)) / g) * n((I * x) / c)),
              (y = ((d * (g - A)) / g) * r((I * x) / c)),
              (B = b - (2 * A * b) / g),
              this.vertices.push(new e(w, y, B, 1));
        this.vertices.push(new e(0, 0, -b, 1));
        this.faces = [];
        for (A = 0; A < g - 1; A++)
          for (I = 0; I < c; I++)
            this.faces.push([
              I + A * c,
              ((I + 1) % c) + A * c,
              ((I + 1) % c) + (A + 1) * c,
              I + (A + 1) * c,
            ]);
        for (A = 0; A < c; A++)
          this.faces.push([
            this.vertices.length - 1,
            this.vertices.length - 1 - c + A,
            this.vertices.length - 1 - c + ((A + 1) % c),
          ]);
        this.updateValues(a, b, d, c, g);
      }
    }
    function u(a, b, d, c, g) {
      a /= 2;
      b /= 2;
      d /= 2;
      if (!this.changeGeometry(a, b, d, c, g)) {
        this.vertices = [];
        for (A = 0; A < g + 1; A++)
          for (I = 0; I < c; I++)
            (w = a * n((I * x) / c)),
              (y = d * r((I * x) / c)),
              (B = b - (2 * A * b) / g),
              this.vertices.push(new e(w, y, B, 1));
        this.faces = [];
        for (A = 0; A < g; A++)
          for (I = 0; I < c; I++)
            this.faces.push([
              I + A * c,
              ((I + 1) % c) + A * c,
              ((I + 1) % c) + (A + 1) * c,
              I + (A + 1) * c,
            ]);
        this.updateValues(a, b, d, c, g);
      }
    }
    function m() {
      function a(b) {
        return parseInt(b);
      }
      function b(a) {
        return parseFloat(a);
      }
      this.vertices = [];
      this.faces = [];
      A = 0;
      for (J = this.fileData.length; A < J; A++)
        (K = this.fileData[A]),
          K.match(/^V\(/)
            ? ((C = K.substring(2, K.length - 1)
                .split(",")
                .map(b)),
              this.vertices.push(new e(C[0] || 0, C[1] || 0, C[2] || 0, 1)))
            : K.match(/^F\(/) &&
              ((C = K.substring(2, K.length - 1)
                .split(",")
                .map(a)),
              this.faces.push(C.reverse()));
    }
    if (a.loadLib) return a;
    var r = Math.sin,
      n = Math.cos,
      v = Math.PI,
      x = 2 * v,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N;
    a.OtherGeometry = function (n, l) {
      this.width = n.evaluator.parser.parse("2");
      this.height = n.evaluator.parser.parse("2");
      this.length = n.evaluator.parser.parse("2");
      e = a.Vector4D;
      a.Graphic3D.call(this, n, l);
      switch (this.type) {
        case "cube":
          this.buildGeometry = k;
          break;
        case "box":
          this.buildGeometry = d;
          break;
        case "tetrahedron":
          this.buildGeometry = f;
          break;
        case "octahedron":
          this.buildGeometry = q;
          break;
        case "sphere":
          this.isSphere = !0;
        case "ellipsoid":
          this.buildGeometry = g;
          break;
        case "dodecahedron":
          this.buildGeometry = c;
          break;
        case "icosahedron":
          this.buildGeometry = h;
          break;
        case "cone":
          this.buildGeometry = b;
          break;
        case "cylinder":
          this.buildGeometry = u;
          break;
        case "mesh":
          (this.fileData = a
            .openExternalFile(this.evaluator.eval(this.file))
            .split(/\r/)),
            (this.buildGeometry = m);
      }
    };
    a.extend(a.OtherGeometry, a.Graphic3D);
    a.OtherGeometry.prototype.buildPrimitives = function () {
      p = this.evaluator;
      this.updateMVMatrix();
      this.buildGeometry(
        p.eval(this.width),
        p.eval(this.height),
        p.eval(this.length),
        p.eval(this.Nu),
        p.eval(this.Nv)
      );
      A = 0;
      for (J = this.faces.length; A < J; A++) {
        l = [];
        I = 0;
        for (N = this.faces[A].length; I < N; I++)
          l.push(this.transformVertex(this.vertices[this.faces[A][I]]));
        this.primitives.push(
          new a.Primitive3D(
            {
              vertices: l,
              type: "face",
              frontColor: this.color.getColor(),
              backColor: this.backcolor.getColor(),
              edges: this.edges,
              model: this.model,
            },
            this.space
          )
        );
      }
    };
    a.OtherGeometry.prototype.changeGeometry = function (a, b, e, d, c) {
      return (
        this.oldWidth === a &&
        this.oldHeight === b &&
        this.oldLength === e &&
        this.oldNu === d &&
        this.oldNv === c
      );
    };
    a.OtherGeometry.prototype.updateValues = function (a, b, e, d, c) {
      this.oldWidth = a;
      this.oldHeight = b;
      this.oldLength = e;
      this.oldNv = c;
      this.oldNu = d;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.max,
      d = Math.min,
      f = Math.PI,
      q = Math.cos,
      c = Math.sin,
      h = Math.abs,
      g = Math.round,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G;
    a.R2 = function (a, b) {
      this.x = a || 0;
      this.y = b || 0;
    };
    a.R2.prototype.set = function (a, b) {
      this.x = a || 0;
      this.y = b || 0;
      return this;
    };
    a.R2.prototype.copy = function () {
      return new a.R2(this.x, this.y);
    };
    a.R2.prototype.ix = function () {
      return g(k(d(this.x, 32e3), -32e3));
    };
    a.R2.prototype.iy = function () {
      return g(k(d(this.y, 32e3), -32e3));
    };
    a.R2.prototype.equals = function (a) {
      return this.x == a.x && this.y == a.y;
    };
    a.R2.prototype.norm2 = function () {
      return this.x * this.x + this.y * this.y;
    };
    a.R2.prototype.norm = function () {
      return Math.sqrt(this.norm2());
    };
    a.R2.prototype.distance = function (a) {
      u = this.copy();
      u.sub(a);
      return u.norm();
    };
    a.R2.prototype.dot = function (a) {
      return this.x * a.x + this.y * a.y;
    };
    a.R2.prototype.det = function (a) {
      return this.x * a.y - this.y * a.x;
    };
    a.R2.prototype.mul = function (a) {
      this.x *= a;
      this.y *= a;
    };
    a.R2.prototype.div = function (a) {
      this.x /= a;
      this.y /= a;
    };
    a.R2.prototype.add = function (a) {
      this.x += a.x;
      this.y += a.y;
    };
    a.R2.prototype.sub = function (a) {
      this.x -= a.x;
      this.y -= a.y;
    };
    a.R2.prototype.normalize = function () {
      b = this.norm();
      0 != b && this.div(b);
    };
    a.R2.prototype.rotR90 = function () {
      b = this.x;
      this.x = this.y;
      this.y = -b;
    };
    a.R2.prototype.rotL90 = function () {
      b = this.x;
      this.x = -this.y;
      this.y = b;
    };
    a.R2.prototype.rot = function (a) {
      m = this.copy();
      v = q(a);
      x = c(a);
      this.x = m.x * v - m.y * x;
      this.y = m.x * x + m.y * v;
    };
    a.R2.prototype.rot = function (a) {
      this.rot((a * f) / 180);
    };
    a.R2.prototype.intersection = function (b, c, g, m) {
      e = c.x - b.x;
      p = g.x - m.x;
      l = g.x - b.x;
      w = c.y - b.y;
      y = g.y - m.y;
      B = g.y - b.y;
      G = e * y - p * w;
      return 1e-6 < h(G)
        ? ((r = (l * y - B * p) / G),
          (n = (-l * w + B * e) / G),
          0 <= r && 1 >= r && 0 <= n && 1 >= n
            ? new a.R2(b.x + e * r, b.y + w * r)
            : null)
        : (c.x - g.x) * B != (c.y - g.y) * l
        ? null
        : b.x != c.x
        ? ((E = d(b.x, c.x)),
          (D = k(b.x, c.x)),
          E <= g.x && g.x <= D ? g : E <= m.x && m.x <= D ? m : null)
        : g.x != m.x
        ? ((F = d(g.x, m.x)),
          (H = k(g.x, m.x)),
          F <= b.x && b.x <= H ? b : F <= c.x && c.x <= H ? c : null)
        : b.y != c.y
        ? ((E = d(b.y, c.y)),
          (D = k(b.y, c.y)),
          E <= g.y && g.y <= D ? g : E <= m.y && m.y <= D ? m : null)
        : g.y != m.y
        ? ((F = d(g.y, m.y)),
          (H = k(g.y, m.y)),
          F <= b.y && b.y <= H ? b : F <= c.y && c.y <= H ? c : null)
        : b.x == g.x && b.y == g.y
        ? b
        : null;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u;
    a.R2Newton = function (b, d) {
      this.evaluator = b;
      this.constraint = d;
      if (
        "==" == this.constraint.value ||
        "<" == this.constraint.value ||
        "<=" == this.constraint.value ||
        ">" == this.constraint.value ||
        ">=" == this.constraint.value
      )
        (this.sign =
          "<" == this.constraint.value || "<=" == this.constraint.value
            ? "menor"
            : ">" == this.constraint.value || ">=" == this.constraint.value
            ? "mayor"
            : "igual"),
          (this.constraint = this.constraint.equalToMinus()),
          (this.constraint = this.constraint.childs[0]);
      h = new a.R2(0, 0);
      c = new a.R2(0, 0);
      u = new a.R2(0, 0);
    };
    a.R2Newton.prototype.getUnitNormal = function () {
      this.normal.normalize();
      return u.set(this.normal.x, this.normal.y);
    };
    a.R2Newton.prototype.gradient = function (a) {
      k = this.evaluator;
      h.x = 0;
      h.y = 0;
      g = k.getVariable("x");
      b = k.getVariable("y");
      k.setVariable("x", a.x);
      k.setVariable("y", a.y);
      this.f0 = k.eval(this.constraint);
      k.setVariable("x", k.getVariable("x") + 1e-6);
      d = k.eval(this.constraint);
      h.x = (d - this.f0) / 1e-6;
      h.x = isNaN(h.x) ? Infinity : h.x;
      k.setVariable("x", k.getVariable("x") - 1e-6);
      k.setVariable("y", k.getVariable("y") + 1e-6);
      d = k.eval(this.constraint);
      h.y = (d - this.f0) / 1e-6;
      h.y = isNaN(h.y) ? Infinity : h.y;
      k.setVariable("x", g);
      k.setVariable("y", b);
      return h;
    };
    a.R2Newton.prototype.findZero = function (a, d, n) {
      k = this.evaluator;
      c.x = a.x;
      c.y = a.y;
      g = k.getVariable("x");
      b = k.getVariable("y");
      k.setVariable("x", a.x);
      k.setVariable("y", a.y);
      this.f0 = k.eval(this.constraint);
      if (
        ("menor" === this.sign && 0 >= this.f0) ||
        ("mayor" === this.sign && 0 <= this.f0)
      )
        return c;
      k.setVariable("x", g);
      k.setVariable("y", b);
      for (var h = 0; 16 > h; h++)
        if (
          ((f = c.x),
          (q = c.y),
          (this.normal = this.gradient(c)),
          0 != this.normal.norm2() &&
            this.normal.mul(-this.f0 / this.normal.norm2()),
          (c.x = f + this.normal.x),
          (c.y = q + this.normal.y),
          this.normal.norm() < d)
        )
          return (
            0 === this.normal.x &&
              0 === this.normal.y &&
              ((this.normal.x = c.x - a.x), (this.normal.y = c.y - a.y)),
            c
          );
      return n ? c : null;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    a.Vector2D = function (a, d) {
      this.x = a;
      this.y = d;
    };
    a.Vector2D.AXIS_X = new a.Vector2D(1, 0);
    a.Vector2D.AXIS_Y = new a.Vector2D(0, 1);
    a.Vector2D.prototype.vectorLength = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    a.Vector2D.prototype.dotProduct = function (a) {
      return this.x * a.x + this.y * a.y;
    };
    a.Vector2D.prototype.angleBetweenVectors = function (a) {
      return Math.acos(
        this.dotProduct(a) / (this.vectorLength() * a.vectorLength())
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor,
      d = Math.round,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e;
    a.Control = function (b, e) {
      this.parent = b;
      this.evaluator = b.evaluator;
      var c = (this.parser = b.evaluator.parser);
      this.id = "graphic" !== e.type ? "C" : "G";
      this.gui = this.type = "";
      this.region = "south";
      this.y = this.x = 0;
      this.w = "video" !== e.type ? 100 : 350;
      this.h = "video" !== e.type ? 23 : 120;
      "graphic" !== e.type && "audio" !== e.type && "video" !== e.type
        ? "text" !== e.type
          ? (this.expresion = c.parse("(0,0,100,23)"))
          : ((this.expresion = c.parse("(0,0,300,200)")),
            (this.w = 300),
            (this.h = 200))
        : (this.expresion = c.parse("(0,0)"));
      this.fixed = 2 != this.parent.version ? !1 : !0;
      this.visible = !0;
      this.color = new a.Color(4 > this.parent.version ? "000000" : "222222");
      this.colorInt = new a.Color("graphic" !== e.type ? "f0f8ff" : "cc0022");
      this.underlined = this.italics = this.bold = "";
      this.font_size = 4 > this.parent.version ? -1 : c.parse("12");
      this.parameter = this.action = "";
      this.parameterFont = "Monospace 12px";
      this.drawif = c.parse("1");
      this.activeif = c.parse("1");
      this.tooltip = "";
      this.tooltipFont = "Monospace 12px";
      this.Explanation = "";
      this.ExplanationFont = "Monospace 12px";
      this.cID = this.msg_pos = "";
      this.valueExpr = c.parse("0");
      this.decimals = c.parse("2");
      this.min = c.parse("-Infinity");
      this.max = c.parse("Infinity");
      this.incr = c.parse("0.1");
      this.exponentialif = this.discrete = !1;
      this.zIndex = -1;
      for (var g in e) e.hasOwnProperty(g) && (this[g] = e[g]);
      ("video" !== this.type && "audio" !== this.type) ||
        "interior" === this.region ||
        (this.region = "interior");
      void 0 == this.name &&
        (this.name = 2 == this.parent.version ? this.id : "_nada_");
      this.name =
        "_._" == this.name || "_nada_" == this.name || "_void_" == this.name
          ? ""
          : this.name;
      c = this.evaluator.eval(this.expresion);
      this.x = d(c[0][0]);
      this.y = d(c[0][1]);
      4 == c[0].length && ((this.w = d(c[0][2])), (this.h = d(c[0][3])));
      this.actionExec = b.lessonParser.parseAction(this);
    };
    a.Control.prototype.init = function () {};
    a.Control.prototype.update = function () {};
    a.Control.prototype.draw = function () {};
    a.Control.prototype.getContainer = function () {
      var a = this.parent.spaces,
        b;
      if ("interior" === this.region)
        for (var e = 0, c = a.length; e < c; e++) {
          if (((b = a[e]), b.id === this.spaceID))
            return (
              b.addCtr(this),
              (this.zIndex = b.zIndex),
              b.numericalControlContainer
            );
        }
      else {
        if ("external" === this.region)
          return (
            this.parent.externalSpace.addCtr(this),
            this.parent.externalSpace.container
          );
        if ("scenario" === this.region)
          return this.cID
            ? ((this.expresion = this.evaluator.parser.parse(
                "(0,-1000," + this.w + "," + this.h + ")"
              )),
              this.parent.stage.stageSpace.addCtr(this),
              (this.zIndex = this.parent.stage.stageSpace.zIndex),
              this.parent.stage.stageSpace.numericalControlContainer)
            : this.parent.externalSpace.container;
        if (/north|south|east|west/.test(this.region))
          return (
            this.parent[this.region + "Space"].controls.push(this),
            this.parent[this.region + "Space"].container
          );
      }
      a[0].addCtr(this);
      this.zIndex = a[0].zIndex;
      return a[0].numericalControlContainer;
    };
    a.Control.prototype.addControlContainer = function (a) {
      var b = this.getContainer();
      b.childNodes[0] ? b.insertBefore(a, b.childNodes[0]) : b.appendChild(a);
    };
    a.Control.prototype.updatePositionAndSize = function () {
      c = h = g = b = !1;
      u = this.evaluator.eval(this.expresion);
      m = d(u[0][0]);
      c = d(this.x) !== m;
      this.x = m;
      m = d(u[0][1]);
      h = d(this.y) !== m;
      this.y = m;
      4 === u[0].length &&
        ((m = d(u[0][2])),
        (g = d(this.w) !== m),
        (this.w = m),
        (m = d(u[0][3])),
        (b = d(this.h) !== m),
        (this.h = m));
      if (g || b || c || h) this.init(!0), this.draw();
    };
    a.Control.prototype.formatOutputValue = function (a) {
      e = this.parent;
      r = a + "";
      n = this.evaluator.eval(this.decimals);
      v = r.indexOf(".");
      -1 != v &&
        ((x = r.substring(v + 1)),
        x.length > n && (r = parseFloat(r).toFixed(n)));
      this.fixed &&
        (2 !== e.version || (2 === e.version && !this.exponentialif)) &&
        (r = parseFloat(a).toFixed(n));
      this.exponentialif &&
        0 != parseFloat(r) &&
        ((r =
          this.fixed && 2 !== e.version
            ? parseFloat(r).toExponential(n)
            : parseFloat(r).toExponential()),
        (r = r.toUpperCase().replace("+", "")));
      return r.replace(".", e.decimal_symbol);
    };
    a.Control.prototype.updateAndExecAction = function () {
      this.parent.updateControls();
      "init" === this.action && (this.click = !1);
      this.actionExec.execute();
      this.parent.updateControls();
      "animate" !== this.action && this.parent.update();
    };
    a.Control.prototype.createGradient = function (a, b) {
      this.linearGradient = this.ctx.createLinearGradient(0, 0, 0, b);
      f = b * b;
      for (var e = 0; e < b; e++)
        (q = k(e - (35 * b) / 100)),
          this.linearGradient.addColorStop(
            e / b,
            "rgba(0,0,0," + (q * q * 192) / f / 255 + ")"
          );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor,
      d = Math.abs,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E = /[\w\.\-//]*(\.gif)/gi,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N,
      z,
      M,
      L;
    a.Button = function (b, e) {
      this.imageSrc = "";
      this.image = new Image();
      this.imageOver = new Image();
      this.imageDown = new Image();
      a.Control.call(this, b, e);
      this.ratio = b.ratio;
      -1 === this.font_size && (this.fontSizeNotSet = !0);
      "[" === this.name.charAt(0) &&
      "]" === this.name.charAt(this.name.length - 1)
        ? (this.name = this.parser.parse(
            this.name.substring(1, this.name.length - 1)
          ))
        : (this.name = this.parser.parse("'" + this.name + "'"));
      var c;
      this.classContainer = "";
      if (this.imageSrc.trim().match("^_STYLE_")) {
        this.customStyle = !0;
        this.canvasStyle = [];
        this.conStyle = [];
        this.conStyle.textBorder = 3;
        c = this.imageSrc.trim().substring(8).split("|");
        for (var d, g, m = 0, n = c.length; m < n; m++)
          (d = c[m]),
            (g = d.match(/rgb/g)),
            d.match("class=")
              ? (this.classContainer = " " + d.substring(6))
              : d.match("border=")
              ? (this.canvasStyle.push({
                  type: "border-style",
                  value: "solid",
                }),
                this.canvasStyle.push({
                  type: "border-width",
                  value: d.substring(7).trim() + "px",
                }))
              : d.match("borderRadius=")
              ? (this.canvasStyle.push({
                  type: "border-radius",
                  value: d.substring(13).trim() + "px",
                }),
                this.conStyle.push({
                  type: "border-radius",
                  value: d.substring(13).trim() + "px",
                }))
              : d.match("borderColor=")
              ? this.canvasStyle.push({
                  type: "border-color",
                  value: (g ? "" : "#") + d.substring(12).trim(),
                })
              : d.match("overColor=")
              ? (this.conStyle.overColor =
                  (g ? "" : "#") + d.substring(10).trim())
              : d.match("downColor=")
              ? (this.conStyle.downColor =
                  (g ? "" : "#") + d.substring(10).trim())
              : d.match("font=")
              ? (this.conStyle.font = d.substring(5).trim().toLowerCase())
              : d.match("inactiveColor=")
              ? (this.conStyle.inactiveColor =
                  (g ? "" : "#") + d.substring(14).trim())
              : d.match("inactiveColorBorder=")
              ? (this.conStyle.inactiveColorBorder =
                  (g ? "" : "#") + d.substring(20).trim())
              : d.match("shadowTextBlur=")
              ? (this.conStyle.shadowTextBlur = parseFloat(
                  d.substring(15).trim()
                ))
              : d.match("shadowTextOffsetX=")
              ? (this.conStyle.shadowTextOffsetX = parseFloat(
                  d.substring(18).trim()
                ))
              : d.match("shadowTextOffsetY=")
              ? (this.conStyle.shadowTextOffsetY = parseFloat(
                  d.substring(18).trim()
                ))
              : d.match("shadowTextColor=")
              ? (this.conStyle.shadowTextColor =
                  (g ? "" : "#") + d.substring(16).trim())
              : d.match("shadowBoxBlur=")
              ? (this.conStyle.shadowBoxBlur = parseFloat(
                  d.substring(14).trim()
                ))
              : d.match("shadowBoxOffsetX=")
              ? (this.conStyle.shadowBoxOffsetX = parseFloat(
                  d.substring(17).trim()
                ))
              : d.match("shadowBoxOffsetY=")
              ? (this.conStyle.shadowBoxOffsetY = parseFloat(
                  d.substring(17).trim()
                ))
              : d.match("shadowBoxColor=")
              ? (this.conStyle.shadowBoxColor =
                  (g ? "" : "#") + d.substring(15).trim())
              : d.match("shadowInsetBoxBlur=")
              ? (this.conStyle.shadowInsetBoxBlur = parseFloat(
                  d.substring(19).trim()
                ))
              : d.match("shadowInsetBoxOffsetX=")
              ? (this.conStyle.shadowInsetBoxOffsetX = parseFloat(
                  d.substring(22).trim()
                ))
              : d.match("shadowInsetBoxOffsetY=")
              ? (this.conStyle.shadowInsetBoxOffsetY = parseFloat(
                  d.substring(22).trim()
                ))
              : d.match("shadowInsetBoxColor=")
              ? (this.conStyle.shadowInsetBoxColor =
                  (g ? "" : "#") + d.substring(20).trim())
              : d.match("textBorder=") &&
                (this.conStyle.textBorder = parseFloat(d.substring(11).trim()));
        this.imageSrc = "vacio.gif";
      }
      this.imageSrc.match("_COLORES_") &&
        ((c = this.imageSrc.split("_")),
        (this.colorInt = new a.Color(c[2])),
        (this.color = new a.Color(c[3])),
        (this.font_size = this.parser.parse(c[5])),
        (this.imageSrc = ""));
      "[" == this.imageSrc.charAt(0)
        ? (this.imageSrc = this.parser.parse(
            this.imageSrc.substring(1, this.imageSrc.length - 1)
          ))
        : (this.imageSrc = this.parser.parse("'" + this.imageSrc + "'"));
      c = this.evaluator.eval(this.imageSrc).toString().trim();
      "" != c &&
        ((d = c.substr(0, c.lastIndexOf("."))),
        (g = c.substr(c.lastIndexOf("."))),
        c.toLowerCase().match(/vacio.gif$/)
          ? ((this.imageSrc = this.parser.parse("'vacio.gif'")),
            (this.image.ready = 1),
            3 === this.parent.version && (this.name = this.parser.parse("")),
            (this.emptyImage = { ready: !0 }),
            this.parser.parse("'vacio.gif'"))
          : ((this.image = this.parent.getImage(c)),
            d &&
              ((this.imageOver = this.parent.getImage(d + "_over" + g)),
              (this.imageDown = this.parent.getImage(d + "_down" + g)))));
      this.container = document.createElement("div");
      this.container.setAttribute(
        "class",
        "DescartesButtonContainer" + this.classContainer
      );
      this.container.setAttribute("id", this.id);
      this.container.setAttribute(
        "style",
        "width:" +
          this.w +
          "px; height:" +
          this.h +
          "px; left:" +
          this.x +
          "px; top:" +
          this.y +
          "px; z-index:" +
          this.zIndex +
          ";"
      );
      this.canvas = document.createElement("canvas");
      this.canvas.width = this.w * this.ratio;
      this.canvas.height = this.h * this.ratio;
      this.canvas.setAttribute(
        "style",
        "position:absolute; left:0px; top:0px; width:" +
          this.w +
          "px; height:" +
          this.h +
          "px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;"
      );
      this.ctx = this.canvas.getContext("2d");
      this.ctx.imageSmoothingEnabled = !1;
      this.container.appendChild(this.canvas);
      this.addControlContainer(this.container);
      this.addEvents();
      this.init();
    };
    a.extend(a.Button, a.Control);
    a.Button.prototype.init = function (b) {
      f = this.evaluator;
      D = this.container;
      q = this.canvas;
      c = this.ctx;
      h = f.eval(this.expresion);
      this.x = h[0][0];
      this.y = h[0][1];
      4 == h[0].length &&
        ((this.w = parseInt(h[0][2])), (this.h = parseInt(h[0][3])));
      q.width = this.w * this.ratio;
      q.height = this.h * this.ratio;
      q.setAttribute(
        "style",
        "position:absolute; left:0px; top:0px; width:" +
          this.w +
          "px; height:" +
          this.h +
          "px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;"
      );
      D.setAttribute(
        "style",
        "width:" +
          this.w +
          "px; height:" +
          this.h +
          "px; left:" +
          this.x +
          "px; top:" +
          this.y +
          "px; z-index:" +
          this.zIndex +
          "; display:block;"
      );
      if (this.canvasStyle)
        for (var e = 0, d = this.canvasStyle.length; e < d; e++)
          q.style[this.canvasStyle[e].type] = this.canvasStyle[e].value;
      if (this.conStyle) {
        e = 0;
        for (d = this.conStyle.length; e < d; e++)
          D.style[this.conStyle[e].type] = this.conStyle[e].value;
        if (this.conStyle.shadowBoxColor) {
          var e = this.conStyle.shadowBoxOffsetX || 0,
            d = this.conStyle.shadowBoxOffsetY || 2,
            g = this.conStyle.shadowBoxBlur || 2;
          D.style.boxShadow =
            e +
            "px " +
            d +
            "px " +
            g +
            "px 1px " +
            this.conStyle.shadowBoxColor;
        }
        this.conStyle.shadowInsetBoxColor &&
          ((e = this.conStyle.shadowInsetBoxOffsetX || 0),
          (d = this.conStyle.shadowInsetBoxOffsetY || -2),
          (g = this.conStyle.shadowInsetBoxBlur || 1),
          (q.style.boxShadow =
            e +
            "px " +
            d +
            "px " +
            g +
            "px 1px " +
            this.conStyle.shadowInsetBoxColor +
            " inset"));
        this.conStyle.shadowTextColor &&
          ((c.shadowBlur = this.conStyle.shadowTextBlur || 1),
          (c.shadowOffsetX = this.conStyle.shadowTextOffsetX || 0),
          (c.shadowOffsetY = this.conStyle.shadowTextOffsetY || 2),
          (c.shadowColor = this.conStyle.shadowTextColor));
      }
      this.fontSizeNotSet &&
        (this.font_size = f.parser.parse(a.getFieldFontSize(this.h) + ""));
      this.fs_evaluated = f.eval(this.font_size);
      this.createGradient(this.w, this.h);
      D.style.display = 0 < f.eval(this.drawif) ? "block" : "none";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.lineJoin = "round";
      c.font =
        this.italics +
        " " +
        this.bold +
        " " +
        this.fs_evaluated +
        "px descartesJS_sansserif,Arial,Helvetica,Sans-serif";
      this.customStyle &&
        ("serif" == this.conStyle.font
          ? (c.font =
              this.italics +
              " " +
              this.bold +
              " " +
              this.fs_evaluated +
              "px descartesJS_serif,Times,'Times New Roman', serif")
          : "monospace" == this.conStyle.font
          ? (c.font =
              this.italics +
              " " +
              this.bold +
              " " +
              this.fs_evaluated +
              "px descartesJS_monospace,Courier,'Courier New',Monospace")
          : "icons" == this.conStyle.font &&
            (c.font =
              this.italics +
              " " +
              this.bold +
              " " +
              this.fs_evaluated +
              "px descartesJS_icons,Arial,Helvetica,Sans-serif"));
      this.draw(b);
    };
    a.Button.prototype.update = function () {
      f = this.evaluator;
      D = this.container;
      q = this.canvas;
      this.activeIfValue = 0 < f.eval(this.activeif);
      (this.drawIfValue = 0 < f.eval(this.drawif))
        ? ((D.style.display = "block"), this.draw())
        : ((D.style.display = "none"), (this.buttonClick = !1));
      D.style.cursor = this.activeIfValue ? "pointer" : "not-allowed";
      q.style.cursor = this.activeIfValue ? "pointer" : "not-allowed";
      D.setAttribute("data-active", this.activeIfValue ? "true" : "false");
      this.updatePositionAndSize();
    };
    a.Button.prototype.draw = function (d) {
      D = this.container;
      f = this.evaluator;
      q = this.canvas;
      c = this.ctx;
      b = f.eval(this.name);
      u = this.evaluator.eval(this.imageSrc).toString().trim();
      if (
        !d &&
        ((F = this.over === this.oldOver),
        (H = this.buttonClick === this.oldButtonClick),
        (G = this.activeIfValue === this.oldActiveIfValue),
        (K = this.drawIfValue === this.oldDrawIfValue),
        (C = b === this.oldName),
        (A = u === this.oldImageSrc),
        (this.oldOver = this.over),
        (this.oldButtonClick = this.buttonClick),
        (this.oldActiveIfValue = this.activeIfValue),
        (this.oldDrawIfValue = this.drawIfValue),
        (this.oldName = b),
        (this.oldImageSrc = u),
        F && H && G && K && C && A)
      )
        return;
      c.save();
      c.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
      g = this.fs_evaluated;
      D.setAttribute("data-name", b);
      u
        ? ((m = "vacio.gif" === u ? this.emptyImage : this.parent.getImage(u)),
          (J = u.substr(0, u.lastIndexOf("."))),
          (I = u.substr(u.lastIndexOf("."))),
          (N = J + "_over" + I),
          (z = J + "_down" + I),
          (M = "vacio.gif" === u ? this.emptyImage : this.parent.getImage(N)),
          (L = "vacio.gif" === u ? this.emptyImage : this.parent.getImage(z)))
        : (L = M = m = this.emptyImage);
      c.clearRect(0, 0, this.w, this.h);
      n = r = 0;
      this.buttonClick && (n = r = 1);
      p = k(this.w / 2 + r) - 0.5;
      l = k(this.h / 2 + n) - 0.5;
      m &&
        ((w = m.height || 1e8),
        (y = a.getFontMetrics(
          this.italics +
            " " +
            this.bold +
            " " +
            g +
            "px descartesJS_sansserif, Arial, Helvetica, Sans-serif"
        ).h),
        (B = "" != b ? (0 <= this.h - w - y - 2 ? !0 : !1) : !1),
        (x = parseInt((this.w - m.width) / 2) + r),
        (e = B
          ? parseInt((this.h - y - m.height + 2) / 2)
          : parseInt((this.h - m.height) / 2) + n),
        B &&
          ((l = parseInt(this.h - y / 2 - 2)),
          (D.style.backgroundColor = this.colorInt.getColor()),
          (c.strokeStyle = this.color.getColor()),
          (c.lineWidth = 1),
          c.beginPath(),
          c.moveTo(0.5, 0.5),
          c.lineTo(this.w - 0.5, 0.5),
          c.lineTo(this.w - 0.5, this.h - 0.5),
          c.lineTo(0.5, this.h - 0.5),
          c.closePath(),
          c.stroke()));
      m && m.ready
        ? m !== this.emptyImage && m.complete
          ? u.match(E)
            ? ((this.canvas.style.backgroundRepeat = "no-repeat"),
              (this.canvas.style.backgroundImage = "url('" + u + "')"),
              (this.canvas.style.backgroundPosition = x + "px " + e + "px"))
            : c.drawImage(m, x, e)
          : this.emptyImage &&
            this.customStyle &&
            (D.style.backgroundColor = this.colorInt.getColor())
        : ((D.style.backgroundColor = this.colorInt.getColor()),
          this.buttonClick ||
            (a.drawLine(
              c,
              this.w - 1,
              0,
              this.w - 1,
              this.h,
              "rgba(0,0,0,0.5)"
            ),
            a.drawLine(c, 0, 0, 0, this.h, "rgba(0,0,0,0.09)"),
            a.drawLine(c, 1, 0, 1, this.h, "rgba(0,0,0,0.03)")),
          (c.fillStyle = this.linearGradient),
          c.fillRect(0, 0, this.w, this.h));
      this.activeIfValue &&
        (M !== this.emptyImage && this.over && M.ready && M.complete
          ? N.match(E)
            ? ((this.canvas.style.backgroundImage = "url('" + N + "')"),
              (this.canvas.style.backgroundPosition = x + "px " + e + "px"))
            : c.drawImage(M, x, e)
          : this.customStyle &&
            this.conStyle.overColor &&
            this.over &&
            (D.style.backgroundColor = this.conStyle.overColor));
      this.activeIfValue
        ? L !== this.emptyImage && this.buttonClick && L.ready && L.complete
          ? z.match(E)
            ? ((this.canvas.style.backgroundImage = "url('" + z + "')"),
              (this.canvas.style.backgroundPosition = x + "px " + e + "px"))
            : c.drawImage(L, x, e)
          : this.customStyle &&
            this.conStyle.downColor &&
            this.buttonClick &&
            (D.style.backgroundColor = this.conStyle.downColor)
        : this.buttonClick &&
          !m &&
          ((c.fillStyle = "rgba(0,0,0,0.09)"),
          c.fillRect(0, 0, this.w, this.h));
      c.fillStyle = this.color.getColor();
      this.customStyle &&
        this.conStyle.shadowTextColor &&
        0 < this.conStyle.textBorder &&
        ((c.lineWidth = this.conStyle.textBorder),
        (c.strokeStyle = this.conStyle.shadowTextColor),
        c.strokeText(b, p, l));
      B ||
        this.conStyle ||
        !this.drawTextBorder() ||
        ((c.lineWidth = parseInt(g / 6)),
        (c.strokeStyle = this.colorInt.getColor()),
        c.strokeText(b, p, l));
      c.fillText(b, p, l);
      this.underlined &&
        ((v = c.measureText(b).width),
        (c.strokeStyle = this.color.getColor()),
        (c.lineWidth = k(g / 10) || 2),
        (c.lineCap = "round"),
        c.beginPath(),
        c.moveTo(parseInt((this.w - v) / 2) + r, l + k(g / 2) + k(g / 5) - 1.5),
        c.lineTo(parseInt((this.w + v) / 2) + r, l + k(g / 2) + k(g / 5) - 1.5),
        c.stroke());
      this.activeIfValue ||
        (this.customStyle && this.conStyle.inactiveColor
          ? (D.style.backgroundColor = this.conStyle.inactiveColor)
          : ((c.fillStyle = "rgba(240,240,240,0.6)"),
            c.fillRect(0, 0, this.w, this.h)));
      c.restore();
      this._image_pos_x = x;
      this._image_pos_y = e;
    };
    a.Button.prototype.drawTextBorder = function () {
      this.colorInt.getColor();
      this.color.getColor();
      return !(
        0.5 >
        (d(this.colorInt.r - this.color.r) +
          d(this.colorInt.g - this.color.g) +
          d(this.colorInt.b - this.color.b)) /
          255
      );
    };
    a.Button.prototype.buttonPressed = function () {
      this.updateAndExecAction();
    };
    a.Button.prototype.addEvents = function () {
      function b(e, d, m) {
        a.clearTimeout(g);
        c.buttonClick &&
          c.drawIfValue &&
          c.activeIfValue &&
          (d.call(c),
          (e = m ? e : 100),
          (g = a.setTimeout(function () {
            b(e, d, !1);
          }, e)));
      }
      function e(g) {
        this.focus();
        g.preventDefault();
        g.stopPropagation();
        document.activeElement != document.body &&
          document.activeElement.blur();
        c.whichBtn = a.whichBtn(g);
        "L" == c.whichBtn &&
          c.activeIfValue &&
          ((c.buttonClick = !0),
          c.draw(),
          "calculate" == c.action &&
            (c.evaluator.setVariable(c.id, c.evaluator.eval(c.valueExpr)),
            b(1e3, c.buttonPressed, !0)),
          c.canvas.removeEventListener("touchend", d),
          c.canvas.addEventListener("touchend", d),
          c.canvas.removeEventListener("mouseup", d),
          c.canvas.addEventListener("mouseup", d));
      }
      function d(a) {
        this.focus();
        a.preventDefault();
        a.stopPropagation();
        if (c.activeIfValue || c.buttonClick)
          (c.buttonClick = !1),
            c.draw(),
            "calculate" != c.action &&
              (c.evaluator.setVariable(c.id, c.evaluator.eval(c.valueExpr)),
              c.buttonPressed()),
            c.canvas.removeEventListener("touchend", d),
            c.canvas.removeEventListener("mouseup", d);
        c.parent.update();
      }
      var c = this,
        g;
      c.canvas.oncontextmenu = function () {
        return !1;
      };
      this.over = this.buttonClick = !1;
      this.canvas.addEventListener("touchstart", e);
      this.canvas.addEventListener("mousedown", e);
      this.canvas.addEventListener("mouseover", function (a) {
        a.preventDefault();
        a.stopPropagation();
        c.over = !0;
        c.draw();
      });
      this.canvas.addEventListener("mouseout", function (a) {
        a.preventDefault();
        a.stopPropagation();
        c.over = !1;
        c.buttonClick = !1;
        c.draw();
      });
      document.addEventListener("visibilitychange", function (a) {
        c.buttonClick = !1;
      });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u, m, r, n, v, x, e, p, l, w;
    a.Spinner = function (b, e) {
      a.Control.call(this, b, e);
      this.tabindex = ++this.parent.tabindex;
      "_._" == this.name && (this.name = "");
      "[" === this.name.charAt(0) &&
      "]" === this.name.charAt(this.name.length - 1)
        ? (this.name = this.parser.parse(
            this.name.substring(1, this.name.length - 1)
          ))
        : (this.name = this.parser.parse("'" + this.name + "'"));
      this.containerControl = document.createElement("div");
      this.canvas = document.createElement("canvas");
      this.divUp = document.createElement("div");
      this.divDown = document.createElement("div");
      this.field = document.createElement("input");
      this.label = document.createElement("label");
      this.containerControl.appendChild(this.label);
      this.containerControl.appendChild(this.field);
      this.containerControl.appendChild(this.canvas);
      this.containerControl.appendChild(this.divUp);
      this.containerControl.appendChild(this.divDown);
      this.addControlContainer(this.containerControl);
      w = this.evaluator.parser.parse("1");
      this.originalIncr = this.incr;
      if (
        0 >= this.evaluator.eval(this.decimals) ||
        0 == this.evaluator.eval(this.incr)
      ) {
        var c = this.evaluator.eval(this.incr);
        0 < c
          ? (this.originalIncr = this.incr =
              this.evaluator.parser.parse(parseInt(c).toString()))
          : (this.incr = w);
      }
      this.addEvents();
      this.init();
    };
    a.extend(a.Spinner, a.Control);
    a.Spinner.prototype.init = function () {
      k = this.evaluator;
      var b = k.eval(this.name).toString();
      this.label.innerHTML = b;
      this.value = this.validateValue(k.eval(this.valueExpr));
      var e = this.formatOutputValue(this.value);
      this.fieldFontSize =
        2 !== this.parent.version ? a.getFieldFontSize(this.h) : 10;
      var c = 2 !== this.parent.version ? "__" : "_____",
        d = a.getTextWidth(e + "_", this.fieldFontSize + "px Arial"),
        g = 2 + parseInt(this.h / 2),
        m = parseInt(this.w / 2 - g / 2),
        c = a.getTextWidth(b + c, this.fieldFontSize + "px Arial");
      this.visible || ((m = this.w - g), (d = 0));
      m < c && (m = c);
      "" == b && (m = 0);
      this.w - m - g < d && (m = this.w - g - d);
      0 > m && (m = 0);
      b = this.w - (m + g);
      this.containerControl.setAttribute("class", "DescartesSpinnerContainer");
      this.containerControl.setAttribute(
        "style",
        "width: " +
          this.w +
          "px; height: " +
          this.h +
          "px; left: " +
          this.x +
          "px; top: " +
          this.y +
          "px; z-index: " +
          this.zIndex +
          ";"
      );
      this.containerControl.setAttribute("id", this.id);
      this.canvas.setAttribute("width", g + "px");
      this.canvas.setAttribute("height", this.h + "px");
      this.canvas.setAttribute(
        "style",
        "position: absolute; left: " + m + "px; top: 0px;"
      );
      this.ctx = this.canvas.getContext("2d");
      this.ctx.imageSmoothingEnabled = !1;
      this.divUp.setAttribute("class", "up");
      this.divUp.setAttribute(
        "style",
        "background-color: rgba(255, 255, 255, 0); cursor: pointer; position: absolute; width : " +
          g +
          "px; height : " +
          this.h / 2 +
          "px; left: " +
          m +
          "px; top: 0px;"
      );
      this.divDown.setAttribute("class", "down");
      this.divDown.setAttribute(
        "style",
        "background-color: rgba(255, 255, 255, 0); cursor: pointer; position: absolute; width : " +
          g +
          "px; height : " +
          this.h / 2 +
          "px; left: " +
          m +
          "px; top: " +
          this.h / 2 +
          "px;"
      );
      this.field.setAttribute("type", "text");
      this.field.setAttribute("id", this.id + "_spinner");
      this.field.setAttribute("class", "DescartesSpinnerField");
      this.field.setAttribute(
        "style",
        "font-family: Arial; font-size: " +
          this.fieldFontSize +
          "px; width : " +
          b +
          "px; height : " +
          this.h +
          "px; left: " +
          (g + m) +
          "px;"
      );
      this.field.setAttribute("tabindex", this.tabindex);
      this.field.value = e;
      this.visible || (this.field.style.display = "none");
      this.label.setAttribute("class", "DescartesSpinnerLabel");
      this.label.setAttribute(
        "style",
        "font-size:" +
          this.fieldFontSize +
          "px; width: " +
          m +
          "px; height: " +
          this.h +
          "px; line-height: " +
          this.h +
          "px;"
      );
      k.setVariable(this.id, this.value);
      this.createGradient(this.h / 2, this.h);
    };
    a.Spinner.prototype.update = function () {
      k = this.evaluator;
      this.label.innerHTML = k.eval(this.name).toString();
      0 >= k.eval(this.decimals)
        ? ((d = k.eval(this.incr)),
          0 < d
            ? (this.originalIncr = this.incr =
                k.parser.parse(parseInt(d).toString()))
            : (this.incr = w))
        : (this.incr = 0 != k.eval(this.originalIncr) ? this.originalIncr : w);
      this.activeIfValue = 0 < k.eval(this.activeif);
      this.drawIfValue = 0 < k.eval(this.drawif);
      this.field.disabled = !this.activeIfValue;
      this.drawIfValue
        ? ((this.containerControl.style.display = "block"), this.draw())
        : ((this.click = !1), (this.containerControl.style.display = "none"));
      this.updatePositionAndSize();
      (this.parent.animation.playing && document.activeElement == this.field) ||
        ((f = this.field.value),
        (q = this.value),
        (this.value = this.validateValue(k.getVariable(this.id))),
        (this.field.value = this.formatOutputValue(this.value)),
        this.value == q &&
          this.field.value != f &&
          ((this.value = this.validateValue(f)),
          (this.field.value = this.formatOutputValue(this.value))),
        k.setVariable(this.id, this.value));
    };
    a.Spinner.prototype.draw = function () {
      c = this.ctx;
      h = this.canvas.width;
      g = this.canvas.height;
      c.fillStyle = "#f0f8ff";
      c.fillRect(0, 0, h, g);
      c.fillStyle = this.linearGradient;
      c.fillRect(0, 0, h, g);
      this.up
        ? ((b = "gray"), (u = "#f0f8ff"))
        : ((b = "#f0f8ff"), (u = "gray"));
      a.drawLine(c, 0, 0, h, 0, b);
      a.drawLine(c, 0, 0, 0, g / 2, b);
      a.drawLine(c, 0, g / 2, h, g / 2, u);
      this.down
        ? ((b = "gray"), (u = "#f0f8ff"))
        : ((b = "#f0f8ff"), (u = "gray"));
      a.drawLine(c, 0, g / 2 + 1, h, g / 2 + 1, b);
      a.drawLine(c, 0, g / 2 + 1, 0, g, b);
      a.drawLine(c, 0, g - 1, h, g - 1, u);
      m = [parseInt(h / 2 + 1), parseInt(h / 5 + 1), parseInt(h - h / 5 + 1)];
      r = [
        parseInt(g / 8 + 1),
        parseInt(g / 8 + 1 + g / 4),
        parseInt(g / 8 + 1 + g / 4),
      ];
      c.fillStyle = this.activeIfValue ? "#2244cc" : "#8888aa";
      c.beginPath();
      c.moveTo(m[0], r[0]);
      c.lineTo(m[1], r[1]);
      c.lineTo(m[2], r[2]);
      c.fill();
      r = [
        parseInt(g - g / 8),
        parseInt(g - g / 8 - g / 4),
        parseInt(g - g / 8 - g / 4),
      ];
      c.fillStyle = this.activeIfValue ? "#d00018" : "#aa8888";
      c.beginPath();
      c.moveTo(m[0], r[0]);
      c.lineTo(m[1], r[1]);
      c.lineTo(m[2], r[2]);
      c.fill();
      c.fillStyle = "rgba(0,0,0," + 24 / 255 + ")";
      this.up && c.fillRect(0, 0, h, g / 2);
      this.down && c.fillRect(0, g / 2, h, g);
    };
    a.Spinner.prototype.validateValue = function (a) {
      k = this.evaluator;
      isNaN(parseFloat(a)) ||
        (a.toString().match("e") && (a = parseFloat(a).toFixed(20)));
      a = void 0 != a ? a.toString() : "0";
      a = a.replace(this.parent.decimal_symbol, ".");
      n =
        a == parseFloat(a)
          ? parseFloat(a)
          : parseFloat(k.eval(k.parser.parse(a)));
      isNaN(n) && (n = 0);
      e = k.eval(this.min);
      p = k.eval(this.max);
      "" === e && (e = -Infinity);
      "" === p && (p = Infinity);
      n < e && (n = e);
      n > p && (n = p);
      this.discrete &&
        ((v = k.eval(this.incr)), (n = 0 == v ? 0 : v * Math.round(n / v)));
      x = k.eval(this.decimals);
      0 >= x && (x = 0);
      return (n = parseFloat(parseFloat(n).toFixed(x)));
    };
    a.Spinner.prototype.increase = function () {
      this.changeValue(parseFloat(this.value) + this.evaluator.eval(this.incr));
    };
    a.Spinner.prototype.decrease = function () {
      this.changeValue(parseFloat(this.value) - this.evaluator.eval(this.incr));
    };
    a.Spinner.prototype.changeValue = function (a) {
      this.activeIfValue &&
        ((this.value = this.validateValue(a)),
        (this.field.value = this.formatOutputValue(this.value)),
        this.evaluator.setVariable(this.id, this.value),
        this.updateAndExecAction());
    };
    a.Spinner.prototype.addEvents = function () {
      function b(e, c, d) {
        a.clearTimeout(f);
        if (m.up || m.down)
          c.call(m),
            (e = d ? e : 30),
            (f = a.setTimeout(function () {
              b(e, c);
            }, e));
      }
      function e(c) {
        c.preventDefault();
        m.whichBtn = a.whichBtn(c);
        "L" == m.whichBtn &&
          m.activeIfValue &&
          ((m.up = !0), b(n, m.increase, !0), m.draw());
      }
      function c(e) {
        e.preventDefault();
        m.whichBtn = a.whichBtn(e);
        "L" == m.whichBtn &&
          m.activeIfValue &&
          ((m.down = !0), b(n, m.decrease, !0), m.draw());
      }
      function d(b) {
        m.up = !1;
        a.clearTimeout(f);
        m.draw();
      }
      function g(b) {
        m.down = !1;
        a.clearTimeout(f);
        m.draw();
      }
      l = a.hasTouchSupport;
      var m = this,
        n = l ? 500 : 200,
        f;
      m.divUp.oncontextmenu =
        m.divDown.oncontextmenu =
        m.field.oncontextmenu =
        m.label.oncontextmenu =
          function () {
            return !1;
          };
      this.label.addEventListener("touchstart", function (a) {
        a.preventDefault();
        return !1;
      });
      this.label.addEventListener("mousedown", function (a) {
        a.preventDefault();
        return !1;
      });
      this.field.addEventListener("keydown", function (a) {
        13 == a.keyCode && m.changeValue(m.field.value);
      });
      this.divUp.addEventListener("touchstart", e);
      this.divUp.addEventListener("mousedown", e);
      this.divDown.addEventListener("touchstart", c);
      this.divDown.addEventListener("mousedown", c);
      this.divUp.addEventListener("mouseout", function (b) {
        m.up = !1;
        a.clearTimeout(f);
        m.draw();
        b.preventDefault();
      });
      this.divDown.addEventListener("mouseout", function (b) {
        m.down = !1;
        a.clearTimeout(f);
        m.draw();
        b.preventDefault();
      });
      this.divUp.addEventListener("touchend", d);
      window.addEventListener("touchend", d);
      this.divUp.addEventListener("mouseup", d);
      window.addEventListener("mouseup", d);
      this.divDown.addEventListener("touchend", g);
      window.addEventListener("touchend", g);
      this.divDown.addEventListener("mouseup", g);
      window.addEventListener("mouseup", g);
      document.addEventListener("visibilitychange", function (b) {
        m.up = !1;
        m.down = !1;
        a.clearTimeout(f);
        m.draw();
      });
      m.field.addEventListener("click", function (a) {
        this.select();
        this.focus();
      });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h;
    a.TextField = function (c, b) {
      a.Control.call(this, c, b);
      "[" === this.name.charAt(0) &&
      "]" === this.name.charAt(this.name.length - 1)
        ? (this.name = this.parser.parse(
            this.name.substring(1, this.name.length - 1)
          ))
        : (this.name = this.parser.parse("'" + this.name.trim() + "'"));
      void 0 === this.valueExprString &&
        (this.valueExprString = this.onlyText ? "0" : "");
      this.emptyString = !1;
      this.ok = 0;
      this.tabindex = ++this.parent.tabindex;
      this.regExpDecimalSymbol = new RegExp(
        "\\" + this.parent.decimal_symbol,
        "g"
      );
      if (this.answer)
        if (
          (this.answer.match("krypto_") &&
            (this.answer = new a.Krypto().decode(this.answer.substring(7))),
          (this.answerPattern = this.answer),
          (this.answer = a.buildRegularExpresionsPatterns(
            this.answer,
            this.evaluator
          )),
          this.onlyText)
        ) {
          var d = this.answerPattern.indexOf("|");
          this.firstAnswer =
            -1 == d ? this.answerPattern : this.answerPattern.substring(0, d);
        } else
          this.firstAnswer = this.parser.parse(
            this.answerPattern.substring(1, this.answerPattern.indexOf(","))
          );
      this.onlyText &&
        ((this.valueExprString.match(/^'/) &&
          this.valueExprString.match(/'$/)) ||
          (this.valueExpr = this.evaluator.parser.parse(
            "'" + this.valueExprString + "'"
          )),
        (this.validateValue = function (a) {
          a = a.toString();
          return "''" == a || "'" == a
            ? ""
            : a && a.match(/^'/) && a.match(/'$/)
            ? a.substring(1, a.length - 1)
            : a;
        }),
        (this.formatOutputValue = function (a) {
          return a.toString();
        }));
      "" == name.trim() && (name = "");
      this.containerControl = document.createElement("div");
      this.field = document.createElement("input");
      this.label = document.createElement("label");
      this.containerControl.appendChild(this.label);
      this.containerControl.appendChild(this.field);
      this.addControlContainer(this.containerControl);
      this.addEvents();
      this.init();
    };
    a.extend(a.TextField, a.Control);
    a.TextField.prototype.init = function () {
      k = this.evaluator;
      var c = k.eval(this.name).toString();
      this.label.innerHTML = c;
      this.value = this.validateValue(k.eval(this.valueExpr));
      var b = this.formatOutputValue(this.value);
      this.fieldFontSize = a.getFieldFontSize(this.h);
      var d = a.getTextWidth(b + "_", this.fieldFontSize + "px Arial"),
        m = parseInt(this.w / 2),
        f = a.getTextWidth(c, this.fieldFontSize + "px Arial");
      this.visible || ((m = this.w), (d = 0));
      m < f && (m = f);
      "" == c && (m = 0);
      this.w - m < d && (m = this.w - d);
      0 > m && (m = 0);
      c = this.w - m;
      this.containerControl.setAttribute(
        "class",
        "DescartesTextFieldContainer"
      );
      this.containerControl.setAttribute(
        "style",
        "width: " +
          this.w +
          "px; height: " +
          this.h +
          "px; left: " +
          this.x +
          "px; top: " +
          this.y +
          "px; z-index: " +
          this.zIndex +
          ";"
      );
      this.field.setAttribute("type", "text");
      this.field.setAttribute("id", this.id + "TextField");
      this.field.setAttribute("class", "DescartesTextFieldField");
      this.field.setAttribute(
        "style",
        "font-size: " +
          this.fieldFontSize +
          "px; width : " +
          c +
          "px; height : " +
          this.h +
          "px; left: " +
          m +
          "px;"
      );
      this.field.setAttribute("tabindex", this.tabindex);
      this.field.value = b;
      this.label.setAttribute("class", "DescartesTextFieldLabel");
      this.label.setAttribute(
        "style",
        "font-size:" +
          this.fieldFontSize +
          "px; width: " +
          m +
          "px; height: " +
          this.h +
          "px; line-height: " +
          this.h +
          "px;"
      );
      this.evaluate && (this.ok = this.evaluateAnswer());
      this.evaluator.setVariable(this.id, this.value);
      this.evaluator.setVariable(this.id + ".ok", this.ok);
      this.oldValue = this.value;
      this.update();
    };
    a.TextField.prototype.update = function () {
      k = this.evaluator;
      this.label.innerHTML = k.eval(this.name).toString();
      this.activeIfValue = 0 < k.eval(this.activeif);
      this.drawIfValue = 0 < k.eval(this.drawif);
      this.field.disabled = !this.activeIfValue;
      this.containerControl.style.display = this.drawIfValue ? "block" : "none";
      this.updatePositionAndSize();
      (this.parent.animation.playing && document.activeElement == this.field) ||
        ((d = this.field.value),
        (f = this.value),
        (this.value = this.validateValue(k.getVariable(this.id))),
        (this.field.value = this.formatOutputValue(this.value)),
        this.value === f &&
          this.field.value != d &&
          ((this.value = this.validateValue(d)),
          (this.field.value = this.formatOutputValue(this.value))),
        k.setVariable(this.id, this.value));
    };
    a.TextField.prototype.validateValue = function (a) {
      if ("" === a || "''" == a) return "";
      k = this.evaluator;
      a = a.toString().replace(this.regExpDecimalSymbol, ".", "g");
      q =
        a == parseFloat(a)
          ? parseFloat(a)
          : parseFloat(k.eval(k.parser.parse(a)));
      isNaN(q) && (q = 0);
      c = k.eval(this.min);
      "" == c && (c = -Infinity);
      h = k.eval(this.max);
      "" == h && (h = Infinity);
      q < c && (q = c);
      q > h && (q = h);
      this.discrete &&
        ((a = k.eval(this.incr)), (q = 0 == a ? 0 : a * Math.round(q / a)));
      return (q = parseFloat(parseFloat(q).toFixed(k.eval(this.decimals))));
    };
    a.TextField.prototype.formatOutputValue = function (a) {
      return "" === a ? "" : this.uber.formatOutputValue.call(this, a);
    };
    a.TextField.prototype.changeValue = function (a, b) {
      this.activeIfValue &&
        ((this.value = this.validateValue(a)),
        (this.field.value = this.formatOutputValue(this.value)),
        this.evaluate && (this.ok = this.evaluateAnswer()),
        this.evaluator.setVariable(this.id, this.value),
        this.evaluator.setVariable(this.id + ".ok", this.ok),
        this.updateAndExecAction());
    };
    a.TextField.prototype.evaluateAnswer = function () {
      return a.esCorrecto(this.answer, this.value, this.evaluator, this.answer);
    };
    a.TextField.prototype.getFirstAnswer = function () {
      return this.answer
        ? this.onlyText
          ? this.firstAnswer
          : this.evaluator.eval(this.firstAnswer)
        : "";
    };
    a.TextField.prototype.addEvents = function () {
      var a = this;
      a.field.oncontextmenu = a.label.oncontextmenu = function () {
        return !1;
      };
      a.label.addEventListener("touchstart", function (a) {
        a.preventDefault();
        return !1;
      });
      a.label.addEventListener("mousedown", function (a) {
        a.preventDefault();
        return !1;
      });
      this.field.addEventListener("blur", function (b) {
        a.evaluator.eval(a.drawIf) && a.changeValue(a.field.value, !0);
      });
      this.field.addEventListener("keydown", function (b) {
        a.activeIfValue && 13 == b.keyCode && a.changeValue(a.field.value, !0);
      });
      a.field.addEventListener("click", function (a) {
        this.select();
        this.focus();
      });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.abs,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r;
    a.Menu = function (b, c) {
      function g(a) {
        e.options = a.split(",");
        e.menuOptions = [];
        e.strValue = [];
        var b;
        a = 0;
        for (var c = e.options.length; a < c; a++)
          (b = e.customSplit(e.options[a])),
            1 == b.length
              ? (e.menuOptions.push(b[0]), e.strValue.push(a.toString()))
              : 2 == b.length &&
                (e.menuOptions.push(b[0]),
                "" == b[1]
                  ? e.strValue.push(a.toString())
                  : e.strValue.push(b[1]));
        a = 0;
        for (c = e.menuOptions.length; a < c; a++)
          e.menuOptions[a].match(/^\[/) && e.menuOptions[a].match(/\]$/)
            ? (e.menuOptions[a] = d.parse(
                e.menuOptions[a].substring(1, e.menuOptions[a].length - 1)
              ))
            : (e.menuOptions[a] = d.parse("'" + e.menuOptions[a] + "'"));
        a = 0;
        for (c = e.strValue.length; a < c; a++)
          e.strValue[a].match(/^\[/) && e.strValue[a].match(/\]$/)
            ? (e.strValue[a] = d.parse(
                e.strValue[a].substring(1, e.strValue[a].length - 1)
              ))
            : (e.strValue[a] = d.parse(e.strValue[a]));
        for (; e.select.firstChild; ) e.select.removeChild(e.select.firstChild);
        a = 0;
        for (c = e.menuOptions.length; a < c; a++)
          (b = document.createElement("option")),
            (b.innerHTML = f.eval(e.menuOptions[a])),
            e.select.appendChild(b);
        return 0;
      }
      this.options = "";
      a.Control.call(this, b, c);
      d = this.parser;
      f = this.evaluator;
      this.ok = 0;
      this.tabindex = ++this.parent.tabindex;
      this.answer &&
        (this.answer.match("krypto_") &&
          (this.answer = new a.Krypto().decode(this.answer.substring(7))),
        (this.answer =
          parseInt(this.answer.split(",")[0].replace("[", "")) || 0));
      "[" === this.name.charAt(0) &&
      "]" === this.name.charAt(this.name.length - 1)
        ? (this.name = this.parser.parse(
            this.name.substring(1, this.name.length - 1)
          ))
        : (this.name = this.parser.parse("'" + this.name + "'"));
      var e = this;
      this.evaluator.setFunction(this.id + ".setOptions", g);
      this.containerControl = document.createElement("div");
      this.label = document.createElement("label");
      this.select = document.createElement("select");
      this.field = document.createElement("input");
      g(this.options);
      this.containerControl.appendChild(this.label);
      this.containerControl.appendChild(this.select);
      this.visible && this.containerControl.appendChild(this.field);
      this.addControlContainer(this.containerControl);
      this.addEvents();
      this.init();
    };
    a.extend(a.Menu, a.Control);
    a.Menu.prototype.init = function (b) {
      f = this.evaluator;
      var c = f.eval(this.name).toString();
      this.label.innerHTML = c;
      this.fieldFontSize =
        2 != this.parent.version ? a.getFieldFontSize(this.h) : 10;
      var d = 0,
        e = 0,
        g = 0;
      this.value = b ? this.value : f.eval(this.valueExpr);
      this.indexValue = this.getIndex(this.value);
      b = 0;
      for (var m = this.menuOptions.length; b < m; b++)
        (g = a.getTextWidth(
          f.eval(this.menuOptions[b]).toString(),
          this.fieldFontSize + "px Arial"
        )),
          g > d && ((d = g), (e = b));
      d += 25;
      g =
        a.getTextWidth(
          this.formatOutputValue(f.eval(this.strValue[e])),
          this.fieldFontSize + "px Arial"
        ) + 7;
      e = a.getTextWidth(c, this.fieldFontSize + "px Arial") + 10;
      "" == c && (e = 0);
      this.visible || (g = 0);
      for (c = this.w - g - e; c < d && 0 < e; ) e--, c++;
      for (; c < d && 0 < g; ) g--, c++;
      for (; e + c + g + 1 < this.w; ) c++, g++;
      d = e;
      b = d + c;
      g = this.w - b;
      m = this.formatOutputValue(f.eval(this.strValue[this.indexValue]));
      this.containerControl.setAttribute("class", "DescartesMenuContainer");
      this.containerControl.setAttribute(
        "style",
        "width: " +
          this.w +
          "px; height: " +
          this.h +
          "px; left: " +
          this.x +
          "px; top: " +
          this.y +
          "px; z-index:" +
          this.zIndex +
          ";"
      );
      this.label.setAttribute("class", "DescartesMenuLabel");
      this.label.setAttribute(
        "style",
        "font-size:" +
          this.fieldFontSize +
          "px; width:" +
          e +
          "px; height:" +
          this.h +
          "px; line-height:" +
          this.h +
          "px;"
      );
      this.field.setAttribute("type", "text");
      this.field.setAttribute("id", this.id + "_menuField");
      this.field.value = m;
      this.field.setAttribute("class", "DescartesMenuField");
      this.field.setAttribute(
        "style",
        "font-size: " +
          this.fieldFontSize +
          "px; width: " +
          g +
          "px; height: " +
          this.h +
          "px; left:" +
          b +
          "px;"
      );
      this.field.setAttribute("tabindex", this.tabindex);
      this.select.setAttribute("id", this.id + "_menuSelect");
      this.select.setAttribute("class", "DescartesMenuSelect");
      this.select.setAttribute(
        "style",
        "text-align:left; font-size:" +
          this.fieldFontSize +
          "px; width: " +
          c +
          "px; height: " +
          this.h +
          "px; left: " +
          d +
          "px; border: 1.5px solid #7a8a99; background-color: #eeeeee;"
      );
      this.select.setAttribute("tabindex", this.tabindex);
      this.select.selectedIndex = this.indexValue;
      f.setVariable(
        this.id,
        parseFloat(m.replace(this.parent.decimal_symbol, "."))
      );
      this.update();
    };
    a.Menu.prototype.update = function () {
      f = this.evaluator;
      this.activeIfValue = 0 < f.eval(this.activeif);
      this.drawIfValue = 0 < f.eval(this.drawif);
      this.field.disabled = this.activeIfValue ? !1 : !0;
      this.select.disabled = this.activeIfValue ? !1 : !0;
      this.drawIfValue
        ? (this.containerControl.style.display = "block")
        : ((this.click = !1), (this.containerControl.style.display = "none"));
      if (
        !this.parent.animation.playing ||
        document.activeElement != this.select
      ) {
        this.label.innerHTML = f.eval(this.name).toString();
        for (var a = 0, b = this.menuOptions.length; a < b; a++)
          this.select.options[a].innerHTML = f.eval(this.menuOptions[a]);
        this.value = f.getVariable(this.id);
        isNaN(this.value) && (this.value = 0);
        this.field.value = this.formatOutputValue(this.value);
        f.setVariable(this.id, parseFloat(this.value));
        this.select.selectedIndex = parseFloat(this.getIndex(this.value));
      }
      this.ok = this.value == this.answer ? 1 : 0;
      this.evaluator.setVariable(this.id + ".ok", this.ok);
      this.updatePositionAndSize();
    };
    a.Menu.prototype.customSplit = function (a) {
      g = !1;
      b = "";
      u = 0;
      for (m = -1; u < a.length; ) {
        r = a.charAt(u);
        a.charAt(u - 1);
        if ("[" === r && -1 === m) {
          if (g || "" != b) b += "\u00a6";
          m++;
        } else
          "[" === r
            ? m++
            : "]" === r && 0 === m
            ? ((g = !0), m--)
            : "]" == a.charAt(u) && (m = 0 > m ? m : m - 1);
        b += a.charAt(u);
        u++;
      }
      return b.split("\u00a6");
    };
    a.Menu.prototype.getIndex = function (a) {
      a = parseFloat(a.toString().replace(this.parent.decimal_symbol, "."));
      q = -1;
      c = Infinity;
      for (var b = 0, d = this.strValue.length; b < d; b++)
        (h = k(a - parseFloat(this.evaluator.eval(this.strValue[b])))),
          h <= c && ((c = h), (q = b));
      return q;
    };
    a.Menu.prototype.changeValue = function () {
      this.activeIfValue &&
        (this.evaluator.setVariable(this.id, this.value),
        this.updateAndExecAction());
    };
    a.Menu.prototype.addEvents = function () {
      var a = this;
      a.select.oncontextmenu =
        a.label.oncontextmenu =
        a.field.oncontextmenu =
          function () {
            return !1;
          };
      a.label.addEventListener("touchstart", function (a) {
        a.preventDefault();
        return !1;
      });
      a.label.addEventListener("mousedown", function (a) {
        a.preventDefault();
        return !1;
      });
      this.select.addEventListener("change", function (b) {
        a.value = a.evaluator.eval(a.strValue[this.selectedIndex]);
        a.field.value = a.formatOutputValue(a.value);
        a.evaluator.setVariable(a.id, a.field.value);
        a.changeValue();
        b.preventDefault();
      });
      this.field.addEventListener("keydown", function (b) {
        13 == b.keyCode &&
          ((a.indexValue = a.getIndex(a.field.value)),
          (a.value = a.evaluator.eval(a.strValue[a.indexValue])),
          (a.field.value = a.formatOutputValue(a.indexValue)),
          (a.select.selectedIndex = a.indexValue),
          a.changeValue());
      });
      a.field.addEventListener("click", function (a) {
        this.focus();
      });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y;
    a.Scrollbar = function (b, e) {
      a.Control.call(this, b, e);
      "[" === this.name.charAt(0) &&
      "]" === this.name.charAt(this.name.length - 1)
        ? (this.name = this.parser.parse(
            this.name.substring(1, this.name.length - 1)
          ))
        : (this.name = this.parser.parse("'" + this.name + "'"));
      this.orientation = this.w >= this.h ? "h" : "v";
      this.containerControl = document.createElement("div");
      this.canvas = document.createElement("canvas");
      this.divUp = document.createElement("div");
      this.divDown = document.createElement("div");
      this.field = document.createElement("input");
      this.scrollManipulator = document.createElement("div");
      this.label = document.createElement("label");
      this.containerControl.appendChild(this.canvas);
      this.containerControl.appendChild(this.label);
      this.containerControl.appendChild(this.divUp);
      this.containerControl.appendChild(this.divDown);
      this.containerControl.appendChild(this.field);
      this.containerControl.appendChild(this.scrollManipulator);
      this.addControlContainer(this.containerControl);
      this.addEvents();
      this.init();
    };
    a.extend(a.Scrollbar, a.Control);
    a.Scrollbar.prototype.init = function () {
      d = this.evaluator;
      0 == d.eval(this.decimals)
        ? (this.incr = 1)
        : (this.incr = (d.eval(this.max) - d.eval(this.min)) / 100);
      this.value = this.validateValue(d.eval(this.valueExpr));
      q = this.formatOutputValue(this.value);
      c = this.evaluator.eval(this.expresion);
      this.x = c[0][0];
      this.y = c[0][1];
      4 == c[0].length && ((this.w = c[0][2]), (this.h = c[0][3]));
      this.orientation = this.w >= this.h ? "h" : "v";
      this.initScroll(q);
      this.changeScrollPositionFromValue();
      this.prePos = this.pos;
      d.setVariable(this.id, this.value);
    };
    a.Scrollbar.prototype.initScroll = function (b) {
      f = this;
      d = f.evaluator;
      var e = d.eval(f.name).toString();
      f.label.innerHTML = e;
      var c =
        "v" === f.orientation ? parseInt(19 + (5 * (f.h - 100)) / 100) : f.h;
      f.fieldFontSize =
        "v" === f.orientation
          ? c - parseInt(f.h / 20) - 1
          : 2 !== f.parent.version
          ? a.getFieldFontSize(c)
          : 10;
      var g = a.getTextWidth(b + "_", f.fieldFontSize + "px Arial"),
        m = f.parent.getSpaceById(f.spaceID).h;
      f.labelHeight = "" == e ? 0 : c;
      f.fieldHeight = "" == f.visible ? 0 : c;
      if ("v" === f.orientation)
        (f.canvasWidth = f.w),
          (f.canvasHeight = f.h - f.labelHeight - f.fieldHeight),
          18 <= f.canvasHeight + f.y - m && (f.canvasHeight = m),
          (e = 0),
          (e = f.fieldHeight),
          (g = e + f.canvasHeight),
          (f.canvasX = 0),
          (f.canvasY = f.fieldHeight),
          (f.labelWidth = f.w),
          (f.labelY = g),
          (f.upWidth = f.downW = f.w),
          (f.upHeight = f.downH = 15),
          (f.upX = 0),
          (f.upY = f.fieldHeight),
          (f.downX = 0),
          (f.downY = g - f.downH),
          (f.fieldWidth = f.w),
          (f.fieldX = 0),
          (f.scrollManipulatorW = f.w),
          (f.scrollManipulatorH = parseInt(
            (f.canvasHeight -
              f.upHeight -
              f.downH -
              f.labelHeight -
              f.fieldHeight) /
              10
          )),
          (f.scrollManipulatorH =
            15 > f.scrollManipulatorH ? 15 : f.scrollManipulatorH),
          (f.scrollManipulatorLimInf = g - f.downH - f.scrollManipulatorH),
          (f.scrollManipulatorLimSup = e + f.downH);
      else {
        c = a.getTextWidth(e, f.fieldFontSize + "px Arial") + 10;
        f.labelWidth = c;
        f.fieldWidth = g;
        "" == e && (f.labelWidth = 0);
        f.visible || (f.fieldWidth = 0);
        for (
          g = f.w - f.fieldWidth - f.labelWidth;
          58 > g && 0 < f.labelWidth;

        )
          f.labelWidth--, g++;
        for (; 58 > g && 0 < f.fieldWidth; ) f.fieldWidth--, g++;
        e = f.labelWidth;
        c = e + g;
        f.fieldWidth = f.w - c;
        f.canvasWidth = g;
        f.canvasHeight = f.h;
        f.canvasX = f.labelWidth;
        f.canvasY = 0;
        f.fieldX = f.canvasWidth + f.labelWidth;
        f.labelHeight = f.h;
        f.labelY = 0;
        f.upWidth = f.downW = 15;
        f.upHeight = f.downH = f.h;
        f.upX = c - f.downW;
        f.upY = 0;
        f.downX = f.labelWidth;
        f.downY = 0;
        f.scrollManipulatorW = parseInt(
          (f.canvasWidth - f.upWidth - f.downW) / 10
        );
        f.scrollManipulatorW =
          15 > f.scrollManipulatorW ? 15 : f.scrollManipulatorW;
        f.scrollManipulatorH = f.h;
        f.scrollManipulatorLimInf = e + f.downW;
        f.scrollManipulatorLimSup =
          e + f.canvasWidth - f.downW - f.scrollManipulatorW;
      }
      f.containerControl.setAttribute("class", "DescartesScrollbarContainer");
      f.containerControl.setAttribute("id", f.id);
      f.containerControl.setAttribute(
        "style",
        "width: " +
          f.w +
          "px; height: " +
          f.h +
          "px; left: " +
          f.x +
          "px; top: " +
          f.y +
          "px; z-index: " +
          f.zIndex +
          ";"
      );
      f.canvas.setAttribute("width", f.w + "px");
      f.canvas.setAttribute("height", f.h + "px");
      f.canvas.setAttribute(
        "style",
        "position: absolute; left: 0px; top: 0px;"
      );
      f.ctx = f.canvas.getContext("2d");
      f.ctx.imageSmoothingEnabled = !1;
      f.divUp.setAttribute("class", "DescartesCatcher up");
      f.divUp.setAttribute(
        "style",
        "width : " +
          f.upWidth +
          "px; height : " +
          f.upHeight +
          "px; left: " +
          f.upX +
          "px; top: " +
          f.upY +
          "px;"
      );
      f.divDown.setAttribute("class", "DescartesCatcher down");
      f.divDown.setAttribute(
        "style",
        "width : " +
          f.downW +
          "px; height : " +
          f.downH +
          "px; left: " +
          f.downX +
          "px; top: " +
          f.downY +
          "px;"
      );
      f.scrollManipulator.setAttribute("class", "DescartesCatcher manipulator");
      f.scrollManipulator.setAttribute(
        "style",
        "width : " +
          f.scrollManipulatorW +
          "px; height : " +
          f.scrollManipulatorH +
          "px;"
      );
      f.scrollManipulator.style.top =
        ("v" === f.orientation ? f.scrollManipulatorLimInf : 0) + "px";
      f.scrollManipulator.style.left =
        ("v" === f.orientation ? 0 : f.scrollManipulatorLimInf) + "px";
      f.field.setAttribute("type", "text");
      f.field.setAttribute("id", f.id + "scrollbar");
      f.field.setAttribute("class", "DescartesScrollbarField");
      f.field.setAttribute(
        "style",
        "font-size: " +
          f.fieldFontSize +
          "px; width : " +
          f.fieldWidth +
          "px; height : " +
          f.fieldHeight +
          "px; left: " +
          f.fieldX +
          "px; top: 0px;"
      );
      f.field.value = b;
      0 === f.fieldHeight && (f.field.style.display = "none");
      f.label.setAttribute("class", "DescartesScrollbarLabel");
      f.label.setAttribute(
        "style",
        "font-size:" +
          f.fieldFontSize +
          "px; width: " +
          f.labelWidth +
          "px; height: " +
          f.labelHeight +
          "px; line-height: " +
          f.labelHeight +
          "px; left: 0px; top:" +
          f.labelY +
          "px;"
      );
    };
    a.Scrollbar.prototype.update = function () {
      d = this.evaluator;
      this.label.innerHTML = d.eval(this.name).toString();
      0 == d.eval(this.decimals)
        ? (this.incr = 1)
        : (this.incr = (d.eval(this.max) - d.eval(this.min)) / 100);
      this.activeIfValue = 0 < d.eval(this.activeif);
      this.drawIfValue = 0 < d.eval(this.drawif);
      this.field.disabled = !this.activeIfValue;
      this.drawIfValue
        ? ((this.containerControl.style.display = "block"), this.draw())
        : (this.containerControl.style.display = "none");
      this.updatePositionAndSize();
      var a = this.validateValue(d.getVariable(this.id));
      a == this.value ||
        (0 < Math.abs(a - this.value) && 1e-9 > Math.abs(a - this.value)) ||
        ((this.value = a),
        this.changeScrollPositionFromValue(),
        (this.prePos = this.pos));
      this.value = a;
      this.field.value = this.formatOutputValue(this.value);
      d.setVariable(this.id, this.value);
    };
    a.Scrollbar.prototype.draw = function () {
      f = this;
      h = f.ctx;
      b = k(this.w);
      g = k(this.h);
      h.fillStyle = "#e0e4e8";
      h.fillRect(0, 0, b, g);
      h.strokeStyle = "#7a8a99";
      f.down &&
        ((h.fillStyle = "#ccdcec"),
        h.fillRect(f.downX + 0.5, f.downY + 0.5, f.downW, f.downH - 1));
      h.strokeRect(f.downX + 0.5, f.downY + 0.5, f.downW, f.downH - 1);
      f.up &&
        ((h.fillStyle = "#ccdcec"),
        h.fillRect(f.upX + 0.5, f.upY - 0.5, f.upWidth, f.upHeight + 1));
      h.strokeRect(f.upX + 0.5, f.upY - 0.5, f.upWidth, f.upHeight + 1);
      u = 4;
      h.fillStyle = "black";
      h.beginPath();
      "h" === f.orientation
        ? (h.moveTo(f.downX + u, f.downH / 2),
          h.lineTo(f.downX + f.downW - u, u),
          h.lineTo(f.downX + f.downW - u, f.downH - u),
          h.moveTo(f.upX + f.upWidth - u, f.downH / 2),
          h.lineTo(f.upX + u, u),
          h.lineTo(f.upX + u, f.downH - u),
          h.fill(),
          f.activeIfValue &&
            ((m = k(f.pos)),
            (h.fillStyle = "#ccdcec"),
            h.fillRect(m + 0.5, 0, k(f.scrollManipulatorW), g),
            (h.strokeStyle = "#6382bf"),
            h.strokeRect(m + 0.5, 0, k(f.scrollManipulatorW), g),
            (r = k(f.scrollManipulatorW / 2)),
            h.beginPath(),
            h.moveTo(m + r + 0.5 - 2, 3),
            h.lineTo(m + r + 0.5 - 2, g - 3),
            h.moveTo(m + r + 0.5, 3),
            h.lineTo(m + r + 0.5, g - 3),
            h.moveTo(m + r + 0.5 + 2, 3),
            h.lineTo(m + r + 0.5 + 2, g - 3),
            h.stroke()))
        : (h.moveTo(f.downX + f.downW / 2, f.downY + f.downH - u),
          h.lineTo(f.downX + u, f.downY + u),
          h.lineTo(f.downX + f.downW - u, f.downY + u),
          h.moveTo(f.upX + f.upWidth / 2, f.upY + u),
          h.lineTo(f.upX + u, f.upY + f.upHeight - u),
          h.lineTo(f.upX + f.upWidth - u, f.upY + f.upHeight - u),
          h.fill(),
          f.activeIfValue &&
            ((m = k(f.pos)),
            (h.fillStyle = "#ccdcec"),
            h.fillRect(0, m + 0.5, b, k(f.scrollManipulatorH)),
            (h.strokeStyle = "#6382bf"),
            h.strokeRect(0, m + 0.5, b, k(f.scrollManipulatorH)),
            (r = k(f.scrollManipulatorH / 2)),
            h.beginPath(),
            h.moveTo(3, m + r + 0.5 - 2),
            h.lineTo(b - 3, m + r + 0.5 - 2),
            h.moveTo(3, m + r + 0.5),
            h.lineTo(b - 3, m + r + 0.5),
            h.moveTo(3, m + r + 0.5 + 2),
            h.lineTo(b - 3, m + r + 0.5 + 2),
            h.stroke()));
      h.strokeRect(0.5, 0.5, b - 1, g - 1);
      f.activeIfValue ||
        ((h.fillStyle = "rgba(240,240,240," + 160 / 255 + ")"),
        h.fillRect(0, 0, b, g.h));
    };
    a.Scrollbar.prototype.validateValue = function (a) {
      d = this.evaluator;
      n = a.toString();
      n = parseFloat(n.replace(this.parent.decimal_symbol, "."));
      isNaN(n) && (n = 0);
      this.minimo = d.eval(this.min);
      n < this.minimo && ((this.value = null), (n = this.minimo));
      this.maximo = d.eval(this.max);
      n > this.maximo && ((this.value = null), (n = this.maximo));
      v = this.incr;
      n = 0 != v ? (n * v) / v : 0;
      this.fixed &&
        (n = parseFloat(parseFloat(n).toFixed(d.eval(this.decimals))));
      return n;
    };
    a.Scrollbar.prototype.increase = function () {
      this.changeValue(parseFloat(this.value) + this.incr);
    };
    a.Scrollbar.prototype.decrease = function () {
      this.changeValue(parseFloat(this.value) - this.incr);
    };
    a.Scrollbar.prototype.increase10 = function () {
      u = (this.evaluator.eval(this.max) - this.evaluator.eval(this.min)) / 10;
      "h" == this.orientation
        ? this.clickPos.x > this.prePos &&
          this.changeValue(parseFloat(this.value) + u)
        : this.clickPos.y < this.prePos &&
          this.changeValue(parseFloat(this.value) + u);
    };
    a.Scrollbar.prototype.decrease10 = function () {
      u = (this.evaluator.eval(this.max) - this.evaluator.eval(this.min)) / 10;
      "h" == this.orientation
        ? this.clickPos.x < this.prePos &&
          this.changeValue(parseFloat(this.value) - u)
        : this.clickPos.y > this.prePos &&
          this.changeValue(parseFloat(this.value) - u);
    };
    a.Scrollbar.prototype.changeValue = function (a) {
      this.activeIfValue &&
        ((x = this.validateValue(a)),
        x != this.value &&
          ((this.value = x),
          (this.field.value = this.formatOutputValue(x)),
          this.changeScrollPositionFromValue(),
          (this.prePos = this.pos),
          this.evaluator.setVariable(this.id, this.value),
          this.updateAndExecAction()));
    };
    a.Scrollbar.prototype.changeValueForScrollMovement = function () {
      d = this.evaluator;
      e = this.scrollManipulatorLimInf;
      p = this.scrollManipulatorLimSup;
      l = d.eval(this.min);
      w = d.eval(this.max);
      v = this.incr;
      x = k(((this.pos - e) * (w - l)) / (p - e) / v) * v + l;
      x != this.value &&
        ((this.value = x),
        (this.field.value = this.formatOutputValue(x)),
        d.setVariable(this.id, this.value),
        this.parent.updateControls(),
        this.actionExec.execute(),
        this.parent.update());
    };
    a.Scrollbar.prototype.changeScrollPositionFromValue = function () {
      d = this.evaluator;
      e = this.scrollManipulatorLimInf;
      p = this.scrollManipulatorLimSup;
      l = d.eval(this.min);
      w = d.eval(this.max);
      v = this.incr;
      this.pos = ((this.value - l) * (p - e)) / (w - l) + e;
      "h" == this.orientation
        ? (this.scrollManipulator.style.left = this.pos + "px")
        : (this.scrollManipulator.style.top = this.pos + "px");
    };
    a.Scrollbar.prototype.addEvents = function () {
      function b(e, c, d, g) {
        a.clearTimeout(u);
        (p.up || p.down || p.canvasClick) &&
          1e-7 < Math.abs(p.value - g) &&
          (c.call(p),
          (e = d ? e : 30),
          (u = a.setTimeout(function () {
            b(e, c, !1, g);
          }, e)));
      }
      function e(c) {
        c.preventDefault();
        p.whichBtn = a.whichBtn(c);
        "L" == p.whichBtn &&
          p.activeIfValue &&
          ((p.clickPos = a.getCursorPosition(c, p.containerControl)),
          (p.canvasClick = !0),
          "h" == p.orientation
            ? p.clickPos.x < p.prePos
              ? b(v, p.decrease10, !0, p.minimo)
              : b(v, p.increase10, !0, p.maximo)
            : p.clickPos.y < p.prePos
            ? b(v, p.increase10, !0, p.maximo)
            : b(v, p.decrease10, !0, p.minimo));
      }
      function c(b) {
        p.canvasClick = !1;
        a.clearTimeout(u);
      }
      function d(b) {
        1 == p.canvasClick &&
          ((p.clickPos = a.getCursorPosition(b, p.containerControl)),
          b.preventDefault());
      }
      function g(a) {
        p.scrollClick = !1;
        p.prePos = p.pos;
        window.removeEventListener("mouseup", g, !1);
        window.removeEventListener("mousemove", f, !1);
        a.preventDefault();
      }
      function m(a) {
        p.scrollClick = !1;
        p.prePos = p.pos;
        window.removeEventListener("touchend", m, !1);
        window.removeEventListener("touchmove", f, !1);
        a.preventDefault();
      }
      function f(b) {
        var e = a.getCursorPosition(b, p.containerControl);
        "h" == p.orientation
          ? ((p.pos = p.prePos - (p.initPos.x - e.x)),
            p.pos < p.scrollManipulatorLimInf &&
              (p.pos = p.scrollManipulatorLimInf),
            p.pos > p.scrollManipulatorLimSup &&
              (p.pos = p.scrollManipulatorLimSup),
            p.scrollManipulator.setAttribute(
              "style",
              "background-color: rgba(255, 255, 255, 0); cursor: pointer; position: absolute; width : " +
                p.scrollManipulatorW +
                "px; height : " +
                p.h +
                "px; left: " +
                p.pos +
                "px; top: 0px;"
            ))
          : ((p.pos = p.prePos - (p.initPos.y - e.y)),
            p.pos > p.scrollManipulatorLimInf &&
              (p.pos = p.scrollManipulatorLimInf),
            p.pos < p.scrollManipulatorLimSup &&
              (p.pos = p.scrollManipulatorLimSup),
            p.scrollManipulator.setAttribute(
              "style",
              "background-color: rgba(255, 255, 255, 0); cursor: pointer; position: absolute; width : " +
                p.w +
                "px; height : " +
                p.scrollManipulatorH +
                "px; left: 0px; top: " +
                p.pos +
                "px;"
            ));
        p.changeValueForScrollMovement();
        b.preventDefault();
      }
      function n(e) {
        e.preventDefault();
        p.whichBtn = a.whichBtn(e);
        "L" == p.whichBtn &&
          p.activeIfValue &&
          ((p.up = !0), b(v, p.increase, !0, p.maximo));
      }
      function h(e) {
        e.preventDefault();
        p.whichBtn = a.whichBtn(e);
        "L" == p.whichBtn &&
          p.activeIfValue &&
          ((p.down = !0), b(v, p.decrease, !0, p.minimo));
      }
      function k(b) {
        p.down = !1;
        a.clearTimeout(u);
        b.preventDefault();
      }
      function r(b) {
        p.up = !1;
        a.clearTimeout(u);
        p.draw();
      }
      function l(b) {
        p.down = !1;
        a.clearTimeout(u);
        p.draw();
      }
      y = a.hasTouchSupport;
      var p = this,
        v = y ? 500 : 200,
        u;
      p.canvas.oncontextmenu =
        p.divUp.oncontextmenu =
        p.divDown.oncontextmenu =
        p.label.oncontextmenu =
        p.field.oncontextmenu =
        p.scrollManipulator.oncontextmenu =
          function () {
            return !1;
          };
      this.field.addEventListener("keydown", function (a) {
        13 == a.keyCode && p.changeValue(p.field.value);
      });
      this.canvas.addEventListener("touchstart", e);
      this.canvas.addEventListener("mousedown", e);
      this.divDown.addEventListener("mouseout", k);
      window.addEventListener("touchend", c);
      window.addEventListener("mouseup", c);
      this.canvas.addEventListener("touchmove", d);
      this.canvas.addEventListener("mousemove", d);
      this.scrollManipulator.addEventListener("touchstart", function (b) {
        p.activeIfValue &&
          ((p.scrollClick = !0),
          (p.initPos = a.getCursorPosition(b, p.containerControl)),
          window.addEventListener("touchend", m),
          window.addEventListener("touchmove", f),
          b.preventDefault());
      });
      this.scrollManipulator.addEventListener("mousedown", function (b) {
        p.activeIfValue &&
          ((p.scrollClick = !0),
          (p.initPos = a.getCursorPosition(b, p.containerControl)),
          window.addEventListener("mouseup", g),
          window.addEventListener("mousemove", f),
          b.preventDefault());
      });
      this.divUp.addEventListener("touchstart", n);
      this.divUp.addEventListener("mousedown", n);
      this.divDown.addEventListener("touchstart", h);
      this.divDown.addEventListener("mousedown", h);
      this.divUp.addEventListener("mouseout", function (b) {
        p.up = !1;
        a.clearTimeout(u);
        b.preventDefault();
      });
      this.divDown.addEventListener("mouseout", k);
      window.addEventListener("touchend", r);
      window.addEventListener("mouseup", r);
      window.addEventListener("touchend", l);
      window.addEventListener("mouseup", l);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k;
    a.Audio = function (d, k) {
      this.controls = !0;
      this.file = "";
      this.oldDrawIf = 0;
      a.Control.call(this, d, k);
      var c = this,
        h = c.evaluator.eval(c.expresion);
      4 == h[0].length
        ? ((c.w = h[0][2]), (c.h = h[0][3]))
        : ((c.w = 200), (c.h = 28));
      c.audio = c.parent.getAudio(c.file);
      c.autoplay &&
        (c.audio.setAttribute("autoplay", "autoplay"), c.audio.play());
      c.loop && c.audio.setAttribute("loop", "loop");
      c.controls && c.audio.setAttribute("controls", "controls");
      c.audio.setAttribute(
        "style",
        "position: absolute; width: " +
          c.w +
          "px; left: " +
          c.x +
          "px; top: " +
          c.y +
          "px; z-index: " +
          c.zIndex +
          ";"
      );
      c.addControlContainer(c.audio);
      c.evaluator.setFunction(c.id + ".play", function () {
        try {
          c.audio.play();
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".pause", function () {
        try {
          c.audio.pause();
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".stop", function () {
        try {
          c.audio.pause(), (c.audio.currentTime = 0);
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".currentTime", function (a) {
        try {
          c.audio.currentTime = parseFloat(a);
        } catch (b) {}
        return 0;
      });
      c.audio.addEventListener("timeupdate", function (a) {
        c.evaluator.setVariable(c.id + ".currentTime", c.audio.currentTime);
      });
    };
    a.extend(a.Audio, a.Control);
    a.Audio.prototype.init = function () {
      this.audio.style.left = this.x + "px";
      this.audio.style.top = this.y + "px";
      this.update();
    };
    var d;
    a.Audio.prototype.update = function () {
      k = this.evaluator;
      (d = 0 < k.eval(this.drawif))
        ? (this.audio.style.display = "block")
        : ((this.audio.style.display = "none"),
          d !== this.oldDrawIf && this.audio.pause());
      this.oldDrawIf = d;
      this.updatePositionAndSize();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k;
    a.Video = function (d, q) {
      this.controls = !0;
      this.file = "";
      this.oldDrawIf = 0;
      a.Control.call(this, d, q);
      var c = this;
      k = c.evaluator;
      var h = c.evaluator.eval(c.expresion);
      4 == h[0].length
        ? ((c.w = h[0][2]), (c.h = h[0][3]))
        : ((c.w = null), (c.h = null));
      var h = c.file,
        g = h.lastIndexOf(".");
      -1 != g && (h = c.file.substring(0, g));
      c.video = document.createElement("video");
      c.autoplay && c.video.setAttribute("autoplay", "autoplay");
      c.loop && c.video.setAttribute("loop", "loop");
      c.controls && c.video.setAttribute("controls", "controls");
      c.video.setAttribute("poster", h + ".png");
      c.w &&
        (c.video.setAttribute("width", c.w),
        c.video.setAttribute("height", c.h));
      c.video.setAttribute(
        "style",
        "position:absolute; overflow:hidden; left:" +
          c.x +
          "px; top:" +
          c.y +
          "px; outline:none; background:rgba(0,0,0,0);"
      );
      c.video.canPlayType("video/mp4") &&
        ((g = document.createElement("source")),
        g.setAttribute("src", h + ".mp4"),
        c.video.appendChild(g));
      c.video.canPlayType("video/ogg") &&
        ((g = document.createElement("source")),
        g.setAttribute("src", h + ".ogg"),
        g.setAttribute("type", "video/ogg"),
        c.video.appendChild(g),
        (g = document.createElement("source")),
        g.setAttribute("src", h + ".ogv"),
        g.setAttribute("type", "video/ogg"),
        c.video.appendChild(g));
      c.video.canPlayType("video/webm") &&
        ((g = document.createElement("source")),
        g.setAttribute("src", h + ".webm"),
        g.setAttribute("type", "video/webm"),
        c.video.appendChild(g));
      c.addControlContainer(c.video);
      c.evaluator.setFunction(c.id + ".play", function () {
        try {
          c.video.play();
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".pause", function () {
        try {
          c.video.pause();
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".stop", function () {
        try {
          c.video.pause(), (c.video.currentTime = 0);
        } catch (a) {}
        return 0;
      });
      c.evaluator.setFunction(c.id + ".currentTime", function (a) {
        try {
          c.video.currentTime = parseFloat(a);
        } catch (d) {}
        return 0;
      });
      c.video.addEventListener("timeupdate", function (a) {
        c.evaluator.setVariable(c.id + ".currentTime", c.video.currentTime);
      });
    };
    a.extend(a.Video, a.Control);
    a.Video.prototype.init = function () {
      this.video.style.left = this.x + "px";
      this.video.style.top = this.y + "px";
      this.update();
    };
    var d;
    a.Video.prototype.update = function () {
      k = this.evaluator;
      (d = 0 < k.eval(this.drawif))
        ? (this.video.style.display = "block")
        : ((this.video.style.display = "none"),
          d !== this.oldDrawIf && this.video.pause());
      this.oldDrawIf = d;
      this.updatePositionAndSize();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d;
    a.TextArea = function (d, k) {
      this.font = "Monospaced,PLAIN,12";
      a.Control.call(this, d, k);
      this.region = "interior";
      this.tabindex = ++this.parent.tabindex;
      if (this.answer) {
        this.answer.match("krypto_") &&
          (this.answer = new a.Krypto().decode(this.answer.substring(7)));
        var c = this.parent.lessonParser.parseText(this.answer);
      }
      this.containerControl = document.createElement("div");
      this.textArea = document.createElement("div");
      this.textAreaAnswer = document.createElement("div");
      this.showButton = document.createElement("div");
      this.activeCover = document.createElement("div");
      this.containerControl.appendChild(this.textArea);
      this.containerControl.appendChild(this.textAreaAnswer);
      this.containerControl.appendChild(this.showButton);
      this.containerControl.appendChild(this.activeCover);
      this.addControlContainer(this.containerControl);
      this.showAnswer = !1;
      this.text =
        void 0 == this.text || "simpleText" == this.text.type
          ? this.rawText || ""
          : this.text.hasFormula
          ? this.rawText
          : this.text.toHTML();
      c &&
        "simpleText" != c.type &&
        (this.answer = this.text.hasFormula ? "" : c.toHTML());
      this.evaluator.setVariable(this.id, this.text);
      this.drawButton();
      this.addEvents();
      this.init();
    };
    a.extend(a.TextArea, a.Control);
    a.TextArea.prototype.init = function () {
      d = this.answer ? 28 : 8;
      k = this.evaluator;
      var f;
      f = this.text.match(/<span/)
        ? this.text
        : this.text.replace(/\\n/g, "<br/>");
      this.containerControl.setAttribute("class", "DescartesTextAreaContainer");
      this.containerControl.setAttribute(
        "style",
        "width: " +
          this.w +
          "px; height: " +
          this.h +
          "px; left: " +
          this.x +
          "px; top: " +
          this.y +
          "px; z-index: " +
          this.zIndex +
          ";"
      );
      this.containerControl.style.display =
        0 < k.eval(this.drawif) ? "block" : "none";
      this.containerControl.setAttribute("spellcheck", "false");
      this.textArea.setAttribute("class", "DescartesTextAreaContainer");
      this.textArea.setAttribute(
        "style",
        "width: " +
          (this.w - 8) +
          "px; height: " +
          (this.h - d) +
          "px; left: 4px; top: 4px; background-color: white; text-align: left; font: " +
          a.convertFont(this.font) +
          ";"
      );
      this.textArea.setAttribute("contenteditable", "true");
      this.textArea.innerHTML =
        "<span style='position: relative; top: 10px; left: 10px; white-space: nowrap;' >" +
        f +
        "</span>";
      this.textAreaAnswer.setAttribute("class", "DescartesTextAreaContainer");
      this.textAreaAnswer.setAttribute(
        "style",
        "width: " +
          (this.w - 8) +
          "px; height: " +
          (this.h - d) +
          "px; left: 4px; top: 4px; background-color: white; text-align: left; font: " +
          a.convertFont(this.font) +
          ";"
      );
      this.textAreaAnswer.style.display = this.showAnswer ? "block" : "none";
      this.textAreaAnswer.innerHTML =
        "<span style='position: relative; top: 10px; left: 10px; white-space: nowrap;'>" +
        this.answer +
        "</span>";
      this.showButton.setAttribute(
        "style",
        "width: 20px; height: 16px; position: absolute; bottom: 4px; right: 4px; cursor: pointer;"
      );
      this.showButton.style.backgroundImage = "url(" + this.imageUnPush + ")";
      this.showButton.style.display = this.answer ? "block" : "none";
      this.showButton.innerHTML =
        "<span style='position: relative; top: 2px; text-align: center; font: 9px Arial'> S </span>";
      this.activeCover.setAttribute(
        "style",
        "position: absolute; width: " +
          this.w +
          "px; height: " +
          this.h +
          "px; left: " +
          this.x +
          "px; top: " +
          this.y +
          "px;"
      );
      this.update();
    };
    a.TextArea.prototype.drawButton = function () {
      var d = document.createElement("canvas");
      d.setAttribute("width", 20);
      d.setAttribute("height", 16);
      var k = d.getContext("2d");
      k.imageSmoothingEnabled = !1;
      this.canvas = d;
      this.ctx = k;
      this.createGradient(20, 16);
      k.lineWidth = 1;
      k.fillStyle = "white";
      k.fillRect(0, 0, 20, 16);
      k.fillStyle = this.linearGradient;
      k.fillRect(0, 0, 20, 16);
      a.drawLine(k, 19, 0, 19, 16, "rgba(0,0,0," + 128 / 255 + ")");
      a.drawLine(k, 0, 0, 0, 16, "rgba(0,0,0," + 24 / 255 + ")");
      a.drawLine(k, 1, 0, 1, 16, "rgba(0,0,0," + 8 / 255 + ")");
      this.imageUnPush = d.toDataURL();
      k.fillStyle = "white";
      k.fillRect(0, 0, 20, 16);
      k.fillStyle = this.linearGradient;
      k.fillRect(0, 0, 20, 16);
      a.drawLine(k, 0, 0, 0, 14, "gray");
      a.drawLine(k, 0, 0, 19, 0, "gray");
      k.fillStyle = "rgba(0, 0, 0," + 24 / 255 + ")";
      k.fillRect(0, 0, this.w, this.h);
      this.imagePush = d.toDataURL();
    };
    a.TextArea.prototype.update = function () {
      k = this.evaluator;
      this.activeIfValue = 0 < k.eval(this.activeif);
      this.drawIfValue = 0 < k.eval(this.drawif);
      var a;
      a = this.text.match(/<span/) ? this.rawText : this.text;
      k.setVariable(this.id, a);
      this.activeCover.style.display = this.activeIfValue ? "none" : "block";
      this.containerControl.style.display = this.drawIfValue ? "block" : "none";
      this.updatePositionAndSize();
    };
    a.TextArea.prototype.addEvents = function () {
      function a(c) {
        c.preventDefault();
        d.showButton.style.backgroundImage = "url(" + d.imageUnPush + ")";
      }
      var d = this;
      this.showButton.addEventListener("mousedown", function (a) {
        a.preventDefault();
        d.showAnswer = !d.showAnswer;
        d.textAreaAnswer.style.display = d.showAnswer ? "block" : "none";
        d.showButton.childNodes[0].childNodes[0].textContent = d.showAnswer
          ? "T"
          : "S";
        d.showButton.style.backgroundImage = "url(" + d.imagePush + ")";
      });
      this.showButton.addEventListener("mouseup", a);
      this.showButton.addEventListener("mouseout", a);
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = 2 * Math.PI,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r;
    a.GraphicControl = function (b, c) {
      f = b.evaluator.parser;
      this.text = this.spaceID = "";
      this.size = f.parse("4");
      this.font = "Monospaced,PLAIN,12";
      this.image = new Image();
      this.image.onload = function () {
        this.ready = 1;
      };
      this.imageSrc = "";
      a.Control.call(this, b, c);
      this.touchId = null;
      this.font = a.convertFont(this.font);
      if (this.constraintExpr) {
        this.constraint = f.parse(this.constraintExpr);
        "(expr)" == this.constraint.type &&
          (this.constraint = f.parse(
            this.constraintExpr.substring(1, this.constraintExpr.length - 1)
          ));
        if ("compOperator" == this.constraint.type) {
          var d = this.constraint.childs[0],
            e = this.constraint.childs[1];
          "identifier" != d.type || "y" != d.value || e.contains("y")
            ? "identifier" != d.type || "x" != d.value || e.contains("x")
              ? (this.newt = new a.R2Newton(this.evaluator, this.constraint))
              : ((this.constVar = "y"),
                (this.noConstVar = "x"),
                (this.evalConst = this.evalConstXoY),
                (this.constraint = e))
            : ((this.constVar = "x"),
              (this.noConstVar = "y"),
              (this.evalConst = this.evalConstXoY),
              (this.constraint = e));
        } else this.constraint = null;
        u = new a.R2(0, 0);
      }
      this.container = this.getContainer();
      this.mouseCacher = document.createElement("div");
      this.mouseCacher.setAttribute("class", "DescartesGraphicControl");
      this.mouseCacher.setAttribute("id", this.id);
      this.mouseCacher.setAttribute("dragged", !0);
      this.mouseCacher.setAttribute("tabindex", "-1");
      this.ctx = this.space.ctx;
      this.container.appendChild(this.mouseCacher);
      this.addEvents();
      this.xString = this.id + ".x";
      this.yString = this.id + ".y";
      this.activoString = this.id + ".activo";
      this.activeString = this.id + ".active";
      "" !== this.space.id && 2 !== b.version
        ? ((this.mxString = this.space.id + ".mouse_x"),
          (this.myString = this.space.id + ".mouse_y"),
          (this.mclickedString = this.space.id + ".mouse_clicked"),
          (this.mclicizquierdoString = this.space.id + ".clic_izquierdo"))
        : ((this.mxString = "mouse_x"),
          (this.myString = "mouse_y"),
          (this.mclickedString = "mouse_clicked"),
          (this.mclicizquierdoString = "clic_izquierdo"));
      this.init();
    };
    a.GraphicControl.prototype.init = function () {
      d = this.evaluator;
      m = a.hasTouchSupport;
      var b = d.eval(this.expresion);
      this.x = b[0][0];
      this.y = b[0][1];
      d.setVariable(this.xString, this.x);
      d.setVariable(this.yString, this.y);
      this.mouseCacher.setAttribute(
        "style",
        "cursor:pointer;background-color:rgba(255, 255, 255, 0);z-index:" +
          this.zIndex +
          ";"
      );
      "" == this.imageSrc || this.imageSrc.toLowerCase().match(/vacio.gif$/)
        ? ((this.width = 2 * d.eval(this.size)),
          (this.height = 2 * d.eval(this.size)),
          (this._w = m && 48 > this.width ? 48 : this.width),
          (this._h = m && 48 > this.height ? 48 : this.height),
          (this.mouseCacher.style.borderRadius =
            parseInt(Math.min(this._w, this._h) / 2) + "px"))
        : ((this.image = this.parent.getImage(this.imageSrc)),
          (this.width = this.image.width),
          (this.height = this.image.height),
          (this._w = Math.max(this.width, 32)),
          (this._h = Math.max(this.height, 32)));
      this.mouseCacher.style.width = this._w + "px";
      this.mouseCacher.style.height = this._h + "px";
      this.mouseCacher.style.left =
        parseInt(this.space.getAbsoluteX(this.x) - this._w / 2) + "px";
      this.mouseCacher.style.top =
        parseInt(this.space.getAbsoluteY(this.y) - this._h / 2) + "px";
      d.setVariable(this.activoString, 0);
      d.setVariable(this.activeString, 0);
      this.setImage = !1;
      this.update();
    };
    a.GraphicControl.prototype.update = function () {
      d = this.evaluator;
      this.activeIfValue = 0 < d.eval(this.activeif);
      this.drawIfValue = 0 < d.eval(this.drawif);
      this.x = d.getVariable(this.xString);
      this.y = d.getVariable(this.yString);
      q = this.space.getAbsoluteX(this.x);
      c = this.space.getAbsoluteY(this.y);
      this.mouseCacher.style.display = this.activeIfValue ? "block" : "none";
      this.mouseCacher.style.left = parseInt(q - this._w / 2) + "px";
      this.mouseCacher.style.top = parseInt(c - this._h / 2) + "px";
      this.constraint && this.evalConst();
      this.draw();
    };
    a.GraphicControl.prototype.draw = function () {
      d = this.evaluator;
      this.drawIfValue &&
        ((g = this.ctx),
        (b = this.space.backgroundCtx),
        (q = parseInt(this.space.getAbsoluteX(this.x)) + 0.5),
        (c = parseInt(this.space.getAbsoluteY(this.y)) + 0.5),
        "" != this.text && this.drawText(q, c),
        this.image.ready
          ? (this.image.complete &&
              !this.setImage &&
              g.drawImage(
                this.image,
                parseInt(q - this.image.width / 2),
                parseInt(c - this.image.height / 2)
              ),
            this.trace &&
              (b.save(),
              b.translate(q, c),
              b.scale(
                parseInt(this.image.width / 2),
                parseInt(this.image.height / 2)
              ),
              b.beginPath(),
              b.arc(0, 0, 1, 0, k, !1),
              b.restore(),
              (b.lineWidth = 1),
              (b.strokeStyle = this.trace.getColor()),
              b.stroke()))
          : (g.beginPath(),
            g.arc(q, c, parseInt(this.width / 2), 0, k, !1),
            (g.fillStyle = this.colorInt.getColor()),
            g.fill(),
            (g.lineWidth = 1),
            (g.strokeStyle = this.color.getColor()),
            g.stroke(),
            this.active &&
              (g.beginPath(),
              g.arc(q, c, parseInt(this.width / 2) - 2, 0, k, !1),
              (g.strokeStyle = this.colorInt.borderColor()),
              g.stroke()),
            this.trace &&
              ((b.lineWidth = 1),
              (b.strokeStyle = this.trace.getColor()),
              b.beginPath(),
              b.arc(q, c, parseInt(this.width / 2), 0, k, !1),
              b.stroke())));
    };
    a.GraphicControl.prototype.evalConst = function () {
      u.set(this.x, this.y);
      h = this.newt.findZero(u, 1 / this.space.scale, !0);
      this.x = h.x;
      this.y = h.y;
      this.evaluator.setVariable(this.xString, this.x);
      this.evaluator.setVariable(this.yString, this.y);
    };
    a.GraphicControl.prototype.evalConstXoY = function () {
      d = this.evaluator;
      r = d.getVariable(this.constVar);
      d.setVariable(this.constVar, this[this.constVar]);
      this[this.noConstVar] = d.eval(this.constraint);
      d.setVariable(this.xString, this.x);
      d.setVariable(this.yString, this.y);
      d.setVariable(this.constVar, r);
    };
    a.GraphicControl.prototype.drawText = function (a, b) {
      g = this.ctx;
      d = this.evaluator;
      "simpleText" == this.text.type
        ? ((g.fillStyle = this.color.getColor()),
          (g.font = this.font),
          (g.textBaseline = "alphabetic"),
          g.fillText(
            this.text.toString(d.eval(this.decimals), this.fixed),
            parseInt(a + 1 + this.width / 2),
            parseInt(b - 1 - this.height / 2)
          ))
        : ((g.fillStyle = this.color.getColor()),
          (g.strokeStyle = this.color.getColor()),
          (g.textBaseline = "alphabetic"),
          this.text.draw(
            g,
            parseInt(a + 1 + this.width / 2),
            parseInt(b - 1 - this.height / 2),
            this.decimals,
            this.fixed,
            "start",
            !0,
            this.color.getColor()
          ));
    };
    a.GraphicControl.prototype.getContainer = function () {
      for (var a = this.parent.spaces, b, c = 0, e = a.length; c < e; c++)
        if (((b = a[c]), b.id == this.spaceID))
          return (
            b.addCtr(this),
            (this.zIndex = b.zIndex),
            (this.space = b),
            b.graphicControlContainer
          );
      a[0].addCtr(this);
      this.zIndex = a[0].zIndex;
      this.space = a[0];
      return a[0].graphicControlContainer;
    };
    a.GraphicControl.prototype.deactivate = function () {
      this.active = !1;
      this.evaluator.setVariable(this.activoString, 0);
      this.evaluator.setVariable(this.activeString, 0);
      this.evaluator.setVariable(this.mclicizquierdoString, 0);
    };
    a.GraphicControl.prototype.addEvents = function () {
      function b(d) {
        document.body.focus();
        d.preventDefault();
        d.stopPropagation();
        e.touchId = null;
        e.evaluator.setVariable(e.mclickedString, 1);
        e.evaluator.setVariable(e.mclicizquierdoString, 1);
        if (e.activeIfValue || e.active)
          (e.click = !1),
            window.removeEventListener("touchmove", c, !1),
            window.removeEventListener("touchend", b, !1),
            window.removeEventListener("mouseup", b, !1),
            window.removeEventListener("mousemove", c, !1),
            (g = a.getCursorPosition(d, e.container)),
            (e.posX = e.prePos.x - (e.posAnte.x - g.x)),
            (e.posY = e.prePos.y - (e.posAnte.y - g.y)),
            e.evaluator.setVariable(e.xString, e.space.getRelativeX(e.posX)),
            e.evaluator.setVariable(e.yString, e.space.getRelativeY(e.posY)),
            e.evaluator.setVariable(e.mxString, e.space.getRelativeX(g.x)),
            e.evaluator.setVariable(e.myString, e.space.getRelativeY(g.y)),
            e.parent.update(),
            (e.mouseCacher.style.left =
              e.space.getAbsoluteX(e.x) - e._w / 2 + "px"),
            (e.mouseCacher.style.top =
              e.space.getAbsoluteY(e.y) - e._h / 2 + "px");
        e.parent.deactivateGraphiControls();
      }
      function c(b) {
        b.preventDefault();
        b.touchId = e.touchId;
        e.evaluator.setVariable(e.mclickedString, 0);
        e.evaluator.setVariable(e.mclicizquierdoString, 0);
        g = a.getCursorPosition(b, e.container);
        e.posX = e.prePos.x - (e.posAnte.x - g.x);
        e.posY = e.prePos.y - (e.posAnte.y - g.y);
        e.evaluator.setVariable(e.xString, e.space.getRelativeX(e.posX));
        e.evaluator.setVariable(e.yString, e.space.getRelativeY(e.posY));
        e.evaluator.setVariable(e.mxString, e.space.getRelativeX(g.x));
        e.evaluator.setVariable(e.myString, e.space.getRelativeY(g.y));
        10 < Date.now() - d &&
          (e.parent.updateControls(), e.parent.update(), (d = Date.now()));
      }
      var d = 0,
        e = this;
      this.active = this.over = this.click = !1;
      this.mouseCacher.oncontextmenu = function () {
        return !1;
      };
      this.mouseCacher.addEventListener("touchstart", function (d) {
        document.body.focus();
        d.preventDefault();
        e.activeIfValue &&
          (e.parent.deactivateGraphiControls(),
          (e.click = !0),
          (e.active = !0),
          e.evaluator.setVariable(e.activoString, 1),
          e.evaluator.setVariable(e.activeString, 1),
          e.evaluator.setVariable(e.mclickedString, 0),
          e.evaluator.setVariable(e.mclicizquierdoString, 0),
          (e.posAnte = a.getCursorPosition(d, e.container)),
          (e.prePos = {
            x: e.space.getAbsoluteX(e.x),
            y: e.space.getAbsoluteY(e.y),
          }),
          e.evaluator.setVariable(
            e.mxString,
            e.space.getRelativeX(e.posAnte.x)
          ),
          e.evaluator.setVariable(
            e.myString,
            e.space.getRelativeY(e.posAnte.y)
          ),
          e.parent.update(),
          window.addEventListener("touchmove", c),
          window.addEventListener("touchend", b));
      });
      this.mouseCacher.addEventListener("mousedown", function (d) {
        document.body.focus();
        d.preventDefault();
        e.whichBtn = a.whichBtn(d);
        "L" == e.whichBtn &&
          e.activeIfValue &&
          e.over &&
          (e.parent.deactivateGraphiControls(),
          (e.click = !0),
          (e.active = !0),
          e.evaluator.setVariable(e.activoString, 1),
          e.evaluator.setVariable(e.activeString, 1),
          e.evaluator.setVariable(e.mclickedString, 0),
          e.evaluator.setVariable(e.mclicizquierdoString, 0),
          (e.posAnte = a.getCursorPosition(d, e.container)),
          (e.prePos = {
            x: e.space.getAbsoluteX(e.x),
            y: e.space.getAbsoluteY(e.y),
          }),
          e.evaluator.setVariable(
            e.mxString,
            e.space.getRelativeX(e.posAnte.x)
          ),
          e.evaluator.setVariable(
            e.myString,
            e.space.getRelativeY(e.posAnte.y)
          ),
          e.parent.update(),
          window.addEventListener("mouseup", b),
          window.addEventListener("mousemove", c));
      });
      this.mouseCacher.addEventListener("mouseover", function (a) {
        e.over = !0;
      });
      this.mouseCacher.addEventListener("mouseout", function (a) {
        e.over = !1;
        e.click = !1;
      });
      var g;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a, k) {
    var d, f, q, c, h, g, b, u, m, r;
    if (a.loadLib) return a;
    var n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B = /[\w-//]*(\.png|\.jpg|\.gif|\.svg)/gi,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N,
      z,
      M,
      L,
      O,
      Q,
      P,
      V,
      U,
      R,
      S;
    a.LessonParser = function (b) {
      this.parent = b;
      this.parser = b.evaluator.parser;
      this.RTFparser = new a.RTFParser(b.evaluator);
    };
    a.LessonParser.prototype.parseButtonsConfig = function (a) {
      var b = {
        rowsNorth: 0,
        rowsSouth: 0,
        widthEast: 125,
        widthWest: 125,
        height: 23,
      };
      a = this.split(a);
      for (var c = 0, d = a.length; c < d; c++)
        switch (((x = a[c][0]), (e = a[c][1]), (v = k[x]), v)) {
          case "rowsNorth":
          case "rowsSouth":
          case "widthEast":
          case "widthWest":
          case "height":
            b[v] = parseInt(e);
            break;
          case "about":
          case "config":
          case "init":
          case "clear":
            b[v] = "true" === k[e];
            break;
          default:
            console.log(
              "Propiedad de botones no identificada: <" +
                x +
                "> valor: <" +
                e +
                ">"
            );
        }
      return b;
    };
    a.LessonParser.prototype.parseSpace = function (b) {
      p = {};
      b = this.split(b);
      for (var c = 0, d = b.length; c < d; c++)
        switch (((x = b[c][0]), (e = b[c][1]), (v = k[x]), v)) {
          case "type":
          case "id":
          case "cID":
          case "file":
            p[v] = e;
            break;
          case "fixed":
          case "numbers":
          case "sensitive_to_mouse_movements":
          case "R3":
          case "split":
            p[v] = "true" === k[e];
            break;
          case "bg_display":
          case "render":
            p[v] = k[e];
            break;
          case "net":
          case "net10":
          case "axes":
          case "text":
            p[v] =
              "" != e
                ? "false" === k[e]
                  ? ""
                  : new a.Color(e, this.parent.evaluator)
                : "";
            break;
          case "x_axis":
          case "y_axis":
            p[v] = "false" === k[e] ? "" : e;
            break;
          case "O.x":
            p.OxExpr = e;
            break;
          case "O.y":
            p.OyExpr = e;
            break;
          case "image":
            p.imageSrc = e;
            break;
          case "x":
            n = e;
            "%" === n[n.length - 1]
              ? ((p.xPercentExpr = n.trim()),
                (n = (
                  (this.parent.container.width * parseFloat(n)) /
                  100
                ).toString()))
              : (n = e);
            p.xExpr = this.parser.parse(n);
            break;
          case "y":
            n = e;
            "%" === n[n.length - 1]
              ? ((p.yPercentExpr = n.trim()),
                (n = (
                  (this.parent.container.height * parseFloat(n)) /
                  100
                ).toString()))
              : (n = e);
            p.yExpr = this.parser.parse(n);
            break;
          case "width":
            n = e.trim();
            "%" === n[n.length - 1]
              ? ((p.wExpr = n),
                (n = (this.parent.container.width * parseFloat(n)) / 100))
              : ((n = parseFloat(e)),
                n != e &&
                  ((n = this.parent.container.width), (p._w_ = e.trim())));
            p.w = n;
            break;
          case "height":
            n = e.trim();
            "%" === n[n.length - 1]
              ? ((p.hExpr = n),
                (n = (this.parent.container.height * parseFloat(n)) / 100))
              : ((n = parseFloat(e)),
                n != e &&
                  ((n = this.parent.container.height), (p._h_ = e.trim())));
            p.h = n;
            break;
          case "drawif":
            "" != e && (p.drawif = this.parser.parse(e));
            break;
          case "scale":
            n = parseFloat(e);
            isNaN(n) && (n = 48);
            p.scale = n;
            break;
          case "background":
            p.background = new a.Color(e, this.parent.evaluator);
            break;
          default:
            console.log(
              "Propiedad del espacio no identificada: <" +
                x +
                "> valor: <" +
                e +
                ">"
            );
        }
      switch (p.type) {
        case "R2":
          return new a.Space2D(this.parent, p);
        case "R3":
          return new a.Space3D(this.parent, p);
        case "AP":
          return new a.SpaceAP(this.parent, p);
        case "HTMLIFrame":
          return new a.SpaceHTML_IFrame(this.parent, p);
        default:
          return new a.Space2D(this.parent, p);
      }
    };
    a.LessonParser.prototype.parseControl = function (b) {
      l = { type: "numeric" };
      b = this.split(b);
      for (var c = 0, d = b.length; c < d; c++)
        switch (((x = b[c][0]), (e = b[c][1]), (v = k[x]), v)) {
          case "id":
          case "name":
          case "parameter":
          case "tooltip":
          case "tooltipFont":
          case "Explanation":
          case "ExplanationFont":
          case "cID":
          case "options":
          case "font":
          case "file":
          case "answer":
            l[v] = e;
            break;
          case "gui":
          case "region":
          case "action":
          case "msg_pos":
          case "poster":
            l[v] = k[e];
            break;
          case "fixed":
          case "visible":
          case "discrete":
          case "onlyText":
          case "evaluate":
          case "autoplay":
          case "loop":
          case "controls":
            l[v] = "true" === k[e];
            break;
          case "color":
          case "colorInt":
          case "trace":
            l[v] = new a.Color(e, this.parent.evaluator);
            break;
          case "font_size":
          case "drawif":
          case "activeif":
          case "decimals":
          case "min":
          case "max":
          case "size":
            "" != e && (l[v] = this.parser.parse(e));
            break;
          case "constraint":
            l.constraintExpr = e;
            break;
          case "image":
            l.imageSrc = e;
            break;
          case "space":
            l.spaceID = e;
            break;
          case "type":
            l.type = k[e.trim()];
            break;
          case "expresion":
            l.expresion = this.parser.parse(e.replace(")(", ","));
            break;
          case "bold":
            "false" != k[e] && (l.bold = "bold");
            break;
          case "italics":
            "false" != k[e] && (l.italics = "italic");
            break;
          case "underlined":
            "false" != k[e] && (l.underlined = !0);
            break;
          case "value":
            var g = e.replace(/&squot;/g, "'");
            g.match(/^\|/) &&
              ((g = "'" + g.substring(1)),
              g.match(/\|$/) && (g = g.substring(0, g.length - 1) + "'"));
            l.valueExpr = this.parser.parse(g);
            l.valueExprString = g;
            break;
          case "incr":
            0 != e && (l.incr = this.parser.parse(e));
            break;
          case "exponentialif":
            l.exponentialif = parseFloat(e);
            break;
          case "text":
            l.rawText = e;
            for (var g = this.parseText(e), m = 0, f = g.length; m < f; m++)
              g[m] = this.parser.parse(g[m], !1);
            l.text = g;
            break;
          default:
            m = x.indexOf(".");
            g = k[x.substring(0, m)];
            m = k[x.substring(m + 1)];
            if ("parameter" === g && "font" === m) {
              l.parameterFont = e;
              break;
            } else if ("Explanation" === g && "font" === m) {
              l.ExplanationFont = e;
              break;
            } else if ("tooltip" === g && "font" === m) {
              l.tooltipFont = e;
              break;
            }
            console.log(
              "Propiedad de control no identificada: <" +
                x +
                "> valor: <" +
                e +
                ">"
            );
        }
      if ("numeric" === l.type)
        switch (l.gui) {
          case "spinner":
            return new a.Spinner(this.parent, l);
          case "button":
            return new a.Button(this.parent, l);
          case "textfield":
            return new a.TextField(this.parent, l);
          case "menu":
            return new a.Menu(this.parent, l);
          case "scrollbar":
            return new a.Scrollbar(this.parent, l);
          default:
            return new a.Spinner(this.parent, l);
        }
      else {
        if ("video" === l.type) return new a.Video(this.parent, l);
        if ("audio" === l.type) return new a.Audio(this.parent, l);
        if ("graphic" === l.type) return new a.GraphicControl(this.parent, l);
        if ("text" === l.type) return new a.TextArea(this.parent, l);
      }
    };
    a.LessonParser.prototype.parseGraphic = function (b, c, d, g) {
      w = { rotateExp: g, parameter: "t" };
      b = this.split(b);
      g = 0;
      for (var m = b.length; g < m; g++)
        if (((x = b[g][0]), (e = b[g][1]), (v = k[x]), "" != e))
          switch (v) {
            case "type":
            case "align":
              w[v] = k[e];
              break;
            case "background":
            case "abs_coord":
            case "visible":
            case "editable":
            case "fixed":
            case "vectors":
              w[v] = "true" === k[e];
              break;
            case "color":
            case "fill":
            case "fillP":
            case "fillM":
            case "arrow":
            case "trace":
              w[v] =
                "false" === k[e] ? "" : new a.Color(e, this.parent.evaluator);
              break;
            case "family":
            case "parameter":
            case "info":
            case "font":
            case "name":
            case "init":
            case "end":
              w[v] = e;
              break;
            case "drawif":
            case "width":
            case "decimals":
            case "size":
            case "spear":
            case "center":
            case "radius":
            case "opacity":
            case "inirot":
            case "inipos":
            case "range":
              "" != e && (w[v] = this.parser.parse(e));
              break;
            case "space":
              w.spaceID = e;
              break;
            case "expresion":
              "" != e &&
                ("macro" != w.type
                  ? ((w.expresion = this.parser.parse(e)),
                    (w.expresionString = e))
                  : (w.expresion = e));
              break;
            case "text":
              w.text = this.parseText(e);
              break;
            case "file":
              var f = e.replace(/&squot;/g, "'");
              "[" === f.charAt(0) &&
                "]" === f.charAt(f.length - 1) &&
                (f = f.substring(1, f.length - 1));
              f.match(B) && (f = "'" + f + "'");
              w.file = this.parser.parse(f);
              break;
            case "border":
              "" != e &&
                "false" != k[e] &&
                (w.border = new a.Color(e, this.parent.evaluator));
              break;
            default:
              if (
                void 0 != w.family &&
                x.substring(0, w.family.length + 1) === w.family + "."
              ) {
                switch (k[x.substring(w.family.length + 1)]) {
                  case "interval":
                    "" != e && (w.family_interval = this.parser.parse(e));
                    break;
                  case "steps":
                    "" != e && (w.family_steps = this.parser.parse(e));
                }
                break;
              }
              if (void 0 != w.parameter && x.match(w.parameter + ".")) {
                w.parameter !==
                  x.substring(0, x.indexOf(w.parameter) + w.parameter.length) &&
                  (w.parameter = x.substring(
                    0,
                    x.indexOf(w.parameter) + w.parameter.length
                  ));
                switch (k[x.substring(w.parameter.length + 1)]) {
                  case "interval":
                    "" != e && (w.parameter_interval = this.parser.parse(e));
                    break;
                  case "steps":
                    "" != e && (w.parameter_steps = this.parser.parse(e));
                }
                break;
              }
              console.log(
                "Propiedad del grafico no identificada: <" +
                  x +
                  "> valor: <" +
                  e +
                  ">"
              );
          }
      c && (w.abs_coord = c);
      d && (w.background = d);
      switch (w.type) {
        case "text":
          return new a.Text(this.parent, w);
        case "image":
          return new a.Image(this.parent, w);
        case "point":
          return new a.Point(this.parent, w);
        case "polygon":
          return new a.Polygon(this.parent, w);
        case "arc":
          return new a.Arc(this.parent, w);
        case "segment":
          return new a.Segment(this.parent, w);
        case "arrow":
          return new a.Arrow(this.parent, w);
        case "macro":
          return new a.Macro(this.parent, w);
        case "curve":
          return new a.Curve(this.parent, w);
        case "equation":
          return new a.Equation(this.parent, w);
        case "sequence":
          return new a.Sequence(this.parent, w);
        case "fill":
          return new a.Fill(this.parent, w);
      }
    };
    a.LessonParser.prototype.parse3DGraphic = function (b, c, d, g) {
      w = { rotateExp: g, parameter: "t" };
      b = this.split(b);
      c = 0;
      for (d = b.length; c < d; c++)
        switch (((x = b[c][0]), (e = b[c][1]), (v = k[x]), v)) {
          case "type":
          case "model":
            w[v] = k[e];
            break;
          case "background":
          case "fixed":
          case "edges":
            w[v] = "true" === k[e];
            break;
          case "color":
          case "backcolor":
            w[v] = new a.Color(e, this.parent.evaluator);
            break;
          case "type":
          case "model":
            w[v] = k[e];
            break;
          case "background":
          case "fixed":
          case "edges":
          case "split":
            w[v] = "true" === k[e];
            break;
          case "color":
          case "backcolor":
            w[v] = new a.Color(e, this.parent.evaluator);
            break;
          case "drawif":
          case "width":
          case "length":
          case "height":
          case "decimals":
          case "Nu":
          case "Nv":
          case "inipos":
          case "endpos":
            "" != e && (w[v] = this.parser.parse(e));
            break;
          case "family":
          case "parameter":
          case "font":
          case "name":
          case "inirot":
          case "endrot":
            w[v] = e;
            break;
          case "space":
            w.spaceID = e;
            break;
          case "expresion":
            "macro" != w.type && "curve" != w.type && "surface" != w.type
              ? ((w.expresion = this.parser.parse(e)), (w.expresionString = e))
              : (w.expresion = e.replace(/\\n/g, " ").replace(/;/g, " "));
            break;
          case "text":
            g = this.parseText(e);
            for (var m = 0, f = g.length; m < f; m++)
              g[m] = this.parser.parse(g[m], !1);
            w.text = g;
            break;
          case "file":
            g = e.replace(/&squot;/g, "'");
            "[" === g.charAt(0) &&
              "]" === g.charAt(g.length - 1) &&
              (g = g.substring(1, g.length - 1));
            g.match(/./) && (g = "'" + g + "'");
            w.file = this.parser.parse(g);
            break;
          case "drawif":
          case "width":
          case "length":
          case "decimals":
          case "Nu":
          case "Nv":
          case "inirot":
          case "endrot":
          case "inipos":
          case "endpos":
            "" != e && (w[v] = this.parser.parse(e));
            break;
          case "family":
          case "parameter":
          case "font":
          case "name":
            w[v] = e;
            break;
          case "space":
            w.spaceID = e;
            break;
          case "expresion":
            "macro" != w.type && "curve" != w.type && "surface" != w.type
              ? ((w.expresion = this.parser.parse(e)), (w.expresionString = e))
              : (w.expresion = e);
            break;
          case "text":
            g = this.parseText(e);
            m = 0;
            for (f = g.length; m < f; m++) g[m] = this.parser.parse(g[m], !1);
            w.text = g;
            break;
          case "file":
            g = e.replace(/&squot;/g, "'");
            "[" === g.charAt(0) &&
              "]" === g.charAt(g.length - 1) &&
              (g = g.substring(1, g.length - 1));
            g.match(/./) && (g = "'" + g + "'");
            w.file = this.parser.parse(g);
            break;
          default:
            if (
              void 0 !== w.family &&
              x.substring(0, w.family.length + 1) === w.family + "."
            ) {
              "interval" === k[x.substring(w.family.length + 1)]
                ? "" != e && (w.family_interval = this.parser.parse(e))
                : "" != e && (w.family_steps = this.parser.parse(e));
              break;
            }
            console.log(
              "Propiedad del grafico 3D no identificada: <" +
                x +
                "> valor: <" +
                e +
                ">"
            );
        }
      switch (w.type) {
        case "point":
          return new a.Point3D(this.parent, w);
        case "segment":
          return new a.Segment3D(this.parent, w);
        case "polygon":
          return new a.Polygon3D(this.parent, w);
        case "curve":
          return new a.Curve3D(this.parent, w);
        case "triangle":
          return new a.Triangle3D(this.parent, w);
        case "face":
          return new a.Face3D(this.parent, w);
        case "polireg":
          return new a.Polireg3D(this.parent, w);
        case "surface":
          return new a.Surface3D(this.parent, w);
        case "text":
          return new a.Text3D(this.parent, w);
        case "cube":
        case "box":
        case "tetrahedron":
        case "octahedron":
        case "sphere":
        case "dodecahedron":
        case "icosahedron":
        case "ellipsoid":
        case "cone":
        case "cylinder":
        case "mesh":
          return new a.OtherGeometry(this.parent, w);
        case "macro":
          return new a.Macro3D(this.parent, w);
      }
    };
    a.LessonParser.prototype.parseAuxiliar = function (b) {
      y = {};
      b = this.split(b);
      for (var c = 0, d = b.length; c < d; c++)
        b[c][1] = b[c][1].replace(/&squot;/g, "'");
      c = 0;
      for (d = b.length; c < d; c++)
        switch (((x = b[c][0]), (e = b[c][1]), (v = k[x]), v)) {
          case "id":
          case "file":
          case "init":
          case "doExpr":
          case "whileExpr":
          case "range":
          case "local":
          case "expresion":
          case "condition":
          case "parameter":
            y[v] = e.replace(/&squot;/g, "'");
            break;
          case "editable":
          case "constant":
          case "array":
          case "matrix":
          case "algorithm":
          case "event":
          case "sequence":
            y[v] = "true" === k[e];
            break;
          case "size":
          case "rows":
          case "columns":
            y[v] = this.parser.parse(e);
            break;
          case "evaluate":
          case "execution":
          case "msg_pos":
          case "action":
            y[v] = k[e];
            break;
          case "type":
            y[v] = k[e];
            break;
          case "x":
          case "y":
          case "width":
          case "height":
            y[v] = this.parser.parse(e);
            break;
          default:
            var g = x.indexOf("."),
              m = k[x.substring(0, g)],
              g = k[x.substring(g + 1)];
            if ("parameter" === m && "font" === g) {
              y.parameterFont = e;
              break;
            }
            console.log(
              "Propiedad del auxiliar no identificada: <" +
                x +
                "> valor: <" +
                e +
                ">"
            );
        }
      y.sequence
        ? new a.Function(this.parent, y)
        : y.constant
        ? ((b = new a.Constant(this.parent, y)),
          y.evaluate &&
            "always" === y.evaluate &&
            this.parent.auxiliaries.push(b))
        : y.algorithm && y.evaluate
        ? ((b = new a.Algorithm(this.parent, y)),
          this.parent.auxiliaries.push(b))
        : y.array && !y.matrix && ")" != y.id.charAt(y.id.length - 1)
        ? ((b = new a.Vector(this.parent, y)),
          y.evaluate &&
            "always" === y.evaluate &&
            this.parent.auxiliaries.push(b))
        : y.matrix && ")" != y.id.charAt(y.id.length - 1)
        ? ((b = new a.Matrix(this.parent, y)),
          y.evaluate &&
            "always" === y.evaluate &&
            this.parent.auxiliaries.push(b))
        : y.event && ")" != y.id.charAt(y.id.length - 1)
        ? this.parent.events.push(new a.Event(this.parent, y))
        : ")" === y.id.charAt(y.id.length - 1)
        ? new a.Function(this.parent, y)
        : new a.Variable(this.parent, y);
    };
    a.LessonParser.prototype.parseAction = function (b) {
      E = b.action;
      D = b.parent;
      F = b.parameter;
      if (E)
        switch (E) {
          case "message":
            return new a.Message(D, F);
          case "calculate":
            return new a.Calculate(D, F);
          case "openURL":
            return new a.OpenURL(D, F);
          case "openScene":
            return new a.OpenScene(D, F);
          case "about":
            return new a.About(D, F);
          case "config":
            return new a.Config(D, F);
          case "init":
            return new a.Init(D, F);
          case "clear":
            return new a.Clear(D, F);
          case "animate":
            return new a.Animate(D, F);
          case "initAnimation":
            return new a.InitAnimation(D, F);
          case "playAudio":
            return new a.PlayAudio(D, F);
          default:
            console.log("Accion no soportada: <" + E + ">");
        }
      else return { execute: function () {} };
    };
    a.LessonParser.prototype.parseAnimation = function (b) {
      var c = {};
      b = this.split(b);
      for (var d = 0, g = b.length; d < g; d++)
        switch (((x = b[d][0]), (e = b[d][1]), (v = k[x]), v)) {
          case "id":
          case "delay":
          case "init":
          case "doExpr":
          case "whileExpr":
            c[v] = e.replace(/&squot;/g, "'");
            break;
          case "controls":
          case "auto":
          case "loop":
          case "algorithm":
          case "evaluate":
            c[v] = "true" === k[e];
            break;
          default:
            console.log(
              "Propiedad de la animacion no identificada: <" +
                x +
                ">  <" +
                e +
                ">"
            );
        }
      return new a.Animation(this.parent, c);
    };
    a.LessonParser.prototype.parsePleca = function (n, k) {
      n = this.split(n);
      f = d = "";
      q = 0;
      c = "#536891";
      h = "white";
      g = "left";
      b = "";
      u = "SansSerif,BOLD,20";
      m = "SansSerif,PLAIN,18";
      r = void 0;
      for (var p = 0, l = n.length; p < l; p++)
        switch (((x = n[p][0]), (e = n[p][1]), x)) {
          case "title":
            d = e;
            break;
          case "subtitle":
            f = e;
            break;
          case "subtitlines":
            q = e;
            break;
          case "bgcolor":
            "" != e && (c = new a.Color(e, this.parent.evaluator).getColor());
            break;
          case "fgcolor":
            "" != e && (h = new a.Color(e, this.parent.evaluator).getColor());
            break;
          case "align":
            "" != e && (g = e);
            break;
          case "titleimage":
            b = e;
            break;
          case "titlefont":
            u = "" != e ? a.convertFont(e) : a.convertFont(u);
            break;
          case "subtitlefont":
            m = "" != e ? a.convertFont(e) : a.convertFont(m);
            break;
          default:
            console.log(
              "Propiedad de la pleca no identificada: <" + x + ">  <" + e + ">"
            );
        }
      if ("" === d && "" === f) return document.createElement("div");
      I = m.substring(0, m.indexOf("px"));
      I = I.substring(I.lastIndexOf(" "));
      "" != b && ((N = this.parent.getImage(b)), (z = N.height));
      r = document.createElement("div");
      r.setAttribute("id", "descartesPleca");
      z
        ? (r.setAttribute(
            "style",
            "position:absolute;left:0;top:0;text-align:" +
              g +
              ";width:" +
              (k - 30) +
              "px;height:" +
              (z - 16) +
              "px;background:" +
              c +
              ";color:" +
              h +
              ";padding-top:8px;padding-bottom:8px;padding-left:15px;padding-right:15px;margin:0;overflow:hidden;z-index:100;"
          ),
          N.setAttribute(
            "style",
            "position: absolute;left:0;top:0;z-index:-1;width:100%;height:100%;"
          ),
          r.appendChild(N))
        : r.setAttribute(
            "style",
            "position:absolute;left:0;top:0;text-align:" +
              g +
              ";width:" +
              (k - 30) +
              "px;background:" +
              c +
              ";color:" +
              h +
              ";padding-top:12px;padding-bottom:12px;padding-left:15px;padding-right:15px;margin:0;z-index:100;"
          );
      M = document.createElement("div");
      M.setAttribute(
        "style",
        "padding:0;margin:0;font:" + u + ";overflow:hidden;white-space:nowrap;"
      );
      M.innerHTML = d;
      L = document.createElement("div");
      if (1 === parseInt(q)) {
        U = 0;
        O = document.createElement("div");
        O.innerHTML = f;
        document.body.appendChild(O);
        P = I;
        do
          (P -= U),
            O.setAttribute(
              "style",
              "padding:0;margin:0;font:" +
                m +
                ";font-size:" +
                P +
                "px;width:" +
                (k - 30) +
                "px;line-height:" +
                P +
                "px;"
            ),
            (Q = O.offsetHeight),
            (V = Q / P),
            (U = 1);
        while (1 < V && 8 < P);
        document.body.removeChild(O);
        L.setAttribute(
          "style",
          "padding:0;margin:0;font:" +
            m +
            ";font-size:" +
            P +
            "px;line-height: 110%;overflow:hidden;white-space:nowrap;"
        );
      } else
        L.setAttribute(
          "style",
          "padding:0;margin:0;font:" + m + ";line-height:110%;"
        );
      L.innerHTML = f;
      r.appendChild(M);
      r.appendChild(L);
      r.imageHeight = z;
      return r;
    };
    a.LessonParser.prototype.split = function (a) {
      if ("string" != typeof a) return [];
      a = (a || "").replace(/\\'/g, "\u2019");
      H = [];
      K = G = 0;
      C = !1;
      A = 0;
      for (J = !1; G < a.length; )
        " " !== a.charAt(G) || C || G++,
          " " === a.charAt(G) || C || ((C = !0), (A = G)),
          "=" !== a.charAt(G) ||
            "'" !== a.charAt(G + 1) ||
            J ||
            ((J = !0), (H[K] = [a.substring(A, G)]), (A = G + 2), (G += 2)),
          J &&
            "'" === a.charAt(G) &&
            ((C = J = !1), H[K].push(a.substring(A, G)), K++),
          "=" !== a.charAt(G) ||
            "'" === a.charAt(G + 1) ||
            J ||
            ((H[K] = [a.substring(A, G)]),
            (A = G + 1),
            G++,
            (R = a.substring(G).indexOf("=")),
            -1 === R
              ? (S = R = a.length)
              : ((R += G),
                (S = a.substring(G, R).lastIndexOf(" ")),
                (S = -1 === S ? a.length : S + G)),
            H[K].push(a.substring(A, S)),
            K++,
            (C = !1),
            (G = S)),
          G++;
      return H;
    };
    a.LessonParser.prototype.parseText = function (b) {
      b = b || "";
      return b.match(/^\{\\rtf1/)
        ? this.RTFparser.parse(b.substring(10))
        : new a.SimpleText(this.parent, b);
    };
    return a;
  })(descartesJS || {}, babel),
  descartesJS = (function (a) {
    function k(a, b) {
      x = [];
      x.type = "matrix";
      x.rows = a;
      x.cols = b;
      var c;
      p = 0;
      for (l = b; p < l; p++) {
        c = [];
        e = 0;
        for (w = a; e < w; e++) c.push(0);
        x[p] = c;
      }
      return x;
    }
    function d(a, b) {
      n = a.rows;
      v = a.cols;
      x = k(n, v);
      var c;
      for (p = 0; p < n; p++)
        for (e = 0; e < v; e++) {
          for (l = c = 0; l < v; l++) c += a[l][p] * b[e][l];
          x[e][p] = c;
        }
      return x;
    }
    function f(a, b, e) {
      for (
        var c = k(e.length - 1, e.length - 1), d = 0, g = c.length;
        d < g;
        d++
      )
        for (var m = 0; m < g; m++)
          c[d][m] =
            d < a
              ? m < b
                ? e[d][m]
                : e[d][m + 1]
              : d < b
              ? e[d + 1][m]
              : e[d + 1][m + 1];
      return c;
    }
    function q(a) {
      if (1 < a.cols) {
        for (var b = 0, e = 1, c = 0, d = a.cols; c < d; c++)
          (b += e * a[0][c] * q(f(0, c, a))), (e = -e);
        return b;
      }
      return a[0][0];
    }
    if (a.loadLib) return a;
    var c,
      h = {},
      g = Math.floor,
      b,
      u,
      m,
      r;
    a.fullDecimals = !1;
    a.Node = function (a, b) {
      this.sep = "";
      this.type = a;
      this.value = b;
      this.parent = null;
      this.childs = [];
    };
    a.Node.prototype.getRoot = function () {
      return null === this.parent ? this : this.parent.getRoot();
    };
    a.Node.prototype.addChild = function (a) {
      a.parent = this;
      this.childs.push(a);
    };
    a.Node.prototype.replaceLastChild = function (a) {
      b = this.childs.length - 1;
      lastChild = this.childs[b];
      lastChild.parent = null;
      this.childs[b] = a;
      a.parent = this;
      return a;
    };
    a.Node.prototype.contains = function (a) {
      if (this.value === a) return !0;
      for (var b = 0, e = this.childs.length; b < e; b++)
        if (this.childs[b].contains(a)) return !0;
      return !1;
    };
    a.Node.prototype.equalToMinus = function () {
      return "compOperator" === this.type
        ? ((this.type = "operator"),
          (this.value = "-"),
          (m = new a.Node("compOperator", "==")),
          (r = new a.Node("number", "0")),
          m.addChild(this),
          m.addChild(r),
          (u = this.getRoot()),
          u.setAllEvalFun(),
          u)
        : this;
    };
    a.Node.prototype.setAllEvalFun = function () {
      this.setEvalFun();
      for (var a = 0, b = this.childs.length; a < b; a++)
        this.childs[a].setAllEvalFun();
    };
    a.Node.prototype.setEvalFun = function () {
      if ("number" === this.type)
        this.evaluate = function (a) {
          return parseFloat(this.value);
        };
      else if ("string" === this.type)
        this.evaluate = function (a) {
          return this.value;
        };
      else if ("identifier" === this.type && 0 === this.childs.length)
        if ("rnd" == this.value)
          this.evaluate = function (a) {
            return Math.random();
          };
        else {
          var b;
          this.evaluate = function (a, e) {
            b = a.variables[this.value];
            if ("object" === typeof b && void 0 == b.length)
              return b.evaluate(a);
            void 0 == b &&
              (e || a.matrices[this.value]
                ? (b = a.matrices[this.value])
                : a.vectors[this.value] && (b = a.vectors[this.value]));
            return void 0 !== b ? b : 0;
          };
        }
      else if (
        "identifier" === this.type &&
        "square_bracket" === this.childs[0].type &&
        1 === this.childs[0].childs.length
      ) {
        var m, r;
        this.evaluate = function (a) {
          m = this.childs[0].childs[0].evaluate(a);
          try {
            return (
              (r = a.vectors[this.value][0 > m ? 0 : g(m)]),
              void 0 !== r ? r : 0
            );
          } catch (b) {
            return 0;
          }
        };
      } else if (
        "identifier" === this.type &&
        "square_bracket" === this.childs[0].type &&
        1 < this.childs[0].childs.length
      ) {
        var l, u;
        this.evaluate = function (a) {
          l = this.childs[0].childs[0].evaluate(a);
          u = this.childs[0].childs[1].evaluate(a);
          try {
            return (
              (r = a.matrices[this.value][0 > l ? 0 : g(l)][0 > u ? 0 : g(u)]),
              void 0 !== r ? r : 0
            );
          } catch (b) {
            return 0;
          }
        };
      } else if (
        "identifier" === this.type &&
        "parentheses" === this.childs[0].type
      ) {
        var w, G, K;
        this.evaluate = function (a) {
          w = [];
          for (var b = 0, e = this.childs[0].childs.length; b < e; b++)
            w[b] = this.childs[0].childs[b].evaluate(a);
          if ("_Eval_" === this.value) {
            c = 0 < w.length ? w[0] : 0;
            if ("number" == typeof c) return "NaN";
            c.match(",") &&
              parseFloat(c.replace(",", ".")) == c.replace(",", ".") &&
              (c = "'" + c + "'");
            void 0 == h[c] &&
              ((G = c.match(/:=/g) ? !0 : !1), (h[c] = a.parser.parse(c, G)));
            K = a.eval(h[c]);
            return void 0 != K ? K : NaN;
          }
          return a.functions[this.value].apply(a, w);
        };
      } else if ("operator" === this.type)
        "+" === this.value
          ? (this.evaluate = function (b) {
              var c = this.childs[0].evaluate(b, !0);
              b = this.childs[1].evaluate(b, !0);
              if ("matrix" !== c.type || "matrix" !== b.type)
                return (
                  "number" == typeof c && "string" == typeof b
                    ? (c = a.removeNeedlessDecimals(c.toString()))
                    : "string" == typeof c &&
                      "number" == typeof b &&
                      (b = a.removeNeedlessDecimals(b.toString())),
                  c + b
                );
              n = c.rows;
              v = c.cols;
              x = k(n, v);
              for (p = 0; p < n; p++)
                for (e = 0; e < v; e++) x[e][p] = c[e][p] + b[e][p];
              return x;
            })
          : "-" === this.value
          ? (this.evaluate = function (a) {
              var b = this.childs[0].evaluate(a, !0);
              a = this.childs[1].evaluate(a, !0);
              if ("matrix" !== b.type || "matrix" !== a.type) return b - a;
              n = b.rows;
              v = b.cols;
              x = k(n, v);
              for (p = 0; p < n; p++)
                for (e = 0; e < v; e++) x[e][p] = b[e][p] - a[e][p];
              return x;
            })
          : "*" === this.value
          ? (this.evaluate = function (a) {
              var b = this.childs[0].evaluate(a, !0);
              a = this.childs[1].evaluate(a, !0);
              return "matrix" !== b.type || "matrix" !== a.type
                ? b * a
                : d(b, a);
            })
          : "/" === this.value
          ? (this.evaluate = function (a) {
              var b = this.childs[0].evaluate(a, !0);
              a = this.childs[1].evaluate(a, !0);
              if ("matrix" !== b.type || "matrix" !== a.type) return b / a;
              var e = k(a.length, a.length),
                c = q(a);
              if (0 === c) a = 0;
              else {
                var c = 1 / c,
                  g;
                if (1 < a.length)
                  for (var m = 0, n = a.length; m < n; m++) {
                    g = c;
                    for (var h = 0; h < n; h++)
                      (e[h][m] = g * q(f(m, h, a))), (g = -g);
                    c = -c;
                  }
                else e[0][0] = c;
                a = e;
              }
              b = 0 === a ? k(b.rows, b.cols) : d(b, a);
              return b;
            })
          : "%" === this.value
          ? (this.evaluate = function (a) {
              var b = this.childs[0].evaluate(a);
              a = this.childs[1].evaluate(a);
              return b - g(b / a) * a;
            })
          : "^" === this.value &&
            (this.evaluate = function (a) {
              return Math.pow(
                this.childs[0].evaluate(a),
                this.childs[1].evaluate(a)
              );
            });
      else if ("compOperator" === this.type)
        "<" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) < this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : "<=" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) <= this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : ">" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) > this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : ">=" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) >= this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : "==" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) === this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : "!=" === this.value &&
            (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) !== this.childs[1].evaluate(a)
                ? 1
                : 0;
            });
      else if ("boolOperator" === this.type)
        "&" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a)
                ? this.childs[1].evaluate(a)
                  ? 1
                  : 0
                : 0;
            })
          : "|" === this.value
          ? (this.evaluate = function (a) {
              return this.childs[0].evaluate(a)
                ? 1
                : this.childs[1].evaluate(a)
                ? 1
                : 0;
            })
          : "!" === this.value &&
            (this.evaluate = function (a) {
              return this.childs[0].evaluate(a) ? 0 : 1;
            });
      else if ("conditional" === this.type)
        this.evaluate = function (a) {
          return 0 < this.childs[0].evaluate(a)
            ? this.childs[1].evaluate(a)
            : this.childs[2].evaluate(a);
        };
      else if ("sign" === this.type)
        this.evaluate =
          "sign+" === this.value
            ? function (a) {
                return this.childs[0].evaluate(a);
              }
            : function (a) {
                return -this.childs[0].evaluate(a);
              };
      else if ("parentheses" === this.type)
        this.evaluate = function (a, b) {
          return this.childs[0].evaluate(a, b);
        };
      else if ("(expr)" === this.type || "[expr]" === this.type)
        this.evaluate = function (a) {
          var b = this.childs.length,
            e = [],
            c;
          if (
            1 === b &&
            1 === this.childs[0].childs.length &&
            "(expr)" === this.type
          )
            e = this.childs[0].childs[0].evaluate(a);
          else
            for (var d = 0; d < b; d++) {
              c = [];
              for (var g = 0, m = this.childs[d].childs.length; g < m; g++)
                c.push(this.childs[d].childs[g].evaluate(a));
              e[d] = c;
            }
          return e;
        };
      else if ("asign" === this.type) {
        var C, A, J, I, N, z;
        this.evaluate = function (a) {
          C = this.childs[0];
          A = this.childs[1];
          if (1 === C.childs.length && "square_bracket" === C.childs[0].type) {
            m = C.childs[0].childs;
            if (1 === m.length)
              return (
                (J = m[0].evaluate(a)),
                (J = 0 > J ? 0 : g(J)),
                (a.vectors[C.value][J] = A.evaluate(a)),
                A.evaluate(a)
              );
            if (2 === m.length)
              return (
                (I = m[0].evaluate(a)),
                (N = m[1].evaluate(a)),
                (I = 0 > I ? 0 : g(I)),
                (N = 0 > N ? 0 : g(N)),
                a.matrices[C.value][I] || (a.matrices[C.value][I] = []),
                (a.matrices[C.value][I][N] = A.evaluate(a)),
                A.evaluate(a)
              );
          } else
            return (
              (z = A.evaluate(a)),
              z.type
                ? (a.matrices[C.value] = z)
                : "object" !== typeof a.variables[C.value]
                ? (a.variables[C.value] = z)
                : 0
            );
        };
      }
    };
    var n, v, x, e, p, l, w;
    a.Node.prototype.toString = function () {
      var a = "tipo: " + this.type + ", valor: " + this.value + "\n";
      this.sep = "   " + (this.parent ? this.parent.sep : "");
      for (var b = 0, e = this.childs.length; b < e; b++)
        a += this.sep + this.childs[b].toString();
      return a;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m = /^\s+/,
      r =
        /^[a-zA-Z_\u00C0-\u021B\u0391-\u03C9]+[a-zA-Z_0-9\u00C0-\u021B\u0391-\u03C9]*([.]*[0-9a-zA-Z_\u00C0-\u021B\u0391-\u03C9]+[0-9]*)*/,
      n = /^[0-9]+[.][0-9]+|^[.][0-9]+|^[0-9]+/,
      v = /^==|^!=|^<=|^<|^>=|^>|^#/,
      x = /^\!|^\~|^\&\&|^\&|^\|\||^\|/,
      e = /^=|^:=/,
      p = /^[\?\:]/,
      l = /^[\+\-\*\/\%\^\u2212\u00b7\u00D7\u00F7]/,
      w = /^\[|^\]/,
      y = /^\(|^\)/,
      B = /^,/,
      E = /^;/,
      D = /\|/g,
      F = /\|\*/g,
      H = /\*\|/g;
    a.Tokenizer = function () {};
    a.Tokenizer.prototype.tokenize = function (a) {
      function A(a, e, c) {
        d.push({ type: a, value: e });
        h = h.slice(c);
        q += c;
        b++;
        u = a;
      }
      if ((k = a)) {
        a = a.replace(/\\u(\S+) /g, function (a, b) {
          return String.fromCharCode(parseInt(b, 16));
        });
        a = a.replace(/\&sup(.+);/g, "^ $1 ");
        a = a.replace(/&squot;/g, "'");
        a.match(/\=\|\*/g) && (a = a.replace(F, "'").replace(H, "'"));
        a.match(/\=\|/g) && (a = a.replace(D, "'"));
        var J = a.trim();
        "|" == J.charAt(0) &&
          "|" == J.charAt(J.length - 1) &&
          (a = J.replace(D, "'"));
      }
      d = [];
      f = !1;
      q = 0;
      h = a;
      b = 0;
      for (u = ""; a && q < a.length; )
        if (((f = q), "'" == h[0])) {
          for (g = 1; "'" != h[g]; )
            if (g < h.length) g++;
            else {
              console.log(
                ">Error, unknown symbol: [" +
                  h +
                  "], in the string <<" +
                  k +
                  ">>"
              );
              return;
            }
          c = h.substring(1, g);
          A("string", c, c.length + 2);
        } else if ((c = h.match(m)))
          (h = h.slice(c[0].length)), (q += c[0].length), b++;
        else if ((c = h.match(l)))
          (c[0] = c[0]
            .replace(/\u00F7/g, "/")
            .replace(/\u2212/g, "-")
            .replace(/\u00b7/g, "*")
            .replace(/\u00D7/g, "*")),
            A("operator", c[0], c[0].length);
        else if ((c = h.match(r)))
          "number" === u && d.push({ type: "operator", value: "*" }),
            A("identifier", c[0], c[0].length);
        else if ((c = h.match(n))) A("number", c[0], c[0].length);
        else if ((c = h.match(v)))
          (J = c[0]), "#" == J && (J = "!="), A("compOperator", J, c[0].length);
        else if ((c = h.match(x)))
          (J = c[0]),
            "||" == J
              ? (J = "|")
              : "&&" == J
              ? (J = "&")
              : "~" == J && (J = "!"),
            A("boolOperator", J, c[0].length);
        else if ((c = h.match(e)) && !h.match(/^==/))
          A("asign", c[0], c[0].length);
        else if ((c = h.match(p))) A("conditional", c[0], c[0].length);
        else if ((c = h.match(w))) A("square_bracket", c[0], c[0].length);
        else if ((c = h.match(y)))
          "(" == c &&
            "number" === u &&
            d.push({ type: "operator", value: "*" }),
            A("parentheses", c[0], c[0].length);
        else if ((c = h.match(B))) A("separator", c[0], c[0].length);
        else if (178 === h.charCodeAt(0))
          d.push({ type: "operator", value: "^" }), A("number", 2, 1);
        else if (179 === h.charCodeAt(0))
          d.push({ type: "operator", value: "^" }), A("number", 3, 1);
        else if ((c = h.match(E))) A("final_of_expresion", c[0], c[0].length);
        else if (f == q) {
          console.log(
            "Error, simbolo no conocido: [" +
              h +
              "], en la cadena <<" +
              k +
              ">>"
          );
          return;
        }
      return d;
    };
    var G,
      K =
        /rnd|pi|e|Infinity|-Infinity|sqr|sqrt|ra\u00edz|exp|log|log10|abs|ent|sgn|ind|sin|sen|cos|tan|cot|sec|csc|sinh|senh|cosh|tanh|coth|sech|csch|asin|asen|acos|atan|min|max/;
    a.Tokenizer.prototype.flatTokens = function (a, b) {
      a = a || [];
      b = b || "";
      G = "";
      for (var e = 0, c = a.length; e < c; e++)
        G =
          "string" == a[e].type
            ? G + "&squot;" + a[e].value + "&squot;"
            : "identifier" != a[e].type || a[e].value.match(K)
            ? G + a[e].value
            : G + b + a[e].value;
      return G;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a) {
      switch (a) {
        case "=":
          return 1;
        case ":=":
          return 1;
        case "(":
          return 2;
        case "[":
          return 2;
        case "?":
          return 2;
        case ":":
          return 3;
        case "?:":
          return 3;
        case "|":
          return 6;
        case "&":
          return 7;
        case "<":
          return 5;
        case "<=":
          return 5;
        case ">":
          return 5;
        case ">=":
          return 5;
        case "==":
          return 5;
        case "!=":
          return 5;
        case "+":
          return 6;
        case "-":
          return 6;
        case "/":
          return 7;
        case "*":
          return 7;
        case "sign-":
          return 7;
        case "sign+":
          return 7;
        case "!":
          return 8;
        case "%":
          return 8;
        case "^":
          return 9;
        default:
          return 9;
      }
    }
    function d(a) {
      return isNaN(parseFloat(a))
        ? a.replace(/^\s|\s$/g, "").replace(/^'|'$/g, "")
        : parseFloat(a) == a
        ? parseFloat(a)
        : a.replace(/^\s|\s$/g, "").replace(/^'|'$/g, "");
    }
    if (a.loadLib) return a;
    a.Parser = function (b) {
      this.evaluator = b;
      this.tokenizer = new a.Tokenizer();
      this.vectors = {};
      this.matrices = {};
      this.variables = {};
      this.functions = {};
      this.definitions = {};
      this.registerDefaultValues();
      this.registerExternalValues && this.registerExternalValues();
    };
    a.Parser.prototype.setDefinition = function (a, b) {
      this.definitions[a] = b;
    };
    a.Parser.prototype.getDefinition = function (a) {
      return this.definitions[a];
    };
    a.Parser.prototype.setVariable = function (a, b) {
      this.variables[a] = b;
    };
    a.Parser.prototype.getVariable = function (a, b) {
      b &&
        (this.variables[a] =
          void 0 !== this.variables[a] ? this.variables[a] : void 0);
      return this.variables[a];
    };
    a.Parser.prototype.setVector = function (a, b, c) {
      this.vectors[a][b] = c;
    };
    a.Parser.prototype.getVector = function (a) {
      this.vectors.hasOwnProperty(a) || (this.vectors[a] = [0, 0, 0]);
      return this.vectors[a];
    };
    a.Parser.prototype.setMatrix = function (a, b, c, d) {
      this.matrices[a][b][c] = d;
    };
    a.Parser.prototype.getMatrix = function (a) {
      this.matrices.hasOwnProperty(a) ||
        (this.matrices[a] = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
      return this.matrices[a];
    };
    a.Parser.prototype.setFunction = function (a, b) {
      this.functions[a] = b;
    };
    a.Parser.prototype.getFunction = function (a) {
      this.functions.hasOwnProperty(a) ||
        (this.functions[a] = function () {
          return 0;
        });
      return this.functions[a];
    };
    var f, q, c, h, g, b, u, m, r, n, v, x;
    a.Parser.prototype.parse = function (e, d) {
      (c = this.tokenizer.tokenize(e)) || (c = []);
      h = null;
      d = !d || !1;
      f = m = u = b = 0;
      for (q = c.length; f < q; f++) {
        r = c[f];
        n = r.value;
        v = r.type;
        if ("identifier" === v)
          if (
            f + 1 < q &&
            "parentheses" === c[f + 1].type &&
            "(" === c[f + 1].value
          )
            this.getFunction(n);
          else if (
            f + 1 < q &&
            "square_bracket" === c[f + 1].type &&
            "[" === c[f + 1].value
          )
            c[f + 3] &&
            "square_bracket" === c[f + 3].type &&
            "]" === c[f + 3].value
              ? this.getVector(n)
              : this.getMatrix(n);
          else {
            var l = n.match(
              /(\w*)\.mouse_x|(\w*)\.mouse_y|(\w*)\.mouse_pressed|(\w*)\.mouse_clicked|(\w*)\.clic_izquierdo/
            );
            l && (this.variables[l[1] + ".DESCARTESJS_no_fixed"] = 1);
            this.getVariable(n, !0);
          }
        "asign" === v && d && ":=" != n && ((v = "compOperator"), (n = "=="));
        if ("asign" === v)
          if (((g = new a.Node(v, n)), null != h))
            if ("identifier" === h.type)
              h.parent && h.parent.replaceLastChild(g),
                g.addChild(h),
                (h = g),
                (d = !0);
            else if ("square_bracket" === h.type)
              g.addChild(h.parent), (h = g), (d = !0);
            else {
              g.type = "compOperator";
              g.value = "==";
              for (d = !0; h.parent && k(h.parent.value) >= k(g.value); )
                h = h.parent;
              h.parent && h.parent.replaceLastChild(g);
              g.addChild(h);
              h = g;
            }
          else {
            console.log(
              "Error1: en la expresion <<" +
                e +
                ">>, en el token {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else if (
          ("parentheses" === v && "(" === n) ||
          ("square_bracket" === v && "[" === n)
        )
          if (
            ((g = new a.Node(v, n)),
            "(" === n && b++,
            "[" === n && u++,
            null === h)
          )
            "(" === n && new a.Node("(expr)", "(expr)").addChild(g),
              "[" === n && new a.Node("[expr]", "[expr]").addChild(g),
              (h = g);
          else if (
            "operator" === h.type ||
            "boolOperator" === h.type ||
            "compOperator" === h.type ||
            "conditional" === h.type ||
            "asign" === h.type
          )
            h.addChild(g), (h = g);
          else if ("sign" === h.type) h.addChild(g), (h = g);
          else if ("parentheses" === h.type && "(" === h.value)
            h.addChild(g), (h = g);
          else if ("square_bracket" === h.type && "[" === h.value)
            h.addChild(g), (h = g);
          else if ("parentheses" === h.type && "()" === h.value)
            h.parent.addChild(g), (h = g);
          else if ("square_bracket" === h.type && "[]" === h.value)
            h.parent.addChild(g), (h = g);
          else if ("identifier" === h.type) h.addChild(g), (h = g);
          else {
            console.log(
              "Error2: en la expresion <<" +
                e +
                ">>, en el token [" +
                f +
                "] {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else if ("parentheses" === v && ")" === n)
          if ((b--, null === h))
            console.log(
              "Error3: en la expresion <<" +
                e +
                ">>, en el token (valor:" +
                n +
                ", tipo:" +
                v
            );
          else {
            for (
              ;
              h &&
              h.parent &&
              ("(" != h.value || ("(" == h.value && "parentheses" != h.type));

            )
              h = h.parent;
            if (h && "(" === h.value) h.value = "()";
            else {
              console.log(
                "Error4: en la expresion <<" +
                  e +
                  ">>, en el token {valor: " +
                  n +
                  ", tipo: " +
                  v +
                  "}"
              );
              break;
            }
          }
        else if ("square_bracket" === v && "]" === n)
          if ((u--, null === h))
            console.log(
              "Error5: en la expresion <<" +
                e +
                ">>, en el token (valor:" +
                n +
                ", tipo:" +
                v
            );
          else {
            for (
              ;
              h &&
              h.parent &&
              ("[" != h.value ||
                ("[" == h.value && "square_bracket" != h.type));

            )
              h = h.parent;
            if (h && "[" === h.value) h.value = "[]";
            else {
              console.log(
                "Error6: en la expresion <<" +
                  e +
                  ">>, en el token {valor: " +
                  n +
                  ", tipo: " +
                  v +
                  "}"
              );
              break;
            }
          }
        else if ("number" === v || "string" === v || "identifier" === v)
          if (((g = new a.Node(v, n)), null === h)) h = g;
          else if (
            "operator" === h.type ||
            "compOperator" === h.type ||
            "boolOperator" === h.type ||
            ("parentheses" === h.type && "(" === h.value) ||
            ("square_bracket" === h.type && "[" === h.value) ||
            "sign" === h.type ||
            "conditional" === h.type ||
            "asign" === h.type
          )
            h.addChild(g), (h = g);
          else {
            console.log(
              "Error7: en la expresion <<" +
                e +
                ">>, en el token {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else if (
          "operator" === v ||
          "compOperator" === v ||
          "boolOperator" === v
        )
          if (((g = new a.Node(v, n)), null === h))
            if ("-" === n || "+" === n)
              (g.type = "sign"), (g.value = "sign" + n), (h = g);
            else if ("!" === n) h = g;
            else {
              console.log(
                "Error8: en la expresion <<" +
                  e +
                  ">>, en el token {valor: " +
                  n +
                  ", tipo: " +
                  v +
                  "}"
              );
              break;
            }
          else if (
            "operator" === h.type ||
            "compOperator" === h.type ||
            "boolOperator" === h.type ||
            "asign" === h.type ||
            "conditional" === h.type ||
            ("square_bracket" === h.type &&
              "[" === h.value &&
              ("-" === n || "+" === n || "!" === n)) ||
            ("parentheses" === h.type &&
              "(" === h.value &&
              ("-" === n || "+" === n || "!" === n))
          ) {
            if ("-" === n || "+" === n)
              (g.type = "sign"), (g.value = "sign" + n);
            h.addChild(g);
            h = g;
          } else if (
            "number" === h.type ||
            ("parentheses" === h.type && "()" === h.value) ||
            ("square_bracket" === h.type && "[]" === h.value) ||
            "string" === h.type ||
            "identifier" === h.type ||
            "conditional" === h.type ||
            "asign" === h.type
          ) {
            for (; h.parent && k(h.parent.value) >= k(g.value); ) h = h.parent;
            h.parent && h.parent.replaceLastChild(g);
            g.addChild(h);
            h = g;
          } else {
            console.log(
              "Error9: en la expresion <<" +
                e +
                ">>, en el token {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else if ("conditional" === v)
          if (((g = new a.Node(v, n)), null != h))
            if ("?" === g.value) {
              for (m++; h.parent && k(h.parent.value) > k(g.value); )
                h = h.parent;
              h.parent && h.parent.replaceLastChild(g);
              g.addChild(h);
              h = g;
            } else {
              for (
                m--;
                h &&
                h.parent &&
                ("?" != h.value || ("?" == h.value && "conditional" != h.type));

              )
                h = h.parent;
              if (h && "?" === h.value) h.value = "?:";
              else {
                console.log(
                  "Error10: en la expresion <<" +
                    e +
                    ">>, en el token {valor: " +
                    n +
                    ", tipo: " +
                    v +
                    "}"
                );
                break;
              }
            }
          else {
            console.log(
              "Error11: en la expresion <<" +
                e +
                ">>, en el token {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else if ("separator" === v)
          if (null != h)
            for (; h.parent && "(" != h.value && "[" != h.value; ) h = h.parent;
          else {
            console.log(
              "Error12: en la expresion <<" +
                e +
                ">>, en el token {valor: " +
                n +
                ", tipo: " +
                v +
                "}"
            );
            break;
          }
        else {
          console.log(
            "Error13: en la expresion <<" +
              e +
              ">>, en el token {valor: " +
              n +
              ", tipo: " +
              v +
              "}"
          );
          break;
        }
      }
      0 < b && alert("Error, faltan parentesis por cerrar: " + e);
      0 > b && alert("Error, faltan parentesis por abrir: " + e);
      0 < u && alert("Error, faltan corchetes por cerrar: " + e);
      0 > u && alert("Error, faltan corchetes por abrir: " + e);
      0 != m && alert("Error, condicional incompleta: " + e);
      (x = h ? h.getRoot() : null) && x.setAllEvalFun();
      return x;
    };
    a.Parser.prototype.registerDefaultValues = function () {
      function b(a, c) {
        for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]);
      }
      var c = this;
      c.variables.rnd = Math.random;
      c.variables.pi = c.variables["\u03c0"] = a.returnValue(Math.PI);
      c.variables.e = a.returnValue(Math.E);
      c.variables.Infinity = Infinity;
      c.variables["-Infinity"] = -Infinity;
      c.variables.isTouch = c.variables["esT\u00e1ctil"] = a.hasTouchSupport
        ? 1
        : 0;
      c.functions.sqr = function (a) {
        return a * a;
      };
      c.functions.sqrt = c.functions["ra\u00edz"] = Math.sqrt;
      c.functions.exp = Math.exp;
      c.functions.log = Math.log;
      c.functions.log10 = function (a) {
        return Math.log(a) / Math.log(10);
      };
      c.functions.abs = Math.abs;
      c.functions.ent = Math.floor;
      c.functions.sgn = function (a) {
        return 0 < a ? 1 : 0 > a ? -1 : 0;
      };
      c.functions.ind = function (a) {
        return a ? 1 : 0;
      };
      c.functions.sin = c.functions.sen = Math.sin;
      c.functions.cos = Math.cos;
      c.functions.tan = Math.tan;
      c.functions.cot = function (a) {
        return 1 / Math.tan(a);
      };
      c.functions.sec = function (a) {
        return 1 / Math.cos(a);
      };
      c.functions.csc = function (a) {
        return 1 / Math.sin(a);
      };
      c.functions.sinh = c.functions.senh = function (a) {
        return (Math.exp(a) - Math.exp(-a)) / 2;
      };
      c.functions.cosh = function (a) {
        return (Math.exp(a) + Math.exp(-a)) / 2;
      };
      c.functions.tanh = function (a) {
        return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
      };
      c.functions.coth = function (a) {
        return 1 / c.functions.tanh(a);
      };
      c.functions.sech = function (a) {
        return 1 / c.functions.cosh(a);
      };
      c.functions.csch = function (a) {
        return 1 / c.functions.sinh(a);
      };
      c.functions.asin = c.functions.asen = Math.asin;
      c.functions.acos = Math.acos;
      c.functions.atan = Math.atan;
      c.functions.min = Math.min;
      c.functions.max = Math.max;
      c.functions._Trace_ = c.functions._Print_ = function () {
        console.log.apply(console, arguments);
        return 0;
      };
      c.functions._Num_ = function (a) {
        if ("number" == typeof a) return "NaN";
        a = a.replace(",", ".");
        return parseFloat(a) == a ? parseFloat(a) : "NaN";
      };
      c.functions._Stop_Audios_ = function () {
        c.evaluator.parent.stopAudios();
      };
      c.functions.esCorrecto = function (b, e, d) {
        return a.esCorrecto(b, e, c.evaluator, d);
      };
      c.functions.escorrecto = function (b, e, d) {
        return a.escorrecto(b, e, c.evaluator, d);
      };
      window.parent !== window &&
        ((c.functions["parent.set"] = function (a, b) {
          window.parent.postMessage({ type: "set", name: a, value: b }, "*");
          return 0;
        }),
        (c.functions["parent.update"] = function () {
          window.parent.postMessage({ type: "update" }, "*");
          return 0;
        }),
        (c.functions["parent.exec"] = function (a, b) {
          window.parent.postMessage({ type: "exec", name: a, value: b }, "*");
          return 0;
        }));
      c.functions._NumToStr_ = c.functions._NumACadena_ = function (a, b) {
        a = isNaN(parseFloat(a)) ? 0 : parseFloat(a);
        return a.toFixed(parseInt(b || 0));
      };
      c.functions._charAt_ = c.functions._letraEn_ = function (a, b) {
        a = (a || "").toString();
        b = isNaN(parseInt(b)) ? 0 : parseInt(b);
        return a.charAt(b);
      };
      c.functions._substring_ = c.functions._subcadena_ = function (a, b, c) {
        a = (a || "").toString();
        b = isNaN(parseInt(b)) ? 0 : parseInt(b);
        c = isNaN(parseInt(c)) ? 0 : parseInt(c);
        return 0 <= b && 0 <= c
          ? a.substring(b, c)
          : 0 > b && 0 <= c
          ? a.substring(c)
          : 0 > c && 0 <= b
          ? a.substring(b)
          : "";
      };
      c.functions._length_ = c.functions._longitud_ = function (a) {
        return (a || "").toString().length;
      };
      c.functions._indexOf_ = c.functions["_\u00edndiceDe_"] = function (a, b) {
        return (a || "").toString().indexOf((b || "").toString());
      };
      this.functions._Load_ = function (b) {
        var c = "";
        b &&
          (c =
            (c = document.getElementById(b)) && "descartes/archivo" == c.type
              ? c.text
              : a.openExternalFile(b));
        return c || "";
      };
      this.functions._GetValues_ = function (a, b) {
        var c = this.functions
          ._Load_(a)
          .replace(/&brvbar;/g, String.fromCharCode("166"));
        return this.functions._ExecBlock_(c, b);
      };
      this.functions._GetMatrix_ = function (a, b) {
        var c = this.functions
          ._Load_(a)
          .replace(/&brvbar;/g, String.fromCharCode("166"));
        return this.functions._StrToMatrix_(c, b);
      };
      this.functions._MatrixToStr_ = function (a) {
        var b = this.matrices[a];
        if (b) {
          for (
            var c = "<" + a + ">\\n",
              e = this.getVariable(a + ".columnas_usadas") || b.rows || 0,
              d = this.getVariable(a + ".filas_usadas") || b.cols || 0,
              g,
              m = 0;
            m < e;
            m++
          ) {
            for (var f = 0; f < d; f++)
              (g = b[m][f]),
                void 0 !== g &&
                  ("string" == typeof g && (g = "'" + g + "'"),
                  (c += g + (f < d - 1 ? " \u00a6 " : "")));
            c = c.replace(/(\u00A6 )$/g, "") + "\\n";
          }
          return c + ("</" + a + ">");
        }
        return "";
      };
      this.functions._StrToMatrix_ = function (a, b) {
        var e = [],
          g = !1;
        e.type = "matrix";
        if (a) {
          a = a.replace(/\r|\\r/g, "").split(/\n|\\n/);
          for (var m = 0, f = a.length; m < f; m++)
            a[m].match("<" + b + ">")
              ? ((g = a[m].trim().split("<" + b + ">")),
                2 == g.length &&
                  "" != g[1] &&
                  e.push(g[1].split(String.fromCharCode("166")).map(d)),
                (g = !0))
              : a[m].match("</" + b + ">")
              ? ((g = a[m].trim().split("</" + b + ">")),
                2 == g.length &&
                  "" != g[0] &&
                  e.push(g[0].split(String.fromCharCode("166")).map(d)),
                (g = !1))
              : g && e.push(a[m].split(String.fromCharCode("166")).map(d));
          c.matrices[b] = e;
          c.setVariable(b + ".filas", e[0].length);
          c.setVariable(b + ".columnas", e.length);
        }
        return "OK";
      };
      this.functions._GetVector_ = function (a, b) {
        var c = this.functions._Load_(a);
        return this.functions._StrToVector_(c, b);
      };
      this.functions._VectorToStr_ = function (a) {
        var b = this.vectors[a];
        if (b) {
          for (
            var c = "<" + a + ">\\n",
              e = this.getVariable(a + ".long_usada") || b._size_ || 0,
              d,
              g = 0;
            g < e;
            g++
          )
            (d = b[g]),
              void 0 !== d
                ? ("number" == typeof d && (d = parseFloat(d)),
                  (c += d + "\\n"))
                : (c += "0\\n");
          return c + ("</" + a + ">");
        }
        return "";
      };
      this.functions._StrToVector_ = function (a, b) {
        var e = [],
          g = !1;
        e.type = "vector";
        if (a) {
          a = a.replace(/\r|\\r/g, "").split(/\n|\\n/);
          for (var m = 0, f = a.length; m < f; m++)
            a[m].match("<" + b + ">")
              ? (g = !0)
              : a[m].match("</" + b + ">")
              ? (g = !1)
              : g && e.push(d(a[m]));
          e._size_ = e.length;
          c.vectors[b] = e;
          c.setVariable(b + ".long", e.length);
          c.setVariable(b + ".long_usada", e.length);
        }
        return "OK";
      };
      this.functions._ExecStr_ = function (a) {
        return this.functions._ExecBlock_(a, "");
      };
      this.functions._ExecBlock_ = function (a, b) {
        var e = [],
          d = "" == b;
        if (a) {
          a = a.replace(/\r|\\r/g, "").split(/\n|\\n/);
          for (var g = 0, m = a.length; g < m; g++)
            a[g].match("<" + b + ">")
              ? ((d = a[g].trim().split("<" + b + ">")),
                2 == d.length &&
                  "" != d[1] &&
                  (e = e.concat(d[1].split(String.fromCharCode("166")))),
                (d = !0))
              : a[g].match("</" + b + ">")
              ? ((d = a[g].trim().split("</" + b + ">")),
                2 == d.length &&
                  "" != d[0] &&
                  (e = e.concat(d[0].split(String.fromCharCode("166")))),
                (d = !1))
              : d && (e = e.concat(a[g].split(String.fromCharCode("166"))));
          g = 0;
          for (m = e.length; g < m; g++)
            (d = e[g].split("=")),
              (d[0] = d[0].trim()),
              2 == d.length &&
                "" != d[0] &&
                (isNaN(parseFloat(d[1]))
                  ? c.setVariable(
                      d[0],
                      d[1].replace(/^\s|\s$/g, "").replace(/^'|'$/g, "")
                    )
                  : c.setVariable(d[0], parseFloat(d[1])));
        }
        return 0;
      };
      var g = document.createElement("a");
      g.setAttribute("target", "_blank");
      var m,
        f = null;
      this.functions._Save_ = function (b, c) {
        document.body.appendChild(g);
        m = new Blob(
          [
            "\ufeff",
            c
              .replace(/\\n/g, "\n")
              .replace(/\\q/g, "'")
              .replace(/\\r/g, "")
              .replace(/\\_/g, "\\"),
          ],
          { type: "text/plain" }
        );
        g.setAttribute("download", b);
        g.setAttribute("href", window.URL.createObjectURL(m));
        null == f &&
          (g.click(),
          (f = !0),
          a.setTimeout(function () {
            f = null;
          }, 1e3));
        document.body.removeChild(g);
        return 0;
      };
      var n,
        h,
        k,
        r,
        u = document.createElement("input");
      u.setAttribute("type", "file");
      onHandleFileSelect = function (b) {
        n = b.target.files;
        h = new FileReader();
        h.onload = function (b) {
          a.addExternalFileContent(n[0].name, b.target.result);
          c.setVariable(k, n[0].name);
          c.getFunction(r) &&
            (c.getFunction(r).apply(c.evaluator, []),
            c.evaluator.parent.update());
        };
        0 < n.length && h.readAsText(n[0]);
      };
      u.addEventListener("change", onHandleFileSelect);
      this.functions._Open_ = function (a, b) {
        k = a;
        r = b;
        u.click();
        return 0;
      };
      var v,
        q,
        x = document.createElement("input");
      x.setAttribute("type", "file");
      onHandleFileSelect2 = function (a) {
        a.stopPropagation();
        a.preventDefault();
        v = a.target.files;
        q = new FileReader();
        q.onload = function (a) {
          var d = {};
          try {
            d = JSON.parse(a.target.result);
          } catch (g) {}
          d.variables && b(c.variables, d.variables);
          d.vectors && b(c.vectors, d.vectors);
          d.matrices && b(c.matrices, d.matrices);
          c.evaluator.parent.update();
        };
        0 < v.length && q.readAsText(v[0]);
      };
      x.removeEventListener("change", onHandleFileSelect2);
      x.addEventListener("change", onHandleFileSelect2);
      this.functions._AnchoDeCadena_ = this.functions._strWidth_ = function (
        b,
        c,
        e,
        d
      ) {
        return a.getTextWidth(b, a.convertFont(c + "," + e + "," + d));
      };
      this.functions._Rojo_ = this.functions._Red_ = function (b) {
        return new a.Color(b).r / 255;
      };
      this.functions._Verde_ = this.functions._Green_ = function (b) {
        return new a.Color(b).g / 255;
      };
      this.functions._Azul_ = this.functions._Blue_ = function (b) {
        return new a.Color(b).b / 255;
      };
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.floor;
    a.Evaluator = function (d) {
      this.parent = d;
      this.parser = new a.Parser(this);
      this.variables = this.parser.variables;
      this.functions = this.parser.functions;
      this.vectors = this.parser.vectors;
      this.matrices = this.parser.matrices;
      this.definitions = this.parser.definitions;
    };
    a.Evaluator.prototype.setDefinition = function (a, f) {
      this.definitions[a] = f;
    };
    a.Evaluator.prototype.getDefinition = function (a) {
      return this.definitions[a];
    };
    a.Evaluator.prototype.setVariable = function (a, f) {
      this.variables[a] = f;
    };
    a.Evaluator.prototype.getVariable = function (a) {
      return this.variables[a];
    };
    a.Evaluator.prototype.setVector = function (a, f, q) {
      f = 0 > f ? 0 : k(f);
      this.vectors[a][f] = q;
    };
    a.Evaluator.prototype.getVector = function (a, f) {
      f = 0 > f ? 0 : k(f);
      return this.vectors[a][f];
    };
    a.Evaluator.prototype.setMatrix = function (a, f, q, c) {
      f = 0 > f ? 0 : k(f);
      q = 0 > q ? 0 : k(q);
      this.matrices[a][f][q] = c;
    };
    a.Evaluator.prototype.getMatrix = function (a, f, q) {
      f = 0 > f ? 0 : k(f);
      q = 0 > q ? 0 : k(q);
      return this.matrices[a][f][q];
    };
    a.Evaluator.prototype.setFunction = function (a, f) {
      this.functions[a] = f;
    };
    a.Evaluator.prototype.getFunction = function (a) {
      return this.functions[a];
    };
    a.Evaluator.prototype.eval = function (a) {
      return a ? a.evaluate(this) : 0;
    };
    a.externalEvaluator = new a.Evaluator();
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a) {
      for (var b = "", c, d = 0; d < a.children.length; d++)
        if (((c = a.children[d]), "text" === c.nodeType))
          b += c.value
            .replace(/\[/g, "\\left[")
            .replace(/\]/g, "\\right]")
            .replace(/_/g, "\\_")
            .replace(/ /g, "\\;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        else if ("mathSymbol" === c.nodeType)
          b += c.value.replace(/\(/g, "\\left(").replace(/\)/g, "\\right)");
        else if ("superIndex" === c.nodeType) b += "^{" + k(c) + "}";
        else if ("subIndex" === c.nodeType) b += "_{" + k(c) + "}";
        else if ("fraction" === c.nodeType)
          b += "\\frac{" + k(c.children[0]) + "}{" + k(c.children[1]) + "}";
        else if ("radical" === c.nodeType)
          b += "\\sqrt[" + k(c.children[0]) + "]{" + k(c.children[1]) + "}";
        else if ("sum" === c.nodeType)
          b +=
            "\\sum_{" +
            k(c.children[0]) +
            "}^{" +
            k(c.children[1]) +
            "}{" +
            k(c.children[2]) +
            "}";
        else if ("integral" === c.nodeType)
          b +=
            "\\int_{" +
            k(c.children[0]) +
            "}^{" +
            k(c.children[1]) +
            "}{" +
            k(c.children[2]) +
            "}";
        else if ("limit" === c.nodeType)
          b +=
            "\\lim_{" +
            k(c.children[0]) +
            " \\to " +
            k(c.children[1]) +
            "}{" +
            k(c.children[2]) +
            "}";
        else if ("matrix" === c.nodeType) {
          for (var b = b + "\\begin{bmatrix}", g = 0; g < c.rows; g++) {
            for (var e = 0; e < c.columns; e++)
              b += k(c.children[e + g * c.columns]) + " &";
            b = b.substring(0, b.length - 2) + "\\\\";
          }
          b += "\\end{bmatrix}";
        } else if ("defparts" === c.nodeType) {
          b += "\\begin{cases}";
          for (g = 0; g < c.parts; g++) b += k(c.children[g]) + " \\\\";
          b += "\\end{cases}";
        } else console.log("<<", a.children[d].nodeType, ">>");
      return b;
    }
    if (a.loadLib) return a;
    var d = Math.floor,
      f = Math.max,
      q = 2,
      c = !1,
      h;
    a.RTFNode = function (a, b, c, d) {
      this.evaluator = a;
      this.type = "rtfNode";
      this.value = b;
      this.nodeType = c;
      this.style = d;
      this.styleString = d.toString();
      this.color = d.textColor;
      this.underline = d.textUnderline;
      this.overline = d.textOverline;
      this.parent = null;
      this.children = [];
      switch (this.nodeType) {
        case "textBlock":
          this.draw = this.drawTextBlock;
          break;
        case "textLineBlock":
          this.draw = this.drawTextLineBlock;
          break;
        case "formula":
          this.draw = this.drawFormula;
          break;
        case "superIndex":
          this.draw = this.drawSuperIndex;
          break;
        case "subIndex":
          this.draw = this.drawSubIndex;
          break;
        case "dynamicText":
          this.draw = this.drawDynamicText;
          this.decimal_symbol = this.evaluator.parent.decimal_symbol;
          break;
        case "fraction":
          this.draw = this.drawFraction;
          break;
        case "numerator":
        case "denominator":
          this.draw = this.drawNumDen;
          break;
        case "radical":
          this.draw = this.drawRadical;
          break;
        case "limit":
          this.draw = this.drawLimit;
          break;
        case "integral":
          this.draw = this.drawIntegral;
          break;
        case "sum":
          this.draw = this.drawSum;
          break;
        case "matrix":
          this.draw = this.drawMatrix;
          break;
        case "defparts":
          this.draw = this.drawDefparts;
          break;
        case "text":
        case "newLine":
          this.draw = this.drawText;
          break;
        case "hyperlink":
          this.draw = this.drawHyperlink;
          break;
        case "mathSymbol":
          this.draw = this.drawMathSymbol;
          break;
        case "index":
        case "radicand":
        case "from":
        case "to":
        case "what":
        case "element":
          this.draw = this.drawGenericBlock;
          break;
        case "componentNumCtrl":
          this.draw = this.drawComponentNumCtrl;
          break;
        case "componentSpace":
          this.draw = this.drawComponentSpace;
      }
    };
    a.RTFNode.prototype.getRoot = function () {
      return null == this.parent ? this : this.parent.getRoot();
    };
    a.RTFNode.prototype.addChild = function (a) {
      a.parent = this;
      this.children.push(a);
    };
    var g = 0,
      b = 0,
      u = 0;
    a.RTFNode.prototype.getTextMetrics = function () {
      if ("textBlock" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        for (var d = 0, h = this.children.length; d < h; d++)
          this.children[d].getTextMetrics();
      } else if ("textLineBlock" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          this.getBlockMetric();
      else if ("newLine" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        var n = a.getFontMetrics(this.styleString);
        this.baseline = n.baseline;
        this.descent = n.descent;
        this.ascent = n.ascent;
        this.w = 0;
        this.h = n.h;
      } else if ("text" == this.nodeType || "dynamicText" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        n = a.getFontMetrics(this.styleString);
        this.baseline = n.baseline;
        this.descent = n.descent;
        this.ascent = n.ascent;
        var d = this.value,
          k;
        "string" != typeof this.value &&
          ((h =
            void 0 == this.decimals ? q : this.evaluator.eval(this.decimals)),
          (k = void 0 == this.fixed ? c : this.fixed),
          (d = this.evaluator.eval(this.value, h, k)),
          parseFloat(d).toString() === d.toString() &&
            ((d = k
              ? parseFloat(d).toFixed(h)
              : a.removeNeedlessDecimals(parseFloat(d).toFixed(h))),
            (d = ("" + d).replace(".", this.decimal_symbol))),
          (d += " "));
        this.w = a.getTextWidth(d, this.styleString);
        this.h = n.h;
      } else if ("formula" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          this.getBlockMetric();
      else if ("hyperlink" === this.nodeType) {
        d = a.getFontMetrics(this.styleString);
        this.baseline = d.baseline;
        this.descent = d.descent;
        this.ascent = d.ascent;
        this.w = a.getTextWidth(this.value, this.styleString);
        this.h = d.h;
        this.clickCacher = document.createElement("div");
        this.clickCacher.setAttribute(
          "style",
          "position: absolute; width: " +
            this.w +
            "px; height: " +
            this.h +
            "px; cursor: pointer;"
        );
        var x = new a.OpenURL(this.evaluator.parent, this.URL),
          e = this;
        this.clickCacher.addEventListener("click", function (a) {
          e.click = !0;
          x.actionExec();
        });
      } else if ("superIndex" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          (h = g),
          (n = b),
          (k = u),
          (d = a.getFontMetrics(this.styleString)),
          this.getBlockMetric(),
          0 > this.h &&
            ((this.ascent = d.ascent),
            (this.descent = d.descent),
            (this.h = this.ascent + this.descent),
            (this.w = 1.5 * this.spaceWidth)),
          (d = k / 2 - n + this.h),
          (this.superIndexPos = d - this.ascent),
          (this.ascent = d),
          (this.descent = n),
          (this.baseline = this.ascent),
          (this.h = this.ascent + this.descent);
      else if ("subIndex" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          (h = g),
          (n = b),
          (k = u),
          (d = a.getFontMetrics(this.styleString)),
          this.getBlockMetric(),
          0 > this.h &&
            ((this.ascent = d.ascent),
            (this.descent = d.descent),
            (this.h = this.ascent + this.descent),
            (this.w = 1.5 * this.spaceWidth)),
          (this.subIndexPos = n + 1),
          (this.ascent = h),
          (this.descent = this.subIndexPos + this.descent),
          (this.baseline = this.ascent),
          (this.h = this.ascent + this.descent);
      else if ("fraction" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        var p = this.children[0],
          l = this.children[1],
          d = a.getFontMetrics(p.styleString);
        p.getBlockMetric();
        l.getBlockMetric();
        h = g;
        n = b;
        k = u;
        0 > p.h && ((p.h = d.h), (p.w = this.spaceWidth));
        0 > l.h && ((l.h = d.h), (l.w = this.spaceWidth));
        this.h = p.h + l.h - 1;
        this.ascent = p.h + Math.round(k / 2) - n;
        this.descent = this.h - this.ascent;
        this.baseline = this.ascent;
        this.w = f(p.w, l.w) + this.spaceWidth + 8;
      } else if ("radical" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        n = this.children[0].style.clone();
        if (1 === this.children.length)
          (this.children[1] = new a.RTFNode(
            this.evaluator,
            " ",
            "radicand",
            n
          )),
            this.children[1].addChild(this.children[0]),
            (this.children[0] = new a.RTFNode(this.evaluator, " ", "index", n));
        else if (
          "index" !== this.children[0].nodeType ||
          "radicand" !== this.children[1].nodeType
        ) {
          k = new a.RTFNode(this.evaluator, "", "radicand", n);
          d = 0;
          for (h = this.children.length; d < h; d++)
            k.addChild(this.children[d]);
          this.children = [];
          this.children[0] = new a.RTFNode(this.evaluator, "", "index", n);
          this.children[1] = k;
        }
        d = this.children[0];
        h = this.children[1];
        0 >= d.children.length &&
          ((n = this.style.clone()),
          (n.fontSize = parseInt(n.fontSize - 0.2 * n.fontSize)),
          d.addChild(new a.RTFNode(this.evaluator, " ", "text", n)));
        0 >= h.children.length &&
          h.addChild(
            new a.RTFNode(this.evaluator, " ", "text", this.style.clone())
          );
        d.getBlockMetric();
        h.getBlockMetric();
        this.ascent =
          h.h / 2 < d.h ? h.h / 2 + d.h + 2 - h.descent : h.ascent + 4;
        this.descent = h.descent;
        this.baseline = this.ascent;
        this.h = this.ascent + this.descent;
        this.w = d.w + h.w + 4 * this.spaceWidth;
      } else if ("sum" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          (h = g),
          (n = b),
          (k = u),
          (n = this.children[0]),
          (h = this.children[1]),
          (k = this.children[2]),
          n.getBlockMetric(),
          h.getBlockMetric(),
          k.getBlockMetric(),
          -1 == n.ascent &&
            ((p = a.getFontMetrics(n.styleString)),
            (n.ascent = p.ascent),
            (n.descent = p.descent),
            (n.h = p.h)),
          -1 == h.ascent &&
            ((p = a.getFontMetrics(h.styleString)),
            (h.ascent = p.ascent),
            (h.descent = p.descent),
            (h.h = p.h)),
          (d = a.getFontMetrics(this.styleString)),
          (this.ascent =
            d.h + h.h > k.ascent ? d.h - d.descent + h.h : k.ascent),
          (this.descent = n.h > k.descent ? n.h + d.descent : k.descent),
          (this.baseline = this.ascent),
          (this.h = this.ascent + this.descent),
          (d = this.style.clone()),
          (d.fontType = "Times New Roman"),
          (d.Bold = "bold"),
          (d = d.toString()),
          (d = a.getTextWidth(String.fromCharCode(8721), d)),
          (this.w = f(n.w, h.w, d) + f(k.w, this.spaceWidth) + this.spaceWidth);
      else if ("integral" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          (h = g),
          (n = b),
          (k = u),
          (n = this.children[0]),
          (h = this.children[1]),
          (k = this.children[2]),
          n.getBlockMetric(),
          h.getBlockMetric(),
          k.getBlockMetric(),
          -1 == n.ascent &&
            ((p = a.getFontMetrics(n.styleString)),
            (n.ascent = p.ascent),
            (n.descent = p.descent),
            (n.h = p.h)),
          -1 == h.ascent &&
            ((p = a.getFontMetrics(h.styleString)),
            (h.ascent = p.ascent),
            (h.descent = p.descent),
            (h.h = p.h)),
          (d = a.getFontMetrics(this.styleString)),
          (this.ascent =
            d.h + h.h > k.ascent ? d.h - d.descent + h.h : k.ascent),
          (this.descent = n.h > k.descent ? n.h + d.descent : k.descent),
          (this.baseline = this.ascent),
          (this.h = this.ascent + this.descent),
          (d = this.style.clone()),
          (d.fontSize *= 1.5),
          (d.fontType = "Times New Roman"),
          (d.Bold = "bold"),
          (d = d.toString()),
          (d = a.getTextWidth(String.fromCharCode(8747), d)),
          (this.w =
            f(n.w, h.w, d) + f(k.w, this.spaceWidth) + 2 * this.spaceWidth);
      else if ("limit" == this.nodeType)
        (this.spaceWidth = a.getTextWidth(" ", this.styleString)),
          (h = g),
          (n = b),
          (k = u),
          (n = this.children[0]),
          (h = this.children[1]),
          (k = this.children[2]),
          (d = a.getFontMetrics(this.styleString)),
          n.getBlockMetric(),
          h.getBlockMetric(),
          k.getBlockMetric(),
          -1 == n.ascent &&
            ((p = a.getFontMetrics(n.styleString)),
            (n.ascent = p.ascent),
            (n.descent = p.descent),
            (n.h = p.h)),
          -1 == h.ascent &&
            ((p = a.getFontMetrics(h.styleString)),
            (h.ascent = p.ascent),
            (h.descent = p.descent),
            (h.h = p.h)),
          -1 == k.ascent &&
            ((p = a.getFontMetrics(k.styleString)),
            (k.ascent = p.ascent),
            (k.descent = p.descent),
            (k.h = p.h)),
          (this.ascent = k.ascent),
          (this.descent = f(d.h, k.descent)),
          (this.baseline = this.ascent),
          (this.h = this.ascent + this.descent),
          (d = a.getTextWidth(
            " " + String.fromCharCode(8594),
            this.styleString
          )),
          0 == n.w && (n.w = this.spaceWidth),
          0 == h.w && (h.w = this.spaceWidth),
          0 == k.w && (k.w = this.spaceWidth),
          (this.w = h.w + n.w + k.w + d + this.spaceWidth);
      else if ("matrix" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        d = a.getFontMetrics(this.styleString);
        h = g;
        n = b;
        k = u;
        k = d.ascent;
        for (
          var p = d.descent,
            l = d.h,
            w = this.spaceWidth,
            y,
            B,
            d = 0,
            h = this.children.length;
          d < h;
          d++
        )
          this.children[d].getBlockMetric(),
            (y = this.children[d].h),
            (B = this.children[d].w),
            l < y &&
              ((l = y),
              (k = this.children[d].ascent),
              (p = this.children[d].descent)),
            w < B && (w = B);
        this.childWidth = w + 2 * this.spaceWidth;
        this.childHeight = l;
        this.childAscent = k;
        this.childDescent = p;
        this.h = this.rows * l;
        this.ascent = this.h / 2;
        this.descent = this.h / 2;
        this.w = this.columns * this.childWidth + this.spaceWidth;
      } else if ("defparts" == this.nodeType) {
        this.spaceWidth = a.getTextWidth(" ", this.styleString);
        d = a.getFontMetrics(this.styleString);
        h = g;
        n = b;
        k = u;
        k = d.ascent;
        p = d.descent;
        l = d.h;
        w = this.spaceWidth;
        d = 0;
        for (h = this.children.length; d < h; d++)
          this.children[d].getBlockMetric(),
            (y = this.children[d].h),
            (B = this.children[d].w),
            l < y &&
              ((l = y),
              (k = this.children[d].ascent),
              (p = this.children[d].descent)),
            w < B && (w = B);
        this.childWidth = w + 2 * this.spaceWidth;
        this.childHeight = l;
        this.childAscent = k;
        this.childDescent = p;
        this.h = this.parts * l;
        this.ascent = this.h / 2 + n;
        this.descent = this.h - this.ascent;
        this.w = w + this.spaceWidth / 2;
      } else
        "mathSymbol" == this.nodeType
          ? ((this.spaceWidth = a.getTextWidth(" ", this.styleString)),
            (n = a.getFontMetrics(this.styleString)),
            (this.baseline = n.baseline),
            (this.descent = n.descent),
            (this.ascent = n.ascent),
            (this.w =
              a.getTextWidth(this.value, this.styleString) + this.spaceWidth),
            (this.h = n.h))
          : "componentNumCtrl" == this.nodeType
          ? ((this.spaceWidth = a.getTextWidth(" ", this.styleString)),
            (n = a.getFontMetrics(this.styleString)),
            (this.componentNumCtrl = this.evaluator.parent.getControlByCId(
              this.value
            )),
            (this.baseline = n.baseline - 2),
            (this.descent = n.descent - 2),
            (this.ascent = n.ascent + 2),
            (this.h = this.componentNumCtrl.h || 1),
            (this.w = this.componentNumCtrl.w || 1))
          : "componentSpace" == this.nodeType
          ? ((this.spaceWidth = a.getTextWidth(" ", this.styleString)),
            (this.componentSpace = this.evaluator.parent.getSpaceByCId(
              this.value
            )),
            (this.h = this.ascent = this.descent = this.baseline = 0),
            (this.w = this.componentSpace.w))
          : console.log("Element i=unknown", this.nodeType);
    };
    a.RTFNode.prototype.getBlockMetric = function () {
      this.w = 0;
      for (var a = -1, c = -1, d, f = 0, h = this.children.length; f < h; f++) {
        d = this.children[f];
        d.getTextMetrics();
        childAscent = d.ascent;
        childDescent = d.descent;
        this.w += d.w;
        var e = childDescent;
        d = d.h;
        g = childAscent;
        b = e;
        u = d;
        c < childAscent && (c = childAscent);
        a < childDescent && (a = childDescent);
      }
      this.ascent = c;
      this.descent = a;
      this.baseline = this.ascent;
      this.h = this.ascent + this.descent;
    };
    a.RTFNode.prototype.drawTextBlock = function (a, b, d, g, f, e, k, l) {
      h = l;
      this.stableWidth || ((q = g), (c = f), this.getTextMetrics());
      k = k ? -this.children[0].ascent : 0;
      f = g = 0;
      for (e = this.children.length; f < e; f++)
        0 < f && (g += this.children[f - 1].h),
          this.children[f].draw(a, b + 0, d + k + g);
    };
    a.RTFNode.prototype.drawTextLineBlock = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        (a.strokeStyle = h),
          (a.fillStyle = h),
          0 < g &&
            ((d += this.children[g - 1].w),
            "formula" == this.children[g - 1].nodeType &&
              (d += 2 * this.children[g - 1].spaceWidth)),
          this.children[g].draw(a, b + d, c + this.baseline);
    };
    a.RTFNode.prototype.drawFormula = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        0 < g && (d += this.children[g - 1].w),
          this.children[g].draw(a, b + this.spaceWidth + d, c);
    };
    a.RTFNode.prototype.drawText = function (a, b, c) {
      null != this.color && (a.fillStyle = this.color);
      a.font = this.styleString;
      a.textAlign = "start";
      a.textBaseline = "alphabetic";
      a.fillText(this.value, b - 1, c);
      if (this.underline) {
        var d = "bold" == this.style.textBold,
          g = d ? 1 : 0.5;
        a.lineWidth = d ? 2 : 1;
        null != this.color && (a.strokeStyle = this.color);
        a.beginPath();
        a.moveTo(b - 1, parseInt(c + this.descent / 2) + g);
        a.lineTo(b - 1 + this.w, parseInt(c + this.descent / 2) + g);
        a.stroke();
      }
      this.overline &&
        ((g = (d = "bold" == this.style.textBold) ? 2 : 1.5),
        (a.lineWidth = d ? 2 : 1),
        null != this.color && (a.strokeStyle = this.color),
        a.beginPath(),
        a.moveTo(b - 1, parseInt(c - this.ascent) + g),
        a.lineTo(b - 1 + this.w, parseInt(c - this.ascent) + g),
        a.stroke());
    };
    a.RTFNode.prototype.drawDynamicText = function (b, g, f) {
      var h = d(0.5 * this.spaceWidth),
        k = void 0 == this.decimals ? q : this.evaluator.eval(this.decimals),
        e = void 0 == this.fixed ? c : this.fixed,
        p = this.evaluator.eval(this.value);
      parseFloat(p).toString() === p.toString() &&
        ((p = e
          ? parseFloat(p).toFixed(k)
          : a.removeNeedlessDecimals(parseFloat(p).toFixed(k))),
        (p = ("" + p).replace(".", this.decimal_symbol)));
      null != this.color && (b.fillStyle = this.color);
      b.font = this.styleString;
      b.textAlign = "start";
      b.textBaseline = "alphabetic";
      this.w = a.getTextWidth(p, this.styleString);
      b.fillText(p, h + g, f);
      this.underline &&
        ((e = (k = "bold" == this.style.textBold) ? 1 : 0.5),
        (b.lineWidth = k ? 2 : 1),
        null != this.color && (b.strokeStyle = this.color),
        b.beginPath(),
        b.moveTo(h + g - 1, parseInt(f + this.descent / 2) + e),
        b.lineTo(h + g - 1 + this.w, parseInt(f + this.descent / 2) + e),
        b.stroke());
      this.overline &&
        ((e = (k = "bold" == this.style.textBold) ? 2 : 1.5),
        (b.lineWidth = k ? 2 : 1),
        null != this.color && (b.strokeStyle = this.color),
        b.beginPath(),
        b.moveTo(h + g - 1, parseInt(f - this.ascent) + e),
        b.lineTo(h + g - 1 + this.w, parseInt(f - this.ascent) + e),
        b.stroke());
      this.w += 2 * h;
    };
    a.RTFNode.prototype.drawHyperlink = function (a, b, c) {
      this.clickCacher.parentNode ||
        (a.canvas.nextSibling.className
          ? a.canvas.parentNode.insertBefore(
              this.clickCacher,
              a.canvas.nextSibling.nextSibling
            )
          : a.canvas.parentNode.insertBefore(
              this.clickCacher,
              a.canvas.nextSibling
            ),
        (this.clickCacher.style.left = b - 2 + "px"),
        (this.clickCacher.style.top = c - this.ascent - 2 + "px"));
      a.save();
      this.click
        ? ((a.fillStyle = "red"), (a.strokeStyle = "red"))
        : ((a.fillStyle = "blue"), (a.strokeStyle = "blue"));
      a.font = this.styleStr;
      a.textAlign = "start";
      a.textBaseline = "alphabetic";
      a.fillText(this.value, b - 1, c);
      var d = "bold" == this.style.textBold,
        g = d ? 1 : 0.5;
      a.lineWidth = d ? 2 : 1;
      a.beginPath();
      a.moveTo(b - 1, Math.ceil(c + this.descent / 2) + g - 2);
      a.lineTo(b - 1 + this.w, Math.ceil(c + this.descent / 2) + g - 2);
      a.stroke();
      a.restore();
    };
    a.RTFNode.prototype.drawRadical = function (a, b, c) {
      var g = d(this.spaceWidth);
      this.children[0].draw(
        a,
        b,
        d(
          c +
            this.children[1].descent -
            this.children[1].h / 2 -
            this.children[0].descent
        )
      );
      this.children[1].draw(a, b + 1.5 * g + this.children[0].w, c);
      a.lineWidth = 1;
      null != this.color && (a.strokeStyle = this.color);
      a.beginPath();
      a.moveTo(b, d(c + this.children[1].descent - this.children[1].h / 2));
      a.lineTo(
        b + this.children[0].w,
        d(c + this.children[1].descent - this.children[1].h / 2)
      );
      a.lineTo(b + this.children[0].w + 0.5 * g, c + this.children[1].descent);
      a.lineTo(b + this.children[0].w + 1 * g, c - this.children[1].ascent);
      a.lineTo(
        b + this.children[0].w + 2 * g + this.children[1].w,
        c - this.children[1].ascent
      );
      a.stroke();
    };
    a.RTFNode.prototype.drawFraction = function (a, b, c) {
      this.children[0].draw(
        a,
        b + (this.w - this.children[0].w) / 2,
        c - this.ascent
      );
      this.children[1].draw(
        a,
        b + (this.w - this.children[1].w) / 2,
        c - this.ascent + this.children[0].h - 1
      );
      var g = d(0.5 * this.spaceWidth);
      a.lineWidth = 1;
      null != this.color && (a.strokeStyle = this.color);
      a.beginPath();
      a.moveTo(b + g, parseInt(c - this.ascent + this.children[0].h) - 0.5);
      a.lineTo(
        b - g + this.w - 1,
        parseInt(c - this.ascent + this.children[0].h) - 0.5
      );
      a.stroke();
    };
    a.RTFNode.prototype.drawNumDen = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        0 < g && (d += this.children[g - 1].w),
          this.children[g].draw(a, b + d, c + this.baseline);
    };
    a.RTFNode.prototype.drawSubIndex = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        0 < g && (d += this.children[g - 1].w),
          this.children[g].draw(a, b + d, c + this.subIndexPos);
    };
    a.RTFNode.prototype.drawSuperIndex = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        0 < g && (d += this.children[g - 1].w),
          this.children[g].draw(a, b + d, c - this.superIndexPos);
    };
    a.RTFNode.prototype.drawLimit = function (b, c, d) {
      var g = a.getFontMetrics(this.styleString),
        f = " " + String.fromCharCode(8594),
        e = a.getTextWidth(f, this.styleString);
      this.children[0].draw(b, c, d + g.descent + this.children[0].ascent);
      this.children[1].draw(
        b,
        c + this.children[0].w + e,
        d + g.descent + this.children[1].ascent
      );
      this.children[2].draw(
        b,
        c + e + this.children[0].w + this.children[1].w,
        d
      );
      null != this.color && (b.fillStyle = this.color);
      b.font = this.styleString;
      b.textAlign = "start";
      b.textBaseline = "alphabetic";
      b.fillText("l\u00edm", c + this.children[0].w, d);
      b.fillText(
        f,
        c + this.children[0].w,
        d + g.descent + this.children[0].ascent
      );
    };
    a.RTFNode.prototype.drawIntegral = function (b, c, g) {
      var h = this.style.clone();
      h.fontSize *= 1.5;
      h.fontType = "Times New Roman";
      h.Bold = "bold";
      var h = h.toString(),
        k = a.getTextWidth(String.fromCharCode(8747), h),
        e = a.getFontMetrics(h),
        p = f(this.children[0].w, this.children[1].w, d(1.5 * k));
      this.children[0].draw(b, c + k, g + e.descent + this.children[0].ascent);
      this.children[1].draw(
        b,
        c + k + this.spaceWidth / 2,
        g - this.ascent + this.children[1].ascent
      );
      this.children[2].draw(b, c + p + k, g);
      null != this.color && (b.fillStyle = this.color);
      b.font = h;
      b.textAlign = "start";
      b.textBaseline = "alphabetic";
      b.fillText(String.fromCharCode(8747), c, g + e.descent / 2);
    };
    a.RTFNode.prototype.drawSum = function (b, c, g) {
      var h = this.style.clone();
      h.fontType = "Times New Roman";
      h.Bold = "bold";
      var h = h.toString(),
        k = a.getTextWidth(String.fromCharCode(8721), h),
        e = a.getFontMetrics(this.styleString),
        p = f(this.children[0].w, this.children[1].w, k);
      this.children[0].draw(
        b,
        c + (p - this.children[0].w) / 2,
        g + e.descent + this.children[0].ascent
      );
      this.children[1].draw(
        b,
        c + (p - this.children[1].w) / 2,
        g - e.ascent - this.children[1].descent
      );
      this.children[2].draw(b, c + p, g);
      null != this.color && (b.fillStyle = this.color);
      b.font = h;
      b.textAlign = "start";
      b.textBaseline = "alphabetic";
      b.fillText(String.fromCharCode(8721), c + d((p - k) / 2), g - 5);
    };
    a.RTFNode.prototype.drawMatrix = function (a, b, c) {
      for (var g, f, e = 0, h = this.children.length; e < h; e++)
        (g = e % this.columns),
          (f = d(e / this.columns)),
          this.children[e].draw(
            a,
            2 * this.spaceWidth + b + g * this.childWidth,
            c - this.ascent + this.childAscent + f * this.childHeight
          );
      a.lineWidth = 1;
      null != this.color && (a.strokeStyle = this.color);
      a.beginPath();
      a.moveTo(d(b + this.spaceWidth) + 0.5, c - this.ascent + 0.5);
      a.lineTo(d(b + this.spaceWidth / 2) + 0.5, c - this.ascent + 0.5);
      a.lineTo(d(b + this.spaceWidth / 2) + 0.5, c + this.descent + 0.5);
      a.lineTo(d(b + this.spaceWidth) + 0.5, c + this.descent + 0.5);
      a.moveTo(d(b + this.w - this.spaceWidth) - 0.5, c - this.ascent + 0.5);
      a.lineTo(
        d(b + this.w - this.spaceWidth / 2) - 0.5,
        c - this.ascent + 0.5
      );
      a.lineTo(
        d(b + this.w - this.spaceWidth / 2) - 0.5,
        c + this.descent + 0.5
      );
      a.lineTo(d(b + this.w - this.spaceWidth) - 0.5, c + this.descent + 0.5);
      a.stroke();
    };
    a.RTFNode.prototype.drawDefparts = function (a, b, c) {
      for (var d = 0, g = this.children.length; d < g; d++)
        this.children[d].draw(
          a,
          b + 3 * this.spaceWidth,
          c -
            this.ascent +
            this.childAscent +
            (d % this.parts) * this.childHeight
        );
      a.lineWidth = 1;
      null != this.color && (a.strokeStyle = this.color);
      a.beginPath();
      a.moveTo(parseInt(b + 2 * this.spaceWidth) + 0.5, c - this.ascent + 0.5);
      a.lineTo(parseInt(b + 2 * this.spaceWidth) - 4.5, c - this.ascent + 4.5);
      a.lineTo(
        parseInt(b + 2 * this.spaceWidth) - 4.5,
        c + this.descent - this.h / 2 - 4.5
      );
      a.lineTo(b - 0.5, c + this.descent - this.h / 2);
      a.lineTo(
        parseInt(b + 2 * this.spaceWidth) - 4.5,
        c + this.descent - this.h / 2 + 4.5
      );
      a.lineTo(parseInt(b + 2 * this.spaceWidth) - 4.5, c + this.descent - 4.5);
      a.lineTo(parseInt(b + 2 * this.spaceWidth) + 0.5, c + this.descent + 0.5);
      a.stroke();
    };
    a.RTFNode.prototype.drawMathSymbol = function (a, b, c) {
      a.lineWidth = 1;
      null != this.color &&
        ((a.strokeStyle = this.color), (a.fillStyle = this.color));
      a.beginPath();
      "(" == this.value
        ? ((a.font = this.styleString),
          (a.textAlign = "start"),
          (a.textBaseline = "alphabetic"),
          a.fillText("(", b, c))
        : ")" == this.value
        ? ((a.font = this.styleString),
          (a.textAlign = "start"),
          (a.textBaseline = "alphabetic"),
          a.fillText(")", b + this.spaceWidth, c))
        : ((a.font = this.styleString),
          (a.textAlign = "center"),
          (a.textBaseline = "alphabetic"),
          a.fillText(this.value, b + this.w / 2, c));
    };
    a.RTFNode.prototype.drawGenericBlock = function (a, b, c) {
      for (var d = 0, g = 0, e = this.children.length; g < e; g++)
        0 < g && (d += this.children[g - 1].w),
          this.children[g].draw(a, b + d, c);
    };
    a.RTFNode.prototype.drawComponentNumCtrl = function (a, b, c) {
      this.parent.getTextMetrics();
      this.componentNumCtrl.expresion = this.evaluator.parser.parse(
        "(" +
          b +
          "," +
          (c - this.ascent) +
          "," +
          this.componentNumCtrl.w +
          "," +
          this.componentNumCtrl.h +
          ")"
      );
    };
    a.RTFNode.prototype.drawComponentSpace = function (a, b, c) {
      this.getTextMetrics();
      this.componentSpace.xExpr = this.evaluator.parser.parse(b.toString());
      this.componentSpace.yExpr = this.evaluator.parser.parse(
        (c - this.parent.ascent).toString()
      );
    };
    a.RTFNode.prototype.draw = function (a, b, c) {
      console.log(">>> Dibujo desconocido ", this.nodeType);
    };
    a.RTFNode.prototype.toHTML = function (a) {
      var b = "";
      if ("textLineBlock" === this.nodeType || "textBlock" === this.nodeType)
        for (var c = 0, d = this.children.length; c < d; c++)
          b += this.children[c].toHTML(a);
      else
        "text" === this.nodeType
          ? (b =
              "<span " +
              this.style.toCSS() +
              ">" +
              this.value
                .replace(/ {2}/g, "&nbsp;&nbsp;")
                .replace(/&nbsp; /g, "&nbsp;") +
              "</span>")
          : "newLine" === this.nodeType
          ? (b =
              "<span " +
              this.style.toCSS() +
              ">" +
              this.value +
              "<br /></span>")
          : "hyperlink" === this.nodeType
          ? (b =
              "<span " +
              this.style.toCSS() +
              "> <a target='_blank' href='" +
              this.URL +
              "'>" +
              this.value +
              "</a></span>")
          : "formula" === this.nodeType
          ? (b =
              "<span " +
              this.style.toCSS() +
              "> \\( \\displaystyle " +
              k(this) +
              "\\) </span>")
          : "componentSpace" === this.nodeType
          ? (a.spaces.push({
              cID: "cID_" + this.value,
              value: this.componentSpace,
            }),
            (b =
              "<div style='display:inline-block; vertical-align:top; width:" +
              this.componentSpace.w +
              "px; height:0px;' id='cID_" +
              this.value +
              "'></div>"))
          : "componentNumCtrl" === this.nodeType
          ? (a.ctrs.push({
              cID: "cID_" + this.value,
              value: this.componentNumCtrl,
            }),
            (b =
              "<div style='display:inline-block; vertical-align:middle; width:" +
              this.componentNumCtrl.w +
              "px; height:" +
              this.componentNumCtrl.h +
              "px;' id='cID_" +
              this.value +
              "'></div>"))
          : console.log(">>>", this, "<<<");
      return b;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = String.fromCharCode,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v;
    a.RTFTokenizer = function () {};
    a.RTFTokenizer.prototype.tokenize = function (a) {
      if (a)
        a = a
          .replace(/\&gt;/g, ">")
          .replace(/\&lt;/g, "<")
          .replace(/\&quote;/g, "''")
          .replace(/\&squot;/g, "'")
          .replace(/\\rquote /g, "'")
          .replace(/\\endash /g, "-")
          .replace(/\n/g, " ")
          .replace(/\r/g, "")
          .replace(/\\uc(\d+) /g, "")
          .replace(/\\uc(\d+)/g, "");
      else return [];
      d = [];
      f = a.length;
      d = [];
      q = "";
      h = c = 0;
      b = a.charAt(0);
      u = !1;
      for (m = "text"; c < f; )
        (g = b),
          (b = a.charAt(c + 1)),
          u
            ? "\\" === b || "{" === b || "}" === b || " " === b || ";" === b
              ? ((u = !1),
                (q += g),
                " " === b ? (c++, (b = a.charAt(c + 1)), (v = !0)) : (v = !1),
                (r = q.match(/^\'([0-9a-f]{2})/))
                  ? ((n = ""),
                    "text" === m && (n = d.pop().value),
                    (q = n += k(parseInt(r[1], 16)) + q.substring(3)))
                  : (r = q.match(/^u[0-9]+/))
                  ? ((n = ""),
                    "text" === m && (n = d.pop().value),
                    (q = n += k(r[0].substring(1))))
                  : ("{" === q || "}" === q || "\\" == g
                      ? (d.push({ type: "text", value: q + (v ? " " : "") }),
                        (m = "text"))
                      : (d.push({ type: "controlWord", value: q }),
                        (m = "controlWord")),
                    (q = "")))
              : "{" == g || "}" == g || "\\" == g
              ? ((u = !1), d.push({ type: "text", value: g }), (m = "text"))
              : (q += g)
            : "\\" === g
            ? ((u = !0),
              "" !== q && (d.push({ type: "text", value: q }), (m = "text")),
              (q = ""))
            : "{" === g
            ? (h++,
              "" !== q && d.push({ type: "text", value: q }),
              (q = ""),
              d.push({ type: "openBlock", value: h }),
              (m = "openBlock"))
            : "}" === g
            ? ("" !== q && d.push({ type: "text", value: q }),
              (q = ""),
              d.push({ type: "closeBlock", value: h }),
              (m = "closeBlock"),
              h--)
            : (q += g),
          c++;
      "" !== q && d.push({ type: "text", value: q });
      return d;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k = Math.max,
      d,
      f,
      q,
      c,
      h,
      g,
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N;
    a.RTFParser = function (b) {
      this.evaluator = b;
      this.tokenizer = new a.RTFTokenizer();
    };
    a.RTFParser.prototype.parse = function (z) {
      z = d = this.tokenizer.tokenize(z);
      for (var M = [], L = !1, O = !1, Q = [], P = 0, V = z.length; P < V; P++)
        if (
          ("openBlock" == z[P].type && Q.push(z[P].value),
          "closeBlock" == z[P].type && (Q.pop(), 0 >= Q.length && (L = !1)),
          "controlWord" != z[P].type ||
            ("expr" != z[P].value && "decimals" != z[P].value) ||
            (O = !0),
          "controlWord" == z[P].type && "mjaformula" == z[P].value && (L = !0),
          "text" == z[P].type && L && !O)
        ) {
          for (
            var U = 0, R = z[P].value, S = "", T = 0, ca = R.length;
            T < ca;
            T++
          )
            if (
              "(" == R.charAt(T) ||
              ")" == R.charAt(T) ||
              "+" == R.charAt(T) ||
              "-" == R.charAt(T) ||
              "*" == R.charAt(T) ||
              "=" == R.charAt(T)
            )
              (S = R.substring(U, T)),
                "" != S && M.push({ type: "text", value: S }),
                M.push({ type: R.charAt(T), value: R.charAt(T) }),
                (U = T + 1);
          S = R.substring(U, T);
          "" != S && M.push({ type: "text", value: S });
        } else M.push(z[P]), "text" == z[P].type && O && (O = !1);
      d = M;
      f = {};
      c = 2;
      if ("openBlock" == d[0].type && "fonttbl" == d[1].value) {
        for (q = d[0].value; "closeBlock" != d[c].type && d[c].value != q; )
          (f[d[c].value] = d[c + 2].value.substring(
            0,
            d[c + 2].value.length - 1
          )),
            (c += 3);
        c++;
      }
      h = {};
      g = 0;
      if ("openBlock" == d[c].type && "colortbl" == d[c + 1].value) {
        q = d[c++].value;
        for (c++; "closeBlock" != d[c].type && d[c].value != q; )
          (b = parseInt(d[c++].value.substring(3)).toString(16)),
            (u = parseInt(d[c++].value.substring(5)).toString(16)),
            (m = parseInt(d[c++].value.substring(4)).toString(16)),
            ";" === d[c].value && c++,
            (h[g++] =
              "#" +
              (2 > b.length ? "0" + b : b) +
              (2 > u.length ? "0" + u : u) +
              (2 > m.length ? "0" + m : m));
        c++;
      }
      r = new a.RTFNode(this.evaluator, "", "textBlock", "", !1, "");
      n = new a.RTFNode(this.evaluator, "", "textLineBlock", "", !1, "");
      r.addChild(n);
      e = x = v = null;
      E = B = y = w = l = p = !1;
      D = [new a.FontStyle(20, "Arial", "", "", !1, !1, null)];
      F = D[0];
      H = !0;
      K = G = -1;
      C = [];
      N = I = J = A = !1;
      z = c;
      for (M = d.length; z < M; z++)
        if ("controlWord" == d[z].type && f[d[z].value])
          F.fontType = f[d[z].value];
        else if ("controlWord" == d[z].type && d[z].value.match(/^fs(\d+)/))
          F.fontSize = parseInt(d[z].value.match(/^fs(\d+)/)[1] / 2);
        else if ("controlWord" == d[z].type && "b" == d[z].value)
          F.textBold = "bold";
        else if ("controlWord" == d[z].type && "b0" == d[z].value)
          F.textBold = "";
        else if ("controlWord" == d[z].type && "i" == d[z].value)
          F.textItalic = "oblique";
        else if ("controlWord" == d[z].type && "i0" == d[z].value)
          F.textItalic = "";
        else if ("controlWord" == d[z].type && "ul" == d[z].value)
          F.textUnderline = !0;
        else if ("controlWord" == d[z].type && "ulnone" == d[z].value)
          F.textUnderline = !1;
        else if ("controlWord" == d[z].type && "ol" == d[z].value)
          F.textOverline = !0;
        else if ("controlWord" == d[z].type && "olnone" == d[z].value)
          F.textOverline = !1;
        else if ("controlWord" == d[z].type && d[z].value.match(/^cf(\d+)/))
          (F.textColor = h[parseInt(d[z].value.substring(2))]),
            0 < C.length && (C[C.length - 1].style.textColor = F.textColor);
        else if ("openBlock" == d[z].type)
          (G = d[z].value), (F = F.clone()), D.push(F), C.push(null);
        else if ("closeBlock" == d[z].type)
          d[z].value == K && ((K = -1), (p = !1), (n = n.parent)),
            D.pop(),
            (F = D[D.length - 1]),
            C.pop();
        else if ("controlWord" == d[z].type && "par" == d[z].value) {
          n.addChild(new a.RTFNode(this.evaluator, "", "newLine", F.clone()));
          r = new a.RTFNode(this.evaluator, "", "textLineBlock", F.clone());
          if ("textBlock" != n.nodeType)
            for (n = n.parent; "textBlock" != n.nodeType; ) n = n.parent;
          n.addChild(r);
          n = r;
        } else if ("controlWord" == d[z].type && "mjaformula" == d[z].value)
          (A = !0),
            (K = G),
            (p = !0),
            (r = new a.RTFNode(this.evaluator, "", "formula", F.clone())),
            n.addChild(r),
            (n = r),
            (C[C.length - 1] = r);
        else if (
          "controlWord" == d[z].type &&
          ("fraction" == d[z].value ||
            "radicand" == d[z].value ||
            "radical" == d[z].value ||
            "what" == d[z].value ||
            "sum" == d[z].value ||
            "integral" == d[z].value ||
            "limit" == d[z].value)
        )
          (L = C[C.length - 2].style.clone()),
            (r = new a.RTFNode(this.evaluator, "", d[z].value, L)),
            C[C.length - 2].addChild(r),
            (C[C.length - 1] = r);
        else if (
          ("controlWord" == d[z].type && "index" == d[z].value) ||
          "to" == d[z].value ||
          "from" == d[z].value
        )
          (L = C[C.length - 2].style.clone()),
            (L.fontSize = k(parseInt(L.fontSize - 0.2 * L.fontSize), 8)),
            (r = new a.RTFNode(this.evaluator, "", d[z].value, L)),
            C[C.length - 2].addChild(r),
            (C[C.length - 1] = r);
        else if (
          "controlWord" == d[z].type &&
          ("num" == d[z].value || "den" == d[z].value)
        )
          (L = C[C.length - 2].style.clone()),
            (L.fontSize = k(Math.round(L.fontSize - 0.1 * L.fontSize), 8)),
            "num" == d[z].value
              ? (r = new a.RTFNode(this.evaluator, "", "numerator", L))
              : "den" == d[z].value &&
                (r = new a.RTFNode(this.evaluator, "", "denominator", L)),
            C[C.length - 2].addChild(r),
            (C[C.length - 1] = r);
        else if (
          "controlWord" == d[z].type &&
          ("subix" == d[z].value || "supix" == d[z].value)
        )
          (L = C[C.length - 2].style.clone()),
            (L.fontSize = k(Math.floor(L.fontSize - L.fontSize / 3), 8)),
            "subix" == d[z].value
              ? (r = new a.RTFNode(this.evaluator, "", "subIndex", L))
              : "supix" == d[z].value &&
                (r = new a.RTFNode(this.evaluator, "", "superIndex", L)),
            (r.originalStyle = C[C.length - 2].style.clone()),
            C[C.length - 2].addChild(r),
            (C[C.length - 1] = r);
        else if (
          "controlWord" == d[z].type &&
          ("defparts" == d[z].value ||
            "matrix" == d[z].value ||
            "element" == d[z].value)
        )
          (L = C[C.length - 2].style.clone()),
            (r = new a.RTFNode(this.evaluator, "", d[z].value, L)),
            C[C.length - 2].addChild(r),
            (C[C.length - 1] = r),
            "defparts" == d[z].value
              ? (e = r)
              : "matrix" == d[z].value && (x = r);
        else if ("controlWord" == d[z].type && "parts" == d[z].value) E = !0;
        else if ("text" == d[z].type && E)
          (e.parts = parseInt(d[z].value)), (E = !1);
        else if ("controlWord" == d[z].type && "rows" == d[z].value) y = !0;
        else if ("text" == d[z].type && y)
          (x.rows = parseInt(d[z].value)), (y = !1);
        else if ("controlWord" == d[z].type && "columns" == d[z].value) B = !0;
        else if ("text" == d[z].type && B)
          (x.columns = parseInt(d[z].value)), (B = !1);
        else if ("controlWord" == d[z].type && "expr" == d[z].value)
          (H = !1), (l = !0);
        else if ("controlWord" == d[z].type && "decimals" == d[z].value) w = !0;
        else if ("text" == d[z].type && w)
          (v.decimals = this.evaluator.parser.parse(d[z].value + "")), (w = !1);
        else if ("controlWord" == d[z].type && "fixed1" == d[z].value)
          v.fixed = !0;
        else if ("controlWord" == d[z].type && "fixed0" == d[z].value)
          v.fixed = !1;
        else if ("controlWord" != d[z].type || "component" != d[z].value)
          if ("controlWord" == d[z].type && "NumCtrl" == d[z].value) J = !0;
          else if ("controlWord" == d[z].type && "Space" == d[z].value) I = !0;
          else if ("controlWord" == d[z].type && "hyperlink" == d[z].value)
            N = !0;
          else if ("text" == d[z].type && N) {
            textContent = d[z].value.split("|")[0];
            L = F.clone();
            r = new a.RTFNode(this.evaluator, textContent, "hyperlink", L);
            r.URL = d[z].value.split("|")[1];
            if ("textLineBlock" != n.nodeType)
              for (n = n.parent; "textLineBlock" != n.nodeType; ) n = n.parent;
            n.addChild(r);
            N = !1;
          } else if ("text" == d[z].type && J)
            (r = new a.RTFNode(
              this.evaluator,
              d[z].value,
              "componentNumCtrl",
              F.clone()
            )),
              n.addChild(r),
              (J = !1);
          else if ("text" == d[z].type && I)
            (r = new a.RTFNode(
              this.evaluator,
              d[z].value,
              "componentSpace",
              F.clone()
            )),
              n.addChild(r),
              (I = !1);
          else if ("text" == d[z].type && l)
            (L = C[C.length - 2].style.clone()),
              (textContent = this.evaluator.parser.parse(d[z].value)),
              (r = new a.RTFNode(
                this.evaluator,
                textContent,
                "dynamicText",
                L
              )),
              C[C.length - 2].addChild(r),
              (v = C[C.length - 1] = r),
              (l = !1);
          else if ("text" == d[z].type && !l && !p) {
            textContent = d[z].value;
            r = new a.RTFNode(this.evaluator, textContent, "text", F.clone());
            if ("textLineBlock" != n.nodeType)
              for (n = n.parent; "textLineBlock" != n.nodeType; ) n = n.parent;
            n.addChild(r);
          } else if ("text" == d[z].type && !l && p)
            (textContent = d[z].value),
              (r = new a.RTFNode(
                this.evaluator,
                textContent,
                "text",
                C[C.length - 1].style.clone()
              )),
              C[C.length - 1].addChild(r);
          else if ("(" == d[z].type || ")" == d[z].type)
            (L = C[C.length - 1].style.clone()),
              (L.textItalic = ""),
              (r = new a.RTFNode(this.evaluator, d[z].type, "mathSymbol", L)),
              C[C.length - 1].addChild(r);
          else if (
            "+" == d[z].type ||
            "-" == d[z].type ||
            "*" == d[z].type ||
            "=" == d[z].type
          )
            (r = new a.RTFNode(
              this.evaluator,
              d[z].type,
              "mathSymbol",
              C[C.length - 1].style.clone()
            )),
              C[C.length - 1].addChild(r);
      if (null != n) {
        var W = n.getRoot();
        W.stableWidth = H;
        W.getTextMetrics();
        W.hasFormula = A;
      }
      return W;
    };
    a.FontStyle = function (a, b, c, d, e, g, f) {
      this.fontSize = a;
      this.fontType = b;
      this.textItalic = c;
      this.textBold = d;
      this.textUnderline = e;
      this.textOverline = g;
      this.textColor = f;
    };
    a.FontStyle.prototype.toString = function () {
      /arial/i.test(this.fontType)
        ? (this.fontType = "descartesJS_sansserif,Arial,Helvetica,Sans-serif")
        : /times/i.test(this.fontType)
        ? (this.fontType = "descartesJS_serif,'Times New Roman',Times,serif")
        : /courier/i.test(this.fontType) &&
          (this.fontType =
            "descartesJS_monospace,'Courier New',Courier,Monospace");
      return (
        this.textBold +
        " " +
        this.textItalic +
        " " +
        this.fontSize +
        "px " +
        this.fontType
      ).trim();
    };
    a.FontStyle.prototype.toCSS = function () {
      var a =
        'style="font-size:' +
        this.fontSize +
        "px; font-family:" +
        this.fontType +
        ";";
      this.textUnderline &&
        !this.textOverline &&
        (a += "text-decoration:underline;");
      !this.textUnderline &&
        this.textOverline &&
        (a += "text-decoration:overline;");
      this.textUnderline &&
        this.textOverline &&
        (a += "text-decoration:underline overline;");
      this.textBold &&
        !this.textItalic &&
        (a += "font-style:normal;font-weight:bold;");
      !this.textBold &&
        this.textItalic &&
        (a += "font-style:italic;font-weight:normal;");
      this.textBold &&
        this.textItalic &&
        (a += "font-style:italic;font-weight:bold;");
      this.textBold ||
        this.textItalic ||
        (a += "font-style:normal;font-weight:normal;");
      this.textColor && (a += "color:" + this.textColor + ";");
      return a + '"';
    };
    a.FontStyle.prototype.clone = function () {
      return new a.FontStyle(
        this.fontSize,
        this.fontType,
        this.textItalic,
        this.textBold,
        this.textUnderline,
        this.textOverline,
        this.textColor
      );
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h, g, b, u, m, r;
    a.Space = function (b, c) {
      this.parent = b;
      d = this.evaluator = this.parent.evaluator;
      f = d.parser;
      this.id = "";
      this.values = c;
      this.type = "R2";
      this.xExpr = f.parse("0");
      this.yExpr = f.parse("0");
      this.w = parseInt(b.container.width);
      this.h = parseInt(b.container.height);
      this.drawif = f.parse("1");
      this.fixed = 2 == b.version;
      this.scale = 48;
      this.Oy = this.Ox = 0;
      this.image = new Image();
      this.image.onload = function () {
        this.ready = 1;
      };
      this.imageSrc = "";
      this.bg_display = "topleft";
      this.background = new a.Color(
        /DescartesJS.class/i.test(b.code) || b.arquimedes ? "f0f8fa" : "ffffff"
      );
      this.net = 2 != b.version ? new a.Color("c0c0c0") : "";
      this.net10 = 2 != b.version ? new a.Color("808080") : "";
      this.axes = 2 != b.version ? new a.Color("808080") : "";
      this.text = new a.Color("ffafaf");
      this.numbers = !1;
      this.y_axis = this.x_axis = 2 != b.version ? "" : " ";
      this.sensitive_to_mouse_movements = !1;
      this.cID = "";
      this.mouse_y = this.mouse_x = 0;
      this.ctrs = [];
      this.graphicsCtr = [];
      this.graphics = [];
      this.backGraphics = [];
      this.zIndex = b.zIndex;
      this.plecaHeight = b.plecaHeight || 0;
      this.displaceRegionNorth = b.displaceRegionNorth || 0;
      this.displaceRegionWest = b.displaceRegionWest || 0;
      for (var g in c) c.hasOwnProperty(g) && (this[g] = c[g]);
      this.init();
    };
    a.Space.prototype.init = function () {
      k = this.parent;
      d = this.evaluator;
      q = this.id;
      this.displaceRegionNorth = k.displaceRegionNorth || 0;
      this.displaceRegionSouth = k.displaceRegionSouth || 0;
      this.displaceRegionEast = k.displaceRegionEast || 0;
      this.displaceRegionWest = k.displaceRegionWest || 0;
      b = parseInt(k.container.width);
      g = parseInt(k.container.height);
      void 0 != this.wExpr &&
        (this.w =
          (parseInt(b - this.displaceRegionWest - this.displaceRegionEast) *
            parseFloat(this.wExpr)) /
          100);
      void 0 != this.hExpr &&
        (this.h =
          (parseInt(g - this.displaceRegionNorth - this.displaceRegionSouth) *
            parseFloat(this.hExpr)) /
          100);
      void 0 != this.xPercentExpr &&
        (this.xExpr = d.parser.parse(
          (
            (parseInt(b - this.displaceRegionWest - this.displaceRegionEast) *
              parseFloat(this.xPercentExpr)) /
            100
          ).toString()
        ));
      void 0 != this.yPercentExpr &&
        (this.yExpr = d.parser.parse(
          (
            (parseInt(g - this.displaceRegionNorth - this.displaceRegionSouth) *
              parseFloat(this.yPercentExpr)) /
            100
          ).toString()
        ));
      this.x = d.eval(this.xExpr) + this.displaceRegionWest;
      this.y = d.eval(this.yExpr) + this.plecaHeight + this.displaceRegionNorth;
      this.container &&
        ((this.container.style.left = this.x + "px"),
        (this.container.style.top = this.y + "px"));
      0 <= this.y
        ? ((c = g - this.y), this.h > c && (this.h = c))
        : ((c = this.h + this.y), (this.h = c >= g ? g : c));
      0 <= this.x
        ? ((h = b - this.x), this.w > h && (this.w = h))
        : ((h = this.w + this.x), (this.w = h >= b ? b : h));
      ("" == this.imageSrc && /vacio.gif$/i.test(this.imageSrc.trim())) ||
        (this.image = k.getImage(this.imageSrc));
      this.OxExpr &&
        ((m = this.OxExpr),
        "%" === m[m.length - 1]
          ? (this.Ox = (this.w * parseFloat(m)) / 100)
          : ((u = parseFloat(m)), u != m && (u = 0), (this.Ox = u)));
      this.OyExpr &&
        ((r = this.OyExpr),
        "%" === r[r.length - 1]
          ? (this.Oy = (this.h * parseFloat(r)) / 100)
          : ((u = parseFloat(r)), u != r && (u = 0), (this.Oy = u)));
      "" !== this.id && 2 !== k.version
        ? (d.setVariable(q + "._w", this.w),
          d.setVariable(q + "._h", this.h),
          d.setVariable(q + ".escala", this.scale),
          d.setVariable(q + ".Ox", this.Ox),
          d.setVariable(q + ".Oy", this.Oy),
          d.setVariable(q + ".mouse_x", 0),
          d.setVariable(q + ".mouse_y", 0),
          d.setVariable(q + ".mouse_pressed", 0),
          d.setVariable(q + ".mouse_clicked", 0),
          d.setVariable(q + ".clic_izquierdo", 0))
        : ((u = d.getVariable("_w")),
          void 0 === u && (u = this.w),
          d.setVariable("_w", u),
          (u = d.getVariable("_h")),
          void 0 === u && (u = this.h),
          d.setVariable("_h", u),
          (u = d.getVariable("escala")),
          void 0 === u && (u = this.scale),
          d.setVariable("escala", u),
          (u = d.getVariable("Ox")),
          void 0 === u && (u = this.Ox),
          d.setVariable("Ox", u),
          (u = d.getVariable("Oy")),
          void 0 === u && (u = this.Oy),
          d.setVariable("Oy", u),
          d.setVariable("mouse_x", 0),
          d.setVariable("mouse_y", 0),
          d.setVariable("mouse_pressed", 0),
          d.setVariable("mouse_clicked", 0),
          d.setVariable("clic_izquierdo", 0),
          2 == k.version &&
            "" === this.x_axis &&
            "" === this.y_axis &&
            (this.axes = ""));
      this.w_2 = this.w / 2;
      this.h_2 = this.h / 2;
    };
    a.Space.prototype.addCtr = function (a) {
      "graphic" === a.type ? this.graphicsCtr.push(a) : this.ctrs.push(a);
    };
    a.Space.prototype.addGraph = function (a, b) {
      ("R2" === this.type && b) ||
        ("R3" === this.type && !b) ||
        (a.background && "R3" !== this.type
          ? this.backGraphics.push(a)
          : this.graphics.push(a));
    };
    a.Space.prototype.clearClick = function () {
      this.evaluator.setVariable(this.mclickedString, 0);
      this.evaluator.setVariable(this.mclicizquierdoString, 0);
    };
    a.Space.prototype.getRelativeX = function (a) {
      return (parseInt(a) - this.w_2 - this.Ox) / this.scale;
    };
    a.Space.prototype.getRelativeY = function (a) {
      return (-parseInt(a) + this.h_2 + this.Oy) / this.scale;
    };
    a.Space.prototype.getAbsoluteX = function (a) {
      return a * this.scale + this.w_2 + this.Ox;
    };
    a.Space.prototype.getAbsoluteY = function (a) {
      return -a * this.scale + this.h_2 + this.Oy;
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k;
    a.SpaceExternal = function (a) {
      k = this;
      k.parent = a;
      k.width = 228;
      k.vSpace = 25;
      k.container = document.createElement("div");
      k.container.setAttribute(
        "style",
        "box-sizing:border-box;border-style:ridge;border-width:5px;border-color:gray;box-shadow:#000 0 0 25px 5px;overflow-y:scroll;overflow-x:hidden;position:fixed;left:0;top:0;z-index:10000;width:" +
          (k.width + 27) +
          "px;height:460px;background-color:#63b4fb"
      );
      k.movable = document.createElement("div");
      k.movable.setAttribute(
        "style",
        " position:absolute;left:0;top:0;width:" +
          (k.width + 27) +
          "px;height:" +
          k.vSpace +
          "px;line-height:" +
          k.vSpace +
          "px;background-color:#ddd;cursor:move;padding-left:75px;font-family:Sans-Serif;font-size:18px;"
      );
      k.movable.innerHTML = "Descartes";
      k.container.appendChild(k.movable);
      k.ctrs = [];
    };
    a.SpaceExternal.prototype.init = function () {
      function d(c) {
        k.newPos = a.getCursorPosition(c, document.body);
        k.container.style.left =
          k.initialPosition.x + (k.newPos.x - k.oldPos.x) * a.cssScale + "px";
        k.container.style.top =
          k.initialPosition.y + (k.newPos.y - k.oldPos.y) * a.cssScale + "px";
      }
      function f(a) {
        a.preventDefault();
        document.body.removeEventListener("mousemove", d);
        document.body.removeEventListener("mouseup", f);
      }
      document.body.appendChild(this.container);
      k = this;
      for (
        var q = k.parent.evaluator.parser, c = 0, h = k.ctrs.length;
        c < h;
        c++
      )
        (k.ctrs[c].expresion = q.parse(
          "(0," + (k.vSpace + 23 + 35 * c) + "," + k.width + ",35)"
        )),
          k.ctrs[c].update();
      k.numCtr = h;
      c = new a.Button(k.parent, {
        region: "external",
        name: "english" == k.language ? "about" : "cr\u00e9ditos",
        font_size: q.parse("15"),
        expresion: q.parse("(0," + k.vSpace + "," + k.width / 2 + ",25)"),
      });
      c.actionExec = { execute: a.showAbout };
      c.update();
      new a.Button(k.parent, {
        region: "external",
        name: "config",
        font_size: q.parse("15"),
        action: "config",
        expresion: q.parse(
          "(" + k.width / 2 + "," + k.vSpace + "," + k.width / 2 + ",25)"
        ),
      }).update();
      new a.Button(k.parent, {
        region: "external",
        name: "english" == k.language ? "init" : "inicio",
        font_size: q.parse("15"),
        action: "init",
        expresion: q.parse(
          "(0," + (k.vSpace + 23 + 35 * h) + "," + k.width / 2 + ",25)"
        ),
      }).update();
      new a.Button(k.parent, {
        region: "external",
        name: "english" == k.language ? "clear" : "limpiar",
        font_size: q.parse("15"),
        action: "clear",
        expresion: q.parse(
          "(" +
            k.width / 2 +
            "," +
            (k.vSpace + 23 + 35 * h) +
            "," +
            k.width / 2 +
            ",25)"
        ),
      }).update();
      q = new a.Button(k.parent, {
        region: "external",
        name: "english" == k.language ? "close" : "cerrar",
        font_size: q.parse("15"),
        expresion: q.parse(
          "(" +
            k.width / 4 +
            "," +
            (k.vSpace + 46 + 35 * h) +
            "," +
            k.width / 2 +
            ",25)"
        ),
      });
      q.update();
      q.canvas.addEventListener("click", function (a) {
        k.hide();
      });
      k.setPositionAndSize();
      k.movable.addEventListener("mousedown", function (c) {
        c.preventDefault();
        k.oldPos = a.getCursorPosition(c, document.body);
        k.initialPosition = {
          x: k.container.offsetLeft,
          y: k.container.offsetTop,
        };
        document.body.addEventListener("mousemove", d);
        document.body.addEventListener("mouseup", f);
      });
      k.hide();
    };
    a.SpaceExternal.prototype.addCtr = function (a) {
      this.ctrs.push(a);
    };
    a.SpaceExternal.prototype.show = function () {
      this.setPositionAndSize();
      this.container.style.display = "block";
    };
    a.SpaceExternal.prototype.hide = function () {
      this.container.style.display = "none";
    };
    a.SpaceExternal.prototype.setPositionAndSize = function () {
      k = this;
      var a = k.vSpace + 46 + 35 * k.numCtr + 25 + 10;
      k.container.style.left =
        Math.max(parseInt(window.innerWidth - k.width) / 2, 0) + "px";
      k.container.style.top = "5px";
      k.container.style.height =
        window.innerHeight < k.vSpace + 75
          ? k.vSpace + 75 + "px"
          : a > window.innerHeight - 10
          ? window.innerHeight - 10
          : a + "px";
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    var k, d;
    if (a.loadLib) return a;
    var f = Math.floor,
      q = Math.round,
      c = 2 * Math.PI,
      h = a.convertFont("SansSerif,PLAIN,12"),
      g = a.convertFont("Monospaced,PLAIN,12"),
      b,
      u,
      m,
      r,
      n,
      v,
      x,
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N,
      z,
      M,
      L,
      O;
    a.Space2D = function (c, d) {
      a.Space.call(this, c, d);
      b = this;
      b.ratio = c.ratio;
      b.canvas = document.createElement("canvas");
      b.canvas.setAttribute("id", b.id + "_canvas");
      b.canvas.setAttribute("class", "DescartesSpace2DCanvas");
      b.backCanvas = document.createElement("canvas");
      b.backCanvas.setAttribute("id", b.id + "_background");
      b.canvas.style.zIndex = b.zIndex;
      b.canvas.width = b.backCanvas.width = b.w * b.ratio;
      b.canvas.height = b.backCanvas.height = b.h * b.ratio;
      b.canvas.style.width = b.backCanvas.style.width = b.w + "px";
      b.canvas.style.height = b.backCanvas.style.height = b.h + "px";
      b.ctx = b.canvas.getContext("2d");
      b.backCtx = b.backCanvas.getContext("2d");
      b.ctx.imageSmoothingEnabled = b.backCtx.imageSmoothingEnabled = !1;
      b.graphicControlContainer = document.createElement("div");
      b.graphicControlContainer.setAttribute("id", b.id + "_graphicControls");
      b.graphicControlContainer.setAttribute(
        "style",
        "position:absolute;left:0;top:0;z-index:" + b.zIndex + ";"
      );
      b.numericalControlContainer = document.createElement("div");
      b.numericalControlContainer.setAttribute(
        "id",
        b.id + "_numericalControls"
      );
      b.numericalControlContainer.setAttribute(
        "style",
        "position:absolute;left:0;top:0;z-index:" + b.zIndex + ";"
      );
      b.container = document.createElement("div");
      b.container.setAttribute("id", b.id);
      b.container.setAttribute("class", "DescartesSpace2DContainer");
      b.container.setAttribute(
        "style",
        "left:" + b.x + "px;top:" + b.y + "px;z-index:" + b.zIndex + ";"
      );
      b.parent.arquimedes &&
        "#f0f8fa" === b.background.getColor() &&
        (b.container.style.border = "1px solid #b8c4c8");
      b.container.appendChild(b.backCanvas);
      b.container.appendChild(b.canvas);
      b.container.appendChild(b.graphicControlContainer);
      b.container.appendChild(b.numericalControlContainer);
      c.container.insertBefore(b.container, c.loader);
      b.parent.images[b.id + ".image"] = b.canvas;
      b.parent.images[b.id + ".image"].ready = 1;
      b.parent.images[b.id + ".image"].complete = !0;
      b.parent.images[b.id + ".image"].canvas = !0;
      b.evaluator.setVariable(b.id + ".image", b.id + ".image");
      b.parent.images[b.id + ".back"] = b.backCanvas;
      b.parent.images[b.id + ".back"].ready = 1;
      b.parent.images[b.id + ".back"].complete = !0;
      b.parent.images[b.id + ".back"].canvas = !0;
      b.evaluator.setVariable(b.id + ".back", b.id + ".back");
      var e = "" !== b.id && 2 !== c.version ? b.id + "." : "";
      b.OxStr = e + "Ox";
      b.OyStr = e + "Oy";
      b.scaleStr = e + "escala";
      b.wStr = e + "_w";
      b.hStr = e + "_h";
      b.mxStr = e + "mouse_x";
      b.myStr = e + "mouse_y";
      b.mpressedStr = e + "mouse_pressed";
      b.mclickedStr = e + "mouse_clicked";
      b.mclickIzqStr = e + "clic_izquierdo";
      b.click = 0;
      "descartesJS_stage" !== b.id
        ? b.addEvents()
        : (b.canvas.oncontextmenu = function (a) {
            return !1;
          });
    };
    a.extend(a.Space2D, a.Space);
    a.Space2D.prototype.init = function () {
      b = this;
      b.uber.init.call(b);
      b.canvas &&
        ((b.canvas.width = b.backCanvas.width = b.w * b.ratio),
        (b.canvas.height = b.backCanvas.height = b.h * b.ratio),
        (b.canvas.style.width = b.backCanvas.style.width = b.w + "px"),
        (b.canvas.style.height = b.backCanvas.style.height = b.h + "px"));
    };
    a.Space2D.prototype.update = function (a) {
      b = this;
      u = b.evaluator;
      m = b.parent;
      u.setVariable(b.wStr, b.w);
      u.setVariable(b.hStr, b.h);
      b.drawIfValue = 0 < u.eval(b.drawif);
      if (b.drawIfValue) {
        n = b.x !== u.eval(b.xExpr) + b.displaceRegionWest;
        v = b.y !== u.eval(b.yExpr) + m.plecaHeight + b.displaceRegionNorth;
        b.spaceChange =
          a ||
          n ||
          v ||
          b.drawBefore !== b.drawIfValue ||
          b.Ox !== u.getVariable(b.OxStr) ||
          b.Oy !== u.getVariable(b.OyStr) ||
          b.scale !== u.getVariable(b.scaleStr) ||
          b.backColor !== b.background.getColor();
        b.x = n ? u.eval(b.xExpr) + b.displaceRegionWest : b.x;
        b.y = v ? u.eval(b.yExpr) + m.plecaHeight + b.displaceRegionNorth : b.y;
        b.Ox = u.getVariable(b.OxStr);
        b.Oy = u.getVariable(b.OyStr);
        b.scale = u.getVariable(b.scaleStr);
        b.drawBefore = b.drawIfValue;
        b.scale = Math.max(1e-6, Math.min(1e6, b.scale));
        u.setVariable(b.scaleStr, b.scale);
        if (n || v)
          (b.container.style.left = b.x + "px"),
            (b.container.style.top = b.y + "px");
        b.container.style.display = "block";
        b.drawTrace = !b.spaceChange && ((!b.fixed && !b.click) || b.fixed);
        b.spaceChange &&
          (b.backCtx.setTransform(b.ratio, 0, 0, b.ratio, 0, 0),
          b.drawBackground());
        b.ctx.setTransform(b.ratio, 0, 0, b.ratio, 0, 0);
        b.draw();
      } else b.container.style.display = "none";
    };
    a.Space2D.prototype.drawBackground = function () {
      b = this;
      u = b.evaluator;
      r = b.backCtx;
      r.clearRect(0, 0, b.backCanvas.width, b.backCanvas.height);
      b.backColor = b.background.getColor();
      r.fillStyle = b.backColor;
      r.fillRect(0, 0, b.backCanvas.width, b.backCanvas.height);
      b.image &&
        "" != b.image.src &&
        b.image.ready &&
        b.image.complete &&
        ("topleft" === b.bg_display
          ? r.drawImage(b.image, 0, 0)
          : "stretch" === b.bg_display
          ? r.drawImage(b.image, 0, 0, b.w, b.h)
          : "patch" === b.bg_display
          ? ((r.fillStyle = r.createPattern(b.image, "repeat")),
            r.fillRect(0, 0, b.w, b.h))
          : "imgcenter" === b.bg_display &&
            r.drawImage(
              b.image,
              (b.w - b.image.width) / 2,
              (b.h - b.image.height) / 2
            ));
      e = b.scale;
      p = 0;
      for (l = 0 > b.w + b.h ? 0 : b.w + b.h; e > l; ) (e /= 10), p++;
      for (; e < l / 10; ) e *= 10;
      r.lineWidth = 1;
      "" !== b.net &&
        ((r.strokeStyle = b.net.getColor()), b.drawMarks(r, e / 10, -1));
      if (
        (2 !== b.parent.version && "" !== b.net10) ||
        (2 === b.parent.version && "" !== b.net && "" !== b.net10)
      )
        (r.strokeStyle = b.net10.getColor()), b.drawMarks(r, e, -1);
      if ("" !== b.axes) {
        r.strokeStyle = b.axes.getColor();
        r.beginPath();
        if ("" !== b.x_axis || 2 !== b.parent.version)
          r.moveTo(0, f(b.h / 2 + b.Oy) + 0.5),
            r.lineTo(b.w, f(b.h / 2 + b.Oy) + 0.5);
        if ("" !== b.y_axis || 2 !== b.parent.version)
          r.moveTo(f(b.w / 2 + b.Ox) + 0.5, 0),
            r.lineTo(f(b.w / 2 + b.Ox) + 0.5, b.h);
        r.stroke();
        b.drawMarks(r, e, 4);
        b.drawMarks(r, e / 2, 2);
        b.drawMarks(r, e / 10, 1);
      }
      if ("" !== b.x_axis || "" !== b.y_axis)
        (r.fillStyle = "" !== b.axes ? b.axes.getColor() : "#000"),
          (r.font = h),
          (r.textAlign = "right"),
          (r.textBaseline = "alphabetic"),
          r.fillText(b.x_axis, f(b.w) - 2, f(b.h / 2 + b.Oy) + 12),
          r.fillText(b.y_axis, f(b.w / 2 + b.Ox) - 2, 12);
      b.numbers &&
        "" != b.axes &&
        ((r.fillStyle = b.axes.getColor()),
        (r.font = h),
        (r.textAlign = "start"),
        (r.textBaseline = "bottom"),
        e > (b.w + b.h) / 2
          ? b.drawNumbers(r, e / 5, e <= b.scale ? p + 1 : p)
          : e > (b.w + b.h) / 4
          ? b.drawNumbers(r, e / 2, e <= b.scale ? p + 1 : p)
          : b.drawNumbers(r, e, p));
      for (var a = 0, c = b.backGraphics.length; a < c; a++)
        b.backGraphics[a].draw();
    };
    a.Space2D.prototype.draw = function () {
      b = this;
      r = b.ctx;
      r.clearRect(0, 0, b.canvas.width, b.canvas.height);
      for (var a = 0, d = b.graphics.length; a < d; a++)
        (x = b.graphics[a]),
          "" !== x.trace && b.drawTrace && x.drawTrace(),
          x.draw();
      a = 0;
      for (d = b.graphicsCtr.length; a < d; a++) b.graphicsCtr[a].draw();
      "" != b.text &&
        b.click &&
        "L" === b.whichBtn &&
        ((r.fillStyle = b.text.getColor()),
        (r.strokeStyle = r.fillStyle),
        (r.lineWidth = 1),
        (r.font = g),
        (r.textAlign = "center"),
        (r.textBaseline = "alphabetic"),
        (A =
          1 >= b.scale
            ? b.mouse_x.toFixed(0)
            : b.mouse_x.toFixed(b.scale.toString().length)),
        (J =
          1 >= b.scale
            ? b.mouse_y.toFixed(0)
            : b.mouse_y.toFixed(b.scale.toString().length)),
        (I = "(" + A + "," + J + ")"),
        (N = f(r.measureText(I).width / 2)),
        (z = b.getAbsoluteX(b.mouse_x)),
        (M = b.getAbsoluteY(b.mouse_y)),
        (L = f(z)),
        (O = f(M - 10)),
        L + N > b.w ? (L = b.w - N) : 0 > L - N && (L = N),
        O + 1 > b.h ? (O = b.h) : 0 > O - 14 && (O = 15),
        r.fillText(I, L, O),
        r.beginPath(),
        r.arc(z, M, 2.5, 0, c, !0),
        r.stroke());
    };
    a.Space2D.prototype.drawMarks = function (a, b, c) {
      w = this.w;
      y = this.h;
      H = 0;
      G = w;
      K = 0;
      C = y;
      D = f(w / 2 + this.Ox);
      F = f(y / 2 + this.Oy);
      0 <= c && ((H = D - c), (G = D + c), (K = F - c), (C = F + c));
      a.beginPath();
      for (c = -q(D / b); (B = D + q(c * b)) < w; c++)
        a.moveTo(B + 0.5, K + 0.5), a.lineTo(B + 0.5, C + 0.5);
      for (c = -q(F / b); (E = F + q(c * b)) < y; c++)
        a.moveTo(H + 0.5, E + 0.5), a.lineTo(G + 0.5, E + 0.5);
      a.stroke();
    };
    a.Space2D.prototype.drawNumbers = function (a, b, c) {
      w = this.w;
      y = this.h;
      D = f(w / 2 + this.Ox);
      F = f(y / 2 + this.Oy);
      for (c = -q(D / b); (B = D + q(c * b)) < w; c++)
        a.fillText(parseFloat(((c * b) / this.scale).toFixed(4)), B + 1, F - 2);
      for (c = -q(F / b); (E = F + q(c * b)) < y; c++)
        0 !== parseFloat((-c * b) / this.scale) &&
          a.fillText(
            parseFloat(((-c * b) / this.scale).toFixed(4)),
            D + 5,
            E + 5
          );
    };
    a.Space2D.prototype.addEvents = function () {
      function b(a) {
        window.focus();
        if (
          h.evaluator.variables[h.id + ".DESCARTESJS_no_fixed"] ||
          !h.fixed ||
          h.sensitive_to_mouse_movements
        )
          (h.click = 0),
            h.evaluator.setVariable(h.mpressedStr, 0),
            h.evaluator.setVariable(h.mclickedStr, 1),
            h.evaluator.setVariable(h.mclickIzqStr, 1),
            window.removeEventListener("touchmove", f),
            window.removeEventListener("touchend", b),
            a.stopPropagation(),
            a.preventDefault(),
            h.parent.update();
      }
      function c(b) {
        window.focus();
        b.stopPropagation();
        b.preventDefault();
        h.click = 0;
        h.evaluator.setVariable(h.mpressedStr, 0);
        h.evaluator.setVariable(h.mclickedStr, 1);
        h.evaluator.setVariable(h.mclickIzqStr, 1);
        "R" === h.whichBtn &&
          (window.removeEventListener("mousemove", g),
          h.posZoom == h.posZoomNew &&
            a.showConfig &&
            (h.parent.externalSpace.show(),
            (h.posZoom = !1),
            (h.posZoomNew = !0)));
        window.removeEventListener("mousemove", f);
        window.removeEventListener("mouseup", c);
        h.parent.deactivateGraphiControls();
        h.parent.update();
      }
      function e(b) {
        h.posAnte = a.getCursorPosition(b, h.container);
        h.mouse_x = h.getRelativeX(h.posAnte.x);
        h.mouse_y = h.getRelativeY(h.posAnte.y);
        h.evaluator.setVariable(h.mxStr, h.mouse_x);
        h.evaluator.setVariable(h.myStr, h.mouse_y);
        h.evaluator.setVariable(h.mclickedStr, 0);
        h.evaluator.setVariable(h.mclickIzqStr, 0);
        h.parent.update();
      }
      function g(b) {
        b.preventDefault();
        h.posZoomNew = a.getCursorPosition(b, h.container).y;
        h.evaluator.setVariable(
          h.scaleStr,
          h.tempScale + (h.tempScale / 45) * ((h.posZoom - h.posZoomNew) / 10)
        );
        h.parent.update();
      }
      function f(b) {
        b.preventDefault();
        b.stopPropagation();
        h.fixed ||
          ((h.posNext = a.getCursorPosition(b, h.container)),
          (k = (h.posAnte.x - h.posNext.x).toFixed(8)),
          (d = (h.posAnte.y - h.posNext.y).toFixed(8)),
          h.evaluator.setVariable(h.OxStr, h.Ox - k),
          h.evaluator.setVariable(h.OyStr, h.Oy - d));
        e(b);
      }
      var h = this;
      h.posZoom = null;
      h.posZoomNew = null;
      h.canvas.oncontextmenu = function (a) {
        return !1;
      };
      this.sensitive_to_mouse_movements &&
        this.canvas.addEventListener("touchmove", e);
      this.canvas.addEventListener("touchstart", function (a) {
        window.focus();
        if (
          h.evaluator.variables[h.id + ".DESCARTESJS_no_fixed"] ||
          !h.fixed ||
          h.sensitive_to_mouse_movements
        )
          h.parent.clearClick(),
            (h.click = 1),
            h.evaluator.setVariable(h.mpressedStr, 1),
            h.evaluator.setVariable(h.mclickedStr, 0),
            h.evaluator.setVariable(h.mclickIzqStr, 0),
            h.parent.deactivateGraphiControls(),
            e(a),
            window.addEventListener("touchmove", f),
            window.addEventListener("touchend", b),
            a.stopPropagation(),
            a.preventDefault();
      });
      this.sensitive_to_mouse_movements &&
        this.canvas.addEventListener("mousemove", e);
      this.canvas.addEventListener("mousedown", function (b) {
        window.focus();
        b.stopPropagation();
        b.preventDefault();
        h.parent.clearClick();
        h.click = 1;
        h.parent.deactivateGraphiControls();
        h.whichBtn = a.whichBtn(b);
        "R" === h.whichBtn
          ? (window.addEventListener("mouseup", c),
            (h.posZoom = a.getCursorPosition(b, h.container).y),
            (h.posZoomNew = h.posZoom),
            h.fixed ||
              ((h.tempScale = h.scale),
              window.addEventListener("mousemove", g)))
          : "L" === h.whichBtn &&
            (h.evaluator.setVariable(h.mpressedStr, 1),
            h.evaluator.setVariable(h.mclickedStr, 0),
            h.evaluator.setVariable(h.mclickIzqStr, 0),
            e(b),
            window.addEventListener("mousemove", f),
            window.addEventListener("mouseup", c));
      });
      document.addEventListener("visibilitychange", function (a) {
        c(a);
      });
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    var k, d, f;
    function q(b, c) {
      S = a.subtract3D(b, a.scalarProduct3D(c, a.dotProduct3D(b, c)));
      T = a.add3D(b, a.scalarProduct3D(S, -2));
      ca = a.norm3D(T);
      return 0 !== ca ? a.scalarProduct3D(T, 1 / ca) : a.scalarProduct3D(b, -1);
    }
    if (a.loadLib) return a;
    var c = Math.floor,
      h = Math.round,
      g = Math.max,
      b = Math.cos,
      u = Math.sin,
      m = Math.sqrt,
      r = (15 * Math.PI) / 180,
      n = Math.cos(r),
      v = Math.sin(r),
      x = Math.tan(r),
      e,
      p,
      l,
      w,
      y,
      B,
      E,
      D,
      F,
      H,
      G,
      K,
      C,
      A,
      J,
      I,
      N,
      z,
      M,
      L = [],
      O,
      Q,
      P,
      V,
      U,
      R,
      S,
      T,
      ca,
      W;
    a.Space3D = function (b, c) {
      a.Space.call(this, b, c);
      l = this;
      l.backCanvas = document.createElement("canvas");
      l.backCanvas.setAttribute("id", l.id + "_background");
      l.backCanvas.setAttribute("width", l.w + "px");
      l.backCanvas.setAttribute("height", l.h + "px");
      l.canvas = document.createElement("canvas");
      l.canvas.setAttribute("id", l.id + "_canvas");
      l.canvas.setAttribute("width", l.w + "px");
      l.canvas.setAttribute("height", l.h + "px");
      l.canvas.setAttribute("class", "DescartesSpace3DCanvas");
      l.canvas.setAttribute("style", "z-index: " + l.zIndex + ";");
      l.ctx = l.canvas.getContext("2d");
      l.ctx.imageSmoothingEnabled = !1;
      l.parent.images[l.id + ".image"] = l.canvas;
      l.parent.images[l.id + ".image"].ready = 1;
      l.parent.images[l.id + ".image"].complete = !0;
      l.evaluator.setVariable(l.id + ".image", l.id + ".image");
      l.graphicControlContainer = document.createElement("div");
      l.graphicControlContainer.setAttribute("id", l.id + "_graphicControls");
      l.graphicControlContainer.setAttribute(
        "style",
        "position: absolute; left: 0px; top: 0px; z-index: " + l.zIndex + ";"
      );
      l.numericalControlContainer = document.createElement("div");
      l.numericalControlContainer.setAttribute(
        "id",
        l.id + "_numericalControls"
      );
      l.numericalControlContainer.setAttribute(
        "style",
        "position: absolute; left: 0px; top: 0px; z-index: " + l.zIndex + ";"
      );
      l.container = document.createElement("div");
      l.container.setAttribute("id", l.id);
      l.container.setAttribute("class", "DescartesSpace3DContainer");
      l.container.setAttribute(
        "style",
        "left: " + l.x + "px; top: " + l.y + "px; z-index: " + l.zIndex + ";"
      );
      l.container.appendChild(l.backCanvas);
      l.container.appendChild(l.canvas);
      l.container.appendChild(l.graphicControlContainer);
      l.container.appendChild(l.numericalControlContainer);
      b.container.insertBefore(l.container, b.loader);
      l.eye = { x: 0, y: 0, z: 0 };
      l.lights = [
        { x: 50, y: 50, z: 70 },
        { x: 50, y: -50, z: 30 },
        { x: 20, y: 0, z: -80 },
        { x: 0, y: 0, z: 0 },
      ];
      for (var d = 0, e = l.lights.length; d < e; d++)
        l.lights[d] = a.normalize3D(l.lights[d]);
      l.light3 = { x: 0, y: 0, z: 0 };
      l.intensity = [0.4, 0.5, 0.3, 0];
      l.userIntensity = 0;
      l.dim = 1;
      l.tmpIntensity = [];
      l.OxStr = l.id + ".Ox";
      l.OyStr = l.id + ".Oy";
      l.scaleStr = l.id + ".escala";
      l.wStr = l.id + "._w";
      l.hStr = l.id + "._h";
      l.obsStr = l.id + ".observador";
      l.rotZStr = l.id + ".rot.z";
      l.rotYStr = l.id + ".rot.y";
      l.userIDimStr = l.id + ".userIlum.dim";
      l.userIIStr = l.id + ".userIlum.I";
      l.userIxStr = l.id + ".userIlum.x";
      l.userIyStr = l.id + ".userIlum.y";
      l.userIzStr = l.id + ".userIlum.z";
      l.new3DStr = l.id + "._3Dnew_";
      l.xOStr = l.id + ".xO";
      l.yOStr = l.id + ".yO";
      l.zOStr = l.id + ".zO";
      l.AOStr = l.id + ".AO";
      l.BOStr = l.id + ".BO";
      l.COStr = l.id + ".CO";
      l.zoomStr = l.id + ".zoom";
      l.evaluator.setVariable(l.rotZStr, 0);
      l.evaluator.setVariable(l.rotYStr, 0);
      l.evaluator.setVariable(l.userIDimStr, l.dim);
      l.evaluator.setVariable(l.userIIStr, l.userIntensity);
      l.evaluator.setVariable(l.userIxStr, 0);
      l.evaluator.setVariable(l.userIyStr, 0);
      l.evaluator.setVariable(l.userIzStr, 0);
      l.addEvents();
    };
    a.extend(a.Space3D, a.Space);
    a.Space3D.prototype.init = function (a) {
      l = this;
      l.uber.init.call(l);
      l.canvas &&
        ((l.canvas.width = l.backCanvas.width = l.w),
        (l.canvas.height = l.backCanvas.height = l.h),
        (l.canvas.style.width = l.backCanvas.style.width = l.w + "px"),
        (l.canvas.style.height = l.backCanvas.style.height = l.h + "px"));
      l.w_2 = l.w / 2;
      l.h_2 = l.h / 2;
      l.w_plus_h = l.w + l.h;
      l.oldMouse = { x: 0, y: 0 };
    };
    a.Space3D.prototype.update = function (a) {
      l = this;
      e = l.evaluator;
      p = l.parent;
      l.new3D = 0 < e.getVariable(l.new3DStr);
      e.setVariable(l.wStr, l.w);
      e.setVariable(l.hStr, l.h);
      l.drawIfValue = 0 < e.eval(l.drawif);
      if (l.drawIfValue) {
        B = l.x !== e.eval(l.xExpr) + l.displaceRegionWest;
        E = l.y !== e.eval(l.yExpr) + p.plecaHeight + l.displaceRegionNorth;
        l.spaceChange =
          a ||
          B ||
          E ||
          l.drawBefore !== l.drawIfValue ||
          l.Ox !== e.getVariable(l.OxStr) ||
          l.Oy !== e.getVariable(l.OyStr) ||
          l.scale !== e.getVariable(l.scaleStr);
        l.x = B ? e.eval(l.xExpr) + l.displaceRegionWest : l.x;
        l.y = E ? e.eval(l.yExpr) + p.plecaHeight + l.displaceRegionNorth : l.y;
        l.Ox = e.getVariable(l.OxStr);
        l.Oy = e.getVariable(l.OyStr);
        l.scale = e.getVariable(l.scaleStr);
        l.drawBefore = l.drawIfValue;
        if (a || void 0 == l.observer) {
          a = 0;
          for (var b = l.parent.controls.length; a < b; a++)
            l.parent.controls[a].id === l.obsStr && (W = !0);
          l.observer = W
            ? e.getVariable(l.obsStr) || 2.5 * l.w_plus_h
            : 2.5 * l.w_plus_h;
          l.observer = g(l.observer, 0.25 * l.w_plus_h);
          e.setVariable(l.obsStr, l.observer);
        }
        l.new3D
          ? (void 0 == e.getVariable(l.xOStr) &&
              e.setVariable(l.xOStr, (l.observer / l.scale) * n),
            void 0 == e.getVariable(l.yOStr) && e.setVariable(l.yOStr, 0),
            void 0 == e.getVariable(l.zOStr) &&
              e.setVariable(l.zOStr, (l.observer / l.scale) * v),
            void 0 == e.getVariable(l.AOStr) && e.setVariable(l.AOStr, 0),
            void 0 == e.getVariable(l.BOStr) && e.setVariable(l.BOStr, 345),
            void 0 == e.getVariable(l.COStr) && e.setVariable(l.COStr, 0),
            (l.xO = e.getVariable(l.xOStr)),
            (l.yO = e.getVariable(l.yOStr)),
            (l.zO = e.getVariable(l.zOStr)),
            (l.AO = e.getVariable(l.AOStr)),
            (l.BO = e.getVariable(l.BOStr)),
            (l.CO = e.getVariable(l.COStr)),
            (l.zoom = e.getVariable(l.zoomStr)),
            (l.eye = {
              x: parseFloat(e.getVariable(l.xOStr)),
              y: parseFloat(e.getVariable(l.yOStr)),
              z: parseFloat(e.getVariable(l.zOStr)),
            }))
          : ((l.D = l.observer / 3),
            (l.eye = { x: l.D / l.scale, y: 0, z: (l.D / l.scale) * x }),
            (l.RX0 = l.Ox),
            (l.RY0 = l.Oy - l.D * x),
            (l.bfactor = l.scale * l.eye.x),
            (l.observer = g(e.getVariable(l.obsStr), 0.25 * l.w_plus_h)),
            l.observer != e.getVariable(l.obsStr) &&
              (e.setVariable(l.obsStr, l.observer), l.parent.updateControls()));
        1e-6 > l.scale
          ? ((l.scale = 1e-6), e.setVariable(l.scaleStr, 1e-6))
          : 1e6 < l.scale && ((l.scale = 1e6), e.setVariable(l.scaleStr, 1e6));
        if (B || E)
          (l.container.style.left = l.x + "px"),
            (l.container.style.top = l.y + "px");
        l.container.style.display = "block";
        l.dim = e.getVariable(l.userIDimStr);
        l.userIntensity = e.getVariable(l.userIIStr);
        l.light3 = {
          x: parseInt(e.getVariable(l.userIxStr)),
          y: parseInt(e.getVariable(l.userIyStr)),
          z: parseInt(e.getVariable(l.userIzStr)),
        };
        l.updateCamera();
        l.draw();
      } else l.container.style.display = "none";
    };
    a.Space3D.prototype.updateCamera = function () {
      l = this;
      l.new3D
        ? ((l.D = (l.scale * l.eye.x) / n),
          (l.XE = h(l.scale * l.eye.y + 0.5)),
          (l.YE = h(l.scale * l.eye.z + 0.5)))
        : ((l.D = l.observer / 3),
          (l.eye.x = l.D / l.scale),
          (l.eye.y = 0),
          (l.eye.z = (l.D / l.scale) * x));
    };
    a.Space3D.prototype.rotateVertex = function (c) {
      C = a.degToRad(l.evaluator.getVariable(l.rotZStr));
      A = b(C);
      J = u(C);
      k = c.x * A - c.y * J;
      d = c.x * J + c.y * A;
      f = c.z;
      C = a.degToRad(l.evaluator.getVariable(l.rotYStr));
      A = b(C);
      J = u(C);
      return { x: f * J + k * A, y: d, z: f * A - k * J };
    };
    var ma,
      ia,
      X,
      Y,
      na,
      ja,
      da,
      Z,
      oa,
      ka,
      aa,
      ba,
      pa,
      qa,
      ra,
      sa,
      ta,
      ua,
      va,
      wa,
      xa,
      ea,
      fa,
      ga,
      ha,
      ya,
      za,
      la;
    a.Space3D.prototype.project = function (a) {
      l = this;
      if (l.new3D) {
        H = l.eye.x - a.x;
        G = l.eye.y - a.y;
        K = l.eye.z - a.z;
        var b = m(H * H + G * G + K * K);
        ma = l.AO % 360;
        ia = (ma * Math.PI) / 180;
        X = Math.cos(ia);
        Y = Math.sin(ia);
        na = l.BO % 360;
        ja = (na * Math.PI) / 180;
        da = Math.cos(ja);
        Z = Math.sin(ja);
        oa = l.CO % 360;
        ka = (oa * Math.PI) / 180;
        aa = Math.cos(ka);
        ba = Math.sin(ka);
        pa = da * X;
        qa = -aa * da * Y - ba * Z;
        ra = -ba * da * Y + aa * Z;
        sa = Y;
        ta = aa * X;
        ua = ba * X;
        va = -Z * X;
        wa = aa * Z * Y - ba * X;
        xa = ba * Z * Y + aa * X;
        ea = -l.eye.x + a.x;
        fa = -l.eye.y + a.y;
        ga = -l.eye.z + a.z;
        ha = pa * ea + sa * fa + va * ga;
        ya = qa * ea + ta * fa + wa * ga;
        za = ra * ea + ua * fa + xa * ga;
        la = parseFloat(l.evaluator.getVariable(l.zoomStr));
        return {
          x: this.getAbsoluteX((-la * ya) / ha),
          y: this.getAbsoluteY((-la * za) / ha),
          z: 0 < ha ? -b : b,
        };
      }
      b = l.bfactor / (a.x - l.eye.x);
      return {
        x: this.w_2 + l.RX0 - b * (a.y - l.eye.y),
        y: this.h_2 + l.RY0 + b * (a.z - l.eye.z),
        z: l.eye.x - a.x,
      };
    };
    a.Space3D.prototype.computeColor = function (b, d, e) {
      b.match("rgba")
        ? (b = a.RGBAToHexColor(b))
        : b.match("#") && (b = new a.Color(b.substring(1)));
      V = a.subtract3D(this.eye, d.average);
      U = a.norm3D(V);
      R = a.scalarProduct3D(V, 1 / U);
      this.lights[3] = a.subtract3D(this.light3, d.average);
      M = a.norm3D(this.lights[3]);
      for (var g = 0, h = this.intensity.length - 1; g < h; g++)
        L[g] = this.intensity[g] * this.dim;
      L[3] = (this.userIntensity * this.userIntensity) / M || 0;
      O = e ? this.dim / 2 : this.dim / 4;
      Q = 0;
      P = 0 <= d.direction ? d.normal : a.scalarProduct3D(d.normal, -1);
      g = 0;
      for (h = this.lights.length; g < h; g++)
        e
          ? ((Q = Math.max(0, a.dotProduct3D(q(this.lights[g], P), R))),
            (Q *= Q * Q))
          : (Q = Math.max(0, a.dotProduct3D(this.lights[g], P))),
          (O += L[g] * Q);
      O = Math.min(O, 1);
      I = c(b.r * O);
      N = c(b.g * O);
      z = c(b.b * O);
      return "rgba(" + I + "," + N + "," + z + "," + b.a + ")";
    };
    a.Space3D.prototype.draw = function () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.background.getColor();
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.image &&
        "" != this.image.src &&
        this.image.ready &&
        this.image.complete &&
        ("topleft" === this.bg_display
          ? this.ctx.drawImage(this.image, 0, 0)
          : "stretch" === this.bg_display
          ? this.ctx.drawImage(this.image, 0, 0, this.w, this.h)
          : "patch" === this.bg_display
          ? ((this.ctx.fillStyle = ctx.createPattern(this.image, "repeat")),
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height))
          : "center" === this.bg_display &&
            this.ctx.drawImage(
              this.image,
              (this.w - this.image.width) / 2,
              (this.h - this.image.height) / 2
            ));
      if (!this.click) {
        for (var a = 0, b = this.graphics.length; a < b; a++)
          this.graphics[a].update();
        this.primitives = [];
        a = 0;
        for (b = this.graphics.length; a < b; a++) {
          w = this.graphics[a];
          if (w.split || this.split)
            for (var c = a + 1; c < b; c++)
              (y = this.graphics[c]), (y.split || this.split) && w.splitFace(y);
          this.primitives = this.primitives.concat(w.primitives || []);
        }
      }
      a = 0;
      for (b = this.primitives.length; a < b; a++)
        this.primitives[a].computeDepth(this);
      this.primitives = this.primitives.sort(function (a, b) {
        return b.depth - a.depth;
      });
      if ("painter" === this.render) this.drawPainter(this.primitives);
      else
        for (a = 0, b = this.primitives.length; a < b; a++)
          this.primitives[a].passDraw &&
            this.primitives[a].draw(this.ctx, this);
      a = 0;
      for (b = this.graphicsCtr.length; a < b; a++) this.graphicsCtr[a].draw();
    };
    a.Space3D.prototype.drawPainter = function (a) {
      for (var b = a.length, c = 0; c < b; c++)
        (a[c].drawn = !1), a[c].draw(this.ctx, this);
      for (var d = [], e = [], g = 0, h = a.length, f = 0.001, k, m; ; ) {
        k = h;
        for (c = 0; c < b; c++)
          if (!a[c].drawn) {
            m = !0;
            for (var l = 0; l < b; l++)
              if (l != c && !a[l].drawn && a[c].inFrontOf(d, a[l], f)) {
                m = !1;
                break;
              }
            m && (h--, (e[g++] = a[c]), (a[c].drawn = !0));
          }
        if (0 == h) break;
        else if (h == k) {
          if (((f *= 10), 0.1 < f)) {
            for (c = 0; c < b; c++)
              a[c].drawn || ((e[g++] = a[c]), (a[c].drawn = !0));
            break;
          }
        } else f = 0.001;
      }
      for (c = 0; c < b; c++) e[c].draw(this.ctx, this);
    };
    a.Space3D.prototype.rayFromEye = function (a, b) {
      return {
        x: -this.eye.x,
        y: (a - (this.w_2 + this.Ox)) / this.scale - this.eye.y,
        z: (this.h_2 + this.Oy - b) / this.scale - this.eye.z,
      };
    };
    a.Space3D.prototype.addEvents = function () {
      function b(a) {
        document.body.focus();
        f.click = 0;
        f.evaluator.setVariable(f.id + ".mouse_pressed", 0);
        window.removeEventListener("touchmove", g, !1);
        window.removeEventListener("touchend", b, !1);
        a.preventDefault();
      }
      function c(b) {
        document.body.focus();
        f.click = 0;
        f.evaluator.setVariable(f.id + ".mouse_pressed", 0);
        b.preventDefault();
        "R" === f.whichBtn &&
          (window.removeEventListener("mousemove", e, !1),
          f.posZoom == f.posZoomNew &&
            a.showConfig &&
            f.parent.externalSpace.show());
        window.removeEventListener("mousemove", g, !1);
        window.removeEventListener("mouseup", c, !1);
        f.parent.update();
      }
      function d(b) {
        f.posAnte = a.getCursorPosition(b, f.container);
        f.mouse_x = f.getRelativeX(f.posAnte.x);
        f.mouse_y = f.getRelativeY(f.posAnte.y);
        f.evaluator.setVariable(f.id + ".mouse_x", f.mouse_x);
        f.evaluator.setVariable(f.id + ".mouse_y", f.mouse_y);
        70 < Date.now() - k && (f.parent.update(), (k = Date.now()));
      }
      function e(b) {
        b.preventDefault();
        f.posZoomNew = a.getCursorPosition(b, f.container).y;
        f.evaluator.setVariable(
          f.scaleStr,
          f.tempScale + (f.tempScale / 45) * ((f.posZoom - f.posZoomNew) / 10)
        );
        f.posObserverNew = a.getCursorPosition(b, f.container).x;
        f.evaluator.setVariable(
          f.obsStr,
          f.tempObserver - 2.5 * (f.posObserver - f.posObserverNew)
        );
        f.parent.update();
      }
      function g(b) {
        if (!f.fixed && f.click) {
          D = parseInt(50 * (f.oldMouse.x - f.mouse_x));
          F = parseInt(50 * (f.oldMouse.y - f.mouse_y));
          if (D !== f.disp.x || F !== f.disp.y)
            (f.alpha = a.degToRad(f.evaluator.getVariable(f.rotZStr))),
              (f.beta = a.degToRad(-f.evaluator.getVariable(f.rotYStr))),
              (f.alpha = h(a.radToDeg(f.alpha) - D)),
              (f.beta = h(a.radToDeg(f.beta) - F)),
              f.evaluator.setVariable(f.rotZStr, f.alpha),
              f.evaluator.setVariable(f.rotYStr, -f.beta),
              (f.disp.x = D),
              (f.disp.y = F),
              (f.oldMouse.x = f.getRelativeX(f.posAnte.x)),
              (f.oldMouse.y = f.getRelativeY(f.posAnte.y));
          d(b);
          b.preventDefault();
        }
      }
      var f = this,
        k = 0;
      this.canvas.oncontextmenu = function () {
        return !1;
      };
      this.canvas.addEventListener("touchstart", function (c) {
        document.body.focus();
        f.click = 1;
        f.evaluator.setVariable(f.id + ".mouse_pressed", 1);
        f.parent.deactivateGraphiControls();
        f.posAnte = a.getCursorPosition(c, f.container);
        f.oldMouse.x = f.getRelativeX(f.posAnte.x);
        f.oldMouse.y = f.getRelativeY(f.posAnte.y);
        d(c);
        window.addEventListener("touchmove", g);
        window.addEventListener("touchend", b);
        c.preventDefault();
      });
      this.canvas.addEventListener("mousedown", function (b) {
        document.body.focus();
        f.click = 1;
        f.parent.deactivateGraphiControls();
        f.whichBtn = a.whichBtn(b);
        "R" === f.whichBtn
          ? (window.addEventListener("mouseup", c),
            (f.posObserver = a.getCursorPosition(b, f.container).x),
            (f.posObserverNew = f.posObserver),
            (f.posZoom = a.getCursorPosition(b, f.container).y),
            (f.posZoomNew = f.posZoom),
            f.fixed ||
              ((f.tempScale = f.scale),
              (f.tempObserver = f.observer),
              window.addEventListener("mousemove", e)))
          : "L" == f.whichBtn &&
            (f.evaluator.setVariable(f.id + ".mouse_pressed", 1),
            (f.posAnte = a.getCursorPosition(b, f.container)),
            (f.oldMouse.x = f.getRelativeX(f.posAnte.x)),
            (f.oldMouse.y = f.getRelativeY(f.posAnte.y)),
            d(b),
            window.addEventListener("mousemove", g),
            window.addEventListener("mouseup", c));
        b.preventDefault();
      });
      this.disp = { x: 0, y: 0 };
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k;
    a.SpaceAP = function (d, f) {
      a.Space.call(this, d, f);
      this.eVars = this.iVars = null;
      k = d.evaluator;
      this.file.match(/^\[/) && this.file.match(/\]$/)
        ? (this.file = k.parser.parse(
            this.file.substring(1, this.file.length - 1)
          ))
        : this.file.match(/^\'/) && this.file.match(/\'$/)
        ? (this.file = k.parser.parse(this.file))
        : (this.file = k.parser.parse("'" + this.file + "'"));
      this.oldFile = k.eval(this.file);
      this.initFile();
    };
    a.extend(a.SpaceAP, a.Space);
    a.SpaceAP.prototype.initFile = function () {
      this.firstUpdate = !0;
      var d;
      if (this.oldFile) {
        var f = document.getElementById(this.oldFile);
        d =
          f && "descartes/spaceApFile" == f.type
            ? f.text
            : a.openExternalFile(this.oldFile);
        null != d && (d = d.split("\n"));
      }
      if (d && d.toString().match(/<applet/gi)) {
        for (
          var f = "", k = !1, c = 0, h = d.length;
          c < h &&
          (d[c].match("<applet") && (k = !0),
          k && (f += d[c]),
          !d[c].match("</applet"));
          c++
        );
        d = document.createElement("div");
        d.innerHTML = f;
        d.firstChild.setAttribute("width", this.w);
        d.firstChild.setAttribute("height", this.h);
        f = this.descApp ? this.descApp.container : null;
        this.descApp = new a.DescartesApp(d.firstChild);
        this.descApp.container.setAttribute("class", "DescartesAppContainer");
        this.descApp.container.setAttribute(
          "style",
          "position:absolute;overflow:hidden;background-color:" +
            this.background +
            ";width:" +
            this.w +
            "px;height:" +
            this.h +
            "px;left:" +
            this.x +
            "px;top:" +
            this.y +
            "px;z-index:" +
            this.zIndex +
            ";"
        );
        f
          ? this.parent.container.replaceChild(this.descApp.container, f)
          : this.parent.container.insertBefore(
              this.descApp.container,
              this.parent.loader
            );
        this.descApp.container.style.display =
          0 < this.evaluator.eval(this.drawif) ? "block" : "none";
        var g = this;
        this.descApp.update = function () {
          this.updateAuxiliaries();
          this.updateEvents();
          this.updateControls();
          this.updateSpaces();
          g.exportar();
        };
      } else
        (f = this.descApp ? this.descApp.container : null),
          (this.descApp = {}),
          (this.descApp.container = document.createElement("div")),
          this.descApp.container.setAttribute("class", "DescartesAppContainer"),
          (d =
            "position:absolute;overflow:hidden;background-color:" +
            this.background +
            ";width:" +
            this.w +
            "px;height:" +
            this.h +
            "px;left:" +
            this.x +
            "px;top:" +
            this.y +
            "px;z-index:" +
            this.zIndex +
            ";"),
          this.image &&
            ("topleft" == this.bg_display
              ? (d +=
                  "background-image: url(" +
                  this.imageSrc +
                  "); background-repeat:no-repeat;")
              : "stretch" == this.bg_display
              ? (d +=
                  "background-image: url(" +
                  this.imageSrc +
                  "); background-repeat:no-repeat; background-size: 100% 100%;")
              : "patch" == this.bg_display
              ? (d += "background-image: url(" + this.imageSrc + ");")
              : "imgcenter" == this.bg_display &&
                (d +=
                  "background-image: url(" +
                  this.imageSrc +
                  "); background-repeat:no-repeat; background-position: center center;")),
          this.descApp.container.setAttribute("style", d),
          f
            ? this.parent.container.replaceChild(this.descApp.container, f)
            : this.parent.container.insertBefore(
                this.descApp.container,
                this.parent.loader
              ),
          (this.descApp.container.style.display =
            0 < this.evaluator.eval(this.drawif) ? "block" : "none");
    };
    a.SpaceAP.prototype.update = function () {
      var a = this.evaluator.eval(this.file);
      if (this.oldFile != a) (this.oldFile = a), this.initFile();
      else {
        var a = this.x != this.evaluator.eval(this.xExpr),
          f = this.y != this.evaluator.eval(this.yExpr) + this.plecaHeight;
        this.x = a ? this.evaluator.eval(this.xExpr) : this.x;
        this.y = f
          ? this.evaluator.eval(this.yExpr) + this.plecaHeight
          : this.y;
        a && (this.descApp.container.style.left = this.x + "px");
        f && (this.descApp.container.style.top = this.y + "px");
        this.descApp.container.style.display =
          0 < this.evaluator.eval(this.drawif) ? "block" : "none";
        if (this.firstUpdate && ((this.firstUpdate = !1), null == this.iVars)) {
          this.iVars = [];
          for (var k in this.evaluator.variables)
            this.evaluator.variables.hasOwnProperty(k) &&
              k.match(/^public./) &&
              this.iVars.push({
                varName: k,
                value: this.evaluator.getVariable(k),
              });
        }
        this.importar();
      }
    };
    a.SpaceAP.prototype.importar = function () {
      for (var a, f = !1, k = 0, c = this.iVars.length; k < c; k++)
        (a = this.evaluator.getVariable(this.iVars[k].varName)),
          a != this.iVars[k].value &&
            ((this.iVars[k].value = a),
            this.descApp.evaluator.setVariable(
              this.iVars[k].varName,
              this.iVars[k].value
            ),
            (f = !0));
      f && this.descApp.update();
    };
    a.SpaceAP.prototype.exportar = function () {};
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f, q, c, h;
    a.SpaceHTML_IFrame = function (c, b) {
      a.Space.call(this, c, b);
      k = this.parent.evaluator;
      if (void 0 != this._w_) {
        var d = k.parser.parse(this._w_);
        this._w_ = "number" != d.type ? d : void 0;
      }
      void 0 != this._h_ &&
        ((d = k.parser.parse(this._h_)),
        (this._h_ = "number" != d.type ? d : void 0));
      this.isFirefox = /firefox/i.test(window.navigator.userAgent);
      this.file = this.file ? this.file.trim() : "";
      this.file.match(/^\[/) && this.file.match(/\]$/)
        ? (this.file = k.parser.parse(
            this.file.substring(1, this.file.length - 1)
          ))
        : this.file.match(/^\'/) && this.file.match(/\'$/)
        ? (this.file = k.parser.parse(this.file))
        : (this.file = k.parser.parse("'" + this.file + "'"));
      this.oldFile = k.eval(this.file);
      this.MyIFrame = document.createElement("iframe");
      0 != this.oldFile && this.MyIFrame.setAttribute("src", this.oldFile);
      this.MyIFrame.setAttribute("marginheight", 0);
      this.MyIFrame.setAttribute("marginwidth", 0);
      this.MyIFrame.setAttribute("frameborder", 0);
      this.MyIFrame.setAttribute("scrolling", "auto");
      this.MyIFrame.setAttribute("style", "position:static;left:0px;top:0px;");
      this.container = document.createElement("div");
      this.container.setAttribute("id", this.id);
      this.container.setAttribute(
        "style",
        (a.isIOS
          ? "overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;"
          : "") +
          "position:absolute; width:" +
          this.w +
          "px;height:" +
          this.h +
          "px;left:" +
          this.x +
          "px;top:" +
          this.y +
          "px;z-index:" +
          this.zIndex +
          ";background-repeat:no-repeat;background-position:center;"
      );
      this.container.appendChild(this.MyIFrame);
      this.imageSrc &&
        (this.container.style.backgroundImage = "url(" + this.imageSrc + ")");
      this.parent.container.insertBefore(this.container, this.parent.loader);
      var f = this;
      this.MyIFrame.onload = function (a) {
        var b = this;
        f.evaluator.setFunction(f.id + ".set", function (a, c) {
          b.contentWindow.postMessage({ type: "set", name: a, value: c }, "*");
          return 0;
        });
        f.evaluator.setFunction(f.id + ".update", function () {
          b.contentWindow.postMessage({ type: "update" }, "*");
          return 0;
        });
        f.evaluator.setFunction(f.id + ".exec", function (a, c) {
          b.contentWindow.postMessage({ type: "exec", name: a, value: c }, "*");
          return 0;
        });
        f.ImReady = !f.isFirefox;
        f.isFirefox ||
          ((f.container.style.visibility = "visible"),
          (f.container.style.opacity = "1"),
          (f.container.style.zIndex = f.zIndex),
          (f.container.style.display = f.drawIfValue ? "block" : "none"));
        f.MyIFrame.style.visibility = "visible";
        f.container.style.backgroundImage = "";
      };
      this.update = this.iframeUpdate;
      this.evaluator.setVariable(this.id + "._scroll", 0);
    };
    a.extend(a.SpaceHTML_IFrame, a.Space);
    a.SpaceHTML_IFrame.prototype.init = function () {
      c = this;
      c.uber.init.call(c);
      c.MyIFrame &&
        ((c.MyIFrame.style.width = c.w + "px"),
        (c.MyIFrame.style.height = c.h + "px"),
        (c.MyIFrame.style.left = c.x + "px"),
        (c.MyIFrame.style.top = c.y + "px"));
    };
    a.SpaceHTML_IFrame.prototype.iframeUpdate = function (a) {
      k = this.evaluator;
      this.drawIfValue = 0 < k.eval(this.drawif);
      this.ImReady
        ? (this.container.style.display = this.drawIfValue ? "block" : "none")
        : ((this.container.style.visibility = this.drawIfValue
            ? "visible"
            : "hidden"),
          (this.container.style.opacity = this.drawIfValue ? "1" : "0"),
          (this.container.style.zIndex = this.drawIfValue
            ? this.zIndex
            : -1e3));
      if (this.drawIfValue) {
        this.MyIFrame.contentWindow.focus();
        a && (this.y = this.x = Infinity);
        d = this.x !== k.eval(this.xExpr) + this.displaceRegionWest;
        f =
          this.y !==
          k.eval(this.yExpr) +
            this.parent.plecaHeight +
            this.displaceRegionNorth;
        this.x = d ? k.eval(this.xExpr) + this.displaceRegionWest : this.x;
        this.y = f
          ? k.eval(this.yExpr) +
            this.parent.plecaHeight +
            this.displaceRegionNorth
          : this.y;
        void 0 != this._w_ &&
          ((a = k.eval(this._w_)),
          this.w !== a &&
            ((this.container.style.width = a + "px"),
            (this.MyIFrame.style.width = a + "px"),
            (this.w = a)));
        void 0 != this._h_ &&
          ((a = k.eval(this._h_)),
          this.h !== a &&
            ((this.container.style.height = a + "px"),
            (this.MyIFrame.style.height = a + "px"),
            (this.h = a)));
        if (d || f)
          (this.container.style.left = this.x + "px"),
            (this.container.style.top = this.y + "px");
        q = k.eval(this.file);
        q !== this.oldFile &&
          ((this.ImReady = !1),
          this.isFirefox ||
            ((this.container.style.display = "block"),
            (this.container.style.visibility = this.drawIfValue
              ? "visible"
              : "hidden"),
            (this.container.style.opacity = this.drawIfValue ? "1" : "0"),
            (this.container.style.zIndex = this.drawIfValue
              ? this.zIndex
              : -1e3)),
          this.imageSrc &&
            (this.container.style.backgroundImage =
              "url(" + this.imageSrc + ")"),
          (this.MyIFrame.style.visibility = "hidden"),
          (this.oldFile = q),
          this.MyIFrame.contentWindow.location.replace(q));
        h = k.getVariable(this.id + "._scroll");
        1 == h
          ? (this.MyIFrame.setAttribute("scrolling", "yes"),
            (this.MyIFrame.style.overflow = ""))
          : -1 == h
          ? (this.MyIFrame.setAttribute("scrolling", "no"),
            (this.MyIFrame.style.overflow = "hidden"))
          : (this.MyIFrame.setAttribute("scrolling", "auto"),
            (this.MyIFrame.style.overflow = ""));
      } else this.MyIFrame.contentWindow.blur();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    if (a.loadLib) return a;
    var k, d, f;
    a.DescartesLoader = function (c) {
      var d = this;
      this.children = c.children;
      this.lessonParser = c.lessonParser;
      this.images = c.images;
      this.images.length = c.images.length;
      this.audios = c.audios;
      this.audios.length = c.audios.length;
      this.descartesApp = c;
      var g = c.imgLoader
        ? c.imgLoader
        : q(c.loader.width, c.loader.height, c.ratio);
      this.imageLoader = document.createElement("div");
      this.imageLoader.width = c.width;
      this.imageLoader.height = c.height;
      this.imageLoader.setAttribute("class", "DescartesLoaderImage");
      this.imageLoader.setAttribute(
        "style",
        "background-image:url(" +
          g +
          ");background-size:cover;width:" +
          c.width +
          "px;height:" +
          c.height +
          "px;"
      );
      c.loader.appendChild(this.imageLoader);
      this.loaderBar = document.createElement("canvas");
      this.loaderBar.width = c.width;
      this.loaderBar.height = c.height;
      this.loaderBar.setAttribute("class", "DescartesLoaderBar");
      this.loaderBar.setAttribute(
        "style",
        "width:" + c.width + "px;height:" + c.height + "px;"
      );
      this.loaderBar.ctx = this.loaderBar.getContext("2d");
      c.loader.appendChild(this.loaderBar);
      this.barWidth = 80;
      this.barHeight = Math.floor(c.loader.height / 70);
      this.timer = a.setInterval(function () {
        d.drawLoaderBar(d.loaderBar.ctx, c.width, c.height);
      }, 10);
      c.firstRun = !1;
      this.initPreloader();
    };
    a.DescartesLoader.prototype.initPreloader = function () {
      var c = this.children,
        d = this.images,
        g = this.audios,
        b = /[\w\.\-//]*(\.png|\.jpg|\.gif|\.svg)/gi,
        f = /[\w\.\-//]*(\.ogg|\.oga|\.mp3|\.wav)/gi;
      d["lib/DescartesCCLicense.png"] = a.getCCLImg();
      d["lib/DescartesCCLicense.png"].addEventListener("load", function () {
        this.ready = 1;
      });
      d["lib/DescartesCCLicense.png"].addEventListener("error", function () {
        this.errorload = 1;
      });
      var k, r, n, q, x, e;
      n = 0;
      for (x = c.length; n < x; n++)
        if ("rtf" !== c[n].name) {
          if (c[n].value.match(/'macro'|'makro'/g)) {
            q = "";
            var p;
            k = this.lessonParser.split(c[n].value);
            r = 0;
            for (e = k.length; r < e; r++)
              "expresion" === babel[k[r][0]] && (q = k[r][1]);
            q &&
              ((p = document.getElementById(q)) && "descartes/macro" == p.type
                ? (p = p.text)
                : (p = a.openExternalFile(q)) &&
                  !p.match(/tipo_de_macro/g) &&
                  (p = null));
            if (p && (k = p.match(b)))
              for (q = 0, e = k.length; q < e; q++)
                (r = k[q]),
                  r.toLowerCase().match(/vacio.gif$/) ||
                    "" == r.substring(0, r.length - 4) ||
                    ((d[r] = new Image()),
                    d[r].addEventListener("load", function () {
                      this.ready = 1;
                    }),
                    d[r].addEventListener("error", function () {
                      this.errorload = 1;
                    }),
                    (d[r].src = r));
          }
          if ((k = c[n].value.match(b)))
            for (q = 0, e = k.length; q < e; q++)
              (r = k[q]),
                r.toLowerCase().match(/vacio.gif$/) ||
                  "" == r.substring(0, r.length - 4) ||
                  ((d[r] = new Image()),
                  d[r].addEventListener("load", function () {
                    this.ready = 1;
                  }),
                  d[r].addEventListener("error", function () {
                    this.errorload = 1;
                  }),
                  (d[r].src = r));
          if ((k = c[n].value.match(f)))
            for (q = 0, r = k.length; q < r; q++) this.initAudio(k[q]);
        }
      for (var l in d) d.hasOwnProperty(l) && this.images.length++;
      for (l in g) g.hasOwnProperty(l) && this.audios.length++;
      var w = this,
        y = this.images.length + this.audios.length;
      this.sep = (2 * (this.barWidth - 2)) / y;
      var B = function () {
        w.readys = 0;
        for (var b in d)
          d.hasOwnProperty(b) && (d[b].ready || d[b].errorload) && w.readys++;
        for (b in w.audios)
          g.hasOwnProperty(b) && (g[b].ready || g[b].errorload) && w.readys++;
        w.readys != y
          ? a.setTimeout(B, 30)
          : (a.clearInterval(w.timer), w.descartesApp.initBuildApp());
      };
      B();
    };
    a.DescartesLoader.prototype.initAudio = function (c) {
      var d = this.audios;
      d[c] = new Audio(c);
      d[c].filename = c;
      var g = function () {
          this.ready = 1;
        },
        b = function () {
          this.canPlayType(
            "audio/" + this.filename.substring(this.filename.length - 3)
          ) || "mp3" != this.filename.substring(this.filename.length - 3)
            ? (console.log("El archivo '" + c + "' no puede ser reproducido"),
              (this.errorload = 1))
            : ((d[c] = new Audio(this.filename.replace("mp3", "ogg"))),
              (d[c].filename = this.filename.replace("mp3", "ogg")),
              d[c].addEventListener("canplaythrough", g),
              d[c].addEventListener("load", g),
              d[c].addEventListener("error", b),
              d[c].load());
        };
      d[c].addEventListener("canplaythrough", g);
      d[c].addEventListener("load", g);
      d[c].addEventListener("error", b);
      a.hasTouchSupport
        ? (d[c].load(),
          d[c].play(),
          a.setTimeout(function () {
            d[c].pause();
          }, 20),
          (d[c].ready = 1))
        : d[c].load();
    };
    a.DescartesLoader.prototype.drawLoaderBar = function (a, h, g) {
      d = this.barWidth;
      f = this.barHeight;
      a.translate(h / 2, (g - 65 * k) / 2 + 90 * k);
      a.scale(k, k);
      a.strokeRect(-d, -f, 2 * d, f);
      a.fillStyle = "#888";
      a.fillRect(-d + 2, -f + 2, 2 * (d - 2), f - 4);
      a.fillStyle = "#1f358d";
      a.fillRect(-d + 2, -f + 2, this.readys * this.sep, f - 4);
      a.setTransform(1, 0, 0, 1, 0, 0);
    };
    var q = function (a, d, g) {
      var b = document.createElement("canvas");
      g = 5e6 < a * this.ratio * d * this.ratio ? 1 : g;
      b.width = a * g;
      b.height = d * g;
      b.style.width = a + "px";
      b.style.height = d + "px";
      var f = b.getContext("2d");
      f.save();
      f.setTransform(g, 0, 0, g, 0, 0);
      f.strokeStyle = f.fillStyle = "#1f358d";
      f.lineCap = "round";
      f.lineWidth = 2;
      f.beginPath();
      k = a < d ? a / 360 : d / 195;
      k = 2.5 < k ? 2.5 : k;
      f.translate((a - 120 * k) / 2, (d - 65 * k) / 2);
      f.scale(k, k);
      f.moveTo(3, 25);
      f.lineTo(3, 1);
      f.lineTo(21, 1);
      f.bezierCurveTo(33, 1, 41, 15, 41, 25);
      f.stroke();
      f.beginPath();
      f.moveTo(1, 63);
      f.lineTo(1, 64);
      f.moveTo(5, 62);
      f.lineTo(5, 64);
      f.moveTo(9, 61);
      f.lineTo(9, 64);
      f.moveTo(13, 60);
      f.lineTo(13, 64);
      f.moveTo(17, 58);
      f.lineTo(17, 64);
      f.moveTo(21, 56);
      f.lineTo(21, 64);
      f.moveTo(25, 53);
      f.lineTo(25, 64);
      f.moveTo(29, 50);
      f.lineTo(29, 64);
      f.moveTo(33, 46);
      f.lineTo(33, 64);
      f.moveTo(37, 41);
      f.lineTo(37, 64);
      f.moveTo(41, 32);
      f.lineTo(41, 64);
      f.stroke();
      f.font = "20px descartesJS_sansserif, Arial, Helvetica, Sans-serif";
      f.fillText("escartes", 45, 33);
      f.fillText("JS", 98, 64);
      f.restore();
      return b.toDataURL();
    };
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k(a) {
      for (var b = "[", c = 0, d = a.length; c < d; c++)
        a[c] instanceof Array
          ? (b += k(a[c]))
          : ((f = a[c]),
            ("undefined" != typeof f && f) || (f = 0),
            "string" == typeof f && (f = "'" + f + "'"),
            (b += f)),
          c < d - 1 && (b += ",");
      return b + "]";
    }
    function d() {
      q = window.innerWidth / this.width;
      c = window.innerHeight / this.height;
      h = Math.min(q, c);
      a.cssScale = h.toFixed(3);
      this.container.parentNode.setAttribute("align", "");
      this.container.style.transformOrigin = "0 0";
      q < c
        ? ((this.container.style.left = ""),
          (this.container.style.transform =
            "perspective(1px) scale(" + h + ") translate3d(0, 0, 0)"))
        : ((this.container.style.left = "50%"),
          (this.container.style.transform =
            "perspective(1px) scale(" + h + ") translate3d(-50%, 0, 0)"));
    }
    if (a.loadLib) return a;
    a.DescartesApp = function (c) {
      this.animation = { playing: !1, stop: function () {} };
      this.ratio = a._ratio;
      this.applet = c;
      this.parentC = c.parentNode;
      this.width = parseFloat(c.getAttribute("width"));
      this.height = parseFloat(c.getAttribute("height"));
      this.decimal_symbol = ".";
      this.decimal_symbol_regexp = new RegExp("\\" + this.decimal_symbol, "g");
      this.language = "espa\u00f1ol";
      this.children = c.getElementsByTagName("param");
      a.ccLicense = !0;
      for (var b = 0, d = this.children.length; b < d; b++)
        "CreativeCommonsLicense" === this.children[b].name &&
          (a.ccLicense = "no" === this.children[b].value ? !1 : !0);
      this.code = c.getAttribute("code");
      this.saveState = [];
      this.images = {};
      this.images.length = -1;
      this.audios = {};
      this.audios.length = -1;
      this.firstRun = !0;
      this.scaleToFit = function () {};
      this.init();
    };
    a.DescartesApp.prototype.init = function () {
      this.stop();
      this.evaluator = new a.Evaluator(this);
      this.lessonParser = new a.LessonParser(this);
      this.arquimedes = /DescartesWeb2_0|Arquimedes|Discurso/i.test(this.code);
      this.licenseA = a.ccLicense
        ? "{\\rtf1\\uc0{\\fonttbl\\f0\\fcharset0 Arial;\\f1\\fcharset0 Arial;\\f2\\fcharset0 Arial;\\f3\\fcharset0 Arial;\\f4\\fcharset0 Arial;}{\\f0\\fs34 __________________________________________________________________________________\\par \\fs22                                        Los contenidos de esta unidad did\u00e1ctica interactiva est\u00e1n bajo una {\\*\\hyperlink licencia Creative Commons|http://creativecommons.org/licenses/by-nc-sa/4.0/}, si no se indica lo contrario.\\par                                        La unidad did\u00e1ctica fue creada con Arqu\u00edmedes, que es un producto de c\u00f3digo abierto, {\\*\\hyperlink Creditos|http://arquimedes.matem.unam.mx/Descartes5/creditos/conCCL.html}\\par }"
        : "";
      for (
        var c = this.children,
          b,
          f = 0,
          h = 0,
          k = a.ccLicense ? 90 : 0,
          n = 0,
          q = c.length;
        n < q;
        n++
      )
        (b = c[n]),
          "rtf_height" == b.name && (f = parseInt(b.value) || this.height),
          "Buttons" == babel[b.name] &&
            ((this.buttonsConfig = this.lessonParser.parseButtonsConfig(
              b.value
            )),
            (h = this.buttonsConfig.height)),
          "image_loader" == b.name && (this.imgLoader = b.value),
          "expand" == b.name &&
            ("cover" == b.value
              ? (this.expand = b.value)
              : "fit" == b.value && (this.scaleToFit = d)),
          "docBase" == b.name &&
            ((this.docBase = b.value),
            (b = document.createElement("base")),
            b.setAttribute("id", "descartesJS_base"),
            b.setAttribute("href", this.docBase),
            document.head.appendChild(b));
      this.expand &&
        "cover" == this.expand &&
        ((this.width = window.innerWidth), (this.height = window.innerHeight));
      this.arquimedes && ((this.ratio = 1), f && (this.height = f + h + k));
      this.spaces = [];
      this.externalSpace &&
        document.body.removeChild(this.externalSpace.container);
      this.externalSpace = new a.SpaceExternal(this);
      this.northSpace = {
        container: document.createElement("div"),
        controls: [],
      };
      this.southSpace = {
        container: document.createElement("div"),
        controls: [],
      };
      this.eastSpace = {
        container: document.createElement("div"),
        controls: [],
      };
      this.westSpace = {
        container: document.createElement("div"),
        controls: [],
      };
      this.editableRegion = {
        container: document.createElement("div"),
        textFields: [],
      };
      a.Editor && (this.editor = new a.Editor(this));
      this.controls = [];
      this.auxiliaries = [];
      this.events = [];
      this.nIframes = this.plecaHeight = this.tabindex = this.zIndex = 0;
      void 0 != this.container && this.parentC.removeChild(this.container);
      this.container = document.createElement("div");
      this.loader = document.createElement("div");
      this.parentC.appendChild(this.container);
      this.container.width = this.width;
      this.container.height = this.height;
      this.container.setAttribute("class", "DescartesAppContainer");
      this.container.setAttribute(
        "style",
        "width:" + this.width + "px;height:" + this.height + "px;"
      );
      this.scaleToFit();
      this.container.appendChild(this.loader);
      this.loader.width = this.width;
      this.loader.height = this.height;
      this.loader.setAttribute("class", "DescartesLoader");
      this.loader.setAttribute(
        "style",
        "width:" + this.width + "px;height:" + this.height + "px;z-index:1000;"
      );
      this.imgLoader && (this.loader.style.backgroundColor = "rgba(0,0,0,0)");
      this.firstRun
        ? (this.descartesLoader = new a.DescartesLoader(this))
        : this.initBuildApp();
    };
    a.DescartesApp.prototype.initBuildApp = function () {
      a.showConfig = !0;
      for (
        var c = this.children,
          b = this.lessonParser,
          d = [],
          f = [],
          h = [],
          k = [],
          q = [],
          x = [],
          e,
          p = 0,
          l = c.length;
        p < l;
        p++
      )
        if (
          ((e = c[p]),
          "editable" == babel[e.name] &&
            (a.showConfig = "false" == babel[e.value] ? !1 : !0),
          "language" == babel[e.name] && (this.language = e.value),
          "pleca" == e.name)
        )
          (e = b.parsePleca(e.value, this.width)),
            this.container.insertBefore(e, this.loader),
            (this.plecaHeight = e.imageHeight ? e.imageHeight : e.offsetHeight);
        else if ("Buttons" == babel[e.name])
          this.buttonsConfig = b.parseButtonsConfig(e.value);
        else if ("decimal_symbol" == babel[e.name])
          (this.decimal_symbol = e.value),
            (this.decimal_symbol_regexp = new RegExp(
              "\\" + this.decimal_symbol,
              "g"
            ));
        else if ("version" == babel[e.name]) this.version = parseInt(e.value);
        else if ("language" == babel[e.name]) this.language = e.value;
        else if ("rtf" == e.name) {
          var w = (this.width - 780) / 2,
            y =
              parseInt(this.height) -
              this.plecaHeight -
              this.buttonsConfig.height -
              45;
          k.push(
            "space='descartesJS_stage' type='text' expresion='[10,20]' background='yes' text='" +
              e.value.replace(/'/g, "&squot;") +
              "'"
          );
          k.push(
            "space='descartesJS_stage' type='text' expresion='[" +
              w +
              "," +
              (y - 25) +
              "]' background='yes' text='" +
              this.licenseA +
              "'"
          );
          a.ccLicense &&
            k.push(
              "space='descartesJS_stage' type='image' expresion='[" +
                (w + 15) +
                "," +
                y +
                "]' background='yes' abs_coord='yes' file='lib/DescartesCCLicense.png'"
            );
        } else if ("E" == e.name.charAt(0))
          e.value.match(/'HTMLIFrame'/) && this.nIframes++, d.push(e.value);
        else if (/^C_/.test(e.name)) f.push(e.value);
        else if (/^A_/.test(e.name)) h.push(e.value);
        else if (/^G_/.test(e.name)) {
          if (
            e.value.match("type='fill'") ||
            e.value.match("tipo='relleno'") ||
            e.value.match("tipus='ple'") ||
            e.value.match("mota='betea'") ||
            e.value.match("type='plein'") ||
            e.value.match("tipo='recheo'") ||
            e.value.match("tipo='curva_piena'") ||
            e.value.match("tipo='preencher'") ||
            e.value.match("tipus='ple'")
          )
            this.ratio = 1;
          k.push(e.value);
        } else
          /^S_/.test(e.name)
            ? q.push(e.value)
            : "Animation" == babel[e.name] && x.push(e.value);
      this.stage = { container: document.createElement("div"), scroll: 0 };
      this.stage.container.setAttribute("id", "descartesJS_Stage");
      this.stage.stageSpace = this.lessonParser.parseSpace(
        "tipo='R2' id='descartesJS_stage' fondo='blanco' x='0' y='0' fijo='yes' red='no' red10='no' ejes='no' text='no' ancho='" +
          this.width +
          "' alto='" +
          this.height +
          "'"
      );
      this.stage.container.appendChild(this.stage.stageSpace.container);
      this.arquimedes &&
        (this.container.appendChild(this.stage.container),
        this.spaces.push(this.stage.stageSpace));
      p = 0;
      for (l = d.length; p < l; p++)
        (c = b.parseSpace(d[p])),
          this.arquimedes && this.stage.container.appendChild(c.container),
          this.spaces.push(c),
          this.zIndex++;
      p = 0;
      for (l = k.length; p < l; p++)
        if ((d = b.parseGraphic(k[p])))
          d.visible && (this.editableRegionVisible = !0), d.space.addGraph(d);
      p = 0;
      for (l = q.length; p < l; p++)
        (d = b.parse3DGraphic(q[p])) && d.space.addGraph(d, !0);
      p = 0;
      for (l = f.length; p < l; p++) this.controls.push(b.parseControl(f[p]));
      p = 0;
      for (l = h.length; p < l; p++) b.parseAuxiliar(h[p]);
      p = 0;
      for (l = x.length; p < l; p++) this.animation = b.parseAnimation(x[p]);
      this.configRegions();
      this.updateAuxiliaries();
      this.updateAuxiliaries();
      p = 0;
      for (l = this.controls.length; p < l; p++) this.controls[p].init();
      this.updateControls();
      this.updateSpaces(!0);
      var B = this;
      this.nIframes
        ? a.setTimeout(function () {
            B.finishInit();
          }, 200 * this.nIframes)
        : this.finishInit();
    };
    a.DescartesApp.prototype.finishInit = function () {
      this.evaluator.setVariable("decimalSymbol", this.decimal_symbol);
      this.update();
      this.loader.style.display = "none";
      window.parent !== window &&
        ((this.parentC.style.margin = "0px"),
        (this.parentC.style.padding = "0px"),
        window.parent.postMessage(
          {
            type: "reportSize",
            href: window.location.href,
            width: this.width,
            height: this.height,
          },
          "*"
        ),
        window.parent.postMessage(
          { type: "ready", value: window.location.href },
          "*"
        ),
        a.onResize());
      window.opener &&
        window.opener.postMessage(
          { type: "isResizeNeeded", href: window.location.href },
          "*"
        );
      this.externalSpace.init();
      var c;
      try {
        c = new CustomEvent("descartesReady", { detail: "" });
      } catch (b) {
        (c = document.createEvent("CustomEvent")),
          c.initCustomEvent("descartesReady", !1, !1, { cmd: "" });
      }
      window.dispatchEvent(c);
    };
    a.DescartesApp.prototype.adjustSize = function () {
      document.body.style.margin = "0px";
      document.body.style.padding = "0px";
      this.parentC.style.margin = "0px";
      this.parentC.style.padding = "0px";
      var c = parseInt(this.width) + 30,
        b = parseInt(this.height) + 90;
      window.moveTo(
        (parseInt(screen.width) - c) / 2,
        (parseInt(screen.height) - b) / 2
      );
      window.resizeTo(c, b);
      a.onResize();
    };
    a.DescartesApp.prototype.adjustDimensions = function () {
      var a, b, c;
      if (void 0 == this.init_w || void 0 == this.init_h)
        (this.init_w = parseInt(this.container.style.width)),
          (this.init_h = parseInt(this.container.style.height));
      b = parseInt(this.parentC.offsetWidth);
      a = this.init_w;
      c = b / a;
      a > b
        ? (this.parentC != document.body &&
            (this.parentC.style.height = this.init_h * c + "px"),
          (this.percent = c),
          (this.container.style.webkitTransform =
            this.container.style.MozTransform =
              "scale(" + c + ")"),
          (this.container.style.webkitTransformOrigin =
            this.container.style.MozTransformOrigin =
              "top left"))
        : (this.parentC != document.body &&
            (this.parentC.style.height = "auto"),
          (this.percent = 1),
          (this.container.style.webkitTransform =
            this.container.style.MozTransform =
              ""),
          (this.container.style.webkitTransformOrigin =
            this.container.style.MozTransformOrigin =
              ""));
    };
    a.DescartesApp.prototype.configRegions = function () {
      var c = this.evaluator.parser,
        b = this.buttonsConfig,
        d = this.container,
        f = "15",
        h = 100,
        k = 100,
        q = 100,
        x = 100;
      2 == this.version && ((f = "14"), (h = 63), (k = 50), (q = 44), (x = 53));
      var e = 0,
        p = 0,
        l = 0,
        w = 0,
        y = 0,
        B = 0,
        E = 0,
        D = 0,
        F = 0,
        E = this.northSpace.controls,
        D = this.southSpace.controls,
        H = this.eastSpace.controls,
        y = this.westSpace.controls;
      if (0 < b.rowsNorth || 0 < E.length || b.about || b.config) {
        0 >= b.rowsNorth
          ? ((e = b.height), (b.rowsNorth = 1))
          : (e = b.height * b.rowsNorth);
        B = this.northSpace.container;
        B.setAttribute("id", "descartesJS_north");
        B.setAttribute(
          "style",
          "width:" +
            d.width +
            "px; height:" +
            e +
            "px; background:#c0c0c0; position:absolute; left:0px; top: " +
            this.plecaHeight +
            "px; z-index:100;"
        );
        d.insertBefore(B, this.loader);
        var B = d.width,
          G = 0;
        b.about ? ((G = h), (B -= G)) : (h = 0);
        b.config && (B -= k);
        for (
          var K = Math.ceil(E.length / b.rowsNorth),
            C = B / K,
            w = 0,
            A = E.length;
          w < A;
          w++
        )
          (E[w].expresion = c.parse(
            "(" +
              (G + (w % K) * C) +
              "," +
              b.height * Math.floor(w / K) +
              "," +
              C +
              "," +
              b.height +
              ")"
          )),
            (E[w].drawif = c.parse("1")),
            E[w].init();
        b.about &&
          ((w = new a.Button(this, {
            region: "north",
            name: "english" == this.language ? "about" : "cr\u00e9ditos",
            font_size: c.parse(f),
            expresion: c.parse("(0, 0, " + h + ", " + e + ")"),
          })),
          (w.actionExec = { execute: a.showAbout }),
          w.update());
        b.config &&
          new a.Button(this, {
            region: "north",
            name: "config",
            font_size: c.parse(f),
            action: "config",
            expresion: c.parse("(" + (B + h) + ", 0, " + k + ", " + e + ")"),
          }).update();
      }
      if (0 < b.rowsSouth || 0 < D.length || b.init || b.clear) {
        0 >= b.rowsSouth
          ? ((p = b.height), (b.rowsSouth = 1))
          : (p = b.height * b.rowsSouth);
        E = d.width;
        G = 0;
        b.init ? ((G = q), (E -= G)) : (q = 0);
        b.clear && (E -= x);
        B = this.southSpace.container;
        B.setAttribute("id", "descartesJS_south");
        B.setAttribute(
          "style",
          "width:" +
            d.width +
            "px; height:" +
            p +
            "px; background:#c0c0c0; position:absolute; left: 0px; top:" +
            (d.height - p) +
            "px; z-index:100;"
        );
        d.insertBefore(B, this.loader);
        K = Math.ceil(D.length / b.rowsSouth);
        C = E / K;
        w = 0;
        for (A = D.length; w < A; w++)
          (D[w].expresion = c.parse(
            "(" +
              (G + (w % K) * C) +
              "," +
              b.height * Math.floor(w / K) +
              "," +
              C +
              "," +
              b.height +
              ")"
          )),
            (D[w].drawif = c.parse("1")),
            D[w].init();
        b.init &&
          new a.Button(this, {
            region: "south",
            name: "english" == this.language ? "init" : "inicio",
            font_size: c.parse(f),
            action: "init",
            expresion: c.parse("(0, 0, " + q + ", " + p + ")"),
          }).update();
        b.clear &&
          new a.Button(this, {
            region: "south",
            name: "english" == this.language ? "clear" : "limpiar",
            font_size: c.parse(f),
            action: "clear",
            expresion: c.parse("(" + (E + q) + ", 0, " + x + ", " + p + ")"),
          }).update();
      }
      if (0 < H.length)
        for (
          l = d.height - e - p,
            D = b.widthEast,
            B = this.eastSpace.container,
            B.setAttribute("id", "descartesJS_east"),
            B.setAttribute(
              "style",
              "width:" +
                D +
                "px; height:" +
                l +
                "px; background:#c0c0c0; position:absolute; left:" +
                (d.width - D) +
                "px; top:" +
                e +
                "px; z-index:100;"
            ),
            d.insertBefore(B, this.loader),
            w = 0,
            A = H.length;
          w < A;
          w++
        )
          (H[w].expresion = c.parse(
            "(0," + b.height * w + "," + D + "," + b.height + ")"
          )),
            (H[w].drawif = c.parse("1")),
            H[w].init();
      if (0 < y.length)
        for (
          w = d.height - e - p,
            F = b.widthWest,
            B = this.westSpace.container,
            B.setAttribute("id", "descartesJS_west"),
            B.setAttribute(
              "style",
              "width: " +
                F +
                "px; height: " +
                w +
                "px; background: #c0c0c0; position: absolute; left: 0px; top: " +
                e +
                "px; z-index: 100;"
            ),
            d.insertBefore(B, this.loader),
            w = 0,
            A = y.length;
          w < A;
          w++
        )
          (y[w].expresion = c.parse(
            "(0," + b.height * w + "," + F + "," + b.height + ")"
          )),
            (y[w].drawif = c.parse("1")),
            y[w].init();
      if (this.editableRegionVisible)
        for (
          y = b.height,
            B = this.editableRegion.container,
            B.setAttribute("id", "descartesJS_editableRegion"),
            B.setAttribute(
              "style",
              "width:" +
                d.width +
                "px; height:" +
                y +
                "px; position:absolute; left:0px; top:" +
                (d.height - p - b.height) +
                "px; z-index:100; background:#c0c0c0; overflow:hidden;"
            ),
            d.insertBefore(B, this.loader),
            c = this.editableRegion.textFields,
            d = d.width / c.length,
            b = a.getFieldFontSize(y),
            w = 0,
            A = c.length;
          w < A;
          w++
        )
          "div" == c[w].type
            ? (B.appendChild(c[w].container),
              c[w].container.setAttribute(
                "style",
                "font-family:descartesJS_sansserif,Arial,Sans-serif;width:" +
                  (d - 4) +
                  "px;height:" +
                  y +
                  "px;position:absolute;left:" +
                  w * d +
                  "px;top:0;"
              ),
              (f = c[w].container.firstChild),
              f.setAttribute(
                "style",
                "font-family:descartesJS_sansserif,Arial,Sans-serif;font-size:" +
                  b +
                  "px;padding-top:0%;background-color:#e0e4e8;position:absolute;left:0;top:0;height:" +
                  y +
                  "px;text-align:center;line-height:" +
                  y +
                  "px;"
              ),
              (h = f.offsetWidth),
              (f.style.width = h + "px"),
              (f.firstChild.textContent = f.firstChild.textContent.substring(
                3,
                f.firstChild.textContent.length - 3
              )),
              c[w].container.lastChild.setAttribute(
                "style",
                "font-family:descartesJS_monospace,'Courier New',Monospace;font-size:" +
                  b +
                  "px;width:" +
                  (d - h) +
                  "px;height:" +
                  y +
                  "px;position:absolute;left:" +
                  h +
                  "px;top:0;border:2px groove white;"
              ))
            : (B.appendChild(c[w]),
              c[w].setAttribute(
                "style",
                "font-family:descartesJS_monospace,'Courier New',Monospace;font-size:" +
                  b +
                  "px;width:" +
                  d +
                  "px;height:" +
                  y +
                  "px;position:absolute;left:" +
                  w * d +
                  "px;top:0;border:2px groove white;"
              ));
      this.displaceRegionNorth = e;
      this.displaceRegionSouth = p;
      this.displaceRegionEast = l;
      this.displaceRegionWest = F;
      w = 0;
      for (A = this.spaces.length; w < A; w++) this.spaces[w].init();
    };
    a.DescartesApp.prototype.update = function () {
      this.updateAuxiliaries();
      this.updateControls();
      this.updateEvents();
      this.updateControls();
      this.updateSpaces();
    };
    a.DescartesApp.prototype.clearClick = function () {
      for (var a = 0, b = this.spaces.length; a < b; a++)
        this.spaces[a].clearClick();
    };
    a.DescartesApp.prototype.deactivateGraphiControls = function () {
      for (var a, b = 0, c = this.controls.length; b < c; b++)
        (a = this.controls[b]), "graphic" == a.type && a.deactivate();
    };
    a.DescartesApp.prototype.updateAuxiliaries = function () {
      for (var a = 0, b = this.auxiliaries.length; a < b; a++)
        this.auxiliaries[a].update();
    };
    a.DescartesApp.prototype.updateEvents = function () {
      for (var a = 0, b = this.events.length; a < b; a++)
        this.events[a].update();
    };
    a.DescartesApp.prototype.updateControls = function () {
      for (var a = 0, b = this.controls.length; a < b; a++)
        this.controls[a].update();
    };
    a.DescartesApp.prototype.updateSpaces = function (a) {
      for (var b = 0, c = this.spaces.length; b < c; b++)
        this.spaces[b].update(a);
    };
    a.DescartesApp.prototype.clear = function () {
      for (var a = 0, b = this.spaces.length; a < b; a++)
        (this.spaces[a].spaceChange = !0),
          this.spaces[a].drawBackground && this.spaces[a].drawBackground();
    };
    a.DescartesApp.prototype.play = function () {
      this.animation && this.animation.play();
    };
    a.DescartesApp.prototype.stop = function () {
      this.animation && this.animation.stop();
    };
    a.DescartesApp.prototype.reinitAnimation = function () {
      this.animation && this.animation.reinit();
    };
    a.DescartesApp.prototype.stopAudios = function () {
      this.stop();
      for (var a in this.audios)
        this.audios.hasOwnProperty(a) &&
          this.audios[a].pause &&
          (this.audios[a].pause(), (this.audios[a].currentTime = 0));
    };
    a.DescartesApp.prototype.getImage = function (a) {
      var b = this.images;
      return a
        ? (b[a] ||
            ((b[a] = new Image()),
            b[a].addEventListener("load", function () {
              this.ready = 1;
            }),
            b[a].addEventListener("error", function () {
              this.ready = 0;
              this.errorload = 1;
            }),
            (b[a].src = a)),
          b[a])
        : new Image();
    };
    a.DescartesApp.prototype.getAudio = function (c) {
      var b = this.audios;
      if (c) {
        if (!b[c]) {
          var d = c.lastIndexOf("."),
            d = -1 === d ? c.lenght : d;
          c.substring(0, d);
          b[c] = new Audio(c);
          var f = function (a) {
            this.ready = 1;
          };
          b[c].addEventListener("canplaythrough", f);
          var h = function (a) {
            this.canPlayType("audio/" + c.substring(c.length - 3)) ||
            "mp3" != c.substring(c.length - 3)
              ? (console.log("El archivo '" + c + "' no puede ser reproducido"),
                (this.errorload = 1))
              : ((b[c] = new Audio(c.replace("mp3", "ogg"))),
                b[c].addEventListener("canplaythrough", f),
                b[c].addEventListener("load", f),
                b[c].addEventListener("error", h),
                b[c].load());
          };
          b[c].addEventListener("error", h);
          b[c].play();
          a.setTimeout(function () {
            b[c].pause();
          }, 15);
        }
        return b[c];
      }
      return new Audio();
    };
    a.DescartesApp.prototype.getControlByCId = function (a) {
      for (var b, c = 0, d = this.controls.length; c < d; c++)
        if (((b = this.controls[c]), b.cID == a)) return b;
      return { update: function () {}, w: 0 };
    };
    a.DescartesApp.prototype.getControlById = function (a) {
      for (var b, c = 0, d = this.controls.length; c < d; c++)
        if (((b = this.controls[c]), b.id == a)) return b;
      return { update: function () {} };
    };
    a.DescartesApp.prototype.getSpaceByCId = function (a) {
      for (var b, c = 0, d = this.spaces.length; c < d; c++)
        if (((b = this.spaces[c]), b.cID == a)) return b;
      return { update: function () {}, w: 0 };
    };
    a.DescartesApp.prototype.getSpaceById = function (a) {
      for (var b, c = 0, d = this.spaces.length; c < d; c++)
        if (((b = this.spaces[c]), b.id == a)) return b;
      return { update: function () {}, w: 0 };
    };
    var f;
    a.DescartesApp.prototype.getState = function () {
      var a,
        b = "",
        c = this.evaluator.variables,
        d;
      for (d in c)
        c.hasOwnProperty(d) &&
          ((a = c[d]),
          "string" == typeof a && (a = "'" + a + "'"),
          void 0 != a &&
            "rnd" != d &&
            "pi" != d &&
            "e" != d &&
            "Infinity" != d &&
            "-Infinity" != d &&
            "object" != typeof a &&
            (b = "" != b ? b + "\n" + d + "=" + a : d + "=" + a));
      var c = this.evaluator.vectors,
        f;
      for (f in c)
        c.hasOwnProperty(f) && ((a = c[f]), (b = b + "\n" + f + "=" + k(a)));
      f = this.evaluator.matrices;
      for (var h in f)
        f.hasOwnProperty(h) && ((a = f[h]), (b = b + "\n" + h + "=" + k(a)));
      return b;
    };
    a.DescartesApp.prototype.setState = function (a, b) {
      for (var c = a.split("\n"), d, f, h = 0, k = c.length; h < k; h++)
        (d = c[h].split("=")),
          2 <= d.length &&
            ((f = eval(d[1])),
            -1 != d[1].indexOf("[[")
              ? ((this.evaluator.matrices[d[0]] = f),
                (this.evaluator.matrices[d[0]].rows = f.length),
                (this.evaluator.matrices[d[0]].cols = f[0].length))
              : -1 != d[1].indexOf("[")
              ? ((this.evaluator.vectors[d[0]] = f),
                (this.evaluator.variables[d[0] + ".long"] = f.length))
              : (this.evaluator.variables[d[0]] = f));
      b || this.update();
    };
    a.DescartesApp.prototype.getEvaluation = function () {
      for (
        var a = 0, b = 0, c = "", d = 0, f = this.controls.length;
        d < f;
        d++
      )
        "textfield" == this.controls[d].gui &&
          this.controls[d].evaluate &&
          (a++,
          (b += this.controls[d].ok),
          (this.controls[d].value =
            "" == this.controls[d].value ? "''" : this.controls[d].value),
          (c +=
            " \\n " +
            this.controls[d].id +
            "=" +
            this.controls[d].value +
            "|" +
            this.controls[d].ok));
      return (
        "questions=" + a + " \\n correct=" + b + " \\n wrong=" + (a - b) + c
      );
    };
    a.DescartesApp.prototype.showSolution = function () {
      for (var a = this.controls, b = 0, c = a.length; b < c; b++)
        "textfield" == a[b].gui &&
          a[b].evaluate &&
          a[b].changeValue(a[b].getFirstAnswer());
      this.update();
    };
    a.DescartesApp.prototype.showAnswer = function () {
      for (var a = 0, b = this.saveState.length; a < b; a++)
        this.evaluator.eval(this.saveState[a]);
      this.update();
    };
    var q, c, h;
    return a;
  })(descartesJS || {}),
  descartesJS = (function (a) {
    function k() {
      var a = document.getElementById("StyleDescartesApps");
      a && a.parentNode.removeChild(a);
      a = document.createElement("style");
      a.id = "StyleDescartesApps";
      a.type = "text/css";
      a.setAttribute("rel", "stylesheet");
      a.innerHTML =
        "applet.DescartesJS {display:none;} applet {display:none;} ajs.DescartesJS {display:none;} ajs {display:none;}";
      document.head.appendChild(a);
    }
    function d(c) {
      c = document.createElement("div");
      c.innerHTML =
        '<div style="font-size:12px;visibility:hidden;">\n<div style="font-family:descartesJS_serif;">\n<span>_</span>\n<span style="font-weight:bold;">_</span>\n<span style="font-style:italic;">_</span>\n<span style="font-weight:bold;font-style:italic;">_</span>\n</div>\n<div style="font-family:descartesJS_sansserif;">\n<span>_</span>\n<span style="font-weight:bold;">_</span>\n<span style="font-style:italic;">_</span>\n<span style="font-weight:bold;font-style:italic;">_</span>\n</div>\n<div style="font-family:descartesJS_monospace;">\n<span>_</span>\n<span style="font-weight:bold;">_</span>\n<span style="font-style:italic;">_</span>\n<span style="font-weight:bold;font-style:italic;">_</span>\n</div>\n<div style="font-family:descartesJS_extra;">\n<span>_</span>\n<span style="font-weight:bold;">_</span>\n<span style="font-style:italic;">_</span>\n<span style="font-weight:bold;font-style:italic;">_</span>\n</div>\n</div>';
      document.body.appendChild(c);
      a.getFeatures();
      if (a.hasCanvas) {
        window.scrollTo(0, 10);
        for (
          var d = document.querySelectorAll(".DescartesAppContainer"),
            b = 0,
            f = d.length;
          b < f;
          b++
        )
          d[b].parentNode.removeChild(d[b]);
        for (
          var b = document.querySelectorAll("applet,ajs"),
            f =
              /Descartes|DescartesJS|descinst.DescartesWeb2_0.class|Arquimedes|Discurso/i,
            d = [],
            k = 0,
            q = b.length;
          k < q;
          k++
        )
          f.test(b[k].getAttribute("code")) && d.push(b[k]);
        b = 0;
        for (f = d.length; b < f; b++)
          a.apps.push(new a.DescartesApp(d[b])),
            (d[b].className = "DescartesJS");
        window.addEventListener("resize", a.onResize);
        window.scrollTo(0, 0);
      } else
        document.getElementById("StyleDescartesApps").innerHTML =
          "applet.DescartesJS {display:block;} applet {display:block;} ajs.DescartesJS {display:block;} ajs {display:block;}";
      document.body.removeChild(c);
    }
    if (a.loadLib) return a;
    a.apps = [];
    a.getDescartesApps = function () {
      return a.apps;
    };
    (window.hasOwnProperty("debugDescartesJS") && debugDescartesJS) || k();
    a.onResize = function (c) {
      0 < a.apps.length && a.apps[0].scaleToFit();
    };
    a.onMessage = function (c) {
      if (0 < a.apps.length) {
        var d = c.data;
        d &&
          ("set" === d.type
            ? "string" == typeof d.value || "number" == typeof d.value
              ? a.apps[0].evaluator.setVariable(d.name, d.value)
              : d.value && void 0 != d.value.rows
              ? (a.apps[0].evaluator.matrices[d.name] = d.value)
              : (a.apps[0].evaluator.vectors[d.name] = d.value)
            : "update" === d.type
            ? a.apps[0].update()
            : "exec" === d.type
            ? ((c = a.apps[0].evaluator.getFunction(d.name)),
              (d = d.value.toString().split(",")),
              c && c.apply(a.apps[0].evaluator, d))
            : "isResizeNeeded" === d.type
            ? c.source.postMessage({ type: "doResize" }, "*")
            : "doResize" === d.type &&
              0 < a.apps.length &&
              a.apps[0].adjustSize());
      }
    };
    if (void 0 == a.loadLib) {
      a.loadLib = !0;
      window.addEventListener("load", d);
      window.addEventListener("message", a.onMessage);
      for (
        var f = [
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd",
            "MSTransitionEnd",
          ],
          q = 0,
          c = f.length;
        q < c;
        q++
      )
        window.addEventListener(f[q], function (c) {
          a.onResize(c);
        });
    }
    return a;
  })(descartesJS || {});

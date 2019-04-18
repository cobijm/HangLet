var generatedWords = "";

<<<<<<< HEAD
auth.onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	  alert("Hi");
	//   window.location = './singleplayer.html';
	  console.log("current user: "+user);
	} else {
	  // No user is signed in.
	  window.location = './loginPage.html';
	  console.log("no user: "+user);
	}
  });  
//logout
function logout(){ 
	auth.signOut().then(() =>{
	  window.location = './loginPage.html';
  console.log("log out");
	});
  }

function wordSetup() {
  loadJSON(url, newWords);
}
=======
>>>>>>> 590eca3f41b3c51f5115ce93512f4893cab63047


function newWords() {
		var wordsLength = 0;

  var randomNumber = Math.floor(Math.random() * (words.length));

	generatedWords = words[randomNumber];
		arrayOfAlpha = [];
//document.getElementById('wordsGenerated').innerHTML = generatedWords;
	wordsLength = generatedWords.length;
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	clearLetterBank();
}


function ToHomepage()
{
		window.location = './homepage.html'

	
}





/**************
Keyboard below
**************/

function clearLetterBank()
{
		document.getElementById("buttonA").disabled = false;
		document.getElementById("buttonB").disabled = false;
		document.getElementById("buttonC").disabled = false;
		document.getElementById("buttonD").disabled = false;
		document.getElementById("buttonE").disabled = false;
		document.getElementById("buttonF").disabled = false;
		document.getElementById("buttonG").disabled = false;
		document.getElementById("buttonH").disabled = false;
		document.getElementById("buttonI").disabled = false;
		document.getElementById("buttonJ").disabled = false;
		document.getElementById("buttonK").disabled = false;
		document.getElementById("buttonL").disabled = false;
		document.getElementById("buttonM").disabled = false;
		document.getElementById("buttonN").disabled = false;
		document.getElementById("buttonO").disabled = false;
		document.getElementById("buttonP").disabled = false;
		document.getElementById("buttonQ").disabled = false;
		document.getElementById("buttonR").disabled = false;
		document.getElementById("buttonSS").disabled = false;
		document.getElementById("buttonT").disabled = false;
		document.getElementById("buttonU").disabled = false;
		document.getElementById("buttonV").disabled = false;
		document.getElementById("buttonW").disabled = false;
		document.getElementById("buttonX").disabled = false;
		document.getElementById("buttonY").disabled = false;
		document.getElementById("buttonZ").disabled = false;


}


function a()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "a")
		{
			arrayOfAlpha.splice(i, 1, "a ");

		}	
		
		
	}
	document.getElementById("buttonA").disabled = true;

	
	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function b()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "b")
		{
			arrayOfAlpha.splice(i, 1, "b ");

		}	
		
		
	}

			document.getElementById("buttonB").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function c()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "c")
		{
			arrayOfAlpha.splice(i, 1, "c ");

		}	
		
		
	}

			document.getElementById("buttonC").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function d()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "d")
		{
			arrayOfAlpha.splice(i, 1, "d ");

		}	
		
		
	}

				document.getElementById("buttonD").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function e()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "e")
		{
			arrayOfAlpha.splice(i, 1, "e ");

		}	
		
		
	}

				document.getElementById("buttonE").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function f()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "f")
		{
			arrayOfAlpha.splice(i, 1, "f ");

		}	
		
		
	}

				document.getElementById("buttonF").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}

function g()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "g")
		{
			arrayOfAlpha.splice(i, 1, "g ");

		}	
		
		
	}

				document.getElementById("buttonG").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function h()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "h")
		{
			arrayOfAlpha.splice(i, 1, "h ");

		}	
		
		
	}

				document.getElementById("buttonH").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function i()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "i")
		{
			arrayOfAlpha.splice(i, 1, "i ");

		}	
		
		
	}

				document.getElementById("buttonI").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function j()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "j")
		{
			arrayOfAlpha.splice(i, 1, "j ");

		}	
		
		
	}

				document.getElementById("buttonJ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function k()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "k")
		{
			arrayOfAlpha.splice(i, 1, "k ");

		}	
		
		
	}

				document.getElementById("buttonK").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function l()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "l")
		{
			arrayOfAlpha.splice(i, 1, "l ");

		}	
		
		
	}

				document.getElementById("buttonL").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function m()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "m")
		{
			arrayOfAlpha.splice(i, 1, "m ");

		}	
		
		
	}

				document.getElementById("buttonM").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function n()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "n")
		{
			arrayOfAlpha.splice(i, 1, "n ");

		}	
		
		
	}

				document.getElementById("buttonN").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function o()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "o")
		{
			arrayOfAlpha.splice(i, 1, "o ");

		}	
		
		
	}

				document.getElementById("buttonO").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function p()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "p")
		{
			arrayOfAlpha.splice(i, 1, "p ");

		}	
		
		
	}

				document.getElementById("buttonP").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function q()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "q")
		{
			arrayOfAlpha.splice(i, 1, "q ");

		}	
		
		
	}

				document.getElementById("buttonQ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function r()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "r")
		{
			arrayOfAlpha.splice(i, 1, "r ");

		}	
		
		
	}

				document.getElementById("buttonR").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function s()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "s")
		{
			arrayOfAlpha.splice(i, 1, "s ");

		}	
		
		
	}

		document.getElementById("buttonSS").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function t()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "t")
		{
			arrayOfAlpha.splice(i, 1, "t ");

		}	
		
		
	}

				document.getElementById("buttonT").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function u()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "u")
		{
			arrayOfAlpha.splice(i, 1, "u ");

		}	
		
		
	}

				document.getElementById("buttonU").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}


function v()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "v")
		{
			arrayOfAlpha.splice(i, 1, "v ");

		}	
		
		
	}

				document.getElementById("buttonV").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function w()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "w")
		{
			arrayOfAlpha.splice(i, 1, "w ");

		}	
		
		
	}

				document.getElementById("buttonW").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function x()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "x")
		{
			arrayOfAlpha.splice(i, 1, "x ");

		}	
		
		
	}

				document.getElementById("buttonX").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function y()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "y")
		{
			arrayOfAlpha.splice(i, 1, "y ");

		}	
		
		
	}

				document.getElementById("buttonY").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function z()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "z")
		{
			arrayOfAlpha.splice(i, 1, "z ");

		}	
		
		
	}

				document.getElementById("buttonZ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}






var words = [

"glossy",
"birth",
"elite",
"racket",
"challenge",
"swim",
"wont",
"click",
"victory",
"fancy",
    "afterbrains",
    "aftereffect",
    "afterworlds",
    "abolished",
    "abortively",
    "absolutely",
    "abstracters",
    "academician",
    "acceptablenesses",
    "accomplishing",
    "autographically",
    "averagenesses",
    "axisymmetrical",
    "backlogging",
    "baptist",
	"unbecoming",

    "nomade",
    "printwheels",
    "vitrification",
    "curriculums",
    "encryptions",
    "burbot",
    "revaccinate",
    "cicisbeos",
    "subcluster",
    "brer",
    "lowing",
    "pleasantries",
    "impend",
    "bogginesses",
    "copyism",
    "orchestrion",
    "potamogetons",
    "oxyhaemoglobin",
    "rufflers",
    "sudarium",
    "densest",
    "rowt",
    "sawdusty",
    "goldier",
    "italianising",
    "boweries",
    "wondrousnesses",
    "exhaustlessnesses",
    "inclination",
    "southernises",
    "tabellions",
    "mercer",
    "mantrap",
    "somatological",
    "iodisms",
    "programers",
    "oxidisations",
    "untreads",
    "counterdemonstrates",
    "macumba",
    "diminutives",
    "reemployment",
    "polymerised",
    "recompacting",
    "mammalian",
    "dreichest",
    "degeneration",
    "behaviorist",
    "socializing",
    "dugite",
    "vulcanises",
    "emeritae",
    "calthrop",
    "geck",
    "berserks",
    "inshelters",
    "missell",
    "boxy",
    "premodified",
    "spairged",
    "durras",
    "lamiger",
    "manageress",
    "bivalvular",
    "psychologies",
    "disclost",
    "colubriads",
    "hypodiploidies",
    "trogs",
    "smirked",
    "drainages",
    "blowziest",
    "nertz",
    "jaggaries",
    "krumkake",
    "rapports",
    "wintertimes",
    "isobaths",
    "lovers",
    "clogged",
    "discursion",
    "reconnoitering",
    "woodrush",
    "pinsetter",
    "dalasis",
    "blent",
    "recontinued",
    "bicentennial",
    "jumpier",
    "disceptations",
    "naywords",
    "indue",
    "ziggurat",
    "governante",
    "lunging",
    "collarbone",
    "compass",
    "geodynamical",
    "vendage",
    "entering",
    "gybe",
    "gentrified",
    "stimulus",
    "peatland",
    "scaithed",
    "divinatory",
    "microparasitic",
    "knapsacked",
    "colours",
    "unsegregated",
    "republished",
    "rottennesses",
    "highmen",
    "myasis",
    "chewets",
    "rabboni",
    "urethanes",
    "calipees",
    "muntjaks",
    "interestingnesses",
    "naviculares",
    "earning",
    "uningratiating",
    "goldsizes",
    "lashings",
    "cosmetician",
    "tumshie",
    "mylonitizing",
    "kore",
    "boarishly",
    "negatively",
    "pause",
    "zamindary",
    "besport",
    "rhinitises",
    "supportively",
    "fixity",
    "prunellos",
    "naturalistically",
    "nonrhoticity",
    "flypasts",
    "blams",
    "gymping",
    "break",
    "extolling",
    "cheery",
    "lymphadenopathy",
    "pyridoxamine",
    "casemate",
    "norseller",
    "miscook",
    "granolas",
    "disrespectfulness",
    "leafleteer",
    "effaced",
    "cobwebbier",
    "squashiness",
    "multilinear",
    "meningococci",
    "wiseling",
    "sovranly",
    "fayres",
    "carcinomatoses",
    "gumboils",
    "homosexualists",
    "optimization",
    "endomorphism",
    "maxillofacial",
    "momentany",
    "frowsy",
    "fogramities",
    "unbraided",
    "piroplasma",
    "mutessarifat",
    "disconsolateness",
    "goadsters",
    "shlocky",
    "users",
    "ethnologic",
    "viticultures",
    "brie",
    "emptinesses",
    "cocultures",
    "crowdsources",
    "securitizes",
    "combatted",
    "khanjars",
    "dermabrasion",
    "widest",
    "disfranchised",
    "stenobaths",
    "katabolism",
    "wavers",
    "blacktop",
    "presymptomatic",
    "unseams",
    "dissolutionism",
    "outvoters",
    "masons",
    "saltus",
    "shears",
    "celebrative",
    "obtuseness",
    "wicopy",
    "rampagings",
    "usurpative",
    "symbolologies",
    "primero",
    "dicarboxylic",
    "saunterings",
    "solanders",
    "overspecialized",
    "whitelist",
    "tactual",
    "queleas",
    "mortgageable",
    "encumbering",
    "centralizes",
    "emeries",
    "bugged",
    "indigoes",
    "warblers",
    "inelegancies",
    "smeeked",
    "subprimates",
    "incrementally",
    "oration",
    "enamellist",
    "thingamajigs",
    "loobiest",
    "excused",
    "interprofessional",
    "hild",
    "hetaira",
    "bioweapons",
    "solemniser",
    "heteroplasia",
    "subdeputies",
    "decigram",
    "bivvies",
    "weightliftings",
    "centennial",
    "dialed",
    "perturbations",
    "frogmouth",
    "temporise",
    "triples",
    "dumky",
    "simpered",
    "macallum",
    "songlike",
    "encompasses",
    "declarer",
    "unguentaria",
    "garveys",
    "teratocarcinomata",
    "vampirise",
    "dirkes",
    "uintaite",
    "culter",
    "downplaying",
    "superfecundations",
    "serradillas",
    "beeswaxing",
    "epergnes",
    "eisteddfods",
    "syneidesis",
    "halieutics",
    "containerizations",
    "comingles",
    "lituus",
    "shivah",
    "suffuse",
    "rockery",
    "hing",
    "theorematical",
    "quinate",
    "columels",
    "seashores",
    "nook",
    "hyetal",
    "rodenticide",
    "cocktailed",
    "whamo",
    "slatters",
    "conspectuities",
    "embattlement",
    "janitrixes",
    "rabbinically",
    "fauvists",
    "overinsurances",
    "moorings",
    "regal",
    "temptableness",
    "parvolines",
    "secreted",
    "enguarded",
    "grone",
    "prereview",
    "goloshed",
    "invocated",
    "postfixed",
    "envelop",
    "unattentive",
    "substantivize",
    "nimble",
    "sharniest",
    "unfettering",
    "viliacos",
    "comicalnesses",
    "muse",
    "supernature",
    "calculatingly",
    "kirtle",
    "fissipede",
    "salmony",
    "rozelles",
    "paler",
    "inunctions",
    "commandery",
    "golpes",
    "collenchymas",
    "triamcinolone",
    "waxworks",
    "universalist",
    "housel",
    "usages",
    "propenyl",
    "oligoclase",
    "mamboing",
    "myoclonic",
    "cryptaesthesia",
    "reamend",
    "gonophorous",
    "superb",
    "underpraising",
    "crepitation",
    "primogenital",
    "partisan",
    "doubtfulness",
    "unsaturations",
    "inscrolled",
    "guised",
    "packagings",
    "infixion",
    "ciselure",
    "yocking",
    "saccharify",
    "byre",
    "mamakus",
    "deviancies",
    "gelate",
    "bottomset",
    "faradisers",
    "vivisectoriums",
    "floutingstock",
    "breathalysers",
    "injoints",
    "psychodramatic",
    "handballers",
    "tesseracts",
    "dangs",
    "nick",
    "caeomas",
    "bipartite",
    "califates",
    "slices",
    "ferliest",
    "zoonoses",
    "vasectomised",
    "immerged",
    "lithomarges",
    "polonies",
    "decorating",
    "flopover",
    "hydroniums",
    "landmen",
    "cyprinoid",
    "livings",
    "collegia",
    "option",
    "queynies",
    "earl",
    "shortsightednesses",
    "nidulation",
    "lettermen",
    "excortication",
    "photographical",
    "budgetary",
    "yashmacs",
    "oscitance",
    "stunnings",
    "mitumbas",
    "equiponderant",
    "zealot",
    "rashing",
    "rigidity",
    "troopial",
    "embassador",
    "leeing",
    "micrologic",
    "treated",
    "hahnium",
    "bicep",
    "decolonises",
    "raveller",
    "participators",
    "foolscaps",
    "trilaterations",
    "fancifying",
    "libertarian",
    "phocomely",
    "consumptivities",
    "cully",
    "calligramme",
    "guillemots",
    "befits",
    "crownlet",
    "ditchwaters",
    "unavertible",
    "trads",
    "cementa",
    "coolish",
    "madam",
    "beinness",
    "splenectomize",
    "valuers",
    "hodometer",
    "restudies",
    "centonist",
    "remigate",
    "viator",
    "bondstones",
    "uncloaking",
    "unauthoritative",
    "reseeks",
    "bioreactor",
    "nonbotanists",
    "brashes",
    "chastens",
    "rattletraps",
    "reimplants",
    "wheatland",
    "spiffed",
    "wheatmeals",
    "overheld",
    "demannings",
    "loonies",
    "curter",
    "thoroughpaced",
    "feudalizations",
    "proprietorially",
    "infantry",
    "laureations",
    "recompressions",
    "shopfronts",
    "unsafest",
    "septenniums",
    "unprisons",
    "pardoners",
    "tomahawked",
    "decrustations",
    "miniating",
    "wussy",
    "coatracks",
    "chamberings",
    "unmoveable",
    "guestbooks",
    "signatory",
    "paddy",
    "embreathed",
    "ineffectualness",
    "seafloors",
    "skibobber",
    "phraseologies",
    "petrostate",
    "craftiness",
    "unenlightening",
    "carnival",
    "hematoses",
    "unhatched",
    "monologic",
    "gladfulness",
    "oxygenizing",
    "flatliner",
    "microphotographs",
    "intertillages",
    "predicability",
    "stargaze",
    "consultantship",
    "pastiness",
    "bordragings",
    "dentitions",
    "binary",
    "disemvowelled",
    "deglamorization",
    "digestible",
    "icier",
    "signories",
    "unsoundest",
	
	
	   "shuts",
    "misevaluation",
    "gastroenteric",
    "verbalizers",
    "sachet",
    "mudirs",
    "cracked",
    "clustery",
    "cheeseparings",
    "rhabdovirus",
    "unsound",
    "stillborns",
    "whample",
    "capmakers",
    "stylistic",
    "galloper",
    "skyphoi",
    "lungworm",
    "kinetin",
    "meshugasen",
    "meneer",
    "raves",
    "endured",
    "escolars",
    "horseshits",
    "eff",
    "gadoliniums",
    "hypercritical",
    "radialising",
    "subchlorides",
    "ceilings",
    "deterges",
    "nitrotoluenes",
    "benumbing",
    "gentlemanhood",
    "outvoicing",
    "transshipment",
    "homotransplants",
    "pistols",
    "ismaticalness",
    "subbasal",
    "vespers",
    "tortfeasor",
    "contaminations",
    "villications",
    "nesselrode",
    "frumpishnesses",
    "refringency",
    "infantries",
    "consociates",
    "desinent",
    "pretonic",
    "gilravitches",
    "liquable",
    "shadowiest",
    "boorde",
    "mids",
    "trembles",
    "localized",
    "rhopalism",
    "mancus",
    "justifiability",
    "eupnoeic",
    "cammies",
    "cozied",
    "terror",
    "communaliser",
    "lyart",
    "dreamworld",
    "flashers",
    "soloing",
    "tajines",
    "linebreedings",
    "morphologies",
    "influentials",
    "texturally",
    "lovelornness",
    "oriflammes",
    "crescograph",
    "quatrefoils",
    "irrationalism",
    "supererogator",
    "sensibilities",
    "deterred",
    "creakiest",
    "pycnidiospore",
    "nesher",
    "gamboled",
    "rinsings",
    "stairwise",
    "valors",
    "citola",
    "gapes",
    "pouch",
    "onychomancies",
    "podsolizes",
    "lagans",
    "glaiket",
    "quantitatively",
    "linters",
    "rightsizing",
    "polyzooid",
    "prances",
    "overwarmed",
    "pakehas",
    "leftmosts",
    "mafficker",
    "kererus",
    "hippydoms",
    "halobiont",
    "countinghouses",
    "hebetudes",
    "ostraceous",
    "sandinesses",
    "poyous",
    "bullering",
    "defenceless",
    "communitarians",
    "nounally",
    "thirl",
    "rumfustians",
    "potentiate",
    "hewn",
    "unblocks",
    "beseemings",
    "resettlement",
    "shaws",
    "coenact",
    "raveling",
    "resubmitted",
    "smartmouth",
    "superinfecting",
    "hortatory",
    "quitters",
    "vocular",
    "werewolfish",
    "puffball",
    "koumiss",
    "spicula",
    "corporativism",
    "oxims",
    "proleptic",
    "mantle",
    "jiber",
    "troopship",
    "boldens",
    "liaise",
    "emollescence",
    "monellins",
    "outhomers",
    "readmission",
    "tarradiddles",
    "sphaceluses",
    "tamperer",
    "furniments",
    "schemozzled",
    "sapremia",
    "fiddledeedee",
    "tepefies",
    "lilting",
    "toolbags",
    "grayfly",
    "scapula",
    "fewest",
    "tractorfeed",
    "bursarships",
    "reappraises",
    "stomatodaea",
    "gambesons",
    "underbaking",
    "cladophyll",
    "nonfiction",
    "prosiliencies",
    "slipshodness",
    "contragestions",
    "prussianisation",
    "venites",
    "happied",
    "supergene",
    "stibialism",
    "impannel",
    "crepey",
    "featherier",
    "relives",
    "hiccoughs",
    "overfulfilled",
    "pasquinader",
    "impenitentness",
    "shashing",
    "false",
    "cannas",
    "consensions",
    "hippodromic",
    "countercharm",
    "polychrest",
    "harelike",
    "deplaning",
    "fiddle",
    "proteolytic",
    "braunite",
    "debutant",
    "etchers",
    "salmonoids",
    "pesteringly",
    "khilims",
    "osseins",
    "verboten",
    "legitimizing",
    "pasticcio",
    "spiffier",
    "unbribable",
    "soumed",
    "reposall",
    "mosed",
    "penmanship",
    "improvably",
    "disquietedly",
    "quintuples",
    "snatched",
    "browned",
    "constitutionalists",
    "reciprocants",
    "disulfid",
    "couthest",
    "unimaginatively",
    "predikants",
    "rebellers",
    "overspends",
    "carilloned",
    "galravitched",
    "emprizes",
    "lawnmower",
    "paxwax",
    "discomposedly",
    "subvariety",
    "sceuophylacia",
    "spectrofluorometry",
    "jokinesses",
    "recomputation",
    "indrafts",
    "homelinesses",
    "girding",
    "transportable",
    "transmigrations",
    "shareholdings",
    "wat",
    "fusiblenesses",
    "radiolabelling",
    "liveware",
    "swimmings",
    "endship",
    "symplastic",
    "natality",
    "motivation",
    "propodeums",
    "steganographs",
    "degradative",
    "deniabilities",
    "noninclusion",
    "steatites",
    "centrism",
    "hyperspatial",
    "nubeculae",
    "nonadult",
    "compassed",
    "magnificences",
    "fireships",
    "wittols",
    "jiujutsu",
    "unrulier",
    "sheeted",
    "weltanschauung",
    "machinimas",
    "scurfy",
    "gomphosis",
    "vail",
    "sunbathe",
    "ritualised",
    "fauchons",
    "undercards",
    "dominators",
    "sightlessly",
    "pavonazzos",
    "forewarners",
    "dodecagons",
    "herpetology",
    "somnambulary"
	

	
]















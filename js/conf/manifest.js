// configuration file
var conf=
{
	application:"calculator", 
	version:12,
	modules:[ 
//              module calculatrice				
				{ 
				name:"calculatrice" ,
				active:true,
				rootpath:"js/lib/calculator/",
				version:"v02",
				src:[
					"calculator-core-v-02.js",
					"calculator-events-v-02.js"
					]
				},
//              module calculatrice pourrie		
				{ 
				name:"calculatrice" ,
				active:false,
				rootpath:"js/lib/calculator/",
				version:"v01",
				src:[
					"calculator-core-v-01.js",
					"calculator-events-v-01.js"
					]
				}
				
         ]
}

// Encore un commentaire et j'ai toujours faim
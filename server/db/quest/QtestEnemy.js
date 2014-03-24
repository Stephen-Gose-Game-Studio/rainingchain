var q = Quest.template();
		
q.id = 'QtestEnemy';

q.variable = {
	enemy:[
		["bat","normal"],
	],
	
};
	


	
q.item['enemyGenerator'] = {'name':'Enemy Gen','icon':'magic.staff','option':[		
	{'name':'Enemy 0','param':[q.variable.enemy[0]],'func':Test.spawnEnemy},
	{'name':'Enemy 1','param':[q.variable.enemy[1]],'func':Test.spawnEnemy},
	{'name':'Enemy 2','param':[q.variable.enemy[2]],'func':Test.spawnEnemy},
	{'name':'Enemy 3','param':[q.variable.enemy[3]],'func':Test.spawnEnemy},
	{'name':'Enemy 4','param':[q.variable.enemy[4]],'func':Test.spawnEnemy},
]};	
q.item['equipGenerator'] = {'name':'Equip Gen','icon':'magic.staff','option':[		
	{'name':'Equip','param':[],'func':function(key){
		Test.generateEquip(key,0);
	}},
]};	


//{Enemy
q.enemy["demon"] = {  //{
	"name":"Demon Immune To Fireballs.",
	"sprite":{'name':"demon",'sizeMod':1},
	"abilityList":[
		{'template':'fireNova','aiChance':0.5,'extra':{}},
		{'template':'fireCircle','aiChance':0.5,'extra':{
			'amount':9,angle:360,'burn':{baseChance:1,chance:0,magn:1,time:1}}},
		
	],
	'resource':{'hp':{'max':100,'regen':0.3},'mana':{'max':100,'regen':1}},
	'immune':{'fire':1},
	'globalDef':1,
	'globalDmg':0.2,
	'deathExp':1,
	"equip":{'def':{'melee':1,'range':1,'magic':1,'fire':1,'cold':1,'lightning':1}},	
	"acc":2,
	"maxSpd":5,
	"moveRange":{'ideal':200,"confort":50,"aggressive":300,"farthest":400},	
}; //}
	
	
//}	


//{Map
q.map.testEnemy = function(){
	var m = Init.db.map.baseMap();
	m.name = "Test Zone";
	m.graphic = "pvpF4A";
	m.tileset = 'v1.1';
	m.grid = ["11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000111100000000111111","11111100000000000000000000000000111100000000111111","11111100000000000000000000000000111100000000111111","11111100000000000000000000000000000000000000111111","11111100000000001111000000000000000000000000111111","11111100000000001111000000000000000000000000111111","11111100000000001111000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000100000010000000000000111111","11111100000000000000001000000001000000333300111111","11111100000000000000001000000001000000344300111111","11111100000000000000001000000001000000344300111111","11111100000000000000001110000111000000333300111111","11111100000000000000001100000011000000000000111111","11111100000000000000001100000011000000000000111111","11111100000000000000000100000010000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000011110000000000011110000000000111111","11111100000000011110000000000011110000000000111111","11111100000000011110000000000011110000000000111111","11111100000000011110000000000000000000111000111111","11111100000000000000000000000000000000111000111111","11111100000000000000000003333333333000111000111111","11111100000000000000000003444444443000111000111111","11111100000000000000000003444444443000000000111111","11111100000000000000000003444444443000000000111111","11111100000000000000000003333333333000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111100000000000000000000000000000000000000111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111","11111111111111111111111111111111111111111111111111"] ;
	m.lvl = 0;	

	var a = m.addon.main = {};
	return m;
};





//}


exports.quest = q;







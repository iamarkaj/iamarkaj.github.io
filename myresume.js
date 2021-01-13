var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#2ECCFA";
var game = new Phaser.Game(w, h, Phaser.CANVAS, "canvas", {
  preload: preload,
  create: create,
  update: update,
  render: render,
});
var orange = "#FF7519";
var debug = false;
var hero;
var cursors;
var tree1;
var plant1;
var tree_palm;
var ct1, ct2, ct3, ct4;
var bulletTime = 0;
var ctext, pythontext, javatext, jstext;
var birds;
var bird;
var bubble;
var style_white = {
  font: "27px Times New Roman",
  fill: "#FFF",
  align: "center",
};
var style_roboto = {
  font: "24px Roboto",
  fill: "#FFF",
  align: "center",
};
var style_roboto1 = {
  font: "34px Roboto",
  fill: "#000000",
  align: "center",
};
var shakti;
var shakti_cup;
var shakti2;
var football;
var text;
//var insta_url = "https://www.instagram.com/_jain_prateek/";
var github_url = "https://github.com/iamarkaj";
var hackerRank_url = "https://www.hackerrank.com/arkaj";
//var linkedin_url = "https://www.linkedin.com/in/prateek-jain-852295154/";
var resume_url = "https://drive.google.com/file/d/1B27VCJmOewie1-vciyzimB0rUyNboSvr/view?usp=sharing";
//var website_url = "https://prateekjainpk.github.io/resume/";
//var medium_url = "https://medium.com/@_jain_prateek";
var gmail_url = "https://www.arkajbasak1211@gmail.com";
var proj1 = "https://github.com/iamarkaj/Identify-the-Sentiments";
var proj2 = "https://github.com/iamarkaj/Transformer-Architecture";
var proj3 = "https://drive.google.com/file/d/1Efyr00SslMtTd-A2DKQtIe9XqgMVwUv8/view";
var proj4 = "https://drive.google.com/file/d/1x_Whv4Z-OPRotu81RvUo0t4oQo0LZZj8/view";
var proj5 = "https://drive.google.com/file/d/1UWEnFVSdgSInlOSTcfC9JWPyvUDtH_Tf/view";
var inst_text;
var bug;
var bug_tween;
var bug_killed = false;
var cloud_moving1;
var cloud_moving2;
var base5 = 15100;
var base6 = 17500 + 1400;
var base7 = 19500 + 1400;
var platformLength = base5 + 2400;
var cupTweenDone = false;
var cupTweenSecondDone = false;
var delay = 0;
var starting_point = 100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count = 5;

function preload() {
  text = game.add.text(
    w / 2,
    h / 2,
    "",
  );
  text.anchor.setTo(0.5, 0.5);
  game.load.image("download", "assets/download2.png");

  game.load.image("ground", "assets/ground.png");
  game.load.image("back", "assets/back64.png");
  game.load.image("grass", "assets/grass.png");
  game.load.image("brick", "assets/brick.png");
  game.load.image("tree1", "assets/tree-bright-e.png");
  game.load.image("tree_palm", "assets/tree_palm.png");
  game.load.image("tree2", "assets/tree-dark-c.png");
  game.load.image("tree3", "assets/tree-dark-d.png");
  game.load.image("plant1", "assets/plant-lotus.png");
  game.load.image("cloud", "assets/cloud.png");
  game.load.image("birds", "assets/birds.png");
  game.load.image("bird", "assets/bird.png");
  game.load.image("school", "assets/school.png");
  game.load.image("mainbanner", "assets/main-banner.png");
  game.load.image("building", "assets/building.png");
  game.load.image("thapar", "assets/thapar.png");
  game.load.image("hometown", "assets/milestone.png");
  game.load.image("hill", "assets/mountain.png");
  game.load.atlasJSONHash(
    "prateek",
    "assets/hero_running.png",
    "assets/hero_running.json"
  );
  game.load.atlasJSONHash(
    "waterAtlas",
    "assets/water_corrected.png",
    "assets/water_running.json"
  );
  game.load.atlasJSONHash(
    "waterAtlas2",
    "assets/water_orange.png",
    "assets/water_running.json"
  );
  game.load.image("dtu", "assets/jiit.png");
  game.load.image("level", "assets/sign.png");
  game.load.image("cocotree", "assets/coco.png");
  game.load.image("flask", "assets/flask.png");
  game.load.image("css", "assets/cssn.png");
  game.load.image("mysql", "assets/mysql.png");
  game.load.image("html", "assets/html5.png");
  game.load.image("night", "assets/night.jpeg");
  //game.load.image('jquery','assets/jquery_white.png');
  game.load.image("developer", "assets/fullstackS.png");
  //game.load.image('phaser','assets/phaserLogo.png');
  game.load.image("ds_power", "assets/ds_power.png");
  game.load.image("train", "assets/train.png");
  game.load.image("sandiskLogo", "assets/jp.png");
  game.load.image("viacom", "assets/viacom.png");
  game.load.image("iheal", "assets/iheal.png");
  game.load.image("red_cross", "assets/red_cross.png");
  game.load.image("cbLogo", "assets/ernet.png");
  game.load.image("git", "assets/git.png");
  game.load.image("vsbubble", "assets/vsbubble.png");
  game.load.image("traffic", "assets/traffic.jpg");
  game.load.image("gamershq", "assets/gamershq.jpg");
  game.load.image("covid", "assets/covid.png");
  game.load.image("camera", "assets/camera.png");
  game.load.image("movie", "assets/movie.png");
  game.load.image("popcorn", "assets/popcorn.png");
  game.load.image("balloon_1", "assets/balloon_1.png");
  game.load.image("scroll_2015", "assets/scroll_2015.png");
  game.load.image("scroll_2017", "assets/scroll_2017.png");
  game.load.image("banner", "assets/banner.png");
  game.load.image("c", "assets/c.png");
  game.load.image("python_logo", "assets/python.png");
  game.load.image("js_logo", "assets/js_logo.png");
  game.load.image("java_logo", "assets/java.png");
  game.load.image("india", "assets/india.png");
  game.load.image("caption", "assets/caption.jpg");
  game.load.image("photoshop", "assets/pslogo.png");
  game.load.image("ar", "assets/ar.png");
  game.load.image("metro", "assets/metro.png");
  game.load.image("otherprojects", "assets/other.png");
  game.load.image("best", "assets/best_cartoonist.png");
  game.load.image("bullet", "assets/bullet.png");
  game.load.image("pipe", "assets/pipe.png");
  game.load.image("castle", "assets/castle.png");
  game.load.image("cup", "assets/cup.png");
  game.load.image("iot", "assets/iot.png");
  game.load.image("hacker_certi", "assets/hacker_certi.png");
  game.load.image("dsa", "assets/dsa.png");
  game.load.image("ds_cb", "assets/ds_cb.png");
  game.load.image("pfootball", "assets/pfootball.png");
  game.load.image("pr", "assets/pr.png");
  game.load.image("football", "assets/football.png");
  game.load.image("gmail", "assets/gmail.png");
  game.load.image("hackerRank", "assets/hackerRank.png");
  game.load.image("linkedin", "assets/linkedin.png");
  game.load.image("ladder", "assets/ladder.png");
  game.load.image("mun", "assets/mun.png");
  game.load.image("ngo", "assets/ngo.png");
  game.load.image("github", "assets/github.png");
  game.load.image("insta", "assets/instalogo.png");
  game.load.image("medium", "assets/mediumlogo.png");
  game.load.image("algae", "assets/algae-b.png");
  game.load.image("blogLogo", "assets/icon_small.png");
  game.load.image("bug", "assets/bug.png");
  game.load.image("flag", "assets/flag.png");
  game.load.image("Thanks", "assets/Thanks.png");
  game.load.image("squarebrick", "assets/brick_small.png");
  game.load.image("questionbrick", "assets/question_block_small.png");
  game.load.image("question_hide", "assets/question_block_plain_small.png");
  game.load.image("icpc", "assets/icpc.jpg");
  game.load.atlasJSONHash(
    "coin_moving",
    "assets/coin-sprite.png",
    "assets/coin-sprite-map.json"
  );
  game.load.atlasJSONHash(
    "digital_india",
    "assets/digital_india.png",
    "assets/digital_india.json"
  );
  game.load.image("waterBubble", "assets/bubble256.png");
  game.load.image("sun", "assets/sun.png");
  //game.load.image('waterBubble', 'assets/bubble256.png');
  game.load.atlasXML(
    "seacreatures",
    "assets/seacreatures.png",
    "assets/seacreatures.xml"
  );
  // game.load.image('undersea', 'assets/undersea.jpg');
  game.load.spritesheet("kaboom", "assets/explode.png", 128, 128);
  //game.load.image('ground','assets/ground.png');
}

function create() {
  //  game.load.onLoadStart.add(loadStart, this);
  // game.load.onFileComplete.add(fileComplete, this);
  //  game.load.onLoadComplete.add(loadComplete, this);

  //  game.stage.scale.startFullScreen();
  //  game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL; //resize your window to see the stage resize too
  //  game.stage.scale.setShowAll();
  //  game.stage.scale.refresh();
  //Add Bullets.

  //Add Clouds
  for (var i = 0; i < 20000; i += 1000) {
    if (i >= 6800 && i <= 8100) {
      game.add.sprite(i, h - 680, "cloud");
      game.add.sprite(i + 400, h - 630 + 50, "cloud");
    } else {
      game.add.sprite(i, h - 580, "cloud");
      game.add.sprite(i + 400, h - 630, "cloud");
    }
  }

  //Add night mode
  night = game.add.tileSprite(0, 0, platformLength * 2, h, "night");
  night.alpha = 1;
  //Add mountains

  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;
  bullets.createMultiple(30, "bullet");
  bullets.setAll("anchor.x", 0.5);
  bullets.setAll("anchor.y", 1);
  bullets.setAll("outOfBoundsKill", true);
  bullets.setAll("checkWorldBounds", true);

  explosions = game.add.group();

  tiles = game.add.group();
  tiles.enableBody = true;
  tiles.physicsBodyType = Phaser.Physics.ARCADE;
  tiles.createMultiple(6, "questionbrick");

  text.setText("");
  //touch = new Phaser.Touch();
  //game.canvas.addEventListener('touchenter', function(){ console.log("You touched here!!");}, false);

  game.stage.backgroundColor = bgColor;
  game.world.setBounds(0, 0, platformLength, h + 800);

  //Add git parachute
  git = game.add.sprite(9000, h - 600, "git");
  game.add.tween(git).to(
    {
      y: h - 450,
    },
    2000,
    Phaser.Easing.Quadratic.InOut,
    true,
    0,
    2000,
    true
  );
  //game.input.onTap.add(moveforward,this);

  Thanks = game.add.sprite(platformLength - 450, h - 1050, "Thanks");
  Thanks.scale.setTo(0.5, 0.5);
  game.add.sprite(platformLength - 615, h - 745, "castle");

  game.add.sprite(3060, h - 350, "treeS");
  hill1 = game.add.sprite(2600, h - 300 + 400, "hill");

  hill2 = game.add.sprite(3000, h - 350 + 400, "hill");

  hill3 = game.add.sprite(3400, h - 400 + 400, "hill");

  //Add Coco Trees
  ct1 = game.add.sprite(5000, h, "cocotree");
  ct2 = game.add.sprite(5200, h, "cocotree");
  ct3 = game.add.sprite(5400, h, "cocotree");
  ct4 = game.add.sprite(5600, h, "cocotree");

  var style_white2 = {
    font: "30px Roboto",
    fill: "#fff",
  };
  var style_lang = {
    font: "30px Roboto",
    fill: "#fff",
  };
  //var style_lang = { font:"30px monospace" ,fill:"#fff"};

  javatext = game.add.sprite(5240, h - 490, "js_logo");
  pythontext = game.add.sprite(5625, h - 490, "python_logo");
  jstext = game.add.sprite(5057, h - 355, "java_logo");
  ctext = game.add.sprite(5480, h - 480, "c");

  javatext.alpha = 0.2;
  pythontext.alpha = 0.2;
  jstext.alpha = 0.2;
  ctext.alpha = 0.2;
  game.add.text(5200, h - 140, "LANGUAGE  ACTIVITY", style_white);

  //Add BrickWall
  /* This is an older brick wall  
  game.add.tileSprite(6500,h-450,2000,400,'brick');
  */
  //Add Coin
  var mustard_style = {
    font: "80px Roboto",
    fill: "#FFF",
    align: "center",
  };
  codetext = game.add.text(6550, h - 550, "      -->", mustard_style);
  var moving_coin = game.add.sprite(6610, h - 550, "coin_moving");
  moving_coin.scale.setTo(2, 2);
  moving_coin.animations.add("run");
  moving_coin.animations.play("run", 20, true);

  /* The newer one */
  game.add.sprite(6650, h - 200, "pipe");
  new_bug = game.add.sprite(6600, h - 180, "bug");
  new_bug2 = game.add.sprite(6500, h - 155, "bug");
  new_bug.scale.setTo(-1, 1);
  new_bug2.scale.setTo(-0.7, 0.7);
  game.add.tween(new_bug).to(
    {
      x: 6680,
    },
    2000,
    Phaser.Easing.Quadratic.InOut,
    true,
    0,
    2000,
    true
  );
  game.add.tween(new_bug2).to(
    {
      x: 6600,
    },
    2000,
    Phaser.Easing.Quadratic.InOut,
    true,
    0,
    2000,
    true
  );

  var xcoord = 6500;
  game.add.sprite(xcoord, h - 450, "squarebrick");
  game.add.sprite(xcoord + 119, h - 450, "question_hide");
  game.add.sprite(xcoord + 2 * 119, h - 450, "squarebrick");

  var exp_index = 0;
  for (xcoord = 7100; xcoord <= 8200; xcoord += 2 * 119) {
    game.add.sprite(xcoord, h - 450, "squarebrick");
    //game.add.sprite(xcoord+119,h-450,'question_hide');
    //game.add.sprite(xcoord+119,h-500,'kaboom');

    //explosions.push(temp);
    tile = tiles.getFirstExists(false);
    if (tile) {
      tile.reset(xcoord + 119, h - 450);
    }

    game.add.sprite(xcoord + 100, h - 310, "tree1").scale.setTo(0.6, 0.6);
  }
  game.add.sprite(xcoord, h - 450, "squarebrick");
  game.add.sprite(xcoord + 100, h - 310, "tree1").scale.setTo(0.6, 0.6);

  //Add Explosion object pool
  explosions = game.add.group();
  explosions.createMultiple(6, "kaboom");
  //explos.forEach(function(){ expl })

  //game.add.text(6600,h-160,'FULL STACK WEB DEVELOPER \t\t SERVER SIDE IN DJANGO\t\t GAME DEVELOPMENT\t\tANDROID\t\t  DESIGNING SKILLS >> \t\t\t\t\t PHOTOSHOP ',style_lang);

  //game.add.sprite(base5 + 150, h - 420, "tree1").scale.setTo(0.8, 0.8);
  game.add.sprite(base5 + 300, h - 250, "treeS").scale.setTo(0.7, 0.7);
  //game.add.sprite(base6 + 250, h - 420, "tree1").scale.setTo(0.8, 0.8);
  //game.add.sprite(base6 + 200, h - 250, "treeS").scale.setTo(0.7, 0.7);
  //game.add.sprite(base6 + 380, h - 300, "treeS").scale.setTo(0.8, 0.8);

  var style = {
    font: "22px monospace",
    fill: "#fff",
    align: "center",
  };
  game.add.text(
    3330,
    h - 260,
    "St. CLARET SCHOOL \n (Class 10) ",
    style
  );
  game.add.text(
    3750,
    h - 300,
    "St. XAVIER'S \n INSTITUTION \n (Class 12) ",
    style
  );
  //Add Ground and Grass
  var ground = game.add.tileSprite(
    0,
    h - 100,
    platformLength * 2,
    2000,
    "ground"
  );
  ground.scale.setTo(0.5, 0.5);

  var grass = game.add.tileSprite(0, h - 100, platformLength * 2, 50, "grass");
  grass.scale.setTo(0.5, 0.5);

  var water = game.add.tileSprite(8700, h - 100, 800, 600, "waterAtlas");
  game.add.sprite(8800, h + 120, "algae").scale.setTo(1.5, 1.5);
  game.add.sprite(9200, h + 250, "algae");
  createBubbles();
  //game.add.tileSprite(8700,h+600-136,133*6,136,'photoshop');

  var brick2 = game.add.sprite(12750 - 70, h - 100 - 36, "brick");
  brick2.scale.setTo(0.5, 0.5);
  game.add.sprite(12750 - 70, h - 100, "brick").scale.setTo(0.5, 0.5);

  game.add.sprite(12750 + 350, h - 100 - 36, "brick").scale.setTo(0.5, 0.5);
  game.add.sprite(12750 + 350, h - 100, "brick").scale.setTo(0.5, 0.5);
  //game.add.sprite(12650,h-400,'treeS').alpha=0.8;

  var water2 = game.add.tileSprite(
    12750,
    h - 100 - 36 + 10,
    700,
    320,
    "waterAtlas2"
  );
  water2.scale.setTo(0.5, 0.5);
  //var water = game.add.sprite(100,300,'waterAtlas');
  water.animations.add("run");
  water.animations.play("run", 2, true);

  water2.animations.add("run");
  water2.animations.play("run", 2, true);

  //Add trees

  tree1 = game.add.sprite(240, h - 100 - 0.75 * 430, "tree1");
  tree1.scale.setTo(0.75, 0.75);
  tree2 = game.add.sprite(900, h - 100 - 0.75 * 430, "tree1");
  tree2.scale.setTo(0.75, 0.75);

  tree3 = game.add.sprite(320, h + 40 - 0.75 * 430, "tree2");
  tree3.scale.setTo(0.75, 0.75);
  tree4 = game.add.sprite(825, h + 40 - 0.75 * 430, "tree2");
  tree4.scale.setTo(0.75, 0.75);

  //tree1.alpha = 0.5;
  //Add Main Banner
  var building = game.add.sprite(500, h - 600, "building");
  building.scale.setTo(0.75, 0.75);
  var banner = game.add.sprite(200, h - 215 - 235, "mainbanner");

  //Add birds
  birds = game.add.sprite(50, 50, "birds");
  birds.fixedToCamera = true;
  birds.scale.setTo(0.75, 0.75);
  game.add.tween(birds.cameraOffset).to(
    {
      y: 100,
    },
    2000,
    Phaser.Easing.Back.InOut,
    true,
    0,
    2000,
    true
  );

  //Signboards
  tree_palm = game.add.sprite(1080, h - 710, "tree_palm");
  game.add.sprite(1300, h - 440, "level");
  game.add.text(1370, h - 340, "Level 1");
  game.add.text(1440, h - 260, "About > >");

  tree_palm = game.add.sprite(4460, h - 710, "tree_palm");
  game.add.sprite(4680, h - 440, "level");
  game.add.text(4770, h - 340, "Level 2");
  game.add.text(4840, h - 260, "Skills > >");

  tree_palm = game.add.sprite(9380, h - 710, "tree_palm");
  //game.add.sprite(9600, h - 440, "level");
  //game.add.text(9670, h - 340, "Level 3");
  //game.add.text(9740, h - 260, "Experience", {
   // font: "25px Arial Black",
  //});

  tree_palm = game.add.sprite(11580, h - 710, "tree_palm");
  game.add.sprite(11800, h - 440, "level");
  game.add.text(11870, h - 340, "Level 3");
  game.add.text(11940, h - 260, "Projects", {
    font: "25px Arial Black",
  });

  tree_palm = game.add.sprite(base5 + 680, h - 710, "tree_palm");
  game.add.sprite(base5 + 900, h - 440, "level");
  game.add.text(base5 + 962, h - 340, "Level 4");
  game.add.text(base5 + 1030, h - 275, "Online Profiles", {
    font: "20px Arial Black",
  });
  base5 = base5 +700;
  /*
  tree_palm = game.add.sprite(base6 - 200, h - 710, "tree_palm");
  game.add.sprite(base6 + 20, h - 440, "level");
  game.add.text(base6 + 70, h - 340, "Level 5");
  game.add.text(base6 + 135, h - 260, "Other Highlights", {
    font: "25px Arial Black",
  });

  tree_palm = game.add.sprite(base7 - 120, h - 710, "tree_palm");
  game.add.sprite(base7 + 100, h - 440, "level");
  game.add.text(base7 + 170, h - 340, "Level 6");
  game.add.text(base7 + 235, h - 260, "Online Profiles", {
    font: "20px Arial Black",
  });
  */
  //-------------------Levels Finish

  game.add.sprite(10200, h - 420, "tree1").scale.setTo(0.75, 0.75);

  //Add frog
  for (row = 1; row <= 7; row++) {
    for (
      var xcoord = 10500 + (row - 1) * 60 + 200;
      xcoord <= 11200 - (row - 1) * 60 + 260;
      xcoord += 60
    ) {
      if (row == 7) {
        //game.add.sprite(xcoord + 20, h - 600, "flag").scale.setTo(0.2, 0.2);
      }
      game.add
        .sprite(xcoord, h - 100 - row * 60, "squarebrick")
        .scale.setTo(0.5, 0.5);
    }
  }

  //game.add.sprite(10000, h - 330, "frog").scale.setTo(0.8, 0.8);
  game.add.sprite(10000, h - 300, "train").scale.setTo(2.5, 2.5);
  //game.add.sprite(10300, h - 360, "frog").scale.setTo(0.9, 0.9);
  //game.add.sprite(10600, h - 385, "frog");
  //game.add.sprite(10900, h - 450, "frog").scale.setTo(1.2, 1.2);
  //game.add.sprite(11300, h - 485, "frog").scale.setTo(1.3, 1.3);

  //Add logos
  //game.add.sprite(10010, h - 210, "red_cross").scale.setTo(0.75, 0.75);
  //game.add.sprite(10300, h - 285, "viacom");
  //game.add.sprite(10560, h - 245, "iheal").scale.setTo(0.48, 0.48);
  //game.add.sprite(10925, h - 270, "sandiskLogo");
  //game.add.sprite(11320, h - 315, "cbLogo").scale.setTo(0.6, 0.6);

  //Add company texts.
  var style_ex = {
    font: "16px Arial",
    fill: orange,
    align: "center",
  };
  var style_exS = {
    font: "12px Arial",
    fill: orange,
    align: "center",
  };
  /*game.add.text(
    10060,
    h - 220,
    "Red Cross, Delhi \n June'18-July'19 \n Blood Donation Camp \nVoluteer",
    style_exS
  );
  game.add.text(
    10325,
    h - 210,
    "Viacom, Delhi \n Jan'19-Dec'19 \n Campus Inc Representative",
    style_exS
  );
  game.add.text(
    10660,
    h - 230,
    "iHEAL365, Delhi \n Nov'18-Jan'19 \n Web Development Intern",
    style_ex
  );
  game.add.text(
    10980,
    h - 275,
    "JP Morgan Chase & Co. \n April'20-May'20 \n Software Engineering\n Virtual Experience",
    style_ex
  );
  game.add.text(
    11410,
    h - 290,
    "ERNET India, Delhi \n June'20-July'20 \n Research & Development \n Intern",
    style_ex
  );
*/
  //Add projects
  button_traffic = game.add.button(
    12200,
    h - 410,
    "traffic",
    openproj1,
    this
  );
  button_gamershq = game.add.button(
    12700,
    h - 600,
    "gamershq",
    openproj2,
    this
  );
  button_caption = game.add.button(
    13350,
    h - 455,
    "caption",
    openproj3,
    this
  );
  button_ar = game.add.button(
    14200,
    h - 680,
    "ar",
    openproj4,
    this
  );
  button_movie = game.add.button(
    15000,
    h - 550,
    "movie",
    openproj5,
    this
  );
  //var traffic = game.add.sprite(12200, h - 410, "traffic");
  //traffic.scale.setTo(1.2, 1.2);

  //var gamershq = game.add.sprite(12790, h - 600, "gamershq");
  //gamershq.scale.setTo(0.7, 0.7);

  //var caption = game.add.sprite(13350, h - 455, "caption");
  //caption.scale.setTo(0.8,0.8)

  var covid = game.add.sprite(13900, h - 485, "covid");
  covid.scale.setTo(0.8,0.8)

  //game.add.sprite(14200, h - 680, "ar");
  //var ambu = game.add.sprite(14400, h - 205, "metro");
  /*
  ambu.scale.setTo(0.8, 0.8);
  var t = game.add.tween(ambu).to(
    {
      x: 14600,
    },
    2000,
    Phaser.Easing.Back.InOut,
    true,
    0,
    2000,
    true
  );
  t.start();

  var movie = game.add.sprite(14780, h - 367, "movie");
  movie.scale.setTo(1.2, 1.2);
  movie.angle = -15;

  game.add.sprite(15300, h - 345, "camera");
  game.add.sprite(15150, h - 220, "popcorn");
  */

  //var movie = game.add.sprite(15000, h - 550, "movie");
  //movie.scale.setTo(0.8, 0.8);

  game.add.sprite(15475, h - 480, "otherprojects");
  //Add Achivements Section

  //Positon style
  var style_position = {
    font: "24px monospace",
    fill: "#fff",
    align: "center",
  };
  /*
  cup1 = game.add.sprite(base5 + 1220, -280, "cup");
  cup1.scale.setTo(0.6, 0.6);
  game.add.sprite(base5 + 1375, h - 340, "dsa");

  cup2 = game.add.sprite(base5 + 1810, -340, "cup");
  cup2.scale.setTo(0.8, 0.8);
  game.add.sprite(base5 + 1965, h - 350, "iot");

  cup3 = game.add.sprite(base5 + 2315, -410, "cup");
  game.add.sprite(base5 + 2570, h - 380, "ds_cb");

  cup4 = game.add.sprite(base5 + 3020, -410, "cup");
  game.add.sprite(base5 + 3260, h - 410, "hacker_certi");

  //Add other highlights
  game.add.sprite(base6 + 335, h - 630, "pr");
  game.add.text(
    base6 + 340,
    h - 165,
    "Public Relations Head \n Organised College Fest CONVERGE",
    style_white
  );
  shakti2 = game.add.sprite(base6 + 670, -500, "pfootball");
  shakti2.scale.setTo(0.75, 0.75);
  game.add.text(base6 + 815, h - 450, "Sports Enthusiast", style_white);
  football = game.add.sprite(base6 + 900, h - 200, "football");
  game.add.tween(football).to(
    {
      y: h - 300,
    },
    400,
    Phaser.Easing.Back.InOut,
    true,
    0,
    400,
    true
  );

  game.add.sprite(base6 + 1180, h - 545, "mun");
  game.add.sprite(base6 + 1600, h - 415, "ngo");
  game.add.text(
    base6 + 1170,
    h - 165,
    "Participation in various \nMUN's, Hackathon's and Events.",
    style_white
  );
  game.add.text(
    base6 + 1400 + 260,
    h - 447,
    "Teaching Volunteer at NGO",
    style_white
  );
  */
  //Add Contact Buttons
  game.add.sprite(base5 + 1220, h - 400, "ladder");

  var cloud_blog = game.add.sprite(base5 + 600, h - 700 + 20, "sun");
  cloud_blog.scale.setTo(1.3, 1.3);

  //game.add.button(base5 + 620, h - 650 + 20, "blogLogo", openWebsite, this);
  //game.add.text(base5 + 650, h - 550 + 20, "Blog", {
  // font: "40px Arial",
  //  fill: "#fff",
  //});
  cloud_moving1 = game.add.sprite(base5 + 510, h - 650, "cloud");
  cloud_moving2 = game.add.sprite(base5 + 510 - 60, h - 650, "cloud");

  cloud_moving2.scale.setTo(1.3, 1.3);
  cloud_moving1.scale.setTo(1.2, 1.2);

  //game.add.text(20100,h-550,"www.prateeknarang.com",{font:"16px Arial",fill:"#ff0000"});

  game.add.sprite(base5 + 450, h - 550, "cloud").scale.setTo(1.2, 1.2);
  button_github = game.add.button(
    base5 + 500,
    h - 490,
    "github",
    openGithub,
    this
  );
  button_github.scale.setTo(0.2, 0.2);

  game.add.sprite(base5 + 800, h - 550, "cloud").alpha = 0.8;
  button_hackerRank = game.add.button(
    base5 + 860,
    h - 520,
    "hackerRank",
    openhackerRank,
    this
  );

  //var gmail_cloud = game.add.sprite(base7 + 670, h - 440, "cloud");
  //gmail_cloud.scale.setTo(1.1, 1.1);
  //gmail_cloud.alpha = 0.95;
  game.add.sprite(base5 + 475, h - 435, "cloud").scale.setTo(1.3, 1.3);
  button_gmail = game.add.button(
    base5 + 550,
    h - 380,
    "gmail",
    openGmail,
    this
  );
  button_gmail.scale.setTo(0.8, 0.8);

  //game.add.sprite(20150+200,h-350,'medium').scale.setTo(0.25,0.25);
  

  game.add.text(
    base5 + 720,
    h - 120,
    "Click /Tap the Clouds to open Profiles.",
    style_white
  );

  //scale.setTo(0.15,0.15);

  /*
  
  button_linkedin = game.add.button(20400,h-400,'linkedin',openLinkedIn, this);
  button_insta = game.add.button(20200,h-600,'insta',openInsta, this);
  button_medium = game.add.button(20200,h-600,'medium',openMedium, this);
  
  */
  //Add hometown
  var hometown = game.add.sprite(1750, h - 300, "hometown");
  var balloon_1 = game.add.sprite(1700, h - 800, "balloon_1");

  //Add India Gate
  var india = game.add.sprite(1895, h - 547, "india");

  //Add Scrolls
  var scroll_2015 = game.add.sprite(3250, h - 747, "scroll_2015");
  var scroll_2017 = game.add.sprite(3650, h - 747, "scroll_2017");
  var banner = game.add.sprite(4025, h - 710, "banner");

  //Add fullstack
  game.add.sprite(5900, h - 380, "developer");

  //Add College building
  game.add.sprite(4000, h - 480, "thapar").scale.setTo(1.15, 1.15);
  aieee_cup = game.add.sprite(3500, -500, "cup");
  game.add.text(3950, h - 120, "  THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY", style_roboto1);

  //Add bubble

  bubble = game.add.sprite(9100, h + 450, "vsbubble");

  bubble.scale.setTo(0.5, 0.5);
  bubble.alpha = 0.8;

  inst_text = game.add.text(
    290,
    h - 50,
    "Use  Arrow Keys  OR << Screen Buttons >> ",
    {
      font: "30px Arial",
      fill: "#fff",
    }
  );
  //Add hero
  hero = game.add.sprite(100, -200, "prateek");
  hero.animations.add("run");

  //----------------------------------------Sea Creatures
  //Add under water animals
  octopus = game.add.sprite(9200, h + 100, "seacreatures");
  octopus.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("octopus", 0, 24, "", 4),
    30,
    true
  );
  octopus.animations.play("swim");
  //  game.add.tween(octopus).to( { y:h-100},2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
  game.add.tween(octopus).to(
    {
      y: h - 100,
    },
    2000,
    Phaser.Easing.Quadratic.InOut,
    true,
    0,
    1000,
    true
  );

  octopus2 = game.add.sprite(13100, h - 200, "seacreatures");
  octopus2.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("octopus", 0, 24, "", 4),
    30,
    true
  );
  octopus2.animations.play("swim");

  crab = game.add.sprite(8750, h + 420, "seacreatures");
  crab.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("crab1", 0, 25, "", 4),
    30,
    true
  );
  crab.animations.play("swim");

  crab2 = game.add.sprite(12650, h - 180, "seacreatures");
  crab2.scale.setTo(0.7, 0.7);
  crab2.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("crab1", 0, 25, "", 4),
    30,
    true
  );
  crab2.animations.play("swim");

  seahorse = game.add.sprite(9300, h + 200, "seacreatures");
  seahorse.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("seahorse", 0, 5, "", 4),
    30,
    true
  );
  seahorse.animations.play("swim");

  purpleFish = game.add.sprite(12950, h - 80, "seacreatures");
  purpleFish.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("purpleFish", 0, 20, "", 4),
    30,
    true
  );
  purpleFish.animations.play("swim");
  game.add.tween(purpleFish).to(
    {
      x: 12750,
    },
    7500,
    Phaser.Easing.Quadratic.InOut,
    true,
    0,
    1000,
    false
  );

  stingray = game.add.sprite(8900, h + 90, "seacreatures");

  stingray.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("stingray", 0, 23, "", 4),
    30,
    true
  );
  stingray.animations.play("swim");
  /*  
    jellyfish = game.add.sprite(9100, h+20, 'seacreatures');
    jellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('blueJellyfish', 0, 32, '', 4), 30, true);
    jellyfish.animations.play('swim');
*/
  greenJellyfish = game.add.sprite(8800, h - 150, "seacreatures");
  greenJellyfish.animations.add(
    "swim",
    Phaser.Animation.generateFrameNames("greenJellyfish", 0, 39, "", 4),
    30,
    true
  );
  greenJellyfish.animations.play("swim");
  game.add.tween(greenJellyfish).to(
    {
      y: h - 100,
    },
    2000,
    Phaser.Easing.Back.InOut,
    true,
    0,
    2000,
    true
  );

  //Add School
  var school = game.add.sprite(2400, h - 300 - 200, "school");
  school.scale.setTo(1.8,1.8);

  var clg = game.add.sprite(4150, h - 600, "dtu");
  clg.scale.setTo(0.6, 0.6);

  //  hero tween
  var entryTween = game.add.tween(hero);
  //  tween = game.add.tween(sprites.cursor).to( { x:100,y: 500 }, 2000, Phaser.Easing.Bounce.Out, true);
  entryTween.to(
    {
      x: starting_point,
      y: h - 245 - hero.height,
    },
    2000,
    Phaser.Easing.Bounce.Out,
    true
  );
  entryTween.start();

  cursors = game.input.keyboard.createCursorKeys();
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(hero);
  game.physics.arcade.enable(night);
  night.body.velocity.x = -30;

  game.input.mouse.mouseWheelCallback = mouseWheel;

  //Add a bug
  bug = game.add.sprite(5900, h - 150, "bug");
  game.physics.arcade.enable(bug);

  //  hero.body.gravity.y=10000;
  //hero.fixedToCamera = true;
  //hero.body.angularVelocity = 10;
  game.camera.follow(hero);
  game.camera.follow(hero, Phaser.Camera.FOLLOW_PLATFORMER);
  //Create Water Bubbles
  back_btn = game.add.button(10, h - 94, "back");
  fwd_btn = game.add.button(w - 10, h - 94, "back");
  fwd_btn.scale.x *= -1;
  fwd_btn.fixedToCamera = true;
  back_btn.fixedToCamera = true;
  back_btn.alpha = 1;

  download_btn = game.add.button(w - 150, 5, "download", openResume, this);
  download_btn.fixedToCamera = true;
  game.add.text(w - 120, 100, "Download PDF", {
    font: "10px Roboto",
    fill: "#000",
  }).fixedToCamera = true;
  night_tween = game.add.tween(night);
  night_tween.to(
    {
      alpha: 0,
    },
    10000
  );
  //, Phaser.Easing.Quadratic.InOut, true, 0, 5000, true);
  //back_btn.onTap.add(moveBack,this);
  //Visible only for mobile screens
  if (w <= 481) {
    back_btn.alpha = 1;
  }

  explosions = game.add.group();
  explosions.createMultiple(10, "kaboom");
}

function addMovingCoin(x, y, scale) {
  var moving_coin = game.add.sprite(x, y, "coin_moving");
  moving_coin.scale.setTo(scale, scale);
  moving_coin.animations.add("run");
  moving_coin.animations.play("run", 20, true);
  return moving_coin;
}

function collisionHandler(bullet, tile) {
  var explosion = explosions.getFirstExists(false);
  if (explosion) {
    explosion_count++;
    explosion.reset(tile.body.x - 50, tile.body.y - 50);
    explosion.scale.setTo(1.5, 1.5);
    explosion.animations.add("kaboom");
    explosion.animations.play("kaboom", 60, false, true);
  }

  tile.kill();
  bullet.kill();

  var bv = 7275;
  var inc = 119 * 2;

  if (explosion_count == 1) {
    var css = game.add.sprite(bv, h - 400, "css");
    css.scale.setTo(0.5, 0.5);
    css.anchor.setTo(0.5, 0.5);
    game.add
      .tween(css)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(css.scale)
      .to(
        {
          y: 0.9,
          x: 0.9,
        },
        500
      )
      .start();
    var coin = addMovingCoin(bv, h - 400, 2);
    var t = game.add
      .tween(coin)
      .to(
        {
          x: hero.x + 100,
          y: hero.y + 50,
        },
        500
      )
      .start();
    t.onComplete.add(function () {
      coin.alpha = 0;
    });
  } else if (explosion_count == 2) {
    var html = game.add.sprite(bv + 1 * inc, h - 500, "html");
    html.scale.setTo(0.5, 0.5);
    html.anchor.setTo(0.5, 0.5);
    game.add
      .tween(html)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(html.scale)
      .to(
        {
          y: 0.9,
          x: 0.9,
        },
        500
      )
      .start();

    var coin = addMovingCoin(bv + inc, h - 400, 2);
    var t = game.add
      .tween(coin)
      .to(
        {
          x: hero.x + 100,
          y: hero.y + 50,
        },
        500
      )
      .start();
    t.onComplete.add(function () {
      coin.alpha = 0;
    });
  } else if (explosion_count == 3) {
    var js = game.add.sprite(bv + 2 * inc, h - 500, "mysql");
    js.scale.setTo(0.5, 0.5);
    js.anchor.setTo(0.5, 0.5);
    game.add
      .tween(js)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(js.scale)
      .to(
        {
          y: 0.9,
          x: 0.9,
        },
        800
      )
      .start();

    var coin = addMovingCoin(bv + 2 * inc, h - 400, 2);
    var t = game.add
      .tween(coin)
      .to(
        {
          x: hero.x + 100,
          y: hero.y + 50,
        },
        500
      )
      .start();
    t.onComplete.add(function () {
      coin.alpha = 0;
    });
  } else if (explosion_count == 4) {
    var py = game.add.sprite(bv + 3 * inc, h - 500, "flask");
    py.scale.setTo(0.2, 0.2);
    py.anchor.setTo(0.5, 0.5);
    game.add
      .tween(py)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(py.scale)
      .to(
        {
          y: 0.6,
          x: 0.6,
        },
        500
      )
      .start();

    var coin = addMovingCoin(bv + 3 * inc, h - 400, 2);
    var t = game.add
      .tween(coin)
      .to(
        {
          x: hero.x + 100,
          y: hero.y + 50,
        },
        500
      )
      .start();
    t.onComplete.add(function () {
      coin.alpha = 0;
    });
  } else if (explosion_count == 5) {
    /*
    var phaser= game.add.sprite(bv+3*inc,h-500,'phaser');
    py.scale.setTo(0.2,0.2);
    py.anchor.setTo(0.5,0.5);
    game.add.tween(py).to({y:h-550},300).start();
    game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();
    */

    var andro = game.add.sprite(bv + 4 * inc + 50, h - 500, "ds_power");
    andro.scale.setTo(0.2, 0.2);
    andro.anchor.setTo(0.5, 0.5);
    game.add
      .tween(andro)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(andro.scale)
      .to(
        {
          y: 0.6,
          x: 0.6,
        },
        600
      )
      .start();

    var coin = addMovingCoin(bv + 4 * inc, h - 400, 2);
    var t = game.add
      .tween(coin)
      .to(
        {
          x: hero.x + 100,
          y: hero.y + 50,
        },
        500
      )
      .start();
    t.onComplete.add(function () {
      coin.alpha = 0;
    });
  }
}

function fireBullet() {
  //  To avoid them being allowed to fire too fast we set a time limit
  if (
    game.time.now > bulletTime &&
    direction == "right" &&
    explosion_count < max_explosion_count
  ) {
    //  Grab the first bullet we can from the pool
    bullet = bullets.getFirstExists(false);

    if (bullet) {
      //  And fire it
      bullet.reset(hero.x + hero.width / 2 + 50, hero.y + 100);
      bullet.scale.setTo(1.5, 1);
      bullet.body.velocity.y = -400;
      bulletTime = game.time.now + 200;
    }

    bullet2 = bullets.getFirstExists(false);

    if (bullet2) {
      //  And fire it
      bullet2.reset(hero.x + hero.width / 2 + 100, hero.y + 100);
      bullet2.scale.setTo(1.5, 1);
      bullet2.body.velocity.y = -400;
      bulletTime = game.time.now + 300;
    }
  }
}

function resetBullet(bullet) {
  //  Called if the bullet goes out of the screen
  bullet.kill();
}

function moveBack() {
  hero.x -= 80;
  hero.animations.play("run", 15, true);
}

function createBubbles() {
  for (var i = 0; i < 20; i++) {
    var sprite = game.add.sprite(
      game.rnd.realInRange(8700, 9400),
      h + 400,
      "waterBubble"
    );

    sprite.scale.set(game.rnd.realInRange(0.1, 0.3));
    sprite.alpha -= 0.1;

    var speed = game.rnd.between(4000, 6000);

    game.add.tween(sprite).to(
      {
        y: h - game.rnd.realInRange(100, 250),
      },
      speed,
      Phaser.Easing.Sinusoidal.InOut,
      true,
      delay,
      1000,
      false
    );

    delay += 300;
  }
}

function mouseWheel(event) {
  inst_text.setText("");
  if (game.input.mouse.wheelDelta > 0) {
    hero.x += 60;
    hero.animations.play("run", 15, true);
  } else {
    hero.x -= 60;
    hero.animations.play("run", 15, true);
  }
}

function moveforward() {
  inst_text.setText("");
  hero.x += 80;
}

function forwardButtonPressed() {
  var ptr = game.input.activePointer;
  hero.animations.play("run", 15, true);

  if (
    (ptr.x >= w - 150 && ptr.y >= h - 150 && ptr.isDown) ||
    cursors.right.isDown ||
    scroll > 0
  ) {
    if (direction == "left") {
      direction = "right";
      hero.scale.setTo(1, 1);
      hero.anchor.setTo(0, 0);
    }
    return true;
  } else {
    return false;
  }
}

function backButtonPressed() {
  var ptr = game.input.activePointer;
  hero.animations.play("run", 15, true);
  if (
    (ptr.x <= 150 && ptr.y >= h - 150 && ptr.isDown) ||
    cursors.left.isDown ||
    scroll < 0
  ) {
    if (direction == "right") {
      direction = "left";
      //hero.anchor.setTo(1,0);
      hero.scale.setTo(-1, 1);
    }
    return true;
  } else return false;
}

function update() {
  game.physics.arcade.overlap(bullets, tiles, collisionHandler, null, this);
  var scroll = game.input.mouse.wheelDelta;

  if (hero.x > 2600 && hero.x <= 2650) {
    moveHillsUp();
  }

  if (forwardButtonPressed()) {
    inst_text.setText("");
    hero.x += 30;
    //console.log("Pointer:"+game.input.activePointer.x);
    hero.animations.play("run", 15, true);
  } else if (backButtonPressed()) {
    hero.x -= 30;
  } else {
    hero.animations.stop("run");
  }

  if (hero.x <= 0 && direction == "right") {
    hero.x = 0;
  }
  if (hero.x <= 150 && direction == "left") {
    hero.x = 150;
  }

  if (
    hero.x <= 6450 &&
    hero.x >= 6200 &&
    hero.y == h - 650 &&
    backButtonPressed()
  ) {
    game.add
      .tween(hero)
      .to(
        {
          x: 5800,
          y: h - 300,
        },
        300
      )
      .start();
    hero.x = 5780;
    hero.y = h - 300;
    //console.log("This tween");
  }
  if (hero.x < 8700 && hero.y > h && backButtonPressed()) {
    hero.x = 8700;
    console.log("Yeh valal");
  }
  //Throw into ocean right
  if (
    direction == "left" &&
    hero.x >= 9250 &&
    hero.x <= 9450 &&
    backButtonPressed()
  ) {
    hero.y = h + 300;
    hero.alpha = 0.8;
    birds.alpha = 0;
  }
  if (hero.x > base5) {
    night_tween.start();
  }

  if (hero.x > 8750 && hero.x < 8900 && hero.y > h && direction != "right") {
    var t = game.add
      .tween(hero)
      .to(
        {
          x: 8800,
          y: h - 300,
        },
        1000
      )
      .start();
    t.onComplete.add(function () {
      hero.alpha = 1;
      birds.alpha = 1;
      game.camera.y -= 150;
    });
    //console.log("Nahin Yeh Vaala")
  }

  if (hero.x >= 12500 && hero.x <= 12650 && forwardButtonPressed()) {
    var t = game.add.tween(hero).to(
      {
        x: 12800,
        y: h - 700,
      },
      100
    );
    t.start();
    t.onComplete.add(function () {
      game.add
        .tween(hero)
        .to(
          {
            x: 13100,
            y: h - 300,
          },
          200
        )
        .start();
    });
  }

  if (hero.x >= 13000 && hero.x <= 13100 && backButtonPressed()) {
    var t = game.add.tween(hero).to(
      {
        x: 12400,
        y: h - 600,
      },
      100
    );
    t.start();
    t.onComplete.add(function () {
      game.add
        .tween(hero)
        .to(
          {
            x: 12400,
            y: h - 300,
          },
          200
        )
        .start();
    });
  }

  if (hero.x > 4500) {
    showPlantsFromBottom();
    moveBugLeft();
  }

  if (hero.x > base5 + 800 && hero.x <= base5 + 900 && !cupTweenDone) {
    cupTweenDone = true;

    var cupTween1 = game.add.tween(cup1);
    cupTween1.to(
      {
        y: h - 280,
      },
      2000,
      Phaser.Easing.Bounce.Out,
      true
    );

    var cupTween2 = game.add.tween(cup2);
    cupTween2.to(
      {
        y: h - 340,
      },
      2000,
      Phaser.Easing.Bounce.Out,
      true
    );
    cupTween1.start();
    cupTween2.start();
  }
  if (hero.x > base5 + 1600 && hero.x <= base5 + 1700 && !cupTweenSecondDone) {
    cupTweenSecondDone = true;

    var cupTween3 = game.add.tween(cup3);
    cupTween3.to(
      {
        y: h - 410,
      },
      2000,
      Phaser.Easing.Bounce.Out,
      true
    );
    cupTween3.start();

    var cupTween4 = game.add.tween(cup4);
    cupTween4.to(
      {
        y: h - 410,
      },
      2000,
      Phaser.Easing.Bounce.Out,
      true
    );
    cupTween4.start();
  }

  if (hero.x > platformLength - 350) {
    hero.x = platformLength - 350;
    var t = game.add.tween(Thanks).to(
      {
        y: h - 815,
      },
      1000
    );
    t.start();
    t.onComplete.add(function () {}, this);
  }
  if (hero.x > 18000) {
    var t = game.add.tween(shakti2).to(
      {
        y: h - 450,
      },
      100
    );
    t.start();
    t.onComplete.add(bounceFootball, this);
  }

  if (hero.x > base7 + 500) {
    game.add
      .tween(cloud_moving2)
      .to(
        {
          x: base7,
          alpha: 0,
        },
        5000
      )
      .start();
    game.add
      .tween(cloud_moving1)
      .to(
        {
          x: platformLength,
          alpha: 0,
        },
        5000
      )
      .start();
  }

  if (
    hero.x > 5800 &&
    hero.x <= 6000 &&
    hero.y >= h - 245 - hero.height - 50 &&
    direction != "left"
  ) {
    game.add
      .tween(hero)
      .to(
        {
          x: 6500,
          y: h - 650,
        },
        100
      )
      .start();
  }
  //bug_tween = game.add.tween(bug).to({x:6550},3000,Phaser.Easing.Linear.None)
  //bug_tween.start();
  /*
    
    var tween = game.add.tween(hero).to( { x: [ 6000, 6200, 6400, 6600 ], y: [ h-250, h-400, h-400, h-250 ] },2000, "Sine.easeInOut", true, -1, false);
    tween.interpolation(Phaser.Math.linearInterpolation);
  */

  if (bug.x - hero.x <= 100) {
    //game.add.tween(bug).to({x:bug.x},3000,Phaser.Easing.Linear.None).start();
    //bug_tween.pause();
    //bug.scale.setTo(1,0.2);
    //console.log(bug.x - hero.x);
    bug.body.velocity.x = 0;

    bug.scale.setTo(1, 0.2);
    bug.body.y = h - 110;

    if (bug_killed == false) {
      game.add.text(bug.x, h - 200, "Oouch..!", style_roboto);
      bug_killed = true;
    }
  }
  //Throw onto Ground
  if (hero.x > 6830 && hero.x < 7000 && direction == "right") {
    hero.y = h - 300;
  }
  if (hero.x <= 7000 && hero.x > 6900 && direction == "left") {
    hero.y = h - 650;
  }
  //Throw into ocean
  if (
    hero.x >= 8600 &&
    hero.x <= 8800 &&
    hero.y == h - 300 &&
    forwardButtonPressed() &&
    direction == "right"
  ) {
    var t = game.add
      .tween(hero)
      .to(
        {
          x: 8700,
          y: h + 300,
        },
        300
      )
      .start();
    birds.alpha = 0;
    hero.alpha = 0.6;
    bubble.scale.setTo(0.5, 0.5);
    bubble.anchor.setTo(0.5, 0.5);
    animateBubble();

    //t.onComplete.add(function(){
    //var t = game.add.tween(bubble).to({x:9100,y:h-50},300).start()},this);

    //bubble.anchor.setTo(bubble.width/2,bubble.height/2);
    //t.onComplete.add(animateBubble,this);
  }

  if (hero.x > 9250 && hero.x < 9300 && hero.y > h && direction != "left") {
    var t = game.add
      .tween(hero)
      .to(
        {
          x: 9350,
          y: h - 300,
        },
        1000
      )
      .start();
    t.onComplete.add(function () {
      hero.alpha = 1;
      birds.alpha = 1;
      game.camera.y -= 150;
    });
  }

  if (hero.x >= 7100 && hero.x <= 8200) {
    fireBullet();
  }
}

function animateBubble() {
  bubble.scale.setTo(0.75, 0.75);
  game.physics.enable(bubble, Phaser.Physics.ARCADE);
  bubble.body.angularVelocity = 100;
}

function moveBugLeft() {
  if (bug_killed === false && hero.x >= 4900) {
    bug.body.velocity.x = -200;
  }
}

function moveHillsUp() {
  var hills2Tween = game.add.tween(hill2);
  hills2Tween.to(
    {
      y: h - 350,
    },
    2000
  );
  hills2Tween.start();

  var hills3Tween = game.add.tween(hill3);
  hills3Tween.to(
    {
      y: h - 400,
    },
    2500
  );
  hills3Tween.start();

  var ct = game.add.tween(aieee_cup);
  ct.to(
    {
      y: h - 410,
    },
    5000,
    Phaser.Easing.Bounce.Out,
    true
  );
  ct.start();
}

function showPlantsFromBottom() {
  var plantsTween = game.add.tween(ct1);
  plantsTween.to(
    {
      y: h - 300,
    },
    300
  );
  plantsTween.start();

  var plantsTween2 = game.add.tween(ct2);
  plantsTween2.to(
    {
      y: h - 400,
    },
    300
  );
  plantsTween2.start();

  var plantsTween3 = game.add.tween(ct3);
  plantsTween3.to(
    {
      y: h - 420,
    },
    300
  );
  plantsTween3.start();

  var plantsTween4 = game.add.tween(ct4);
  plantsTween4.to(
    {
      y: h - 420,
    },
    300
  );
  plantsTween4.start();
  plantsTween4.onComplete.add(fadeText, this);
}

function bounceFootball() {}

function bouncePrateek() {
  // var bounceTween =
}

function fadeText() {
  game.add
    .tween(jstext)
    .to(
      {
        alpha: 1,
      },
      2000,
      Phaser.Easing.Linear.None,
      true
    )
    .start();
  game.add
    .tween(ctext)
    .to(
      {
        alpha: 1,
      },
      2000,
      Phaser.Easing.Linear.None,
      true
    )
    .start();
  game.add
    .tween(pythontext)
    .to(
      {
        alpha: 1,
      },
      2000,
      Phaser.Easing.Linear.None,
      true
    )
    .start();
  game.add
    .tween(javatext)
    .to(
      {
        alpha: 1,
      },
      2000,
      Phaser.Easing.Linear.None,
      true
    )
    .start();
}

function render() {
  if (debug) {
    game.debug.spriteInfo(hero, 32, 32);
  }
}

function loadStart() {
  text.anchor.setTo(0.5, 0.5);
  text.setText("Loading ...");

  console.log("File complete...");

  console.log("Called Log Start !");
}

//  This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
  //game.add.sprite(w/2,h/2,'loader');
  console.log("File complete...");

  text.setText(
    "File Complete: " +
      progress +
      "% - " +
      totalLoaded +
      " out of " +
      totalFiles
  );

  /*  var newImage = game.add.image(x, y, cacheKey);

    newImage.scale.set(0.3);

    x += newImage.width + 20;

    if (x > 700)
    {
      x = 32;
      y += 332;
    }*/

  //text.setText("Loading...");
}

function loadComplete() {
  text.setText("Load Complete");
}

function openGithub() {
  var win = window.open(github_url);
  win.focus();
}

function openLinkedIn() {
  var win = window.open(linkedin_url);
  win.focus();
}

function openhackerRank() {
  var win = window.open(hackerRank_url);
  win.focus();
}

function openWebsite() {
  var win = window.open(website_url);
  win.focus();
}

function openResume() {
  var win = window.open(resume_url);
  win.focus();
}

function openGmail() {
  var win = window.open("mailto:prateekjainpk@gmail.com");
  win.focus();
}

function openInsta() {
  var win = window.open(insta_url);
  win.focus();
}

function openMedium() {
  var win = window.open(medium_url);
  win.focus();
}

function openproj1() {
  var win = window.open(proj1);
  win.focus();
}
function openproj2() {
  var win = window.open(proj2);
  win.focus();
}

function openproj3() {
  var win = window.open(proj3);
  win.focus();
}

function openproj4() {
  var win = window.open(proj4);
  win.focus();
}

function openproj5() {
  var win = window.open(proj5);
  win.focus();
}


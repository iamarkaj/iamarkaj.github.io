var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#032e66";
var orange = "#FF7519";
var debug = false;
var hero;
var cursors;
var tree1;
var plant1;
var tree_palm;
var ct1, ct2, ct3, ct4;
var bulletTime = 0;
var ctext, pythontext, cpptext, jstext;
var birds;
var bird;
var shakti;
var shakti_cup;
var shakti2;
var text;
var resume_url = "https://drive.google.com/file/d/1nwZ-jLU5kzjUojwQ_2JKbCA1Km_1vL27/view?usp=sharing";
var inst_text;
var bug;
var bug_tween;
var bug_killed = false;
var base5 = 15100;
var platformLength = 16000;
var cupTweenDone = false;
var cupTweenSecondDone = false;
var delay = 0;
var starting_point = 100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count = 5;


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
  fill: "#00000",
  align: "center",
};
var game = new Phaser.Game(w, h, Phaser.CANVAS, "canvas", {
  preload: preload,
  create: create,
  update: update,
  render: render,
});


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
  game.load.image("dassault", "assets/dassault.png");
  game.load.image("cloud", "assets/cloud.png");
  game.load.image("birds", "assets/birds.png");
  game.load.image("bird", "assets/bird.png");
  game.load.image("school", "assets/school.png");
  game.load.image("mainbanner", "assets/main-banner.png");
  game.load.image("building", "assets/building.png");
  game.load.image("thapar", "assets/thapar.png");
  game.load.image("hometown", "assets/milestone.png");
  game.load.image("hill", "assets/mountain.png");
  game.load.image("tiet_logo", "assets/tiet.png");
  game.load.image("level", "assets/sign.png");
  game.load.image("cocotree", "assets/coco.png");
  game.load.image("party", "assets/party.png");
  game.load.image("night", "assets/night.gif");
  game.load.image("frog", "assets/frog.png");
  game.load.image("git", "assets/git.png");
  game.load.image("scroll_2015", "assets/scroll_2015.png");
  game.load.image("scroll_2017", "assets/scroll_2017.png");
  game.load.image("c", "assets/javalogo.png");
  game.load.image("python_logo", "assets/python.png");
  game.load.image("cpp_logo", "assets/cpp.png");
  game.load.image("chash_logo", "assets/chash.png");
  game.load.image("bullet", "assets/bullet.png");
  game.load.image("cup", "assets/cup.png");
  game.load.image("algae", "assets/algae-b.png");
  game.load.image("bug", "assets/bug.png");
  game.load.image("Thanks", "assets/Thanks.png");
  game.load.image("squarebrick", "assets/brick_small.png");
  game.load.image("questionbrick", "assets/question_block_small.png");
  game.load.image("question_hide", "assets/question_block_plain_small.png");


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
  game.load.atlasJSONHash(
    "coin_moving",
    "assets/coin-sprite.png",
    "assets/coin-sprite-map.json"
  );

  game.load.image("waterBubble", "assets/bubble256.png");
  game.load.image("sun", "assets/sun.png");
  game.load.atlasXML(
    "seacreatures",
    "assets/seacreatures.png",
    "assets/seacreatures.xml"
  );
  game.load.spritesheet("kaboom", "assets/explode.png", 128, 128);
}

function create() {
  //Add Clouds
  for (var i = 0; i < 15000; i += 1000) {
    if (i >= 6800 && i <= 8100) {
      game.add.sprite(i, h - 680, "cloud");
      game.add.sprite(i + 400, h - 630 + 50, "cloud");
    } else {
      game.add.sprite(i, h - 580, "cloud");
      game.add.sprite(i + 400, h - 630, "cloud");
    }
  }

  //Add night mode
  night = game.add.tileSprite(0, 0, platformLength * 1, h, "night");
  night.alpha = 1;


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

  Thanks = game.add.sprite(platformLength - 650, h - 1050, "Thanks");
  Thanks.scale.setTo(0.5, 0.5);

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

  cpptext = game.add.sprite(5240, h - 490, "cpp_logo");
  pythontext = game.add.sprite(5625, h - 490, "python_logo");
  jstext = game.add.sprite(5057, h - 355, "chash_logo");
  ctext = game.add.sprite(5480, h - 480, "c");
  cpptext.alpha = 0.2;
  pythontext.alpha = 0.2;
  jstext.alpha = 0.2;
  ctext.alpha = 0.2;
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


  var style = {
    font: "22px monospace",
    fill: "#fff",
    align: "center",
  };
  game.add.text(
    3330,
    h - 260,
    "St. CLARET SCHOOL \n (Class 1-10) ",
    style
  );
  game.add.text(
    3750,
    h - 300,
    "St. XAVIER'S \n INSTITUTION \n (Class 11-12) ",
    style
  );


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
  var brick2 = game.add.sprite(12750 - 70, h - 100 - 36, "brick");
  brick2.scale.setTo(0.5, 0.5);
  game.add.sprite(12750 - 70, h - 100, "brick").scale.setTo(0.5, 0.5);
  game.add.sprite(12750 + 350, h - 100 - 36, "brick").scale.setTo(0.5, 0.5);
  game.add.sprite(12750 + 350, h - 100, "brick").scale.setTo(0.5, 0.5);
  var water2 = game.add.tileSprite(
    12750,
    h - 100 - 36 + 10,
    700,
    320,
    "waterAtlas2"
  );
  water2.scale.setTo(0.5, 0.5);
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


  //Add Main Banner
  var building = game.add.sprite(500, h - 600, "building");
  building.scale.setTo(0.75, 0.75);
  var banner = game.add.sprite(200, h - 390, "mainbanner");

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
  game.add.sprite(9600, h - 440, "level");
  game.add.text(9670, h - 340, "Level 3");
  game.add.text(9740, h - 260, "Experience", {
    font: "25px Arial Black",
  });

  game.add.sprite(10200, h - 420, "tree1").scale.setTo(0.75, 0.75);

  //Add frog
  for (row = 1; row <= 7; row++) {
    for (
      var xcoord = 10500 + (row - 1) * 60 + 200;
      xcoord <= 11200 - (row - 1) * 60 + 260;
      xcoord += 60
    ) {
      if (row == 7) {
      }
      game.add
        .sprite(xcoord, h - 100 - row * 60, "squarebrick")
        .scale.setTo(0.5, 0.5);
    }
  }

  game.add.sprite(10000, h - 450, "frog").scale.setTo(1.2, 1.2);
  game.add.sprite(10500, h - 450, "frog").scale.setTo(1.2, 1.2);

  game.add.sprite(10010, h - 260, "dassault").scale.setTo(0.75, 0.75);

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
  game.add.text(
    10060,
    h - 275,
    "La Fondation Dassault Systemes, India \n Feb'21-Present  \n Industry Internship Program",
    style_exS
  );
  game.add.text(
    10565,
    h - 270,
    "Freelance \n Natural Language Processing \n Engineer",
    style_exS
  );


  //Positon style
  var style_position = {
    font: "24px monospace",
    fill: "#fff",
    align: "center",
  };

  //Add hometown
  var hometown = game.add.sprite(1850, h - 415, "hometown");

  //Add Scrolls
  var scroll_2015 = game.add.sprite(3250, h - 747, "scroll_2015");
  var scroll_2017 = game.add.sprite(3650, h - 747, "scroll_2017");


  //Add College building
  game.add.sprite(4000, h - 405, "thapar").scale.setTo(0.9, 0.9);
  aieee_cup = game.add.sprite(3500, -500, "cup");
  game.add.text(4050, h - 127, "  THAPAR UNIVERSITY (2018-2022)", style_roboto1);


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
  var school = game.add.sprite(2600, h - 415, "school");
  school.scale.setTo(1.0,1.0);

  var clg = game.add.sprite(4150, h - 600, "tiet_logo");
  clg.scale.setTo(0.6, 0.6);

  //  hero tween
  var entryTween = game.add.tween(hero);
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
    var party = game.add.sprite(bv, h - 400, "party");
    party.scale.setTo(0.5, 0.5);
    party.anchor.setTo(0.5, 0.5);
    game.add
      .tween(party)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(party.scale)
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
    var party = game.add.sprite(bv + 1 * inc, h - 500, "party");
    party.scale.setTo(0.5, 0.5);
    party.anchor.setTo(0.5, 0.5);
    game.add
      .tween(party)
      .to(
        {
          y: h - 550,
        },
        300
      )
      .start();
    game.add
      .tween(party.scale)
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
    var js = game.add.sprite(bv + 2 * inc, h - 500, "party");
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
    var py = game.add.sprite(bv + 3 * inc, h - 500, "party");
    py.scale.setTo(0.5, 0.5);
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
          y: 0.9,
          x: 0.9,
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

    var andro = game.add.sprite(bv + 4 * inc, h - 500, "party");
    andro.scale.setTo(0.5, 0.5);
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
          y: 0.9,
          x: 0.9,
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

  if (hero.x > platformLength-350) {
    hero.x = platformLength-350;
    var t = game.add.tween(Thanks).to(
      {
        y: h - 615,
      },
      1000
    );
    t.start();
    t.onComplete.add(function () {}, this);
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

  if (bug.x - hero.x <= 100) {
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
    .tween(cpptext)
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
  console.log("File complete...");
  text.setText(
    "File Complete: " +
      progress +
      "% - " +
      totalLoaded +
      " out of " +
      totalFiles
  );
}

function loadComplete() {
  text.setText("Load Complete");
}
function openResume() {
  var win = window.open(resume_url);
  win.focus();
}


'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    "use strict";
    var moteur = new Engine();
    moteur.new_game();

    assertTrue(moteur.juxtaposition_is_ok());
};

PalettoTestCase.prototype.testStory2 = function () {
    "use strict";
    var moteur = new Engine();
    moteur.new_game();

    assertTrue(moteur.juxtaposition_is_ok());

    assertTrue(moteur.in_corner("jaune"));
};

PalettoTestCase.prototype.testStory3 = function () {
    "use strict";
    var moteur = new Engine();
    moteur.new_game();

    assertTrue(moteur.juxtaposition_is_ok());

    assertTrue(moteur.in_corner("jaune"));

    moteur.remove_piece("A6");

    assertTrue(moteur.get_number_piece() === 35);

    assertTrue(moteur.get_number_piece_player(1,"jaune") == 1)
};
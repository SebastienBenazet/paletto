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

PalettoTestCase.prototype.testStory4 = function () {
    "use strict";
    var moteur = new Engine();
    moteur.new_game();

    moteur.remove_piece("A6");

    assertTrue(moteur.can_be_removed("A1") === true);
    assertTrue(moteur.can_be_removed("F6") === true);
    assertTrue(moteur.can_be_removed("F1") === true);
    assertTrue(moteur.can_be_removed("A5") === true);
    assertTrue(moteur.can_be_removed("B6") === true);

    moteur.remove_piece("A1");
    moteur.remove_piece("F6");

    assertTrue(moteur.get_number_piece_player(2,"noir") == 2)
};
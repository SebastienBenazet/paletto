'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    "use strict";
    var moteur = new Engine();
    moteur.new_game();

    assertTrue(moteur.juxtaposition_is_ok() === true);
};
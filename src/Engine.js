'use strict';

var Engine = function () {

// private attributes and methods
    var i, tourJoueur, ligne, colonne, nbPieces;
    var taillePlateau = 6;
    var plateau = new Array(taillePlateau);

    var noir = "noir";
    var vert = "vert";
    var blanc = "blanc";
    var bleu = "bleu";
    var rouge = "rouge";
    var jaune = "jaune";

    var couleur = [noir, vert, blanc, bleu, rouge, jaune];

    var nombrePieceJoueur1 = [];
    var nombrePieceJoueur2 = [];

    this.new_game = function () {
        nbPieces = 0;
        for (i = 0; i < plateau.length; i++) {
            plateau[i] = new Array(taillePlateau);
        }

        plateau[0][0] = noir;
        plateau[0][1] = vert;
        plateau[0][2] = blanc;
        plateau[0][3] = bleu;
        plateau[0][4] = rouge;
        plateau[0][5] = blanc;

        plateau[1][0] = jaune;
        plateau[1][1] = blanc;
        plateau[1][2] = vert;
        plateau[1][3] = rouge;
        plateau[1][4] = jaune;
        plateau[1][5] = bleu;

        plateau[2][0] = bleu;
        plateau[2][1] = jaune;
        plateau[2][2] = bleu;
        plateau[2][3] = blanc;
        plateau[2][4] = noir;
        plateau[2][5] = rouge;

        plateau[3][0] = rouge;
        plateau[3][1] = noir;
        plateau[3][2] = rouge;
        plateau[3][3] = vert;
        plateau[3][4] = bleu;
        plateau[3][5] = blanc;

        plateau[4][0] = blanc;
        plateau[4][1] = vert;
        plateau[4][2] = jaune;
        plateau[4][3] = noir;
        plateau[4][4] = jaune;
        plateau[4][5] = vert;

        plateau[5][0] = jaune;
        plateau[5][1] = bleu;
        plateau[5][2] = noir;
        plateau[5][3] = rouge;
        plateau[5][4] = vert;
        plateau[5][5] = noir;

        tourJoueur = 1;

        for (i = 0; i < 6; i++) {
            nombrePieceJoueur1[couleur[i]] = 0;
            nombrePieceJoueur2[couleur[i]] = 0;
        }
    }

    this.juxtaposition_is_ok = function () {

        for (ligne = 0; ligne < taillePlateau; ligne++) {
            for (colonne = 0; colonne < taillePlateau; colonne++) {
                if (ligne != 0)
                    if (plateau[ligne][colonne] === plateau[ligne - 1][colonne])
                        return false;
                if (colonne != 0)
                    if (plateau[ligne][colonne] === plateau[ligne][colonne - 1])
                        return false;
                if (colonne != taillePlateau - 1)
                    if (plateau[ligne][colonne] === plateau[ligne][colonne + 1])
                        return false;
                if (ligne != taillePlateau - 1)
                    if (plateau[ligne][colonne] === plateau[ligne + 1][colonne])
                        return false;
            }
        }
        return true;
    };

    this.in_corner = function (couleur) {
        if (plateau[0][0] === couleur)
            return true;
        else if (plateau[0][5] === couleur)
            return true;
        else if (plateau[5][0] === couleur)
            return true;
        else if (plateau[5][5] === couleur)
            return true;
        else
            return false;
    }


    this.remove_piece = function (position) {
        colonne = position.charCodeAt(0) - 65;
        ligne = position.charCodeAt(1) - 49;

        if (plateau[ligne][colonne] != null) {
            if (tourJoueur === 1) {
                nombrePieceJoueur1[plateau[ligne][colonne]]++;
            } else {
                nombrePieceJoueur2[plateau[ligne][colonne]]++;
            }
            plateau[ligne][colonne] = null;
        } else {
            throw new ExceptionIsEmpty();
        }
    };

    this.get_number_piece = function () {

        for (ligne = 0; ligne < taillePlateau; ligne++) {
            for (colonne = 0; colonne < taillePlateau; colonne++) {
                if (!(plateau[ligne][colonne] == null))
                    nbPieces++;
            }
        }
        return nbPieces;
    };

    this.get_number_piece_player = function (player, color) {
        if (player === 1) {
            return nombrePieceJoueur1[color];
        } else {
            return nombrePieceJoueur2[color];
        }
    };

    this.can_be_removed = function (position) {
        colonne = position.charCodeAt(0) - 65;
        ligne = position.charCodeAt(1) - 49;
        var compteur = 0;

        if (ligne != 0)
            if (plateau[ligne -1][colonne] != null)
                compteur++;
        if  (colonne != taillePlateau -1)
            if (plateau[ligne][colonne + 1] != null)
                compteur++;
        if  (ligne != taillePlateau -1)
            if (plateau[ligne +1][colonne] != null)
                compteur++;
        if  (colonne != 0)
            if (plateau[ligne][colonne -1] != null)
                compteur++;


        if (compteur <= 2)
            return true;
        else
            return false;
    };

    this.change_turn = function () {
        if (tourJoueur === 1) tourJoueur = 2;
        else tourJoueur = 1;
    };


};
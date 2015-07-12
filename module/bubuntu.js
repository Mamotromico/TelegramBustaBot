alphabet = "ABCDEFGHIJLMNOPQRSTUVXZ";

animalName = new Array();
animalName["A"] = ["fArara", "fAnaconda", "fAbelha", "f&Aacute;guia", "mAlce", "fAnta", "fAndorinha", "mAnt&iacute;lope", "fAranha", "mAvestruz"];
animalName["B"] = ["mBabu&iacute;no", "fBorboleta", "mBulldog", "fBarata", "mBoi", "fBaleia", "mBis&atilde;o", "mBurro"];
animalName["C"] = ["mCavalo", "mCamelo", "mCachorro", "fCadela", "mC&aacute;gado", "mCalango", "mCarrapato", "mCaramujo", "mCanguru", "mCaracol", "mCaranguejo", "fCobra", "mCoelho", "mCoiote"];
animalName["D"] = ["mDromed&aacute;rio", "fDoninha", "mDiabo-da-tasm&acirc;nia", "mDrag&atilde;o"];
animalName["E"] = ["fEquidina", "f&Eacute;gua", "mEsquilo", "fEnguia", "mElefante"];
animalName["F"] = ["fFoca", "mFais&atilde;o"];
animalName["G"] = ["mGato", "fGata", "mGuepardo"];
animalName["H"] = ["mHipop&oacute;tamo", "mHamster", "fHiena"];
animalName["I"] = ["fIguana", "mIaque"];
animalName["J"] = ["mJabuti", "mJumento", "mJaguar", "mJavali"];
animalName["L"] = ["fLesma", "fLebre", "mLe&atilde;o", "mLeopardo"];
animalName["M"] = ["mMacaco", "fMinhoca", "fMedusa"];
animalName["N"] = ["fNaja", "mNarval"];
animalName["O"] = ["mOrnitorrinco", "fOvelha", "mOuri&ccedil;o", "fOstra"];
animalName["P"] = ["mPapagaio", "mPeru", "fPerua", "mPorco", "fPorca", "mPanda", "fPata", "mPato"];
animalName["Q"] = ["mQuati"];
animalName["R"] = ["mRato", "fRaposa", "mRinoceronte"];
animalName["S"] = ["mSapo", "mSuricate", "fSiriema"];
animalName["T"] = ["fTartaruga", "mTigre", "fTigresa", "mTrit&atilde;o"];
animalName["U"] = ["mUrubu", "mUrso", "fUrsa"];
animalName["V"] = ["mVeado", "fVaca", "fV&iacute;bora"];
animalName["X"] = ["mXimango", "mXex&eacute;u"];
animalName["Z"] = ["fZebra", "mZang&atilde;o"];

adjectiveName = new Array();
adjectiveName["m"] = new Array();
adjectiveName["f"] = new Array();

maleAdjectiveList = ["Arruaceiro", "Arrombado", "Agitado", "Arretado", "Bab&atilde;o", "Bolado", "Babaca", "Bei&ccedil;udo", "Burro", "Best&atilde;o", "Bobalh&atilde;o", "Cagado", "Coitado", "Chapado", "Coisado", "Doid&atilde;o", "Derrubado", "Esdr&uacute;xulo", "Exc&eacute;ntrico", "Fardado", "Ferrado", "F%#@!&o", "Fofoqueiro", "Fuleiro", "Fuleragi", "Gaiato", "Hipocondriaco", "Ing&ecirc;nuo", "Judiado", "Lesado", "Maluco", "Manco", "Noiado", "Nojento", "Ousado", "Pirangueiro", "Querido", "Quengado", "Queixudo", "Ro&iacute;do", "Raparigueiro", "Seboso", "Tarado", "Tapado", "Ut&oacute;pico", "Ultrapassado", "Valente", "Viado", "Virtuoso", "X&ecirc;roso", "Zaroio", "Maroto", "Xexelento", "Zangado", "Pan&ccedil;udo", "Glamuroso", "Paran&oacute;ico", "Tetudo", "Suado", "Chupador", "Avexado", "Doidinho", "Dorminhoco", "Violento", "Sarado", "Hipertenso", "Rasteiro", "Raivoso", "Galático", "Joiado"];
femaleAdjectiveList = ["Arruaceira", "Arrombada", "Agitada", "Arretada", "Aloca", "Babona", "Bolada", "Babaca", "Bei&ccedil;uda", "Burra", "Bestona", "Bobalhona", "Baranga", "Cagada", "Coitada", "Chapada", "Coisada", "Doidona", "Derrubada", "Esdr&uacute;xula", "Exc&eacute;ntrica", "Fardada", "Ferrada", "F%#@!&a", "Fofoqueira", "Fuleira", "Gaiata", "Hipocondriaca", "Ing&ecirc;nua", "Judiada", "Lesada", "Maluca", "Manca", "Noiada", "Nojenta", "Ousada", "Pirangueira", "Querida", "Quengada", "Queixuda", "Ro&iacute;da", "Raparigueira", "Sebosa", "Tarada", "Tapada", "Ut&oacute;pica", "Ultrapassada", "Valente", "Viada", "Virtuosa", "X&ecirc;rosa", "Zaroia", "Mimosa", "Marota", "Xexelenta", "Zangada", "Pan&ccedil;uda", "Glamurosa", "Suada", "Paran&oacute;ica", "Avexada", "Doidinha", "Dorminhoca", "Violenta", "Sarada", "Hipertensa", "Rasteira", "Raivosa", "Galática", "Joiada"];
unisexAdjectiveList = ["Anormal", "Fuleragi", "Espilicute", "Excepcional", "Dormente", "Capenga", "Paia", "Patife", "Xeidicoisa", "Vol&aacute;til", "Paranormal", "Tribuf&uacute;", "Boboca", "Viril"];

function genRandom(min, max) {
	return Math.floor((Math.random() * max) + min);
}

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function initEverything() {
	fillAdjectives();
	setDBCount();
	generateName();
}

function fillAdjectives() {
	for ( i = 0; i < alphabet.length; i++) {
		adjectiveName["m"][alphabet.charAt(i)] = new Array();
		adjectiveName["f"][alphabet.charAt(i)] = new Array();
	}
	for ( i = 0; i < maleAdjectiveList.length; i++) {
		adjectiveName["m"][maleAdjectiveList[i].charAt(0)].push(maleAdjectiveList[i]);
	}
	for ( i = 0; i < femaleAdjectiveList.length; i++) {
		adjectiveName["f"][femaleAdjectiveList[i].charAt(0)].push(femaleAdjectiveList[i]);
	}
	for ( i = 0; i < unisexAdjectiveList.length; i++) {
		adjectiveName["m"][unisexAdjectiveList[i].charAt(0)].push(unisexAdjectiveList[i]);
		adjectiveName["f"][unisexAdjectiveList[i].charAt(0)].push(unisexAdjectiveList[i]);
	}
}

function setDBCount() {
	animal_count = 0;
	for ( i = 0; i < alphabet.length; i++) {
		sel_char = alphabet.charAt(i);
		animal_list = animalName[sel_char];
		animal_count += animal_list.length;
	}
}

function generateName() {
	// Select Character
	selected_char = alphabet.charAt(genRandom(0, alphabet.length));
	// Select Animal
	selected_animal = animalName[selected_char][genRandom(0, animalName[selected_char].length)];
	// Get Animal Sex
	animal_sex = selected_animal.charAt(0);
	selected_animal = selected_animal.slice(1);
	// Get Animal+Sex Adjective
	selected_adjective = adjectiveName[animal_sex][selected_char][genRandom(0, adjectiveName[animal_sex][selected_char].length)];
	return (selected_animal + " " + selected_adjective);
}

initEverything();

module.exports = {
  execute: function (struct) {
    return generateName();
  },
  help: function () {
    return "/bubuntu - Gera um nome de versão do bubuntu!";
  }
};
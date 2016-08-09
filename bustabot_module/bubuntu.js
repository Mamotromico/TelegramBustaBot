alphabet = "ABCDEFGHIJLMNOPQRSTUVXZ";

animalName = new Array();
animalName["A"] = ["fArara", "fAnaconda", "fAbelha", "fÁguia", "mAlce", "fAnta", "fAndorinha", "mAntílope", "fAranha", "mAvestruz"];
animalName["B"] = ["mBabuíno", "fBorboleta", "mBulldog", "fBarata", "mBoi", "fBaleia", "mBisão", "mBurro"];
animalName["C"] = ["mCavalo", "mCamelo", "mCachorro", "fCadela", "mCÁgado", "mCalango", "mCarrapato", "mCaramujo", "mCanguru", "mCaracol", "mCaranguejo", "fCobra", "mCoelho", "mCoiote"];
animalName["D"] = ["mDromedÁrio", "fDoninha", "mDiabo-da-tasmânia", "mDragão"];
animalName["E"] = ["fEquidina", "fégua", "mEsquilo", "fEnguia", "mElefante"];
animalName["F"] = ["fFoca", "mFaisão"];
animalName["G"] = ["mGato", "fGata", "mGuepardo"];
animalName["H"] = ["mHipopótamo", "mHamster", "fHiena"];
animalName["I"] = ["fIguana", "mIaque"];
animalName["J"] = ["mJabuti", "mJumento", "mJaguar", "mJavali"];
animalName["L"] = ["fLesma", "fLebre", "mLeão", "mLeopardo"];
animalName["M"] = ["mMacaco", "fMinhoca", "fMedusa"];
animalName["N"] = ["fNaja", "mNarval"];
animalName["O"] = ["mOrnitorrinco", "fOvelha", "mOuriço", "fOstra"];
animalName["P"] = ["mPapagaio", "mPeru", "fPerua", "mPorco", "fPorca", "mPanda", "fPata", "mPato"];
animalName["Q"] = ["mQuati"];
animalName["R"] = ["mRato", "fRaposa", "mRinoceronte"];
animalName["S"] = ["mSapo", "mSuricate", "fSiriema"];
animalName["T"] = ["fTartaruga", "mTigre", "fTigresa", "mTritão"];
animalName["U"] = ["mUrubu", "mUrso", "fUrsa"];
animalName["V"] = ["mVeado", "fVaca", "fVíbora"];
animalName["X"] = ["mXimango", "mXexéu"];
animalName["Z"] = ["fZebra", "mZangão"];

adjectiveName = new Array();
adjectiveName["m"] = new Array();
adjectiveName["f"] = new Array();

maleAdjectiveList = ["Arruaceiro", "Arrombado", "Agitado", "Arretado", "Babão", "Bolado", "Babaca", "Beiçudo", "Burro", "Bestão", "Bobalhão", "Cagado", "Coitado", "Chapado", "Coisado", "Doidão", "Derrubado", "Esdrúxulo", "Excéntrico", "Fardado", "Ferrado", "F%#@!&o", "Fofoqueiro", "Fuleiro", "Fuleragi", "Gaiato", "Hipocondriaco", "Ingênuo", "Judiado", "Lesado", "Maluco", "Manco", "Noiado", "Nojento", "Ousado", "Pirangueiro", "Querido", "Quengado", "Queixudo", "Roído", "Raparigueiro", "Seboso", "Tarado", "Tapado", "Utópico", "Ultrapassado", "Valente", "Viado", "Virtuoso", "Xêroso", "Zaroio", "Maroto", "Xexelento", "Zangado", "Pançudo", "Glamuroso", "Paranóico", "Tetudo", "Suado", "Chupador", "Avexado", "Doidinho", "Dorminhoco", "Violento", "Sarado", "Hipertenso", "Rasteiro", "Raivoso", "Galático", "Joiado"];
femaleAdjectiveList = ["Arruaceira", "Arrombada", "Agitada", "Arretada", "Aloca", "Babona", "Bolada", "Babaca", "Beiçuda", "Burra", "Bestona", "Bobalhona", "Baranga", "Cagada", "Coitada", "Chapada", "Coisada", "Doidona", "Derrubada", "Esdrúxula", "Excéntrica", "Fardada", "Ferrada", "F%#@!&a", "Fofoqueira", "Fuleira", "Gaiata", "Hipocondriaca", "Ingênua", "Judiada", "Lesada", "Maluca", "Manca", "Noiada", "Nojenta", "Ousada", "Pirangueira", "Querida", "Quengada", "Queixuda", "Roída", "Raparigueira", "Sebosa", "Tarada", "Tapada", "Utópica", "Ultrapassada", "Valente", "Viada", "Virtuosa", "Xêrosa", "Zaroia", "Mimosa", "Marota", "Xexelenta", "Zangada", "Pançuda", "Glamurosa", "Suada", "Paranóica", "Avexada", "Doidinha", "Dorminhoca", "Violenta", "Sarada", "Hipertensa", "Rasteira", "Raivosa", "Galática", "Joiada"];
unisexAdjectiveList = ["Anormal", "Fuleragi", "Espilicute", "Excepcional", "Dormente", "Capenga", "Paia", "Patife", "Xeidicoisa", "Volátil", "Paranormal", "Tribufú", "Boboca", "Viril"];

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
    return "Gera um nome de versão do bubuntu!";
  }
};
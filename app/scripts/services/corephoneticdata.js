'use strict';

/**
 * @ngdoc service
 * @name escaApp.CorePhoneticData
 * @description
 * # CorePhoneticData
 * Service in the escaApp.
 */
angular.module('escaApp')
  .service('CorePhoneticData', function CorePhoneticData() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
	    "a": {
		"xsampa": "a",
		"ipa": "a",
		"features": ["open", "front", "unrounded", "vowel"]
	    },
	    "b": {
		"xsampa": "b",
		"ipa": "b",
		"features": ["voiced", "bilabial", "plosive"]
	    },
	    "b_<": {
		"xsampa": "b_<",
		"ipa": "ɓ",
		"features": ["voiced", "bilabial", "implosive"]
	    },
	    "c": {
		"xsampa": "c",
		"ipa": "c",
		"features": ["voiceless", "palatal", "plosive"]
	    },
	    "d": {
		"xsampa": "d",
		"ipa": "d",
		"features": ["voiced", "alveolar", "plosive"]
	    },
	    "d`": {
		"xsampa": "d`",
		"ipa": "ɖ",
		"features": ["voiced", "retroflex", "plosive"]
	    },
	    "d_<": {
		"xsampa": "d_<",
		"ipa": "ɗ",
		"features": ["voiced", "alveolar", "implosive"]
	    },
	    "e": {
		"xsampa": "e",
		"ipa": "e",
		"features": ["close-mid", "front", "unrounded", "vowel"]
	    },
	    "f": {
		"xsampa": "f",
		"ipa": "f",
		"features": ["voiceless", "labiodental", "fricative"]
	    },
	    "g": {
		"xsampa": "g",
		"ipa": "ɡ",
		"features": ["voiced", "velar", "plosive"]
	    },
	    "g_<": {
		"xsampa": "g_<",
		"ipa": "ɠ",
		"features": ["voiced", "velar", "implosive"]
	    },
	    "h": {
		"xsampa": "h",
		"ipa": "h",
		"features": ["voiceless", "glottal", "fricative"]
	    },
	    "h\\": {
		"xsampa": "h\\",
		"ipa": "ɦ",
		"features": ["voiced", "glottal", "fricative"]
	    },
	    "i": {
		"xsampa": "i",
		"ipa": "i",
		"features": ["close", "front", "unrounded", "vowel"]
	    },
	    "j": {
		"xsampa": "j",
		"ipa": "j",
		"features": ["palatal", "approximant"]
	    },
	    "j\\": {
		"xsampa": "j\\",
		"ipa": "ʝ",
		"features": ["voiced", "palatal", "fricative"]
	    },
	    "k": {
		"xsampa": "k",
		"ipa": "k",
		"features": ["voiceless", "velar", "plosive"]
	    },
	    "l": {
		"xsampa": "l",
		"ipa": "l",
		"features": ["alveolar", "lateral", "approximant"]
	    },
	    "l`": {
		"xsampa": "l`",
		"ipa": "ɭ",
		"features": ["retroflex", "lateral", "approximant"]
	    },
	    "l\\": {
		"xsampa": "l\\",
		"ipa": "ɺ",
		"features": ["alveolar", "lateral", "flap"]
	    },
	    "m": {
		"xsampa": "m",
		"ipa": "m",
		"features": ["bilabial", "nasal"]
	    },
	    "n": {
		"xsampa": "n",
		"ipa": "n",
		"features": ["alveolar", "nasal"]
	    },
	    "n`": {
		"xsampa": "n`",
		"ipa": "ɳ",
		"features": ["retroflex", "nasal"]
	    },
	    "o": {
		"xsampa": "o",
		"ipa": "o",
		"features": ["close-mid", "back", "rounded", "vowel"]
	    },
	    "p": {
		"xsampa": "p",
		"ipa": "p",
		"features": ["voiceless", "bilabial", "plosive"]
	    },
	    "p\\": {
		"xsampa": "p\\",
		"ipa": "ɸ",
		"features": ["voiceless", "bilabial", "fricative"]
	    },
	    "q": {
		"xsampa": "q",
		"ipa": "q",
		"features": ["voiceless", "uvular", "plosive"]
	    },
	    "r": {
		"xsampa": "r",
		"ipa": "r",
		"features": ["alveolar", "trill"]
	    },
	    "r`": {
		"xsampa": "r`",
		"ipa": "ɽ",
		"features": ["retroflex", "flap"]
	    },
	    "r\\": {
		"xsampa": "r\\",
		"ipa": "ɹ",
		"features": ["alveolar", "approximant"]
	    },
	    "r\\`": {
		"xsampa": "r\\`",
		"ipa": "ɻ",
		"features": ["retroflex", "approximant"]
	    },
	    "s": {
		"xsampa": "s",
		"ipa": "s",
		"features": ["voiceless", "alveolar", "fricative"]
	    },
	    "s`": {
		"xsampa": "s`",
		"ipa": "ʂ",
		"features": ["voiceless", "retroflex", "fricative"]
	    },
	    "s\\": {
		"xsampa": "s\\",
		"ipa": "ɕ",
		"features": ["voiceless", "alveolo-palatal", "fricative"]
	    },
	    "t": {
		"xsampa": "t",
		"ipa": "t",
		"features": ["voiceless", "alveolar", "plosive"]
	    },
	    "t`": {
		"xsampa": "t`",
		"ipa": "ʈ",
		"features": ["voiceless", "retroflex", "plosive"]
	    },
	    "u": {
		"xsampa": "u",
		"ipa": "u",
		"features": ["close", "back", "rounded", "vowel"]
	    },
	    "v": {
		"xsampa": "v",
		"ipa": "v",
		"features": ["voiced", "labiodental", "fricative"]
	    },
	    "v\\ (or P)": {
		"xsampa": "v\\ (or P)",
		"ipa": "ʋ",
		"features": ["labiodental", "approximant"]
	    },
	    "w": {
		"xsampa": "w",
		"ipa": "w",
		"features": ["labial-velar", "approximant"]
	    },
	    "x": {
		"xsampa": "x",
		"ipa": "x",
		"features": ["voiceless", "velar", "fricative"]
	    },
	    "x\\": {
		"xsampa": "x\\",
		"ipa": "ɧ",
		"features": ["voiceless", "palatal-velar", "fricative"]
	    },
	    "y": {
		"xsampa": "y",
		"ipa": "y",
		"features": ["close", "front", "rounded", "vowel"]
	    },
	    "z": {
		"xsampa": "z",
		"ipa": "z",
		"features": ["voiced", "alveolar", "fricative"]
	    },
	    "z`": {
		"xsampa": "z`",
		"ipa": "ʐ",
		"features": ["voiced", "retroflex", "fricative"]
	    },
	    "z\\": {
		"xsampa": "z\\",
		"ipa": "ʑ",
		"features": ["voiced", "alveolo-palatal", "fricative"]
	    }
	};
  });

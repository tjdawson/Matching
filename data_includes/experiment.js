// we want to be able to send results before the end of the experiment
 var manualSendResults = true; 

//
// here we're gonna define the presentation order
var shuffleSequence = seq("intro1", //participant info
    "intro2", // instructions
    "video_test", // test ability to play our videos
    "video_1", // start presenting our videos
    "video_2","video_3","video_4","video_5","video_6","video_7","video_8","video_9","video_10","video_11","video_12","video_13","video_14","video_15","video_16",
    "sr", "end"
);

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Press any key to go to the next video.",
        errorMessage: "There was an error. Please contact the experimenter ASAP."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [
    ["sr", "__SendResults__", { }],
    ["sep", "Separator", { }],
    
    // intro/participant info
    
    ["intro1", "Form", {
        html: {include: "intro1.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        validators: {
            age: function (s) { if (s.match(/^[1-9][8-9]+$|^[2-9][0-9]+$/)) return true; else return "Bad value for \u2018age\u2019. You must be 18 or older to participate in MTurk studies."; }
        }
    }],
    
    // instructions
    
    ["intro2", "Form", {
        html: {include: "intro2.html"},
        hideProgressBar: true,
        countsForProgressBar: false
    
    }],

    // this tests the participants' ability to play our videos

    ["video_test", "Form", {
        html: {include: "video_test.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        validators: {
            video_test: function (s) { if (s.match(/^[3][4][0][1]$/)) return true; else return "Please enter the numbers from the video in the order you saw them presented."; }
        }

    }],
    // okay, now let's define controllers for each of the videos to be presented

    ["video1", "Form", {
        html: {include: "video1.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video2", "Form", {
        html: {include: "video2.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video3", "Form", {
        html: {include: "video3.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video4", "Form", {
        html: {include: "video4.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video5", "Form", {
        html: {include: "video5.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video6", "Form", {
        html: {include: "video6.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video7", "Form", {
        html: {include: "video7.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video8", "Form", {
        html: {include: "video8.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video9", "Form", {
        html: {include: "video9.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video10", "Form", {
        html: {include: "video10.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video11", "Form", {
        html: {include: "video11.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video12", "Form", {
        html: {include: "video12.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video13", "Form", {
        html: {include: "video13.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video14", "Form", {
        html: {include: "video14.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video15", "Form", {
        html: {include: "video15.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    ["video16", "Form", {
        html: {include: "video16.html"},
        validators: {description: function (s) {if (s.match(/[A-Za-z].*?[.!?]/).length == 1) return true; else return "Please enter only a single sentence. Please be sure to punctuate your sentence."; } } }],

    //

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null
    
    }]
];
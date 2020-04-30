function magicapp(info) {

  var age = info.age
  var rec = {
  "recommendationId" : 59519,
  "shortName" : "j9wRNn",
  "shortCode" : "j9wRNn",
  "guidelineId" : 4123,
  "sectionId" : 48049,
  "order" : 14,
  "strength" : "NO_STRENGTH",
  "status" : "NOTSET",
  "heading" : "Hypnotherapy&nbsp;",
  "trackHeading" : "Hypnotherapy&nbsp;",
  "text" : "For adults with PTSD there was insufficient evidence to make a recommendation on hypnotherapy.",
  "trackText" : "For adults with PTSD there was insufficient evidence to make a recommendation on hypnotherapy.",
  "remarks" : "Hypnotherapy uses hypnosis to induce an altered state of consciousness before undertaking therapeutic work.",
  "trackRemarks" : "Hypnotherapy uses hypnosis to induce an altered state of consciousness before undertaking therapeutic work.",
  "advice" : "",
  "trackAdvice" : "",
  "rational" : "",
  "trackRational" : "",
  "adaptation" : "",
  "trackAdaptation" : "",
  "hasData" : {
    "emrCodes" : false,
    "evidence" : true,
    "references" : true,
    "keyInfo" : false,
    "rational" : false,
    "advice" : false,
    "adaptation" : false,
    "decisionAids" : false,
    "discussion" : false,
    "discussionCount" : 0,
    "discussionUnresolvedCount" : 0
  },
  "keyInfoType" : "SUMMARY",
  "links" : [ {
    "rel" : "self",
    "href" : "https://app.magicapp.org/api/v1/guidelines/4123/recommendations/j9wRNn"
  }, {
    "rel" : "keyInfo",
    "href" : "https://app.magicapp.org/api/v1/recommendations/59519/keyinfo"
  }, {
    "rel" : "picos",
    "href" : "https://app.magicapp.org/api/v1/sections/48049/recommendations/59519/picos"
  }, {
    "rel" : "picos",
    "href" : "https://app.magicapp.org/api/v1/references/selection?recommendationId=59519"
  }, {
    "rel" : "section",
    "href" : "https://app.magicapp.org/api/v1/guidelines/4123/sections/48049"
  }, {
    "rel" : "guideline",
    "href" : "https://app.magicapp.org/api/v1/guidelines/4123"
  }, {
    "rel" : "emr-codes",
    "href" : "https://app.magicapp.org/api/v1/sections/48049/recommendations/59519/emr-codes"
  } ]
}

  var op = {'success':'','errorMessage':'','result':''};

  var inputvalidated = true

  if (age < 18) {
    inputvalidated = false
    op['errorMessage'] = 'Not applicable for those under 18 years old'
  }

  if (inputvalidated) {
    op['result'] =  rec['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else {
    op['success'] = 0
  }

  return op;

}

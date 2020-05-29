function magicapp(info){

  var rec;

  var op = {'success':'','errorMessage':'','result':''};

  if (info.hist_preterm && info.short_cervix == false) {
    op['result'] = rec[0]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else if (info.hist_preterm == false && info.short_cervix) {
    op['result'] = rec[1]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  // might not need this case?
  else if (info.hist_preterm && info.short_cervix) {
    op['result'] = rec[0]['text'] + rec[1]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else {
    op['success'] = 0
    op['errorMessage'] = 'No recommendations; No history of preterm birth, nor does the patient have a short cervix';
  }

  return op;

}

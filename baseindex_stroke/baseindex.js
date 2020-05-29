function magicapp(info){

  var rec;

  var op = {'success':'','errorMessage':'','result':''};

  if (info.reperfusion_eligible) {
    op['result'] = rec[0]['text'] + '\n' + rec[1]['text'] + '\n' + rec[2]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else if (info.reperfusion_eligible == false) {
    op['result'] = rec[1]['text'] + '\n' + rec[2]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else {
    op['success'] = 0
  }

  return op;

}

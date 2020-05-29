function magicapp(info){

  var rec;

  var op = {'success':'','errorMessage':'','result':''};

  if (info.urinary_stones_confirmed == false) {
    op['result'] = rec[0]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else if (info.urinary_stones_confirmed) {
    op['result'] = rec[1]['text'];
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else {
    op['success'] = 0
  }

  return op;

}

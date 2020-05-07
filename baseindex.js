function magicapp(info){

  var age = info.age
  var rec;

  var op = {'success':'','errorMessage':'','result':''};

  var inputvalidated = true

  if (age < 18) {
    inputvalidated = false
    op['errorMessage'] = 'Not applicable for those under 18 years old'
  }

  if (inputvalidated) {
    op['result'] =  recommendation;
    op['success'] = 1;
    op['errorMessage'] = '-';
  }
  else {
    op['success'] = 0
  }

  return op;

}

function crackPop(x, y){
  for (var i = x;i <= y; i++)
  {
    if(i % 15 === 0)
      console.log('CracklePop');
    else if (i % 5 === 0)
      console.log('Pop');
    else if (i % 3 === 0)
      console.log('Crackle');
    else if (i === 0)
      console.log('Zero! ¯\_(ツ)_/¯')
    else
      console.log(i);
  }

}
  crackPop(1, 100);

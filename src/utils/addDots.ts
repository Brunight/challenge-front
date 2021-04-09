function addDots(string: string, limit: number) {
  var dots = '...';
  if(string.length > limit) {
    string = string.substring(0,limit) + dots;
  }
  return string;
}

export default addDots
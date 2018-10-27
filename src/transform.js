function groupAdultsByAgeRange(array) {
  
  const teens = []
  const twenties = []
  const thirties = []
  const fourties = []
  const elderly = []


  const onlyAdults = array.filter(person => person.age > 17)

 
  onlyAdults.reduce(function(acc, cur) {
    let res = cur.age;
    if (res <= 20) {
      teens.push(cur);
    } else if (res <= 30) {
      twenties.push(cur);
    } else if (res <= 40) {
      thirties.push(cur);
    } else if (res <= 50) {
      fourties.push(cur);
    } else if (res > 50) {
      elderly.push(cur);
    } else {
    return acc;
    }
  }, {})


  const final = {}

  if (teens.length > 0) {
    final['20 and younger'] = teens;
  }
  if (teens.length > 0) {
    final['21-30'] = twenties;
  }
  if (teens.length > 0) {
    final['31-40'] = thirties;
  }
  if (teens.length > 0) {
    final['41-50'] = fourties;
  }
  if (teens.length > 0) {
    final['51 and older'] = elderly;
  }

  return final

}



module.exports = { groupAdultsByAgeRange };
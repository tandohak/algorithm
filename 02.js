class InterestingParty {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  bestInvitation() {
    let count = 0;
    const mergedArr = this.first.concat(this.second);
    const set = new Set();

    mergedArr.forEach(value => {
      set.add(value);
    });

    console.log(set);
    set.forEach(value => {});
    return count;
  }
}

const interestingParty = new InterestingParty(
  ['snakes', 'programming', 'cobra', 'monty'],
  ['python', 'python', 'anaconda', 'python']
);

console.log(interestingParty.bestInvitation());

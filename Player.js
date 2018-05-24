class Player {
  playTurn(warrior) {
    // Cool code goes here.
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < 13) return warrior.rest()
      warrior.walk();
    } else {
      warrior.attack();
    }
  }
}
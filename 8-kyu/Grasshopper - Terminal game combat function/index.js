const combat = (health, damage) => (health - damage > 0 ? health - damage : 0);

combat(92, 8);
combat(100, 5);
combat(20, 30);

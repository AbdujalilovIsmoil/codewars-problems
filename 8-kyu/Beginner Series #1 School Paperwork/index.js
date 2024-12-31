const paperwork = (n, m) => (n <= 0 || m <= 0 ? 0 : n * m);

paperwork(5, 5);
paperwork(5, 0);
paperwork(5, -5);
paperwork(-5, 5);
paperwork(-5, -5);
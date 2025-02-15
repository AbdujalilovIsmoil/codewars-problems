const greet = (name) => (name ? `hello ${name}!` : null);

greet(null); // null
greet("Niks"); // hello Niks!
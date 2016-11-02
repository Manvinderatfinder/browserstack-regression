var specs = [
  './regression-suite/*.js'
  
];

for (var i = specs.length - 1; i >= 0; i--) {
  require(specs[i]);
};

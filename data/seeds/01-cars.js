// STRETCH
exports.seed = function (knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
            { vin: 112233, make: "Audi", model: "R8", mileage: 5000, transmission: "manual"},
            { vin: 112343, make: "Porsche", model: "911 Turbo S", mileage: 0},
            { vin: 134533, make: "Mercedes-Benz", model: "AMG G63", mileage: 12000, transmission: "automatic"},
            { vin: 156783, make: "Subaru", model: "Outback XT", mileage: 50000, transmission: "manual"},
            { vin: 167993, make: "BMW", model: "M5", mileage: 26000, transmission: "manual"},
            {vin: 'zzzzzzzzzzzzz',make: 'toyota',model: 'prius',mileage: 1316000,title: 'wendy',transmission: 'manual'},
            {vin: 'yyyyyyyyyyyyy',make: 'Audi',model: 'R8',mileage: 6000,transmission: 'manual'},
            {vin: 'xxxxxxxxxxxxx',make: 'Porsche',model: 'Turbo',mileage: 1000,title: 'wendy',transmission: 'automatic'},
            {vin: 'ooooooooooooo',make: 'Subaru',model: 'Outback XT',mileage: 13000},
            {vin: 'ppppppppppppp',make: 'BMW',model: 'M5',mileage: 16000,title: 'wendy',transmission: 'automatic'},
        ]);
      });
  };
  
// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
// Los ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
// y en función de su respuesta le muestre un menú con los ingredientes disponibles
// para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
// tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
// pizza elegida es vegetariana o no y todos los ingredientes que lleva.

function ejercicio10() {
  let tipo_pizza = prompt("Ingresa el tipo de pizza que deseas (Escribe vegetariana o normal)")
  let ingredientes;

  if (tipo_pizza.charAt(0) == "v" || tipo_pizza.charAt(0) == "V") {
    ingredientes = prompt("Ingresa que te gustaria que lleve tu pizza (pimiento o tofu)");
    alert(`Tu pizza es ${tipo_pizza} y lleva ${ingredientes} con tomate`);
  }
  else if(tipo_pizza.charAt(0) == "n" || tipo_pizza.charAt(0) == "N") {
    ingredientes = prompt("Ingresa que te gustaria que lleve tu pizza (jamon o salmon)");
    alert(`Tu pizza es ${tipo_pizza} y lleva ${ingredientes} con tomate`);
  }
}

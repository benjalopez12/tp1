let edades = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
for (let i = 0; i < 5; i++) {
    edades.push(edades.shift());
}
for (let i = 0; i < 5; i++) {
    edades.pop();
}
console.log("Arreglo de edades después de eliminar las primeras cinco:");
console.log(edades);
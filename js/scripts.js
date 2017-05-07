var a = 5,
    h = 7;
 
function getTriangleArea(a, h) {
                if (a <= 0 || h <= 0) {
      console.log('Nieprawidłowe dane');
    } else {
      return a*h/2;
    }
}
 
console.log(getTriangleArea(10,6));
 
var triangleArea1 = getTriangleArea(4, 3);
var triangleArea2 = getTriangleArea(0, 3);
var triangleArea3 = getTriangleArea(4, 9);
 
console.log(triangleArea1, triangleArea2, triangleArea3);
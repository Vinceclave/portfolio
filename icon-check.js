// A small script to check available icons
const si = require('react-icons/si');

console.log("Available icons for C#:");
console.log(Object.keys(si).filter(name => name.toLowerCase().includes('csharp') || name.toLowerCase().includes('dotnet')));
console.log("\nAll available MS SQL related icons:");
console.log(Object.keys(si).filter(name => name.toLowerCase().includes('sql')));

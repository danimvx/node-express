const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

// export default sayHi; // ES2015 Modules
module.exports = sayHi;
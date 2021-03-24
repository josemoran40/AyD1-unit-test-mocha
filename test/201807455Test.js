const assert = require('chai').assert;
const app = require('../201807455');

const comosesiente = app.comosesiente('que si quiero comerte?')
const saleAnalisis = app.saleAnalisis('no')
const factorial = app.factorial(3)
const suma = app.suma(3, 2)
const ifAnidados = app.ifAnidados('Clase analisis')


describe('201807455', function () {
    describe('comosesiente()', function () {
        it('comosesiente should be equal 5', function () {
            assert.equal(comosesiente, 'obvio');
        });

        it('comosesiente should return type string', function () {
            assert.typeOf(comosesiente, 'string');
        });
    });
    describe('saleAnalisis()', function () {
        it('saleAnalisis should be equal 5', function () {
            assert.equal(saleAnalisis, 'tiene que salir');
        });

        it('saleAnalisis should return type string', function () {
            assert.typeOf(saleAnalisis, 'string');
        });
    });

    describe('factorial()', function () {
        it('factorial should be equal 6', function () {
            assert.equal(factorial, 6);
        });

        it('factorial should return type number', function () {
            assert.typeOf(factorial, 'number');
        });
    });

    describe('suma()', function () {
        it('suma should be equal 5', function () {
            assert.equal(suma, 5);
        });

        it('suma should return type number', function () {
            assert.typeOf(suma, 'number');
        });
    });

    describe('ifAnidados()', function () {
        it('ifAnidados should be equal Muy temprano', function () {
            assert.equal(ifAnidados, 'Muy temprano');
        });

        it('ifAnidados should return type string', function () {
            assert.typeOf(ifAnidados, 'string');
        });
    });
});

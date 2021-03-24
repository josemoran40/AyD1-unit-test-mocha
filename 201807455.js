module.exports = {


    factorial: function (n) {
        let i = 1
        for (let iterator = 1; iterator <= n; iterator++) {
            i = i * iterator
        }
        return i
    },

    comosesiente: function (message) {
        if (message == 'que si quiero comerte?') {
            return 'obvio'
        }
        return 'ñao'
    },


    saleAnalisis: function (answer) {
        if (answer == 'si') {
            return 'siuuuu'
        }
        return 'tiene que salir'
    },

    suma: function (n, m) {
        return n + m
    },

    ifAnidados(mes) {
        if (mes == 'Lab Analisis') {
            return 'Nitido'
        } else if (mes == 'Pruebas Unitarias') {
            return 'Si salen'
        } else if (mes == 'Clase analisis') {
            return 'Muy temprano'
        }
    }
}
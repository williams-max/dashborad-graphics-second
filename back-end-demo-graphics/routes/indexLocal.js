const express = require("express");
const router = express.Router();
const fs = require('fs');
const axios = require('axios')


'use strict';

var token_value = "";

function routes(app) {

    router.get('/', async (req, res) => {


        res.send("work!!!");
    });

    (function loopToken() {
        setTimeout(() => {
            // Your logic here
            //console.log("delete token after 24 hours", token_value)
            console.log("token value", token_value)
            if (!token_value) {
                generateToekn();
            }

            loopToken();
        }, 1000);
    })();


    (function loop() {
        setTimeout(() => {
            // Your logic here
            console.log("delete token after 24 hours", token_value)
            token_value = "";
            loop();
        }, 60000 * 24);
    })();

    async function generateToekn() {
        const result = await axios.post(`https://gestionaleideale.cloud/rest/api/v1/auth`, {
            "client": "dashboard.gestionaleideale",
            "user": "demo-dashboard",
            "api_key": "ff90790787f8572cc1933ac6b5789fdea8411a34ba189e9734f934f7f7a509b7"
        })
        //var token = result.data.token;
        token_value = result.data.token;
        console.log("token generado", token_value)
    }
    router.get('/get-testtoken', async (req, res) => {


        console.log("valor por defecto del token ", token_value)

        try {

            if (!token_value) {
                console.log("token no tiene valor")

                // linea comentada para no generar el token en cada peticions

                const result = await axios.post(`https://gestionaleideale.cloud/rest/api/v1/auth`, {
                    "client": "dashboard.gestionaleideale",
                    "user": "demo-dashboard",
                    "api_key": "ff90790787f8572cc1933ac6b5789fdea8411a34ba189e9734f934f7f7a509b7"
                })
                //var token = result.data.token;
                token_value = result.data.token;
                //console.log("valor  del token", token_value)
            } else {
                // console.log("no hice la peticon,ya existe el valor  del token", token_value)
            }
            res.send("okk");
        } catch (error) {

            console.log(error)

            res.send("error");
        }

    });

    router.get('/get-product', async (req, res) => {
        try {

            if (!token_value) {

                // linea comentada para no generar el token en cada peticions
                const result = await axios.post(`https://gestionaleideale.cloud/rest/api/v1/auth`, {
                    "client": "dashboard.gestionaleideale",
                    "user": "demo-dashboard",
                    "api_key": "ff90790787f8572cc1933ac6b5789fdea8411a34ba189e9734f934f7f7a509b7"
                })
                token_value = result.data.token;
                console.log("valor  del token", token_value)
                //  var token = 'a2f62905aa177edfc2e002fbf7a9f9e385899ec522cee3e0630a81a51ef5cf4b';
                const resProd = await axios.get(`https://gestionaleideale.cloud/rest/api/v1/demo-easydashboard/products`,
                    {
                        headers: {
                            'Authorization': `token: ${token_value}`
                        }
                    }

                )
                res.send(resProd.data);
            } else {
                //en caso de que ya exista el token
                console.log("ya existe el valor  del token", token_value)
                const resProd = await axios.get(`https://gestionaleideale.cloud/rest/api/v1/demo-easydashboard/products`,
                    {
                        headers: {
                            'Authorization': `token: ${token_value}`
                        }
                    }

                )
                res.send(resProd.data);
            }

        } catch (error) {

            console.log(error)

            res.send("error");
        }



    });


    router.get('/get-docs', async (req, res) => {
        try {

            if (!token_value) {
                // linea comentada para no generar el token en cada peticions
                const result = await axios.post(`https://gestionaleideale.cloud/rest/api/v1/auth`, {
                    "client": "dashboard.gestionaleideale",
                    "user": "demo-dashboard",
                    "api_key": "ff90790787f8572cc1933ac6b5789fdea8411a34ba189e9734f934f7f7a509b7"
                })
                token_value = result.data.token;
                console.log("valor  del token", token_value)
                const array = await getDocsSales();
                //   console.log("arra", array)
                res.send(array);
            } else {
                console.log("ya existe el valor  del token", token_value)
                const array = await getDocsSales();
                res.send(array);
            }


        } catch (error) {

            console.log(error)

            res.send("error");
        }
        /*s */
    });

    router.get('/get-docs-trimester', async (req, res) => {
        try {

            if (!token_value) {
                // linea comentada para no generar el token en cada peticions
                const result = await axios.post(`https://gestionaleideale.cloud/rest/api/v1/auth`, {
                    "client": "dashboard.gestionaleideale",
                    "user": "demo-dashboard",
                    "api_key": "ff90790787f8572cc1933ac6b5789fdea8411a34ba189e9734f934f7f7a509b7"
                })
                token_value = result.data.token;
                console.log("valor  del token", token_value)
                const array = await getDocsSalesTrimestres();
                //   console.log("arra", array)
                res.send(array);
            } else {
                console.log("ya existe el valor  del token", token_value)
                const array = await getDocsSalesTrimestres();
                res.send(array);
            }


        } catch (error) {

            console.log(error)

            res.send("error");
        }

    });

    const getDocsSales = async () => {


        // var token = 'a2f62905aa177edfc2e002fbf7a9f9e385899ec522cee3e0630a81a51ef5cf4b';
        const resDocs = await axios.get(`https://gestionaleideale.cloud/rest/api/v1/demo-easydashboard/docs`,
            {
                headers: {
                    'Authorization': `token: ${token_value}`
                }
            }

        )

        //objetivo lo que la api devuelva un array de pares X  , Y

        var arrayDocs = resDocs.data.docs;

        const arrP = [];
        for (var i = 0; i < arrayDocs.length; i++) {
            var par = {
                x: Number(arrayDocs[i].document_date.substring(5, 7)),
                total: arrayDocs[i].total,
                month: Number(arrayDocs[i].document_date.substring(5, 7)),
                date: new Date(arrayDocs[i].document_date)
            }

            arrP.push(par)
        }
        //ordenar par por fechas
        arrP.sort(function (a, b) {
            return (a.date - b.date)
        })

        //promedio //averge
        var averageJanuary = 0; //1
        var averageFebruary = 0; //2
        var averageMarch = 0; //3
        var averageApril = 0;//4
        var averageMay = 0;//5
        var averageJune = 0;//6
        var averageJuly = 0;//7
        var averageAugust = 0;//8
        var averageSeptember = 0;//9
        var averageOctober = 0;//10
        var averageNovember = 0;//11
        var averageDecember = 0;//12

        var contJanuary = 0; //1
        var contFebruary = 0; //2
        var contMarch = 0; //3
        var contApril = 0;//4
        var contMay = 0;//5
        var contJune = 0;//6
        var contJuly = 0;//7
        var contAugust = 0;//8
        var contSeptember = 0;//9
        var contOctober = 0;//10
        var contNovember = 0;//11
        var contDecember = 0;//12

        //siguente objetivo sacar un promedio de por mes de los datos
        for (var i = 0; i < arrP.length; i++) {
            switch (arrP[i].month) {
                case 1:
                    averageJanuary = averageJanuary + Number(arrP[i].total)
                    contJanuary = contJanuary + 1;
                    break;
                case 2:
                    averageFebruary = averageFebruary + Number(arrP[i].total)
                    contFebruary = contFebruary + 1;
                    break;
                case 3:
                    averageMarch = averageMarch + Number(arrP[i].total)
                    contMarch = contMarch + 1;
                    break;
                case 4:
                    averageApril = averageApril + Number(arrP[i].total)
                    contApril = contApril + 1;
                    break;
                case 5:
                    averageMay = averageMay + Number(arrP[i].total)
                    contMay = contMay + 1;
                    break;
                case 6:
                    averageJune = averageJune + Number(arrP[i].total)
                    contJune = contJune + 1;
                    break;
                case 7:
                    averageJuly = averageJuly + Number(arrP[i].total)
                    contJuly = contJuly + 1;
                    break;
                case 8:
                    averageAugust = averageAugust + Number(arrP[i].total)
                    contAugust = contAugust + 1;
                    break;
                case 9:
                    averageSeptember = averageSeptember + Number(arrP[i].total)
                    contSeptember = contSeptember + 1;
                    break;
                case 10:
                    averageOctober = averageOctober + Number(arrP[i].total)
                    contOctober = contOctober + 1;
                    break;
                case 11:
                    averageNovember = averageNovember + Number(arrP[i].total)
                    contNovember = contNovember + 1;
                    break;
                case 12:
                    averageDecember = averageDecember + Number(arrP[i].total)
                    contDecember = contDecember + 1;
                    break;
                default:

                    break;
            }

        }
        //calcular el promedio

        var newPares = [
            { x: "January", y: averageJanuary / contJanuary }, //2
            { x: "February", y: averageFebruary / contFebruary }, //2
            { x: "March", y: averageMarch / contMarch }, //3
            { x: "April", y: averageApril / contApril },//4
            { x: "May", y: averageMay / contMay },//5
            { x: "June", y: averageJune / contJune },//6
            { x: "July", y: averageJuly / contJuly },//7
            { x: "August", y: averageAugust / contAugust },//8
            { x: "September", y: averageSeptember / contSeptember },//9
            { x: "October", y: averageOctober / contOctober },//10
            { x: "November", y: averageNovember / contNovember },//11
            { x: "December", y: averageDecember / contDecember },//12

        ]



        const object_data = [{
            id: `sales/month`,
            color: '#C800C8',
            data: newPares
        }
        ]
        //  console.log("object data api express",object_data)

        return object_data;
    }

    const getDocsSalesTrimestres = async () => {


        // var token = 'a2f62905aa177edfc2e002fbf7a9f9e385899ec522cee3e0630a81a51ef5cf4b';
        const resDocs = await axios.get(`https://gestionaleideale.cloud/rest/api/v1/demo-easydashboard/docs`,
            {
                headers: {
                    'Authorization': `token: ${token_value}`
                }
            }

        )

        //objetivo lo que la api devuelva un array de pares X  , Y

        var arrayDocs = resDocs.data.docs;

        const arrP = [];
        for (var i = 0; i < arrayDocs.length; i++) {
            var par = {
                x: Number(arrayDocs[i].document_date.substring(5, 7)),
                total: arrayDocs[i].total,
                month: Number(arrayDocs[i].document_date.substring(5, 7)),
                date: new Date(arrayDocs[i].document_date)
            }

            arrP.push(par)
        }
        //ordenar par por fechas
        arrP.sort(function (a, b) {
            return (a.date - b.date)
        })

        //promedio //averge
        var averageJanuary = 0; //1
        var averageFebruary = 0; //2
        var averageMarch = 0; //3
        var averageApril = 0;//4
        var averageMay = 0;//5
        var averageJune = 0;//6
        var averageJuly = 0;//7
        var averageAugust = 0;//8
        var averageSeptember = 0;//9
        var averageOctober = 0;//10
        var averageNovember = 0;//11
        var averageDecember = 0;//12

        var contJanuary = 0; //1
        var contFebruary = 0; //2
        var contMarch = 0; //3
        var contApril = 0;//4
        var contMay = 0;//5
        var contJune = 0;//6
        var contJuly = 0;//7
        var contAugust = 0;//8
        var contSeptember = 0;//9
        var contOctober = 0;//10
        var contNovember = 0;//11
        var contDecember = 0;//12

        //siguente objetivo sacar un promedio de por mes de los datos
        for (var i = 0; i < arrP.length; i++) {
            switch (arrP[i].month) {
                case 1:
                    averageJanuary = averageJanuary + Number(arrP[i].total)
                    contJanuary = contJanuary + 1;
                    break;
                case 2:
                    averageFebruary = averageFebruary + Number(arrP[i].total)
                    contFebruary = contFebruary + 1;
                    break;
                case 3:
                    averageMarch = averageMarch + Number(arrP[i].total)
                    contMarch = contMarch + 1;
                    break;
                case 4:
                    averageApril = averageApril + Number(arrP[i].total)
                    contApril = contApril + 1;
                    break;
                case 5:
                    averageMay = averageMay + Number(arrP[i].total)
                    contMay = contMay + 1;
                    break;
                case 6:
                    averageJune = averageJune + Number(arrP[i].total)
                    contJune = contJune + 1;
                    break;
                case 7:
                    averageJuly = averageJuly + Number(arrP[i].total)
                    contJuly = contJuly + 1;
                    break;
                case 8:
                    averageAugust = averageAugust + Number(arrP[i].total)
                    contAugust = contAugust + 1;
                    break;
                case 9:
                    averageSeptember = averageSeptember + Number(arrP[i].total)
                    contSeptember = contSeptember + 1;
                    break;
                case 10:
                    averageOctober = averageOctober + Number(arrP[i].total)
                    contOctober = contOctober + 1;
                    break;
                case 11:
                    averageNovember = averageNovember + Number(arrP[i].total)
                    contNovember = contNovember + 1;
                    break;
                case 12:
                    averageDecember = averageDecember + Number(arrP[i].total)
                    contDecember = contDecember + 1;
                    break;
                default:

                    break;
            }

        }
        //calcular el promedio
        //año de 1 tiene 4 trimestre de 3 mese cada
        var newPares = [
            { x: "January", y: averageJanuary / contJanuary }, //2
            { x: "February", y: averageFebruary / contFebruary }, //2
            { x: "March", y: averageMarch / contMarch }, //3
            { x: "April", y: averageApril / contApril },//4
            { x: "May", y: averageMay / contMay },//5
            { x: "June", y: averageJune / contJune },//6
            { x: "July", y: averageJuly / contJuly },//7
            { x: "August", y: averageAugust / contAugust },//8
            { x: "September", y: averageSeptember / contSeptember },//9
            { x: "October", y: averageOctober / contOctober },//10
            { x: "November", y: averageNovember / contNovember },//11
            { x: "December", y: averageDecember / contDecember },//12

        ]

        var newParesTrimester = [
            { x: "1 trimester", y: (averageJanuary / contJanuary) + (averageFebruary / contFebruary) + (averageMarch / contMarch) }, //2

            { x: "2 trimester", y: (averageApril / contApril) + (averageMay / contMay) + (averageJune / contJune) },//5

            { x: "3 trimester", y: (averageJuly / contJuly) + (averageAugust / contAugust) + (averageSeptember / contSeptember) },//8

            { x: "4 trimester", y: (averageOctober / contOctober) + (averageNovember / contNovember) + (averageDecember / contDecember) },//10


        ]




        const object_data = [{
            id: `sales/quarters`,
            color: '#C800C8',
            data: newParesTrimester
        }
        ]
        //  console.log("object data api express",object_data)

        return object_data;
    }

    return router;
};

module.exports = routes;

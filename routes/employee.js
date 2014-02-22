
//GET employees listing

exports.list = function(req, res) {

    var employees = [
        {
            "id": 0,
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "name": "Ward Myers",
            "gender": "male",
            "company": "Assistia",
            "email": "wardmyers@assistia.com",
            "phone": "+1 (980) 586-2145"
        },
        {
            "id": 1,
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "name": "Valeria Barry",
            "gender": "female",
            "company": "Rooforia",
            "email": "valeriabarry@rooforia.com",
            "phone": "+1 (862) 593-2537"
        },
        {
            "id": 2,
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "name": "Yates Contreras",
            "gender": "male",
            "company": "Rotodyne",
            "email": "yatescontreras@rotodyne.com",
            "phone": "+1 (848) 416-3513"
        },
        {
            "id": 3,
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "name": "Lula Franklin",
            "gender": "female",
            "company": "Isoplex",
            "email": "lulafranklin@isoplex.com",
            "phone": "+1 (863) 518-2884"
        },
        {
            "id": 4,
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "name": "Brianna Riddle",
            "gender": "female",
            "company": "Apextri",
            "email": "briannariddle@apextri.com",
            "phone": "+1 (868) 537-3320"
        }
    ];

    res.json(employees);
};

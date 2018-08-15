"use strict";

var students = [{
        id: 2009301290,
        name: 'Ixshel',
        lastName: 'Escamilla',
        age: 31,
        photo: 'https://image.flaticon.com/icons/svg/145/145859.svg',
        group: '9CV1'
    },
    {
        id: 2009301291,
        name: 'Julieta',
        lastName: 'Escamilla',
        age: 31,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '8CV1'
    },
    {
        id: 2009301292,
        name: 'Patrick',
        lastName: 'Fortunato',
        age: 31,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '7CV1'
    },
    {
        id: 2009301293,
        name: 'Nick',
        lastName: 'Twong',
        age: 31,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '6CV1'
    },
    {
        id: 2012300309,
        name: 'J.Antonio',
        lastName: 'Camacho',
        age: 25,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '9CV11'
    },
    {
        id: 2009301294,
        name: 'Jr',
        lastName: 'Fortunato',
        age: 31,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '5CV1'
    },
    {
        id: 2012300171,
        name: 'Héctor',
        lastName: 'Ávila',
        age: 25,
        photo: 'https://image.flaticon.com/icons/svg/64/64096.svg',
        group: '9cv3'
    }
];

// var url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
// .then(data => { return data.json() })
// .then(res => {
//     console.log('res', res)
// });

var getStudentInfo = () => {

    var identifier = document.getElementById('idNumber').value;
    var studentSpan = document.getElementById('studentSpan');
    var studentGroup = document.getElementById('group');
    var lastName = document.getElementById('lastName');
    var studentPhoto = document.getElementById('studentPhoto');

    if (identifier) {
        console.log('has data');
        // we are going to search the element into our students array
        students.find(o => {
            // o brings each one of the elements of the array
            // we only need to find the one that meets our case
            // console.log('elements => ', o);

            if (o.id === Number(identifier)) {
                studentSpan.innerHTML = o.name;
                studentGroup.innerHTML = o.group;
                lastName.innerHTML = o.lastName;
                studentPhoto.src = o.photo;
            }

        });
    }

};
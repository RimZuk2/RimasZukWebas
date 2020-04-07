window.addEventListener('load', function() {
    //1
    let firstName = 'Rimas';
    let lastName = 'Zukauskas'
    let kursas = 4;
    let mokykla = 'kcs';
    let marks = [7, 8, 9];
    //2
    console.log(firstName, lastName, kursas, mokykla, marks);
    //3
    console.log('Vardas:', typeof firstName, 'Pavarde:', typeof lastName, 'Kursas:', typeof kursas, 'Mokykla:', typeof mokykla,'marks:',typeof marks);
    //4
    let person = {
        firstName: firstName,
        lastname: lastName,
        kursas: kursas,
        mokykla: mokykla,
        marks: marks
    }
    console.log(person);
    //6
    console.log(person.marks)
    //8
    let pazymiai = person.marks;
    console.log(pazymiai)
    //10 Suma
    for (var i = 0, sum = 0; i < pazymiai.length; sum += pazymiai[i++]);
    console.log(sum)
    //11 2sk sandauga
    console.log('Sandauga:' + pazymiai[0]*pazymiai[2]);



    //console.log(document.getElementById('demo').innerHTML);

});


;
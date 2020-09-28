const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const verifyKeyValue = (obj, key, value) => {
   let keyValueEntry = Object.entries(obj);
   let control = false;
   for (index in keyValueEntry){
       if (keyValueEntry[index][0] === key && keyValueEntry[index][1] === value){
           control = true;
       }
   }
   console.log(control);
}

verifyKeyValue(lesson1, 'numeroEstudantes', 20);
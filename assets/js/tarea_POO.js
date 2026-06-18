class Alumno {
  constructor(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera; // faltaba asignar carrera
  }

  mostrarInfo() {
    // bug: usaba comillas normales, los backticks + ${} son los que leen variables
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
  }
}

class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre;
    this.genero = genero;
    this.integrantes = integrantes;
    this.discos = discos;
  }

  mostrarInfo() {
    console.log(`Banda: ${this.nombre} | Género: ${this.genero} | Integrantes: ${this.integrantes}`);
  }

  listarDiscos() {
    console.log("Discos publicados:");
    // forEach recorre el array y muestra cada disco
    this.discos.forEach(disco => {
      console.log(disco);
    });
  }
}

const miBandaFavorita = new BandaMusical("Soda Stereo", "Rock", 3, ["Signos", "Dynamo", "Sueño Stereo"]);

class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad} años`);
  }

  ladrar() {
    // bug: decía "nombre" como texto, no usaba la variable
    console.log(`¡Guau guau! Soy ${this.nombre}`);
  }
}

const perroFamoso = new Perro("Lipigas", "Mestizo", 10);

class Festival {
  constructor(nombre, metaAlimentoKg) {
    this.nombre = nombre;
    this.metaAlimentoKg = metaAlimentoKg;
    this.bandasInvitadas = [];
    this.asistentes = [];
    this.alimentoRecolectado = 0;
  }

  invitarBanda(banda) {
    this.bandasInvitadas.push(banda); // agrega la banda al array
  }

  registrarAsistente(alumno) {
    this.asistentes.push(alumno);
    this.alimentoRecolectado += 2; // bug: era = 2, con += suma 2 por cada alumno
  }

  verificarMeta() {
    console.log(`--- Balance del ${this.nombre} ---`);
    console.log(`Total recolectado: ${this.alimentoRecolectado}kg de una meta de ${this.metaAlimentoKg}kg.`);
    // if/else estaba pegado fuera del método, lo metí adentro
    if (this.alimentoRecolectado >= this.metaAlimentoKg) {
      console.log("Tarea listaaa");
    } else {
      console.log(`Faltaron ${this.metaAlimentoKg - this.alimentoRecolectado}kg para la meta.`);
    }
  }
}

const alumno1 = new Alumno("Bernardo", 25, "Contador");
const alumno2 = new Alumno("Marjorie", 33, "Psicología");
const miBanda = new BandaMusical("Los Prisioneros", "Rock", 3, ["La voz de los '80", "Pateando piedras"]);

const festivalCanino = new Festival("DogRock 2026", 4);

festivalCanino.invitarBanda(miBanda);
festivalCanino.registrarAsistente(alumno1);
festivalCanino.registrarAsistente(alumno2);
festivalCanino.verificarMeta();
// Alumno
alumno1.mostrarInfo();

// Banda favorita
miBandaFavorita.mostrarInfo();
miBandaFavorita.listarDiscos();

// Perro
perroFamoso.mostrarInfo();
perroFamoso.ladrar();
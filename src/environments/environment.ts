// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const fullObject = {
  cursos: [
    {
      id: 1,
      name: 'Análise e Desenvolvimento de sistemas',
      semestres: 4,
      disciplinas: [
        {
          id: 1,
          nome: 'POO',
          professor: 'Aurélio',
          semestre: 1,
          alunos: [
            {
              id: 1,
              nome: 'Hugo',
            },
            {
              id: 2,
              nome: 'Joãozinho',
            },
          ]
        },
        {
          id: 2,
          nome: 'Sistemas de Informação',
          professor: 'Neto',
          semestre: 2,
          alunos: [
            {
              id: 1,
              nome: 'Hugo',
            },
            {
              id: 2,
              nome: 'Joãozinho',
            },
          ]
        },
      ]
    },
    {
      id: 2,
      name: 'Direito',
      semestres: 10,
      disciplinas: [
        {
          id: 3,
          nome: 'Direito Criminal',
          professor: 'Carlos',
          semestre: 1,
          alunos: [
            {
              id: 50,
              nome: 'Zeca',
            },
          ]
        },
      ]
    },
  ],
  disciplinas: [
    {
      id: 1,
      nome: 'Programação Orientada a Objetos',
      cargaHoraria: 12,
      professor: 'Marco Antonio',
    },
    {
      id: 2,
      nome: 'Sistemas Operacionais',
      cargaHoraria: 12,
      professor: 'Marco Antonio',
    },
  ],
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

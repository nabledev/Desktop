import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProdctStore = defineStore('annonces', () => {
  const theStudents = ref([
    {
      "IdAnnonce":1,
      "IdAdresse":1,
      "IdTypeLogement":1,
      "IdProfi":1,
      "TitreAnnonce":"#L'annonce de fou",
      "DureeMinimumSejour":3,
      "Active":true,
      "DatePublication":"21-05-2024",
      "DescriptionAnnonce":"la description qui decrit",
      "Etoiles":5,
      "NbPersonnesMax":4,
      "PrixParNuit":360,
      "NbChambres":"4",
      "Ville":"Annecy"
    },
    {
        "IdAnnonce":2,
        "IdAdresse":1,
        "IdTypeLogement":1,
        "IdProfi":1,
        "TitreAnnonce":"Quel appartement olalala",
        "DureeMinimumSejour":3,
        "Active":true,
        "DatePublication":"21-05-2024",
        "DescriptionAnnonce":"la description qui decrit",
        "Etoiles":5,
        "NbPersonnesMax":4,
        "PrixParNuit":360,
        "NbChambres":"4",
        "Ville":"Marseille"
    },
    {
        "IdAnnonce":3,
        "IdAdresse":1,
        "IdTypeLogement":1,
        "IdProfi":1,
        "TitreAnnonce":"je veux cette maison",
        "DureeMinimumSejour":3,
        "Active":true,
        "DatePublication":"21-05-2024",
        "DescriptionAnnonce":"la description qui decrit",
        "Etoiles":5,
        "NbPersonnesMax":4,
        "PrixParNuit":360,
        "NbChambres":"4",
        "Ville":"Paris"
    }
  ])

  return { theStudents}
})

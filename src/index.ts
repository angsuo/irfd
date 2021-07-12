//      Typeorm imports
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Horaire } from "./entity/Horaire";
import { Resto } from "./entity/Resto";

(async () => {
  // Connect to DB and get connection object
  const connection = await createConnection();

  // Instantiate the restoRepo
  const restoRepo = connection.getRepository(Resto);

  // get the first Resto row
  const resto = await restoRepo.findOne({relations:['horaires']}).catch(e=>console.log(e));

  // // link horaires to resto
  // if (resto && horaires) {
  //   console.log("Linking...")
  //   horaires.resto = resto;
  //   const newHoraires = await horairesRepo.save(horaires);
  //   console.log("New horaires", newHoraires)
  //   resto.horaires = [horaires];
  //   const newResto = await restoRepo.save(resto);
  //   console.log("New resto:", newResto);
  // }
  console.log("Resto:", resto)
})();

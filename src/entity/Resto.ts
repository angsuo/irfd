import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Horaire } from "./Horaire";

@Entity({name:"restos"})
export class Resto {
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    address:string;

    @OneToMany(() => Horaire, horaire => horaire.resto)
    horaires:Horaire[];
}
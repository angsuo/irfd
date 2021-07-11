import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Resto } from "./Resto";

@Entity({name:"horaires"})
export class Horaire {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    start_hour:string;

    @Column()
    end_hour:string;

    @Column()
    days_applied:string;

    @ManyToOne(() => Resto, resto => resto.horaires)
    resto:Resto;
}
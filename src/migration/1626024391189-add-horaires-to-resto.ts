import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addHorairesToResto1626024391189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("restos", new TableForeignKey({
            columnNames:['horaires'],
            referencedTableName:'horaires',
            referencedColumnNames:['id']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("restos", "horaires");
    }

}

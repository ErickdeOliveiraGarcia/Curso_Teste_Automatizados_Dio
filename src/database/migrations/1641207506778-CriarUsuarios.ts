import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarUsuarios1641207506778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns:[
                    {
                        name:'id',
                        type:'string',
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'string',
                        isNullable:false
                    },
                    {
                        name: 'email',
                        type:'string',
                        isNullable:false
                    }    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}

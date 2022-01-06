import {CreateUserController} from './CreateUserController';
import  createConnection  from '../database';
import {Request} from 'express'
import {makeMockResponse} from '../utils/mocks/MockResponse';

describe('CreateUserControoler', ()=>{

    it('Deve retornar o id do usuário criado', async()=>{
        const connection = await createConnection()
        connection.runMigrations()
        const createUserController = new CreateUserController();

        //const request = makeMockRequest({})

        const request = {
            body: {
                nome:'Algum usuario',
                email:'email@email.com'
            }
        }as Request

        const response = makeMockResponse()

        const result = await  createUserController.handle(request, response)

        console.log(result)
    })

})

/*
describe('CreateUserController',()=>{


    function soma(a, b){
        return a + b
    }

    const result = soma(1, 2)

    it('Deve retornar a soma de dois números', () => {
        expect(result).toBe(3)
    })
    it('Não deve retornar um resultado diferente de 3', () => {
        expect(result).not.toBe(5)
    })
})
*/
import knexLib from 'knex'

class ClienteSqlChat{
    constructor(config){
        this.knex = knexLib(config)
    }
    async createTable(){
        try {
            return await this.knex.schema.dropTableIfExists('messages')
            .finally(async ()=>{
                return await this.knex.schema.createTable('messages', table =>{
                    table.increments('id_messages').primary()
                    table.string('user', 50).notNullable()
                    table.string('message', 100)
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    async close(){
        try {
            return await this.knex.destroy()
        } catch (error) {
            console.log(error)
        }
    }
    async getMessages(){
        try {
            return await this.knex('messages').select('*')
        } catch (error) {
            console.log(error)
        }
    }
    async insertMessages(messages){
        try {
            return await this.knex('messages').insert(messages)
        } catch (error) {
            console.log(error)
        }
    }
}
export default ClienteSqlChat
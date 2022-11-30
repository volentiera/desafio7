import knexLib from 'knex'

class ClienteSql{
    constructor(config){
        this.knex = knexLib(config)
    }
    async createTable(){
        try {
            return await this.knex.schema.dropTableIfExists('products')
            .finally(async ()=>{
                return await this.knex.schema.createTable('products', table =>{
                    table.increments('id_products').primary()
                    table.string('name', 50).notNullable()
                    table.integer('price', 15)
                    table.string('image', 100)
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
    async insertProducts(products){
        try {
            return await this.knex('products').insert(products)
        } catch (error) {
            console.log(error)
        }
    }
    async getProducts(){
        try {
            return await this.knex('products').select('*')
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
}
export default ClienteSql
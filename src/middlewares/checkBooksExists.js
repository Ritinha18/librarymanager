const knex = require("../database/knex");


async function checkBooksExists(req, res, next) {
    const {id} = req.params
    const [book] = await knex("books").where({id})

   if(!book) {
        return res.status(400).json("Livro não encontrado!")
   }
   next()
}

module.exports = checkBooksExists

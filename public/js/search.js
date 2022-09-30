const { search } = require("../../controllers/home-routes");

const searchBar = async (event) => {
    event.preventDefault();

    const searchable = document.querySelector('#searching').value.trim();

    if (searchable){
        const dbBookData = await Books.findAll({
            where: {
                [Op.or]: [
                  { title: searchable },
                  { author_last: searchable },
                  { author_first: searchable },
                ]
              }
    })
    console.log(dbBookData);
};
}
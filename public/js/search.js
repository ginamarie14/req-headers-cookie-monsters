//attach listener to form, link to it, user document.queryselector, redirect to search term, etc


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
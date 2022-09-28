const bookData = [
    {
        title: 'Zontrax',
        author_last: 'Leontine',
        author_first: 'MacScherie',
        ISBN:'292483528-3',
        library_id: 001,
    },
    {
        title: 'Flowdesk',
        author_last: 'Tracee',
        author_first: 'Lisciandri',
        ISBN:'919582683-1',
        library_id: 002,
    },
    {
        title: 'The Hobbit',
        author_last: 'Tolkien',
        author_first: 'JRR',
        ISBN:'822468845-3',
        library_id: 003,
    },
    {
        title: 'Voyatouch',
        author_last: 'Susi',
        author_first: 'Glancy',
        ISBN:'060731240-8',
        library_id: 004,
    },
    {
        title: 'Otcom',
        author_last: 'Norman', 
        author_first: 'Laverty',
        ISBN:'686382369-1',
        library_id: 005,
    },
    {
        title: 'Transcof',
        author_last: 'Felix',
        author_first: 'Sherwen',
        ISBN:'790750457-0',
        library_id: 006,
    },
    {
        title: 'Home Ing',
        author_last: 'Sherlocke',
        author_first: 'Seamon',
        ISBN:'813416748-9',
        library_id: 007,
    },
    {
        title: 'Overhold',  
        author_last: 'Anson', 
        author_first: 'Hurch',
        ISBN:'838103056-0',
        library_id: 008,
    },
    {
        title: 'Romeo and Juliette',
        author_last: 'Shakespeare',
        author_first: 'William',
        ISBN:'890882462-6',
        library_id: 009,
    },
    {
        title: 'Y-Solowarm',
        author_last: 'Ari',
        author_first: 'Kenningham',
        ISBN:'626071537-4',
        library_id: 010,
    }
]

const seedBooks = () => Books.bulkcreate(bookData);

module.exports = seedBooks;
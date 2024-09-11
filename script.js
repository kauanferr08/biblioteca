function searchBooks() {
    const query = document.getElementById('searchInput').value;
    alert(`Você buscou por: ${query}`);
}
const books = [
    { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Dom Casmurro', author: 'Machado de Assis' },
    { title: 'Orgulho e Preconceito', author: 'Jane Austen' },
    { title: 'A Revolução dos Bichos', author: 'George Orwell' },
    { title: 'O Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'O Grande Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Crime e Castigo', author: 'Fiódor Dostoiévski' },
    { title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez' },
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'A Metamorfose', author: 'Franz Kafka' },
    { title: 'Ulisses', author: 'James Joyce' },
    { title: 'A Montanha Mágica', author: 'Thomas Mann' },
    { title: 'Os Miseráveis', author: 'Victor Hugo' },
    { title: 'O Sol é para Todos', author: 'Harper Lee' }
];

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = books.filter(book => book.title.toLowerCase().includes(query));
    displayResults(results);
}

function displayResults(results) {
    const section = document.getElementById('search');
    section.innerHTML = '<h2>Buscar Livros</h2>';
    if (results.length > 0) {
        results.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `<strong>${book.title}</strong> por ${book.author}`;
            section.appendChild(bookElement);
        });
    } else {
        section.innerHTML += '<p>Nenhum livro encontrado.</p>';
    }
}

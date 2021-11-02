const books = [
  {
    name: "In Search of Lost Time",
    author: "Marcel Proust"
  },
  {
    name: "Don Quixote",
    author: "Miguel de Cervantes"
  },
  {
    name: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez"
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  },
  {
    name: "Moby Dick",
    author: "Herman Melville"
  },
  {
    name: "War and Peace",
    author: "Leo Tolstoy"
  },
  {
    name: "Hamlet",
    author: "William Shakespeare"
  },
  {
    name: "The Odyssey",
    author: "Homer"
  },
  {
    name: "Madame Bovary",
    author: "Gustave Flaubert"
  },
  {
    name: "The Divine Comedy",
    author: "Dante Alighieri"
  },
  {
    name: "Pride and Prejudice",
    author: "Jane Austen"
  },
  {
    name: "The battles in the desert",
    author: "Jose Emilio Pacheco"
  },
  {
    name: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll"
  },
  {
    name: "Heart of Darkness",
    author: "Joseph Conrad"
  },
  {
    name: "Nineteen Eighty Four",
    author: "George Orwell"
  },
  {
    name: "The Grapes of Wrath",
    author: "John Steinbeck"
  },
  {
    name: "The Adventures of Tom Sawyer",
    author: "Mark Twain"
  },
  {
    name: "Gulliver's Travels",
    author: "Jonathan Swift"
  },
  {
    name: "Mrs. Dalloway",
    author: "Virginia Woolf"
  },
  {
    name: "The Lord of the Rings",
    author: "J. R. R. Tolkien"
  },
  {
    name: "Les Misérables",
    author: "Victor Hugo"
  },
  {
    name: "The Color Purple",
    author: "Alice Walker"
  },
  {
    name: "Charlotte's Web",
    author: "E. B. White"
  },
  {
    name: "Of Mice and Men",
    author: "John Steinbeck"
  },
  {
    name: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry"
  },
]

const randomBook = () => {
  let n = Math.floor(Math.random() * books.length)
  let name = books[n].name
  let author = books[n].author

  console.log('\x1b[33m%s\x1b[37m%s\x1b[33m%s\x1b[0m', name, ' by ', author)
}

export default { randomBook }

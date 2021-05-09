const request = require('request')

const process = require('process')

const input = process.argv[2]
const baseUrl = 'https://lidemy-book-store.herokuapp.com'
if (input === 'list') {
  listBook(input)
} else if (input === 'read') {
  readBook(input, process.argv[3])
} else if (input === 'delete') {
  deleteBook(input, process.argv[3])
} else if (input === 'create') {
  createBook(input, process.argv[3])
} else if (input === 'update') {
  updateBook(input, process.argv[3], process.argv[4])
} else {
  console.log('Undefined command')
}

function listBook(list) {
  request(
    `${baseUrl}/books?_limit=20`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let books
      try {
        books = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      for (let i = 0; i < books.length; i++) {
        console.log(books[i].id, books[i].name)
      }
    }
  )
}

function readBook(read, id) {
  request(
    `${baseUrl}/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let book
      try {
        book = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      console.log(book.id, book.name)
    }
  )
}

function deleteBook(de, id) {
  request.delete(
    `${baseUrl}/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      console.log(body)
    }
  )
}

function createBook(create, bookName) {
  request.post(
    {
      url: `${baseUrl}/books`,
      form: { name: bookName }
    },
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let book
      try {
        book = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      console.log(book.id, book.name)
    }
  )
}

function updateBook(update, id, bookName) {
  request.patch(
    {
      url: `${baseUrl}/books/${id}`,
      form: { name: bookName }
    },
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let book
      try {
        book = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      console.log(book.id, book.name)
    }
  )
}

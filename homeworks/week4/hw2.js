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
    `${baseUrl}/ooks?_limit=20`,
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
        const space = ' '
        console.log(books[i].id + space + books[i].name)
      }
    }
  )
}

function readBook(read, id) {
  request(
    `${baseUrl}/${id}`,
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
      const space = ' '
      console.log(book.id + space + book.name)
    }
  )
}

function deleteBook(de, id) {
  request.delete(
    `${baseUrl}/${id}`,
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
      url: `${baseUrl}`,
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
      const space = ' '
      console.log(book.id + space + book.name)
    }
  )
}

function updateBook(update, id, bookName) {
  request.patch(
    {
      url: `${baseUrl}/${id}`,
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
      const space = ' '
      console.log(book.id + space + book.name)
    }
  )
}

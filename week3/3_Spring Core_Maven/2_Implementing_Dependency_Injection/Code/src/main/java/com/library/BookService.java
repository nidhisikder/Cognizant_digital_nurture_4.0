package com.library;

public class BookService {
		// TODO Auto-generated constructor stub
		private BookRepository bookRepository;

	    // Setter for Spring injection
	    public void setBookRepository(BookRepository bookRepository) {
	        this.bookRepository = bookRepository;
	    }

	    public void addBook(String title) {
	        System.out.println("Adding book in service: " + title);
	        bookRepository.saveBook(title);
	    }
	}



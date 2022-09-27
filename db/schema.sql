DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

USE library_db;

create table books (
	id INT,
	title VARCHAR(50),
	Author Last VARCHAR(50),
	Author First VARCHAR(50),
	ISBN VARCHAR(50)
);

create table users (
	id INT AUTO_INCREMENT NOT NULL primary key,
	username VARCHAR(20) UNIQUE,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
);

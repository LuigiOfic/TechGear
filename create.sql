create schema teste;
use teste;

create table Alunos (
	numMatri int primary key,
	nome varchar(20),
    sobrenome varchar(30),
    email varchar(30),
    senha varchar(8)
);

create table Professores (
	nif int primary key,
	nome varchar(20),
    sobrenome varchar(30),
    email varchar(30),
    senha varchar(8)
)

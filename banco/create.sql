create schema dbtg;
use dbtg;

create table Aluno (
	id long primary key auto_increment,
	numMatri int,
	nome varchar(20),
    turma varchar(7),
    email varchar(30),
    senha varchar(8)
);

create table Professor (
	nif int primary key,
	nome varchar(20),
    email varchar(30),
    senha varchar(8)
)

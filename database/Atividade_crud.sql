create database  db_atividade01_crud_c_mysql;
use  db_atividade01_crud_c_mysql;

create table cliente(
id_cliente int primary key auto_increment,
cliente varchar(150) not null,
email varchar(150) unique,
endereco varchar(250)
);

create table produto(
id_produto int primary key auto_increment,
produto varchar(150) not null,
quantidade_estoque int,
valor_unitario decimal(10,2)
);


select * from cliente;
select * from produto;


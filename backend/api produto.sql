create database db_sequelize_crud;
use db_sequelize_crud;

create table products(
idProducts int primary key auto_increment,
productName varchar(150) not null,
stock int  not null,
amount decimal(10,2) not null,
createdAt date not null,
updatedAt date not null
);

select * from products;

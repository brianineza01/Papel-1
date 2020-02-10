import pool from '../config/db-config';

const tablesCreator = `
DROP TABLE IF EXISTS users,accounts CASCADE;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(35) UNIQUE NOT NULL,
  firstName VARCHAR(21) NOT NULL,
  lastName VARCHAR(22) NOT NULL,
  password VARCHAR(300) NOT NULL ,
  type  VARCHAR(25) NOT NULL DEFAULT 'CLIENT',
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS accounts(
  id SERIAL PRIMARY KEY,
  accountNo SERIAL UNIQUE,
  createdOn VARCHAR(100) NOT NULL,
  owner VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL DEFAULT 'ACTIVE',
  balance FLOAT DEFAULT 0.001
);

INSERT INTO users(email,firstname,lastname,password)VALUES('fia@mail.com','RASTA','Never','$2b$10$K4EmRPE/zh/b6QxPQiVVaOtnq01okywVrxsJMFr8kL9L2qg24c5gS');
INSERT INTO accounts(createdon,owner,email,type) VALUES(2012-12-27,'RASTA Never','fia@mail.com','current');
INSERT INTO accounts(createdon,owner,email,type) VALUES(2012-11-25,'kagabo divin','kag@mail.com','savings');`;

const tables = async () => {
  await pool.query(tablesCreator).then(() => {
    console.log('TEST tables Created');
    pool.end();
  }).catch(() => {
    process.exit(0);
  });
};

tables();

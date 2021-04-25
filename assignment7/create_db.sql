-- DROP TABLES IF IT EXIST IN DATABASE

DROP TABLE IF EXISTS `student_space`.`order_product`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `student_space`.`order`;
DROP TABLE IF EXISTS `student_space`.`customer`;
DROP TABLE IF EXISTS `student_space`.`registration`;


-- CREATE TABLES IN DATABASE WITH PRIMARY, FOREIGN KEY AND CONSTRAINTS

CREATE TABLE `product` (
`item_no` int(4) NOT NULL,
`item_name` varchar(30) NOT NULL,
`price` float(9,2) NOT NULL,
`inventory` int(11) NOT NULL,
PRIMARY KEY (`item_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `student_space`.`customer` (
`customer_id` INT NOT NULL,
`exp_mo` INT(2) NOT NULL,
`exp_year` INT(4) NOT NULL,
`name_first` VARCHAR(20) NOT NULL,
`name_last` VARCHAR(20) NOT NULL,
`address1` VARCHAR(50) NOT NULL,
`address2` VARCHAR(50) NULL,
`city` VARCHAR(20) NOT NULL,
`state` VARCHAR(2) NOT NULL,
`zip` INT(5) NOT NULL,
`country` VARCHAR(20) NULL,
`phone` VARCHAR(15) NOT NULL,
`fax` VARCHAR(15) NOT NULL,
`mail_list` TINYINT(1) NULL,
PRIMARY KEY (`customer_id`));


CREATE TABLE `student_space`.`order` (
`order_id` INT NOT NULL,
`order_date` DATE NOT NULL,
`customer_id` INT NOT NULL,
PRIMARY KEY (`order_id`),
INDEX `customer_id_idx` (`customer_id` ASC),
CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `student_space`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `student_space`.`order_product` (
`item_no` INT NOT NULL,
`order_id` INT NOT NULL,
`quantity` DOUBLE NULL DEFAULT 0,
PRIMARY KEY (`item_no`, `order_id`),
INDEX `order_id_FK_idx` (`order_id` ASC),
CONSTRAINT `item_no_FK`
    FOREIGN KEY (`item_no`)
    REFERENCES `student_space`.`product` (`item_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
CONSTRAINT `order_id_FK`
    FOREIGN KEY (`order_id`)
    REFERENCES `student_space`.`order` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `student_space`.`registration` (
`registration_id` INT NOT NULL,
`user_name` VARCHAR(16) NOT NULL,
`password` VARCHAR(16) NOT NULL,
`email` VARCHAR(50) NOT NULL,
PRIMARY KEY (`registration_id`),
UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC));


-- INSERT PRODUCT INTO TABLES

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (0,'Moose Boots', 250 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (1,'Caribou Skin Boots', 300 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (2,'Brown Rabbit Slippers', 150 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (3,'Snow Rabbit Slippers', 150 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (4,'Earring', 1000 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (5,'Necklace', 500 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (6,'Hair Clip', 75 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (7,'Pendant', 400 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (8,'Dog Sled', 1000 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (9,'Wood Carving', 500 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (10,'Wood Carving', 1500 , 5) ON DUPLICATE KEY UPDATE item_no = item_no;

INSERT INTO `product` (`item_no`, `item_name`, `price`, `inventory`)
VALUES (11,'Ivory Carvings',  2500, 5) ON DUPLICATE KEY UPDATE item_no = item_no;


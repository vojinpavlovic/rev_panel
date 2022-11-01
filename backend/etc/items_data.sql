CREATE TABLE IF NOT EXISTS items_data (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    label varchar(100) NOT NULL,
    weight int(11) NOT NULL DEFAULT 0,
    
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
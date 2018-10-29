CREATE TABLE collection (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE disc (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  author VARCHAR(150),
  collection_id INT NOT NULL,
  FOREIGN KEY (collection_id) REFERENCES collection(id),
  PRIMARY KEY (id)
);

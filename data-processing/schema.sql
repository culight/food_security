CREATE TABLE IF NOT EXISTS garden (
    name CHAR(75) PRIMARY KEY,
    address CHAR(75) NOT NULL,
    url CHAR(75),
    tract CHAR(75),
    foreign key (tract) REFERENCES region (tract)
);

CREATE TABLE IF NOT EXISTS gardener (
	name CHAR(75) NOT NULL,
	phone CHAR(10) NOT NULL,
  isPrimary boolean DEFAULT false NOT NULL,
	PRIMARY KEY (name, phone)
);

CREATE TABLE IF NOT EXISTS garden_gardeners (
	garden_name CHAR(75) REFERENCES garden(name) NOT NULL,
	gardener_name CHAR(75) REFERENCES gardener(name) NOT NULL,
	PRIMARY KEY (garden_name, gardener_name)
);

CREATE TABLE IF NOT EXISTS produce (
	name CHAR(75) PRIMARY KEY,
	type CHAR(75),
	weight smallint,
  organic boolean DEFAULT false,
  processed boolean DEFAULT false,
	CHECK (weight >= 0.00 AND weight <= 500.00)
);

CREATE TABLE IF NOT EXISTS garden_produce (
	garden_name CHAR(75) REFERENCES garden(name),
	produce_name CHAR(75) REFERENCES produce(name),
	PRIMARY KEY(garden_name, produce_name)
);

CREATE TABLE IF NOT EXISTS consumer (
  name CHAR(75),
  address CHAR(75),
  PRIMARY KEY (name, address)
);

CREATE TABLE IF NOT EXISTS official (
	name CHAR(75),
	phone	CHAR(75),
  email	CHAR(75) NOT NULL,
	address	CHAR(75) NOT NULL,
	PRIMARY KEY (name, email)
);

CREATE TABLE IF NOT EXISTS region (
	tract CHAR(75) PRIMARY KEY,
	food_access real
);

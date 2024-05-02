CREATE TABLE images (
    id serial primary key,
    name varchar(255) not null,
    url varchar(255) not null,
    format varchar(255) not null,
    date_added TIMESTAMP default CURRENT_TIMESTAMP
)
CREATE TABLE gallery (
    id serial primary key,
    name varchar(255),
)
CREATE TABLE gallery_images (
    gallery_id INT NOT NULL,
    image_id INT NOT NULL,
    foreign key (gallery_id)  references gallery(id),
    foreign key (image_id) references images(id),
)
create database netflix;
create table users(
    user_id SERIAL PRIMARY KEY UNIQUE,
    user_fname VARCHAR(100) not null,
    user_lname VARCHAR(100) not null,
    user_email VARCHAR(100) not null UNIQUE,
    user_passwd VARCHAR(20) not null,
    user_country VARCHAR(80) not null,
    user_mobilenum NUMERIC not null UNIQUE,
    sign_up TIMESTAMP,
    subid INTEGER,
    sub_validity TIMESTAMP
);
ALTER TABLE users
ALTER COLUMN sign_up
SET DEFAULT now();
create table movies(
    videoid serial primary key,
    poster_link VARCHAR(500),
    link VARCHAR(200) not null UNIQUE,
    title VARCHAR(50) not null UNIQUE,
    imdb_rating VARCHAR(10),
    date_of_release DATE,
    genreid INTEGER,
    movie_desc VARCHAR(400) UNIQUE
);
create table subscription(
    subid serial primary key UNIQUE,
    plan_name VARCHAR(30) UNIQUE,
    price INTEGER UNIQUE,
    sub_details VARCHAR(500)
);
create table movie_cast(
    actorid serial primary key UNIQUE,
    fname varchar(20),
    lname varchar(20) ,
    aimg_link VARCHAR(500),
    gender char(2)
);
create table director(
    directorid serial primary key UNIQUE,
    fname VARCHAR(30) UNIQUE,
    lname VARCHAR(30) UNIQUE,
    dimg_link VARCHAR(500),
    no_of_movies INTEGER,
    gender char(2)
);
create table acted_by(
    actorid INTEGER,
    movieid INTEGER,
    cast_role VARCHAR(100) UNIQUE
);
create table directed_by(directorid INTEGER, movieid INTEGER);
create table watched(
    userid INTEGER UNIQUE,
    videoid INTEGER UNIQUE
);
create table wishlist(
    videoid INTEGER UNIQUE,
    userid INTEGER
);
create table genre(
    genreid serial primary key UNIQUE,
    genre_name VARCHAR(50) UNIQUE
);
--constraints
alter table users
add foreign key(subid) references subscription(subid);
alter table movies
add foreign key(genreid) references genre(genreid);
alter table wishlist
add foreign key(userid) references users(user_id);

alter table wishlist
add foreign key(videoid) references movies(videoid);
alter table acted_by
add foreign key(movieid) references movies(videoid);
alter table acted_by
add foreign key(actorid) references movie_cast(actorid);
alter table directed_by
add foreign key(movieid) references movies(videoid);
alter table directed_by
add foreign key(directorid) references director(directorid);
alter table watched
add foreign key(userid) references users(user_id);
alter table watched
add foreign key(videoid) references movies(videoid);

alter table users
add check (subid<=3);

alter table movies alter column movie_desc type varchar(1000);


ALTER TABLE users
ALTER COLUMN sub_validity
SET DEFAULT now() + INTERVAL '1 year';





--to find a cast in a particular movie

select c.fname,
    c.lname,
    m.title,
    m.link
from movies m
    inner join acted_by a on m.videoid = a.movieid
    inner join movie_cast c on c.actorid = a.actorid;


drop table test;
insert into test(t_name)
values ('lila');

----
drop table wishlist cascade;
drop table genre cascade;
drop table director cascade;
drop table acted_by cascade;
drop table directed_by cascade;
drop table watched cascade;
drop table movie_cast cascade;
drop table movies cascade;
drop table subscription cascade;
drop table users cascade;
--to update a table
UPDATE wishlist
SET videoid = 2
where userid = 2;
--to delete a data
DELETE FROM movies
WHERE videoid = 7;
--default value
ALTER TABLE movies
ALTER COLUMN viewcount
SET DEFAULT 1;
--drop null
ALTER TABLE movies
ALTER COLUMN viewcount DROP NOT NULL;


select * from movie_cast
inner join acted_by on acted_by.actorid=movie_cast.actorid
where acted_by.movieid=1;


insert into movie_cast (fname,lname,aimg_link,gender) values('Sam','Cliffin','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZESvMSarSyzl3uO0sRCK38UhvKYZrrqphMHH6sXl5MDbK1Fft','M');

insert into acted_by (movieid,actorid,cast_role) values(1,2,'William Traynor');

select * from director
inner join directed_by on director.directorid=directed_by.directorid
inner join movies on movies.videoid=directed_by.movieid
where movies.videoid=1;

select * from movie_cast
inner join acted_by on acted_by.actorid=movie_cast.actorid
inner join directed_by on directed_by.movieid=acted_by.movieid
inner join movies on movies.videoid=directed_by.movieid
where acted_by.movieid=1;

select users.user_comments from user_comments inner join on movies where movies.videoid=users.movieid;
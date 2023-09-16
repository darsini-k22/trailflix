const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

/**************Movies*************/
app.get("/get-movie-list", async (req, res) => {
  try {
    const info = await pool.query("SELECT * FROM movies");

    res.status(200).json({
      status: "Success",
      info: info.rows.length,
      data: {
        info: info.rows,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/get-movie-list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const video = await pool.query("SELECT * FROM movies where videoid=$1", [
      id,
    ]);
    // console.log(video);

    if (video.rows) {
      res.status(200).json({
        status: "Success",
        length: video.rows.length,
        data: {
          movie_title: video.rows[0],
        },
      });
    } else {
      return res.status(404).json({ message: "error" });
    }
  } catch (err) {
    return res.status(404).json({ message: "Error" });
    // console.log(err.message);
  }
});

app.post("/add-movie-list", async (req, res) => {
  try {
    const { link } = req.body;
    const { title } = req.body;
    const { imdb_rating } = req.body;
    const { date_of_release } = req.body;
    const { genreid } = req.body;
    const { movie_desc } = req.body;
    const { poster_link } = req.body;

    const video = await pool.query(
      "INSERT INTO movies (poster_link, link,title,imdb_rating,genreid,movie_desc,date_of_release) VALUES ($1,$2,$3,$4,$5,$6, $7)  RETURNING *",
      [
        poster_link,
        link,
        title,
        imdb_rating,
        genreid,
        movie_desc,
        date_of_release,
      ]
    );

    console.log(video);
    res.status(201).json({
      status: "Success",
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/update-movie/:videoid", async (req, res) => {
  try {
    const { videoid } = req.params;
    const { viewcount } = req.body;
    const { link } = req.body;
    const { title } = req.body;
    const { imdb_rating } = req.body;
    const { date_of_release } = req.body;
    const { genreid } = req.body;
    const { movie_desc } = req.body;

    const update_movie = await pool.query(
      "UPDATE movies SET viewcount=$1,link=$2,title=$3,imdb_rating=$4,genreid=$5,movie_desc=$6,date_of_release=$7 WHERE videoid=$8 RETURNING *",
      [
        viewcount,
        link,
        title,
        imdb_rating,
        genreid,
        movie_desc,
        date_of_release,
        videoid,
      ]
    );
    console.log(update_movie);
    res.status(204).json({
      status: "Success",
      data: {
        result: update_movie.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.delete("/delete-movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delete_movie = await pool.query(
      "DELETE FROM movies WHERE videoid=$1",
      [id]
    );
    console.log(delete_movie);
    res.status(200).json({
      status: "Success",
    });
  } catch (err) {
    console.log(err.message);
  }
});

/************************Users*******************/

app.get("/login/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [
      email,
    ]);
    // console.log(email);
    console.log(user);
    return res.status(200).send(user.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.put("/update-comments/:id", async (req, res) => {
  try {
    const { fname } = req.body;
    const { comments } = req.body;
    const { id } = req.params;

    const comment = await pool.query(
      "update users set user_comments=$1,movieid=$3 where user_fname=$2",
      [comments, fname, id]
    );
    console.log(comment);
    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/get-movie-comment/:movid", async (req, res) => {
  try {
    const { movid } = req.params;

    const userComment = await pool.query(
      "select * from users inner join  movies on  movies.videoid=users.movieid where users.movieid=$1",
      [movid]
    );
    return res.status(200).json({ info: userComment.rows });
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { user_lname } = req.body;
    const { user_fname } = req.body;
    const { user_email } = req.body;
    const { user_passwd } = req.body;
    const { user_country } = req.body;
    const { user_mobilenum } = req.body;
    const { subid } = req.body;

    const register = await pool.query(
      "INSERT INTO users (user_lname,user_fname,user_email,user_passwd,user_country,user_mobilenum,subid) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [
        user_lname,
        user_fname,
        user_email,
        user_passwd,
        user_country,
        user_mobilenum,
        subid,
      ]
    );
    return res.status(200).send(register.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

/**************director**********/

app.post("/reg-director", async (req, res) => {
  try {
    const { fname } = req.body;
    const { lname } = req.body;
    const { no_of_movies } = req.body;
    const { gender } = req.body;
    const { dimg_link } = req.body;

    const direc_register = await pool.query(
      "INSERT INTO direcctor (fname,lname,dimg_link,no_of_movies,gender) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [fname, lname, dimg_link, no_of_movies, gender]
    );
    return res.status(200).send(direc_register.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/director-details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ddetails = await pool.query(
      "select * from director inner join directed_by on director.directorid=directed_by.directorid inner join movies on movies.videoid=directed_by.movieid where movies.videoid=$1;",
      [id]
    );
    console.log(ddetails);
    return res.status(200).json({
      info: ddetails.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

{
  /*****************Actors*********************/
}

app.get("/actor-details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const adetails = await pool.query(
      "select * from movie_cast inner join acted_by on acted_by.actorid=movie_cast.actorid where acted_by.movieid=$1;",
      [id]
    );
    console.log(adetails);
    return res.status(200).json({
      info: adetails.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

/******************genre ****************/

app.get("/get-genre/:genid", async (req, res) => {
  try {
    const { genid } = req.params;
    const gen = await pool.query("select * from genre where genreid=$1", [
      genid,
    ]);

    return res.status(200).json(gen.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/get-genre", async (req, res) => {
  try {
    const genre = await pool.query("select * from genre");

    return res.status(200).json(genre.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/get-genre-list", async (req, res) => {
  try {
    const genre = await pool.query(
      " select * from genre inner join movies on genre.genreid=movies.genreid "
    );

    return res.status(200).json(genre.rows);
  } catch (error) {
    console.log(error.message);
  }
});

/***********************************Wishlist*******************************/

app.post("/add-to-wishlist/:vid/:usrid", async (req, res) => {
  try {
    const vid = req.params.vid;
    const usrid = req.params.usrid;
    const wishlist = await pool.query(
      "insert into wishlist(userid,videoid) values($2,$1)",
      [vid, usrid]
    );
    return res.status(200).json({status:"Success"})
  } catch (error) {
    console.log(error.message);
  }
});

const port = process.env.SERVERPORT || 5001;
app.listen(port, (req, res) => {
  console.log(`Server is working at port ${port}`);
});

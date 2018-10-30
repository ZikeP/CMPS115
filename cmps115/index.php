<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
* {box-sizing: border-box;}

body {     
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body::after {
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540688038&di=4fd97c5649e40d882e424d834a41b7d6&imgtype=jpg&er=1&src=http%3A%2F%2Fi-3.497.com%2F2016%2F10%2F13%2Fa1e63eb0-f052-4a35-bb10-4fa6b4e0459c.jpg);
  content: "";
  opacity: 0.2;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;   
}

.tags {
    position:absolute;
    left:38%;
    top:40%;    
}

.button{
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}


.topnav {
    position:absolute;
    left:30%;
    top:25%;
    
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}



@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>
</head>
<body>


 <a href="login.html" class="button">Login</a>



<div class="topnav">
  <a class="active" href="home.html">Home</a>
  <a href="movies.html">Movies</a>
  <a href="anime.html">Anime</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>



<div class="tags"style="padding-left:16px">

  <h2>Start your bizarre adventure</h2>
<a href="result.html">Horror</a>   &nbsp;
<a href="result.html">Romantic</a>   &nbsp;
<a href="result.html">Action</a>   &nbsp;
<a href="result.html">Mystery</a> <br />
<a href="result.html">Fantasy</a> &nbsp;
<a href="result.html">Crime</a> &nbsp;
<a href="result.html">Drama</a> &nbsp;
<a href="result.html">Superhero</a> <br />
<a href="result.html">Science</a> &nbsp;
<a href="result.html">Disaster</a> &nbsp;
<a href="result.html">Sports</a> &nbsp;
<a href="result.html">Musical</a> <br />
<a href="result.html">Documentary</a> &nbsp;
<a href="result.html">war</a> &nbsp;
<a href="result.html">Thriller</a> &nbsp;
<a href="result.html">Thriller</a> &nbsp;

</div>



</body>
</html>
<?php
session_start();
$_SESSION['homepage'] = $_SERVER['HTTP_HOST'];
include ("index.html");
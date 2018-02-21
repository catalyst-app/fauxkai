<?php
header("Content-Type: text/css; charset=UTF-8");
?>
a {
	color: #<?= $_GET["hex"] ?>;
}

.btn:hover, .btn:focus, .btn-large:hover, .btn-large:focus {
	background-color: #<?= $_GET["hex"] ?>;
}

blockquote {
	border-left: 5px solid #<?= $_GET["hex"] ?>;
}

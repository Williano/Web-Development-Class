<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $title = $_POST['title'];
    $body = $_POST['body'];

    $errors = [];

    if (isset($_POST["submit"])) {
        $check = getimagesize($_FILES["image"]["tmp_name"]);

        if ($check !== false) {
            $uploadOk = true;
        } else {
            $errors[] = "File is not an image.";
            $uploadOk = false;
        }

        $targetFile = 'images/blog/' . str_replace(' ', '_', $title) . '.jpg';

        if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
            $errors[] = "Sorry, there was an error uploading your file.";
        }

        $delimiter = '||';

        $content = $name . $delimiter . $title . $delimiter . $targetFile . $delimiter . $body . $delimiter . date('d-m-Y');

        $fp = fopen('blog.txt', 'a');
        fwrite($fp, $content . "\n\n");
        fclose($fp);

        if (!count($errors)) {
            header('Location: blog.php');
        } else {
            echo implode("<br />", $errors);
        }
    }
}

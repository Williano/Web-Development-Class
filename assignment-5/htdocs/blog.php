<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogs</title>
    </head>
    <link rel="stylesheet" href="css/blog.css">

    <body>
    <div>
        <?php
            $content = file_get_contents('blog.txt');

            $blogs = explode("\n\n", $content);

        ?>

        <?php foreach (array_reverse($blogs) as $blog) {?>
            <?php
                $parts = explode('||', $blog);

            ?>
            <div>
                <h1 style="text-align:center;"><?php echo $parts[1] ?></h1>
                <h2 style="text-align:center;">by <?php echo $parts[0];?> on <?php echo $parts[4]; ?></h2>

                <div style="text-align:center;">
                <div class="img">
                    <img style="text-align:center;
                    width: 100%;
                    max-width: 200px;
                    height: auto;" src="<?php echo $parts[2];?>" />
                </div>

                <div  style="text-align:center;
                             display:inline-block;
                             border: 2px solid black;
                             height: 200px;
                             width: 500px;">
                    <p><?php echo $parts[3]; ?></p>
                </div>

                <div>

            </div>
            <hr class="hr-dot">
        <?php } ?>

        </div>
    </body>
</html>
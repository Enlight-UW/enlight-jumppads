<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/webfront.css" rel="stylesheet" />
        <title>Jumppad Testbed</title>
    </head>
    <body>
        <div class="container">

            <script src="js/jquery-1.8.2.min.js"></script>
            <script src="js/bootstrap.min.js"></script>

            <script src="jumppads.js"></script>
            <div style="display:none;">
            <h3>Configuration</h3>
            <p>Specify the path to act.php on your local webserver:</p>
            <input type="text" id="APITarget"
                   value="http://localhost/enlight-webfront/php/act.php"
                   style="width: 40em;" />
            <br />

            <a class="btn" href="#"
               onclick="apiTarget=$('#APITarget').val(); return false;">Update</a>

            <h1>Test: Normal Operation</h1>
            <p>
                Clicking the below buttons will invoke the standard action
                of each pad. There are currently 8 of them.
            </p>
            </div>
            <table class="table" style="font-size:72pt;">
                <tr>
                   <!-- <th>Pad 1</th> -->
                    <td>
                        <a href="#" class="btn" onclick="doPad1_1(); return false;">1</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad1_2(); return false;">2</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad1_3(); return false;">3</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad1_4(); return false;">4</a>
                    </td>
                </tr>
                <tr>
                   <!-- <th>Pad 2</th> -->
                    <td>
                        <a href="#" class="btn" onclick="doPad2_1(); return false;">1</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad2_2(); return false;">2</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad2_3(); return false;">3</a>
                    </td>
                    <td>
                        <a href="#" class="btn" onclick="doPad2_4(); return false;">4</a>
                    </td>
                </tr>
            </table>

        </div>
    </body>
</html>
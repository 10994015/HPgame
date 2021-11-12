<?php
include("connection.php");
$sql = "UPDATE no SET count=count+1";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$sql = "SELECT count from no";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$arr=$stmt->fetchAll(PDO::FETCH_ASSOC);
$connter = $arr[0]["count"];
$count = strlen($connter);
?>

<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

    <title>魷魚遊戲GO</title>
    
    
</head>
<body>   <div class="all">
        
    <div class="main">
        <div id="hiddenLayer">
           <h1 id="touchH1">請輕觸螢幕</h1>
        </div>
            <div class="progressBar" id="progressBar">
            
                <div class="progressBarItem"></div>
            </div>
            <div id="progressBarNum">0%</div>
            <img src="" alt="" id="squid">
            <img src="" alt="" id="player">
       
    </div>

    <div class="qaAll">
            <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
            <div class="qa">
                    <p>(1).<span id="question1"></span></p>
                    <label for="q1-a"><input type="radio" name="q1" id="q1-a" class="option1"><span id="q1a"></span></label>
                    <label for="q1-b"><input type="radio" name="q1" id="q1-b" class="option1"><span id="q1b"></span></label>
                    <label for="q1-c"><input type="radio" name="q1" id="q1-c" class="option1"><span id="q1c"></span></label>
                    <!-- <strong id="hint1"></strong> -->
                    <button class="send">送出</button>
            </div>
            
            
            
            
    </div>

    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
            <div class="qa">
                    <p>(2).<span id="question2"></span></p>
                    <label for="q2-a"><input type="radio" name="q2" id="q2-a" class="option2"><span id="q2a"></span></label>
                    <label for="q2-b"><input type="radio" name="q2" id="q2-b" class="option2"><span id="q2b"></span></label>
                    <label for="q2-c"><input type="radio" name="q2" id="q2-c" class="option2"><span id="q2c"></span></label>
                    <!-- <strong id="hint2"></strong> -->
                    <button class="send">送出</button>
                </div>
    </div>

    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
        <div class="qa">
                <p>(3).<span id="question3"></span></p>
                <label for="q3-a"><input type="radio" name="q3" id="q3-a" class="option3"><span id="q3a"></span></label>
                <label for="q3-b"><input type="radio" name="q3" id="q3-b" class="option3"><span id="q3b"></span></label>
                <label for="q3-c"><input type="radio" name="q3" id="q3-c" class="option3"><span id="q3c"></span></label>
                <!-- <strong id="hint3"></strong> -->
                <button class="send">送出</button>
            </div>
    </div>

    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
        <div class="qa">
                <p>(4).<span id="question4"></span></p>
                <label for="q4-a"><input type="radio" name="q4" id="q4-a" class="option4"><span id="q4a"></span></label>
                <label for="q4-b"><input type="radio" name="q4" id="q4-b" class="option4"><span id="q4b"></span></label>
                <label for="q4-c"><input type="radio" name="q4" id="q4-c" class="option4"><span id="q4c"></span></label>
                <!-- <strong id="hint4"></strong> -->
                <button class="send">送出</button>
            </div>
    </div>

    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
        <div class="qa">
                <p>(5).<span id="question5"></span></p>
                <label for="q5-a"><input type="radio" name="q5" id="q5-a" class="option5"><span id="q5a"></span></label>
                <label for="q5-b"><input type="radio" name="q5" id="q5-b" class="option5"><span id="q5b"></span></label>
                <label for="q5-c"><input type="radio" name="q5" id="q5-c" class="option5"><span id="q5c"></span></label>
                <label for="q5-d"><input type="radio" name="q5" id="q5-d" class="option5"><span id="q5d"></span></label>
                <!-- <strong id="hint5"></strong> -->
                <button class="send">送出</button>
            </div>
    </div>
    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
        <div class="qa">
                <p>(6).<span id="question6"></span></p>
                <label for="q6-a"><input type="radio" name="q6" id="q6-a" class="option6"><span id="q6a"></span></label>
                <label for="q6-b"><input type="radio" name="q6" id="q6-b" class="option6"><span id="q6b"></span></label>
                <label for="q6-c"><input type="radio" name="q6" id="q6-c" class="option6"><span id="q6c"></span></label>
                <label for="q6-d"><input type="radio" name="q6" id="q6-d" class="option6"><span id="q6d"></span></label>
                <!-- <strong id="hint6"></strong> -->
                <button class="send">送出</button>
            </div>
    </div>

    <div class="qaAll">
        <h1 class="error">答錯了!再答一次!<br><i class="fas fa-times-circle"></i></h1>
        <div class="qa">
                <p>(7).<span id="question7"></span></p>
                <label for="q7-a"><input type="radio" name="q7" id="q7-a" class="option7"><span id="q7a"></span></label>
                <label for="q7-b"><input type="radio" name="q7" id="q7-b" class="option7"><span id="q7b"></span></label>
                <label for="q7-c"><input type="radio" name="q7" id="q7-c" class="option7"><span id="q7c"></span></label>
                <button class="send">送出</button>
            </div>
    </div>

    
    <div class="bingo">
        <strong id="hint1"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint2"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint3"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint4"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint5"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint6"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>
    <div class="bingo">
        <strong id="hint7"></strong>
        <h1>答對了!點擊繼續</h1>
    </div>

    <div id="pass">
        <h1>闖關成功</h1>
        <p style="font-family: Arial;font-size:24px;">序號:
        <?php for($i=0;$i<$count;$i++){
            echo $connter[$i];
        }
        ?>
        </p>
        <img src="images/LOGO.png" alt="">
        <p>本活動為衛生保健組宣導各式健康促進議題</p>
        <p>結合時事以平易近人、生活化方式作為傳遞</p>
        <br>
        <p>感謝您的參加</p>
        <p>請截圖本畫面+學生證/教職員證</p> 
        <p>於11/15-11/17，10:00-16:00</p> 
        <p>至全人大道帳篷區，兌換神秘小禮物1份</p> 
        <p>1人1份，名額有限，送完為止</p> 
        <p>感謝您的參加，衛生保健組關心您</p>

    </div>

    <script src="script.js"></script>
    <script src="question.js"></script>
</body>
</html>
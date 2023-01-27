// 컴퓨터에서 랜덤 번호를 생성한다. -> 유저가 알 수 없도록 (1~100사이의 숫자 + 소수점 버림) v
// 유저가 입력한 숫자의 정보를 가져온다. v
// Go 버튼을 누르면 결과와 남은 찬스가 출력된다. v
// 유저 숫자가 랜덤 숫자보다 작으면 up / 유저 숫자가 랜덤 숫자보다 크면 down / 랜덤 숫자와 유저 숫자가 동일하면 "정답!" 출력 v
// 기회는 5번이고 5번 기회를 모두 사용하면 Go 버튼이 disable
// 숫자를 맞추면 Go 버튼이 disable
// 1 ~ 100 범위 밖의 숫자를 입력하거나 이미 입력한 숫자를 다시 입력하면 경고문 출력과 기회는 깎이지 않는다. v
// reset버튼을 누르면 유저창이 깨끗해지고 랜덤 번호가 다시 생성 v


let computerNum = 0
let playBtn = document.getElementById("play-btn")
let userNum = document.getElementById("user-num")
let resultBox = document.getElementById("result-box")
let resetBtn = document.getElementById("reset-btn")
let chance = 5
let chanceBox = document.getElementById("chance-box")
let arr = []
let gameOver = false


playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userNum.addEventListener("focus", function(){userNum.value = ""})



function randomNum () {
    computerNum = Math.floor((Math.random() * 50) + 1)
    console.log(computerNum)
}

function play () {
    let userValue = userNum.value

    if (userValue < 1 || userValue > 100) {
        resultBox.textContent = "📍 1과 100사이의 숫자를 입력해 주세요 📍"
        return
    }
    
    if (arr.includes(userValue)){
        resultBox.textContent = "📍 이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요 📍"
        return
    }

    chance--
    chanceBox.textContent = `남은 chance : ${chance}번`
    
    if (userValue < computerNum){
        resultBox.textContent = "결과 : UP! 🔼"
    } else if (userValue > computerNum){
        resultBox.textContent = "결과 : DOWN! 🔽"
    } else {
        resultBox.textContent = "결과 : 🎉정답입니다!🎉"
        playBtn.disabled = true
    }

    arr.push(userValue)

    if (chance < 1) gameOver = true
    if (gameOver) playBtn.disabled = true
    // gameOver이 true일 때 disabled가 true
}

function reset () {
    // reset를 새로고침 기능으로
    window.location.reload()
}


randomNum()


// arr = []
// chance = 5
// userNum.value = ""
// randomNum()
// resultBox.textContent = "결과 : 여기에 출력됩니다."
// chanceBox.textContent = `남은 chance : ${chance}번`
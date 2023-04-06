
baseballGame()

function baseballGame() {
    let answer = ranNum()
    let count = 0
    
    while (true) {
        let inputNum = prompt("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")
        let inputArray = inputNum.split('').map(Number)
        if (inputArray.length !== 3) {
            alert("세 자리 숫자를 입력해주세요.")
            continue
        }
        count++;
        
        let strike = 0
        let ball = 0

        for (let i = 0; i < 3; i++) {
            if (inputArray[i] === answer[i]) {
                strike++
            } else if (answer.includes(inputArray[i])) {
                ball++
            }
        }

        if (strike === 3) {
            alert(`${count}번 만에 맞추셨습니다. 게임을 종료합니다`)
            break;
        } else {
            alert(`${count}번째 시도 : ${inputArray} --> ${strike}S ${ball}B`)
        }

    }
}



// 랜덤한 0 - 9까지의 값을 만드는 함수
function ranNum() {
    let r = []
    while (r.length < 3) {
        const randomNum = Math.floor(Math.random() * 10)
        if (!r.includes(randomNum)) {
            r.push(randomNum)
        }
    }

    return r
}







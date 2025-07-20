function sayHello() {
    alert("안녕하세요! 방문해주셔서 감사합니다 😊");
}

// localStorage를 이용한 방문자 수 세기
let visits = localStorage.getItem('visitCount');

if (visits) {
    visits = parseInt(visits) + 1;  // 방문 횟수 1 증가
} else {
    visits = 1;  // 첫 방문이면 1로 시작
}

localStorage.setItem('visitCount', visits);

// 방문 횟수 화면에 표시
document.getElementById('visitor-count').textContent = visits + '회 방문했습니다.';
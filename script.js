function sayHello() {
    alert("안녕하세요! 방문해주셔서 감사합니다 😊");
}
// CountAPI를 사용해서 방문자 수 가져오기
fetch('https://api.countapi.xyz/hit/stolo0101.github.io/MyFirstPage/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').textContent = data.value.toLocaleString();
    })
    .catch(error => {
        document.getElementById('visitor-count').textContent = '오류 발생';
        console.error('방문자 수 로드 실패:', error);
    });
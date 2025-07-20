function sayHello() {
    alert("안녕하세요! 방문해주셔서 감사합니다 😊");
}

fetch('https://api.visitorcounter.dev/api/v1/visitorcount/stolo0101/MyFirstPage')
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').textContent = data.count.toLocaleString();
    })
    .catch(error => {
        document.getElementById('visitor-count').textContent = '오류 발생';
        console.error('방문자 수 로드 실패:', error);
    });
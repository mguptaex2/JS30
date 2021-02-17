
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
p.className = "line";
const words =  document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('')
    console.log(transcript);
    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        p.className = "line";
        words.appendChild(p);
    }
});

recognition.addEventListener('end',recognition.start);
recognition.start();





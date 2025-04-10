const secretCode = "windandlily"; // You can change this to anything private

function checkPasscode() {
  const input = document.getElementById("passcode").value;
  if (input === secretCode) {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false;
    bgMusic.play();
  } else {
    alert("Oops! Wrong passcode 💔");
  }
}

function showContent() {
  const dateInput = document.getElementById('datePicker').value;
  const formattedDate = new Date(dateInput).toLocaleDateString('en-GB').split('/').join('-');

  fetch('content.json')
    .then(res => res.json())
    .then(data => {
      const entry = data[formattedDate];
      if (entry) {
        document.getElementById('note').innerText = entry.note;
        document.getElementById('quote').innerText = entry.quote;
        document.getElementById('letterPreview').innerText = entry.letter.slice(0, 100) + "...";
        document.getElementById('contentArea').classList.remove('hidden');
      } else {
        alert("No surprise found for this day 💌 Try another!");
        document.getElementById('contentArea').classList.add('hidden');
      }
    });
}

function openLetter() {
  document.getElementById('letterPanel').classList.add('show');
  const dateInput = document.getElementById('datePicker').value;
  const formattedDate = new Date(dateInput).toLocaleDateString('en-GB').split('/').join('-');

  fetch('content.json')
    .then(res => res.json())
    .then(data => {
      const entry = data[formattedDate];
      if (entry) {
        document.getElementById('fullLetter').innerText = entry.letter;
      } else {
        document.getElementById('fullLetter').innerText = "No letter for this day yet 💌";
      }
    });
}

function closeLetter() {
  document.getElementById('letterPanel').classList.remove('show');
}
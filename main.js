function getGithubID() {
  function hereYourGithubID(num) {
    const view = document.querySelector('.yourGithubID');
    view.innerText = num;
  }

  function wrongID() {
    const view = document.querySelector('.yourGithubID');
    view.innerText = 'Wrong ID :<';
  }

  function requestGitHub(str) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${str}`;
    xhr.open('GET', url, true);

    xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      xhr.status !== 200 ? wrongID() : hereYourGithubID(data.id);
    };
    xhr.send();
  }

  const input = document.querySelector('.githubID');

  input.focus();
  input.addEventListener('keydown', (e) => {
    e.defaultPrevented;
    const checkPressEnter = e.code === 'Enter';
    const checkSpace = input.value.trim().replace(/[^\w\s]/gi, '').length > 0;
    const removeSpace = input.value.trim().replace(/[^\w\s]/gi, '');

    function blockTeasing() {
      input.value = '';
      input.focus();
      alert('....?');
    }

    !checkPressEnter
      ? 0
      : !checkSpace
      ? blockTeasing()
      : requestGitHub(removeSpace);
  });
}

getGithubID();

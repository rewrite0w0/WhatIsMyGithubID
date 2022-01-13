function getGithubID() {
  function hereYourGithubID(num) {
    const view = document.querySelector('.yourGithubID');
    view.innerText = num;
  }

  function requestGitHub(str) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${str}`;
    xhr.open('GET', url, true);

    xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      xhr.status !== 200 ? console.warn('wrong id') : hereYourGithubID(data.id);
    };
    xhr.send();
  }

  const input = document.querySelector('.githubID');

  input.focus();
  input.addEventListener('keydown', (e) => {
    e.defaultPrevented;
    const checkPressEnter = e.code === 'Enter';
    const checkSpace = input.value.trim().replace(/\s/gi, '');

    if (checkPressEnter) {
      requestGitHub(checkSpace);
      input.value = '';
      input.focus();
    } else {
      input.focus();
    }
  });
}

getGithubID();
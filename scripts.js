document.addEventListener('DOMContentLoaded', function() {
    
const menuElement = document.getElementById('mediaL');
const bodyElement = document.getElementById('body-tag');
const mainElement = document.getElementById('main-tag');

menuElement.addEventListener('click', () => {
  const jsDivContainer = document.createElement('div');
  const jsTitleContainer = document.createElement('div');
  const jsBrandContainer = document.createElement('div');
  const jsImg = document.createElement('img');
  const jsTitle = document.createElement('h1');
  const jsDivChild = document.createElement('div');
  const jsDivBox1 = document.createElement('div');
  const jsDivBox2 = document.createElement('div');
  const jsDivBox3 = document.createElement('div');
  const jsDivBox4 = document.createElement('div');
  const jsDivBox5 = document.createElement('div');
  const jsCloseContainer = document.createElement('div');
  const jsCloseButton = document.createElement('button');

  bodyElement.appendChild(jsDivContainer);
  jsDivContainer.appendChild(jsTitleContainer);
  jsTitleContainer.appendChild(jsBrandContainer);
  jsBrandContainer.appendChild(jsImg);
  jsBrandContainer.appendChild(jsTitle);
  jsDivContainer.appendChild(jsDivChild);
  jsDivChild.appendChild(jsDivBox1);
  jsDivChild.appendChild(jsDivBox2);
  jsDivChild.appendChild(jsDivBox3);
  jsDivChild.appendChild(jsDivBox4);
  jsDivChild.appendChild(jsDivBox5);
  jsDivContainer.appendChild(jsCloseContainer);
  jsCloseContainer.appendChild(jsCloseButton);

  jsDivBox1.className = 'jsDivBox';
  jsDivBox2.className = 'jsDivBox';
  jsDivBox3.className = 'jsDivBox';
  jsDivBox4.className = 'jsDivBox';
  jsDivBox5.className = 'jsDivBox';

  bodyElement.id = 'test';

  jsBrandContainer.id = 'jsBrandContainer';
  jsImg.id = 'jsImg';
  jsTitle.id = 'jsTitle';
  jsDivContainer.id = 'jsDivContainer';
  jsDivChild.id = 'jsDivChild';
  jsTitleContainer.id = 'jsTitleContainer';
  jsCloseContainer.id = 'jsCloseContainer';
  jsCloseButton.id = 'jsCloseButton';

  jsImg.src = 'img/hatchback.png';

  jsTitle.textContent = 'Brand';
  jsDivBox1.textContent = 'Vehicles';
  jsDivBox2.textContent = 'After-sales';
  jsDivBox3.textContent = 'Dealers';
  jsDivBox4.textContent = 'Terms and Conditions';
  jsDivBox5.textContent = 'Privacy Policies';
  jsCloseButton.textContent = 'X';

  jsDivContainer.style.animation = 'fade-in 0.3s ease-in';
  mainElement.style.animation = 'body-fade 0.3s linear 0s 1 forwards';

  jsCloseButton.addEventListener('click', () => {
    mainElement.style.animation = 'fade-out 0.5s ease';
    jsDivContainer.style.animation = 'test 0.5s ease 0s 1 forwards'
    setTimeout(() => {
      jsDivContainer.remove();
    }, 500);
  });
});
  });



const createArticle = (title, info = '', map = '') => {
  const article = document.createElement('article');
  article.classList.add('article');

  const artTitle = document.createElement('header');
  artTitle.classList.add('article-header');
  artTitle.textContent = title;
  article.appendChild(artTitle);

  const artInfo = document.createElement('p');
  artInfo.classList.add('article-p');
  artInfo.textContent = info;
  article.appendChild(artInfo);

  const mapLoc = map;
  article.innerHTML += mapLoc;

  return article;
};

const contactLoad = () => {
  const content = document.getElementById('section-content');
  content.textContent = '';

  const phone = createArticle('Phone Number', '625-123-6547');
  content.appendChild(phone);

  const map = createArticle(
    'Location',
    '',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845118.1716643255!2d23.49195426169363!3d53.63305659478495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2smx!4v1611564201582!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  );

  content.appendChild(map);
};

export default contactLoad;

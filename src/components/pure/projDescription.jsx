import React from 'react';
import dompurify from "dompurify";



const Linkify = ({ children }) => {
  const isUrl = (word) => {
    const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    return word.match(urlPattern);
  };

  const addMarkup = (word) => {
    return isUrl(word)
      ? `<a  href="${word}"  rel="noopener noreferrer">${word}</a>`
      : `<span className="no-underline">${word}</span>`;
  };

  const words = children.split(" ");
  const formatedWords = words.map((w, i) => addMarkup(w));

  const html = dompurify.sanitize(formatedWords.join(" "));

  return <span dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />;
};

const ProjDescription = ({ descriptions }) => {

  

  return (
    <div className='container p-0 g-10'>
    <div className='proj-description-es mb-4'>
      {
        descriptions.filter(({ language }) => language === 'es')
        .map((text, index) => {
            return (
              <p className="whitespace" key={index.toString()}>
                <Linkify>{text.value}</Linkify>
              </p>
            )
          })
      }
    </div>
    <div className='proj-description-en text-secondary'>
      {
        descriptions.filter(({ language }) => language === 'en')
          .map((text, index) => {
            return (
              <p className="whitespace" key={index.toString()}>
                <Linkify>{text.value}</Linkify>
              </p>
            )
          })
      }
    </div>
    </div>
  );
};


ProjDescription.propTypes = {

};


export default ProjDescription;

// Получаем элемент по ID
const element = document.getElementById('myElement');

// Изменяем стиль элемента
element.style.color = 'red';
element.style.fontSize = '20px';

// Получаем значение атрибута
const attributeValue = element.getAttribute('class');
console.log(`Значение атрибута 'class': ${attributeValue}`);

// Добавляем класс к элементу
element.classList.add('new-class');

// Удаляем класс
element.classList.remove('old-class');

// Проверяем наличие класса
if (element.classList.contains('some-class')) {
    console.log('Элемент содержит класс some-class.');
} else {
    console.log('Элемент не содержит класс some-class.');
}

// Получаем все элементы с определенным классом
const elementsWithClass = document.querySelectorAll('.some-class');
console.log(elementsWithClass);

// Получаем первый элемент с определенным селектором
const firstElement = document.querySelector('.some-class');
console.log(firstElement);

// Получаем все элементы с определенным тегом
const divElements = document.getElementsByTagName('div');
console.log(divElements);

// Получаем родительский элемент
const parentElement = element.parentNode;
console.log(parentElement);

// Получаем следующий элемент
const nextSibling = element.nextElementSibling;
console.log(nextSibling);

// Получаем предыдущий элемент
const previousSibling = element.previousElementSibling;
console.log(previousSibling);

// Получаем дочерние элементы
const childNodes = element.childNodes;
console.log(childNodes);

// Получаем текстовое содержимое элемента
const textContent = element.textContent;
console.log(textContent);

// Меняем текстовое содержимое элемента
element.textContent = 'Новый текст';
console.log(element.textContent);

// Получаем HTML содержимое элемента
const innerHTML = element.innerHTML;
console.log(innerHTML);

// Меняем HTML содержимое элемента
element.innerHTML = '<span style="color: green;">Измененный текст</span>';
console.log(element.innerHTML);

// Получаем все элементы по классу
const elementsByClass = document.getElementsByClassName('some-class');
console.log(elementsByClass);

// Получаем первый элемент по классу
const firstElementByClass = document.getElementsByClassName('some-class')[0];
console.log(firstElementByClass);

// Получаем элемент по CSS-селекторам
const cssSelectedElement = document.querySelector('.some-class.some-child');
console.log(cssSelectedElement);

// Получаем все элементы по CSS-селекторам
const cssSelectedElements = document.querySelectorAll('.some-class > .some-child');
console.log(cssSelectedElements);

// Получаем элемент по названию тега
const namedElement = document.getElementsByTagName('a')[0];
console.log(namedElement);

// Получаем все элементы по названию тега
const namedElements = document.getElementsByTagName('a');
console.log(namedElements);

// Получаем элемент по имени
const namedFormElement = document.getElementsByName('username')[0];
console.log(namedFormElement);

// Получаем все элементы по имени
const namedFormElements = document.getElementsByName('username');
console.log(namedFormElements);

// Получаем все элементы по типу
const inputElements = document.getElementsByTagName('input');
console.log(inputElements);

// Получаем все элементы по типу
const formElements = document.forms[0].elements;
console.log(formElements);

// Получаем все элементы по типу
const labelElements = document.getElementsByTagName('label');
console.log(labelElements);

// Получаем все элементы по типу
const optionElements = document.getElementsByTagName('option');
console.log(optionElements);

// Получаем все элементы по типу
const selectElements = document.getElementsByTagName('select');
console.log(selectElements);

// Получаем все элементы по типу
const textareaElements = document.getElementsByTagName('textarea');
console.log(textareaElements);

// Получаем все элементы по типу
const buttonElements = document.getElementsByTagName('button');
console.log(buttonElements);

// Получаем все элементы по типу
const fieldsetElements = document.getElementsByTagName('fieldset');
console.log(fieldsetElements);

// Получаем все элементы по типу
const legendElements = document.getElementsByTagName('legend');
console.log(legendElements);

// Получаем все элементы по типу
const datalistElements = document.getElementsByTagName('datalist');
console:log(datalistElements);

// Получаем все элементы по типу
const optgroupElements = document.getElementsByTagName('optgroup');
console.log(optgroupElements);

// Получаем все элементы по типу
const outputElements = document.getElementsByTagName('output');
console.log(outputElements);

// Получаем все элементы по типу
const progressElements = document.getElementsByTagName('progress');
console.log(progressElements);

// Получаем все элементы по типу
const meterElements = document.getElementsByTagName('meter');
console.log(meterElements);

// Получаем все элементы по типу
const keygenElements = document.getElementsByTagName('keygen');
console.log(keygenElements);

// Получаем все элементы по типу
const textElements = document.getElementsByTag, 'text';
console.log(textElements);

// Получаем все элементы по типу
const commandElements = document.getElementsByTagName('command');
console.log(commandElements);

// Получаем все элементы по типу
const detailsElements = document.getElementsByTagName('details');
console.log(detailsElements);

// Получаем все элементы по типу
const summaryElements = document.getElementsByTagName('summary');
console.log(summaryElements);

// Получаем все элементы по типу
const markElements = document.getElementsByTagName('mark');
console.log(markElements);

// Получаем все элементы по типу
const areaElements = document.getElementsByTagName('area');
console.log(areaElements);

// Получаем все элементы по типу
const paramElements = document.getElementsByTagName('param');
console.log(paramElements);

// Получаем все элементы по типу
const sourceElements = document.getElementsByTagName('source');
console.log(sourceElements);

// Получаем все элементы по типу
const trackElements = document.getElementsByTagName('track');
console.log(trackElements);

// Получаем все элементы по типу
const canvasElements = document.getElementsByTagName('canvas');
console.log(canvasElements);

// Получаем все элементы по типу
const embedElements = document.getElementsByTagName('embed');
console.log(embedElements);

// Получаем все элементы по типу
const objectElements = document.getElementsByTagName('object');
console.log(objectElements);

// Получаем все элементы по типу
const paramElements = document.getElementsByTagName('param');
console.log(paramElements);

// Получаем все элементы по типу
const audioElements = document.getElementsByTagName('audio');
console.log(audioElements);

// Получаем все элементы по типу
const videoElements = document.getElementsByTagName('video');
console.log(videoElements);

// Получаем все элементы по типу
const pictureElements = document.getElementsByTagName('picture');
console.log(pictureElements);

// Получаем все элементы по типу
const codeElements = document.getElementsByTagName('code');
console.log(codeElements);

// Получаем все элементы по типу
const quoteElements = document.getElementsByTagName('quote');
console.log(quoteElements);

// Получаем все элементы по типу
const timeElements = document.getElementsByTagName('time');
console.log(timeElements);

// Получаем все элементы по типу
const mapElements = document.getElementsByTagName('map');
console.log(mapElements);

// Получаем все элементы по типу
const frameElements = document.getElementsByTagName('frame');
console.log(frameElements);

// Получаем все элементы по типу
const iframeElements = document.getElementsByTagName('iframe');
console.log(iframeElements);

// Получаем все элементы по типу
const figcaptionElements = document.getElementsByTagName('figcaption');
console.log(figcaptionElements);

// Получаем все элементы по типу
const figureElements = document.getElementsByTagName('figure');
console.log(figureElements);

// Получаем все элементы по типу
const appletElements = document.getElementsByTagName('applet');
console.log(appletElements);

// Получаем все элементы по типу
const captionElements = document.getElementsByTagName('caption');
console.log(captionElements);

// Получаем все элементы по типу
const marqueeElements = document.getElementsByTagName('marquee');
console.log(marqueeElements);

// Получаем все элементы по типу
const tableElements = document.getElementsByTagName('table');
console.log(tableElements);

// Получаем все элементы по типу
const tfootElements = document.getElementsByTagName('tfoot');
console.log(tfootElements);

// Получаем все элементы по типу
const theadElements = document.getElementsByTagName('thead');
console.log(theadElements);

// Получаем все элементы по типу
const tbodyElements = document.getElementsByTagName('tbody');
console.log(tbodyElements);

// Получаем все элементы по типу
const trElements = document.getElementsByTagName('tr');
console.log(trElements);

// Получаем все элементы по типу
const tdElements = document.getElementsByTagName('td');
console.log(tdElements);

// Получаем все элементы по типу

import poem1 from "@/shared/images/poem1.png";
import poem2 from "@/shared/images/poem2.png";
import poem3 from "@/shared/images/poem3.png";
import poemBack1Big from "@/shared/images/poem1_back_1024.png";
import poemBack1Small from "@/shared/images/poem1_back_480.png";
import poemBack2Big from "@/shared/images/poem2_back_1024.png";
import poemBack2Small from "@/shared/images/poem2_back_480.png";
import poemBack3Big from "@/shared/images/poem3_back_1024.png";
import poemBack3Small from "@/shared/images/poem3_back_480.png";

export type poemType = typeof poemsArr[number];

export const poemsArr = [
  {
    title: "У меня будет долгая ночь…",
    text: `У меня будет долгая ночь…<br/>
Может…, я напишу три стиха,<br/>
Если муза придёт мне помочь –<br/>
Я шаги за стеной услыхал…<br/>
<br/>

У меня будет долгая ночь…<br/>
Час за часом, строка за строкой…<br/>
Это всё уже было… Точь-в-точь…<br/>
Мысли скомканы… Слог никакой…<br/>
<br/>
У меня будет долгая ночь …<br/>
Но не сплю всё же я не с проста –<br/>
Я хочу, отодвинув всё прочь,<br/>
До утра белый лист исписать…<br/>
<br/>
У меня будет долгая ночь…<br/>
Может…, я напишу три стиха,<br/>
Если муза придёт мне помочь,<br/>
Не сбежав, как всегда, впопыхах…<br/>
    <br/>
    <span >2023/09/30</span>
`,
    url: "U_MENYA_BUDET_DOLGAYA_NOCH",
    image: poem1,
    imageBackBig: poemBack1Big.src,
    imageBack: poemBack1Small.src

  },

  {
    title: "Сон",
    text: `Закат. Стемнело. Вечер поздний наступает.<br/>
Я, взглядом вдумчиво в ночную даль застыв,<br/>   
И в одночасье обо всём забыв,<br/>
В раздумье том в очередной раз засыпаю.
<br/>
<br/>
Во сне придёт ко мне измученная фея —<br/>
Волшебной палочкой заботливо взмахнув,<br/>
Взглянув сочувственно, и, тяжело вздохнув —<br/>
Печаль и грусть мою тотчас она развеет.
<br/>
<br/>
Приснится снова мне то самое виденье,<br/>
Что видел я впервые будто век назад.<br/>
С тех пор живёт во мне, чему я очень рад,<br/>
Мечтою став навек в моём воображении.
<br/>
<br/>
В том сне её я встретил — это было чудо…<br/>
Её изяществом я тут же был согрет.<br/>
Во мгле ночной неповторимый её свет<br/>
Сразил меня сполна, сверкая изумрудом.
<br/>
<br/>                                                                                               
Но ночь прошла… Она исчезла... Я в забвении…<br/>
Ушла и фея… Улетела прочь,<br/>
Чтоб всё однажды повторить точь-в-точь,<br/>
Как вновь увижу того света излучение…
<br/>
    <br/>
    <span >2021/01/17</span>
`,
    url: "SON",
    image: poem2,
    imageBackBig: poemBack2Big.src,
    imageBack: poemBack2Small.src

  } ,{
    title: "О вдохновении",
    text: `Никто, ничто, никак, ничем
    <br/>
    Не вдохновляли меня прежде.
    <br/>
    Но Вы, право, особенны –
    <br/>
    Красивы без или в одежде.
    <br/>
    <br/>
    
    Ведь рядом с Вами в тот же миг
    <br/>
    Я обретаю вдохновенье.
    <br/>
    Не скрою я, что у меня
    <br/>
    Есть к Вам огромное влеченье.
    <br/>
    <br/>
    
    Я к Вам, ей-богу, буду впредь
    <br/>
    Всегда, всю жизнь с огромным сердцем.
    <br/>
    Я рад бы был, если бы Вы
    <br/>
    Пошли б со мной, с шикарным перцем.
    <br/>
    <br/>
    
    Для Вас готов на много я -
    <br/>
    Вы просветите хоть рентгеном.
    <br/>
    Я честный парень, без гнилья,
    <br/>
    С большой душой, с не малым …
    <br/>
    <br/>
    <span >2021/01/17</span>
    `,
    url: "o_vdokhnovenii",
    image: poem3,
    imageBackBig: poemBack3Big.src,
    imageBack: poemBack3Small.src
  }
];

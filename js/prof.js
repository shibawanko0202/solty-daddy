"use strict"


// ↓↓ プロフ画面の✖ボタン他の表示切り替え ↓↓ ---------------

  const prof_top = document.getElementById("prof_top");
  const prof_header = document.getElementById("prof_header");

  // 位置を確認してクラスを制御
  function top_button(){
    if(prof_top.getBoundingClientRect().y < -100){
      prof_header.classList.add("gray");
    } else {
      prof_header.classList.remove("gray");
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",top_button);

// ↑↑ プロフ画面の✖ボタン他の表示切り替え ↑↑ ---------------


// ↓↓ ハートアニメーション ↓↓ ------------------

  const favorite = document.getElementById("favorite");
  const love = document.getElementById("love");
  // const prof_img = document.getElementsByClassName("prof_mainimag");

  let love_current = false;

  function heartfull(){
    if(!love_current){
      love_current = true;
      favorite.classList.add("love");
      love.classList.add("love");
    } else {
      love_current = false;
      favorite.classList.remove("love");
      love.classList.remove("love");
    };
  };
  favorite.addEventListener('click',heartfull);
  love.addEventListener('click',heartfull);

// ↑↑ ハートアニメーション ↑↑ ------------------


// ↓↓ 有料コンテンツ用アナウンス ↓↓ ---------------------- 

const attention = document.getElementById("attention");
const paid_contents = document.getElementsByClassName("paid_content");

function taboo(e){
  e.preventDefault();
};


for(let i = 0;i < paid_contents.length;i++){
  paid_contents[i].addEventListener('click',()=>{
    attention.classList.remove("hidden");
    document.addEventListener('mousewheel', taboo, { passive: false });
    document.addEventListener('touchmove', taboo, { passive: false });
  });
};

attention.addEventListener('click',()=>{
  attention.classList.add("hidden");
  document.removeEventListener('mousewheel', taboo, { passive: false });
  document.removeEventListener('touchmove', taboo, { passive: false });
});

// ↑↑ 有料コンテンツ用アナウンス ↑↑ ---------------------- 


// ↓↓ プロフ入力 ↓↓ ------------------


  top_name.innerHTML = persons[getParam("p")].name;
  prof_name.innerHTML = persons[getParam("p")].name;
  mainimg.style.backgroundImage = `url(${persons[getParam("p")].img})`;
  hour.innerHTML = persons[getParam("p")].login;
  oneword.innerHTML = persons[getParam("p")].oneword;
  age_place.innerHTML = `${persons[getParam("p")].age}歳/${persons[getParam("p")].place}`;
  prof_name.innerHTML = persons[getParam("p")].name;
  introduction.innerHTML = persons[getParam("p")].introduction;
  height.innerHTML = `${persons[getParam("p")].height}cm`;
  figure.innerHTML = persons[getParam("p")].figure;
  alcohol.innerHTML = persons[getParam("p")].alcohol;
  smoking.innerHTML = persons[getParam("p")].smoking;
  work.innerHTML = persons[getParam("p")].work;
  wish.innerHTML = persons[getParam("p")].wish;
  

// ↑↑ プロフ入力 ↑↑ ------------------


// ↓↓ 矢印で遷移 ↓↓ ------------------

  const arrow_back = document.getElementById("arrow_back");
  const arrow_forward = document.getElementById("arrow_forward");

  let person_current = Number(getParam("p"));

  let person_back = person_current - 1;
  let person_forward = person_current + 1;

  if(person_back < 0){
    person_back = persons.length - 1;
  };
  if(person_forward > (persons.length - 1) ){
    person_forward = 0;
  };

  arrow_back.href = `profile.html?p=${person_back}`;
  arrow_forward.href = `profile.html?p=${person_forward}`;

// ↑↑ 矢印で遷移 ↑↑ ------------------


// ↓↓ 勝也の場合のみdtの変更 ↓↓ ------------------

  const work_dt = document.getElementById("work_dt");
  const wish_dt = document.getElementById("wish_dt");

  if(person_current == (persons.length - 1)){
    work_dt.innerHTML = "年収";
    wish_dt.innerHTML = "資産";
  };

// ↑↑ 勝也の場合のみdtの変更 ↑↑ ------------------


// ↓↓ 状態に応じて表示変更 ↓↓ ------------------

if(persons[getParam("p")].login == last_login[0]){
  hour.classList.add("online");
};
if(persons[getParam("p")].proof){
  proof.classList.add("on");
};

// ↑↑ 状態に応じて表示変更 ↑↑ ------------------
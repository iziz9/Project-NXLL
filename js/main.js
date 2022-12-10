import { doc } from "prettier";
import { getData, getLogin, getLogOut } from "./getdata.js";
// import { completeLogin } from "./test.js";
import { router } from "./route.js";
import { deliveryEl, returnEl, deliveryDes, returnDes, mouseenter, mouseleave } from './footer.js'
import { joinForm, logInForm, myOrderForm, myShoppingForm, mainForm, userInfoForm } from "./body.js";

// 변수
const root = document.querySelector('main')

// function loginNjoin() {
//   loginRender()
//   joinRender()
// }

function renderMain() {
  root.innerHTML = mainForm()
}

// 로그인 페이지 해시 값 + 화면 변경
function loginRender() {
  root.innerHTML = logInForm()
  sendLogin()
}

// 회원가입 페이지 해시 값 + 화면 변경
function joinRender() {
  root.innerHTML = joinForm();
  sendSignUp();
}

// 회원가입 처리 핸들러
function sendSignUp() {
  const formTag = document.querySelector('#form-tag')

  formTag.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idValue = document.querySelector('.id-input').value
    const pwValue = document.querySelector('.pw-input').value
    const nameValue = document.querySelector('.name-input').value

    const res = await getData(idValue, pwValue, nameValue, null)
    document.cookie = `accessToken=${res.accessToken}; max-age=60`
    if (res.user.email) {
      return root.innerHTML = logInForm()
    } else {
      alert('정보를 다시 입력해 주세요')
    }
    e.stopPropagation();
  })
}

// 로그인 요청 핸들러 (localStorage 이름, 토큰값 추가)
function sendLogin() {
  const loginForm = document.querySelector('#login-form')
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const idValue = document.querySelector('.signin-id-input').value
    const pwValue = document.querySelector('.signin-pw-input').value
    const res = await getLogin(idValue, pwValue)
    if (res.user.email) {
      console.log(res)
      const userName = res.user.displayName
      const accessToken = res.accessToken
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("userName", userName)
      completeLogin()
      location.href = '/'
    } else {
      alert('로그인 정보를 확인해 주세요.')
    }
    e.stopPropagation();
  })
}

// 로그아웃 핸들러
function logOut() {
  const logOutBtn = document.querySelector('.logOutBtn')
  logOutBtn.addEventListener('click', async () => {
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken)
    const res = await getLogOut(accessToken)
    if (res) {
      localStorage.removeItem('accessToken'),
        localStorage.removeItem('userName')
    }
    location.href = '/'
  })
}

// userName 있을 때 로그인 상태 유지 핸들러
function completeLogin() {
  const li = document.querySelector('.signUpsignIn')
  const userName = localStorage.getItem('userName')
  li.innerHTML = /*HTML*/ `
    <p><strong>${userName}</strong>님, 환영합니다.</p>
    <a class="logOutBtn">로그아웃</a>
    `
  logOut()
}

// myshop 렌더링
function renderMyShop() {
  root.innerHTML = myShoppingForm()
}

// myorder 렌더링
function renderMyOrder() {
  root.innerHTML = myOrderForm()
}

// myorder 렌더링
function renderUserInfo() {
  root.innerHTML = userInfoForm()
}

// 메인 스와이퍼
const swiper1 = new Swiper('.mainSwiper', {
  effect: 'fade',
  loop: true,
  autoplay: true,
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// 키보드 스와이퍼
const swiper2 = new Swiper('.keyboardSwiper', {
  effect: 'fade',
  loop: true,
  autoplay: true,
  speed: 1000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// footer 함수
mouseenter()
mouseleave()

// router
window.addEventListener('hashchange', router)
router();

// 로그인 로그아웃 확인
(() => {
  // localStorage.length === 0 ? loginNjoin() : completeLogin();
  if (localStorage.length > 0) {
    completeLogin()
  } else return
})();

export { loginRender, joinRender, logOut, renderMyShop, renderMyOrder, renderMain, renderUserInfo }
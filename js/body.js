// main
function mainForm() {
  const mainBody = [];
  const swiperArrowBtn = `
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  `

  mainBody.push(`
    <!-- 메인 스와이퍼 -->
    <div class="swiper mainSwiper">
      <ul class="swiper-wrapper">
  `)

  for (let i = 1; i <= 7; i++) {
    mainBody.push(`
      <li class="swiper-slide"><a href="#"><img src="../images/slide1-banner${i}.jpg" alt=""></a></li>
    `)
  }

  mainBody.push(`
      </ul>
      <div class="swiper-pagination"></div>
      ${swiperArrowBtn}
    </div><!-- 메인 스와이퍼 -->
    <!-- 키보드 상품목록 -->
    <section class="keyboard mt70">
      <h1>KEYBOARD</h1>
      <ul class="inner block3">
  `)

  mainBody.push(`
  </ul>
  </section><!-- 키보드 상품목록 -->
  <!-- 마우스 배너 -->
  <section class="keyboard-banner mt70">
    <div class="swiper keyboardSwiper">
      <ul class="swiper-wrapper">
        <li class="swiper-slide"><a href="#"><img src="./images/slide2-banner1.jpg" alt=""></a></li>
        <li class="swiper-slide"><a href="#"><img src="./images/slide2-banner2.gif" alt=""></a></li>
      </ul>
      ${swiperArrowBtn}
    </div>
    <h3>디자인 키보드는 엑토</h3>
    <p>편의성, 디자인, 기능을 모두 갖춘 <br /> 레트로 감성의 기계식 키보드가 곧 출시됩니다.</p>
    <a href="#" class="blackBtn">제품 모두 보기</a>
  </section><!-- 마우스 배너 -->
  <!-- 마우스 상품목록 -->
  <section class="mouse mt70">
    <h1>MOUSE</h1>
    <ul class="inner block3">
    </ul>
  </section><!-- 마우스 상품목록 -->
  <!-- 마우스 배너 -->
  <section class="mouse-banner mt70">
    <img src="./images/mouseBanner.gif" alt="">
    <h3>편안한 그립감의 마우스</h3>
    <p>인체공학적 설계로 편안한 그립감과 엑토만의 <br /> 감각적인 디자인의 마우스를 만나보세요.</p>
    <a href="#" class="blackBtn">제품 모두 보기</a>
  </section><!-- 마우스 배너 -->
  <!-- 데스크셋업 배너 -->
  <section class="deskSetup mt70">
    <img src="./images/deskSetup.jpg" alt="">
    <h3>데스크셋업의 완성</h3>
    <p>당신의 데스크를 더욱 업그레이드 시켜 줄 <br /> 다양한 기기들을 만나보세요.</p>
    <a href="#" class="blackBtn">제품 모두 보기</a>
  </section><!-- 데스크셋업 배너 -->
  <!-- 뉴아이템 상품목록 -->
  <section class="newItem mt70">
    <h1>NEW ITEM</h1>
    <ul class="inner block3">
    </ul>
  </section><!-- 뉴아이템 상품목록 -->
  <!-- 리뷰 영역 -->
  <section class="review">
    <h1>REVIEW</h1>
    <ul class="inner block5">
`)

  for (let i = 1; i <= 10; i++) {

    mainBody.push(
      `
      <li>
      <a href="#">
        <div class="imgBox">
          <span class="icon insta"></span>
          <img src="./images/review${i}.jpg" alt="이미지 타이틀">
        </div>
        <div class="txtBox">
          <div class="reviewBox">
            <p class="comment">이쁜 집에 다 있던 그 엑토키보드가 우리 집에도 짠! 우리 집도 그럼 이쁜 집? ㅋㅋㅋ</p>
            <p class="viewerId">Reviewer ID</p>
          </div>
          <div class="productBox">
            <img src="./images/retroMiniBeige.jpeg" alt="">
            <div class="productInfo">
              <p class="productName">엑토 레트로 미니 블루투스 키보드</p>
              <p class="productRating">리뷰 <span class="reviewRate">542</span> 평점 <span class="gradeRate">4.9</span>
              </p>
            </div>
          </div>
        </div>
      </a></li>
    `)
  }

  mainBody.push(`
      </ul>
    </section><!-- 리뷰 영역 -->
  `
  )

  return mainBody.join('')
}

// 회원가입 페이지
function joinForm() {
  return /* html */`
    <form id="form-tag">
      <ul class="table-area">
          <h2>JOIN - US</h2>
          <p>아래 정보를 꼼꼼히 입력하세요.</p>
          <li class="base">
          <h2>BASE <span>기본 정보를 입력하세요.</span> <span class="compulsory"><img class="require" src="../images/icons/required.png" alt=""> 필수입력사항</span></h2>
          <table>
              <colgroup>
              <col style="width:150px" />
              <col style="width:auto"/>
          </colgroup>
          <tbody>
              <tr>
              <th scope="row">아이디<img class="require" src="../images/icons/required.png" alt=""></th>
              <td>
                  <input type="text" class="id-input">
                  (영문소문자/숫자, 4~16자)
              </td>
              </tr>
              <tr>
              <th>비밀번호<img class="require" src="../images/icons/required.png" alt=""></th>
              <td>
                  <input type="password" class="pw-input">
                  (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인<img class="require" src="../images/icons/required.png" alt=""></th>
                <td>
                  <input type="password" class="pw-input-2">
                </td>
              </tr>
              <tr>
                <th>이름<img class="require" src="../images/icons/required.png" alt=""></th>
                <td>
                  <input type="text" class="name-input">
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <button id="joinBtn" class="joinBtn hover-navy" type="submit"><i class="fa-solid fa-check"></i>회원가입</button>
      </ul>
    </form>
  `
}

// 로그인 페이지
function logInForm() {
  return /* html */`
    <form id="login-form">
      <ul class="logIn-area">
        <h2>LOGIN</h2>
        <li class="logIn-area__input">
          <input type="text" class="signin-id-input" placeholder="아이디">
          <input type="password" class="signin-pw-input" placeholder="비밀번호">
        </li>
        <li class="logIn-area__saveId">
          <input type="checkbox" id="saveId">
          <label for="saveId">아이디저장</label>
        </li>
        <button class="logInBtn" type="submit">로그인</button>
        <li class="logIn-area__find">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <a href="#join">가입하기</a>
        </li>
      </ul>
    </form>
  `
}

// 마이쇼핑 페이지
function myShoppingForm(price) {
  const information = /* html */`
    <div class="information">
      <div class="inner">
        <div class="information-item">
          <div class="thumbnail">
            <img src="https://acttomall.com/_sp/_image/user.png" alt="">
            <div class="description">
              <p>저희 쇼핑몰을 이용해주셔서 대단히 감사합니다.<br />
                <strong class="txtEm">회원 가입</strong>을 하시면 각종 다양한 혜택을 받으실 수 있습니다.
              </p>
            </div>
          </div>
          <div class="btn-group">
            <p class="message">로그인이 필요해요</p>
            <a href="#login" class="btn__login">
              <i class="fas fa-sm ver-0 fa-power-off"></i>
              &nbsp;로그인
            </a>
            <a href="#join" class="btn__join">
              <i class="fas fa-sm ver-0 fa-plus"></i>
              &nbsp;회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
    `
  const goToLogin = () => {
    return localStorage.accessToken ? '#userinfo' : '#login'
  }
  const chargeLookUp = () => {
    return localStorage.accessToken ? `${price}` : `0`
  }

  return /* html */ `
  <div class="title-box" scope="sub">
      <h2 class="title-box__text">MY-SHOP</h2>
      <p class="title-box__subtext">나의 쇼핑내역을 한눈에 확인하세요.</p>
  </div>
  ${localStorage.accessToken ? '' : information}
    <!-- ORDER-LIST -->
    <div class="order-list">
      <div class="inner">
        <a href="#myorder" class="order-list__item">
          <p class="icon order"></p>
          <p>주문 내역</p>
          <p class="price">0건</p>
          <i class="line--hover"></i>
        </a>
        <a href="#" class="order-list__item">
          <p class="icon mileage"></p>
          <p>계좌 잔액</p>
          <p class="price">${chargeLookUp()}원</p>
          <i class="line--hover"></i>
        </a>
      </div>
    </div>
    <!-- QUICK-MENU -->
    <div class="quick-menu">
      <div class="inner">
        <div class="title-box" scope="totals">
          <span class="title-box__text">MY QUICK MENU</span>
          <span class="title-box__subtext">나의 주문처리 현황</span>
        </div>
      </div>
      <div class="inner">
        <div class="quick-menu__box">
          <div class="quick-menu__item">
            <span class="icon order"><i></i></span>
            <span class="quick-menu__subject">ORDER</span>
            <span class="quick-menu__title"><strong>주문내역 조회</strong>
              고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.
            </span>
            <span class="quick-menu__linked"><a href="#myorder" class="myOrder" targer="_blank">조회</a></span>
          </div>
          <div class="quick-menu__item">
            <span class="icon mileage"><i></i></span>
            <span class="quick-menu__subject">PROFILE</span>
            <span class="quick-menu__title"><strong>회원 정보</strong>
              회원이신 고객님의 개인정보를 관리하는 공간입니다.
            </span>
            <span class="quick-menu__linked"><a href=${goToLogin()}>조회</a></span>
          </div>
        </div>
        <div class="order-state">
          <div class="order-state__box">
            <a class="order-state__item">
              <p class="count">0</p>
              <p class="state">취소</p>
              <i class="line--hover"></i>
            </a>
            <a class="order-state__item">
              <p class="count">0</p>
              <p class="state">완료</p>
              <i class="line--hover"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

// 구매 내역 페이지
function myOrderForm() {
  return /* html */ `
    <div class="title-box" scope="sub">
      <p class="title-box__text">MY-ORDER</p>
      <p class="title-box__subtext">고객님의 주문내역 입니다.</p>
    </div>
    <div class="tab-menu myorder">
      <div class="inner">
        <ul>
          <li class="selected"><a href="#">주문 내역 조회 <span>(2)</span></a></li>
          <li><a href="#">취소신청 내역 <span>(1)</span></a></li>
          <li><a href="#">과거주문(확정) 내역 <span>(2)</span></a></li>
        </ul>
      </div>
    </div>
    <!-- INFOMATION MYORDER -->
    <div class="information myorder">
      <div class="inner">
        <div class="information-item">
          <div class="thumbnail">
            <img src="https://acttomall.com/_sp/_image/svg/order.svg" alt="">
            <div class="description">
              <div class="title-box" scope="totals">
                <span class="title-box__text">주문조회 안내</span>
              </div>
              <div class="description__help">
                <p>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</p>
                <p>취소 신청은 주문신청 확정 전까지 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- INFORMATION MYORDER -->
    <!-- MYORDER-LIST -->
    <div class="myorder-list">
      <div class="inner">
        <div class="title-box myorder" scope="order">
          <span class="title-box__text">MY ORDER</span>
          <span class="title-box__subtext">주문 상품 정보</span>
        </div>
      </div>
      <div class="inner">
        <table>
          <caption>주문 상품 정보</caption>
          <colgroup>
            <col style="width: 135px;">
            <col style="width: 80px;">
            <col style="width: auto;">
            <col style="width: 61px;">
            <col style="width: 111px;">
            <col style="width: 111px;">
            <col style="width: 111px;">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">주문일자 <br /> [주문번호]</th>
              <th scope="col">이미지</th>
              <th scope="col">상품정보</th>
              <th scope="col">수량</th>
              <th scope="col">상품구매금액</th>
              <th scope="col">주문처리상태</th>
              <th scope="col">취소/확정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="date">
                <p>2022-12-08</p>
                <a href="#" class="order-number">
                  20221208-0000123
                </a>
                <a href="#" class="">주문취소</a>
              </td>
              <td class="thumb">
                <a href="#">
                  <img src="https://acttomall.com/web/product/medium/202211/ce2cf7367043104db47c1d1355065bcb.jpg"
                    alt="상품 사진">
                </a>
              </td>
              <td class="product">
                <strong class="name">
                  <a href="#">상품명 자리 스피드 타입 C to LAN 어댑터</a>
                </strong>
                <p class="option">[옵션: LAN-04그레이]</p>
              </td>
              <td class="quantity">1</td>
              <td class="price">21,900원</td>
              <td class="state">
                <p>주문 신청중</p>
              </td>
              <td class="decision">
                <p>-</p>
              </td>
            </tr>
            <tr>
              <td class="date">
                <p>2022-12-08</p>
                <a href="#" class="order-number">
                  20221208-0000123
                </a>
                <a href="#" class="">주문취소</a>
              </td>
              <td class="thumb">
                <a href="#">
                  <img src="https://acttomall.com/web/product/medium/202211/ce2cf7367043104db47c1d1355065bcb.jpg"
                    alt="상품 사진">
                </a>
              </td>
              <td class="product">
                <strong class="name">
                  <a href="#">상품명 자리 스피드 타입 C to LAN 어댑터</a>
                </strong>
                <p class="option">[옵션: LAN-04그레이]</p>
              </td>
              <td class="quantity">1</td>
              <td class="price">21,900원</td>
              <td class="state">
                <p>주문 신청중</p>
              </td>
              <td class="decision">
                <p>-</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div><!-- MYORDER-LIST -->
  `
}

// 회원 정보 관리 페이지
function userInfoForm(userId, userName) {
  return /* html */`
  <form>
    <ul class="table-area">
      <h2>MODIFY</h2>
      <p>아래 정보를 꼼꼼히 입력하세요.</p>
      <li class="base">
        <h2>BASE <span>수정 정보를 입력하세요.</span></h2>
        <table>
          <colgroup>
            <col style="width:150px" />
            <col style="width:auto"/>
          </colgroup>
          <tbody>
            <tr>
            <th scope="row">아이디</th>
            <td>${userId}</td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input type="text" class="user-name" value=${userName} />
              </td>
            </tr>
            <tr>
              <th>기존 비밀번호</th>
              <td>
                <input type="password" class="old-pw-input" minlength="8" maxlength="16" />
                (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)
              </td>
            </tr>
            <tr>
              <th>새로운 비밀번호</th>
              <td>
                <input type="password" class="new-pw-input" minlength="8" maxlength="16" />
                (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <button id="editBtn" class="editBtn hover-navy" type="submit"><i class="fa-solid fa-check"></i>회원 정보 수정</button>
    </ul>
  </form>
  `
}

// 회원 정보 관리 계좌
function userAccountForm(totalBalance) {
  return /* html */ `
  <form>
    <ul class="table-area">
      <li class="account">
      <h2>BANK INFO <span>계좌 정보를 확인하세요.</span></h2>
      <table>
        <colgroup>
        <col style="width:150px" />
        <col style="width:auto"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">보유 계좌</th>
            <td class="bank-charge">
              <select id="bank-name">
                <option value="default">은행 이름</option>
                <option value="null" class="no-bank">없음</option>
              </select>
              <span class="charge"></span>
              <button type="button" class="cancel-account hover-navy hidden">계좌 해지</button>
            </td>
          </tr>
          <tr>
            <th class="account-charge">전체 계좌 잔액</th>
            <td>
              <span class="charge-num">${totalBalance}</span>
              <span class="won">원</span>
            </td>
          </tr>
          <tr>
            <th>계좌 추가</th>
            <td>
              <select id="add-account">
                <option value="default">은행 이름</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>전화 번호</th>
            <td>
              <input type="number" class="phone-number-input"> - <input type="number" class="phone-number-input"> - <input type="number" class="phone-number-input">
            </td>
          </tr>
          <tr>
            <th>계좌 번호</th>
            <td class='account-number-box'>
              <input type="number" class="account-number-input"> - <input type="number" class="account-number-input"> - <input type="number" class="account-number-input"> - <input type="number" class="account-number-input">
            </td>
          </tr>
          </tbody>
        </table>
      </li>
      <button id="accountBtn" class="accountBtn hover-navy" type="submit"><i class="fa-solid fa-check"></i>계좌 정보 수정</button>
    </ul>
  </form>
  `
}

// 상품 상세페이지
function detailForm(productInfo) {
  const main = document.querySelector('main')

  main.addEventListener('click', ({ target }) => {
    const buyBtn = document.querySelector('.buy-btn')
    const cartBtn = document.querySelector('.cart-btn')
    // let cartList = []
    const pdId = productInfo.id

    if (target.closest('.tab-menu')) {
      const topBanner = document.querySelector('.top-banner')
      const el = target['name']
      const nameEl = document.querySelector(`.${el}`)
      const scrollH = nameEl.getBoundingClientRect().top - topBanner.offsetHeight
      scrollTo({ left: 0, top: window.pageYOffset + scrollH, behavior: 'smooth' })
    }

    let cartList = []
    let count = 0
    // 객체[key] = value
    // if (cartList[productInfo.id]) {
    //   cartList += cartList[productInfo.id] = count
    // }
    cartList[productInfo.id] = count
    localStorage.setItem('cart', JSON.stringify(cartList))
    const qwer = JSON.parse(localStorage.cart)
    // console.log(qwer)


    // 카트에 상품 담기 (localstorage.cart에 상품id 추가)
    function addCart() {
      cartList.push(productInfo.id)
      localStorage.setItem('cart', JSON.stringify(cartList))
    }

    if (target === cartBtn) {
      // if (!localStorage.cart) addCart()
      // else {
      // const pdId = productInfo.id
      cartList[productInfo.id] = count
      console.log(cartList)
      cartList = [...JSON.parse(localStorage.cart)]
      // addCart()
      // }
      // const modalPayment = document.querySelector('.modal-payment')
      // console.log(modalPayment)
      // modalPayment.classList.add('active')
    }
  })

  if (productInfo.thumbnail === null || productInfo.thumbnail === undefined) {
    productInfo.thumbnail = './images/preparingProduct.jpg'
  }

  const discountValue = Math.floor(((Math.random() * 9) + 1)) * 8

  return /* html */`
  <div class="page-nav">
    <div class="inner">
      <a href="/">HOME</a>
      <a href="#">${productInfo.tags}</a>
    </div>
  </div>
  <!-- PRODUCT-DETAIL -->
  <div class="product-detail">
    <div class="product-detail__header">
      <div class="inner">
        <div class="product-thumbnail">
          <img src="${productInfo.thumbnail}" alt="대표이미지">
        </div>
        <div class="product-order">
          <div class="product-summary">
            <div class="product-summary__title">
              <span>${productInfo.description}</span>
              <p>${productInfo.title}</p>
              <div class="priceBox">
                <span class="discount">${productInfo.price.toLocaleString()}원</span>
                <span class="price">${(Math.floor(Number(productInfo.price) * (100 - discountValue) / 100).toLocaleString())}원</span>
                <span class="salePercent">${discountValue}% SALE</span>
              </div>
            </div>
            <div class="product-summary__info">
              <p class="info-title">상품 정보</p>
              <p><em>상품 설명</em> <span>${productInfo.description}</span></p>
              <p><em>상품 포함 태그</em> <span style="color:#555;">${productInfo.tags}</span></p>
              <p><em>배송비</em> <span style="color:red;">무료</span></p>
              <p><em>판매 상태</em> <span>${productInfo.isSoldOut === true ? '판매중' : '품절'}</span></p>
            </div>
            <div class="btn-group">
              <a href="/#payment" class="buy-btn">바로 구매하기</a>
              <a class="cart-btn"><i class="fas fa-sm ver-0 fa-plus"></i>장바구니</a>
            </div>
            <div class="delivery-info">
              <p>제주도 및 도서산간 지역은 배송료 3,000원이 추가됩니다</p>
              <p>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</p>
              <p>주문수량 안내: 최소주문수량 1개 이상</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-detail__body">
      <ul class="tab-menu detail">
        <li><a name="product-detail__header">상품구매</a></li>
        <li><a name="product-detail__body">상세정보</a></li>
      </ul>
      <div class="inner">
        <div class="product-detail__img">
          <img src="${productInfo.photo}" alt="">
        </div>
      </div>
    </div>
  </div><!-- PRODUCT-DETAIL -->
  <!-- MODAL-PAYMENT -->
  <div class="modal-payment">
    <div class="modal-payment__header">
      <h3>장바구니 담기</h3>
      <span>물품을 미리 확인하세요</span>
      <button>닫기 버튼</button>
    </div>
    <div class="modal-payment__body">
      <div class="modal-payment__title">
        <em>CART - LIST</em>
        <span class="subtext">내 장바구니 목록입니다.</span>
        <span class="total">총 <strong>3</strong>개의 물품</span>
      </div>
      <div class="modal-payment__list">
        <div class="modal-payment__item">
          <div class="thumb">
            <img src="/images/christmasGift.jpg" alt="상품 대표이미지">
          </div>
          <div class="description">
            <p class="name">
              [크리스마스 증정 이벤트] 엑토 레트로 미니 블루투스 키보드 B303 엑토 레트로 미니 블루투스 키보드 B303
            </p>
            <p class="delivery-fee">배송비 무료</p>
          </div>
          <div class="price">
            <p>49,900 원</p>
          </div>
        </div>
        <div class="modal-payment__item">
          <div class="thumb">
            <img src="/images/christmasGiftMini1.jpg" alt="상품 대표이미지">
          </div>
          <div class="description">
            <p class="name">
              [크리스마스 증정 이벤트] 엑토 레트로 미니 블루투스 키보드 B303
            </p>
            <p class="delivery-fee">배송비 무료</p>
          </div>
          <div class="price">
            <p>49,900 원</p>
          </div>
        </div>
      </div>
      <div class="pagination">
      <button class="pagination--control"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button>
      <div class="pagination--page">
        <ul>
          <li class="active">1</li>
          <li>2</li>
        </ul>
      </div>
      <button class="pagination--control">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </button>
    </div>
    </div>    
    <div class="modal-payment__footer">
      <span>* 쇼핑을 계속하시려면 이 창을 닫아주시길 바랍니다.</span>
      <a href="#" class="btn-buy"><i class="fas fa-check"></i>바로 구매하기</a>
    </div>
  </div><!-- MODAL-PAYMENT -->
  `
}

function paymentForm() {
  return /* html */ `
   <div class="title-box" scope="sub">
      <p class="title-box__text">ORDER - FORM</p>
      <p class="title-box__subtext">나의 장바구니 내역</p>
    </div>
    <div class="order-form">
      <div class="inner">
        <ul>
          <li><i class="fa-solid fa-shirt"></i>CART LIST</li>
          <li class="selected"><i class="fa-regular fa-file-lines"></i>ORDER FORM</li>
          <li><i class="fa-brands fa-cc-visa"></i>PAYMENT</li>
          <li><i class="fa-regular fa-face-smile"></i>COMPLETE</li>
        </ul>
      </div>
    </div>
    <ul class="table-area">
      <li class="product-info">
        <h2>PRODUCT <span>주문 상품 정보</span></h2>
        <table>
          <colgroup>
            <col style="width: 40px"/>
            <col style="width: 80px"/>
            <col style="width: auto"/>
            <col style="width: 98px"/>
            <col style="width: 75px"/>
            <col style="width: 85px"/>
            <col style="width: 98px"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">이미지</th>
              <th scope="col">상품 정보</th>
              <th scope="col">판매가</th>
              <th scope="col">수량</th>
              <th scope="col">배송비</th>
              <th scope="col">합계</th>
            </tr>
          </thead>
          <tbody class="products">
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td colspan="6">
                상품 구매 금액 = 합계 :
                <span class="total-price"></span>
              </td>
            </tr>
          </tfoot>
        </table>
      </li>
      <button class="product-delete-btn hover-navy">선택 상품 삭제하기</button>
    </ul>
    <ul class="table-area">
      <li class="shipping-info">
      <h2>SHIPPING <span>배송 정보</span></h2>
      <table>
        <colgroup>
        <col style="width:150px" />
        <col style="width:auto"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">받으시는 분</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>휴대전화</th>
            <td>
              <input type="number" class="phone-number-input" value="010"> - <input type="number" class="phone-number-input"> - <input type="number" class="phone-number-input">
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <input type="text" class="address1"/> 기본 주소<br />
              <input type="text" class="address2" /> 나머지 주소(선택 입력 가능)
            </td>
          </tr>
          <tr>
            <th>배송 메시지</th>
            <td>
              <input type="text" class="shipping-message"/>
            </td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul>
    <ul class="table-area">
      <li class="payment-info">
      <h2>PAYMENT <span>결제</span></h2>
      <table>
        <colgroup>
        <col style="width:150px" />
        <col style="width:auto"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="total-price">총 결제 금액</th>
            <td>
              <span>10,000 원</span>
            </td>
          </tr>
          <tr>
            <th>결제 계좌</th>
            <td>
              <select id="pay-account">
                <option value="default">은행 이름</option>
                <option value="null" class="no-bank">계좌 없음</option>
              </select>
              <span class="charge"></span>
            </td>
          </tr>
          </tbody>
        </table>
      </li>
      <button class="payment-btn hover-navy">결제하기</button>
    </ul>
  `
}

export { joinForm, logInForm, myShoppingForm, myOrderForm, mainForm, userInfoForm, userAccountForm, detailForm, paymentForm }
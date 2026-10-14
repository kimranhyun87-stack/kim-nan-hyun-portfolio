// 현재 스무스 스크롤과 호버 애니메이션이 모두 CSS로 완벽하게 처리되어 있습니다.
// 추후 팝업 창을 띄우거나, 스크롤 위치에 따라 요소가 나타나는 효과를 넣을 때 이 파일을 활용하세요!
console.log("포트폴리오 스크립트 연결 완료!");
const openFrequencyVideo = document.getElementById("openFrequencyVideo");
const closeFrequencyVideo = document.getElementById("closeFrequencyVideo");
const frequencyVideoModal = document.getElementById("frequencyVideoModal");
const frequencyYoutube = document.getElementById("frequencyYoutube");
const frequencyVideoBackdrop = document.querySelector(
  ".frequency-video-backdrop",
);

function openFrequencyMovie() {
  frequencyVideoModal.classList.add("is-open");
  frequencyVideoModal.setAttribute("aria-hidden", "false");

  frequencyYoutube.src = frequencyYoutube.dataset.src;

  document.body.style.overflow = "hidden";
}

function closeFrequencyMovie() {
  frequencyVideoModal.classList.remove("is-open");
  frequencyVideoModal.setAttribute("aria-hidden", "true");

  /* 닫을 때 영상 재생도 완전히 정지 */
  frequencyYoutube.src = "";

  document.body.style.overflow = "";
}

openFrequencyVideo?.addEventListener("click", openFrequencyMovie);
closeFrequencyVideo?.addEventListener("click", closeFrequencyMovie);
frequencyVideoBackdrop?.addEventListener("click", closeFrequencyMovie);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    frequencyVideoModal?.classList.contains("is-open")
  ) {
    closeFrequencyMovie();
  }
});

const openDigitalVideo = document.getElementById("openDigitalVideo");
const closeDigitalVideo = document.getElementById("closeDigitalVideo");
const digitalVideoModal = document.getElementById("digitalVideoModal");
const digitalYoutube = document.getElementById("digitalYoutube");
const digitalVideoBackdrop = document.querySelector(".digital-video-backdrop");

function openDigitalMovie() {
  digitalVideoModal.classList.add("is-open");
  digitalVideoModal.setAttribute("aria-hidden", "false");

  digitalYoutube.src = digitalYoutube.dataset.src;

  document.body.style.overflow = "hidden";
}

function closeDigitalMovie() {
  digitalVideoModal.classList.remove("is-open");
  digitalVideoModal.setAttribute("aria-hidden", "true");

  /* 팝업 닫을 때 영상 완전히 정지 */
  digitalYoutube.src = "";

  document.body.style.overflow = "";
}

openDigitalVideo?.addEventListener("click", openDigitalMovie);
closeDigitalVideo?.addEventListener("click", closeDigitalMovie);
digitalVideoBackdrop?.addEventListener("click", closeDigitalMovie);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    digitalVideoModal?.classList.contains("is-open")
  ) {
    closeDigitalMovie();
  }
});

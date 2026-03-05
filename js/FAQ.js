function toggle(arrowId, answerId) {
    let arrow = document.getElementById(arrowId);
    let answer = document.getElementById(answerId);
    if (answer.style.maxHeight == "0px") {
        arrow.style.transform = "scaleY(-1)"
        answer.style.marginBottom = "24px";
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
    else {
        arrow.style.transform = "scaleY(1)"
        answer.style.marginBottom = "0px";
        answer.style.maxHeight = "0px";
    }
}

// FAQ 푸터 링크 클릭 → 상단으로 스크롤
const faqFooterTop = document.getElementById("faq-footer-top");
if (faqFooterTop) {
  faqFooterTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
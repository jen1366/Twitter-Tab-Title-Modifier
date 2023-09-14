// Twitterのタブ名を変更する関数
function modifyTwitterTabTitle() {
  const titleTag = document.querySelector('head title');
  if (titleTag) {
    const originalTitle = titleTag.textContent;
    const modifiedTitle = originalTitle.replace(/Xユーザーの/g, '');
    if (modifiedTitle !== originalTitle) {
      titleTag.textContent = modifiedTitle;
      document.title = modifiedTitle; // タブの名前も変更
    }
  }
}

// ページがロードされたらタブ名を変更
window.addEventListener('load', modifyTwitterTabTitle);

// ページ内で DOM 変更があった場合もタブ名を変更
const observer = new MutationObserver(modifyTwitterTabTitle);
observer.observe(document, { childList: true, subtree: true });

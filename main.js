const sortList = list => [...list].sort((a, b) => {
  const A = a.textContent, B = b.textContent;
  return (A < B) ? -1 : (A > B) ? 1 : 0;
});


window.addEventListener("load", function() {
  const ul = document.getElementById("MYList");
  const list = ul.querySelectorAll("li");
  ul.append(...sortList(list));
})

function createObserver(elementToObserve) {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0, 0, 0],
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(elementToObserve);
}

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
    }
  });
}

// import createObserver from "../utils/intersectionObserver";
// import { onMount } from "svelte";

// onMount(() => {
//   const elementsToObserve = document.querySelectorAll("#infocard");

//   elementsToObserve.forEach((element) => {
//     createObserver(element);
//   });
// });

export default createObserver;

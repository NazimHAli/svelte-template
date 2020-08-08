function createObserver(elementToObserve: Element) {
  let observer: IntersectionObserver;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0, 0, 0],
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(elementToObserve);
}

function handleIntersect(entries: any[]) {
  entries.forEach((entry: { isIntersecting: boolean; target: { classList: { remove: (arg0: string) => void; }; }; }) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
    }
  });
}

// Example usage
// import createObserver from "../utils/intersectionObserver";
// import { onMount } from "svelte";

// onMount(() => {
//   const elementsToObserve = document.querySelectorAll("#infocard");

//   elementsToObserve.forEach((element) => {
//     createObserver(element);
//   });
// });

export default createObserver;

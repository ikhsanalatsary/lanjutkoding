import React, { useEffect, useState } from 'react';

export default function ScrollTop() {
  let [onBottomPage, setOnBottomPage] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        // you're at the bottom of the page
        setOnBottomPage(true);
      } else {
        setOnBottomPage(false);
      }
    }
    let listener = window.addEventListener('scroll', handleScroll);

    return () => {
      listener?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return onBottomPage ? (
    <button
      className="fixed bottom-28 right-4 md:right-8 mouse underline focus:outline-none text-sm"
      onClick={() => {
        if (window.location.hash) {
          window.history.replaceState(
            {},
            window.document.title,
            window.location.href.split('#')[0]
          );
        }
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      ⬆ Kembali ke atas
    </button>
  ) : null;
}

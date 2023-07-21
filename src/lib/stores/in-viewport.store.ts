import { writable, type Writable } from 'svelte/store';


const defaultInViewport: string[]  = [];

const inViewportStore: Writable<string[]> = writable(defaultInViewport);

const inViewportStoreObserve = (e: HTMLElement) => {
  if(!e.id) 
    throw new Error('inViewportStoreObserve: element must have an id');

  const observer = new IntersectionObserver(entries => {
    inViewportStore.update((store) => {
      if(entries[0].isIntersecting) 
        return [...store, e.id];
      else
        return store.filter((id) => id !== e.id);
    });
  }, {
    threshold: 0.5
  });

  observer.observe(e);
}

export { inViewportStore, inViewportStoreObserve };


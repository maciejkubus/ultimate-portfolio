class InViewportManager {
  private items: Map<string, boolean>;
  
  constructor() {
    this.items = new Map<string, boolean>();
  }

  public observe(element: HTMLElement, key: string) {
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        this.items.set(key, true);
      } else {
        this.items.set(key, false);
      }
      console.log(entries[0].isIntersecting);
    });
  
    observer.observe(element);
  }

  public isItemVisible(key: string) {
    console.log(this.items.get(key))
    return this.items.get(key);
  }
}

export { InViewportManager };

